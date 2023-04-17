//character stats
var lukeSkywalker = {
  name: "luke skywalker",
  hp: 0,
  attack: 0,
  counterAttack: 0,
};
var darthVader = {
  name: "darth vader",
  hp: 0,
  attack: 0,
  counterAttack: 0,
};
var stormTrooper = {
  name: "storm trooper",
  hp: 0,
  attack: 0,
  counterAttack: 0,
};
var yoda = {
  name: "yoda",
  hp: 0,
  attack: 0,
  counterAttack: 0,
};

var playerChosen = false;
var oppoChose = false;

var character;
var opponent;

var initAttack; // stores initial attack power to add to the power of character

var opponentsDefeated = 0;

function Start() {
  lukeSkywalker.hp = Math.floor(Math.random() * 100 + 100); //random initial HP for each character
  darthVader.hp = Math.floor(Math.random() * 100 + 100);
  stormTrooper.hp = Math.floor(Math.random() * 100 + 100);
  yoda.hp = Math.floor(Math.random() * 100 + 100);

  $(".hp1").text(lukeSkywalker.hp); //display HP in html
  $(".hp2").text(darthVader.hp);
  $(".hp3").text(stormTrooper.hp);
  $(".hp4").text(yoda.hp);

  lukeSkywalker.attack = Math.floor(Math.random() * 6 + 5); //random attack power for each character
  darthVader.attack = Math.floor(Math.random() * 6 + 5);
  stormTrooper.attack = Math.floor(Math.random() * 6 + 5);
  yoda.attack = Math.floor(Math.random() * 6 + 5);

  lukeSkywalker.counterAttack = Math.floor(Math.random() * 16 + 10); //random counter attack power for each character
  darthVader.counterAttack = Math.floor(Math.random() * 16 + 10);
  stormTrooper.counterAttack = Math.floor(Math.random() * 16 + 10);
  yoda.counterAttack = Math.floor(Math.random() * 16 + 10);

  console.log("Luke HP: " + lukeSkywalker.hp);
  console.log("DV HP: " + darthVader.hp);
  console.log("ST HP: " + stormTrooper.hp);
  console.log("Yoda HP: " + yoda.hp);
  console.log("Luke attack: " + lukeSkywalker.attack);
  console.log("DV attack: " + darthVader.attack);
  console.log("ST attack: " + stormTrooper.attack);
  console.log("Yoda attack: " + yoda.attack);
  console.log("Luke counter attack: " + lukeSkywalker.counterAttack);
  console.log("DV counter attack: " + darthVader.counterAttack);
  console.log("ST counter attack: " + stormTrooper.counterAttack);
  console.log("Yoda counter attack: " + yoda.counterAttack);
}

Start();

$("#gamepic1").on("click", function () {
  // click function when choosing characters
  if (!playerChosen) {
    //if no player chosen

    $("#gamepic1").css("display", "none");
    $("#characterPic1").css("display", "inline-block");
    $("#characterLine").css("display", "inline-block");

    playerChosen = true;
    character = lukeSkywalker;
    initAttack = lukeSkywalker.attack;
    console.log(playerChosen);
    console.log(lukeSkywalker);
    console.log(character);
    console.log("character hp:" + character.hp);
    console.log("character attack:" + character.attack);
    console.log("character counter attack:" + character.counterAttack);
    console.log("This is the initial attack power:" + initAttack);
  } else if (!oppoChose) {
    //if player chosen but no opponent
    $("#gamepic1").css("display", "none");
    $("#OppoPic1").css("display", "inline-block");
    $("#vs").css("display", "inline-block");
    $("#oppoLine").css("display", "inline-block");
    $("#attack").css("display", "inline-block");
    $("#gamePLay").empty();

    oppoChose = true;
    opponent = lukeSkywalker;

    $(".hpo").text(opponent.hp);

    console.log(oppoChose);
    console.log(opponent);
  } else {
    return none;
  }
});

$("#gamepic2").on("click", function () {
  if (!playerChosen) {
    $("#gamepic2").css("display", "none");
    $("#characterPic2").css("display", "inline-block");
    $("#characterLine").css("display", "inline-block");

    playerChosen = true;
    character = darthVader;
    initAttack = darthVader.attack;
    console.log(playerChosen);
    console.log(darthVader);
    console.log(character);
    console.log("character hp:" + character.hp);
    console.log("character attack:" + character.attack);
    console.log("character counter attack:" + character.counterAttack);
    console.log("This is the initial attack power:" + initAttack);
  } else if (!oppoChose) {
    $("#gamepic2").css("display", "none");
    $("#OppoPic2").css("display", "inline-block");
    $("#vs").css("display", "inline-block");
    $("#oppoLine").css("display", "inline-block");
    $("#attack").css("display", "inline-block");
    $("#gamePLay").empty();

    oppoChose = true;
    opponent = darthVader;

    $(".hpo").text(opponent.hp);

    console.log(oppoChose);
    console.log(opponent);
  } else {
    return none;
  }
});

