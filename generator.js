// All generator code here
const RACES = ["Aarakocra", "Aasimar", "Bugbear", "Centaur", "Changeling", "Dragonborn", "Dwarf", "Elf", "Fairy", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half elf", 
    "Half orc", "Halfing", "Harengon", "Hobgoblin", "Human", "Kalashtar", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Owlin", "Satyr", "Shifter", 
    "Simic Hybrid", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalken", "Warforged", "Yuan-Ti Pureblood"];
const CLASSES = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"];
const BACKGROUNDS = {};

// button onclick
function generateCharacter(){
    console.log("Generating a character...");
    var randomRaceIndex = Math.floor(Math.random() * RACES.length);
    console.log(RACES[randomRaceIndex]);
    document.getElementById('race').innerHTML = RACES[randomRaceIndex];
    var randomClassIndex = Math.floor(Math.random() * CLASSES.length);
    console.log(CLASSES[randomClassIndex]);
    document.getElementById('class').innerHTML = CLASSES[randomClassIndex];
}