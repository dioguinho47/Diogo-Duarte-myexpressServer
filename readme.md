node myserver.mjs to run the server 

#1

In this task, the aim was to create a server and be able to use our translation module to translate the jokes. And use the JokeModuleDemo from the teacher to administrate these jokes one the server.

#2

We have stored our jokes in a separate json file as an array, and translate each given joke both in the english and norwegian language file. 

#3 

With our function getJoke(), we set the translation with the help of our translation module(which we imported) and set translation.setTranslation(translation.english)

#4 

We retrieve our jokes asynchronously from the server using  requestJoke() and creating two buttons and defining the language for both, so that when you click, it retrieves the correct joke in the chosen language.

I used ttps://github.com/mm-207/JokeModuleDemo for the joke.mjs 

