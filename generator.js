const RACES = ["an Aarakocra", "an Aasimar", "a Bugbear", "a Centaur", "a Changeling", "a Dragonborn", "a Dwarf", "an Elf", "a Fairy", "a Firbolg", "a Genasi", "a Gith", "a Gnome", "a Goblin", "a Goliath", "a Half-elf", 
    "a Half-orc", "a Halfing", "a Harengon", "a Hobgoblin", "a Human", "a Kalashtar", "a Kenku", "a Kobold", "a Leonin", "a Lizardfolk", "a Loxodon", "a Minotaur", "an Orc", "an Owlin", "a Satyr", "a Shifter", 
    "a Simic Hybrid", "a Tabaxi", "a Tiefling", "a Tortle", "a Triton", "a Vedalken", "a Warforged", "a Yuan-Ti Pureblood"];
const CLASSES = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer"];
const BACKGROUNDS = ["an Acolyte", "a Caravan Specialist", "a Charlatan", "a City Watch member", "a Clan Crafter", "a Courtier", "a Criminal", "an Entertainer", "a Far Traveler", "a Folk Hero", 
    "a Gladiator", "a Gambler", "a Guild Artisan", "a Hermit", "an Investigator", "a Mercenary Veteran", "a Noble", "an Outlander", "a Sailor", "a Soldier", "an Urban Bounty Hunter", "an Urchin"];

const TRAITS = ["can find common ground between the fiercest enemies, empathizing with them and always working toward peace", "quote (or misquote) sacred texts and proverbs in almost every situation", "have a joke for every occasion, especially occasions where humor is inappropriate",
    "lie about almost everything, even when there's no good reason to", "always have a plan for what to do when things go wrong", "are guaranteed to do something if they're told they can't do it", 
    "know a story relevant to almost every situation", "get bitter if they're not the center of attention", "judge people by their actions, not their words", "misuse long words in an attempt to sound smarter",
    "are a snob who looks down on those who can't appreciate fine art", "don't part with money easily and will haggle tirelessly to get the best deal possible", "are oblivious to etiquette and social expectations",
    "often get lost in their own thoughts and contemplation, becoming oblivious to their surroundings", "take great pains to always look their best and follow the latest fashions", "treat their enemies to a scorched-earth policy",
    "are driven by a wanderlust that led them away from home", "are always picking things up, absently fiddling with them, and sometimes accidentally breaking them", "feel far more comfortable around animals than people",
    "work hard so that they can play hard when the work is done", "never pass up a friendly wager", "use language as foul as an otyugh nest", "are haunted by memories of war - they can't get the images of violence out of their mind",
    "have lost too many friends, so they are slow to make new ones", "can stare down a hellhound without flinching", "enjoy being strong and like breaking things", "face problems head-on - a simple, direct solution is the best path to success",
    "hide scraps of food and trinkets away in their pockets", "bluntly say what other people are hinting at or hiding"
];


const FLAWS = ["judge others harshly - and themselves even more so", "are inflexible in their thinking","are suspicious of strangers and expect the worst of them", 
    "become obsessed with their goals to the detriment of everything else in their life","can't resist a pretty face","always forget plans. If they don't forget it, they'll ignore it", 
    "turn tail and run when things look bad","are secretly (or not so secretly) convinced of the superiority of their own culture over others", 
    "have trouble keeping their true feelings hidden; their sharp tongue constantly lands them in trouble","are quick to assume that someone is trying to cheat them",
    "are never satisfied with what they have - they always want more","let their need to win arguments overshadow friendships and harmony","would risk too much to uncover a lost bit of knowledge",
    "like keeping secrets and won't share them with anyone","secretly believe that everyone is beneath them","hide a truly scandalous secret that could ruin their family forever",
    "hear veiled insults and threats in every word addressed to them","believe there's no room for caution in a life lived to the fullest",
    "remember every insult they've received, nursing a silent resentment toward anyone who has ever wronged them","follow orders, even if they think they're wrong",
    "never back down, no matter how dangerous the situation gets, when their courage is called into question","will probably be destroyed by their pride",
    "have little respect for anyone who is not a proven warrior","are blinded by their hatred of their enemies","would rather eat their armor than admit when they're wrong",
    "would rather kill someone in their sleep than fight fair"];

