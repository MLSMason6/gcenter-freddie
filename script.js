const games = [
  {
    gameName: "Justin's Game",
    gameAuthor: "Justin Alkire",
    repoLink: "https://github.com/JustinAlkire/redesigned-fiesta",
    gameLink: "https://justinalkire.github.io/redesigned-fiesta/"
  },
  {
    gameName: "colorName",
    gameAuthor: "Mason Schrader",
    repoLink: "https://github.com/MLSMason6/improved-computing-machine-colorName",
    gameLink: "https://mlsmason6.github.io/improved-computing-machine-colorName/"
  },
  {
    gameName: "Escape Room",
    gameAuthor: "Joshua Bradley",
    repoLink: "https://github.com/joshuabrad03/scaling-octo-david",
    gameLink: "https://joshuabrad03.github.io/scaling-octo-david/"
  },
  {
    gameName: "Meh Game",
    gameAuthor: "Evan Sager",
    repoLink: "https://github.com/mrspartan38/dev-david-hw",
    gameLink: "https://mrspartan38.github.io/dev-david-hw/"
  },
  {
    gameName: "Circle Game",
    gameAuthor: "Jodi Gambrell",
    repoLink: "https://github.com/jomlli709/octo-goggles-david-hw/tree/main",
    gameLink: "https://jomlli709.github.io/octo-goggles-david-hw/"
  },
  {
    gameName: "Shooting Star",
    gameAuthor: "Noah Brown",
    repoLink: "https://github.com/Nbrown2002/Dev-David",
    gameLink: "https://nbrown2002.github.io/Dev-David/"
  },
  {
    gameName: "UFO Game",
    gameAuthor: "Whit Brewer",
    repoLink: "Repo Link Template",
    gameLink: "https://whitb43.github.io/UFO-Escape/#"
  },
  {
    gameName: "Battery Charger Game",
    gameAuthor: "Shun Sasaki",
    repoLink: "Repo Link Template",
    gameLink: "https://ssasaki1.github.io/dev-david-lab/"
  },
  {
    gameName: "Rock-Paper-Scissors",
    gameAuthor: "Kethan Pilla",
    repoLink: "https://github.com/KethanPilla/dev-freddie-hw",
    gameLink: "https://kethanpilla.github.io/dev-freddie-hw/"
  },
  {
    gameName: "Wow Game",
    gameAuthor: "Paridhi Malhotra",
    repoLink: "Repo Link Template",
    gameLink: "https://pmalhotra21.github.io/wow-game/"
  },
  {
    gameName: "Square Game",
    gameAuthor: "Allison Lacy",
    repoLink: "Repo Link Template",
    gameLink: "https://allisonlacy.github.io/alligamerepo/"
  },
  {
    gameName: "Spongebob vs Doodlebob",
    gameAuthor: "Alex Nunley",
    repoLink: "https://github.com/a-nunley/dev-david",
    gameLink: "https://a-nunley.github.io/dev-david/"
  },
  {
    gameName: "David V Goliath",
    gameAuthor: "Nick Germann",
    repoLink: "https://github.com/germannnick/Dev-David-Goliath",
    gameLink: "https://germannnick.github.io/Dev-David-Goliath/"
  },
  {
    gameName: "Find the Surprise!",
    gameAuthor: "Tuesday Brown",
    repoLink: "https://github.com/TuesdayAnnB/miniature-enigma-david",
    gameLink: "https://tuesdayannb.github.io/miniature-enigma-david/"
  },
  {
    gameName: "Escape the Garden",
    gameAuthor: "Bailee Strait",
    repoLink: "https://github.com/baileestrait",
    gameLink: "https://baileestrait.github.io/dev-david-lab/"
  },
  {
    gameName: "Vroom",
    gameAuthor: "Jackson Harvey",
    repoLink: "https://github.com/jaxn-harvey/dev-david",
    gameLink: "https://jaxn-harvey.github.io/dev-david/"
  },
  {
    gameName: "Catch the Butterfly",
    gameAuthor: "Isabella Archer",
    repoLink: "https://github.com/iarcher444/dev-david-lab",
    gameLink: "https://iarcher444.github.io/dev-david-lab/"
  },
  {
    gameName: "The Emoji Game",
    gameAuthor: "Milly Trejo",
    repoLink: "https://github.com/mtrejo03/dev-david-hw",
    gameLink: "https://mtrejo03.github.io/dev-david-hw/"
  },
  {
    gameName: "Futbol Mania",
    gameAuthor: "Janet Martinez",
    repoLink: "https://codepen.io/jm-2017/pen/YzmwxZj",
    gameLink: "https://jm-2017.github.io/urban-carnival-nuExample/"
  },
  {
    gameName: "Slides",
    gameAuthor: "Sean Oliver",
    repoLink: "https://github.com/basstbone/dev-david-hw",
    gameLink: "https://basstbone.github.io/dev-david-hw/"
  },
  {
    gameName: "Race Against the Clock: Dr. Cumbie's Time Tangle",
    gameAuthor: "Brittney Daniel",
    repoLink: "https://github.com/bdaniel3/timeTangle",
    gameLink: "https://bdaniel3.github.io/timeTangle/"
  },
  {
    gameName: "Mario Coin Catcher",
    gameAuthor: "Garrett Bouldin",
    repoLink: "https://github.com/gbouldin43/vigilant-giggle-david",
    gameLink: "https://gbouldin43.github.io/vigilant-giggle-david/"
  },
  {
    gameName: "Cow Game",
    gameAuthor: "Spencer Blake",
    repoLink: "https://sblakeuna.github.io/literate-octo-disco-david/#",
    gameLink: "https://sblakeuna.github.io/literate-octo-disco-david/"
  },
  {
    gameName: "Game name Template",
    gameAuthor: "Game Author Template",
    repoLink: "Repo Link Template",
    gameLink: "Game Link Template"
  },
];

const gameContainer = document.getElementById("game-container");

// function to create a card for ever single game and store the data
function generateGameCard(game) {
  const card = document.createElement("div");
  card.classList.add("card");
  
 // card.addClass("col-md-3");
  // let $div = $('div').classList.add("card")
   
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = game.gameName;

  const cardAuthor = document.createElement("p");
  cardAuthor.classList.add("card-text");
  cardAuthor.textContent = `Author: ${game.gameAuthor}`;

  // adds anchor element for buttons and opens in new tab
  const repoLink = document.createElement("a");
  repoLink.classList.add("btn", "btn-secondary");
  repoLink.textContent = "Repo";
  repoLink.href = game.repoLink;
  repoLink.target = "_blank"; 

  const playButton = document.createElement("a");
  playButton.classList.add("btn", "btn-primary");
  playButton.textContent = "Play Game";
  playButton.href = game.gameLink;
  playButton.target = "_blank"; 

  // Append elements to the card body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardAuthor);
  cardBody.appendChild(repoLink);  
  cardBody.appendChild(playButton);

  // adds card body to main card container
  card.appendChild(cardBody);
  gameContainer.appendChild(card);
}

// Loops over each game obj to Generate a card for each game and add to dom
games.forEach(generateGameCard);