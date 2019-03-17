//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

var consoleDisplay = document.getElementById('ConsoleDisplay');
var addBreak = document.createElement('br');
var sideNav = document.getElementById('SideNav');
var addHeadline = document.createElement('h3');
var executeHeadline = sideNav.appendChild(addHeadline);
var willYouDonate = "";
var allArticles = document.getElementsByTagName("article");

function redHeadline() {
  for(i=0; i<allArticles.length; i++) {
    allArticles[i].classList.add("generous-donation");
  }
}

function noRedHeadline() {
  for(i=0; i<allArticles.length; i++) {
    allArticles[i].classList.remove("generous-donation");
  }
}

function getAuthorAndYearString (speaker){
  consoleDisplay.innerHTML = 'This Speech was written by ' + speaker.author + ' in ' + speaker.year + "."
;}

function displayBCEString (speaker) {
  if(speaker.yearIsBCE === true){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place before the common era.';
  }else{
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This speech took place during the common era.';
  }
}

function getOldestOrYoungestSTring (speaker) {
  var oldest = speechesArray[0].year,
  newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speaker.year === oldest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }

  if(speaker.year === newest){
    consoleDisplay.appendChild(addBreak);
    consoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  willYouDonate = window.prompt('How much would you like to donate?');

  if(willYouDonate<100){
    addHeadline.setAttribute("style", "color:white");
    addHeadline.innerHTML = "Thank you for your donation of $" + willYouDonate;
    noRedHeadline();
  }else if(willYouDonate>=100){
    addHeadline.setAttribute("style", "color:red");
    addHeadline.innerHTML = "Thank you for your generous donation!";
    redHeadline();
  }else{
    addHeadline.setAttribute("style", "color:white");
    addHeadline.innerHTML = "Type a number!";
    noRedHeadline();
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  getAuthorAndYearString(speechesArray[0]);
  displayBCEString(speechesArray[0]);
  getOldestOrYoungestSTring(speechesArray[0]);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

  getAuthorAndYearString(speechesArray[1]);
  displayBCEString(speechesArray[1]);
  getOldestOrYoungestSTring(speechesArray[1]);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  getAuthorAndYearString(speechesArray[2]);
  displayBCEString(speechesArray[2]);
  getOldestOrYoungestSTring(speechesArray[2]);
});

