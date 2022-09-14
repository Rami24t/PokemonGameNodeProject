// Pokemon Digital Novel Writer  -  by Rami Al-Saadi in Sep 2022
'use strict';
const pokemonNames = require('./pokemonNames');
const readline = require('readline-sync');
const chalk = require("chalk");
const log = console.log;
const raichuOrange = chalk.hex('#FFA500'); // Orange color;

const banner = `













   _______    ______    __   ___  _______  ___      ___     ______    _____  ___
  |   __ "\\  /    " \\  |/"| /  ")/"     "||"  \\    /"  |   /    " \\  (\\"   \\|"  \\
  (. |__) :)// ____  \\ (: |/   /(: ______) \\   \\  //   |  // ____  \\ |.\\\\   \\    |
  |:  ____//  /    ) :)|    __/  \\/    |   /\\\\  \\/.    | /  /    ) :)|: \\.   \\\\  |
  (|  /   (: (____/ // (// _  \\  // ___)_ |: \\.        |(: (____/ // |.  \\    \\. |
 /|__/ \\   \\        /  |: | \\  \\(:      "||.  \\    /:  | \\        /  |    \\    \\ |
(_______)   \\"_____/   (__|  \\__)\\_______)|___|\\__/|___|  \\"_____/    \\___|\\____\\)



















\x1b[107m
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
\x1b[0m

`;
const pokemonData = [
    {
        "name": "Bulbasaur",
        "health": 45,
        "magic": 49,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 49,
            "defense": 49,
            "speed": 45
        }
    },
    {
        "name": "Ivysaur",
        "health": 60,
        "magic": 62,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 62,
            "defense": 63,
            "speed": 60
        }
    },
    {
        "name": "Venusaur",
        "health": 80,
        "magic": 82,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 82,
            "defense": 83,
            "speed": 80
        }
    },
    {
        "name": "Charmander",
        "health": 39,
        "magic": 52,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 52,
            "defense": 43,
            "speed": 65
        }
    },
    {
        "name": "Charmeleon",
        "health": 58,
        "magic": 64,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 64,
            "defense": 58,
            "speed": 80
        }
    },
    {
        "name": "Charizard",
        "health": 78,
        "magic": 84,
        "type": [
            "Fire",
            "Flying"
        ],
        "power": {
            "attack": 84,
            "defense": 78,
            "speed": 100
        }
    },
    {
        "name": "Squirtle",
        "health": 44,
        "magic": 48,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 48,
            "defense": 65,
            "speed": 43
        }
    },
    {
        "name": "Wartortle",
        "health": 59,
        "magic": 63,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 63,
            "defense": 80,
            "speed": 58
        }
    },
    {
        "name": "Blastoise",
        "health": 79,
        "magic": 83,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 83,
            "defense": 100,
            "speed": 78
        }
    },
    {
        "name": "Caterpie",
        "health": 45,
        "magic": 30,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 30,
            "defense": 35,
            "speed": 45
        }
    },
    {
        "name": "Metapod",
        "health": 50,
        "magic": 20,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 20,
            "defense": 55,
            "speed": 30
        }
    },
    {
        "name": "Butterfree",
        "health": 60,
        "magic": 45,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 45,
            "defense": 50,
            "speed": 70
        }
    },
    {
        "name": "Weedle",
        "health": 40,
        "magic": 35,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 35,
            "defense": 30,
            "speed": 50
        }
    },
    {
        "name": "Kakuna",
        "health": 45,
        "magic": 25,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 25,
            "defense": 50,
            "speed": 35
        }
    },
    {
        "name": "Beedrill",
        "health": 65,
        "magic": 90,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 90,
            "defense": 40,
            "speed": 75
        }
    },
    {
        "name": "Pidgey",
        "health": 40,
        "magic": 45,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 45,
            "defense": 40,
            "speed": 56
        }
    },
    {
        "name": "Pidgeotto",
        "health": 63,
        "magic": 60,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 60,
            "defense": 55,
            "speed": 71
        }
    },
    {
        "name": "Pidgeot",
        "health": 83,
        "magic": 80,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 80,
            "defense": 75,
            "speed": 101
        }
    },
    {
        "name": "Rattata",
        "health": 30,
        "magic": 56,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 56,
            "defense": 35,
            "speed": 72
        }
    },
    {
        "name": "Raticate",
        "health": 55,
        "magic": 81,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 81,
            "defense": 60,
            "speed": 97
        }
    },
    {
        "name": "Spearow",
        "health": 40,
        "magic": 60,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 60,
            "defense": 30,
            "speed": 70
        }
    },
    {
        "name": "Fearow",
        "health": 65,
        "magic": 90,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 90,
            "defense": 65,
            "speed": 100
        }
    },
    {
        "name": "Ekans",
        "health": 35,
        "magic": 60,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 60,
            "defense": 44,
            "speed": 55
        }
    },
    {
        "name": "Arbok",
        "health": 60,
        "magic": 95,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 95,
            "defense": 69,
            "speed": 80
        }
    },
    {
        "name": "Pikachu",
        "health": 35,
        "magic": 55,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 55,
            "defense": 40,
            "speed": 90
        }
    },
    {
        "name": "Raichu",
        "health": 60,
        "magic": 90,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 90,
            "defense": 55,
            "speed": 110
        }
    },
    {
        "name": "Sandshrew",
        "health": 50,
        "magic": 75,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 75,
            "defense": 85,
            "speed": 40
        }
    },
    {
        "name": "Sandslash",
        "health": 75,
        "magic": 100,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 100,
            "defense": 110,
            "speed": 65
        }
    },
    {
        "name": "Nidoran♀",
        "health": 55,
        "magic": 47,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 47,
            "defense": 52,
            "speed": 41
        }
    },
    {
        "name": "Nidorina",
        "health": 70,
        "magic": 62,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 62,
            "defense": 67,
            "speed": 56
        }
    },
    {
        "name": "Nidoqueen",
        "health": 90,
        "magic": 92,
        "type": [
            "Poison",
            "Ground"
        ],
        "power": {
            "attack": 92,
            "defense": 87,
            "speed": 76
        }
    },
    {
        "name": "Nidoran♂",
        "health": 46,
        "magic": 57,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 57,
            "defense": 40,
            "speed": 50
        }
    },
    {
        "name": "Nidorino",
        "health": 61,
        "magic": 72,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 72,
            "defense": 57,
            "speed": 65
        }
    },
    {
        "name": "Nidoking",
        "health": 81,
        "magic": 102,
        "type": [
            "Poison",
            "Ground"
        ],
        "power": {
            "attack": 102,
            "defense": 77,
            "speed": 85
        }
    },
    {
        "name": "Clefairy",
        "health": 70,
        "magic": 45,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 45,
            "defense": 48,
            "speed": 35
        }
    },
    {
        "name": "Clefable",
        "health": 95,
        "magic": 70,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 70,
            "defense": 73,
            "speed": 60
        }
    },
    {
        "name": "Vulpix",
        "health": 38,
        "magic": 41,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 41,
            "defense": 40,
            "speed": 65
        }
    },
    {
        "name": "Ninetales",
        "health": 73,
        "magic": 76,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 76,
            "defense": 75,
            "speed": 100
        }
    },
    {
        "name": "Jigglypuff",
        "health": 115,
        "magic": 45,
        "type": [
            "Normal",
            "Fairy"
        ],
        "power": {
            "attack": 45,
            "defense": 20,
            "speed": 20
        }
    },
    {
        "name": "Wigglytuff",
        "health": 140,
        "magic": 70,
        "type": [
            "Normal",
            "Fairy"
        ],
        "power": {
            "attack": 70,
            "defense": 45,
            "speed": 45
        }
    },
    {
        "name": "Zubat",
        "health": 40,
        "magic": 45,
        "type": [
            "Poison",
            "Flying"
        ],
        "power": {
            "attack": 45,
            "defense": 35,
            "speed": 55
        }
    },
    {
        "name": "Golbat",
        "health": 75,
        "magic": 80,
        "type": [
            "Poison",
            "Flying"
        ],
        "power": {
            "attack": 80,
            "defense": 70,
            "speed": 90
        }
    },
    {
        "name": "Oddish",
        "health": 45,
        "magic": 50,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 50,
            "defense": 55,
            "speed": 30
        }
    },
    {
        "name": "Gloom",
        "health": 60,
        "magic": 65,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 65,
            "defense": 70,
            "speed": 40
        }
    },
    {
        "name": "Vileplume",
        "health": 75,
        "magic": 80,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 80,
            "defense": 85,
            "speed": 50
        }
    },
    {
        "name": "Paras",
        "health": 35,
        "magic": 70,
        "type": [
            "Bug",
            "Grass"
        ],
        "power": {
            "attack": 70,
            "defense": 55,
            "speed": 25
        }
    },
    {
        "name": "Parasect",
        "health": 60,
        "magic": 95,
        "type": [
            "Bug",
            "Grass"
        ],
        "power": {
            "attack": 95,
            "defense": 80,
            "speed": 30
        }
    },
    {
        "name": "Venonat",
        "health": 60,
        "magic": 55,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 55,
            "defense": 50,
            "speed": 45
        }
    },
    {
        "name": "Venomoth",
        "health": 70,
        "magic": 65,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 65,
            "defense": 60,
            "speed": 90
        }
    },
    {
        "name": "Diglett",
        "health": 10,
        "magic": 55,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 55,
            "defense": 25,
            "speed": 95
        }
    },
    {
        "name": "Dugtrio",
        "health": 35,
        "magic": 100,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 100,
            "defense": 50,
            "speed": 120
        }
    },
    {
        "name": "Meowth",
        "health": 40,
        "magic": 45,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 45,
            "defense": 35,
            "speed": 90
        }
    },
    {
        "name": "Persian",
        "health": 65,
        "magic": 70,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 70,
            "defense": 60,
            "speed": 115
        }
    },
    {
        "name": "Psyduck",
        "health": 50,
        "magic": 52,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 52,
            "defense": 48,
            "speed": 55
        }
    },
    {
        "name": "Golduck",
        "health": 80,
        "magic": 82,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 82,
            "defense": 78,
            "speed": 85
        }
    },
    {
        "name": "Mankey",
        "health": 40,
        "magic": 80,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 80,
            "defense": 35,
            "speed": 70
        }
    },
    {
        "name": "Primeape",
        "health": 65,
        "magic": 105,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 105,
            "defense": 60,
            "speed": 95
        }
    },
    {
        "name": "Growlithe",
        "health": 55,
        "magic": 70,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 70,
            "defense": 45,
            "speed": 60
        }
    },
    {
        "name": "Arcanine",
        "health": 90,
        "magic": 110,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 110,
            "defense": 80,
            "speed": 95
        }
    },
    {
        "name": "Poliwag",
        "health": 40,
        "magic": 50,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 50,
            "defense": 40,
            "speed": 90
        }
    },
    {
        "name": "Poliwhirl",
        "health": 65,
        "magic": 65,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 65,
            "defense": 65,
            "speed": 90
        }
    },
    {
        "name": "Poliwrath",
        "health": 90,
        "magic": 95,
        "type": [
            "Water",
            "Fighting"
        ],
        "power": {
            "attack": 95,
            "defense": 95,
            "speed": 70
        }
    },
    {
        "name": "Abra",
        "health": 25,
        "magic": 20,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 20,
            "defense": 15,
            "speed": 90
        }
    },
    {
        "name": "Kadabra",
        "health": 40,
        "magic": 35,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 35,
            "defense": 30,
            "speed": 105
        }
    },
    {
        "name": "Alakazam",
        "health": 55,
        "magic": 50,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 50,
            "defense": 45,
            "speed": 120
        }
    },
    {
        "name": "Machop",
        "health": 70,
        "magic": 80,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 80,
            "defense": 50,
            "speed": 35
        }
    },
    {
        "name": "Machoke",
        "health": 80,
        "magic": 100,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 100,
            "defense": 70,
            "speed": 45
        }
    },
    {
        "name": "Machamp",
        "health": 90,
        "magic": 130,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 130,
            "defense": 80,
            "speed": 55
        }
    },
    {
        "name": "Bellsprout",
        "health": 50,
        "magic": 75,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 75,
            "defense": 35,
            "speed": 40
        }
    },
    {
        "name": "Weepinbell",
        "health": 65,
        "magic": 90,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 90,
            "defense": 50,
            "speed": 55
        }
    },
    {
        "name": "Victreebel",
        "health": 80,
        "magic": 105,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 105,
            "defense": 65,
            "speed": 70
        }
    },
    {
        "name": "Tentacool",
        "health": 40,
        "magic": 40,
        "type": [
            "Water",
            "Poison"
        ],
        "power": {
            "attack": 40,
            "defense": 35,
            "speed": 70
        }
    },
    {
        "name": "Tentacruel",
        "health": 80,
        "magic": 70,
        "type": [
            "Water",
            "Poison"
        ],
        "power": {
            "attack": 70,
            "defense": 65,
            "speed": 100
        }
    },
    {
        "name": "Geodude",
        "health": 40,
        "magic": 80,
        "type": [
            "Rock",
            "Ground"
        ],
        "power": {
            "attack": 80,
            "defense": 100,
            "speed": 20
        }
    },
    {
        "name": "Graveler",
        "health": 55,
        "magic": 95,
        "type": [
            "Rock",
            "Ground"
        ],
        "power": {
            "attack": 95,
            "defense": 115,
            "speed": 35
        }
    },
    {
        "name": "Golem",
        "health": 80,
        "magic": 120,
        "type": [
            "Rock",
            "Ground"
        ],
        "power": {
            "attack": 120,
            "defense": 130,
            "speed": 45
        }
    },
    {
        "name": "Ponyta",
        "health": 50,
        "magic": 85,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 85,
            "defense": 55,
            "speed": 90
        }
    },
    {
        "name": "Rapidash",
        "health": 65,
        "magic": 100,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 100,
            "defense": 70,
            "speed": 105
        }
    },
    {
        "name": "Slowpoke",
        "health": 90,
        "magic": 65,
        "type": [
            "Water",
            "Psychic"
        ],
        "power": {
            "attack": 65,
            "defense": 65,
            "speed": 15
        }
    },
    {
        "name": "Slowbro",
        "health": 95,
        "magic": 75,
        "type": [
            "Water",
            "Psychic"
        ],
        "power": {
            "attack": 75,
            "defense": 110,
            "speed": 30
        }
    },
    {
        "name": "Magnemite",
        "health": 25,
        "magic": 35,
        "type": [
            "Electric",
            "Steel"
        ],
        "power": {
            "attack": 35,
            "defense": 70,
            "speed": 45
        }
    },
    {
        "name": "Magneton",
        "health": 50,
        "magic": 60,
        "type": [
            "Electric",
            "Steel"
        ],
        "power": {
            "attack": 60,
            "defense": 95,
            "speed": 70
        }
    },
    {
        "name": "Farfetch'd",
        "health": 52,
        "magic": 90,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 90,
            "defense": 55,
            "speed": 60
        }
    },
    {
        "name": "Doduo",
        "health": 35,
        "magic": 85,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 85,
            "defense": 45,
            "speed": 75
        }
    },
    {
        "name": "Dodrio",
        "health": 60,
        "magic": 110,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 110,
            "defense": 70,
            "speed": 110
        }
    },
    {
        "name": "Seel",
        "health": 65,
        "magic": 45,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 45,
            "defense": 55,
            "speed": 45
        }
    },
    {
        "name": "Dewgong",
        "health": 90,
        "magic": 70,
        "type": [
            "Water",
            "Ice"
        ],
        "power": {
            "attack": 70,
            "defense": 80,
            "speed": 70
        }
    },
    {
        "name": "Grimer",
        "health": 80,
        "magic": 80,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 80,
            "defense": 50,
            "speed": 25
        }
    },
    {
        "name": "Muk",
        "health": 105,
        "magic": 105,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 105,
            "defense": 75,
            "speed": 50
        }
    },
    {
        "name": "Shellder",
        "health": 30,
        "magic": 65,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 65,
            "defense": 100,
            "speed": 40
        }
    },
    {
        "name": "Cloyster",
        "health": 50,
        "magic": 95,
        "type": [
            "Water",
            "Ice"
        ],
        "power": {
            "attack": 95,
            "defense": 180,
            "speed": 70
        }
    },
    {
        "name": "Gastly",
        "health": 30,
        "magic": 35,
        "type": [
            "Ghost",
            "Poison"
        ],
        "power": {
            "attack": 35,
            "defense": 30,
            "speed": 80
        }
    },
    {
        "name": "Haunter",
        "health": 45,
        "magic": 50,
        "type": [
            "Ghost",
            "Poison"
        ],
        "power": {
            "attack": 50,
            "defense": 45,
            "speed": 95
        }
    },
    {
        "name": "Gengar",
        "health": 60,
        "magic": 65,
        "type": [
            "Ghost",
            "Poison"
        ],
        "power": {
            "attack": 65,
            "defense": 60,
            "speed": 110
        }
    },
    {
        "name": "Onix",
        "health": 35,
        "magic": 45,
        "type": [
            "Rock",
            "Ground"
        ],
        "power": {
            "attack": 45,
            "defense": 160,
            "speed": 70
        }
    },
    {
        "name": "Drowzee",
        "health": 60,
        "magic": 48,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 48,
            "defense": 45,
            "speed": 42
        }
    },
    {
        "name": "Hypno",
        "health": 85,
        "magic": 73,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 73,
            "defense": 70,
            "speed": 67
        }
    },
    {
        "name": "Krabby",
        "health": 30,
        "magic": 105,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 105,
            "defense": 90,
            "speed": 50
        }
    },
    {
        "name": "Kingler",
        "health": 55,
        "magic": 130,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 130,
            "defense": 115,
            "speed": 75
        }
    },
    {
        "name": "Voltorb",
        "health": 40,
        "magic": 30,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 30,
            "defense": 50,
            "speed": 100
        }
    },
    {
        "name": "Electrode",
        "health": 60,
        "magic": 50,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 50,
            "defense": 70,
            "speed": 150
        }
    },
    {
        "name": "Exeggcute",
        "health": 60,
        "magic": 40,
        "type": [
            "Grass",
            "Psychic"
        ],
        "power": {
            "attack": 40,
            "defense": 80,
            "speed": 40
        }
    },
    {
        "name": "Exeggutor",
        "health": 95,
        "magic": 95,
        "type": [
            "Grass",
            "Psychic"
        ],
        "power": {
            "attack": 95,
            "defense": 85,
            "speed": 55
        }
    },
    {
        "name": "Cubone",
        "health": 50,
        "magic": 50,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 50,
            "defense": 95,
            "speed": 35
        }
    },
    {
        "name": "Marowak",
        "health": 60,
        "magic": 80,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 80,
            "defense": 110,
            "speed": 45
        }
    },
    {
        "name": "Hitmonlee",
        "health": 50,
        "magic": 120,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 120,
            "defense": 53,
            "speed": 87
        }
    },
    {
        "name": "Hitmonchan",
        "health": 50,
        "magic": 105,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 105,
            "defense": 79,
            "speed": 76
        }
    },
    {
        "name": "Lickitung",
        "health": 90,
        "magic": 55,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 55,
            "defense": 75,
            "speed": 30
        }
    },
    {
        "name": "Koffing",
        "health": 40,
        "magic": 65,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 65,
            "defense": 95,
            "speed": 35
        }
    },
    {
        "name": "Weezing",
        "health": 65,
        "magic": 90,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 90,
            "defense": 120,
            "speed": 60
        }
    },
    {
        "name": "Rhyhorn",
        "health": 80,
        "magic": 85,
        "type": [
            "Ground",
            "Rock"
        ],
        "power": {
            "attack": 85,
            "defense": 95,
            "speed": 25
        }
    },
    {
        "name": "Rhydon",
        "health": 105,
        "magic": 130,
        "type": [
            "Ground",
            "Rock"
        ],
        "power": {
            "attack": 130,
            "defense": 120,
            "speed": 40
        }
    },
    {
        "name": "Chansey",
        "health": 250,
        "magic": 5,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 5,
            "defense": 5,
            "speed": 50
        }
    },
    {
        "name": "Tangela",
        "health": 65,
        "magic": 55,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 55,
            "defense": 115,
            "speed": 60
        }
    },
    {
        "name": "Kangaskhan",
        "health": 105,
        "magic": 95,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 95,
            "defense": 80,
            "speed": 90
        }
    },
    {
        "name": "Horsea",
        "health": 30,
        "magic": 40,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 40,
            "defense": 70,
            "speed": 60
        }
    },
    {
        "name": "Seadra",
        "health": 55,
        "magic": 65,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 65,
            "defense": 95,
            "speed": 85
        }
    },
    {
        "name": "Goldeen",
        "health": 45,
        "magic": 67,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 67,
            "defense": 60,
            "speed": 63
        }
    },
    {
        "name": "Seaking",
        "health": 80,
        "magic": 92,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 92,
            "defense": 65,
            "speed": 68
        }
    },
    {
        "name": "Staryu",
        "health": 30,
        "magic": 45,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 45,
            "defense": 55,
            "speed": 85
        }
    },
    {
        "name": "Starmie",
        "health": 60,
        "magic": 75,
        "type": [
            "Water",
            "Psychic"
        ],
        "power": {
            "attack": 75,
            "defense": 85,
            "speed": 115
        }
    },
    {
        "name": "Mr. Mime",
        "health": 40,
        "magic": 45,
        "type": [
            "Psychic",
            "Fairy"
        ],
        "power": {
            "attack": 45,
            "defense": 65,
            "speed": 90
        }
    },
    {
        "name": "Scyther",
        "health": 70,
        "magic": 110,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 110,
            "defense": 80,
            "speed": 105
        }
    },
    {
        "name": "Jynx",
        "health": 65,
        "magic": 50,
        "type": [
            "Ice",
            "Psychic"
        ],
        "power": {
            "attack": 50,
            "defense": 35,
            "speed": 95
        }
    },
    {
        "name": "Electabuzz",
        "health": 65,
        "magic": 83,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 83,
            "defense": 57,
            "speed": 105
        }
    },
    {
        "name": "Magmar",
        "health": 65,
        "magic": 95,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 95,
            "defense": 57,
            "speed": 93
        }
    },
    {
        "name": "Pinsir",
        "health": 65,
        "magic": 125,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 125,
            "defense": 100,
            "speed": 85
        }
    },
    {
        "name": "Tauros",
        "health": 75,
        "magic": 100,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 100,
            "defense": 95,
            "speed": 110
        }
    },
    {
        "name": "Magikarp",
        "health": 20,
        "magic": 10,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 10,
            "defense": 55,
            "speed": 80
        }
    },
    {
        "name": "Gyarados",
        "health": 95,
        "magic": 125,
        "type": [
            "Water",
            "Flying"
        ],
        "power": {
            "attack": 125,
            "defense": 79,
            "speed": 81
        }
    },
    {
        "name": "Lapras",
        "health": 130,
        "magic": 85,
        "type": [
            "Water",
            "Ice"
        ],
        "power": {
            "attack": 85,
            "defense": 80,
            "speed": 60
        }
    },
    {
        "name": "Ditto",
        "health": 48,
        "magic": 48,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 48,
            "defense": 48,
            "speed": 48
        }
    },
    {
        "name": "Eevee",
        "health": 55,
        "magic": 55,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 55,
            "defense": 50,
            "speed": 55
        }
    },
    {
        "name": "Vaporeon",
        "health": 130,
        "magic": 65,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 65,
            "defense": 60,
            "speed": 65
        }
    },
    {
        "name": "Jolteon",
        "health": 65,
        "magic": 65,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 65,
            "defense": 60,
            "speed": 130
        }
    },
    {
        "name": "Flareon",
        "health": 65,
        "magic": 130,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 130,
            "defense": 60,
            "speed": 65
        }
    },
    {
        "name": "Porygon",
        "health": 65,
        "magic": 60,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 60,
            "defense": 70,
            "speed": 40
        }
    },
    {
        "name": "Omanyte",
        "health": 35,
        "magic": 40,
        "type": [
            "Rock",
            "Water"
        ],
        "power": {
            "attack": 40,
            "defense": 100,
            "speed": 35
        }
    },
    {
        "name": "Omastar",
        "health": 70,
        "magic": 60,
        "type": [
            "Rock",
            "Water"
        ],
        "power": {
            "attack": 60,
            "defense": 125,
            "speed": 55
        }
    },
    {
        "name": "Kabuto",
        "health": 30,
        "magic": 80,
        "type": [
            "Rock",
            "Water"
        ],
        "power": {
            "attack": 80,
            "defense": 90,
            "speed": 55
        }
    },
    {
        "name": "Kabutops",
        "health": 60,
        "magic": 115,
        "type": [
            "Rock",
            "Water"
        ],
        "power": {
            "attack": 115,
            "defense": 105,
            "speed": 80
        }
    },
    {
        "name": "Aerodactyl",
        "health": 80,
        "magic": 105,
        "type": [
            "Rock",
            "Flying"
        ],
        "power": {
            "attack": 105,
            "defense": 65,
            "speed": 130
        }
    },
    {
        "name": "Snorlax",
        "health": 160,
        "magic": 110,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 110,
            "defense": 65,
            "speed": 30
        }
    },
    {
        "name": "Articuno",
        "health": 90,
        "magic": 85,
        "type": [
            "Ice",
            "Flying"
        ],
        "power": {
            "attack": 85,
            "defense": 100,
            "speed": 85
        }
    },
    {
        "name": "Zapdos",
        "health": 90,
        "magic": 90,
        "type": [
            "Electric",
            "Flying"
        ],
        "power": {
            "attack": 90,
            "defense": 85,
            "speed": 100
        }
    },
    {
        "name": "Moltres",
        "health": 90,
        "magic": 100,
        "type": [
            "Fire",
            "Flying"
        ],
        "power": {
            "attack": 100,
            "defense": 90,
            "speed": 90
        }
    },
    {
        "name": "Dratini",
        "health": 41,
        "magic": 64,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 64,
            "defense": 45,
            "speed": 50
        }
    },
    {
        "name": "Dragonair",
        "health": 61,
        "magic": 84,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 84,
            "defense": 65,
            "speed": 70
        }
    },
    {
        "name": "Dragonite",
        "health": 91,
        "magic": 134,
        "type": [
            "Dragon",
            "Flying"
        ],
        "power": {
            "attack": 134,
            "defense": 95,
            "speed": 80
        }
    },
    {
        "name": "Mewtwo",
        "health": 106,
        "magic": 110,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 110,
            "defense": 90,
            "speed": 130
        }
    },
    {
        "name": "Mew",
        "health": 100,
        "magic": 100,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 100,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Chikorita",
        "health": 45,
        "magic": 49,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 49,
            "defense": 65,
            "speed": 45
        }
    },
    {
        "name": "Bayleef",
        "health": 60,
        "magic": 62,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 62,
            "defense": 80,
            "speed": 60
        }
    },
    {
        "name": "Meganium",
        "health": 80,
        "magic": 82,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 82,
            "defense": 100,
            "speed": 80
        }
    },
    {
        "name": "Cyndaquil",
        "health": 39,
        "magic": 52,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 52,
            "defense": 43,
            "speed": 65
        }
    },
    {
        "name": "Quilava",
        "health": 58,
        "magic": 64,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 64,
            "defense": 58,
            "speed": 80
        }
    },
    {
        "name": "Typhlosion",
        "health": 78,
        "magic": 84,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 84,
            "defense": 78,
            "speed": 100
        }
    },
    {
        "name": "Totodile",
        "health": 50,
        "magic": 65,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 65,
            "defense": 64,
            "speed": 43
        }
    },
    {
        "name": "Croconaw",
        "health": 65,
        "magic": 80,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 80,
            "defense": 80,
            "speed": 58
        }
    },
    {
        "name": "Feraligatr",
        "health": 85,
        "magic": 105,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 105,
            "defense": 100,
            "speed": 78
        }
    },
    {
        "name": "Sentret",
        "health": 35,
        "magic": 46,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 46,
            "defense": 34,
            "speed": 20
        }
    },
    {
        "name": "Furret",
        "health": 85,
        "magic": 76,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 76,
            "defense": 64,
            "speed": 90
        }
    },
    {
        "name": "Hoothoot",
        "health": 60,
        "magic": 30,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 30,
            "defense": 30,
            "speed": 50
        }
    },
    {
        "name": "Noctowl",
        "health": 100,
        "magic": 50,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 50,
            "defense": 50,
            "speed": 70
        }
    },
    {
        "name": "Ledyba",
        "health": 40,
        "magic": 20,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 20,
            "defense": 30,
            "speed": 55
        }
    },
    {
        "name": "Ledian",
        "health": 55,
        "magic": 35,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 35,
            "defense": 50,
            "speed": 85
        }
    },
    {
        "name": "Spinarak",
        "health": 40,
        "magic": 60,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 60,
            "defense": 40,
            "speed": 30
        }
    },
    {
        "name": "Ariados",
        "health": 70,
        "magic": 90,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 90,
            "defense": 70,
            "speed": 40
        }
    },
    {
        "name": "Crobat",
        "health": 85,
        "magic": 90,
        "type": [
            "Poison",
            "Flying"
        ],
        "power": {
            "attack": 90,
            "defense": 80,
            "speed": 130
        }
    },
    {
        "name": "Chinchou",
        "health": 75,
        "magic": 38,
        "type": [
            "Water",
            "Electric"
        ],
        "power": {
            "attack": 38,
            "defense": 38,
            "speed": 67
        }
    },
    {
        "name": "Lanturn",
        "health": 125,
        "magic": 58,
        "type": [
            "Water",
            "Electric"
        ],
        "power": {
            "attack": 58,
            "defense": 58,
            "speed": 67
        }
    },
    {
        "name": "Pichu",
        "health": 20,
        "magic": 40,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 40,
            "defense": 15,
            "speed": 60
        }
    },
    {
        "name": "Cleffa",
        "health": 50,
        "magic": 25,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 25,
            "defense": 28,
            "speed": 15
        }
    },
    {
        "name": "Igglybuff",
        "health": 90,
        "magic": 30,
        "type": [
            "Normal",
            "Fairy"
        ],
        "power": {
            "attack": 30,
            "defense": 15,
            "speed": 15
        }
    },
    {
        "name": "Togepi",
        "health": 35,
        "magic": 20,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 20,
            "defense": 65,
            "speed": 20
        }
    },
    {
        "name": "Togetic",
        "health": 55,
        "magic": 40,
        "type": [
            "Fairy",
            "Flying"
        ],
        "power": {
            "attack": 40,
            "defense": 85,
            "speed": 40
        }
    },
    {
        "name": "Natu",
        "health": 40,
        "magic": 50,
        "type": [
            "Psychic",
            "Flying"
        ],
        "power": {
            "attack": 50,
            "defense": 45,
            "speed": 70
        }
    },
    {
        "name": "Xatu",
        "health": 65,
        "magic": 75,
        "type": [
            "Psychic",
            "Flying"
        ],
        "power": {
            "attack": 75,
            "defense": 70,
            "speed": 95
        }
    },
    {
        "name": "Mareep",
        "health": 55,
        "magic": 40,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 40,
            "defense": 40,
            "speed": 35
        }
    },
    {
        "name": "Flaaffy",
        "health": 70,
        "magic": 55,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 55,
            "defense": 55,
            "speed": 45
        }
    },
    {
        "name": "Ampharos",
        "health": 90,
        "magic": 75,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 75,
            "defense": 85,
            "speed": 55
        }
    },
    {
        "name": "Bellossom",
        "health": 75,
        "magic": 80,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 80,
            "defense": 95,
            "speed": 50
        }
    },
    {
        "name": "Marill",
        "health": 70,
        "magic": 20,
        "type": [
            "Water",
            "Fairy"
        ],
        "power": {
            "attack": 20,
            "defense": 50,
            "speed": 40
        }
    },
    {
        "name": "Azumarill",
        "health": 100,
        "magic": 50,
        "type": [
            "Water",
            "Fairy"
        ],
        "power": {
            "attack": 50,
            "defense": 80,
            "speed": 50
        }
    },
    {
        "name": "Sudowoodo",
        "health": 70,
        "magic": 100,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 100,
            "defense": 115,
            "speed": 30
        }
    },
    {
        "name": "Politoed",
        "health": 90,
        "magic": 75,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 75,
            "defense": 75,
            "speed": 70
        }
    },
    {
        "name": "Hoppip",
        "health": 35,
        "magic": 35,
        "type": [
            "Grass",
            "Flying"
        ],
        "power": {
            "attack": 35,
            "defense": 40,
            "speed": 50
        }
    },
    {
        "name": "Skiploom",
        "health": 55,
        "magic": 45,
        "type": [
            "Grass",
            "Flying"
        ],
        "power": {
            "attack": 45,
            "defense": 50,
            "speed": 80
        }
    },
    {
        "name": "Jumpluff",
        "health": 75,
        "magic": 55,
        "type": [
            "Grass",
            "Flying"
        ],
        "power": {
            "attack": 55,
            "defense": 70,
            "speed": 110
        }
    },
    {
        "name": "Aipom",
        "health": 55,
        "magic": 70,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 70,
            "defense": 55,
            "speed": 85
        }
    },
    {
        "name": "Sunkern",
        "health": 30,
        "magic": 30,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 30,
            "defense": 30,
            "speed": 30
        }
    },
    {
        "name": "Sunflora",
        "health": 75,
        "magic": 75,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 75,
            "defense": 55,
            "speed": 30
        }
    },
    {
        "name": "Yanma",
        "health": 65,
        "magic": 65,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 65,
            "defense": 45,
            "speed": 95
        }
    },
    {
        "name": "Wooper",
        "health": 55,
        "magic": 45,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 45,
            "defense": 45,
            "speed": 15
        }
    },
    {
        "name": "Quagsire",
        "health": 95,
        "magic": 85,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 85,
            "defense": 85,
            "speed": 35
        }
    },
    {
        "name": "Espeon",
        "health": 65,
        "magic": 65,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 65,
            "defense": 60,
            "speed": 110
        }
    },
    {
        "name": "Umbreon",
        "health": 95,
        "magic": 65,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 65,
            "defense": 110,
            "speed": 65
        }
    },
    {
        "name": "Murkrow",
        "health": 60,
        "magic": 85,
        "type": [
            "Dark",
            "Flying"
        ],
        "power": {
            "attack": 85,
            "defense": 42,
            "speed": 91
        }
    },
    {
        "name": "Slowking",
        "health": 95,
        "magic": 75,
        "type": [
            "Water",
            "Psychic"
        ],
        "power": {
            "attack": 75,
            "defense": 80,
            "speed": 30
        }
    },
    {
        "name": "Misdreavus",
        "health": 60,
        "magic": 60,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 60,
            "defense": 60,
            "speed": 85
        }
    },
    {
        "name": "Unown",
        "health": 48,
        "magic": 72,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 72,
            "defense": 48,
            "speed": 48
        }
    },
    {
        "name": "Wobbuffet",
        "health": 190,
        "magic": 33,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 33,
            "defense": 58,
            "speed": 33
        }
    },
    {
        "name": "Girafarig",
        "health": 70,
        "magic": 80,
        "type": [
            "Normal",
            "Psychic"
        ],
        "power": {
            "attack": 80,
            "defense": 65,
            "speed": 85
        }
    },
    {
        "name": "Pineco",
        "health": 50,
        "magic": 65,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 65,
            "defense": 90,
            "speed": 15
        }
    },
    {
        "name": "Forretress",
        "health": 75,
        "magic": 90,
        "type": [
            "Bug",
            "Steel"
        ],
        "power": {
            "attack": 90,
            "defense": 140,
            "speed": 40
        }
    },
    {
        "name": "Dunsparce",
        "health": 100,
        "magic": 70,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 70,
            "defense": 70,
            "speed": 45
        }
    },
    {
        "name": "Gligar",
        "health": 65,
        "magic": 75,
        "type": [
            "Ground",
            "Flying"
        ],
        "power": {
            "attack": 75,
            "defense": 105,
            "speed": 85
        }
    },
    {
        "name": "Steelix",
        "health": 75,
        "magic": 85,
        "type": [
            "Steel",
            "Ground"
        ],
        "power": {
            "attack": 85,
            "defense": 200,
            "speed": 30
        }
    },
    {
        "name": "Snubbull",
        "health": 60,
        "magic": 80,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 80,
            "defense": 50,
            "speed": 30
        }
    },
    {
        "name": "Granbull",
        "health": 90,
        "magic": 120,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 120,
            "defense": 75,
            "speed": 45
        }
    },
    {
        "name": "Qwilfish",
        "health": 65,
        "magic": 95,
        "type": [
            "Water",
            "Poison"
        ],
        "power": {
            "attack": 95,
            "defense": 85,
            "speed": 85
        }
    },
    {
        "name": "Scizor",
        "health": 70,
        "magic": 130,
        "type": [
            "Bug",
            "Steel"
        ],
        "power": {
            "attack": 130,
            "defense": 100,
            "speed": 65
        }
    },
    {
        "name": "Shuckle",
        "health": 20,
        "magic": 10,
        "type": [
            "Bug",
            "Rock"
        ],
        "power": {
            "attack": 10,
            "defense": 230,
            "speed": 5
        }
    },
    {
        "name": "Heracross",
        "health": 80,
        "magic": 125,
        "type": [
            "Bug",
            "Fighting"
        ],
        "power": {
            "attack": 125,
            "defense": 75,
            "speed": 85
        }
    },
    {
        "name": "Sneasel",
        "health": 55,
        "magic": 95,
        "type": [
            "Dark",
            "Ice"
        ],
        "power": {
            "attack": 95,
            "defense": 55,
            "speed": 115
        }
    },
    {
        "name": "Teddiursa",
        "health": 60,
        "magic": 80,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 80,
            "defense": 50,
            "speed": 40
        }
    },
    {
        "name": "Ursaring",
        "health": 90,
        "magic": 130,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 130,
            "defense": 75,
            "speed": 55
        }
    },
    {
        "name": "Slugma",
        "health": 40,
        "magic": 40,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 40,
            "defense": 40,
            "speed": 20
        }
    },
    {
        "name": "Magcargo",
        "health": 60,
        "magic": 50,
        "type": [
            "Fire",
            "Rock"
        ],
        "power": {
            "attack": 50,
            "defense": 120,
            "speed": 30
        }
    },
    {
        "name": "Swinub",
        "health": 50,
        "magic": 50,
        "type": [
            "Ice",
            "Ground"
        ],
        "power": {
            "attack": 50,
            "defense": 40,
            "speed": 50
        }
    },
    {
        "name": "Piloswine",
        "health": 100,
        "magic": 100,
        "type": [
            "Ice",
            "Ground"
        ],
        "power": {
            "attack": 100,
            "defense": 80,
            "speed": 50
        }
    },
    {
        "name": "Corsola",
        "health": 65,
        "magic": 55,
        "type": [
            "Water",
            "Rock"
        ],
        "power": {
            "attack": 55,
            "defense": 95,
            "speed": 35
        }
    },
    {
        "name": "Remoraid",
        "health": 35,
        "magic": 65,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 65,
            "defense": 35,
            "speed": 65
        }
    },
    {
        "name": "Octillery",
        "health": 75,
        "magic": 105,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 105,
            "defense": 75,
            "speed": 45
        }
    },
    {
        "name": "Delibird",
        "health": 45,
        "magic": 55,
        "type": [
            "Ice",
            "Flying"
        ],
        "power": {
            "attack": 55,
            "defense": 45,
            "speed": 75
        }
    },
    {
        "name": "Mantine",
        "health": 85,
        "magic": 40,
        "type": [
            "Water",
            "Flying"
        ],
        "power": {
            "attack": 40,
            "defense": 70,
            "speed": 70
        }
    },
    {
        "name": "Skarmory",
        "health": 65,
        "magic": 80,
        "type": [
            "Steel",
            "Flying"
        ],
        "power": {
            "attack": 80,
            "defense": 140,
            "speed": 70
        }
    },
    {
        "name": "Houndour",
        "health": 45,
        "magic": 60,
        "type": [
            "Dark",
            "Fire"
        ],
        "power": {
            "attack": 60,
            "defense": 30,
            "speed": 65
        }
    },
    {
        "name": "Houndoom",
        "health": 75,
        "magic": 90,
        "type": [
            "Dark",
            "Fire"
        ],
        "power": {
            "attack": 90,
            "defense": 50,
            "speed": 95
        }
    },
    {
        "name": "Kingdra",
        "health": 75,
        "magic": 95,
        "type": [
            "Water",
            "Dragon"
        ],
        "power": {
            "attack": 95,
            "defense": 95,
            "speed": 85
        }
    },
    {
        "name": "Phanpy",
        "health": 90,
        "magic": 60,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 60,
            "defense": 60,
            "speed": 40
        }
    },
    {
        "name": "Donphan",
        "health": 90,
        "magic": 120,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 120,
            "defense": 120,
            "speed": 50
        }
    },
    {
        "name": "Porygon2",
        "health": 85,
        "magic": 80,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 80,
            "defense": 90,
            "speed": 60
        }
    },
    {
        "name": "Stantler",
        "health": 73,
        "magic": 95,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 95,
            "defense": 62,
            "speed": 85
        }
    },
    {
        "name": "Smeargle",
        "health": 55,
        "magic": 20,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 20,
            "defense": 35,
            "speed": 75
        }
    },
    {
        "name": "Tyrogue",
        "health": 35,
        "magic": 35,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 35,
            "defense": 35,
            "speed": 35
        }
    },
    {
        "name": "Hitmontop",
        "health": 50,
        "magic": 95,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 95,
            "defense": 95,
            "speed": 70
        }
    },
    {
        "name": "Smoochum",
        "health": 45,
        "magic": 30,
        "type": [
            "Ice",
            "Psychic"
        ],
        "power": {
            "attack": 30,
            "defense": 15,
            "speed": 65
        }
    },
    {
        "name": "Elekid",
        "health": 45,
        "magic": 63,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 63,
            "defense": 37,
            "speed": 95
        }
    },
    {
        "name": "Magby",
        "health": 45,
        "magic": 75,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 75,
            "defense": 37,
            "speed": 83
        }
    },
    {
        "name": "Miltank",
        "health": 95,
        "magic": 80,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 80,
            "defense": 105,
            "speed": 100
        }
    },
    {
        "name": "Blissey",
        "health": 255,
        "magic": 10,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 10,
            "defense": 10,
            "speed": 55
        }
    },
    {
        "name": "Raikou",
        "health": 90,
        "magic": 85,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 85,
            "defense": 75,
            "speed": 115
        }
    },
    {
        "name": "Entei",
        "health": 115,
        "magic": 115,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 115,
            "defense": 85,
            "speed": 100
        }
    },
    {
        "name": "Suicune",
        "health": 100,
        "magic": 75,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 75,
            "defense": 115,
            "speed": 85
        }
    },
    {
        "name": "Larvitar",
        "health": 50,
        "magic": 64,
        "type": [
            "Rock",
            "Ground"
        ],
        "power": {
            "attack": 64,
            "defense": 50,
            "speed": 41
        }
    },
    {
        "name": "Pupitar",
        "health": 70,
        "magic": 84,
        "type": [
            "Rock",
            "Ground"
        ],
        "power": {
            "attack": 84,
            "defense": 70,
            "speed": 51
        }
    },
    {
        "name": "Tyranitar",
        "health": 100,
        "magic": 134,
        "type": [
            "Rock",
            "Dark"
        ],
        "power": {
            "attack": 134,
            "defense": 110,
            "speed": 61
        }
    },
    {
        "name": "Lugia",
        "health": 106,
        "magic": 90,
        "type": [
            "Psychic",
            "Flying"
        ],
        "power": {
            "attack": 90,
            "defense": 130,
            "speed": 110
        }
    },
    {
        "name": "Ho-Oh",
        "health": 106,
        "magic": 130,
        "type": [
            "Fire",
            "Flying"
        ],
        "power": {
            "attack": 130,
            "defense": 90,
            "speed": 90
        }
    },
    {
        "name": "Celebi",
        "health": 100,
        "magic": 100,
        "type": [
            "Psychic",
            "Grass"
        ],
        "power": {
            "attack": 100,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Treecko",
        "health": 40,
        "magic": 45,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 45,
            "defense": 35,
            "speed": 70
        }
    },
    {
        "name": "Grovyle",
        "health": 50,
        "magic": 65,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 65,
            "defense": 45,
            "speed": 95
        }
    },
    {
        "name": "Sceptile",
        "health": 70,
        "magic": 85,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 85,
            "defense": 65,
            "speed": 120
        }
    },
    {
        "name": "Torchic",
        "health": 45,
        "magic": 60,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 60,
            "defense": 40,
            "speed": 45
        }
    },
    {
        "name": "Combusken",
        "health": 60,
        "magic": 85,
        "type": [
            "Fire",
            "Fighting"
        ],
        "power": {
            "attack": 85,
            "defense": 60,
            "speed": 55
        }
    },
    {
        "name": "Blaziken",
        "health": 80,
        "magic": 120,
        "type": [
            "Fire",
            "Fighting"
        ],
        "power": {
            "attack": 120,
            "defense": 70,
            "speed": 80
        }
    },
    {
        "name": "Mudkip",
        "health": 50,
        "magic": 70,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 70,
            "defense": 50,
            "speed": 40
        }
    },
    {
        "name": "Marshtomp",
        "health": 70,
        "magic": 85,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 85,
            "defense": 70,
            "speed": 50
        }
    },
    {
        "name": "Swampert",
        "health": 100,
        "magic": 110,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 110,
            "defense": 90,
            "speed": 60
        }
    },
    {
        "name": "Poochyena",
        "health": 35,
        "magic": 55,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 55,
            "defense": 35,
            "speed": 35
        }
    },
    {
        "name": "Mightyena",
        "health": 70,
        "magic": 90,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 90,
            "defense": 70,
            "speed": 70
        }
    },
    {
        "name": "Zigzagoon",
        "health": 38,
        "magic": 30,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 30,
            "defense": 41,
            "speed": 60
        }
    },
    {
        "name": "Linoone",
        "health": 78,
        "magic": 70,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 70,
            "defense": 61,
            "speed": 100
        }
    },
    {
        "name": "Wurmple",
        "health": 45,
        "magic": 45,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 45,
            "defense": 35,
            "speed": 20
        }
    },
    {
        "name": "Silcoon",
        "health": 50,
        "magic": 35,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 35,
            "defense": 55,
            "speed": 15
        }
    },
    {
        "name": "Beautifly",
        "health": 60,
        "magic": 70,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 70,
            "defense": 50,
            "speed": 65
        }
    },
    {
        "name": "Cascoon",
        "health": 50,
        "magic": 35,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 35,
            "defense": 55,
            "speed": 15
        }
    },
    {
        "name": "Dustox",
        "health": 60,
        "magic": 50,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 50,
            "defense": 70,
            "speed": 65
        }
    },
    {
        "name": "Lotad",
        "health": 40,
        "magic": 30,
        "type": [
            "Water",
            "Grass"
        ],
        "power": {
            "attack": 30,
            "defense": 30,
            "speed": 30
        }
    },
    {
        "name": "Lombre",
        "health": 60,
        "magic": 50,
        "type": [
            "Water",
            "Grass"
        ],
        "power": {
            "attack": 50,
            "defense": 50,
            "speed": 50
        }
    },
    {
        "name": "Ludicolo",
        "health": 80,
        "magic": 70,
        "type": [
            "Water",
            "Grass"
        ],
        "power": {
            "attack": 70,
            "defense": 70,
            "speed": 70
        }
    },
    {
        "name": "Seedot",
        "health": 40,
        "magic": 40,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 40,
            "defense": 50,
            "speed": 30
        }
    },
    {
        "name": "Nuzleaf",
        "health": 70,
        "magic": 70,
        "type": [
            "Grass",
            "Dark"
        ],
        "power": {
            "attack": 70,
            "defense": 40,
            "speed": 60
        }
    },
    {
        "name": "Shiftry",
        "health": 90,
        "magic": 100,
        "type": [
            "Grass",
            "Dark"
        ],
        "power": {
            "attack": 100,
            "defense": 60,
            "speed": 80
        }
    },
    {
        "name": "Taillow",
        "health": 40,
        "magic": 55,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 55,
            "defense": 30,
            "speed": 85
        }
    },
    {
        "name": "Swellow",
        "health": 60,
        "magic": 85,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 85,
            "defense": 60,
            "speed": 125
        }
    },
    {
        "name": "Wingull",
        "health": 40,
        "magic": 30,
        "type": [
            "Water",
            "Flying"
        ],
        "power": {
            "attack": 30,
            "defense": 30,
            "speed": 85
        }
    },
    {
        "name": "Pelipper",
        "health": 60,
        "magic": 50,
        "type": [
            "Water",
            "Flying"
        ],
        "power": {
            "attack": 50,
            "defense": 100,
            "speed": 65
        }
    },
    {
        "name": "Ralts",
        "health": 28,
        "magic": 25,
        "type": [
            "Psychic",
            "Fairy"
        ],
        "power": {
            "attack": 25,
            "defense": 25,
            "speed": 40
        }
    },
    {
        "name": "Kirlia",
        "health": 38,
        "magic": 35,
        "type": [
            "Psychic",
            "Fairy"
        ],
        "power": {
            "attack": 35,
            "defense": 35,
            "speed": 50
        }
    },
    {
        "name": "Gardevoir",
        "health": 68,
        "magic": 65,
        "type": [
            "Psychic",
            "Fairy"
        ],
        "power": {
            "attack": 65,
            "defense": 65,
            "speed": 80
        }
    },
    {
        "name": "Surskit",
        "health": 40,
        "magic": 30,
        "type": [
            "Bug",
            "Water"
        ],
        "power": {
            "attack": 30,
            "defense": 32,
            "speed": 65
        }
    },
    {
        "name": "Masquerain",
        "health": 70,
        "magic": 60,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 60,
            "defense": 62,
            "speed": 80
        }
    },
    {
        "name": "Shroomish",
        "health": 60,
        "magic": 40,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 40,
            "defense": 60,
            "speed": 35
        }
    },
    {
        "name": "Breloom",
        "health": 60,
        "magic": 130,
        "type": [
            "Grass",
            "Fighting"
        ],
        "power": {
            "attack": 130,
            "defense": 80,
            "speed": 70
        }
    },
    {
        "name": "Slakoth",
        "health": 60,
        "magic": 60,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 60,
            "defense": 60,
            "speed": 30
        }
    },
    {
        "name": "Vigoroth",
        "health": 80,
        "magic": 80,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 80,
            "defense": 80,
            "speed": 90
        }
    },
    {
        "name": "Slaking",
        "health": 150,
        "magic": 160,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 160,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Nincada",
        "health": 31,
        "magic": 45,
        "type": [
            "Bug",
            "Ground"
        ],
        "power": {
            "attack": 45,
            "defense": 90,
            "speed": 40
        }
    },
    {
        "name": "Ninjask",
        "health": 61,
        "magic": 90,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 90,
            "defense": 45,
            "speed": 160
        }
    },
    {
        "name": "Shedinja",
        "health": 1,
        "magic": 90,
        "type": [
            "Bug",
            "Ghost"
        ],
        "power": {
            "attack": 90,
            "defense": 45,
            "speed": 40
        }
    },
    {
        "name": "Whismur",
        "health": 64,
        "magic": 51,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 51,
            "defense": 23,
            "speed": 28
        }
    },
    {
        "name": "Loudred",
        "health": 84,
        "magic": 71,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 71,
            "defense": 43,
            "speed": 48
        }
    },
    {
        "name": "Exploud",
        "health": 104,
        "magic": 91,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 91,
            "defense": 63,
            "speed": 68
        }
    },
    {
        "name": "Makuhita",
        "health": 72,
        "magic": 60,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 60,
            "defense": 30,
            "speed": 25
        }
    },
    {
        "name": "Hariyama",
        "health": 144,
        "magic": 120,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 120,
            "defense": 60,
            "speed": 50
        }
    },
    {
        "name": "Azurill",
        "health": 50,
        "magic": 20,
        "type": [
            "Normal",
            "Fairy"
        ],
        "power": {
            "attack": 20,
            "defense": 40,
            "speed": 20
        }
    },
    {
        "name": "Nosepass",
        "health": 30,
        "magic": 45,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 45,
            "defense": 135,
            "speed": 30
        }
    },
    {
        "name": "Skitty",
        "health": 50,
        "magic": 45,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 45,
            "defense": 45,
            "speed": 50
        }
    },
    {
        "name": "Delcatty",
        "health": 70,
        "magic": 65,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 65,
            "defense": 65,
            "speed": 90
        }
    },
    {
        "name": "Sableye",
        "health": 50,
        "magic": 75,
        "type": [
            "Dark",
            "Ghost"
        ],
        "power": {
            "attack": 75,
            "defense": 75,
            "speed": 50
        }
    },
    {
        "name": "Mawile",
        "health": 50,
        "magic": 85,
        "type": [
            "Steel",
            "Fairy"
        ],
        "power": {
            "attack": 85,
            "defense": 85,
            "speed": 50
        }
    },
    {
        "name": "Aron",
        "health": 50,
        "magic": 70,
        "type": [
            "Steel",
            "Rock"
        ],
        "power": {
            "attack": 70,
            "defense": 100,
            "speed": 30
        }
    },
    {
        "name": "Lairon",
        "health": 60,
        "magic": 90,
        "type": [
            "Steel",
            "Rock"
        ],
        "power": {
            "attack": 90,
            "defense": 140,
            "speed": 40
        }
    },
    {
        "name": "Aggron",
        "health": 70,
        "magic": 110,
        "type": [
            "Steel",
            "Rock"
        ],
        "power": {
            "attack": 110,
            "defense": 180,
            "speed": 50
        }
    },
    {
        "name": "Meditite",
        "health": 30,
        "magic": 40,
        "type": [
            "Fighting",
            "Psychic"
        ],
        "power": {
            "attack": 40,
            "defense": 55,
            "speed": 60
        }
    },
    {
        "name": "Medicham",
        "health": 60,
        "magic": 60,
        "type": [
            "Fighting",
            "Psychic"
        ],
        "power": {
            "attack": 60,
            "defense": 75,
            "speed": 80
        }
    },
    {
        "name": "Electrike",
        "health": 40,
        "magic": 45,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 45,
            "defense": 40,
            "speed": 65
        }
    },
    {
        "name": "Manectric",
        "health": 70,
        "magic": 75,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 75,
            "defense": 60,
            "speed": 105
        }
    },
    {
        "name": "Plusle",
        "health": 60,
        "magic": 50,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 50,
            "defense": 40,
            "speed": 95
        }
    },
    {
        "name": "Minun",
        "health": 60,
        "magic": 40,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 40,
            "defense": 50,
            "speed": 95
        }
    },
    {
        "name": "Volbeat",
        "health": 65,
        "magic": 73,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 73,
            "defense": 75,
            "speed": 85
        }
    },
    {
        "name": "Illumise",
        "health": 65,
        "magic": 47,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 47,
            "defense": 75,
            "speed": 85
        }
    },
    {
        "name": "Roselia",
        "health": 50,
        "magic": 60,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 60,
            "defense": 45,
            "speed": 65
        }
    },
    {
        "name": "Gulpin",
        "health": 70,
        "magic": 43,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 43,
            "defense": 53,
            "speed": 40
        }
    },
    {
        "name": "Swalot",
        "health": 100,
        "magic": 73,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 73,
            "defense": 83,
            "speed": 55
        }
    },
    {
        "name": "Carvanha",
        "health": 45,
        "magic": 90,
        "type": [
            "Water",
            "Dark"
        ],
        "power": {
            "attack": 90,
            "defense": 20,
            "speed": 65
        }
    },
    {
        "name": "Sharpedo",
        "health": 70,
        "magic": 120,
        "type": [
            "Water",
            "Dark"
        ],
        "power": {
            "attack": 120,
            "defense": 40,
            "speed": 95
        }
    },
    {
        "name": "Wailmer",
        "health": 130,
        "magic": 70,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 70,
            "defense": 35,
            "speed": 60
        }
    },
    {
        "name": "Wailord",
        "health": 170,
        "magic": 90,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 90,
            "defense": 45,
            "speed": 60
        }
    },
    {
        "name": "Numel",
        "health": 60,
        "magic": 60,
        "type": [
            "Fire",
            "Ground"
        ],
        "power": {
            "attack": 60,
            "defense": 40,
            "speed": 35
        }
    },
    {
        "name": "Camerupt",
        "health": 70,
        "magic": 100,
        "type": [
            "Fire",
            "Ground"
        ],
        "power": {
            "attack": 100,
            "defense": 70,
            "speed": 40
        }
    },
    {
        "name": "Torkoal",
        "health": 70,
        "magic": 85,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 85,
            "defense": 140,
            "speed": 20
        }
    },
    {
        "name": "Spoink",
        "health": 60,
        "magic": 25,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 25,
            "defense": 35,
            "speed": 60
        }
    },
    {
        "name": "Grumpig",
        "health": 80,
        "magic": 45,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 45,
            "defense": 65,
            "speed": 80
        }
    },
    {
        "name": "Spinda",
        "health": 60,
        "magic": 60,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 60,
            "defense": 60,
            "speed": 60
        }
    },
    {
        "name": "Trapinch",
        "health": 45,
        "magic": 100,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 100,
            "defense": 45,
            "speed": 10
        }
    },
    {
        "name": "Vibrava",
        "health": 50,
        "magic": 70,
        "type": [
            "Ground",
            "Dragon"
        ],
        "power": {
            "attack": 70,
            "defense": 50,
            "speed": 70
        }
    },
    {
        "name": "Flygon",
        "health": 80,
        "magic": 100,
        "type": [
            "Ground",
            "Dragon"
        ],
        "power": {
            "attack": 100,
            "defense": 80,
            "speed": 100
        }
    },
    {
        "name": "Cacnea",
        "health": 50,
        "magic": 85,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 85,
            "defense": 40,
            "speed": 35
        }
    },
    {
        "name": "Cacturne",
        "health": 70,
        "magic": 115,
        "type": [
            "Grass",
            "Dark"
        ],
        "power": {
            "attack": 115,
            "defense": 60,
            "speed": 55
        }
    },
    {
        "name": "Swablu",
        "health": 45,
        "magic": 40,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 40,
            "defense": 60,
            "speed": 50
        }
    },
    {
        "name": "Altaria",
        "health": 75,
        "magic": 70,
        "type": [
            "Dragon",
            "Flying"
        ],
        "power": {
            "attack": 70,
            "defense": 90,
            "speed": 80
        }
    },
    {
        "name": "Zangoose",
        "health": 73,
        "magic": 115,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 115,
            "defense": 60,
            "speed": 90
        }
    },
    {
        "name": "Seviper",
        "health": 73,
        "magic": 100,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 100,
            "defense": 60,
            "speed": 65
        }
    },
    {
        "name": "Lunatone",
        "health": 90,
        "magic": 55,
        "type": [
            "Rock",
            "Psychic"
        ],
        "power": {
            "attack": 55,
            "defense": 65,
            "speed": 70
        }
    },
    {
        "name": "Solrock",
        "health": 90,
        "magic": 95,
        "type": [
            "Rock",
            "Psychic"
        ],
        "power": {
            "attack": 95,
            "defense": 85,
            "speed": 70
        }
    },
    {
        "name": "Barboach",
        "health": 50,
        "magic": 48,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 48,
            "defense": 43,
            "speed": 60
        }
    },
    {
        "name": "Whiscash",
        "health": 110,
        "magic": 78,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 78,
            "defense": 73,
            "speed": 60
        }
    },
    {
        "name": "Corphish",
        "health": 43,
        "magic": 80,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 80,
            "defense": 65,
            "speed": 35
        }
    },
    {
        "name": "Crawdaunt",
        "health": 63,
        "magic": 120,
        "type": [
            "Water",
            "Dark"
        ],
        "power": {
            "attack": 120,
            "defense": 85,
            "speed": 55
        }
    },
    {
        "name": "Baltoy",
        "health": 40,
        "magic": 40,
        "type": [
            "Ground",
            "Psychic"
        ],
        "power": {
            "attack": 40,
            "defense": 55,
            "speed": 55
        }
    },
    {
        "name": "Claydol",
        "health": 60,
        "magic": 70,
        "type": [
            "Ground",
            "Psychic"
        ],
        "power": {
            "attack": 70,
            "defense": 105,
            "speed": 75
        }
    },
    {
        "name": "Lileep",
        "health": 66,
        "magic": 41,
        "type": [
            "Rock",
            "Grass"
        ],
        "power": {
            "attack": 41,
            "defense": 77,
            "speed": 23
        }
    },
    {
        "name": "Cradily",
        "health": 86,
        "magic": 81,
        "type": [
            "Rock",
            "Grass"
        ],
        "power": {
            "attack": 81,
            "defense": 97,
            "speed": 43
        }
    },
    {
        "name": "Anorith",
        "health": 45,
        "magic": 95,
        "type": [
            "Rock",
            "Bug"
        ],
        "power": {
            "attack": 95,
            "defense": 50,
            "speed": 75
        }
    },
    {
        "name": "Armaldo",
        "health": 75,
        "magic": 125,
        "type": [
            "Rock",
            "Bug"
        ],
        "power": {
            "attack": 125,
            "defense": 100,
            "speed": 45
        }
    },
    {
        "name": "Feebas",
        "health": 20,
        "magic": 15,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 15,
            "defense": 20,
            "speed": 80
        }
    },
    {
        "name": "Milotic",
        "health": 95,
        "magic": 60,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 60,
            "defense": 79,
            "speed": 81
        }
    },
    {
        "name": "Castform",
        "health": 70,
        "magic": 70,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 70,
            "defense": 70,
            "speed": 70
        }
    },
    {
        "name": "Kecleon",
        "health": 60,
        "magic": 90,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 90,
            "defense": 70,
            "speed": 40
        }
    },
    {
        "name": "Shuppet",
        "health": 44,
        "magic": 75,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 75,
            "defense": 35,
            "speed": 45
        }
    },
    {
        "name": "Banette",
        "health": 64,
        "magic": 115,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 115,
            "defense": 65,
            "speed": 65
        }
    },
    {
        "name": "Duskull",
        "health": 20,
        "magic": 40,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 40,
            "defense": 90,
            "speed": 25
        }
    },
    {
        "name": "Dusclops",
        "health": 40,
        "magic": 70,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 70,
            "defense": 130,
            "speed": 25
        }
    },
    {
        "name": "Tropius",
        "health": 99,
        "magic": 68,
        "type": [
            "Grass",
            "Flying"
        ],
        "power": {
            "attack": 68,
            "defense": 83,
            "speed": 51
        }
    },
    {
        "name": "Chimecho",
        "health": 75,
        "magic": 50,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 50,
            "defense": 80,
            "speed": 65
        }
    },
    {
        "name": "Absol",
        "health": 65,
        "magic": 130,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 130,
            "defense": 60,
            "speed": 75
        }
    },
    {
        "name": "Wynaut",
        "health": 95,
        "magic": 23,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 23,
            "defense": 48,
            "speed": 23
        }
    },
    {
        "name": "Snorunt",
        "health": 50,
        "magic": 50,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 50,
            "defense": 50,
            "speed": 50
        }
    },
    {
        "name": "Glalie",
        "health": 80,
        "magic": 80,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 80,
            "defense": 80,
            "speed": 80
        }
    },
    {
        "name": "Spheal",
        "health": 70,
        "magic": 40,
        "type": [
            "Ice",
            "Water"
        ],
        "power": {
            "attack": 40,
            "defense": 50,
            "speed": 25
        }
    },
    {
        "name": "Sealeo",
        "health": 90,
        "magic": 60,
        "type": [
            "Ice",
            "Water"
        ],
        "power": {
            "attack": 60,
            "defense": 70,
            "speed": 45
        }
    },
    {
        "name": "Walrein",
        "health": 110,
        "magic": 80,
        "type": [
            "Ice",
            "Water"
        ],
        "power": {
            "attack": 80,
            "defense": 90,
            "speed": 65
        }
    },
    {
        "name": "Clamperl",
        "health": 35,
        "magic": 64,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 64,
            "defense": 85,
            "speed": 32
        }
    },
    {
        "name": "Huntail",
        "health": 55,
        "magic": 104,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 104,
            "defense": 105,
            "speed": 52
        }
    },
    {
        "name": "Gorebyss",
        "health": 55,
        "magic": 84,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 84,
            "defense": 105,
            "speed": 52
        }
    },
    {
        "name": "Relicanth",
        "health": 100,
        "magic": 90,
        "type": [
            "Water",
            "Rock"
        ],
        "power": {
            "attack": 90,
            "defense": 130,
            "speed": 55
        }
    },
    {
        "name": "Luvdisc",
        "health": 43,
        "magic": 30,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 30,
            "defense": 55,
            "speed": 97
        }
    },
    {
        "name": "Bagon",
        "health": 45,
        "magic": 75,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 75,
            "defense": 60,
            "speed": 50
        }
    },
    {
        "name": "Shelgon",
        "health": 65,
        "magic": 95,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 95,
            "defense": 100,
            "speed": 50
        }
    },
    {
        "name": "Salamence",
        "health": 95,
        "magic": 135,
        "type": [
            "Dragon",
            "Flying"
        ],
        "power": {
            "attack": 135,
            "defense": 80,
            "speed": 100
        }
    },
    {
        "name": "Beldum",
        "health": 40,
        "magic": 55,
        "type": [
            "Steel",
            "Psychic"
        ],
        "power": {
            "attack": 55,
            "defense": 80,
            "speed": 30
        }
    },
    {
        "name": "Metang",
        "health": 60,
        "magic": 75,
        "type": [
            "Steel",
            "Psychic"
        ],
        "power": {
            "attack": 75,
            "defense": 100,
            "speed": 50
        }
    },
    {
        "name": "Metagross",
        "health": 80,
        "magic": 135,
        "type": [
            "Steel",
            "Psychic"
        ],
        "power": {
            "attack": 135,
            "defense": 130,
            "speed": 70
        }
    },
    {
        "name": "Regirock",
        "health": 80,
        "magic": 100,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 100,
            "defense": 200,
            "speed": 50
        }
    },
    {
        "name": "Regice",
        "health": 80,
        "magic": 50,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 50,
            "defense": 100,
            "speed": 50
        }
    },
    {
        "name": "Registeel",
        "health": 80,
        "magic": 75,
        "type": [
            "Steel"
        ],
        "power": {
            "attack": 75,
            "defense": 150,
            "speed": 50
        }
    },
    {
        "name": "Latias",
        "health": 80,
        "magic": 80,
        "type": [
            "Dragon",
            "Psychic"
        ],
        "power": {
            "attack": 80,
            "defense": 90,
            "speed": 110
        }
    },
    {
        "name": "Latios",
        "health": 80,
        "magic": 90,
        "type": [
            "Dragon",
            "Psychic"
        ],
        "power": {
            "attack": 90,
            "defense": 80,
            "speed": 110
        }
    },
    {
        "name": "Kyogre",
        "health": 100,
        "magic": 100,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 100,
            "defense": 90,
            "speed": 90
        }
    },
    {
        "name": "Groudon",
        "health": 100,
        "magic": 150,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 150,
            "defense": 140,
            "speed": 90
        }
    },
    {
        "name": "Rayquaza",
        "health": 105,
        "magic": 150,
        "type": [
            "Dragon",
            "Flying"
        ],
        "power": {
            "attack": 150,
            "defense": 90,
            "speed": 95
        }
    },
    {
        "name": "Jirachi",
        "health": 100,
        "magic": 100,
        "type": [
            "Steel",
            "Psychic"
        ],
        "power": {
            "attack": 100,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Deoxys",
        "health": 50,
        "magic": 150,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 150,
            "defense": 50,
            "speed": 150
        }
    },
    {
        "name": "Turtwig",
        "health": 55,
        "magic": 68,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 68,
            "defense": 64,
            "speed": 31
        }
    },
    {
        "name": "Grotle",
        "health": 75,
        "magic": 89,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 89,
            "defense": 85,
            "speed": 36
        }
    },
    {
        "name": "Torterra",
        "health": 95,
        "magic": 109,
        "type": [
            "Grass",
            "Ground"
        ],
        "power": {
            "attack": 109,
            "defense": 105,
            "speed": 56
        }
    },
    {
        "name": "Chimchar",
        "health": 44,
        "magic": 58,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 58,
            "defense": 44,
            "speed": 61
        }
    },
    {
        "name": "Monferno",
        "health": 64,
        "magic": 78,
        "type": [
            "Fire",
            "Fighting"
        ],
        "power": {
            "attack": 78,
            "defense": 52,
            "speed": 81
        }
    },
    {
        "name": "Infernape",
        "health": 76,
        "magic": 104,
        "type": [
            "Fire",
            "Fighting"
        ],
        "power": {
            "attack": 104,
            "defense": 71,
            "speed": 108
        }
    },
    {
        "name": "Piplup",
        "health": 53,
        "magic": 51,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 51,
            "defense": 53,
            "speed": 40
        }
    },
    {
        "name": "Prinplup",
        "health": 64,
        "magic": 66,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 66,
            "defense": 68,
            "speed": 50
        }
    },
    {
        "name": "Empoleon",
        "health": 84,
        "magic": 86,
        "type": [
            "Water",
            "Steel"
        ],
        "power": {
            "attack": 86,
            "defense": 88,
            "speed": 60
        }
    },
    {
        "name": "Starly",
        "health": 40,
        "magic": 55,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 55,
            "defense": 30,
            "speed": 60
        }
    },
    {
        "name": "Staravia",
        "health": 55,
        "magic": 75,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 75,
            "defense": 50,
            "speed": 80
        }
    },
    {
        "name": "Staraptor",
        "health": 85,
        "magic": 120,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 120,
            "defense": 70,
            "speed": 100
        }
    },
    {
        "name": "Bidoof",
        "health": 59,
        "magic": 45,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 45,
            "defense": 40,
            "speed": 31
        }
    },
    {
        "name": "Bibarel",
        "health": 79,
        "magic": 85,
        "type": [
            "Normal",
            "Water"
        ],
        "power": {
            "attack": 85,
            "defense": 60,
            "speed": 71
        }
    },
    {
        "name": "Kricketot",
        "health": 37,
        "magic": 25,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 25,
            "defense": 41,
            "speed": 25
        }
    },
    {
        "name": "Kricketune",
        "health": 77,
        "magic": 85,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 85,
            "defense": 51,
            "speed": 65
        }
    },
    {
        "name": "Shinx",
        "health": 45,
        "magic": 65,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 65,
            "defense": 34,
            "speed": 45
        }
    },
    {
        "name": "Luxio",
        "health": 60,
        "magic": 85,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 85,
            "defense": 49,
            "speed": 60
        }
    },
    {
        "name": "Luxray",
        "health": 80,
        "magic": 120,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 120,
            "defense": 79,
            "speed": 70
        }
    },
    {
        "name": "Budew",
        "health": 40,
        "magic": 30,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 30,
            "defense": 35,
            "speed": 55
        }
    },
    {
        "name": "Roserade",
        "health": 60,
        "magic": 70,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 70,
            "defense": 65,
            "speed": 90
        }
    },
    {
        "name": "Cranidos",
        "health": 67,
        "magic": 125,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 125,
            "defense": 40,
            "speed": 58
        }
    },
    {
        "name": "Rampardos",
        "health": 97,
        "magic": 165,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 165,
            "defense": 60,
            "speed": 58
        }
    },
    {
        "name": "Shieldon",
        "health": 30,
        "magic": 42,
        "type": [
            "Rock",
            "Steel"
        ],
        "power": {
            "attack": 42,
            "defense": 118,
            "speed": 30
        }
    },
    {
        "name": "Bastiodon",
        "health": 60,
        "magic": 52,
        "type": [
            "Rock",
            "Steel"
        ],
        "power": {
            "attack": 52,
            "defense": 168,
            "speed": 30
        }
    },
    {
        "name": "Burmy",
        "health": 40,
        "magic": 29,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 29,
            "defense": 45,
            "speed": 36
        }
    },
    {
        "name": "Wormadam",
        "health": 60,
        "magic": 59,
        "type": [
            "Bug",
            "Grass"
        ],
        "power": {
            "attack": 59,
            "defense": 85,
            "speed": 36
        }
    },
    {
        "name": "Mothim",
        "health": 70,
        "magic": 94,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 94,
            "defense": 50,
            "speed": 66
        }
    },
    {
        "name": "Combee",
        "health": 30,
        "magic": 30,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 30,
            "defense": 42,
            "speed": 70
        }
    },
    {
        "name": "Vespiquen",
        "health": 70,
        "magic": 80,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 80,
            "defense": 102,
            "speed": 40
        }
    },
    {
        "name": "Pachirisu",
        "health": 60,
        "magic": 45,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 45,
            "defense": 70,
            "speed": 95
        }
    },
    {
        "name": "Buizel",
        "health": 55,
        "magic": 65,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 65,
            "defense": 35,
            "speed": 85
        }
    },
    {
        "name": "Floatzel",
        "health": 85,
        "magic": 105,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 105,
            "defense": 55,
            "speed": 115
        }
    },
    {
        "name": "Cherubi",
        "health": 45,
        "magic": 35,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 35,
            "defense": 45,
            "speed": 35
        }
    },
    {
        "name": "Cherrim",
        "health": 70,
        "magic": 60,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 60,
            "defense": 70,
            "speed": 85
        }
    },
    {
        "name": "Shellos",
        "health": 76,
        "magic": 48,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 48,
            "defense": 48,
            "speed": 34
        }
    },
    {
        "name": "Gastrodon",
        "health": 111,
        "magic": 83,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 83,
            "defense": 68,
            "speed": 39
        }
    },
    {
        "name": "Ambipom",
        "health": 75,
        "magic": 100,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 100,
            "defense": 66,
            "speed": 115
        }
    },
    {
        "name": "Drifloon",
        "health": 90,
        "magic": 50,
        "type": [
            "Ghost",
            "Flying"
        ],
        "power": {
            "attack": 50,
            "defense": 34,
            "speed": 70
        }
    },
    {
        "name": "Drifblim",
        "health": 150,
        "magic": 80,
        "type": [
            "Ghost",
            "Flying"
        ],
        "power": {
            "attack": 80,
            "defense": 44,
            "speed": 80
        }
    },
    {
        "name": "Buneary",
        "health": 55,
        "magic": 66,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 66,
            "defense": 44,
            "speed": 85
        }
    },
    {
        "name": "Lopunny",
        "health": 65,
        "magic": 76,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 76,
            "defense": 84,
            "speed": 105
        }
    },
    {
        "name": "Mismagius",
        "health": 60,
        "magic": 60,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 60,
            "defense": 60,
            "speed": 105
        }
    },
    {
        "name": "Honchkrow",
        "health": 100,
        "magic": 125,
        "type": [
            "Dark",
            "Flying"
        ],
        "power": {
            "attack": 125,
            "defense": 52,
            "speed": 71
        }
    },
    {
        "name": "Glameow",
        "health": 49,
        "magic": 55,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 55,
            "defense": 42,
            "speed": 85
        }
    },
    {
        "name": "Purugly",
        "health": 71,
        "magic": 82,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 82,
            "defense": 64,
            "speed": 112
        }
    },
    {
        "name": "Chingling",
        "health": 45,
        "magic": 30,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 30,
            "defense": 50,
            "speed": 45
        }
    },
    {
        "name": "Stunky",
        "health": 63,
        "magic": 63,
        "type": [
            "Poison",
            "Dark"
        ],
        "power": {
            "attack": 63,
            "defense": 47,
            "speed": 74
        }
    },
    {
        "name": "Skuntank",
        "health": 103,
        "magic": 93,
        "type": [
            "Poison",
            "Dark"
        ],
        "power": {
            "attack": 93,
            "defense": 67,
            "speed": 84
        }
    },
    {
        "name": "Bronzor",
        "health": 57,
        "magic": 24,
        "type": [
            "Steel",
            "Psychic"
        ],
        "power": {
            "attack": 24,
            "defense": 86,
            "speed": 23
        }
    },
    {
        "name": "Bronzong",
        "health": 67,
        "magic": 89,
        "type": [
            "Steel",
            "Psychic"
        ],
        "power": {
            "attack": 89,
            "defense": 116,
            "speed": 33
        }
    },
    {
        "name": "Bonsly",
        "health": 50,
        "magic": 80,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 80,
            "defense": 95,
            "speed": 10
        }
    },
    {
        "name": "Mime Jr.",
        "health": 20,
        "magic": 25,
        "type": [
            "Psychic",
            "Fairy"
        ],
        "power": {
            "attack": 25,
            "defense": 45,
            "speed": 60
        }
    },
    {
        "name": "Happiny",
        "health": 100,
        "magic": 5,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 5,
            "defense": 5,
            "speed": 30
        }
    },
    {
        "name": "Chatot",
        "health": 76,
        "magic": 65,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 65,
            "defense": 45,
            "speed": 91
        }
    },
    {
        "name": "Spiritomb",
        "health": 50,
        "magic": 92,
        "type": [
            "Ghost",
            "Dark"
        ],
        "power": {
            "attack": 92,
            "defense": 108,
            "speed": 35
        }
    },
    {
        "name": "Gible",
        "health": 58,
        "magic": 70,
        "type": [
            "Dragon",
            "Ground"
        ],
        "power": {
            "attack": 70,
            "defense": 45,
            "speed": 42
        }
    },
    {
        "name": "Gabite",
        "health": 68,
        "magic": 90,
        "type": [
            "Dragon",
            "Ground"
        ],
        "power": {
            "attack": 90,
            "defense": 65,
            "speed": 82
        }
    },
    {
        "name": "Garchomp",
        "health": 108,
        "magic": 130,
        "type": [
            "Dragon",
            "Ground"
        ],
        "power": {
            "attack": 130,
            "defense": 95,
            "speed": 102
        }
    },
    {
        "name": "Munchlax",
        "health": 135,
        "magic": 85,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 85,
            "defense": 40,
            "speed": 5
        }
    },
    {
        "name": "Riolu",
        "health": 40,
        "magic": 70,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 70,
            "defense": 40,
            "speed": 60
        }
    },
    {
        "name": "Lucario",
        "health": 70,
        "magic": 110,
        "type": [
            "Fighting",
            "Steel"
        ],
        "power": {
            "attack": 110,
            "defense": 70,
            "speed": 90
        }
    },
    {
        "name": "Hippopotas",
        "health": 68,
        "magic": 72,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 72,
            "defense": 78,
            "speed": 32
        }
    },
    {
        "name": "Hippowdon",
        "health": 108,
        "magic": 112,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 112,
            "defense": 118,
            "speed": 47
        }
    },
    {
        "name": "Skorupi",
        "health": 40,
        "magic": 50,
        "type": [
            "Poison",
            "Bug"
        ],
        "power": {
            "attack": 50,
            "defense": 90,
            "speed": 65
        }
    },
    {
        "name": "Drapion",
        "health": 70,
        "magic": 90,
        "type": [
            "Poison",
            "Dark"
        ],
        "power": {
            "attack": 90,
            "defense": 110,
            "speed": 95
        }
    },
    {
        "name": "Croagunk",
        "health": 48,
        "magic": 61,
        "type": [
            "Poison",
            "Fighting"
        ],
        "power": {
            "attack": 61,
            "defense": 40,
            "speed": 50
        }
    },
    {
        "name": "Toxicroak",
        "health": 83,
        "magic": 106,
        "type": [
            "Poison",
            "Fighting"
        ],
        "power": {
            "attack": 106,
            "defense": 65,
            "speed": 85
        }
    },
    {
        "name": "Carnivine",
        "health": 74,
        "magic": 100,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 100,
            "defense": 72,
            "speed": 46
        }
    },
    {
        "name": "Finneon",
        "health": 49,
        "magic": 49,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 49,
            "defense": 56,
            "speed": 66
        }
    },
    {
        "name": "Lumineon",
        "health": 69,
        "magic": 69,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 69,
            "defense": 76,
            "speed": 91
        }
    },
    {
        "name": "Mantyke",
        "health": 45,
        "magic": 20,
        "type": [
            "Water",
            "Flying"
        ],
        "power": {
            "attack": 20,
            "defense": 50,
            "speed": 50
        }
    },
    {
        "name": "Snover",
        "health": 60,
        "magic": 62,
        "type": [
            "Grass",
            "Ice"
        ],
        "power": {
            "attack": 62,
            "defense": 50,
            "speed": 40
        }
    },
    {
        "name": "Abomasnow",
        "health": 90,
        "magic": 92,
        "type": [
            "Grass",
            "Ice"
        ],
        "power": {
            "attack": 92,
            "defense": 75,
            "speed": 60
        }
    },
    {
        "name": "Weavile",
        "health": 70,
        "magic": 120,
        "type": [
            "Dark",
            "Ice"
        ],
        "power": {
            "attack": 120,
            "defense": 65,
            "speed": 125
        }
    },
    {
        "name": "Magnezone",
        "health": 70,
        "magic": 70,
        "type": [
            "Electric",
            "Steel"
        ],
        "power": {
            "attack": 70,
            "defense": 115,
            "speed": 60
        }
    },
    {
        "name": "Lickilicky",
        "health": 110,
        "magic": 85,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 85,
            "defense": 95,
            "speed": 50
        }
    },
    {
        "name": "Rhyperior",
        "health": 115,
        "magic": 140,
        "type": [
            "Ground",
            "Rock"
        ],
        "power": {
            "attack": 140,
            "defense": 130,
            "speed": 40
        }
    },
    {
        "name": "Tangrowth",
        "health": 100,
        "magic": 100,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 100,
            "defense": 125,
            "speed": 50
        }
    },
    {
        "name": "Electivire",
        "health": 75,
        "magic": 123,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 123,
            "defense": 67,
            "speed": 95
        }
    },
    {
        "name": "Magmortar",
        "health": 75,
        "magic": 95,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 95,
            "defense": 67,
            "speed": 83
        }
    },
    {
        "name": "Togekiss",
        "health": 85,
        "magic": 50,
        "type": [
            "Fairy",
            "Flying"
        ],
        "power": {
            "attack": 50,
            "defense": 95,
            "speed": 80
        }
    },
    {
        "name": "Yanmega",
        "health": 86,
        "magic": 76,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 76,
            "defense": 86,
            "speed": 95
        }
    },
    {
        "name": "Leafeon",
        "health": 65,
        "magic": 110,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 110,
            "defense": 130,
            "speed": 95
        }
    },
    {
        "name": "Glaceon",
        "health": 65,
        "magic": 60,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 60,
            "defense": 110,
            "speed": 65
        }
    },
    {
        "name": "Gliscor",
        "health": 75,
        "magic": 95,
        "type": [
            "Ground",
            "Flying"
        ],
        "power": {
            "attack": 95,
            "defense": 125,
            "speed": 95
        }
    },
    {
        "name": "Mamoswine",
        "health": 110,
        "magic": 130,
        "type": [
            "Ice",
            "Ground"
        ],
        "power": {
            "attack": 130,
            "defense": 80,
            "speed": 80
        }
    },
    {
        "name": "Porygon-Z",
        "health": 85,
        "magic": 80,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 80,
            "defense": 70,
            "speed": 90
        }
    },
    {
        "name": "Gallade",
        "health": 68,
        "magic": 125,
        "type": [
            "Psychic",
            "Fighting"
        ],
        "power": {
            "attack": 125,
            "defense": 65,
            "speed": 80
        }
    },
    {
        "name": "Probopass",
        "health": 60,
        "magic": 55,
        "type": [
            "Rock",
            "Steel"
        ],
        "power": {
            "attack": 55,
            "defense": 145,
            "speed": 40
        }
    },
    {
        "name": "Dusknoir",
        "health": 45,
        "magic": 100,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 100,
            "defense": 135,
            "speed": 45
        }
    },
    {
        "name": "Froslass",
        "health": 70,
        "magic": 80,
        "type": [
            "Ice",
            "Ghost"
        ],
        "power": {
            "attack": 80,
            "defense": 70,
            "speed": 110
        }
    },
    {
        "name": "Rotom",
        "health": 50,
        "magic": 50,
        "type": [
            "Electric",
            "Ghost"
        ],
        "power": {
            "attack": 50,
            "defense": 77,
            "speed": 91
        }
    },
    {
        "name": "Uxie",
        "health": 75,
        "magic": 75,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 75,
            "defense": 130,
            "speed": 95
        }
    },
    {
        "name": "Mesprit",
        "health": 80,
        "magic": 105,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 105,
            "defense": 105,
            "speed": 80
        }
    },
    {
        "name": "Azelf",
        "health": 75,
        "magic": 125,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 125,
            "defense": 70,
            "speed": 115
        }
    },
    {
        "name": "Dialga",
        "health": 100,
        "magic": 120,
        "type": [
            "Steel",
            "Dragon"
        ],
        "power": {
            "attack": 120,
            "defense": 120,
            "speed": 90
        }
    },
    {
        "name": "Palkia",
        "health": 90,
        "magic": 120,
        "type": [
            "Water",
            "Dragon"
        ],
        "power": {
            "attack": 120,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Heatran",
        "health": 91,
        "magic": 90,
        "type": [
            "Fire",
            "Steel"
        ],
        "power": {
            "attack": 90,
            "defense": 106,
            "speed": 77
        }
    },
    {
        "name": "Regigigas",
        "health": 110,
        "magic": 160,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 160,
            "defense": 110,
            "speed": 100
        }
    },
    {
        "name": "Giratina",
        "health": 150,
        "magic": 100,
        "type": [
            "Ghost",
            "Dragon"
        ],
        "power": {
            "attack": 100,
            "defense": 120,
            "speed": 90
        }
    },
    {
        "name": "Cresselia",
        "health": 120,
        "magic": 70,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 70,
            "defense": 120,
            "speed": 85
        }
    },
    {
        "name": "Phione",
        "health": 80,
        "magic": 80,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 80,
            "defense": 80,
            "speed": 80
        }
    },
    {
        "name": "Manaphy",
        "health": 100,
        "magic": 100,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 100,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Darkrai",
        "health": 70,
        "magic": 90,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 90,
            "defense": 90,
            "speed": 125
        }
    },
    {
        "name": "Shaymin",
        "health": 100,
        "magic": 100,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 100,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Arceus",
        "health": 120,
        "magic": 120,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 120,
            "defense": 120,
            "speed": 120
        }
    },
    {
        "name": "Victini",
        "health": 100,
        "magic": 100,
        "type": [
            "Psychic",
            "Fire"
        ],
        "power": {
            "attack": 100,
            "defense": 100,
            "speed": 100
        }
    },
    {
        "name": "Snivy",
        "health": 45,
        "magic": 45,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 45,
            "defense": 55,
            "speed": 63
        }
    },
    {
        "name": "Servine",
        "health": 60,
        "magic": 60,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 60,
            "defense": 75,
            "speed": 83
        }
    },
    {
        "name": "Serperior",
        "health": 75,
        "magic": 75,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 75,
            "defense": 95,
            "speed": 113
        }
    },
    {
        "name": "Tepig",
        "health": 65,
        "magic": 63,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 63,
            "defense": 45,
            "speed": 45
        }
    },
    {
        "name": "Pignite",
        "health": 90,
        "magic": 93,
        "type": [
            "Fire",
            "Fighting"
        ],
        "power": {
            "attack": 93,
            "defense": 55,
            "speed": 55
        }
    },
    {
        "name": "Emboar",
        "health": 110,
        "magic": 123,
        "type": [
            "Fire",
            "Fighting"
        ],
        "power": {
            "attack": 123,
            "defense": 65,
            "speed": 65
        }
    },
    {
        "name": "Oshawott",
        "health": 55,
        "magic": 55,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 55,
            "defense": 45,
            "speed": 45
        }
    },
    {
        "name": "Dewott",
        "health": 75,
        "magic": 75,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 75,
            "defense": 60,
            "speed": 60
        }
    },
    {
        "name": "Samurott",
        "health": 95,
        "magic": 100,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 100,
            "defense": 85,
            "speed": 70
        }
    },
    {
        "name": "Patrat",
        "health": 45,
        "magic": 55,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 55,
            "defense": 39,
            "speed": 42
        }
    },
    {
        "name": "Watchog",
        "health": 60,
        "magic": 85,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 85,
            "defense": 69,
            "speed": 77
        }
    },
    {
        "name": "Lillipup",
        "health": 45,
        "magic": 60,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 60,
            "defense": 45,
            "speed": 55
        }
    },
    {
        "name": "Herdier",
        "health": 65,
        "magic": 80,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 80,
            "defense": 65,
            "speed": 60
        }
    },
    {
        "name": "Stoutland",
        "health": 85,
        "magic": 110,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 110,
            "defense": 90,
            "speed": 80
        }
    },
    {
        "name": "Purrloin",
        "health": 41,
        "magic": 50,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 50,
            "defense": 37,
            "speed": 66
        }
    },
    {
        "name": "Liepard",
        "health": 64,
        "magic": 88,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 88,
            "defense": 50,
            "speed": 106
        }
    },
    {
        "name": "Pansage",
        "health": 50,
        "magic": 53,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 53,
            "defense": 48,
            "speed": 64
        }
    },
    {
        "name": "Simisage",
        "health": 75,
        "magic": 98,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 98,
            "defense": 63,
            "speed": 101
        }
    },
    {
        "name": "Pansear",
        "health": 50,
        "magic": 53,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 53,
            "defense": 48,
            "speed": 64
        }
    },
    {
        "name": "Simisear",
        "health": 75,
        "magic": 98,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 98,
            "defense": 63,
            "speed": 101
        }
    },
    {
        "name": "Panpour",
        "health": 50,
        "magic": 53,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 53,
            "defense": 48,
            "speed": 64
        }
    },
    {
        "name": "Simipour",
        "health": 75,
        "magic": 98,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 98,
            "defense": 63,
            "speed": 101
        }
    },
    {
        "name": "Munna",
        "health": 76,
        "magic": 25,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 25,
            "defense": 45,
            "speed": 24
        }
    },
    {
        "name": "Musharna",
        "health": 116,
        "magic": 55,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 55,
            "defense": 85,
            "speed": 29
        }
    },
    {
        "name": "Pidove",
        "health": 50,
        "magic": 55,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 55,
            "defense": 50,
            "speed": 43
        }
    },
    {
        "name": "Tranquill",
        "health": 62,
        "magic": 77,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 77,
            "defense": 62,
            "speed": 65
        }
    },
    {
        "name": "Unfezant",
        "health": 80,
        "magic": 115,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 115,
            "defense": 80,
            "speed": 93
        }
    },
    {
        "name": "Blitzle",
        "health": 45,
        "magic": 60,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 60,
            "defense": 32,
            "speed": 76
        }
    },
    {
        "name": "Zebstrika",
        "health": 75,
        "magic": 100,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 100,
            "defense": 63,
            "speed": 116
        }
    },
    {
        "name": "Roggenrola",
        "health": 55,
        "magic": 75,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 75,
            "defense": 85,
            "speed": 15
        }
    },
    {
        "name": "Boldore",
        "health": 70,
        "magic": 105,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 105,
            "defense": 105,
            "speed": 20
        }
    },
    {
        "name": "Gigalith",
        "health": 85,
        "magic": 135,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 135,
            "defense": 130,
            "speed": 25
        }
    },
    {
        "name": "Woobat",
        "health": 65,
        "magic": 45,
        "type": [
            "Psychic",
            "Flying"
        ],
        "power": {
            "attack": 45,
            "defense": 43,
            "speed": 72
        }
    },
    {
        "name": "Swoobat",
        "health": 67,
        "magic": 57,
        "type": [
            "Psychic",
            "Flying"
        ],
        "power": {
            "attack": 57,
            "defense": 55,
            "speed": 114
        }
    },
    {
        "name": "Drilbur",
        "health": 60,
        "magic": 85,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 85,
            "defense": 40,
            "speed": 68
        }
    },
    {
        "name": "Excadrill",
        "health": 110,
        "magic": 135,
        "type": [
            "Ground",
            "Steel"
        ],
        "power": {
            "attack": 135,
            "defense": 60,
            "speed": 88
        }
    },
    {
        "name": "Audino",
        "health": 103,
        "magic": 60,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 60,
            "defense": 86,
            "speed": 50
        }
    },
    {
        "name": "Timburr",
        "health": 75,
        "magic": 80,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 80,
            "defense": 55,
            "speed": 35
        }
    },
    {
        "name": "Gurdurr",
        "health": 85,
        "magic": 105,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 105,
            "defense": 85,
            "speed": 40
        }
    },
    {
        "name": "Conkeldurr",
        "health": 105,
        "magic": 140,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 140,
            "defense": 95,
            "speed": 45
        }
    },
    {
        "name": "Tympole",
        "health": 50,
        "magic": 50,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 50,
            "defense": 40,
            "speed": 64
        }
    },
    {
        "name": "Palpitoad",
        "health": 75,
        "magic": 65,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 65,
            "defense": 55,
            "speed": 69
        }
    },
    {
        "name": "Seismitoad",
        "health": 105,
        "magic": 95,
        "type": [
            "Water",
            "Ground"
        ],
        "power": {
            "attack": 95,
            "defense": 75,
            "speed": 74
        }
    },
    {
        "name": "Throh",
        "health": 120,
        "magic": 100,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 100,
            "defense": 85,
            "speed": 45
        }
    },
    {
        "name": "Sawk",
        "health": 75,
        "magic": 125,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 125,
            "defense": 75,
            "speed": 85
        }
    },
    {
        "name": "Sewaddle",
        "health": 45,
        "magic": 53,
        "type": [
            "Bug",
            "Grass"
        ],
        "power": {
            "attack": 53,
            "defense": 70,
            "speed": 42
        }
    },
    {
        "name": "Swadloon",
        "health": 55,
        "magic": 63,
        "type": [
            "Bug",
            "Grass"
        ],
        "power": {
            "attack": 63,
            "defense": 90,
            "speed": 42
        }
    },
    {
        "name": "Leavanny",
        "health": 75,
        "magic": 103,
        "type": [
            "Bug",
            "Grass"
        ],
        "power": {
            "attack": 103,
            "defense": 80,
            "speed": 92
        }
    },
    {
        "name": "Venipede",
        "health": 30,
        "magic": 45,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 45,
            "defense": 59,
            "speed": 57
        }
    },
    {
        "name": "Whirlipede",
        "health": 40,
        "magic": 55,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 55,
            "defense": 99,
            "speed": 47
        }
    },
    {
        "name": "Scolipede",
        "health": 60,
        "magic": 100,
        "type": [
            "Bug",
            "Poison"
        ],
        "power": {
            "attack": 100,
            "defense": 89,
            "speed": 112
        }
    },
    {
        "name": "Cottonee",
        "health": 40,
        "magic": 27,
        "type": [
            "Grass",
            "Fairy"
        ],
        "power": {
            "attack": 27,
            "defense": 60,
            "speed": 66
        }
    },
    {
        "name": "Whimsicott",
        "health": 60,
        "magic": 67,
        "type": [
            "Grass",
            "Fairy"
        ],
        "power": {
            "attack": 67,
            "defense": 85,
            "speed": 116
        }
    },
    {
        "name": "Petilil",
        "health": 45,
        "magic": 35,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 35,
            "defense": 50,
            "speed": 30
        }
    },
    {
        "name": "Lilligant",
        "health": 70,
        "magic": 60,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 60,
            "defense": 75,
            "speed": 90
        }
    },
    {
        "name": "Basculin",
        "health": 70,
        "magic": 92,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 92,
            "defense": 65,
            "speed": 98
        }
    },
    {
        "name": "Sandile",
        "health": 50,
        "magic": 72,
        "type": [
            "Ground",
            "Dark"
        ],
        "power": {
            "attack": 72,
            "defense": 35,
            "speed": 65
        }
    },
    {
        "name": "Krokorok",
        "health": 60,
        "magic": 82,
        "type": [
            "Ground",
            "Dark"
        ],
        "power": {
            "attack": 82,
            "defense": 45,
            "speed": 74
        }
    },
    {
        "name": "Krookodile",
        "health": 95,
        "magic": 117,
        "type": [
            "Ground",
            "Dark"
        ],
        "power": {
            "attack": 117,
            "defense": 80,
            "speed": 92
        }
    },
    {
        "name": "Darumaka",
        "health": 70,
        "magic": 90,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 90,
            "defense": 45,
            "speed": 50
        }
    },
    {
        "name": "Darmanitan",
        "health": 105,
        "magic": 140,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 140,
            "defense": 55,
            "speed": 95
        }
    },
    {
        "name": "Maractus",
        "health": 75,
        "magic": 86,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 86,
            "defense": 67,
            "speed": 60
        }
    },
    {
        "name": "Dwebble",
        "health": 50,
        "magic": 65,
        "type": [
            "Bug",
            "Rock"
        ],
        "power": {
            "attack": 65,
            "defense": 85,
            "speed": 55
        }
    },
    {
        "name": "Crustle",
        "health": 70,
        "magic": 105,
        "type": [
            "Bug",
            "Rock"
        ],
        "power": {
            "attack": 105,
            "defense": 125,
            "speed": 45
        }
    },
    {
        "name": "Scraggy",
        "health": 50,
        "magic": 75,
        "type": [
            "Dark",
            "Fighting"
        ],
        "power": {
            "attack": 75,
            "defense": 70,
            "speed": 48
        }
    },
    {
        "name": "Scrafty",
        "health": 65,
        "magic": 90,
        "type": [
            "Dark",
            "Fighting"
        ],
        "power": {
            "attack": 90,
            "defense": 115,
            "speed": 58
        }
    },
    {
        "name": "Sigilyph",
        "health": 72,
        "magic": 58,
        "type": [
            "Psychic",
            "Flying"
        ],
        "power": {
            "attack": 58,
            "defense": 80,
            "speed": 97
        }
    },
    {
        "name": "Yamask",
        "health": 38,
        "magic": 30,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 30,
            "defense": 85,
            "speed": 30
        }
    },
    {
        "name": "Cofagrigus",
        "health": 58,
        "magic": 50,
        "type": [
            "Ghost"
        ],
        "power": {
            "attack": 50,
            "defense": 145,
            "speed": 30
        }
    },
    {
        "name": "Tirtouga",
        "health": 54,
        "magic": 78,
        "type": [
            "Water",
            "Rock"
        ],
        "power": {
            "attack": 78,
            "defense": 103,
            "speed": 22
        }
    },
    {
        "name": "Carracosta",
        "health": 74,
        "magic": 108,
        "type": [
            "Water",
            "Rock"
        ],
        "power": {
            "attack": 108,
            "defense": 133,
            "speed": 32
        }
    },
    {
        "name": "Archen",
        "health": 55,
        "magic": 112,
        "type": [
            "Rock",
            "Flying"
        ],
        "power": {
            "attack": 112,
            "defense": 45,
            "speed": 70
        }
    },
    {
        "name": "Archeops",
        "health": 75,
        "magic": 140,
        "type": [
            "Rock",
            "Flying"
        ],
        "power": {
            "attack": 140,
            "defense": 65,
            "speed": 110
        }
    },
    {
        "name": "Trubbish",
        "health": 50,
        "magic": 50,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 50,
            "defense": 62,
            "speed": 65
        }
    },
    {
        "name": "Garbodor",
        "health": 80,
        "magic": 95,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 95,
            "defense": 82,
            "speed": 75
        }
    },
    {
        "name": "Zorua",
        "health": 40,
        "magic": 65,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 65,
            "defense": 40,
            "speed": 65
        }
    },
    {
        "name": "Zoroark",
        "health": 60,
        "magic": 105,
        "type": [
            "Dark"
        ],
        "power": {
            "attack": 105,
            "defense": 60,
            "speed": 105
        }
    },
    {
        "name": "Minccino",
        "health": 55,
        "magic": 50,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 50,
            "defense": 40,
            "speed": 75
        }
    },
    {
        "name": "Cinccino",
        "health": 75,
        "magic": 95,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 95,
            "defense": 60,
            "speed": 115
        }
    },
    {
        "name": "Gothita",
        "health": 45,
        "magic": 30,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 30,
            "defense": 50,
            "speed": 45
        }
    },
    {
        "name": "Gothorita",
        "health": 60,
        "magic": 45,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 45,
            "defense": 70,
            "speed": 55
        }
    },
    {
        "name": "Gothitelle",
        "health": 70,
        "magic": 55,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 55,
            "defense": 95,
            "speed": 65
        }
    },
    {
        "name": "Solosis",
        "health": 45,
        "magic": 30,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 30,
            "defense": 40,
            "speed": 20
        }
    },
    {
        "name": "Duosion",
        "health": 65,
        "magic": 40,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 40,
            "defense": 50,
            "speed": 30
        }
    },
    {
        "name": "Reuniclus",
        "health": 110,
        "magic": 65,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 65,
            "defense": 75,
            "speed": 30
        }
    },
    {
        "name": "Ducklett",
        "health": 62,
        "magic": 44,
        "type": [
            "Water",
            "Flying"
        ],
        "power": {
            "attack": 44,
            "defense": 50,
            "speed": 55
        }
    },
    {
        "name": "Swanna",
        "health": 75,
        "magic": 87,
        "type": [
            "Water",
            "Flying"
        ],
        "power": {
            "attack": 87,
            "defense": 63,
            "speed": 98
        }
    },
    {
        "name": "Vanillite",
        "health": 36,
        "magic": 50,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 50,
            "defense": 50,
            "speed": 44
        }
    },
    {
        "name": "Vanillish",
        "health": 51,
        "magic": 65,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 65,
            "defense": 65,
            "speed": 59
        }
    },
    {
        "name": "Vanilluxe",
        "health": 71,
        "magic": 95,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 95,
            "defense": 85,
            "speed": 79
        }
    },
    {
        "name": "Deerling",
        "health": 60,
        "magic": 60,
        "type": [
            "Normal",
            "Grass"
        ],
        "power": {
            "attack": 60,
            "defense": 50,
            "speed": 75
        }
    },
    {
        "name": "Sawsbuck",
        "health": 80,
        "magic": 100,
        "type": [
            "Normal",
            "Grass"
        ],
        "power": {
            "attack": 100,
            "defense": 70,
            "speed": 95
        }
    },
    {
        "name": "Emolga",
        "health": 55,
        "magic": 75,
        "type": [
            "Electric",
            "Flying"
        ],
        "power": {
            "attack": 75,
            "defense": 60,
            "speed": 103
        }
    },
    {
        "name": "Karrablast",
        "health": 50,
        "magic": 75,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 75,
            "defense": 45,
            "speed": 60
        }
    },
    {
        "name": "Escavalier",
        "health": 70,
        "magic": 135,
        "type": [
            "Bug",
            "Steel"
        ],
        "power": {
            "attack": 135,
            "defense": 105,
            "speed": 20
        }
    },
    {
        "name": "Foongus",
        "health": 69,
        "magic": 55,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 55,
            "defense": 45,
            "speed": 15
        }
    },
    {
        "name": "Amoonguss",
        "health": 114,
        "magic": 85,
        "type": [
            "Grass",
            "Poison"
        ],
        "power": {
            "attack": 85,
            "defense": 70,
            "speed": 30
        }
    },
    {
        "name": "Frillish",
        "health": 55,
        "magic": 40,
        "type": [
            "Water",
            "Ghost"
        ],
        "power": {
            "attack": 40,
            "defense": 50,
            "speed": 40
        }
    },
    {
        "name": "Jellicent",
        "health": 100,
        "magic": 60,
        "type": [
            "Water",
            "Ghost"
        ],
        "power": {
            "attack": 60,
            "defense": 70,
            "speed": 60
        }
    },
    {
        "name": "Alomomola",
        "health": 165,
        "magic": 75,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 75,
            "defense": 80,
            "speed": 65
        }
    },
    {
        "name": "Joltik",
        "health": 50,
        "magic": 47,
        "type": [
            "Bug",
            "Electric"
        ],
        "power": {
            "attack": 47,
            "defense": 50,
            "speed": 65
        }
    },
    {
        "name": "Galvantula",
        "health": 70,
        "magic": 77,
        "type": [
            "Bug",
            "Electric"
        ],
        "power": {
            "attack": 77,
            "defense": 60,
            "speed": 108
        }
    },
    {
        "name": "Ferroseed",
        "health": 44,
        "magic": 50,
        "type": [
            "Grass",
            "Steel"
        ],
        "power": {
            "attack": 50,
            "defense": 91,
            "speed": 10
        }
    },
    {
        "name": "Ferrothorn",
        "health": 74,
        "magic": 94,
        "type": [
            "Grass",
            "Steel"
        ],
        "power": {
            "attack": 94,
            "defense": 131,
            "speed": 20
        }
    },
    {
        "name": "Klink",
        "health": 40,
        "magic": 55,
        "type": [
            "Steel"
        ],
        "power": {
            "attack": 55,
            "defense": 70,
            "speed": 30
        }
    },
    {
        "name": "Klang",
        "health": 60,
        "magic": 80,
        "type": [
            "Steel"
        ],
        "power": {
            "attack": 80,
            "defense": 95,
            "speed": 50
        }
    },
    {
        "name": "Klinklang",
        "health": 60,
        "magic": 100,
        "type": [
            "Steel"
        ],
        "power": {
            "attack": 100,
            "defense": 115,
            "speed": 90
        }
    },
    {
        "name": "Tynamo",
        "health": 35,
        "magic": 55,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 55,
            "defense": 40,
            "speed": 60
        }
    },
    {
        "name": "Eelektrik",
        "health": 65,
        "magic": 85,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 85,
            "defense": 70,
            "speed": 40
        }
    },
    {
        "name": "Eelektross",
        "health": 85,
        "magic": 115,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 115,
            "defense": 80,
            "speed": 50
        }
    },
    {
        "name": "Elgyem",
        "health": 55,
        "magic": 55,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 55,
            "defense": 55,
            "speed": 30
        }
    },
    {
        "name": "Beheeyem",
        "health": 75,
        "magic": 75,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 75,
            "defense": 75,
            "speed": 40
        }
    },
    {
        "name": "Litwick",
        "health": 50,
        "magic": 30,
        "type": [
            "Ghost",
            "Fire"
        ],
        "power": {
            "attack": 30,
            "defense": 55,
            "speed": 20
        }
    },
    {
        "name": "Lampent",
        "health": 60,
        "magic": 40,
        "type": [
            "Ghost",
            "Fire"
        ],
        "power": {
            "attack": 40,
            "defense": 60,
            "speed": 55
        }
    },
    {
        "name": "Chandelure",
        "health": 60,
        "magic": 55,
        "type": [
            "Ghost",
            "Fire"
        ],
        "power": {
            "attack": 55,
            "defense": 90,
            "speed": 80
        }
    },
    {
        "name": "Axew",
        "health": 46,
        "magic": 87,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 87,
            "defense": 60,
            "speed": 57
        }
    },
    {
        "name": "Fraxure",
        "health": 66,
        "magic": 117,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 117,
            "defense": 70,
            "speed": 67
        }
    },
    {
        "name": "Haxorus",
        "health": 76,
        "magic": 147,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 147,
            "defense": 90,
            "speed": 97
        }
    },
    {
        "name": "Cubchoo",
        "health": 55,
        "magic": 70,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 70,
            "defense": 40,
            "speed": 40
        }
    },
    {
        "name": "Beartic",
        "health": 95,
        "magic": 130,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 130,
            "defense": 80,
            "speed": 50
        }
    },
    {
        "name": "Cryogonal",
        "health": 80,
        "magic": 50,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 50,
            "defense": 50,
            "speed": 105
        }
    },
    {
        "name": "Shelmet",
        "health": 50,
        "magic": 40,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 40,
            "defense": 85,
            "speed": 25
        }
    },
    {
        "name": "Accelgor",
        "health": 80,
        "magic": 70,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 70,
            "defense": 40,
            "speed": 145
        }
    },
    {
        "name": "Stunfisk",
        "health": 109,
        "magic": 66,
        "type": [
            "Ground",
            "Electric"
        ],
        "power": {
            "attack": 66,
            "defense": 84,
            "speed": 32
        }
    },
    {
        "name": "Mienfoo",
        "health": 45,
        "magic": 85,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 85,
            "defense": 50,
            "speed": 65
        }
    },
    {
        "name": "Mienshao",
        "health": 65,
        "magic": 125,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 125,
            "defense": 60,
            "speed": 105
        }
    },
    {
        "name": "Druddigon",
        "health": 77,
        "magic": 120,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 120,
            "defense": 90,
            "speed": 48
        }
    },
    {
        "name": "Golett",
        "health": 59,
        "magic": 74,
        "type": [
            "Ground",
            "Ghost"
        ],
        "power": {
            "attack": 74,
            "defense": 50,
            "speed": 35
        }
    },
    {
        "name": "Golurk",
        "health": 89,
        "magic": 124,
        "type": [
            "Ground",
            "Ghost"
        ],
        "power": {
            "attack": 124,
            "defense": 80,
            "speed": 55
        }
    },
    {
        "name": "Pawniard",
        "health": 45,
        "magic": 85,
        "type": [
            "Dark",
            "Steel"
        ],
        "power": {
            "attack": 85,
            "defense": 70,
            "speed": 60
        }
    },
    {
        "name": "Bisharp",
        "health": 65,
        "magic": 125,
        "type": [
            "Dark",
            "Steel"
        ],
        "power": {
            "attack": 125,
            "defense": 100,
            "speed": 70
        }
    },
    {
        "name": "Bouffalant",
        "health": 95,
        "magic": 110,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 110,
            "defense": 95,
            "speed": 55
        }
    },
    {
        "name": "Rufflet",
        "health": 70,
        "magic": 83,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 83,
            "defense": 50,
            "speed": 60
        }
    },
    {
        "name": "Braviary",
        "health": 100,
        "magic": 123,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 123,
            "defense": 75,
            "speed": 80
        }
    },
    {
        "name": "Vullaby",
        "health": 70,
        "magic": 55,
        "type": [
            "Dark",
            "Flying"
        ],
        "power": {
            "attack": 55,
            "defense": 75,
            "speed": 60
        }
    },
    {
        "name": "Mandibuzz",
        "health": 110,
        "magic": 65,
        "type": [
            "Dark",
            "Flying"
        ],
        "power": {
            "attack": 65,
            "defense": 105,
            "speed": 80
        }
    },
    {
        "name": "Heatmor",
        "health": 85,
        "magic": 97,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 97,
            "defense": 66,
            "speed": 65
        }
    },
    {
        "name": "Durant",
        "health": 58,
        "magic": 109,
        "type": [
            "Bug",
            "Steel"
        ],
        "power": {
            "attack": 109,
            "defense": 112,
            "speed": 109
        }
    },
    {
        "name": "Deino",
        "health": 52,
        "magic": 65,
        "type": [
            "Dark",
            "Dragon"
        ],
        "power": {
            "attack": 65,
            "defense": 50,
            "speed": 38
        }
    },
    {
        "name": "Zweilous",
        "health": 72,
        "magic": 85,
        "type": [
            "Dark",
            "Dragon"
        ],
        "power": {
            "attack": 85,
            "defense": 70,
            "speed": 58
        }
    },
    {
        "name": "Hydreigon",
        "health": 92,
        "magic": 105,
        "type": [
            "Dark",
            "Dragon"
        ],
        "power": {
            "attack": 105,
            "defense": 90,
            "speed": 98
        }
    },
    {
        "name": "Larvesta",
        "health": 55,
        "magic": 85,
        "type": [
            "Bug",
            "Fire"
        ],
        "power": {
            "attack": 85,
            "defense": 55,
            "speed": 60
        }
    },
    {
        "name": "Volcarona",
        "health": 85,
        "magic": 60,
        "type": [
            "Bug",
            "Fire"
        ],
        "power": {
            "attack": 60,
            "defense": 65,
            "speed": 100
        }
    },
    {
        "name": "Cobalion",
        "health": 91,
        "magic": 90,
        "type": [
            "Steel",
            "Fighting"
        ],
        "power": {
            "attack": 90,
            "defense": 129,
            "speed": 108
        }
    },
    {
        "name": "Terrakion",
        "health": 91,
        "magic": 129,
        "type": [
            "Rock",
            "Fighting"
        ],
        "power": {
            "attack": 129,
            "defense": 90,
            "speed": 108
        }
    },
    {
        "name": "Virizion",
        "health": 91,
        "magic": 90,
        "type": [
            "Grass",
            "Fighting"
        ],
        "power": {
            "attack": 90,
            "defense": 72,
            "speed": 108
        }
    },
    {
        "name": "Tornadus",
        "health": 79,
        "magic": 115,
        "type": [
            "Flying"
        ],
        "power": {
            "attack": 115,
            "defense": 70,
            "speed": 111
        }
    },
    {
        "name": "Thundurus",
        "health": 79,
        "magic": 115,
        "type": [
            "Electric",
            "Flying"
        ],
        "power": {
            "attack": 115,
            "defense": 70,
            "speed": 111
        }
    },
    {
        "name": "Reshiram",
        "health": 100,
        "magic": 120,
        "type": [
            "Dragon",
            "Fire"
        ],
        "power": {
            "attack": 120,
            "defense": 100,
            "speed": 90
        }
    },
    {
        "name": "Zekrom",
        "health": 100,
        "magic": 150,
        "type": [
            "Dragon",
            "Electric"
        ],
        "power": {
            "attack": 150,
            "defense": 120,
            "speed": 90
        }
    },
    {
        "name": "Landorus",
        "health": 89,
        "magic": 125,
        "type": [
            "Ground",
            "Flying"
        ],
        "power": {
            "attack": 125,
            "defense": 90,
            "speed": 101
        }
    },
    {
        "name": "Kyurem",
        "health": 125,
        "magic": 130,
        "type": [
            "Dragon",
            "Ice"
        ],
        "power": {
            "attack": 130,
            "defense": 90,
            "speed": 95
        }
    },
    {
        "name": "Keldeo",
        "health": 91,
        "magic": 72,
        "type": [
            "Water",
            "Fighting"
        ],
        "power": {
            "attack": 72,
            "defense": 90,
            "speed": 108
        }
    },
    {
        "name": "Meloetta",
        "health": 100,
        "magic": 77,
        "type": [
            "Normal",
            "Psychic"
        ],
        "power": {
            "attack": 77,
            "defense": 77,
            "speed": 90
        }
    },
    {
        "name": "Genesect",
        "health": 71,
        "magic": 120,
        "type": [
            "Bug",
            "Steel"
        ],
        "power": {
            "attack": 120,
            "defense": 95,
            "speed": 99
        }
    },
    {
        "name": "Chespin",
        "health": 56,
        "magic": 61,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 61,
            "defense": 65,
            "speed": 38
        }
    },
    {
        "name": "Quilladin",
        "health": 61,
        "magic": 78,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 78,
            "defense": 95,
            "speed": 57
        }
    },
    {
        "name": "Chesnaught",
        "health": 88,
        "magic": 107,
        "type": [
            "Grass",
            "Fighting"
        ],
        "power": {
            "attack": 107,
            "defense": 122,
            "speed": 64
        }
    },
    {
        "name": "Fennekin",
        "health": 40,
        "magic": 45,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 45,
            "defense": 40,
            "speed": 60
        }
    },
    {
        "name": "Braixen",
        "health": 59,
        "magic": 59,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 59,
            "defense": 58,
            "speed": 73
        }
    },
    {
        "name": "Delphox",
        "health": 75,
        "magic": 69,
        "type": [
            "Fire",
            "Psychic"
        ],
        "power": {
            "attack": 69,
            "defense": 72,
            "speed": 104
        }
    },
    {
        "name": "Froakie",
        "health": 41,
        "magic": 56,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 56,
            "defense": 40,
            "speed": 71
        }
    },
    {
        "name": "Frogadier",
        "health": 54,
        "magic": 63,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 63,
            "defense": 52,
            "speed": 97
        }
    },
    {
        "name": "Greninja",
        "health": 72,
        "magic": 95,
        "type": [
            "Water",
            "Dark"
        ],
        "power": {
            "attack": 95,
            "defense": 67,
            "speed": 122
        }
    },
    {
        "name": "Bunnelby",
        "health": 38,
        "magic": 36,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 36,
            "defense": 38,
            "speed": 57
        }
    },
    {
        "name": "Diggersby",
        "health": 85,
        "magic": 56,
        "type": [
            "Normal",
            "Ground"
        ],
        "power": {
            "attack": 56,
            "defense": 77,
            "speed": 78
        }
    },
    {
        "name": "Fletchling",
        "health": 45,
        "magic": 50,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 50,
            "defense": 43,
            "speed": 62
        }
    },
    {
        "name": "Fletchinder",
        "health": 62,
        "magic": 73,
        "type": [
            "Fire",
            "Flying"
        ],
        "power": {
            "attack": 73,
            "defense": 55,
            "speed": 84
        }
    },
    {
        "name": "Talonflame",
        "health": 78,
        "magic": 81,
        "type": [
            "Fire",
            "Flying"
        ],
        "power": {
            "attack": 81,
            "defense": 71,
            "speed": 126
        }
    },
    {
        "name": "Scatterbug",
        "health": 38,
        "magic": 35,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 35,
            "defense": 40,
            "speed": 35
        }
    },
    {
        "name": "Spewpa",
        "health": 45,
        "magic": 22,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 22,
            "defense": 60,
            "speed": 29
        }
    },
    {
        "name": "Vivillon",
        "health": 80,
        "magic": 52,
        "type": [
            "Bug",
            "Flying"
        ],
        "power": {
            "attack": 52,
            "defense": 50,
            "speed": 89
        }
    },
    {
        "name": "Litleo",
        "health": 62,
        "magic": 50,
        "type": [
            "Fire",
            "Normal"
        ],
        "power": {
            "attack": 50,
            "defense": 58,
            "speed": 72
        }
    },
    {
        "name": "Pyroar",
        "health": 86,
        "magic": 68,
        "type": [
            "Fire",
            "Normal"
        ],
        "power": {
            "attack": 68,
            "defense": 72,
            "speed": 106
        }
    },
    {
        "name": "Flabébé",
        "health": 44,
        "magic": 38,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 38,
            "defense": 39,
            "speed": 42
        }
    },
    {
        "name": "Floette",
        "health": 54,
        "magic": 45,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 45,
            "defense": 47,
            "speed": 52
        }
    },
    {
        "name": "Florges",
        "health": 78,
        "magic": 65,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 65,
            "defense": 68,
            "speed": 75
        }
    },
    {
        "name": "Skiddo",
        "health": 66,
        "magic": 65,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 65,
            "defense": 48,
            "speed": 52
        }
    },
    {
        "name": "Gogoat",
        "health": 123,
        "magic": 100,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 100,
            "defense": 62,
            "speed": 68
        }
    },
    {
        "name": "Pancham",
        "health": 67,
        "magic": 82,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 82,
            "defense": 62,
            "speed": 43
        }
    },
    {
        "name": "Pangoro",
        "health": 95,
        "magic": 124,
        "type": [
            "Fighting",
            "Dark"
        ],
        "power": {
            "attack": 124,
            "defense": 78,
            "speed": 58
        }
    },
    {
        "name": "Furfrou",
        "health": 75,
        "magic": 80,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 80,
            "defense": 60,
            "speed": 102
        }
    },
    {
        "name": "Espurr",
        "health": 62,
        "magic": 48,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 48,
            "defense": 54,
            "speed": 68
        }
    },
    {
        "name": "Meowstic",
        "health": 74,
        "magic": 48,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 48,
            "defense": 76,
            "speed": 104
        }
    },
    {
        "name": "Honedge",
        "health": 45,
        "magic": 80,
        "type": [
            "Steel",
            "Ghost"
        ],
        "power": {
            "attack": 80,
            "defense": 100,
            "speed": 28
        }
    },
    {
        "name": "Doublade",
        "health": 59,
        "magic": 110,
        "type": [
            "Steel",
            "Ghost"
        ],
        "power": {
            "attack": 110,
            "defense": 150,
            "speed": 35
        }
    },
    {
        "name": "Aegislash",
        "health": 60,
        "magic": 50,
        "type": [
            "Steel",
            "Ghost"
        ],
        "power": {
            "attack": 50,
            "defense": 150,
            "speed": 60
        }
    },
    {
        "name": "Spritzee",
        "health": 78,
        "magic": 52,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 52,
            "defense": 60,
            "speed": 23
        }
    },
    {
        "name": "Aromatisse",
        "health": 101,
        "magic": 72,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 72,
            "defense": 72,
            "speed": 29
        }
    },
    {
        "name": "Swirlix",
        "health": 62,
        "magic": 48,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 48,
            "defense": 66,
            "speed": 49
        }
    },
    {
        "name": "Slurpuff",
        "health": 82,
        "magic": 80,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 80,
            "defense": 86,
            "speed": 72
        }
    },
    {
        "name": "Inkay",
        "health": 53,
        "magic": 54,
        "type": [
            "Dark",
            "Psychic"
        ],
        "power": {
            "attack": 54,
            "defense": 53,
            "speed": 45
        }
    },
    {
        "name": "Malamar",
        "health": 86,
        "magic": 92,
        "type": [
            "Dark",
            "Psychic"
        ],
        "power": {
            "attack": 92,
            "defense": 88,
            "speed": 73
        }
    },
    {
        "name": "Binacle",
        "health": 42,
        "magic": 52,
        "type": [
            "Rock",
            "Water"
        ],
        "power": {
            "attack": 52,
            "defense": 67,
            "speed": 50
        }
    },
    {
        "name": "Barbaracle",
        "health": 72,
        "magic": 105,
        "type": [
            "Rock",
            "Water"
        ],
        "power": {
            "attack": 105,
            "defense": 115,
            "speed": 68
        }
    },
    {
        "name": "Skrelp",
        "health": 50,
        "magic": 60,
        "type": [
            "Poison",
            "Water"
        ],
        "power": {
            "attack": 60,
            "defense": 60,
            "speed": 30
        }
    },
    {
        "name": "Dragalge",
        "health": 65,
        "magic": 75,
        "type": [
            "Poison",
            "Dragon"
        ],
        "power": {
            "attack": 75,
            "defense": 90,
            "speed": 44
        }
    },
    {
        "name": "Clauncher",
        "health": 50,
        "magic": 53,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 53,
            "defense": 62,
            "speed": 44
        }
    },
    {
        "name": "Clawitzer",
        "health": 71,
        "magic": 73,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 73,
            "defense": 88,
            "speed": 59
        }
    },
    {
        "name": "Helioptile",
        "health": 44,
        "magic": 38,
        "type": [
            "Electric",
            "Normal"
        ],
        "power": {
            "attack": 38,
            "defense": 33,
            "speed": 70
        }
    },
    {
        "name": "Heliolisk",
        "health": 62,
        "magic": 55,
        "type": [
            "Electric",
            "Normal"
        ],
        "power": {
            "attack": 55,
            "defense": 52,
            "speed": 109
        }
    },
    {
        "name": "Tyrunt",
        "health": 58,
        "magic": 89,
        "type": [
            "Rock",
            "Dragon"
        ],
        "power": {
            "attack": 89,
            "defense": 77,
            "speed": 48
        }
    },
    {
        "name": "Tyrantrum",
        "health": 82,
        "magic": 121,
        "type": [
            "Rock",
            "Dragon"
        ],
        "power": {
            "attack": 121,
            "defense": 119,
            "speed": 71
        }
    },
    {
        "name": "Amaura",
        "health": 77,
        "magic": 59,
        "type": [
            "Rock",
            "Ice"
        ],
        "power": {
            "attack": 59,
            "defense": 50,
            "speed": 46
        }
    },
    {
        "name": "Aurorus",
        "health": 123,
        "magic": 77,
        "type": [
            "Rock",
            "Ice"
        ],
        "power": {
            "attack": 77,
            "defense": 72,
            "speed": 58
        }
    },
    {
        "name": "Sylveon",
        "health": 95,
        "magic": 65,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 65,
            "defense": 65,
            "speed": 60
        }
    },
    {
        "name": "Hawlucha",
        "health": 78,
        "magic": 92,
        "type": [
            "Fighting",
            "Flying"
        ],
        "power": {
            "attack": 92,
            "defense": 75,
            "speed": 118
        }
    },
    {
        "name": "Dedenne",
        "health": 67,
        "magic": 58,
        "type": [
            "Electric",
            "Fairy"
        ],
        "power": {
            "attack": 58,
            "defense": 57,
            "speed": 101
        }
    },
    {
        "name": "Carbink",
        "health": 50,
        "magic": 50,
        "type": [
            "Rock",
            "Fairy"
        ],
        "power": {
            "attack": 50,
            "defense": 150,
            "speed": 50
        }
    },
    {
        "name": "Goomy",
        "health": 45,
        "magic": 50,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 50,
            "defense": 35,
            "speed": 40
        }
    },
    {
        "name": "Sliggoo",
        "health": 68,
        "magic": 75,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 75,
            "defense": 53,
            "speed": 60
        }
    },
    {
        "name": "Goodra",
        "health": 90,
        "magic": 100,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 100,
            "defense": 70,
            "speed": 80
        }
    },
    {
        "name": "Klefki",
        "health": 57,
        "magic": 80,
        "type": [
            "Steel",
            "Fairy"
        ],
        "power": {
            "attack": 80,
            "defense": 91,
            "speed": 75
        }
    },
    {
        "name": "Phantump",
        "health": 43,
        "magic": 70,
        "type": [
            "Ghost",
            "Grass"
        ],
        "power": {
            "attack": 70,
            "defense": 48,
            "speed": 38
        }
    },
    {
        "name": "Trevenant",
        "health": 85,
        "magic": 110,
        "type": [
            "Ghost",
            "Grass"
        ],
        "power": {
            "attack": 110,
            "defense": 76,
            "speed": 56
        }
    },
    {
        "name": "Pumpkaboo",
        "health": 59,
        "magic": 66,
        "type": [
            "Ghost",
            "Grass"
        ],
        "power": {
            "attack": 66,
            "defense": 70,
            "speed": 41
        }
    },
    {
        "name": "Gourgeist",
        "health": 85,
        "magic": 100,
        "type": [
            "Ghost",
            "Grass"
        ],
        "power": {
            "attack": 100,
            "defense": 122,
            "speed": 54
        }
    },
    {
        "name": "Bergmite",
        "health": 55,
        "magic": 69,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 69,
            "defense": 85,
            "speed": 28
        }
    },
    {
        "name": "Avalugg",
        "health": 95,
        "magic": 117,
        "type": [
            "Ice"
        ],
        "power": {
            "attack": 117,
            "defense": 184,
            "speed": 28
        }
    },
    {
        "name": "Noibat",
        "health": 40,
        "magic": 30,
        "type": [
            "Flying",
            "Dragon"
        ],
        "power": {
            "attack": 30,
            "defense": 35,
            "speed": 55
        }
    },
    {
        "name": "Noivern",
        "health": 85,
        "magic": 70,
        "type": [
            "Flying",
            "Dragon"
        ],
        "power": {
            "attack": 70,
            "defense": 80,
            "speed": 123
        }
    },
    {
        "name": "Xerneas",
        "health": 126,
        "magic": 131,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 131,
            "defense": 95,
            "speed": 99
        }
    },
    {
        "name": "Yveltal",
        "health": 126,
        "magic": 131,
        "type": [
            "Dark",
            "Flying"
        ],
        "power": {
            "attack": 131,
            "defense": 95,
            "speed": 99
        }
    },
    {
        "name": "Zygarde",
        "health": 108,
        "magic": 100,
        "type": [
            "Dragon",
            "Ground"
        ],
        "power": {
            "attack": 100,
            "defense": 121,
            "speed": 95
        }
    },
    {
        "name": "Diancie",
        "health": 50,
        "magic": 100,
        "type": [
            "Rock",
            "Fairy"
        ],
        "power": {
            "attack": 100,
            "defense": 150,
            "speed": 50
        }
    },
    {
        "name": "Hoopa",
        "health": 80,
        "magic": 110,
        "type": [
            "Psychic",
            "Ghost"
        ],
        "power": {
            "attack": 110,
            "defense": 60,
            "speed": 70
        }
    },
    {
        "name": "Volcanion",
        "health": 80,
        "magic": 110,
        "type": [
            "Fire",
            "Water"
        ],
        "power": {
            "attack": 110,
            "defense": 120,
            "speed": 70
        }
    },
    {
        "name": "Rowlet",
        "health": 68,
        "magic": 55,
        "type": [
            "Grass",
            "Flying"
        ],
        "power": {
            "attack": 55,
            "defense": 55,
            "speed": 42
        }
    },
    {
        "name": "Dartrix",
        "health": 78,
        "magic": 75,
        "type": [
            "Grass",
            "Flying"
        ],
        "power": {
            "attack": 75,
            "defense": 75,
            "speed": 52
        }
    },
    {
        "name": "Decidueye",
        "health": 78,
        "magic": 107,
        "type": [
            "Grass",
            "Ghost"
        ],
        "power": {
            "attack": 107,
            "defense": 75,
            "speed": 70
        }
    },
    {
        "name": "Litten",
        "health": 45,
        "magic": 65,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 65,
            "defense": 40,
            "speed": 70
        }
    },
    {
        "name": "Torracat",
        "health": 65,
        "magic": 85,
        "type": [
            "Fire"
        ],
        "power": {
            "attack": 85,
            "defense": 50,
            "speed": 90
        }
    },
    {
        "name": "Incineroar",
        "health": 95,
        "magic": 115,
        "type": [
            "Fire",
            "Dark"
        ],
        "power": {
            "attack": 115,
            "defense": 90,
            "speed": 60
        }
    },
    {
        "name": "Popplio",
        "health": 50,
        "magic": 54,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 54,
            "defense": 54,
            "speed": 40
        }
    },
    {
        "name": "Brionne",
        "health": 60,
        "magic": 69,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 69,
            "defense": 69,
            "speed": 50
        }
    },
    {
        "name": "Primarina",
        "health": 80,
        "magic": 74,
        "type": [
            "Water",
            "Fairy"
        ],
        "power": {
            "attack": 74,
            "defense": 74,
            "speed": 60
        }
    },
    {
        "name": "Pikipek",
        "health": 35,
        "magic": 75,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 75,
            "defense": 30,
            "speed": 65
        }
    },
    {
        "name": "Trumbeak",
        "health": 55,
        "magic": 85,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 85,
            "defense": 50,
            "speed": 75
        }
    },
    {
        "name": "Toucannon",
        "health": 80,
        "magic": 120,
        "type": [
            "Normal",
            "Flying"
        ],
        "power": {
            "attack": 120,
            "defense": 75,
            "speed": 60
        }
    },
    {
        "name": "Yungoos",
        "health": 48,
        "magic": 70,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 70,
            "defense": 30,
            "speed": 45
        }
    },
    {
        "name": "Gumshoos",
        "health": 88,
        "magic": 110,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 110,
            "defense": 60,
            "speed": 45
        }
    },
    {
        "name": "Grubbin",
        "health": 47,
        "magic": 62,
        "type": [
            "Bug"
        ],
        "power": {
            "attack": 62,
            "defense": 45,
            "speed": 46
        }
    },
    {
        "name": "Charjabug",
        "health": 57,
        "magic": 82,
        "type": [
            "Bug",
            "Electric"
        ],
        "power": {
            "attack": 82,
            "defense": 95,
            "speed": 36
        }
    },
    {
        "name": "Vikavolt",
        "health": 77,
        "magic": 70,
        "type": [
            "Bug",
            "Electric"
        ],
        "power": {
            "attack": 70,
            "defense": 90,
            "speed": 43
        }
    },
    {
        "name": "Crabrawler",
        "health": 47,
        "magic": 82,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 82,
            "defense": 57,
            "speed": 63
        }
    },
    {
        "name": "Crabominable",
        "health": 97,
        "magic": 132,
        "type": [
            "Fighting",
            "Ice"
        ],
        "power": {
            "attack": 132,
            "defense": 77,
            "speed": 43
        }
    },
    {
        "name": "Oricorio",
        "health": 75,
        "magic": 70,
        "type": [
            "Fire",
            "Flying"
        ],
        "power": {
            "attack": 70,
            "defense": 70,
            "speed": 93
        }
    },
    {
        "name": "Cutiefly",
        "health": 40,
        "magic": 45,
        "type": [
            "Bug",
            "Fairy"
        ],
        "power": {
            "attack": 45,
            "defense": 40,
            "speed": 84
        }
    },
    {
        "name": "Ribombee",
        "health": 60,
        "magic": 55,
        "type": [
            "Bug",
            "Fairy"
        ],
        "power": {
            "attack": 55,
            "defense": 60,
            "speed": 124
        }
    },
    {
        "name": "Rockruff",
        "health": 45,
        "magic": 65,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 65,
            "defense": 40,
            "speed": 60
        }
    },
    {
        "name": "Lycanroc",
        "health": 75,
        "magic": 115,
        "type": [
            "Rock"
        ],
        "power": {
            "attack": 115,
            "defense": 65,
            "speed": 112
        }
    },
    {
        "name": "Wishiwashi",
        "health": 45,
        "magic": 20,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 20,
            "defense": 20,
            "speed": 40
        }
    },
    {
        "name": "Mareanie",
        "health": 50,
        "magic": 53,
        "type": [
            "Poison",
            "Water"
        ],
        "power": {
            "attack": 53,
            "defense": 62,
            "speed": 45
        }
    },
    {
        "name": "Toxapex",
        "health": 50,
        "magic": 63,
        "type": [
            "Poison",
            "Water"
        ],
        "power": {
            "attack": 63,
            "defense": 152,
            "speed": 35
        }
    },
    {
        "name": "Mudbray",
        "health": 70,
        "magic": 100,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 100,
            "defense": 70,
            "speed": 45
        }
    },
    {
        "name": "Mudsdale",
        "health": 100,
        "magic": 125,
        "type": [
            "Ground"
        ],
        "power": {
            "attack": 125,
            "defense": 100,
            "speed": 35
        }
    },
    {
        "name": "Dewpider",
        "health": 38,
        "magic": 40,
        "type": [
            "Water",
            "Bug"
        ],
        "power": {
            "attack": 40,
            "defense": 52,
            "speed": 27
        }
    },
    {
        "name": "Araquanid",
        "health": 68,
        "magic": 70,
        "type": [
            "Water",
            "Bug"
        ],
        "power": {
            "attack": 70,
            "defense": 92,
            "speed": 42
        }
    },
    {
        "name": "Fomantis",
        "health": 40,
        "magic": 55,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 55,
            "defense": 35,
            "speed": 35
        }
    },
    {
        "name": "Lurantis",
        "health": 70,
        "magic": 105,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 105,
            "defense": 90,
            "speed": 45
        }
    },
    {
        "name": "Morelull",
        "health": 40,
        "magic": 35,
        "type": [
            "Grass",
            "Fairy"
        ],
        "power": {
            "attack": 35,
            "defense": 55,
            "speed": 15
        }
    },
    {
        "name": "Shiinotic",
        "health": 60,
        "magic": 45,
        "type": [
            "Grass",
            "Fairy"
        ],
        "power": {
            "attack": 45,
            "defense": 80,
            "speed": 30
        }
    },
    {
        "name": "Salandit",
        "health": 48,
        "magic": 44,
        "type": [
            "Poison",
            "Fire"
        ],
        "power": {
            "attack": 44,
            "defense": 40,
            "speed": 77
        }
    },
    {
        "name": "Salazzle",
        "health": 68,
        "magic": 64,
        "type": [
            "Poison",
            "Fire"
        ],
        "power": {
            "attack": 64,
            "defense": 60,
            "speed": 117
        }
    },
    {
        "name": "Stufful",
        "health": 70,
        "magic": 75,
        "type": [
            "Normal",
            "Fighting"
        ],
        "power": {
            "attack": 75,
            "defense": 50,
            "speed": 50
        }
    },
    {
        "name": "Bewear",
        "health": 120,
        "magic": 125,
        "type": [
            "Normal",
            "Fighting"
        ],
        "power": {
            "attack": 125,
            "defense": 80,
            "speed": 60
        }
    },
    {
        "name": "Bounsweet",
        "health": 42,
        "magic": 30,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 30,
            "defense": 38,
            "speed": 32
        }
    },
    {
        "name": "Steenee",
        "health": 52,
        "magic": 40,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 40,
            "defense": 48,
            "speed": 62
        }
    },
    {
        "name": "Tsareena",
        "health": 72,
        "magic": 120,
        "type": [
            "Grass"
        ],
        "power": {
            "attack": 120,
            "defense": 98,
            "speed": 72
        }
    },
    {
        "name": "Comfey",
        "health": 51,
        "magic": 52,
        "type": [
            "Fairy"
        ],
        "power": {
            "attack": 52,
            "defense": 90,
            "speed": 100
        }
    },
    {
        "name": "Oranguru",
        "health": 90,
        "magic": 60,
        "type": [
            "Normal",
            "Psychic"
        ],
        "power": {
            "attack": 60,
            "defense": 80,
            "speed": 60
        }
    },
    {
        "name": "Passimian",
        "health": 100,
        "magic": 120,
        "type": [
            "Fighting"
        ],
        "power": {
            "attack": 120,
            "defense": 90,
            "speed": 80
        }
    },
    {
        "name": "Wimpod",
        "health": 25,
        "magic": 35,
        "type": [
            "Bug",
            "Water"
        ],
        "power": {
            "attack": 35,
            "defense": 40,
            "speed": 80
        }
    },
    {
        "name": "Golisopod",
        "health": 75,
        "magic": 125,
        "type": [
            "Bug",
            "Water"
        ],
        "power": {
            "attack": 125,
            "defense": 140,
            "speed": 40
        }
    },
    {
        "name": "Sandygast",
        "health": 55,
        "magic": 55,
        "type": [
            "Ghost",
            "Ground"
        ],
        "power": {
            "attack": 55,
            "defense": 80,
            "speed": 15
        }
    },
    {
        "name": "Palossand",
        "health": 85,
        "magic": 75,
        "type": [
            "Ghost",
            "Ground"
        ],
        "power": {
            "attack": 75,
            "defense": 110,
            "speed": 35
        }
    },
    {
        "name": "Pyukumuku",
        "health": 55,
        "magic": 60,
        "type": [
            "Water"
        ],
        "power": {
            "attack": 60,
            "defense": 130,
            "speed": 5
        }
    },
    {
        "name": "Type: Null",
        "health": 95,
        "magic": 95,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 95,
            "defense": 95,
            "speed": 59
        }
    },
    {
        "name": "Silvally",
        "health": 95,
        "magic": 95,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 95,
            "defense": 95,
            "speed": 95
        }
    },
    {
        "name": "Minior",
        "health": 60,
        "magic": 60,
        "type": [
            "Rock",
            "Flying"
        ],
        "power": {
            "attack": 60,
            "defense": 100,
            "speed": 60
        }
    },
    {
        "name": "Komala",
        "health": 65,
        "magic": 115,
        "type": [
            "Normal"
        ],
        "power": {
            "attack": 115,
            "defense": 65,
            "speed": 65
        }
    },
    {
        "name": "Turtonator",
        "health": 60,
        "magic": 78,
        "type": [
            "Fire",
            "Dragon"
        ],
        "power": {
            "attack": 78,
            "defense": 135,
            "speed": 36
        }
    },
    {
        "name": "Togedemaru",
        "health": 65,
        "magic": 98,
        "type": [
            "Electric",
            "Steel"
        ],
        "power": {
            "attack": 98,
            "defense": 63,
            "speed": 96
        }
    },
    {
        "name": "Mimikyu",
        "health": 55,
        "magic": 90,
        "type": [
            "Ghost",
            "Fairy"
        ],
        "power": {
            "attack": 90,
            "defense": 80,
            "speed": 96
        }
    },
    {
        "name": "Bruxish",
        "health": 68,
        "magic": 105,
        "type": [
            "Water",
            "Psychic"
        ],
        "power": {
            "attack": 105,
            "defense": 70,
            "speed": 92
        }
    },
    {
        "name": "Drampa",
        "health": 78,
        "magic": 60,
        "type": [
            "Normal",
            "Dragon"
        ],
        "power": {
            "attack": 60,
            "defense": 85,
            "speed": 36
        }
    },
    {
        "name": "Dhelmise",
        "health": 70,
        "magic": 131,
        "type": [
            "Ghost",
            "Grass"
        ],
        "power": {
            "attack": 131,
            "defense": 100,
            "speed": 40
        }
    },
    {
        "name": "Jangmo-o",
        "health": 45,
        "magic": 55,
        "type": [
            "Dragon"
        ],
        "power": {
            "attack": 55,
            "defense": 65,
            "speed": 45
        }
    },
    {
        "name": "Hakamo-o",
        "health": 55,
        "magic": 75,
        "type": [
            "Dragon",
            "Fighting"
        ],
        "power": {
            "attack": 75,
            "defense": 90,
            "speed": 65
        }
    },
    {
        "name": "Kommo-o",
        "health": 75,
        "magic": 110,
        "type": [
            "Dragon",
            "Fighting"
        ],
        "power": {
            "attack": 110,
            "defense": 125,
            "speed": 85
        }
    },
    {
        "name": "Tapu Koko",
        "health": 70,
        "magic": 115,
        "type": [
            "Electric",
            "Fairy"
        ],
        "power": {
            "attack": 115,
            "defense": 85,
            "speed": 130
        }
    },
    {
        "name": "Tapu Lele",
        "health": 70,
        "magic": 85,
        "type": [
            "Psychic",
            "Fairy"
        ],
        "power": {
            "attack": 85,
            "defense": 75,
            "speed": 95
        }
    },
    {
        "name": "Tapu Bulu",
        "health": 70,
        "magic": 130,
        "type": [
            "Grass",
            "Fairy"
        ],
        "power": {
            "attack": 130,
            "defense": 115,
            "speed": 75
        }
    },
    {
        "name": "Tapu Fini",
        "health": 70,
        "magic": 75,
        "type": [
            "Water",
            "Fairy"
        ],
        "power": {
            "attack": 75,
            "defense": 115,
            "speed": 85
        }
    },
    {
        "name": "Cosmog",
        "health": 43,
        "magic": 29,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 29,
            "defense": 31,
            "speed": 37
        }
    },
    {
        "name": "Cosmoem",
        "health": 43,
        "magic": 29,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 29,
            "defense": 131,
            "speed": 37
        }
    },
    {
        "name": "Solgaleo",
        "health": 137,
        "magic": 137,
        "type": [
            "Psychic",
            "Steel"
        ],
        "power": {
            "attack": 137,
            "defense": 107,
            "speed": 97
        }
    },
    {
        "name": "Lunala",
        "health": 137,
        "magic": 113,
        "type": [
            "Psychic",
            "Ghost"
        ],
        "power": {
            "attack": 113,
            "defense": 89,
            "speed": 97
        }
    },
    {
        "name": "Nihilego",
        "health": 109,
        "magic": 53,
        "type": [
            "Rock",
            "Poison"
        ],
        "power": {
            "attack": 53,
            "defense": 47,
            "speed": 103
        }
    },
    {
        "name": "Buzzwole",
        "health": 107,
        "magic": 139,
        "type": [
            "Bug",
            "Fighting"
        ],
        "power": {
            "attack": 139,
            "defense": 139,
            "speed": 79
        }
    },
    {
        "name": "Pheromosa",
        "health": 71,
        "magic": 137,
        "type": [
            "Bug",
            "Fighting"
        ],
        "power": {
            "attack": 137,
            "defense": 37,
            "speed": 151
        }
    },
    {
        "name": "Xurkitree",
        "health": 83,
        "magic": 89,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 89,
            "defense": 71,
            "speed": 83
        }
    },
    {
        "name": "Celesteela",
        "health": 97,
        "magic": 101,
        "type": [
            "Steel",
            "Flying"
        ],
        "power": {
            "attack": 101,
            "defense": 103,
            "speed": 61
        }
    },
    {
        "name": "Kartana",
        "health": 59,
        "magic": 181,
        "type": [
            "Grass",
            "Steel"
        ],
        "power": {
            "attack": 181,
            "defense": 131,
            "speed": 109
        }
    },
    {
        "name": "Guzzlord",
        "health": 223,
        "magic": 101,
        "type": [
            "Dark",
            "Dragon"
        ],
        "power": {
            "attack": 101,
            "defense": 53,
            "speed": 43
        }
    },
    {
        "name": "Necrozma",
        "health": 97,
        "magic": 107,
        "type": [
            "Psychic"
        ],
        "power": {
            "attack": 107,
            "defense": 101,
            "speed": 79
        }
    },
    {
        "name": "Magearna",
        "health": 80,
        "magic": 95,
        "type": [
            "Steel",
            "Fairy"
        ],
        "power": {
            "attack": 95,
            "defense": 115,
            "speed": 65
        }
    },
    {
        "name": "Marshadow",
        "health": 90,
        "magic": 125,
        "type": [
            "Fighting",
            "Ghost"
        ],
        "power": {
            "attack": 125,
            "defense": 80,
            "speed": 125
        }
    },
    {
        "name": "Poipole",
        "health": 67,
        "magic": 73,
        "type": [
            "Poison"
        ],
        "power": {
            "attack": 73,
            "defense": 67,
            "speed": 73
        }
    },
    {
        "name": "Naganadel",
        "health": 73,
        "magic": 73,
        "type": [
            "Poison",
            "Dragon"
        ],
        "power": {
            "attack": 73,
            "defense": 73,
            "speed": 121
        }
    },
    {
        "name": "Stakataka",
        "health": 61,
        "magic": 131,
        "type": [
            "Rock",
            "Steel"
        ],
        "power": {
            "attack": 131,
            "defense": 211,
            "speed": 13
        }
    },
    {
        "name": "Blacephalon",
        "health": 53,
        "magic": 127,
        "type": [
            "Fire",
            "Ghost"
        ],
        "power": {
            "attack": 127,
            "defense": 53,
            "speed": 107
        }
    },
    {
        "name": "Zeraora",
        "health": 88,
        "magic": 112,
        "type": [
            "Electric"
        ],
        "power": {
            "attack": 112,
            "defense": 75,
            "speed": 143
        }
    },
    {
        "name": "Meltan",
        "health": 46,
        "magic": 65,
        "type": [
            "Steel"
        ],
        "power": {
            "attack": 65,
            "defense": 65,
            "speed": 34
        }
    },
    {
        "name": "Melmetal",
        "health": 135,
        "magic": 143,
        "type": [
            "Steel"
        ],
        "power": {
            "attack": 143,
            "defense": 143,
            "speed": 34
        }
    }
]
const skillsData = [
    {
        "name": "Pound",
        "damage": 40,
        "magic": 35,
        "type": "Normal"
    },
    {
        "name": "Karate Chop",
        "damage": 50,
        "magic": 25,
        "type": "Fighting"
    },
    {
        "name": "Double Slap",
        "damage": 15,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Comet Punch",
        "damage": 18,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Mega Punch",
        "damage": 80,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Pay Day",
        "damage": 40,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Fire Punch",
        "damage": 75,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Ice Punch",
        "damage": 75,
        "magic": 15,
        "type": "Ice"
    },
    {
        "name": "Thunder Punch",
        "damage": 75,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Scratch",
        "damage": 40,
        "magic": 35,
        "type": "Normal"
    },
    {
        "name": "Vice Grip",
        "damage": 55,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Guillotine",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Razor Wind",
        "damage": 80,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Swords Dance",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Cut",
        "damage": 50,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Gust",
        "damage": 40,
        "magic": 35,
        "type": "Fighting"
    },
    {
        "name": "Wing Attack",
        "damage": 60,
        "magic": 35,
        "type": "Fighting"
    },
    {
        "name": "Whirlwind",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Fly",
        "damage": 90,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Bind",
        "damage": 15,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Slam",
        "damage": 80,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Vine Whip",
        "damage": 45,
        "magic": 25,
        "type": "Grass"
    },
    {
        "name": "Stomp",
        "damage": 65,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Double Kick",
        "damage": 30,
        "magic": 30,
        "type": "Fighting"
    },
    {
        "name": "Mega Kick",
        "damage": 120,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Jump Kick",
        "damage": 130,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Rolling Kick",
        "damage": 60,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Sand Attack",
        "damage": null,
        "magic": 15,
        "type": "Ground"
    },
    {
        "name": "Headbutt",
        "damage": 70,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Horn Attack",
        "damage": 65,
        "magic": 25,
        "type": "Normal"
    },
    {
        "name": "Fury Attack",
        "damage": 15,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Horn Drill",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Tackle",
        "damage": 50,
        "magic": 35,
        "type": "Normal"
    },
    {
        "name": "Body Slam",
        "damage": 85,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Wrap",
        "damage": 15,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Take Down",
        "damage": 90,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Thrash",
        "damage": 120,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Double-Edge",
        "damage": 120,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Tail Whip",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Poison Sting",
        "damage": 15,
        "magic": 35,
        "type": "Poison"
    },
    {
        "name": "Twineedle",
        "damage": 25,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Pin Missile",
        "damage": 25,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Leer",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Bite",
        "damage": 60,
        "magic": 25,
        "type": "Dark"
    },
    {
        "name": "Growl",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Roar",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Sing",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Supersonic",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Sonic Boom",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Disable",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Acid",
        "damage": 40,
        "magic": 30,
        "type": "Poison"
    },
    {
        "name": "Ember",
        "damage": 40,
        "magic": 25,
        "type": "Fire"
    },
    {
        "name": "Flamethrower",
        "damage": 90,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Mist",
        "damage": null,
        "magic": 30,
        "type": "Ice"
    },
    {
        "name": "Water Gun",
        "damage": 40,
        "magic": 25,
        "type": "Water"
    },
    {
        "name": "Hydro Pump",
        "damage": 110,
        "magic": 5,
        "type": "Water"
    },
    {
        "name": "Surf",
        "damage": 90,
        "magic": 15,
        "type": "Water"
    },
    {
        "name": "Ice Beam",
        "damage": 90,
        "magic": 10,
        "type": "Ice"
    },
    {
        "name": "Blizzard",
        "damage": 110,
        "magic": 5,
        "type": "Ice"
    },
    {
        "name": "Psybeam",
        "damage": 65,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Bubble Beam",
        "damage": 65,
        "magic": 20,
        "type": "Water"
    },
    {
        "name": "Aurora Beam",
        "damage": 65,
        "magic": 20,
        "type": "Ice"
    },
    {
        "name": "Hyper Beam",
        "damage": 150,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Peck",
        "damage": 35,
        "magic": 35,
        "type": "Fighting"
    },
    {
        "name": "Drill Peck",
        "damage": 80,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Submission",
        "damage": 80,
        "magic": 25,
        "type": "Fighting"
    },
    {
        "name": "Low Kick",
        "damage": null,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Counter",
        "damage": null,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Seismic Toss",
        "damage": null,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Strength",
        "damage": 80,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Absorb",
        "damage": 20,
        "magic": 25,
        "type": "Grass"
    },
    {
        "name": "Mega Drain",
        "damage": 40,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Leech Seed",
        "damage": null,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Growth",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Razor Leaf",
        "damage": 55,
        "magic": 25,
        "type": "Grass"
    },
    {
        "name": "Solar Beam",
        "damage": 120,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Poison Powder",
        "damage": null,
        "magic": 35,
        "type": "Poison"
    },
    {
        "name": "Stun Spore",
        "damage": null,
        "magic": 30,
        "type": "Grass"
    },
    {
        "name": "Sleep Powder",
        "damage": null,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Petal Dance",
        "damage": 120,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "String Shot",
        "damage": null,
        "magic": 40,
        "type": "Bug"
    },
    {
        "name": "Dragon Rage",
        "damage": null,
        "magic": 10,
        "type": "Dragon"
    },
    {
        "name": "Fire Spin",
        "damage": 35,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Thunder Shock",
        "damage": 40,
        "magic": 30,
        "type": "Electric"
    },
    {
        "name": "Thunderbolt",
        "damage": 90,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Thunder Wave",
        "damage": null,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Thunder",
        "damage": 110,
        "magic": 10,
        "type": "Electric"
    },
    {
        "name": "Rock Throw",
        "damage": 50,
        "magic": 15,
        "type": "Rock"
    },
    {
        "name": "Earthquake",
        "damage": 100,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Fissure",
        "damage": null,
        "magic": 5,
        "type": "Ground"
    },
    {
        "name": "Dig",
        "damage": 80,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Toxic",
        "damage": null,
        "magic": 10,
        "type": "Poison"
    },
    {
        "name": "Confusion",
        "damage": 50,
        "magic": 25,
        "type": "Psychic"
    },
    {
        "name": "Psychic",
        "damage": 90,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Hypnosis",
        "damage": null,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Meditate",
        "damage": null,
        "magic": 40,
        "type": "Psychic"
    },
    {
        "name": "Agility",
        "damage": null,
        "magic": 30,
        "type": "Psychic"
    },
    {
        "name": "Quick Attack",
        "damage": 40,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Rage",
        "damage": 20,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Teleport",
        "damage": null,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Night Shade",
        "damage": null,
        "magic": 15,
        "type": "Ghost"
    },
    {
        "name": "Mimic",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Screech",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Double Team",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Recover",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Harden",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Minimize",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Smokescreen",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Confuse Ray",
        "damage": null,
        "magic": 10,
        "type": "Ghost"
    },
    {
        "name": "Withdraw",
        "damage": null,
        "magic": 40,
        "type": "Water"
    },
    {
        "name": "Defense Curl",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Barrier",
        "damage": null,
        "magic": 30,
        "type": "Psychic"
    },
    {
        "name": "Light Screen",
        "damage": null,
        "magic": 30,
        "type": "Psychic"
    },
    {
        "name": "Haze",
        "damage": null,
        "magic": 30,
        "type": "Ice"
    },
    {
        "name": "Reflect",
        "damage": null,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Focus Energy",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Bide",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Metronome",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Mirror Move",
        "damage": null,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Self-Destruct",
        "damage": 200,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Egg Bomb",
        "damage": 100,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Lick",
        "damage": 30,
        "magic": 30,
        "type": "Ghost"
    },
    {
        "name": "Smog",
        "damage": 30,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Sludge",
        "damage": 65,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Bone Club",
        "damage": 65,
        "magic": 20,
        "type": "Ground"
    },
    {
        "name": "Fire Blast",
        "damage": 110,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Waterfall",
        "damage": 80,
        "magic": 15,
        "type": "Water"
    },
    {
        "name": "Clamp",
        "damage": 35,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Swift",
        "damage": 60,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Skull Bash",
        "damage": 130,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Spike Cannon",
        "damage": 20,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Constrict",
        "damage": 10,
        "magic": 35,
        "type": "Normal"
    },
    {
        "name": "Amnesia",
        "damage": null,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Kinesis",
        "damage": null,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Soft-Boiled",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "High Jump Kick",
        "damage": 130,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Glare",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Dream Eater",
        "damage": 100,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Poison Gas",
        "damage": null,
        "magic": 40,
        "type": "Poison"
    },
    {
        "name": "Barrage",
        "damage": 15,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Leech Life",
        "damage": 20,
        "magic": 15,
        "type": "Bug"
    },
    {
        "name": "Lovely Kiss",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Sky Attack",
        "damage": 140,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Transform",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Bubble",
        "damage": 40,
        "magic": 30,
        "type": "Water"
    },
    {
        "name": "Dizzy Punch",
        "damage": 70,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Spore",
        "damage": null,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Flash",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Psywave",
        "damage": null,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Splash",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Acid Armor",
        "damage": null,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Crabhammer",
        "damage": 100,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Explosion",
        "damage": 250,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Fury Swipes",
        "damage": 18,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Bonemerang",
        "damage": 50,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Rest",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Rock Slide",
        "damage": 75,
        "magic": 10,
        "type": "Rock"
    },
    {
        "name": "Hyper Fang",
        "damage": 80,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Sharpen",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Conversion",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Tri Attack",
        "damage": 80,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Super Fang",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Slash",
        "damage": 70,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Substitute",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Struggle",
        "damage": 50,
        "magic": null,
        "type": "Normal"
    },
    {
        "name": "Sketch",
        "damage": null,
        "magic": 1,
        "type": "Normal"
    },
    {
        "name": "Triple Kick",
        "damage": 10,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Thief",
        "damage": 60,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Spider Web",
        "damage": null,
        "magic": 10,
        "type": "Bug"
    },
    {
        "name": "Mind Reader",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Nightmare",
        "damage": null,
        "magic": 15,
        "type": "Ghost"
    },
    {
        "name": "Flame Wheel",
        "damage": 60,
        "magic": 25,
        "type": "Fire"
    },
    {
        "name": "Snore",
        "damage": 50,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Curse",
        "damage": null,
        "magic": null,
        "type": "Ghost"
    },
    {
        "name": "Flail",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Conversion 2",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Aeroblast",
        "damage": 100,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Cotton Spore",
        "damage": null,
        "magic": 40,
        "type": "Grass"
    },
    {
        "name": "Reversal",
        "damage": null,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Spite",
        "damage": null,
        "magic": 10,
        "type": "Ghost"
    },
    {
        "name": "Powder Snow",
        "damage": 40,
        "magic": 25,
        "type": "Ice"
    },
    {
        "name": "Protect",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Mach Punch",
        "damage": 40,
        "magic": 30,
        "type": "Fighting"
    },
    {
        "name": "Scary Face",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Feint Attack",
        "damage": 60,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Sweet Kiss",
        "damage": null,
        "magic": 10,
        "type": "Fairy"
    },
    {
        "name": "Belly Drum",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Sludge Bomb",
        "damage": 90,
        "magic": 10,
        "type": "Poison"
    },
    {
        "name": "Mud-Slap",
        "damage": 20,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Octazooka",
        "damage": 65,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Spikes",
        "damage": null,
        "magic": 20,
        "type": "Ground"
    },
    {
        "name": "Zap Cannon",
        "damage": 120,
        "magic": 5,
        "type": "Electric"
    },
    {
        "name": "Foresight",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Destiny Bond",
        "damage": null,
        "magic": 5,
        "type": "Ghost"
    },
    {
        "name": "Perish Song",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Icy Wind",
        "damage": 55,
        "magic": 15,
        "type": "Ice"
    },
    {
        "name": "Detect",
        "damage": null,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Bone Rush",
        "damage": 25,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Lock-On",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Outrage",
        "damage": 120,
        "magic": 15,
        "type": "Dragon"
    },
    {
        "name": "Sandstorm",
        "damage": null,
        "magic": 10,
        "type": "Rock"
    },
    {
        "name": "Giga Drain",
        "damage": 75,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Endure",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Charm",
        "damage": null,
        "magic": 20,
        "type": "Fairy"
    },
    {
        "name": "Rollout",
        "damage": 30,
        "magic": 20,
        "type": "Rock"
    },
    {
        "name": "False Swipe",
        "damage": 40,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Swagger",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Milk Drink",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Spark",
        "damage": 65,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Fury Cutter",
        "damage": 40,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Steel Wing",
        "damage": 70,
        "magic": 25,
        "type": "Steel"
    },
    {
        "name": "Mean Look",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Attract",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Sleep Talk",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Heal Bell",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Return",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Present",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Frustration",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Safeguard",
        "damage": null,
        "magic": 25,
        "type": "Normal"
    },
    {
        "name": "Pain Split",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Sacred Fire",
        "damage": 100,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Magnitude",
        "damage": null,
        "magic": 30,
        "type": "Ground"
    },
    {
        "name": "Dynamic Punch",
        "damage": 100,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Megahorn",
        "damage": 120,
        "magic": 10,
        "type": "Bug"
    },
    {
        "name": "Dragon Breath",
        "damage": 60,
        "magic": 20,
        "type": "Dragon"
    },
    {
        "name": "Baton Pass",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Encore",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Pursuit",
        "damage": 40,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Rapid Spin",
        "damage": 20,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Sweet Scent",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Iron Tail",
        "damage": 100,
        "magic": 15,
        "type": "Steel"
    },
    {
        "name": "Metal Claw",
        "damage": 50,
        "magic": 35,
        "type": "Steel"
    },
    {
        "name": "Vital Throw",
        "damage": 70,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Morning Sun",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Synthesis",
        "damage": null,
        "magic": 5,
        "type": "Grass"
    },
    {
        "name": "Moonlight",
        "damage": null,
        "magic": 5,
        "type": "Fairy"
    },
    {
        "name": "Hidden Power",
        "damage": 60,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Cross Chop",
        "damage": 100,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Twister",
        "damage": 40,
        "magic": 20,
        "type": "Dragon"
    },
    {
        "name": "Rain Dance",
        "damage": null,
        "magic": 5,
        "type": "Water"
    },
    {
        "name": "Sunny Day",
        "damage": null,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Crunch",
        "damage": 80,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Mirror Coat",
        "damage": null,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Psych Up",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Extreme Speed",
        "damage": 80,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Ancient Power",
        "damage": 60,
        "magic": 5,
        "type": "Rock"
    },
    {
        "name": "Shadow Ball",
        "damage": 80,
        "magic": 15,
        "type": "Ghost"
    },
    {
        "name": "Future Sight",
        "damage": 120,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Rock Smash",
        "damage": 40,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Whirlpool",
        "damage": 35,
        "magic": 15,
        "type": "Water"
    },
    {
        "name": "Beat Up",
        "damage": null,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Fake Out",
        "damage": 40,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Uproar",
        "damage": 90,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Stockpile",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Spit Up",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Swallow",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Heat Wave",
        "damage": 95,
        "magic": 10,
        "type": "Fire"
    },
    {
        "name": "Hail",
        "damage": null,
        "magic": 10,
        "type": "Ice"
    },
    {
        "name": "Torment",
        "damage": null,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Flatter",
        "damage": null,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Will-O-Wisp",
        "damage": null,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Memento",
        "damage": null,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Facade",
        "damage": 70,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Focus Punch",
        "damage": 150,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Smelling Salts",
        "damage": 70,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Follow Me",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Nature Power",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Charge",
        "damage": null,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Taunt",
        "damage": null,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Helping Hand",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Trick",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Role Play",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Wish",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Assist",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Ingrain",
        "damage": null,
        "magic": 20,
        "type": "Grass"
    },
    {
        "name": "Superpower",
        "damage": 120,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Magic Coat",
        "damage": null,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Recycle",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Revenge",
        "damage": 60,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Brick Break",
        "damage": 75,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Yawn",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Knock Off",
        "damage": 65,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Endeavor",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Eruption",
        "damage": 150,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Skill Swap",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Imprison",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Refresh",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Grudge",
        "damage": null,
        "magic": 5,
        "type": "Ghost"
    },
    {
        "name": "Snatch",
        "damage": null,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Secret Power",
        "damage": 70,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Dive",
        "damage": 80,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Arm Thrust",
        "damage": 15,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Camouflage",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Tail Glow",
        "damage": null,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Luster Purge",
        "damage": 70,
        "magic": 5,
        "type": "Psychic"
    },
    {
        "name": "Mist Ball",
        "damage": 70,
        "magic": 5,
        "type": "Psychic"
    },
    {
        "name": "Feather Dance",
        "damage": null,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Teeter Dance",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Blaze Kick",
        "damage": 85,
        "magic": 10,
        "type": "Fire"
    },
    {
        "name": "Mud Sport",
        "damage": null,
        "magic": 15,
        "type": "Ground"
    },
    {
        "name": "Ice Ball",
        "damage": 30,
        "magic": 20,
        "type": "Ice"
    },
    {
        "name": "Needle Arm",
        "damage": 60,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Slack Off",
        "damage": null,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Hyper Voice",
        "damage": 90,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Poison Fang",
        "damage": 50,
        "magic": 15,
        "type": "Poison"
    },
    {
        "name": "Crush Claw",
        "damage": 75,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Blast Burn",
        "damage": 150,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Hydro Cannon",
        "damage": 150,
        "magic": 5,
        "type": "Water"
    },
    {
        "name": "Meteor Mash",
        "damage": 90,
        "magic": 10,
        "type": "Steel"
    },
    {
        "name": "Astonish",
        "damage": 30,
        "magic": 15,
        "type": "Ghost"
    },
    {
        "name": "Weather Ball",
        "damage": 50,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Aromatherapy",
        "damage": null,
        "magic": 5,
        "type": "Grass"
    },
    {
        "name": "Fake Tears",
        "damage": null,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Air Cutter",
        "damage": 60,
        "magic": 25,
        "type": "Fighting"
    },
    {
        "name": "Overheat",
        "damage": 130,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Odor Sleuth",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Rock Tomb",
        "damage": 60,
        "magic": 15,
        "type": "Rock"
    },
    {
        "name": "Silver Wind",
        "damage": 60,
        "magic": 5,
        "type": "Bug"
    },
    {
        "name": "Metal Sound",
        "damage": null,
        "magic": 40,
        "type": "Steel"
    },
    {
        "name": "Grass Whistle",
        "damage": null,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Tickle",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Cosmic Power",
        "damage": null,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Water Spout",
        "damage": 150,
        "magic": 5,
        "type": "Water"
    },
    {
        "name": "Signal Beam",
        "damage": 75,
        "magic": 15,
        "type": "Bug"
    },
    {
        "name": "Shadow Punch",
        "damage": 60,
        "magic": 20,
        "type": "Ghost"
    },
    {
        "name": "Extrasensory",
        "damage": 80,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Sky Uppercut",
        "damage": 85,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Sand Tomb",
        "damage": 35,
        "magic": 15,
        "type": "Ground"
    },
    {
        "name": "Sheer Cold",
        "damage": null,
        "magic": 5,
        "type": "Ice"
    },
    {
        "name": "Muddy Water",
        "damage": 90,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Bullet Seed",
        "damage": 25,
        "magic": 30,
        "type": "Grass"
    },
    {
        "name": "Aerial Ace",
        "damage": 60,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Icicle Spear",
        "damage": 25,
        "magic": 30,
        "type": "Ice"
    },
    {
        "name": "Iron Defense",
        "damage": null,
        "magic": 15,
        "type": "Steel"
    },
    {
        "name": "Block",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Howl",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Dragon Claw",
        "damage": 80,
        "magic": 15,
        "type": "Dragon"
    },
    {
        "name": "Frenzy Plant",
        "damage": 150,
        "magic": 5,
        "type": "Grass"
    },
    {
        "name": "Bulk Up",
        "damage": null,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Bounce",
        "damage": 85,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Mud Shot",
        "damage": 55,
        "magic": 15,
        "type": "Ground"
    },
    {
        "name": "Poison Tail",
        "damage": 50,
        "magic": 25,
        "type": "Poison"
    },
    {
        "name": "Covet",
        "damage": 60,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Volt Tackle",
        "damage": 120,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Magical Leaf",
        "damage": 60,
        "magic": 20,
        "type": "Grass"
    },
    {
        "name": "Water Sport",
        "damage": null,
        "magic": 15,
        "type": "Water"
    },
    {
        "name": "Calm Mind",
        "damage": null,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Leaf Blade",
        "damage": 90,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Dragon Dance",
        "damage": null,
        "magic": 20,
        "type": "Dragon"
    },
    {
        "name": "Rock Blast",
        "damage": 25,
        "magic": 10,
        "type": "Rock"
    },
    {
        "name": "Shock Wave",
        "damage": 60,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Water Pulse",
        "damage": 60,
        "magic": 20,
        "type": "Water"
    },
    {
        "name": "Doom Desire",
        "damage": 140,
        "magic": 5,
        "type": "Steel"
    },
    {
        "name": "Psycho Boost",
        "damage": 140,
        "magic": 5,
        "type": "Psychic"
    },
    {
        "name": "Roost",
        "damage": null,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Gravity",
        "damage": null,
        "magic": 5,
        "type": "Psychic"
    },
    {
        "name": "Miracle Eye",
        "damage": null,
        "magic": 40,
        "type": "Psychic"
    },
    {
        "name": "Wake-Up Slap",
        "damage": 70,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Hammer Arm",
        "damage": 100,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Gyro Ball",
        "damage": null,
        "magic": 5,
        "type": "Steel"
    },
    {
        "name": "Healing Wish",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Brine",
        "damage": 65,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Natural Gift",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Feint",
        "damage": 50,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Pluck",
        "damage": 60,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Tailwind",
        "damage": null,
        "magic": 30,
        "type": "Fighting"
    },
    {
        "name": "Acupressure",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Metal Burst",
        "damage": null,
        "magic": 10,
        "type": "Steel"
    },
    {
        "name": "U-turn",
        "damage": 70,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Close Combat",
        "damage": 120,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Payback",
        "damage": 50,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Assurance",
        "damage": 60,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Embargo",
        "damage": null,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Fling",
        "damage": null,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Psycho Shift",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Trump Card",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Heal Block",
        "damage": null,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Wring Out",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Power Trick",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Gastro Acid",
        "damage": null,
        "magic": 10,
        "type": "Poison"
    },
    {
        "name": "Lucky Chant",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Me First",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Copycat",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Power Swap",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Guard Swap",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Punishment",
        "damage": null,
        "magic": 5,
        "type": "Dark"
    },
    {
        "name": "Last Resort",
        "damage": 140,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Worry Seed",
        "damage": null,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Sucker Punch",
        "damage": 80,
        "magic": 5,
        "type": "Dark"
    },
    {
        "name": "Toxic Spikes",
        "damage": null,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Heart Swap",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Aqua Ring",
        "damage": null,
        "magic": 20,
        "type": "Water"
    },
    {
        "name": "Magnet Rise",
        "damage": null,
        "magic": 10,
        "type": "Electric"
    },
    {
        "name": "Flare Blitz",
        "damage": 120,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Force Palm",
        "damage": 60,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Aura Sphere",
        "damage": 80,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Rock Polish",
        "damage": null,
        "magic": 20,
        "type": "Rock"
    },
    {
        "name": "Poison Jab",
        "damage": 80,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Dark Pulse",
        "damage": 80,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Night Slash",
        "damage": 70,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Aqua Tail",
        "damage": 90,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Seed Bomb",
        "damage": 80,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Air Slash",
        "damage": 75,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "X-Scissor",
        "damage": 80,
        "magic": 15,
        "type": "Bug"
    },
    {
        "name": "Bug Buzz",
        "damage": 90,
        "magic": 10,
        "type": "Bug"
    },
    {
        "name": "Dragon Pulse",
        "damage": 85,
        "magic": 10,
        "type": "Dragon"
    },
    {
        "name": "Dragon Rush",
        "damage": 100,
        "magic": 10,
        "type": "Dragon"
    },
    {
        "name": "Power Gem",
        "damage": 80,
        "magic": 20,
        "type": "Rock"
    },
    {
        "name": "Drain Punch",
        "damage": 75,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Vacuum Wave",
        "damage": 40,
        "magic": 30,
        "type": "Fighting"
    },
    {
        "name": "Focus Blast",
        "damage": 120,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Energy Ball",
        "damage": 90,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Brave Bird",
        "damage": 120,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Earth Power",
        "damage": 90,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Switcheroo",
        "damage": null,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Giga Impact",
        "damage": 150,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Nasty Plot",
        "damage": null,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Bullet Punch",
        "damage": 40,
        "magic": 30,
        "type": "Steel"
    },
    {
        "name": "Avalanche",
        "damage": 60,
        "magic": 10,
        "type": "Ice"
    },
    {
        "name": "Ice Shard",
        "damage": 40,
        "magic": 30,
        "type": "Ice"
    },
    {
        "name": "Shadow Claw",
        "damage": 70,
        "magic": 15,
        "type": "Ghost"
    },
    {
        "name": "Thunder Fang",
        "damage": 65,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Ice Fang",
        "damage": 65,
        "magic": 15,
        "type": "Ice"
    },
    {
        "name": "Fire Fang",
        "damage": 65,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Shadow Sneak",
        "damage": 40,
        "magic": 30,
        "type": "Ghost"
    },
    {
        "name": "Mud Bomb",
        "damage": 65,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Psycho Cut",
        "damage": 70,
        "magic": 20,
        "type": "Psychic"
    },
    {
        "name": "Zen Headbutt",
        "damage": 80,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Mirror Shot",
        "damage": 65,
        "magic": 10,
        "type": "Steel"
    },
    {
        "name": "Flash Cannon",
        "damage": 80,
        "magic": 10,
        "type": "Steel"
    },
    {
        "name": "Rock Climb",
        "damage": 90,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Defog",
        "damage": null,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Trick Room",
        "damage": null,
        "magic": 5,
        "type": "Psychic"
    },
    {
        "name": "Draco Meteor",
        "damage": 130,
        "magic": 5,
        "type": "Dragon"
    },
    {
        "name": "Discharge",
        "damage": 80,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Lava Plume",
        "damage": 80,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Leaf Storm",
        "damage": 130,
        "magic": 5,
        "type": "Grass"
    },
    {
        "name": "Power Whip",
        "damage": 120,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Rock Wrecker",
        "damage": 150,
        "magic": 5,
        "type": "Rock"
    },
    {
        "name": "Cross Poison",
        "damage": 70,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Gunk Shot",
        "damage": 120,
        "magic": 5,
        "type": "Poison"
    },
    {
        "name": "Iron Head",
        "damage": 80,
        "magic": 15,
        "type": "Steel"
    },
    {
        "name": "Magnet Bomb",
        "damage": 60,
        "magic": 20,
        "type": "Steel"
    },
    {
        "name": "Stone Edge",
        "damage": 100,
        "magic": 5,
        "type": "Rock"
    },
    {
        "name": "Captivate",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Stealth Rock",
        "damage": null,
        "magic": 20,
        "type": "Rock"
    },
    {
        "name": "Grass Knot",
        "damage": null,
        "magic": 20,
        "type": "Grass"
    },
    {
        "name": "Chatter",
        "damage": 60,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Judgment",
        "damage": 100,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Bug Bite",
        "damage": 60,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Charge Beam",
        "damage": 50,
        "magic": 10,
        "type": "Electric"
    },
    {
        "name": "Wood Hammer",
        "damage": 120,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Aqua Jet",
        "damage": 40,
        "magic": 20,
        "type": "Water"
    },
    {
        "name": "Attack Order",
        "damage": 90,
        "magic": 15,
        "type": "Bug"
    },
    {
        "name": "Defend Order",
        "damage": null,
        "magic": 10,
        "type": "Bug"
    },
    {
        "name": "Heal Order",
        "damage": null,
        "magic": 10,
        "type": "Bug"
    },
    {
        "name": "Head Smash",
        "damage": 150,
        "magic": 5,
        "type": "Rock"
    },
    {
        "name": "Double Hit",
        "damage": 35,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Roar of Time",
        "damage": 150,
        "magic": 5,
        "type": "Dragon"
    },
    {
        "name": "Spacial Rend",
        "damage": 100,
        "magic": 5,
        "type": "Dragon"
    },
    {
        "name": "Lunar Dance",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Crush Grip",
        "damage": null,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Magma Storm",
        "damage": 120,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Dark Void",
        "damage": null,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Seed Flare",
        "damage": 120,
        "magic": 5,
        "type": "Grass"
    },
    {
        "name": "Ominous Wind",
        "damage": 60,
        "magic": 5,
        "type": "Ghost"
    },
    {
        "name": "Shadow Force",
        "damage": 120,
        "magic": 5,
        "type": "Ghost"
    },
    {
        "name": "Hone Claws",
        "damage": null,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Wide Guard",
        "damage": null,
        "magic": 10,
        "type": "Rock"
    },
    {
        "name": "Guard Split",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Power Split",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Wonder Room",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Psyshock",
        "damage": 80,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Venoshock",
        "damage": 65,
        "magic": 10,
        "type": "Poison"
    },
    {
        "name": "Autotomize",
        "damage": null,
        "magic": 15,
        "type": "Steel"
    },
    {
        "name": "Rage Powder",
        "damage": null,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Telekinesis",
        "damage": null,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Magic Room",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Smack Down",
        "damage": 50,
        "magic": 15,
        "type": "Rock"
    },
    {
        "name": "Storm Throw",
        "damage": 60,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Flame Burst",
        "damage": 70,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Sludge Wave",
        "damage": 95,
        "magic": 10,
        "type": "Poison"
    },
    {
        "name": "Quiver Dance",
        "damage": null,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Heavy Slam",
        "damage": null,
        "magic": 10,
        "type": "Steel"
    },
    {
        "name": "Synchronoise",
        "damage": 120,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Electro Ball",
        "damage": null,
        "magic": 10,
        "type": "Electric"
    },
    {
        "name": "Soak",
        "damage": null,
        "magic": 20,
        "type": "Water"
    },
    {
        "name": "Flame Charge",
        "damage": 50,
        "magic": 20,
        "type": "Fire"
    },
    {
        "name": "Coil",
        "damage": null,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Low Sweep",
        "damage": 65,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Acid Spray",
        "damage": 40,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Foul Play",
        "damage": 95,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Simple Beam",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Entrainment",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "After You",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Round",
        "damage": 60,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Echoed Voice",
        "damage": 40,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Chip Away",
        "damage": 70,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Clear Smog",
        "damage": 50,
        "magic": 15,
        "type": "Poison"
    },
    {
        "name": "Stored Power",
        "damage": 20,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Quick Guard",
        "damage": null,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Ally Switch",
        "damage": null,
        "magic": 15,
        "type": "Psychic"
    },
    {
        "name": "Scald",
        "damage": 80,
        "magic": 15,
        "type": "Water"
    },
    {
        "name": "Shell Smash",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Heal Pulse",
        "damage": null,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Hex",
        "damage": 65,
        "magic": 10,
        "type": "Ghost"
    },
    {
        "name": "Sky Drop",
        "damage": 60,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Shift Gear",
        "damage": null,
        "magic": 10,
        "type": "Steel"
    },
    {
        "name": "Circle Throw",
        "damage": 60,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Incinerate",
        "damage": 60,
        "magic": 15,
        "type": "Fire"
    },
    {
        "name": "Quash",
        "damage": null,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Acrobatics",
        "damage": 55,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Reflect Type",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Retaliate",
        "damage": 70,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Final Gambit",
        "damage": null,
        "magic": 5,
        "type": "Fighting"
    },
    {
        "name": "Bestow",
        "damage": null,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Inferno",
        "damage": 100,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Water Pledge",
        "damage": 80,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Fire Pledge",
        "damage": 80,
        "magic": 10,
        "type": "Fire"
    },
    {
        "name": "Grass Pledge",
        "damage": 80,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Volt Switch",
        "damage": 70,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Struggle Bug",
        "damage": 50,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Bulldoze",
        "damage": 60,
        "magic": 20,
        "type": "Ground"
    },
    {
        "name": "Frost Breath",
        "damage": 60,
        "magic": 10,
        "type": "Ice"
    },
    {
        "name": "Dragon Tail",
        "damage": 60,
        "magic": 10,
        "type": "Dragon"
    },
    {
        "name": "Work Up",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Electroweb",
        "damage": 55,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Wild Charge",
        "damage": 90,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Drill Run",
        "damage": 80,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Dual Chop",
        "damage": 40,
        "magic": 15,
        "type": "Dragon"
    },
    {
        "name": "Heart Stamp",
        "damage": 60,
        "magic": 25,
        "type": "Psychic"
    },
    {
        "name": "Horn Leech",
        "damage": 75,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Sacred Sword",
        "damage": 90,
        "magic": 20,
        "type": "Fighting"
    },
    {
        "name": "Razor Shell",
        "damage": 75,
        "magic": 10,
        "type": "Water"
    },
    {
        "name": "Heat Crash",
        "damage": null,
        "magic": 10,
        "type": "Fire"
    },
    {
        "name": "Leaf Tornado",
        "damage": 65,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Steamroller",
        "damage": 65,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Cotton Guard",
        "damage": null,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Night Daze",
        "damage": 85,
        "magic": 10,
        "type": "Dark"
    },
    {
        "name": "Psystrike",
        "damage": 100,
        "magic": 10,
        "type": "Psychic"
    },
    {
        "name": "Tail Slap",
        "damage": 25,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Hurricane",
        "damage": 120,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Head Charge",
        "damage": 120,
        "magic": 15,
        "type": "Normal"
    },
    {
        "name": "Gear Grind",
        "damage": 50,
        "magic": 15,
        "type": "Steel"
    },
    {
        "name": "Searing Shot",
        "damage": 100,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Techno Blast",
        "damage": 85,
        "magic": 5,
        "type": "Normal"
    },
    {
        "name": "Relic Song",
        "damage": 75,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Secret Sword",
        "damage": 85,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Glaciate",
        "damage": 65,
        "magic": 10,
        "type": "Ice"
    },
    {
        "name": "Bolt Strike",
        "damage": 130,
        "magic": 5,
        "type": "Electric"
    },
    {
        "name": "Blue Flare",
        "damage": 130,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Fiery Dance",
        "damage": 80,
        "magic": 10,
        "type": "Fire"
    },
    {
        "name": "Freeze Shock",
        "damage": 140,
        "magic": 5,
        "type": "Ice"
    },
    {
        "name": "Ice Burn",
        "damage": 140,
        "magic": 5,
        "type": "Ice"
    },
    {
        "name": "Snarl",
        "damage": 55,
        "magic": 15,
        "type": "Dark"
    },
    {
        "name": "Icicle Crash",
        "damage": 85,
        "magic": 10,
        "type": "Ice"
    },
    {
        "name": "V-create",
        "damage": 180,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Fusion Flare",
        "damage": 100,
        "magic": 5,
        "type": "Fire"
    },
    {
        "name": "Fusion Bolt",
        "damage": 100,
        "magic": 5,
        "type": "Electric"
    },
    {
        "name": "Flying Press",
        "damage": 80,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Mat Block",
        "damage": null,
        "magic": 15,
        "type": "Fighting"
    },
    {
        "name": "Belch",
        "damage": 120,
        "magic": 10,
        "type": "Poison"
    },
    {
        "name": "Rototiller",
        "damage": null,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Sticky Web",
        "damage": null,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Fell Stinger",
        "damage": 30,
        "magic": 25,
        "type": "Bug"
    },
    {
        "name": "Phantom Force",
        "damage": 90,
        "magic": 10,
        "type": "Ghost"
    },
    {
        "name": "Trick-or-Treat",
        "damage": null,
        "magic": 20,
        "type": "Ghost"
    },
    {
        "name": "Noble Roar",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Ion Deluge",
        "damage": null,
        "magic": 25,
        "type": "Electric"
    },
    {
        "name": "Parabolic Charge",
        "damage": 50,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Forest's Curse",
        "damage": null,
        "magic": 20,
        "type": "Grass"
    },
    {
        "name": "Petal Blizzard",
        "damage": 90,
        "magic": 15,
        "type": "Grass"
    },
    {
        "name": "Freeze-Dry",
        "damage": 70,
        "magic": 20,
        "type": "Ice"
    },
    {
        "name": "Disarming Voice",
        "damage": 40,
        "magic": 15,
        "type": "Fairy"
    },
    {
        "name": "Parting Shot",
        "damage": null,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Topsy-Turvy",
        "damage": null,
        "magic": 20,
        "type": "Dark"
    },
    {
        "name": "Draining Kiss",
        "damage": 50,
        "magic": 20,
        "type": "Fairy"
    },
    {
        "name": "Crafty Shield",
        "damage": null,
        "magic": 10,
        "type": "Fairy"
    },
    {
        "name": "Flower Shield",
        "damage": null,
        "magic": 10,
        "type": "Fairy"
    },
    {
        "name": "Grassy Terrain",
        "damage": null,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Misty Terrain",
        "damage": null,
        "magic": 10,
        "type": "Fairy"
    },
    {
        "name": "Electrify",
        "damage": null,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Play Rough",
        "damage": 90,
        "magic": 15,
        "type": "Fairy"
    },
    {
        "name": "Fairy Wind",
        "damage": 40,
        "magic": 30,
        "type": "Fairy"
    },
    {
        "name": "Moonblast",
        "damage": 95,
        "magic": 15,
        "type": "Fairy"
    },
    {
        "name": "Boomburst",
        "damage": 140,
        "magic": 10,
        "type": "Normal"
    },
    {
        "name": "Fairy Lock",
        "damage": null,
        "magic": 10,
        "type": "Fairy"
    },
    {
        "name": "King's Shield",
        "damage": null,
        "magic": 10,
        "type": "Steel"
    },
    {
        "name": "Play Nice",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Confide",
        "damage": null,
        "magic": 20,
        "type": "Normal"
    },
    {
        "name": "Water Shuriken",
        "damage": 15,
        "magic": 20,
        "type": "Water"
    },
    {
        "name": "Mystical Fire",
        "damage": 65,
        "magic": 10,
        "type": "Fire"
    },
    {
        "name": "Spiky Shield",
        "damage": null,
        "magic": 10,
        "type": "Grass"
    },
    {
        "name": "Aromatic Mist",
        "damage": null,
        "magic": 20,
        "type": "Fairy"
    },
    {
        "name": "Eerie Impulse",
        "damage": null,
        "magic": 15,
        "type": "Electric"
    },
    {
        "name": "Venom Drench",
        "damage": null,
        "magic": 20,
        "type": "Poison"
    },
    {
        "name": "Powder",
        "damage": null,
        "magic": 20,
        "type": "Bug"
    },
    {
        "name": "Geomancy",
        "damage": null,
        "magic": 10,
        "type": "Fairy"
    },
    {
        "name": "Magnetic Flux",
        "damage": null,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Happy Hour",
        "damage": null,
        "magic": 30,
        "type": "Normal"
    },
    {
        "name": "Electric Terrain",
        "damage": null,
        "magic": 10,
        "type": "Electric"
    },
    {
        "name": "Dazzling Gleam",
        "damage": 80,
        "magic": 10,
        "type": "Fairy"
    },
    {
        "name": "Celebration",
        "damage": null,
        "magic": 40,
        "type": "Normal"
    },
    {
        "name": "Baby-Doll Eyes",
        "damage": null,
        "magic": 30,
        "type": "Fairy"
    },
    {
        "name": "Nuzzle",
        "damage": 20,
        "magic": 20,
        "type": "Electric"
    },
    {
        "name": "Infestation",
        "damage": 20,
        "magic": 35,
        "type": "Bug"
    },
    {
        "name": "Power-Up Punch",
        "damage": 40,
        "magic": 30,
        "type": "Fighting"
    },
    {
        "name": "Oblivion Wing",
        "damage": 80,
        "magic": 10,
        "type": "Fighting"
    },
    {
        "name": "Land's Wrath",
        "damage": 90,
        "magic": 10,
        "type": "Ground"
    },
    {
        "name": "Diamond Storm",
        "damage": 100,
        "magic": 5,
        "type": "Rock"
    },
    {
        "name": "Hyperspace Hole",
        "damage": 80,
        "magic": 5,
        "type": "Psychic"
    },
    {
        "name": "Steam Eruption",
        "damage": 110,
        "magic": 5,
        "type": "Water"
    }
]
const banner3 = raichuOrange(`\x1b[5m

    ,                           .::.
    PokeMon                   .;:**'            RAM
                              \`                  0
  .:XHHHHk.              db.   .;;.     dH  MX   0
oMMMMMMMMMMM       ~MM  dMMP :MMMMMR   MMM  MR      ~MRMN
QMMMMMb  "MMX       MMMMMMP !MX' :M~   MMM MMM  .oo. XMMM 'MMM
 \`MMMM.  )M> :X!Hk. MMMM   XMM.o"  .  MMMMMMM X?XMMM MMM>!MMP
  'MMMb.dM! XM M'?M MMMMMX.\`MMMMMMMM~ MM MMM XM \`" MX MMXXMM
   ~MMMMM~ XMM. .XM XM\`"MMMb.~*?**~ .MMX M t MMbooMM XMMMMMP
    ?MMM>  YMMMMMM! MM   \`?MMRb.    \`"""   !L"MMMMM XM IMMM
     MMMX   "MMMM"  MM       ~%:           !Mh.""" dMI IMMP
     'MMM.                                             IMX
     ~M!M                                             IMP
     
     \x1b[0m`)
