const { hasUncaughtExceptionCaptureCallback } = require("process");

const RACES = ["Aarakocra", "Aasimar", "Bugbear", "Centaur", "Changeling", "Dragonborn", "Dwarf", "Elf", "Fairy", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half elf", 
    "Half orc", "Halfing", "Harengon", "Hobgoblin", "Human", "Kalashtar", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Owlin", "Satyr", "Shifter", 
    "Simic Hybrid", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalken", "Warforged", "Yuan-Ti Pureblood"];
const CLASSES = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"];
const BACKGROUNDS = ["Acolyte", "Caravan Specialist", "Charlatan", "City Watch", "Clan Crafter", "Courtier", "Criminal", "Entertainer", "Far Traveler", "Folk Hero", 
    "Gladiator", "Gambler", "Guild Artisan", "Hermit", "Investigator", "Mercenary Veteran", "Noble", "Outlander", "Sailor", "Soldier", "Urban Bounty Hunter", "Urchin"];
const TRAITS = ["can find common ground between the fiercest enemies, empathizing with them and always working toward peace", "quote (or misquote) sacred texts and proverbs in almost every situation", "have a joke for every occasion, especially occasions where humor is inappropriate", 
"lie about almost everything, even when there's no good reason to", "always have a plan for what to do when things go wrong", "are guaranteed to do something if they’re told they can't do it", 
"know a story relevant to almost every situation", "get bitter if they’re not the center of attention", "judge people by their actions, not their words", "misuse long words in an attempt to sound smarter",
"are a snob who looks down on those who can't appreciate fine art", "don't part with money easily and will haggle tirelessly to get the best deal possible", "are oblivious to etiquette and social expectations",
"often get lost in their own thoughts and contemplation, becoming oblivious to their surroundings", "take great pains to always look their best and follow the latest fashions", "treat their enemies to a scorched-earth policy",
"are driven by a wanderlust that led them away from home", "are always picking things up, absently fiddling with them, and sometimes accidentally breaking them", "feel far more comfortable around animals than people",
"work hard so that they can play hard when the work is done", "never pass up a friendly wager", "use language as foul as an otyugh nest", "are haunted by memories of war - they can't get the images of violence out of their mind",
"have lost too many friends, so they are slow to make new ones.", "can stare down a hellhound without flinching", "enjoy being strong and like breaking things", "face problems head-on - a simple, direct solution is the best path to success",
"hide scraps of food and trinkets away in their pockets", "bluntly say what other people are hinting at or hiding"];


const FLAWS = ["judge others harshly, and themselves even more severely", "are inflexible in their thinking","are suspicious of strangers and expect the worst of them", 
    "become obsessed with their goals to the detriment of everything else in their life","can't resist a pretty face","always forget plans. If they don’t forget it, they’ll ignore it", 
    "turn tail and run when things look bad","are secretly (or not so secretly) convinced of the superiority of their own culture over others", 
    "have trouble keeping their true feelings hidden; their sharp tongue constantly lands them in trouble","are quick to assume that someone is trying to cheat them",
    "are never satisfied with what they have - they always want more","let their need to win arguments overshadow friendships and harmony","would risk too much to uncover a lost bit of knowledge",
    "like keeping secrets and won't share them with anyone","secretly believe that everyone is beneath them","hide a truly scandalous secret that could ruin their family forever",
    "hear veiled insults and threats in every word addressed to them","believe there’s no room for caution in a life lived to the fullest",
    "remember every insult they’ve received, nursing a silent resentment toward anyone who has ever wronged them","follow orders, even if they think they're wrong",
    "never back down, no matter how dangerous the situation gets, when their courage is called into question","will probably be destroyed by their pride",
    "have little respect for anyone who is not a proven warrior","are blinded by their hatred of their enemies","would rather eat their armor than admit when they’re wrong",
    "would rather kill someone in their sleep than fight fair"];

const BONDS = [];


const QUIRKS = ["speak exclusively in rhymes", "bite their nails", "clutch onto their belongings when they sleep", "space out easily", "stub their toes frequently", "have unusually long arms" ,
"have unusually long legs", "tuck their hair behind their ears frequently", "have a soft, raspy voice", "have a loud, booming voice, regardless of the situation", "are ambidextrous", 
"clean belongings & surroundings as a nervous habit", "are extremely sloppy", "despise cheese", "are a pathological liar", "rarely laugh", "are an adrenaline junkie", "are overly cautious",
"cry when they see small animals", "hate cute things", "are excessively polite", "are excessively rude", "cook well, no matter what it is", "arrive extremely late", "arrive extremely early",
"have terrible handwriting", "have gorgeous handwriting", "are afraid of spiders", "dress in one color", "are frequently overdressed for every occasion", "are frequently underdressed for every occasion",
"do not wear shoes", "hate being indoors", "do a lot of meal prep - usually a ten days in advance", "hum when focused", "always take meals with bread", "give perfect presents", 
"give terrible presents", "leave notes in books for future readers", "assume others’ motives too easily", "actively seek approval from others", "always sleep on the floor", 
"chew on their inner lip when thinking", "don’t let their food touch, and they always finish one section before moving on", "always mix all their foods together", 
"make very intense eye contact when listening", "avoid eye contact at all times", "barely chew before swallowing food", "constantly snack on things", 
"adjust their sleeves frequently", "enter rooms carefully", "speedwalk at all times", "are a slow walker", "are touchy-feely with others", "refuse to touch others", 
"like to swing their legs around when seated", "bounce their knee when seated", "are always too cold", "are always too warm", "show stress through a subconscious eyetwitch", 
"restate things several time for clarification", "gesture a lot when speaking", "avoid speaking more than necessary", "make nicknames for everyone", 
"have wrinkly clothes due to never folding their laundry", "always take notes in a small book", "are forgetful"
];

//const asasd = ["do a lot of meal prep - usually a ten days in advance", "hum when focused", "always take meals with bread", "give perfect presents", "give terrible presents", "leave notes in books for future readers", "assume others’ motives too easily", "actively seek approval from others", "always sleep on the floor", "chew on their inner lip when thinking", "don’t let their food touch, and they always finish one section before moving on", "always mix all their foods together", "make very intense eye contact when listening", "avoid eye contact at all times", "barely chew before swallowing food", "constantly snack on things", "adjust their sleeves frequently", "enter rooms carefully", "speedwalk at all times", "are a slow walker", "are touchy-feely with others", "refuse to touch others", "like to swing their legs around when seated", "bounce their knee when seated", "are always too cold", "are always too warm", "show stress through a subconscious eyetwitch", "restate things several time for clarification", "gesture a lot when speaking", "avoid speaking more than necessary", "make nicknames for everyone", "have wrinkly clothes due to never folding their laundry", "always take notes in a small book", "are forgetful"];

let characterString = ["This character is a ", "[RACE]", " ", "[CLASS]", " with a background as a(n) ", "[BACKGROUND]", "They stand at ",
    "[HEIGHT]", " and weigh ", "[WEIGHT]", " lbs.", "Something obvious to many is that they ", "[TRAIT]",
    ". They also ", "[QUIRK]", ". And they may not be fully aware of it, but they ", "[FLAW]", ". Still, deep down, they",
    "[BOND]" + "."];

// button onclick
function generateCharacter(){
    let race, playerclass, background, height, weight, trait, quirk, bond;

    // Fill in attributes according to grammar rules
    console.log("Generating a character...");
    race = RACES[random(RACES.length)];

    playerclass = CLASSES[random(CLASSES.length)];

    background = BACKGROUNDS[random(BACKGROUNDS.length)];

    trait = TRAITS[random(TRAITS.length)]

    quirk = QUIRKS[random(QUIRKS.length)]

    flaw = FLAWS[random(FLAWS.length)]


    // Fill in the finished string
    characterString[1] = race;
    characterString[3] = playerclass;
    characterString[6] = background;
    //characterString[8] = height;
    //characterString[10] = weight;
    characterString[13] = trait;
    characterString[15] = quirk;
    characterString[17] = flaw;
    //characterString[18] = bond;

    document.getElementById("results").innerHTML = characterString.join('');

}

function random(max){
    return Math.floor(Math.random() * max)

}