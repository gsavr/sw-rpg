//character stats
var lukeSkywalker = {
    hp: 0,
    attack: 0,
    //attackInit: attack,
    counterAttack: 0,
}
var darthVader = {
    hp: 0,
    attack: 0,
    counterAttack: 0,
}
var stormTrooper = {
    hp: 0,
    attack: 0,
    counterAttack: 0,
}
var yoda = {
    hp: 0,
    attack: 0,
    counterAttack: 0,
}

var playerChosen = false;
var oppoChose = false;

var character;
var opponent;

var initAttack; //keep going from here - - make initAttack = attack in the part where you choose the character

function Start(){
    lukeSkywalker.hp = Math.floor(Math.random() * 100 + 100); //choose initial HP for each character
    darthVader.hp = Math.floor(Math.random() * 100 + 100);
    stormTrooper.hp = Math.floor(Math.random() * 100 + 100);
    yoda.hp = Math.floor(Math.random() * 100 + 100);

    $(".hp1").text(lukeSkywalker.hp); //display HP in html
    $(".hp2").text(darthVader.hp);
    $(".hp3").text(stormTrooper.hp);
    $(".hp4").text(yoda.hp);

    lukeSkywalker.attack = Math.floor(Math.random() * 6 + 5); //choose attack power for each character
    darthVader.attack = Math.floor(Math.random() * 6 + 5);
    stormTrooper.attack = Math.floor(Math.random() * 6 + 5);
    yoda.attack = Math.floor(Math.random() * 6 + 5);

    lukeSkywalker.counterAttack = Math.floor(Math.random() * 16 + 10); //choose counter attack power for each character
    darthVader.counterAttack = Math.floor(Math.random() * 16 + 10);
    stormTrooper.counterAttack = Math.floor(Math.random() * 16 + 10);
    yoda.counterAttack = Math.floor(Math.random() * 16 + 10);

    console.log("Luke HP: "+lukeSkywalker.hp)
    console.log("DV HP: "+darthVader.hp)
    console.log("ST HP: "+stormTrooper.hp)
    console.log("Yoda HP: "+yoda.hp)
    console.log("Luke attack: "+lukeSkywalker.attack)
    console.log("DV attack: "+darthVader.attack)
    console.log("ST attack: "+stormTrooper.attack)
    console.log("Yoda attack: "+yoda.attack)
    console.log("Luke counter attack: "+lukeSkywalker.counterAttack)
    console.log("DV counter attack: "+darthVader.counterAttack)
    console.log("ST counter attack: "+stormTrooper.counterAttack)
    console.log("Yoda counter attack: "+yoda.counterAttack)
}

Start()

$("#gamepic1").on("click", function(){
    if(!playerChosen){

        $("#gamepic1").css("display","none");
        $("#characterPic1").css("display","inline-block");
        $("#characterLine").css("display","inline-block");
        
        playerChosen=true;
        character=lukeSkywalker;
        initAttack = lukeSkywalker.attack;
        console.log(playerChosen)
        console.log(character)
        console.log("character hp:"+character.hp)
        console.log("character attack:"+character.attack)
        console.log("character counter attack:"+character.counterAttack)
        console.log("This is the initial attack power:"+initAttack)
    }
    else if(!oppoChose){
        $("#gamepic1").css("display","none");
        $("#OppoPic1").css("display","inline-block");
        $("#vs").css("display","inline-block");
        $("#oppoLine").css("display","inline-block");

        oppoChose=true;
        opponent=lukeSkywalker;
        console.log(oppoChose)
        console.log(opponent)
    }
    else{
        return none;
    }
});

$("#gamepic2").on("click", function(){
    if(!playerChosen){

        $("#gamepic2").css("display","none");
        $("#characterPic2").css("display","inline-block");
        $("#characterLine").css("display","inline-block");

        playerChosen=true;
        character=darthVader;
        initAttack = darthVader.attack;
        console.log(playerChosen)
        console.log(character)
        console.log("This is the initial attack power:"+initAttack)
    }
    else if(!oppoChose){
        $("#gamepic2").css("display","none");
        $("#OppoPic2").css("display","inline-block");
        $("#vs").css("display","inline-block");
        $("#oppoLine").css("display","inline-block");

        oppoChose=true;
        opponent=darthVader;
        console.log(oppoChose)
        console.log(opponent)
    }
    else{
        return none;
    }
});

