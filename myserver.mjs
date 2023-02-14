import express from 'express'
import Jokes from "./joke.mjs"
import Translation  from './Translation.mjs';
import JokesList from './jokes.json' assert {type:'json'};

const joke = new Jokes(JokesList);
const translation = new Translation();

const server = express();
const port = (process.env.PORT || 8080);
server.set('port', port);

server.use(express.static('public'));

server.get("/jokes/:lang", getJoke);

function getJoke(req, res, next){
    const lang = req.params.lang;
    let myJoke = joke.tellAJoke();

    if(lang === "english"){
        translation.setTranslation(translation.english);

    }else{

        translation.setTranslation(translation.norwegian);
    }

    let translatedJoke = translation.get(myJoke);
    res.end(translatedJoke);
}

server.listen(server.get('port'), function(){
    console.log('The server is running in port:', server.get('port'));
});