const GLOBALS = {
    NAME: "AlphaRPG",
    VERSION: "3.1",
    BETA: false,
    RELICS_NAMES: ["Relique d'Arès", "Relique de Yggdrasil", "Relique d'Hermès", "Relique de Vulcain", "Relique Détruite"],
    THREATS: ["", "NORMAL", "AVANCÉ", "SUPERIEUR", "VÉTÉRAN", "ÉLITE", "BOSS", "DIEU"],
    ARMORS_NAMES: {
        Normal: ['Minuscule', 'Maudit', 'En Ruine', 'Endomagé', 'Inutilisable', 'Rouiller', 'Fragilisé', 'Brisé'],
        Common: ['Bof', 'Petit', 'Fragile', 'Ébréché', 'Faible', 'Utilisé', 'Usé', 'Basique'],
        Uncommon: ['Acceptable', 'Grand', 'Onéreux', 'Lumière', 'Intacte', 'Propre', 'Porté', 'Neuf'],
        Rare: ['Bon', 'Bien', 'Premium', 'Dur', 'Solide', 'Durable', 'Brillant', 'Puissant'],
        Epic: ['Maître', 'Expert', 'Gardien', 'Parfait', 'Équilibré', 'Epic', 'Avancé', 'Brillante'],
        Exotic: ['Exotique', 'Magique', 'Sacré', 'Béni', 'Relique', 'Alpha', 'Destinée', 'Déca'],
        Divine: ['Irréel', 'Paradis', 'Divin', 'Pieux', 'Saint', 'Céleste', 'Féérique', 'Fantastique']
    },
    ARMORS_TYPE: ["", "Casque", "Armure", "Bouclier", "Bottes"],
    WEAPONS_TYPE: ["Principal", "Spécial"],
    MISSIONS: {
        // 0           1          2           3         4                   5                       6                          7               8                  9
        // NAME, DESC, LEVEL, TYPE, REQ KILLS, EXPERIENCE, REWARD TYPE, QUALITY, LOCATION, REQ MISSION
        0: ["La Lumière Blanche",
            'Vous vous réveillez dans un endroit inconnu où une lumière blanche vous éblouit...<br>Vous pouvez voir la sortie au loin. Faites vite, cet endroit semble bizarre !',
            1, 1, 10, 200, 0, "Normal", 0, -1
        ],
        1: ["La Forêt des Ombres",
            'Vous êtes maintenant dans une forêt... Une forêt sombre et glauque.<br>Vous décidez de bouger de la vue que à ce rythme vous pourriez mourir dans ce trou perdu !',
            4, 1, 10, 250, 0, "Common", 1, 0
        ],
        2: ["Le Chemin Perdu",
            'Vous arrivez au bout de la forêt et découvrez un petit chemin caché derrière un grand arbre.<br>Il semble y avoir une lumière au loin et peut-être enfin des réponses.',
            7, 1, 10, 500, 0, "Common", 2, 1
        ],
        3: ["Cité de Galarius",
            'Vous arrivez dans une ville où vivent de nombreuses personnes de races différentes : Humains, Nains et même des Elfes.<br>Il semble que vous puissiez trouver une aide ici... ou peut-être simplement une personne qui puisse vous dire comment retourner dans votre monde.',
            9, 1, 10, 750, 0, "Uncommon", 3, 2
        ],
        4: ["Montagne sans Fin",
            'Un des habitants vous conseille de partir vers le nord et de rejoindre la capitale royale en passant par les montagnes...<br>Vous voilà donc dans les montagnes dites "sans fin".',
            12, 1, 10, 1000, 0, "Uncommon", 4, 3
        ],
        5: ["La Grotte Obscure",
            'Vous arrivez à l\'entrée d\'une obscure grotte.<br>Elle semble étroite mais elle est beaucoup plus rapide et moins dangereuse que les montagnes.',
            15, 1, 10, 1500, 0, "Rare", 5, 4
        ],
        6: ["Route de l'Empire",
            'Vous arrivez enfin au bout de la grotte, fatigués mais en un seul morceau.<br>Vous apercevez déjà une ville immense au bout de la route.',
            19, 1, 10, 2500, 0, "Rare", 6, 5
        ],
        7: ["Cité de l'Imperium",
            'Vous arrivez à la capitale; Le Roi, ayant entendu parler de votre histoire, réclame une audience immédiate.',
            22, 1, 10, 3000, 0, "Rare", 7, 6
        ],
        8: ["Central V",
            'Vous discutez avec le roi pour trouver un moyen de retourner dans votre monde. <br>Il vous informe que le seul moyen est de passer par le portail rouge du côté de la ferme de l\'armée des démons à proximité.<br>Vous devrez vous y rendre rapidement avant que les démons ne vous assaillent !',
            25, 1, 10, 5000, 0, "Epic", 8, 7
        ],
        9: ["Le Portail Rouge",
            'Le portail rouge est proche et brûle à blanc comme les portes de l\'enfer. <br>Sans meilleure option, vous vous rapprochez.',
            27, 1, 10, 7500, 0, "Epic", 9, 8
        ],
        10: ["Un Monde Corrompu",
            'Vous avez réussi à franchir le portail... Mais où donc êtes-vous arrivé ?',
            29, 1, 10, 10000, 0, "Epic", 10, 9
        ],
        11: ["Une Forteresse Corrompu",
            'Vous voyez une immense forteresse remplie uniquement de démons; Vous ressentez le besoin de purifier cet endroit.',
            30, 2, 10, 0, 0, "Exotic", 11, 10
        ],
        12: ["La Forteresse Corrompue - Sous-sol",
            'Il y a une porte qui donne accès à un autre niveau ; vous ressentez le besoin de nettoyer cet endroit également.',
            30, 2, 25, 0, 2, "Exotic", 11, 11
        ],
        13: ["La Forteresse Corrompue - Le Noyau",
            'Au dernier étage, vous trouverez le noyau de la forteresse, où la corruption a commencé... Détruisez-le !!!',
            30, 2, 50, 1, 0, "Exotic", 11, 12
        ],
        14: ["Le Portail Noir",
            'Juste après avoir détruit le noyau de la forteresse, un autre portail apparaît, celui-ci noir et froid comme la glace.<br><br><center>Une nouvelle histoire commence.</center>',
            30, 1, 10, 15000, 0, "Exotic", 12, 11
        ],
        15: ["Le Portail Noir II",
            'En avançant, le passage devient encore plus obscur et froid. On peut seulement distinguer une lumière au loin...',
            30, 1, 10, 20000, 0, "Exotic", 12, 14
        ],
        16: ["La lumière d'Elysia",
            'En sortant de l\'autre côté du portail, vous atterrissez dans un nouveau monde dans la ville d\'Elysia.<br>Ce monde semble relativement beau ; pourquoi ne pas l\'explorer un peu ?',
            31, 1, 10, 25000, 0, "Exotic", 13, 15
        ],
        17: ["La lune rouge à Elysia",
            'Elysia est une ville vivante, paisible et remplie uniquement d\'humains pour autant que vous puissiez en témoigner.<br>En parcourant la ville, vous entendez un cri; En arrivant au son, vous voyez un homme sucer le sang de quelqu\'un dans l\'ombre d\'une ruelle... Un Vampire !',
            31, 1, 10, 50000, 0, "Exotic", 13, 16
        ],
        18: ["Le Manoir des Vampire",
            'L\'un des vampires indique l\'emplacement d\'un repaire de vampires. Vous y trouverez sûrement plus d\'informations.',
            32, 1, 10, 75000, 0, "Exotic", 14, 17
        ],
        19: ["La chambre funéraire du Manoir",
            'Il semble que ce soit le bon endroit : Il regorge de vampires et l\'un d\'entre eux émet un étrange pouvoir.',
            32, 1, 10, 100000, 0, "Exotic", 14, 18
        ],
        20: ["Le Nouvaux Monde",
            'La cité est maintenant en paix. Vous vous dirigez vers une Rivière Rouge tout en continuant à explorer ce nouveau monde.',
            33, 1, 10, 125000, 0, "Exotic", 15, 19
        ],
        21: ["La Rivière Rouge",
            'Au cours de votre chasse quotidienne, vous trouvez un marchand qui ne cesse de répéter que l\'attaque de vampires dans la cité n\'était que le début.<br>Il partage également une rumeur : Le château du vampire serait caché quelque part dans les montagnes.',
            33, 1, 10, 150000, 0, "Exotic", 15, 20
        ],
        22: ["Les Montagnes",
            "Après avoir cherché pendant cinq jours dans les montagnes, vous trouvez un pont rempli de cadavres.<br>Sans aucune hésitation, vous commencez à emprunter le pont pour accéder au territoire des vampires.",
            34, 1, 10, 175000, 0, "Exotic", 16, 21
        ],
        23: ["Le Pont Immortel",
            "Ces vampires semblent plus difficiles à tuer que ceux de la cité.<br>Un énorme château se profile au bout du pont, vous continuez donc à vous battre pour le franchir.",
            34, 1, 10, 175000, 0, "Exotic", 16, 22
        ],
        24: ["Le Château des Vampire",
            'C\'est ici : Le Château des Vampires. Puisque vous êtes arrivés, il est temps de purifier cet endroit répugnant !',
            35, 2, 10, 0, 0, "Exotic", 17, 23
        ],
        25: ["Le Château des Vampire - Tour",
            'Vous découvrez qu\'une des tours du château abrite de nombreux et puissants Vampires.<br>Cela va prendre plus de temps que vous ne le pensiez pour faire le ménage.',
            35, 2, 25, 1, 2, "Divine", 17, 24
        ],
        26: ["Le Château des Vampire - Noyaux",
            'Tu as atteint le Noyaux. En détruisant le Noyaux, ce monde sera enfin en paix. Mais d\'abord, vous devrez tuer les vampires qui le protège encore !',
            35, 2, 50, 2, 0, "Divine", 17, 25
        ]
    },
    BOSSES_NAMES: [
        'Âme Pure',
        'Reine des Fées',
        'Loup Alpha',
        'Énorme Rat',
        'Golem de Poison',
        'Slime Rose',
        'Araignée de l\'albinos',
        'Mage Noir',
        'Goule',
        'Esprit Frappeur',
        'Commandant des Chelalier',
        'Seigneur des mots',
        'Puissant Squelette',
        "Citrouille d'Halloween",
        'Seigneur Vampire',
        'Grand Homme-poisson',
        'Seigneur Vampire',
        'Roi Vampire'
    ],
    ENEMIES_NAMES: [
        ["Âme Passive", "Âme Mauvaise"],
        ["Fée de Feu", "Fée de l'Eau", "Fée de la Terre"],
        ["Loup", " Loup Blanc", "Loup d'Afrique"],
        ["Rat Gris", "Rat Marron"],
        ["Golem de Pierre", "Golem de l'Eau"],
        ["Slime Bleu", "Slime Noir", "Slime Jaune"],
        ["Araignée Noire", "Araignée Rouge"],
        ["Mage de Feu", "Mage de l'Eau"],
        ["Zombie", "Zombie Ardent"],
        ["Fantome", "Fantome en Pleure"],
        ["Chevalier Blanc", "Chevalier Rouge"],
        ["Démon de Rang Mineur", "Démon de Rang Moyen", "Démon de Rang Superieur"],
        ["Squelette", "Squelette Délabrer", "Squelette Ardent"],
        ["Citrouille d'Halloween", "Citrouille d'Halloween"],
        ["Vampire"],
        ["Homme-poisson", "Homme-poisson", "Homme-poisson"],
        ["Vampire", "Vampire Noble"],
        ["Seigneur Vampire", "Vampire Noble"]
    ],
    LOCATIONS: {
        // 0           1                   2                    3                                  4                                    5                    6
        // NAME, MIN LEVEL, MAX LEVEL, MAX DROP QUALITY, MISSION REQUIRED, LOOT (WIP), BACKGROUND
        0: ["La Lumière Blanche", 1, 4, 0, 0, {
            lootables: ["Truc", "Potion"],
        }, "0.jpg"],
        1: ["La Forêt des Ombres", 4, 7, 1, 1, {
            lootables: ["Truc", "Potion"],
        }, "1.jpg"],
        2: ["Le Chemin Perdu", 7, 9, 1, 2, {
            lootables: ["Truc", "Potion"],
        }, "2.jpg"],
        3: ["Cité de Galarius", 9, 12, 2, 3, {
            lootables: ["Truc", "Potion"],
        }, "3.jpg"],
        4: ["Montagne sans Fin", 12, 15, 2, 4, {
            lootables: ["Truc", "Potion"],
        }, "4.jpg"],
        5: ["La Grotte Obscure", 15, 19, 3, 5, {
            lootables: ["Truc", "Potion"],
        }, "5.jpg"],
        6: ["Route de l'Empire", 19, 22, 3, 6, {
            lootables: ["Truc", "Potion"],
        }, "6.jpg"],
        7: ["Cité de l'Imperium", 22, 25, 3, 7, {
            lootables: ["Truc", "Potion"],
        }, "7.jpg"],
        8: ["Central V", 25, 27, 4, 8, {
            lootables: ["Truc", "Potion"],
        }, "8.jpg"],
        9: ["Le Portail Rouge", 27, 29, 4, 9, {
            lootables: ["Truc", "Potion"],
        }, "9.jpg"],
        10: ["Un Monde Corrompu", 29, 30, 4, 10, {
            lootables: ["Truc", "Potion"],
        }, "10.jpg"],
        11: ["Une Forteresse Corrompu", 29, 30, 5, 10, {
            lootables: ["Truc", "Potion"],
        }, "11.jpg"],
        12: ["Le Portail Noir", 30, 31, 5, 14, {
            lootables: ["Truc", "Potion"],
        }, "12.jpg"],
        13: ["Elysia City", 31, 32, 5, 14, {
            lootables: ["Truc", "Potion"],
        }, "13.jpg"],
        14: ["Le Manoir des Vampire", 32, 33, 5, 20, {
            lootables: ["Truc", "Potion"],
        }, "14.jpg"],
        15: ["La Rivière Rouge", 33, 34, 5, 20, {
            lootables: ["Truc", "Potion"],
        }, "15.jpg"],
        16: ["Le Pont Immortel", 34, 35, 5, 20, {
            lootables: ["Truc", "Potion"],
        }, "16.jpg"],
        17: ["Le Château des Vampire", 35, 35, 5, 20, {
            lootables: ["Truc", "Potion"],
        }, "17.jpg"]
    }
};
var Backup = "Default";
var Game = {
    username: "Default",
    Armors: [
        //  0              1           2           3             4           5
        //  STATUS, NAME, CLASS, ARMOR, LEVEL, GEMS
        [],
        [true, "Basic Armor", "Normal", 100, 1, 0],
        [false, "Basic Armor", "Normal", 100, 1, 0],
        [false, "Basic Armor", "Normal", 100, 1, 0],
        [false, "Basic Armor", "Normal", 100, 1, 0]
    ],
    Weapons: {
        // 0           1           2           3            4
        // NAME, CLASS, GEMS, LEVEL, POWER
        Main: ["Training Sword", "Normal", 0, 1, 10],
        Special: ["Training Dagger", "Normal", 0, 1, 10]
    },
    RELICS: [
        // 0                      1           2          3
        // RELIC NAME, CLASS, TYPE, VALUE
        [],
        ["Normal", 5, 0],
        ["Normal", 5, 0],
        ["Normal", 5, 0],
        ["Normal", 5, 0]
    ],
    ArmorUpgrades: [null, 0, 0, 0, 0],
    WeaponUpgrades: {
        Main: 0,
        Special: 0
    },
    MaxUPC: [0, 0, 0, 0, 0, 0],
    xp: [0, 100, 1],
    Level: 1,
    Enemy: [], //NAME, CLASS, LEVEL, POWER, LIFE, CURRENTLIFE
    Loses: 0,
    Wins: 0,
    Cash: 0,
    isInFight: 3,
    Emp: 0,
    Shards: 0,
    Defeated: [null, 0, 0, 0, 0, 0, 0, 0],
    inventory: [],
    MaxInv: 20,
    Theme: "",
    Upgrades: [0, 0, 0, 0],
    Dimension: 1,
    DIMENSION_MULTIPLIERS: [0, 0, 0, 1], //POWER, LIFE, XP, DIFFICULTY
    Avatar: random(1, 50),
    config: [1, 1, 0, 1, 0],
    LastEscape: 0,
    Sprite: 0,
    MissionsCompleted: [],
    Location: 0,
    PlayTime: 0,
    MissionStarted: [false, 0, 0, 0, 0], //MISSION STARTED TOGGLE, MISSION ID, PROGRESSION, OBTAINED REWARD, LOCK WIN
    DefeatedByLocation: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    FortressesCleared: 0,
    AutoRemove: [0, 0, 0, 0, 0, 0],
    TotalMissions: 0,
    class: "none",
    MaxLevelReached: 1
};
