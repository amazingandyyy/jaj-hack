var Victim = require('./model');
var Nexmo = require('nexmo');
var nexmo = new Nexmo({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
});

module.exports = function(p){
    console.log(p.msisdn)
    Victim.findOne({
        msisdn: p.msisdn
    }).then(dbPerson=>{
        if(!dbPerson){
            Victim.create(p).then(newPerson=>{
                console.log('newPerson');
                newPerson.messages.push(p.text);
                newPerson.save().then(()=>{
                    Victim.findOne({
                        msisdn: newPerson.msisdn
                    }).then(data=>{
                        nexmo.message.sendSms(process.env.NUMBER, p.msisdn, 'hello: where are you: https://www.amazingandyyy.com/jaj-hack/');
                        return console.log('data', data)
                    })
                })
            })
        }else{
            var text = p.text;
            if(text.match('#Location = ')){
                var long = text.split('#Location = ')[1].split(', ')[0];
                var lat = text.split('#Location = ')[1].split(', ')[1];
                dbPerson.coordinates.push(
                    {
                        LON: long,
                        LAT: lat,
                        timestamp: p['message-timestamp']
                    }
                )
            }
            dbPerson.messages.push({
                content: p.text,
                timestamp: p['message-timestamp']
            });
            nexmo.message.sendSms(process.env.NUMBER, p.msisdn, 'Update you location here: https://www.amazingandyyy.com/jaj-hack/');
            dbPerson.save().then(()=>{
                Victim.findOne({
                    msisdn: dbPerson.msisdn
                }).then(data=>{
                    return console.log('data', data)
                })
            })
        }
    }).catch(err=>console.log('err', err));
}
