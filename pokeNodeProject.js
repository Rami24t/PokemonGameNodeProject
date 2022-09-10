'use strict'
// Pokemon Lite
// Try to make a simplified version of pokemon!
// Create a new index.js file.
// Functionality:
//     You should have a Pokemon constructor function that creates new pokemon that have name, health, magic and a bunch of skills (the skills can be stored in an array or object).
//     You should have an AttackSkill constructor function for creating new attacks. Attacks consumes the pokemon's magic to cause damage to other pokemons. Each individual pokemon has a specific set of attacks. The AttackSkill method should take in three arguments: the name of the attack, the amount of damage the attack does, and the amount of magic the attack requires. For example, here we're creating a 'lightning' attack skill that causes 40 damage, and requires 30 magic:
// let lightning = new AttackSkill("lightning", 40, 30);
// These numbers don't have to be correct or correspond to the real Pokemon numbers at all - you can just make them up.
//     A pokemon has no skills when created. It has to use the method learnAttackSkill to learn a new skill. learnAttackSkill should take an attack object as an argument. The specific attacks should be created using the attackSkill constructor function, and then internally added to that Pokemon's 'skills' array. Here is an example of first creating a skill, then adding it to a Pokemon:
// let lightning = new AttackSkill("lightning", 40, 30);
// pikachu.learnAttackSkill(lightning);
// Your pokemon should have a method called showStatus that console.logs its status (how much health, magic left)
// Your pokemon should have a method called attack which picks one of the pokemon's attack skills to attack another pokemon. This is its most important method! Consider all the possiblites in this method. (e.g what if the pokemon doesn't have enough magic to launch the attack skill?). The attack method should call one of the Pokemon's attack and apply it to the other Pokemon. So for example, if you call the 'lightning' attack (which we created above), it should deal 40 damage to the other Pokemon, and deplete 30 magic from the Pokemon that commited the attack. The attack method should additionally console.log out whether the attack was successful (in other words, whether the attacking pokemon had enough magic to actually carry out the attack), and the result of the attack. The attack method should take in two arguments: the index (or key) of the attack to be used, and the Pokemon object that needs to be attacked. For example, here is an attack being called from Pikachu to Bulbasaur:
// pikachu.attack(0, bulbasaur);
//     Finally create a method called getMagic to help your pokemon add some magic back to your Pokemon (you can choose exactly how much magic should be added back).
//     You should create a constructor function to create a pokemon, and then add the methods onto the .prototype property of the constructor function. You should then use that constructor function to create all new pokemon.
//     Similarly, you should have a constructor function to create an attackSkill
// For example, the following sequence:
//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic 
const banner = `
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨⬛⬛⬛
⬜⬜⬜⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨🟨⬛⬛⬜
⬜⬜⬜⬛⬛⬛🟧🟧🟧⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨🟨🟧⬛⬛⬜
⬜⬜⬜⬜⬜⬛⬛🟫🟨🟨🟨🟨🟧⬛⬛⬛⬛⬜⬛⬛⬛⬛⬛⬛⬛⬜⬛⬛🟨🟨🟨🟨🟧🟧⬛⬜⬜
⬜⬜⬜⬜⬜⬜⬛⬛🟫🟧🟨🟨🟨🟨🟨🟨🟧⬛🟨🟨🟨🟨🟨🟨🟨⬛🟧🟨🟨🟨🟨🟧🟧⬛⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬛⬛🟧🟧🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧🟧🟧⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛🟧🟧🟧🟧🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛🟧⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛🟧⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛⬜⬜⬜⬜⬜⬜
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜⬜
⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨⬛⬛🟨🟨⬛⬜⬜⬜⬜⬜⬜
⬛🟧⬛⬜⬜⬜⬜⬜⬜⬜⬜⬛🟧🟨🟨⬛⬛⬜⬛🟨🟨🟨🟨🟨🟨⬛⬛⬜⬛🟨🟧⬛⬜⬜⬜⬜⬜
⬛🟨🟧⬛⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨⬛⬛⬛⬛🟨🟨🟨🟨🟨🟨⬛⬛⬛⬛🟨🟨⬛⬜⬜⬜⬜⬜
⬛🟨🟨🟧⬛⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨🟨⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨⬛⬛🟨🟨🟨⬛⬜⬜⬜⬜⬜
⬛🟨🟨🟨🟧⬛⬜⬜⬜⬜⬛🟨🟨🟥🟥🟨🟨🟨🟨🟨🟨⬛⬛🟨🟨🟨🟨🟨🟨🟥🟥🟨⬛⬜⬜⬜⬜
⬛🟨🟨🟨🟨🟧⬛⬜⬜⬜⬛🟨🟥🟥🟥🟥🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟥🟥🟥🟥⬛⬜⬜⬜⬜
⬛🟨🟨🟨🟨🟨🟧⬛⬜⬜⬛🟨🟥🟥🟥🟥🟨🟨⬛🟨🟨⬛⬛🟨🟨⬛🟨🟨🟥🟥🟥🟥⬛⬜⬜⬜⬜
⬛🟨🟨🟨🟨🟨🟨🟧⬛⬜⬛🟨🟨🟥🟥🟨🟨🟨🟨⬛⬛🟨🟨⬛⬛🟨🟨🟨🟨🟥🟥🟨⬛⬜⬜⬜⬜
⬛🟨🟨🟨🟨🟨🟨🟨🟧⬛⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜
⬛🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛⬛🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛⬜⬜⬜⬜⬜
⬜⬛🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬛🟨🟨🟨🟨🟨🟨⬛⬜⬛🟧🟨🟨🟨🟨🟨🟨🟨🟧🟧🟧🟧🟨🟨🟨🟨🟨🟨🟧⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬛🟨🟨🟨🟨⬛⬜⬜⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨🟧🟧🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜
⬜⬜⬛🟨🟨🟨🟨⬛⬜⬜⬜⬛🟨🟨🟨🟨🟨🟨⬛🟨🟨🟨🟨🟨🟨⬛🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜
⬜⬜⬛🟨🟨🟨🟨🟨⬛⬜⬛🟨🟨🟨⬛🟨🟨🟨⬛🟨🟨🟨🟨🟨🟨⬛🟨🟨🟨⬛🟨⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬛🟨🟨🟨🟨🟨⬛⬛🟨🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬛🟨🟨🟧🟧🟫⬛🟨🟨🟨🟧⬛🟨🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨🟨⬛🟧🟨🟨⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛🟧🟧🟧⬛⬛🟨🟨🟨🟧⬛🟨🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨🟨⬛🟧🟨🟨⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬛🟧🟫🟫⬛🟨🟨🟨🟨🟧⬛🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨⬛🟧🟨🟨🟨⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛🟫🟫🟫🟫⬛🟨🟨🟨🟨🟨🟧⬛⬛🟨🟨🟨🟨🟨🟨⬛⬛🟧🟨🟨🟨🟨⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬛🟫🟫🟫⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬛⬛🟫⬛🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨🟨🟨🟨🟧🟧🟧🟧🟧🟨🟨🟨🟨🟨🟨⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟧🟨🟧🟧⬛⬛⬛⬛⬛⬛⬛🟧🟧🟨🟧⬛⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨⬛⬛⬛⬜⬜⬜⬜⬜⬜⬛⬛🟨🟨🟨⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜

   _______    ______    __   ___  _______  ___      ___     ______    _____  ___
  |   __ "\\  /    " \\  |/"| /  ")/"     "||"  \\    /"  |   /    " \\  (\\"   \\|"  \\
  (. |__) :)// ____  \\ (: |/   /(: ______) \\   \\  //   |  // ____  \\ |.\\\\   \\    |
  |:  ____//  /    ) :)|    __/  \\/    |   /\\\\  \\/.    | /  /    ) :)|: \\.   \\\\  |
  (|  /   (: (____/ // (// _  \\  // ___)_ |: \\.        |(: (____/ // |.  \\    \\. |
 /|__/ \\   \\        /  |: | \\  \\(:      "||.  \\    /:  | \\        /  |    \\    \\ |
(_______)   \\"_____/   (__|  \\__)\\_______)|___|\\__/|___|  \\"_____/    \\___|\\____\\)

`;
console.log(banner);

