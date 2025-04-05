// Liste des names
var names = ["mohamed", "aboubakeer", "ali", "hamza", "jakani"];

// Boucle sur chaque nom
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  // Si le nom commence par 'j', utilise byeSpeaker
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } 
  // Sinon, utilise helloSpeaker
  else {
    helloSpeaker.speak(names[i]);
  }
}