$("#gamepic3").on("click", function () {
  if (!playerChosen) {
    $("#gamepic3").css("display", "none");
    $("#characterPic3").css("display", "inline-block");
    $("#characterLine").css("display", "inline-block");

    playerChosen = true;
    character = stormTrooper;
    initAttack = stormTrooper.attack;
    console.log(playerChosen);
    console.log(stormTrooper);
    console.log(character);
    console.log("This is the initial attack power:" + initAttack);
  } else if (!oppoChose) {
    $("#gamepic3").css("display", "none");
    $("#OppoPic3").css("display", "inline-block");
    $("#vs").css("display", "inline-block");
    $("#oppoLine").css("display", "inline-block");
    $("#attack").css("display", "inline-block");
    $("#gamePLay").empty();

    oppoChose = true;
    opponent = stormTrooper;

    $(".hpo").text(opponent.hp);

    console.log(oppoChose);
    console.log(opponent);
  } else {
    return none;
  }
});

$("#gamepic4").on("click", function () {
  if (!playerChosen) {
    $("#gamepic4").css("display", "none");
    $("#characterPic4").css("display", "inline-block");
    $("#characterLine").css("display", "inline-block");

    playerChosen = true;
    character = yoda;
    initAttack = yoda.attack;
    console.log(playerChosen);
    console.log(yoda);
    console.log(character);
    console.log("This is the initial attack power:" + initAttack);
  } else if (!oppoChose) {
    $("#gamepic4").css("display", "none");
    $("#OppoPic4").css("display", "inline-block");
    $("#vs").css("display", "inline-block");
    $("#oppoLine").css("display", "inline-block");
    $("#attack").css("display", "inline-block");
    $("#gamePLay").empty();

    oppoChose = true;
    opponent = yoda;

    $(".hpo").text(opponent.hp);

    console.log(oppoChose);
    console.log(opponent);
  } else {
    return none;
  }
});

if (!oppoChose) {
  $("#attack").css("display", "none");
}

$("#attack").on("click", function () {
  if (oppoChose) {
    $("#gamePLay").text(
      "You attacked " +
        opponent.name +
        " with " +
        character.attack +
        "x power. He attacked back with " +
        opponent.counterAttack +
        "x power. "
    ); // display yours and opponnet attack power on screen
    character.hp = character.hp - opponent.counterAttack; //character hp after attack
    opponent.hp = opponent.hp - character.attack; // opponent hp after attack
    character.attack = character.attack + initAttack; // increases the attack power by the initial amount after every attack

    $(".hpc").text(character.hp);
    $(".hpo").text(opponent.hp);
    $("#gamePLay").append("your remaning hp is " + character.hp); //checking that character.hp is same as *.hp for chosen fighter

    if (character.hp <= 0) {
      lose();
    } else if (opponent.hp <= 0) {
      winRound();
    }

    console.log("Character hp:" + character.hp);
    console.log("Opponent hp:" + opponent.hp);
    console.log("Attack power:" + character.attack);
  } else {
    return none;
  }
});

function winRound() {
  //check if 3 wins here and set up for new opponent
  opponentsDefeated++;

  if (opponentsDefeated === 3) {
    winGame();
  } else {
    oppoChose = false;
    $("#attack").css("display", "none");
    $("#gamePLay").text("you win this round, choose a new opponent");
    $("#OppoPic1, #OppoPic2, #OppoPic3, #OppoPic4").css("display", "none");

    console.log("#Opponents defeated:" + opponentsDefeated);
  }
}

function lose() {
  $("#gamePLay").text("you died");
  $("#attack").css("display", "none");
  $("#reset").css("display", "inline-block");
}

function winGame() {
  $("#gamePLay").text("you have won the galaxy");
  $("#attack").css("display", "none");
  $("#reset").css("display", "inline-block");
}

function Reset() {
  $("#reset").css("display", "none");

  $("#gamepic1, #gamepic2, #gamepic3, #gamepic4").css(
    "display",
    "inline-block"
  );

  $("#characterPic1, #characterPic2, #characterPic3, #characterPic4").css(
    "display",
    "none"
  );

  $("#OppoPic1, #OppoPic2, #OppoPic3, #OppoPic4").css("display", "none");

  $("#characterLine, #vs, #oppoLine").css("display", "none");

  $("#gamePLay").empty();

  $("#attack").css("display", "none");

  opponentsDefeated = 0;
  playerChosen = false;
  oppoChose = false;

  Start();

  console.log("#Opponents defeated:" + opponentsDefeated);
}

$("#reset").on("click", function () {
  Reset();
});