class Art {
    constructor(attacking = '', win = '', defending = '', lost = '', neutral = '') {
        this.attacking = attacking;
        this.defending = defending;
        this.win = win;
        this.lost = lost;
        this.neutral = neutral;
    }
}
const gatomonArt = new Art(`⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛🟪🟪🟪🟪⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬛🟪🟪🟪🟪🟪⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛🟪⬜⬛⬛⬛⬛🟪⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨🟨⬛⬛⬜⬜⬜⬜⬛⬛🟪⬛
⬜⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟨⬛⬛🟨⬛⬜⬜⬜⬜⬜⬜⬛
⬜⬜⬜⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛🟪🟪⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛
⬜⬛🟪🟪🟪⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬛🟪⬛⬜⬜⬜⬛⬛⬛⬛⬛⬛⬜⬛🟪⬛⬛⬛
⬜⬜⬛🟪⬛⬜⬜⬜⬜⬜⬛⬛⬜⬜⬜⬜⬜⬜⬛🟪⬛⬜⬜⬛⬜⬜⬜⬜⬜⬜⬛🟪🟪🟪⬛
⬜⬛⬛⬛⬜⬛🟪⬛⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬜⬛⬜⬛⬛⬜⬜⬜⬜🟪🟪⬜⬛🟪🟪⬛
⬜⬜⬜⬜⬜⬜⬛🟪⬛⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛⬛🟪🟪🟪⬜⬜⬛⬛⬛⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬛🟪⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛🟪🟪🟪⬜⬜⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬛🟪🟪⬜⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬛🟪⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜⬛🟪⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬜⬛⬜⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜⬛⬛⬜⬜⬛⬛⬛⬜⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬛🟧🟩🟧⬛⬛⬜⬜⬜⬛🟧🟧🟩🟧🟧⬛⬛
⬜⬜⬜⬜⬜⬜⬜⬛🟩🟩🟩🟩⬛⬜⬛⬜⬛🟩🟩🟩🟩🟩🟩🟩⬛
⬜⬜⬜⬜⬜⬜⬜⬛🟧🟩🟧⬛⬛⬛⬜⬛⬛🟧🟧🟩🟩🟩🟧🟧⬛
⬜⬜⬜⬜⬜⬜⬜⬛🟩🟩⬛⬜⬛⬜⬜⬜⬛⬛🟩🟩🟩🟩🟩🟩⬛
⬜⬜⬜⬜⬜⬜⬜⬛🏽⬛⬛⬜⬜⬜⬜⬛⬜⬛🏽⬛🏽⬛🏽⬛
⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛🏽⬛🏽⬛🏽⬛`)
const bulbasaurArt = new Art(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⡀⠈⡖⡤⠄⠀
⠀⠀⢀⡀⠀⠀⠀⡐⠁⠀⠀⠠⠐⠂⠀⠁⠀⠀⠀⠀
⠀⠰⡁⠐⢉⣉⣭⡍⠁⠂⠉⠘⡀⠀⠀⠀⠀⠂⠡⠀
⢀⣊⠀⡄⠻⠿⠋⠀⠀⠀⠀⠀⢃⠀⠀⠀⠀⠀⠀⢀
⡎⣾⠀⠁⣴⡆⠀⠡⢺⣿⣆⠀⢠⢱⣄⠀⠀⠀⠀⠈
⡑⠟⠀⠀⠀⠀⠀⢀⣸⡿⠟⠀⠀⠈⢿⣿⡦⡀⠀⡰
⠙⠔⠦⣤⣥⣤⣤⣤⡤⠆⠀⠀⠀⠀⢀⢀⠀⠈⠎⠀
⠀⠀⠈⣰⡋⢉⠉⠁⠒⠂⢇⢠⡆⠀⠸⢴⣿⠀⠘⠀
⠀⠀⠘⡿⠃⠀⠨⠒⢆⣸⣿⠁⠀⡠⡇⠈⠋⠀⠰⠀
⠀⠀⠀⠛⠒⠒⠁⠀⠈⠷⡤⠤⠐⠀⠘⠒⠒⠖⠁⠀`, '', '', `
                   ⬛⬛⬛⬛⬛
                ⬛⬛🟩🟩🟩🟩🟩⬛⬛
              ⬛🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛
     ⬛⬛⬛⬛⬛🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛
   ⬛🟦🟦🟦⬛⬛🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛
   ⬛🟦🟦🟦🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛
   ⬛🟦⬛🟦🟦🟦🟦🟦⬛⬛⬛🟩🟩🟩🟩🟩🟩⬛
⬛🟦⬛🟦🟦🟦🟦🟦🟦🟦🟦⬛🟩🟩🟩⬛⬛⬛⬛
⬛⬛🟦⬛🟦🟦🟦🟦🟦🟦⬛🟦⬛⬛⬛🟦🟦🟦⬛
⬛🟦🟦🟦🟦🟦⬛🟦⬛🟦🟦🟦🟦🟦🟦⬛🟦  ⬛
⬛🟦🟦🟦🟦🟦🟦⬛🟦🟦🟦🟦⬛🟦🟦⬛⬛⬛
 ⬛🟦🟦🟦🟦⬛🟦⬛🟦🟦🟦⬛🟦🟦⬛
    ⬛⬛🟦🟦🟦🟦🟦🟦⬛🟦🟦🟦⬛
          ⬛⬛⬛⬛       ⬛`,
    `
                                                    ⬛⬛🟩⬛⬛
                                   🟩🟩🟩🟩⬛⬛⬛⬛🟩🟩🟩⬛🟩⬛
                               🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛🟩⬛
                             🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬛⬛
      ⬛⬛                 🟩🟩🟩🟩🟩🟩⬛⬛🟩🟩🟩🟩🟩🟩🟩🟩⬛⬛
    🟦🟦🟦⬛⬛  ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩⬛🟩⬛
    🟦🟦🟦🟦⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦⬛🟦🟦🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩⬛🟩🟩⬛
    🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩🟩⬛🟩⬛
    🟦⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩⬛🟩🟩⬛
    ⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩🟩⬛🟩⬛
    ⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩🟩⬛🟩🟩⬛
  ⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬜⬜⬛🟦🟦🟦🟦⬛🟩🟩🟩🟩🟩🟩🟩⬛🟩🟩⬛
  ⬛🟥🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟥🟥⬜⬜⬛🟦🟦🟦⬛⬛🟩🟩🟩🟩🟩🟩⬛🟩🟩⬛
  ⬛🟥🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟥🟥⬜⬜⬛🟦🟦🟦⬛⬛🟩🟩🟩🟩🟩⬛🟩🟩🟩⬛
⬛⬜🟥⬜🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟥⬜🟥🟥⬜⬜🟦🟦🟦⬛🟦⬛🟩🟩🟩🟩⬛🟩🟩🟩⬛
⬛⬜🟥⬜🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟥⬜🟥🟥⬜⬜🟦🟦🟦⬛🟦🟦⬛🟩🟩⬛🟩🟩🟩⬛
⬛🟦🟥🟥🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟥🟥🟥🟥⬜🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛🟩🟩🟩🟩⬛
⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟦🟦🟦🟦🟦🟦🟦🟦⬛🟩🟩⬛
⬛🟦⬛⬛🟦🟦🟦🟦🟦⬛🟦🟦🟦🟦🟦🟦⬛⬛⬛⬛🟦🟦⬛🟦🟦🟦⬛⬛🟦🟦⬛⬛
  ⬛🟦⬜🟥🟥🟦🟦🟦🟦🟦⬛⬛⬛⬛⬛⬜⬛🟦🟦🟦🟦⬛🟦🟦🟦⬛⬛⬛🟦🟦⬛
   ⬛🟦🟦⬛🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥⬛🟦🟦🟦🟦⬛🟦🟦🟦🟦🟦⬛⬛🟦🟦🟦⬛
      ⬛⬛🟦🟦⬛🟥🟥🟥🟥🟥🟥⬛🟦🟦🟦🟦⬛⬛🟦🟦🟦🟦🟦⬛🟦🟦🟦🟦🟦⬛`)
const raichuArt = new Art('', '', '', '', `⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬛🏿⬛⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬛🏿🏿⬛⬜⬜⬜⬜⬛⬛🏿🏿⬛⬜⬜⬜⬜⬜⬛⬜⬜
⬜⬜⬜⬛🏿⬛⬜⬜⬜⬜⬛🏿🟨🟨🟨⬜⬜⬜⬜⬜⬜⬛⬜⬜
⬜⬜⬜⬛🏿⬛⬛⬛⬛⬛🏿🟨🟨🟨🟨⬛⬜⬜⬜⬜⬛🟨⬛⬜
⬜⬜⬛🟧🟧🟧🟧🟧⬛🏿🏿🟨🟨⬛⬛⬛⬜⬜⬜⬜⬛🟨⬛⬜
⬜⬛🟧🟧🟧🟧🟧🟧🟧🏿🏿🟨⬛⬜⬜⬛⬜⬜⬜⬜⬛🟨⬛⬛
⬛⬜🟧🟧🟧🟧🟧🟧🟧🟧🟧⬛⬛⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨⬛
⬛⬛🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧⬛⬜⬜⬜⬜⬜⬜⬜⬛🟨🟨⬛
⬛🟧🟧🟧🟧⬜⬛🟧🟧🟧🟧🟧🏿⬛⬜⬜⬜⬛⬛⬛🟨🟨🟨⬛
⬜⬛🟧🟧🟧⬛⬛🟨🟨🟧🟧🟧🟧⬛⬜⬜⬛🏿🟨🟨🟨⬛⬛⬜
⬜⬜⬛🟧🟧🟧🟧🟨🟨🟧🟧🟧🟧🏿⬛⬜⬛⬛⬛🟨🟨⬛⬜⬜
⬜⬛🏿🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🏿⬛⬜⬛⬜⬜⬛🟨⬛⬜⬜
⬜⬜⬛⬛⬜⬜🟧🟧🟧🟧🟧🟧⬛🟧⬛⬜⬛⬛⬛⬜⬛⬜⬜⬜
⬜⬜⬜⬜⬛⬜⬜⬜🟧⬛🟧🟧⬛🟧⬛⬜⬜⬜⬛⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬛⬜⬜⬜⬜⬛🏿⬛🟧🟧⬛⬛⬛⬜⬜⬛⬜⬜⬜⬜
⬜⬜⬜⬛🏿⬛⬜⬜⬜⬜⬛🟧🟧🟧⬛⬜⬛⬛⬛⬛⬜⬜⬜⬜
⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜🟧🟧🟧⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛🟧⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🏿🟧🟧⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜`)
const pikatchuArt = new Art(`\x1b[93m⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤
⣿⡿⠷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠾⠿⣿
⠋⠀⠀⠈⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⠁⠀⠀⠈
⣇⠀⠀⠀⠀⠀⠙⢷⣄⠀⠀⠀⣀⣀⣀⣀⣀⣀⡀⠀⠀⢠⣾⠏⠁⠀⠀⠀⠀⣠
⠻⣷⡀⠀⠀⠀⠀⠀⢹⣶⠿⠋⠉⠉⠁⠈⠉⠉⠙⠻⢶⣟⠁⠀⠀⠀⠀⢀⣴⣟
⠀⠈⠻⢷⣄⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⣠⣶⠿⠛⠉
⠀⠀⠀⠀⠙⢿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣟⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⠀⠀⣠⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣄⠀⠀⢻⡀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⡟⠀⣾⣧⣼⣿⡇⠀⠀⠀⠀⠀⠀⢰⣿⣷⣼⣷⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡇⠀⠻⠿⠿⠟⠀⠀⠀⢻⢿⠀⠀⠀⠙⠿⠿⠟⠀⠸⣇⠀⠀⠀⠀
⠀⠀⠀⠀⣾⠟⠛⠲⡄⠀⠀⠀⠀⢀⡼⢮⡀⠀⠀⠀⠀⢀⡴⠛⠻⣿⠀⠀⠀⣀
⠀⠀⠀⠀⢹⣇⠀⠀⣹⠀⠀⠀⠀⠀⠀⠈⠈⠀⠀⠀⠀⢸⠀⠀⢰⣿⠶⠞⠛⠉
⠀⠀⠀⠀⠈⢿⣶⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣤⡿⣷⡀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⠋⠙⡛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠚⠋⠉⢷⡈⢻⣆⠀⠀\x1b[0m`, `\x1b[43m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⢹⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⢸⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⠤⠤⠤⢤⣤⣠⠔⠁⠀⠀⢀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⣶⣶⣶⡖⠒⠒⠒⠒⠶⠦⠤⢤⣴⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡄⣠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠛⠿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠤⣄⠙⣯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⠦⣄⣀⠀⠀⠀⠀⣰⡋⣻⣦⠀⠀⠀⠀⠀⠀⢿⣦⣿⡇⠘⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠁⠀⠀⠹⢿⣿⠟⠀⠀⠀⢶⣴⠀⠈⠉⠉⠀⠀⣿⣄⣰⠤⢤⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⡠⠤⢄⡀⠀⣀⠀⠀⢀⣤⣀⣀⠤⠀⠀⢸⠀⢹⡃⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡼⠦⣄⣇⠀⢸⠀⠀⠀⢱⠀⠀⠑⢞⠉⠉⢻⠃⠀⠀⠀⠈⢦⡾⠀⠀⣸⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣏⠀⠀⠈⠙⢦⡈⠳⠤⠴⠋⠀⠀⠀⠈⠓⠖⠃⠀⠀⠀⠀⣠⡞⠁⠀⢀⡏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣆⠀⠀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠖⠁⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣾⠛⠒⠒⠶⠤⠤⠤⠤⠤⠤⠤⠼⣆⠀⠀⠀⠀⠀⠙⠀⠀⠀⠀⠀⠒⠒⠒⠊⠀⠀⠀⠀⠀⠀⠀⣰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣤⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠏⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠎⢀⣶⠀⡟⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣄⣀⣀⣤⠤⠒⢻⠀⠀⢐⡿⠞⢁⡏⣠⡇⠀⣀⣄⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠉⠀⠀⠀⠀⠀⢸⠀⠀⢀⣠⠀⣸⡟⢻⡇⢠⡿⠟⠙⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣠⠴⠋⢹⠀⣨⡇⠛⣇⠋⢧⠀⠀⢳⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⢸⡼⢻⣷⠞⢻⣄⠘⡄⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠁⠀⠀⠙⢦⣙⣄⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠓⠒⠒⠛⠉⠉⠑⢲⡤⠀⣄⡠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧⣀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠛⠀⠀⠀⠸⣿⠇⠃⠔⢚⣇⡇⠀⠀⢒\x1b[0m`,
    `\x1b[103m⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿\x1b[0m`, '',
    `             ⬛⬛🟫🟧🟨🟨🟨🟨🟨🟨🟧⬛🟨🟨🟨🟨🟨🟨🟨⬛🟧🟨🟨🟨🟨🟧🟧⬛
               ⬛⬛🟧🟧🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧🟧🟧⬛
                 ⬛⬛🟧🟧🟧🟧🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛🟧⬛
                    ⬛⬛🟧⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛
⬛                      ⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛
⬛⬛                     ⬛🟨🟨🟨⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨⬛⬛🟨🟨⬛
⬛🟧⬛                 ⬛🟧🟨🟨⬛⬛⬜⬛🟨🟨🟨🟨🟨🟨⬛⬛⬜⬛🟨🟧⬛
⬛🟨🟧⬛               ⬛🟨🟨🟨⬛⬛⬛⬛🟨🟨🟨🟨🟨🟨⬛⬛⬛⬛🟨🟨⬛
⬛🟨🟨🟧⬛             ⬛🟨🟨🟨🟨⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨⬛⬛🟨🟨🟨⬛
⬛🟨🟨🟨🟧⬛        ⬛🟨🟨🟥🟥🟨🟨🟨🟨🟨🟨⬛⬛🟨🟨🟨🟨🟨🟨🟥🟥🟨⬛
⬛🟨🟨🟨🟨🟧⬛      ⬛🟨🟥🟥🟥🟥🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟥🟥🟥🟥⬛
⬛🟨🟨🟨🟨🟨🟧⬛    ⬛🟨🟥🟥🟥🟥🟨🟨⬛🟨🟨⬛⬛🟨🟨⬛🟨🟨🟥🟥🟥🟥⬛
⬛🟨🟨🟨🟨🟨🟨🟧⬛  ⬛🟨🟨🟥🟥🟨🟨🟨🟨⬛⬛🟨🟨⬛⬛🟨🟨🟨🟨🟥🟥🟨⬛
⬛🟨🟨🟨🟨🟨🟨🟨🟧⬛⬛⬛🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨⬛
⬛🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛⬛🟧🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟧⬛`);

class Pokemon {
    constructor(name = 'Pikachu', health = 120, magic = 80, art = { attacking: '', defending: '', win: '', lost: '', neutral: '' }) {
        this.name = name, this.health = health, this.magic = magic;
        this.skills = [];
        this.art = art;
        this.status = 'Alive';
    }
    learnAttackSkill(anAttackSkill) {
        this.skills.push(anAttackSkill);
    }
    showStatus() {
        console.log(`${this.art.neutral}\n${this.name} HP: ${this.health} MP: ${this.magic}\n`);
    }
    attack(idx, aPokemon) {
        if (this.health <= 0) {
            return console.log(this.name + ' is already stunned! ' + this.name + ' is out of the game!\n');
        }
        const thisAttack = this.skills[idx];
        if (this.magic - thisAttack.magic < 0) {
            return console.log('Not enough magic points! ' + this.name + ' cannot use \'' + thisAttack.name + '\' attack!\n');
        }
        this.magic -= thisAttack.magic;
        let impact = '';
        if (impact = aPokemon.takeDamage(thisAttack.damage))
            console.log(`\n${this.art.attacking}\n${this.name} used his '${thisAttack.name}' attack on ${aPokemon.name} !!!\n\n${impact}\n${impact.includes('ht.') ? `\n${this.name} WINS!!!\n${this.art.win}\n` : ''}`);
        else console.log(`${aPokemon.name} is already out of the fight.\n`);
    }
    takeDamage(damage) {
        const hp = this.health;
        if (hp <= 0)
            return false;
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
            this.status = 'Stunned'
        }
        const myName = this.name;
        return (`${this.art.defending}\n${myName} took ${hp - this.health} damage. ${this.health === 0 ? '\n' + myName + ' is stunned. ' + myName + ' is out of the fight.\n' + this.art.lost : myName + ' is still capable of fighting!'}`);
    }
    getMagic(magic = 20) {
        this.magic += magic;
        console.log(this.name + ' gained ' + magic + ' magic points.\n');
    }
    evolve(evolution) {
        console.log(this.name + ' evolves to...');
        this.name = evolution.name + '(' + this.name + ')'; this.health = evolution.health; this.magic = evolution.magic; this.skills = evolution.skills;
        // this = { ...evolution };
        this.art = { ...this.art, ...evolution.art };
        this.showStatus();
    }
}
class AttackSkill {
    constructor(name = 'lightning', damage = 40, magic = 30) {
        this.name = name, this.damage = damage, this.magic = magic;
    }
}
animateDots();

let pikachu = new Pokemon("Pikachu", 120, 80, pikatchuArt);
let raichu = new Pokemon('Raichu', 420, 320, raichuArt);
let bulbasaur = new Pokemon("Bulbasaur", 95, 105, bulbasaurArt);
let gatomon = new Pokemon('Gatomon', 110, 90, gatomonArt)
//Each skill should do a certain amount of damage, and consume a certain amount of magic from the Pokemon that used the skill.
let lightning = new AttackSkill("Lightning", 40, 30);
let lightningStrike = new AttackSkill('Lightning Strike', 120, 80)
let poisonSeed = new AttackSkill("Poison Seed", 20, 20);
let lightningPaw = new AttackSkill('Lightning Paw', 30, 20);
let catTail = new AttackSkill('Cat Tail', 35, 25)

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
gatomon.learnAttackSkill(lightningPaw);
gatomon.learnAttackSkill(catTail);
raichu.learnAttackSkill(lightningStrike);
// The first argument to `attack` should be the index(or key) of the attack
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
gatomon.attack(0, pikachu);
gatomon.attack(1, pikachu);
pikachu.evolve(raichu);
pikachu.attack(0, gatomon);
// should log out the following to the console:

// pikachu launched skill 'lightning' successfully!
// bulbasaur got 40 damage
// -------------------
//     // bulbasaur launched skill 'poison seed' successfully!
//     // pikachu got 20 damage
//     -------------------
//         // pikachu status
//         // health: 100
//         // magic: 50
//         -------------------
//             // bulbasaur status
//             // health: 55
//             // magic: 85
//             -------------------
//                 // pikachu launched skill 'lightning' successfully!
//                 // bulbasaur got 40 damage
//                 -------------------
//                     // not enough magic, cannot launch attack!
//                     -------------------
//                         // pikachu got 20 magic back
//                         -------------------
//                             // pikachu launched skill 'lightning' successfully!
//                             // bulbasaur got 40 damage
//                             -------------------
//                                 // bulbasaur is killed!
//                                 -------------------
// bulbasaur is already dead!
// That's just one example. You can call different series of attacks to get different results!
// Bonus: Add some more Pokemon and attacks.
function animateDots() {
    let string = ".";
    // console.log(this)
    const interval = setInterval(() => {
        process.stdout.clearLine();
        string += " .\n";
        process.stdout._write(string);
    }, 400);
    setTimeout(() => clearInterval(interval), 2000);
}
// animateDots