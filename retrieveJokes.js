let myBtn = document.getElementById('myBtn');
let myBtn2 = document.getElementById('myBtn2');
let myTxt = document.getElementById('myTxt');
let jokeTranslations = "/jokes/english";

    requestJoke();

    async function requestJoke(){
        let resp = await fetch(jokeTranslations);
        let data = await resp.text();

        myTxt.innerText = data;
    }

    function englishButton(){
        jokeTranslations = "/jokes/english";
        requestJoke();
    }

    function norwegianButton(){
        jokeTranslations = "/jokes/norwegian";
        requestJoke();
    }

    myBtn.addEventListener('click', englishButton);
    myBtn2.addEventListener('click', norwegianButton);