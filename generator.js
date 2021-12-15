// All generator code here
const RACES = ["Aarakocra", "Aasimar", "Bugbear", "Centaur", "Changeling", "Dragonborn", "Dwarf", "Elf", "Fairy", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half elf", 
    "Half orc", "Halfing", "Harengon", "Hobgoblin", "Human", "Kalashtar", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Owlin", "Satyr", "Shifter", 
    "Simic Hybrid", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalken", "Warforged", "Yuan-Ti Pureblood"];
const CLASSES = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"];
const BACKGROUNDS = ["Acolyte", "Caravan Specialist", "Charlatan", "City Watch", ];
let characterString = ["This character is a ", "[RACE]", " ", "[CLASS]", " with a background as a(n) ", "[BACKGROUND]", "They stand at ",
    "[HEIGHT]", " and weigh ", "[WEIGHT]", " lbs.", "Something obvious to many is that they ", "[TRAIT].",
    "They also ", "[QUIRK].", "And they may not be fully aware of it, but they ", "[FLAW].", " Still, deep down, they",
    "[BOND]."];

// button onclick
function generateCharacter(){
    let race, playerclass, background, height, weight, trait, quirk, bond;

    // Fill in attributes according to grammar rules
    console.log("Generating a character...");
    let randomRaceIndex = random(RACES.length);
    // console.log(RACES[randomRaceIndex]);
    race = RACES[randomRaceIndex];

    let randomClassIndex = random(CLASSES.length);
    //console.log(CLASSES[randomClassIndex]);
    playerclass = CLASSES[randomClassIndex];


    // Fill in the finished string
    characterString[1] = race;
    characterString[3] = playerclass;
    //characterString[6] = background;
    //characterString[8] = height;
    //characterString[10] = weight;
    //characterString[13] = trait;
    //characterString[15] = quirk;
    //characterString[17] = flaw;
    //characterString[18] = bond1;

    document.getElementById("results").innerHTML = characterString.join('');

}

function random(max){
    return Math.floor(Math.random() * max)

}