const BONDS = ["have a child who doesn't know them, somewhere out there - and they're making the world better for that child", "seek revenge against a powerful person who killed someone they love",
    "swindled and ruined someone who didn't deserve it. They seek to atone for their misdeeds, but might never be able to forgive themselves", "are guilty of a terrible crime. They can only hope to redeem themselves for it",
    "are trying to pay off an old debt owed to a generous benefactor", "value freedom above all else, and will never let anyone take it from them again", "have a family, but they have no idea where they are. One day, they hope to see them again",
    "have a weakness for the vices of the city, especially hard drink", "want to be famous, whatever it takes", "idolize a hero of the old tales and measure their deeds against that person's",
    "will do anything to prove themselves superior to their hated rival", "pursue wealth to secure someone's love", "isolate themselves to gain great insight into an evil that only they can destroy",
    "will face any challenge to win the approval of their family", "value nothing more than the other members of their family", "will bring terrible wrath down on the evildoers who destroyed their homeland",
    "suffer awful visions of a coming disaster and will do anything to prevent it", "were cheated out of their fair share of the profits - but they will get their due", "value honor above all else",
    "believe those who fight beside them are the ones worth dying for", "fight for those who cannot fight for themselves", "owe a debt they can never repay to the person who took pity on them",
    "feel no on else should ever have to endure the hardships they have been through"
];


const QUIRKS = ["speak exclusively in rhymes", "bite their nails", "clutch onto their belongings when they sleep", "space out easily", "stub their toes frequently", "have unusually long arms" ,
    "have unusually long legs", "tuck their hair behind their ears frequently", "have a soft, raspy voice", "have a loud, booming voice, regardless of the situation", "are ambidextrous", 
    "clean belongings & surroundings as a nervous habit", "are extremely sloppy", "despise cheese", "are a pathological liar", "rarely laugh", "are an adrenaline junkie", "are overly cautious",
    "cry when they see small animals", "hate cute things", "are excessively polite", "are excessively rude", "cook well, no matter what it is", "arrive extremely late to everything", "arrive extremely early to everything",
    "have terrible handwriting", "have gorgeous handwriting", "are afraid of spiders", "dress in one color", "are frequently overdressed for every occasion", "are frequently underdressed for every occasion",
    "do not wear shoes", "hate being indoors", "do a lot of meal prep - usually a ten days in advance", "hum when focused", "always take meals with bread", "give perfect presents", 
    "give terrible presents", "leave notes in books for future readers", "assume others' motives too easily", "actively seek approval from others", "always sleep on the floor", 
    "chew on their inner lip when thinking", "don't let their food touch, and they always finish one section before moving on", "always mix all their foods together", 
    "make very intense eye contact when listening", "avoid eye contact at all times", "barely chew before swallowing food", "constantly snack on things", 
    "adjust their sleeves frequently", "enter rooms carefully", "speedwalk at all times", "are a slow walker", "are touchy-feely with others", "refuse to touch others", 
    "like to swing their legs around when seated", "bounce their knee when seated", "are always too cold", "are always too warm", "show stress through a subconscious eyetwitch", 
    "restate things several time for clarification", "gesture a lot when speaking", "avoid speaking more than necessary", "make nicknames for everyone", 
    "have wrinkly clothes due to never folding their laundry", "always take notes in a small book", "are forgetful", "remember everything, always", "are terrible with money",
    "have butterfingers", "do not wear socks", "wear too much jewelry/accessories", "are afraid of bears", "are afraid of heights", "can't swim", "are bad at arithmetic", "can't sit like a normal person",
    "cross their ankles when sitting", "collect rocks", "throw things when angry", "mispronounce some words, but are convinced they're saying it correctly and everyone else is messing with them",
    "can't sleep if they perceive any light", "like to consume sticks of butter", "always carry around a book that doubles as a pillow", "only eat while standing", "are double-jointed",
    "like to sniff people", "have awkward body language", "tap their nails on surfaces when bored", "answer questions with questions", "are extremely good at braiding", "mash idioms together",
    "name their combat moves, sometimes shouting the name during combat", "converse with inanimate objects", "always know which direction they're traveling in", "dot their i's with hearts",
    "hate the texture of glass", "are susceptible to spoonerisms", "only have one dimple when smiling", "have a weak handshake"
];

let characterString = ["This character is ", "[RACE]", " ", "[CLASS]", " with a background as ", "[BACKGROUND]", ". Something obvious to many is that they ",
    "[TRAIT]", ". They also ", "[QUIRK]", ". And they may not be fully aware of it, but they ", "[FLAW]", ". Still, deep down, they ", "[BOND]", "."];

// button onclick
function generateCharacter(){
    let race, playerclass, background, trait, quirk, bond;

    // Fill in attributes according to grammar rules
    console.log("Generating a character...");
    race = RACES[random(RACES.length)];

    playerclass = CLASSES[random(CLASSES.length)];

    background = BACKGROUNDS[random(BACKGROUNDS.length)];

    trait = TRAITS[random(TRAITS.length)]

    quirk = QUIRKS[random(QUIRKS.length)]

    flaw = FLAWS[random(FLAWS.length)]

    bond = BONDS[random(BONDS.length)]


    // Fill in the finished string
    characterString[1] = race;
    characterString[3] = playerclass;
    characterString[5] = background;
    characterString[7] = trait;
    characterString[9] = quirk;
    characterString[11] = flaw;
    characterString[13] = bond;

    document.getElementById("results").innerHTML = characterString.join('');

}

function random(max){
    return Math.floor(Math.random() * max)

}