$("#gamepic3").on("click", function(){
    if(!playerChosen){

        $("#gamepic3").css("display","none");
        $("#characterPic3").css("display","inline-block");
        $("#characterLine").css("display","inline-block");

        playerChosen=true;
        character=stormTrooper;
        initAttack = stormTrooper.attack;
        console.log(playerChosen)
        console.log(character)
        console.log("This is the initial attack power:"+initAttack)
    }
    else if(!oppoChose){
        $("#gamepic3").css("display","none");
        $("#OppoPic3").css("display","inline-block");
        $("#vs").css("display","inline-block");
        $("#oppoLine").css("display","inline-block");

        oppoChose=true;
        opponent=stormTrooper;
        console.log(oppoChose)
        console.log(opponent)
    }
    else{
        return none;
    }
});

$("#gamepic4").on("click", function(){
    if(!playerChosen){

        $("#gamepic4").css("display","none");
        $("#characterPic4").css("display","inline-block");
        $("#characterLine").css("display","inline-block");

        playerChosen=true;
        character=yoda;
        initAttack = yoda.attack;
        console.log(playerChosen)
        console.log(character)
        console.log("This is the initial attack power:"+initAttack)
    }
    else if(!oppoChose){
        $("#gamepic4").css("display","none");
        $("#OppoPic4").css("display","inline-block");
        $("#vs").css("display","inline-block");
        $("#oppoLine").css("display","inline-block");

        oppoChose=true;
        opponent=yoda;
        console.log(oppoChose)
        console.log(opponent)
    }
    else{
        return none;
    }
});

$("#attack").on("click", function(){  //**/need an if opponent=false then return none
    $("#gamePLay").text("You attacked your opponent with "+character.attack+"x power. He attacked back with "+opponent.counterAttack+"x power") // display your and opponnet attack power on screen
    character.hp=character.hp - opponent.counterAttack; //character hp after attack
    opponent.hp=opponent.hp - character.attack; // opponent hp after attack
    character.attack=character.attack + initAttack; // increases the attack power by the initial amount after every attack

    $(".hp1").text(lukeSkywalker.hp); //display HP in html
    $(".hp2").text(darthVader.hp);
    $(".hp3").text(stormTrooper.hp);
    $(".hp4").text(yoda.hp);

    //gamePlay()

    if(character.hp<=0){
        lose()
    }

    else if(opponent.hp<=0){
        winRound()
    }

    else if(((lukeSkywalker.hp<=0)&&(darthVader.hp<=0)&&(stormTrooper.hp<=0)&&(character=yoda))||((character=lukeSkywalker)&&(darthVader.hp<=0)&&(stormTrooper.hp<=0)&&(yoda.hp<=0))||((lukeSkywalker.hp<=0)&&(character=darthVader)&&(stormTrooper.hp<=0)&&(yoda.hp<=0))||((lukeSkywalker.hp<=0)&&(darthVader.hp<=0)&&(character=stormTrooper)&&(yoda.hp<=0))){
        winGame()
    }

    console.log("Character hp:"+character.hp)
    console.log("Opponent hp:"+opponent.hp)
    console.log("Attack power:"+character.attack)
});

/* function gamePlay(){
    /* if(opponent=lukeSkywalker){
        opponent="luke skywalker"
    }
    else if(opponent=darthVader){
        opponent="darth vader"
    }
    else if(opponent=stormTrooper){
        opponent="storm trooper"
    }
    else if(opponent=yoda){
        opponent="yoda"
    } 
    $("#gamePLay").text("You attacked "+opponent+" with "+character.attack+"x power") */
    
    
//}

function winRound(){
    oppoChose=false;
    $("#gamePLay").text("you win this round, choose a new opponent");
    $("#OppoPic1, #OppoPic2, #OppoPic3, #OppoPic4").css("display","none");
}

function lose(){
    $("#gamePLay").text("you died");
    $("#attack").css("display","none");
    $("#reset").css("display","inline-block")
}

function winGame(){
    $("#gamePLay").text("you have won the galaxy");
    $("#attack").css("display","none");
    $("#reset").css("display","inline-block")
}

function Reset(){
    $("#reset").css("display","none")

    $("#gamepic1, #gamepic2, #gamepic3, #gamepic4").css("display","inline-block");
    
    $("#characterPic1, #characterPic2, #characterPic4, #characterPic4").css("display","none");

    $("#OppoPic1, #OppoPic2, #OppoPic3, #OppoPic4").css("display","none");

    $("#characterLine, #vs, #oppoLine").css("display","none");

    $("#gamePLay").empty();

    $("#attack").css("display","inline-block");
    
    playerChosen = false;
    oppoChose = false;

    Start()
}

$("#reset").on("click", function(){
    Reset()
});






