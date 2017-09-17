var Victim = require('./model');

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
                        return console.log('data', data)
                    })
                })
            })
        }else{
            dbPerson.messages.push(p.text);
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
