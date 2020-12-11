var txtInput = document.querySelector("#input-txt");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function generateURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(error){
    console.log("Error! " + error);
    alert("Servers are down, please come back after some time!");
}

btnTranslate.addEventListener("click", function eventHandler(){
    var inputText = txtInput.value;
    fetch(generateURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
})