function lastQuestion() {
    console.clear();
    readline.question('\n\n                ' + chalk.red.underline.bold('Do you know these pokemon !?\n\n'));
    const error = chalk.bold.red;
    //    const lp = pokemonNames.length;
    const lp = 1154;
    const i = Math.floor(Math.random() * lp);
    let j = 0;
    do {
        j = Math.floor(Math.random() * lp);
    } while (j === i)
    readline.question(` - Pokemon #${i + 1}: ${pokemonNames[i]} !!!`)
    if (i < 809) {
        const poke2 = pokemonData[i];
        readline.question(` Of${poke2.type.length === 1 ? ' the' : ''} type${poke2.type.length > 1 ? 's' : ''}: ${poke2.type.join(' and ')} \n`);
    }
    else console.log();
    readline.question(` - Pokemon #${j + 1}: ${pokemonNames[j]} !!!`)
    if (j < 809) {
        const poke2 = pokemonData[j];
        readline.question(` Of${poke2.type.length === 1 ? ' the' : ''} type${poke2.type.length > 1 ? 's' : ''}: ${poke2.type.join(' and ')} \n`);
    }
    let randoSkill = new AttackSkill(...Object.values(skillsData[Math.floor(Math.random() * skillsData.length)]));
    readline.question('\n\n Can you name the pokemon who use this attack skill!?\n');
    delete randoSkill.magic;
    if (randoSkill.damage === null)
        delete randoSkill.damage;
    console.log(randoSkill);
}
class Art {
    constructor(attacking, win, defending, lost, neutral) {
        if (attacking !== undefined)
            this.attacking = attacking;
        if (defending !== undefined)
            this.defending = defending;
        if (win !== undefined)
        this.win = win;
        if (lost !== undefined)
        this.lost = lost;
        if (neutral !== undefined)
        this.neutral = neutral;
    }
}
const gatomonArt = new Art(chalk.bgWhiteBright(`⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛🟪🟪🟪🟪⬛⬛
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
⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛🏽⬛🏽⬛🏽⬛`))
const bulbasaurArt = new Art(chalk.green(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⡀⠈⡖⡤⠄⠀
⠀⠀⢀⡀⠀⠀⠀⡐⠁⠀⠀⠠⠐⠂⠀⠁⠀⠀⠀⠀
⠀⠰⡁⠐⢉⣉⣭⡍⠁⠂⠉⠘⡀⠀⠀⠀⠀⠂⠡⠀
⢀⣊⠀⡄⠻⠿⠋⠀⠀⠀⠀⠀⢃⠀⠀⠀⠀⠀⠀⢀
⡎⣾⠀⠁⣴⡆⠀⠡⢺⣿⣆⠀⢠⢱⣄⠀⠀⠀⠀⠈
⡑⠟⠀⠀⠀⠀⠀⢀⣸⡿⠟⠀⠀⠈⢿⣿⡦⡀⠀⡰
⠙⠔⠦⣤⣥⣤⣤⣤⡤⠆⠀⠀⠀⠀⢀⢀⠀⠈⠎⠀
⠀⠀⠈⣰⡋⢉⠉⠁⠒⠂⢇⢠⡆⠀⠸⢴⣿⠀⠘⠀
⠀⠀⠘⡿⠃⠀⠨⠒⢆⣸⣿⠁⠀⡠⡇⠈⠋⠀⠰⠀
⠀⠀⠀⠛⠒⠒⠁⠀⠈⠷⡤⠤⠐⠀⠘⠒⠒⠖⠁⠀`), '', '', `
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
const raichuArt = new Art(chalk.bgWhiteBright(`⬜⬜⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬛🟫⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬛🟫⬛⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬛⬜⬜⬜⬜
⬜⬜⬜⬛🟫🟫⬛⬜⬜⬜⬜⬛⬛🟫🟫🟫⬛⬜⬜⬛🟨⬛⬜⬜⬜
⬜⬜⬜⬛🟫⬛⬜⬜⬜⬜⬛🟫🟫🟨🟨⬛⬜⬜⬜⬛🟨⬛⬜⬜⬜
⬜⬜⬜⬛⬛⬛⬛⬛⬜⬛🟫🟫🟨🟨⬛⬜⬜⬜⬜⬛🟨🟨⬛⬜⬜
⬜⬜⬛⬛🟧🟧🟧🟧⬛🟫🟫🟨🟨⬛⬜⬜⬜⬜⬜⬛🟨🟨⬛⬜⬜
⬜⬛🟧🟧🟧🟧🟧🟧⬛🟫🟫🟨🟨🟨⬛⬛⬜⬜⬜⬛🟨🟨🟨⬛⬜
⬜⬛🟧🟧🟧🟧🟧🟧⬛⬛🟫🟫⬛⬛⬜⬛⬜⬛⬛⬛🟨🟨🟨⬛⬜
⬛🟧🟧🟧🟧🟧🟧🟧🟧⬛⬛⬛⬛⬜⬜⬜⬜⬛🟨⬛🟨🟨🟨🟨⬛
⬛🟧🟧🟧🟧🟧⬜⬛🟧🟧🟧🟧🟧⬛⬜⬜⬜⬜⬛🟨🟨⬛⬛🟨⬛
⬜⬛🟧🟧🟧🟧⬛⬛🟨🟨🟧🟧🟧⬛⬜⬜⬜⬜⬛🟨🟨⬛⬜⬛⬛
⬜⬜⬛🟧🟧🟧🟧🟧🟨🟨🟧🟧🟧🟧⬛⬜⬜⬜⬜⬛🟨⬛⬜⬜⬜
⬜⬛🟧⬛🟧🟧🟧🟧🟧⬛🟧🟧🟧🟫⬛⬜⬜⬜⬜⬜⬛⬛⬜⬜⬜
⬜⬛🟧⬛⬜⬜🟧⬛⬛🟧🟧🟧🟧🟧🟧⬛⬜⬜⬜⬜⬜⬛⬜⬜⬜
⬜⬜⬛⬛⬛⬜⬛🟫🟧🟧🟧🟧🟧🟧🟫⬛⬜⬜⬜⬜⬜⬛⬛⬜⬜
⬜⬜⬜⬜⬛⬜⬛🟫🟫🟧⬛🟧🟧🟫🟫⬛⬜⬜⬜⬜⬜⬜⬛⬜⬜
⬜⬜⬜⬜⬛🟧⬜⬛⬛⬛🟧🟧🟧🟧🟧⬛⬛⬜⬜⬜⬜⬜⬛⬜⬜
⬜⬜⬜⬛🟫⬛⬛⬛⬜⬜🟧🟧🟧🟧⬛⬜⬛⬛⬜⬜⬜⬛⬛⬜⬜
⬜⬜⬜⬛⬛⬛⬛⬜⬛🟧🟧🟧🟧⬛⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛🟧🟧⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬛🟫🟫🟫🟫⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜`), undefined, undefined, undefined, chalk.bgWhiteBright(`⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
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
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜`))
const pikatchuArt = new Art(`\x1b[103m⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤
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
⠀⠀⠀⠀⢀⣾⠋⠙⡛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠚⠋⠉⢷⡈⢻⣆⠀⠀\x1b[0m`, `\x1b[107m\x1b[33m⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀
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
    chalk.bgRed(`⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿\x1b[0m`), '',
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
    constructor({ name = 'Pikachu', health = 120, magic = 80, art = { attacking: '', defending: '', win: '', lost: '', neutral: '' }, type, power }) {
        this.name = chalk.yellow(name), this.health = health, this.magic = magic;
        this.skills = [];
        this.art = art;
        if (this.art.attacking)
            this.art.attacking = '\x1b[5m' + this.art.attacking + '\x1b[0m';
        this.status = 'Alive';
        if (type)
            this.type = type;
        if (power)
            this.power = power;
    }
    learnAttackSkill(anAttackSkill) {
        this.skills.push(anAttackSkill);
        anAttackSkill.name = chalk.cyanBright(anAttackSkill.name)
    }
    showStatus() {
        log(chalk.bold('Status:') + '\n');
        console.log(`${this.art.neutral || ''} \n${chalk.yellow(this.name)} ${chalk.greenBright('HP:')} ${this.health > 50 ? chalk.green(this.health) : chalk.redBright(this.health)} ${chalk.blueBright('MP: ' + this.magic)} \n`);
    }
    attack(idx, aPokemon) {
        const thisAttack = this.skills[idx];
        const name = this.name;
        readline.question(`${`${name}, try using your ${thisAttack.name} attack!`}\n`);
        if (this.health <= 0) {
            return readline.question(this.name + ' is already stunned! ' + this.name + ' is out of the game!\n');
        }
        if (this.magic - thisAttack.magic < 0) {
            return console.log(chalk.red('Not enough magic points! ' + this.name + ' cannot use \'' + thisAttack.name + '\' attack!\n'));
        }
        this.magic -= thisAttack.magic;
        let impact = '';
        if (impact = aPokemon.takeDamage(thisAttack.damage))
        {
            readline.question(`\n${this.art.attacking || ''} \n${this.name}` + chalk.white(` used his '${thisAttack.name}' attack on ${aPokemon.name} !!!`) + `\n\n${impact} \n`)
            console.clear();
            readline.question(`${impact.includes('ht.') ? chalk.bold('\n ' + this.name + '\x1b[5m WINS!!!\x1b[0m\n') + (this.art.win || '') + '\n' : ''} `);
        }
        else readline.question(`${aPokemon.name} is already out of the fight.\n`);
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
        return (`${this.art.defending || ''} \n${myName} took ${chalk.redBright(hp - this.health)} damage.${this.health === 0 ? '\n' + chalk.rgb(250, 0, 0)(myName + ' is stunned. ' + myName + ' is out of the fight.\n') + (this.art.lost || '') : myName + chalk.cyan(' is still capable of fighting!')} `);
    }
    getMagic(magic = 20) {
        readline.question(`${this.name}, drink this ${chalk.blue('MP')} potion!\n`);
        this.magic += magic;
        console.log(chalk.yellow(this.name) + chalk.green(' gained ') + chalk.blue(magic + ' magic points.\n'));
    }
    getHealth(health = 20) {
        readline.question(`${this.name}, drink this ${chalk.green('HP')} potion!\n`);
        this.health += health;
        console.log(chalk.yellow(this.name) + chalk.green(' gained ') + chalk.green(health + ' health points.\n'));
    }
    evolve(evolution) {
        console.log(this.name + chalk.magentaBright(' evolves to...'));
        this.name = evolution.name + '(' + this.name + ')'; this.health = evolution.health; this.magic = evolution.magic;
        this.skills = [].concat(this.skills, evolution.skills);
        // this = { ...evolution };
        this.art = { ...this.art, ...evolution.art };
        this.showStatus();
    }
}
class AttackSkill {
    constructor(name = 'lightning', damage = 40, magic = 30, type) {
        this.name = name, this.damage = damage, this.magic = magic;
        if (type)
            this.type = type;
    }
}
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
function main() {
    readline.question(banner3 + '\x1b[96m' + banner + '\x1b[0m');

    let pikachu = new Pokemon({ name: "Pikachu", health: 120, magic: 80, art: pikatchuArt });
    let raichu = new Pokemon({ name: 'Raichu', health: 420, magic: 320, art: raichuArt });
    let bulbasaur = new Pokemon({ name: "Bulbasaur", health: 95, magic: 105, art: bulbasaurArt });
    let gatomon = new Pokemon({ name: 'Gatomon', health: 110, magic: 90, art: gatomonArt })

let lightning = new AttackSkill("Lightning", 40, 30);
    let lightningStrike = new AttackSkill('Lightning Strike', 120, 80);
let poisonSeed = new AttackSkill("Poison Seed", 20, 20);
let lightningPaw = new AttackSkill('Lightning Paw', 30, 20);
    let catTail = new AttackSkill('Cat Tail', 35, 25);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);
gatomon.learnAttackSkill(lightningPaw);
gatomon.learnAttackSkill(catTail);
raichu.learnAttackSkill(lightningStrike);


    readline.question(chalk.bold('Battle!' + '\n')); console.clear();

pikachu.attack(0, bulbasaur);
    readline.question(''); console.clear();

bulbasaur.attack(0, pikachu);
    readline.question(''); console.clear();

pikachu.showStatus();
    readline.question(''); console.clear();

bulbasaur.showStatus();
    readline.question(''); console.clear();

pikachu.attack(0, bulbasaur);
    readline.question(''); console.clear();

pikachu.attack(0, bulbasaur);
    readline.question(''); console.clear();

pikachu.getMagic();
    readline.question(''); console.clear();

pikachu.attack(0, bulbasaur);
    readline.question('');

    bulbasaur.attack(0, pikachu); console.clear();

    readline.question(chalk.bold('Ambush!') + '\n'); console.clear();

gatomon.attack(0, pikachu);
    readline.question(''); console.clear();

gatomon.attack(1, pikachu);
    readline.question(''); console.clear();

pikachu.evolve(raichu);
    readline.question(''); console.clear();

    pikachu.attack(1, gatomon);
    readline.question(''); console.clear();

    console.clear();
    lastQuestion();
    animateDots();
}
main();