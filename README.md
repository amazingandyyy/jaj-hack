# jaj-hack
- jaj stands for Janothon-Andy-Jimmy's 
- hack stands for our hack in [Techcrunch Disrupt Hackathon](https://techcrunch.com/event-info/disrupt-sf-2017/disrupt-sf-20thon/) on 9/16~9/17/2017 @pier 48, SF

### The Problem
- victims in a disaster/misfortunate event/lost/... need immedaite help and rescue
- victims potentially(usually) have poor/unstable internet access

### Solution
- build a communication interfase with low-internet requirement
![image](https://github.com/amazingandyyy/jaj-hack/blob/master/TC_Disrupt_201709/TC_Disrupt_201709.005.png?raw=true)

### What We Achieve (the workflow)
![image2](https://github.com/amazingandyyy/jaj-hack/blob/master/TC_Disrupt_201709/TC_Disrupt_201709.006.png?raw=true)
- build a simple SMS server to resieve user's(victims's) message, then peompt user to go to [this](http://www.amazingandyyy.com/jaj-hack/) minimunal site to fetch the victim's current geolocation and then send the coordination back to our server via SMS message.
- The backend does folloing tasks
  - register a victim in db 
  - send message to victim to ask for location
  - update coordinates info in the db
  - make db publicly available

### Tech Stack
- Map Dashboard with [esri](https://www.esri.com/en-us/home) Map API
- SMS communication with [nexmo](https://developer.nexmo.com/) SMS webhook API
- Data generating and analysis in R language
- Database in MongoDB, mongoose
- GPS fetching with JS [geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) API
- Temporary server with [ngrok](https://ngrok.com/)

-- 
### Author
- [Johnathan Chen](https://github.com/johnathanachen) for map webapp
- [Andy Chen](https://github.com/amazingandyyy) for backend api and db
- [Jimmy Lin](https://github.com/mcknote) for generating mockup data with R language

### License
[MIT](https://github.com/amazingandyyy/jaj-hack/blob/master/LICENSE)

### Resourse
- check full presentation in [pdf](https://github.com/amazingandyyy/jaj-hack/blob/master/TC_Disrupt_201709.pdf) or [png](https://github.com/amazingandyyy/jaj-hack/tree/master/TC_Disrupt_201709)

