console.log(
    'It works'
);

// CodeFlow Übung lev3_1:js-einführung_function-onclick

/*
- Erstelle 4 SuperBalls um die Hintergrundfarbe und Farbe vom <body>+<h1> zu ändern. 
- Nutzt CSS um die Elemente zu stylen. (Tipp: linear-gradient)
- Nun schreibe in JS jeweils eine eigene Funktion für die Elemente.
- Wenn der Benutzer auf die SuperBalls klickt, wird die “background-color” vom body und die “Color” von H1 geändert.
- Nachdem du diese Schritte befolgt hast, teste mit Klick dein Ergebnis. Viel Spaß!
*/

let header = document.querySelector('h1')

header.innerHTML = 'Change Background & Text Color'

function style1(){
    document.body.style.color = "#87059b";
    document.body.style.background = "#1a9807";
}

function style2(){
    document.body.style.color = "#c5a504";
    document.body.style.background = "#2c204e";
}

function style3(){
    document.body.style.color = "#c57104";
    document.body.style.background = "#000000";
}

function style4(){
    document.body.style.color = "#0492c5";
    document.body.style.background = "#040fdd";
}
