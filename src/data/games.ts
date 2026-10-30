import type { Developer, Game } from "./common";
import { getDev } from "./developers";
import { withItch } from "./itch";
import { withSteam } from "./steam";

const gameList: Game[] = [
  {
    id: 1,
    slug: "Eagle-knight-paradox",
    title: "Eagle Knight Paradox",
    description: {
      es: "",
      en: "Eagle Knight Paradox is a story-driven action-adventure that blends high-speed mecha battles with slice-of-life exploration. Step into the neon-lit city of Comala 88, where every choice you make will shape not only the fate of the city but also the lives of the people you meet.",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3008700/library_600x900_2x.jpg?t=1765331087",
    developers: [getDev("Playstorm Studios")],
    store: {
      steam: "https://store.steampowered.com/app/3008700",
    },
    release: { type: "date", value: "2026-09-21" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/m1EZgGiLvrM?autoplay=1&mute=1&start=4",
      duration: 20,
    },
  },
  {
    id: 2,
    slug: "Uppercute",
    title: "Uppercute",
    description: {
      es: "",
      en: "Uppercute is a 3D action platformer where, with the help of your sister and the use of your runner skills, you’ll dive into people's minds, face challenging opponents and retrieve valuable information to solve the mystery of your brother's disappearance. ",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3151660/16ed08a363857124e7aa8e99b64e6e8ce931b9c1/library_600x900_2x.jpg?t=1749495379",
    developers: [getDev("Pretty Scar")],
    store: {
      steam: "https://store.steampowered.com/app/3151660",
      kickstarter: "https://www.kickstarter.com/projects/uppercute/uppercute",
    },
    release: { type: "quarter", value: "Q2 2026" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/i0UM-GxTEXw?autoplay=1&mute=1&start=0",
      duration: 20,
    },
  },
  {
    id: 3,
    slug: "Whodunnit",
    title: "WHODUNNIT",
    description: {
      es: "",
      en: "WHODUNNIT: Hitting Singles is the first episode of a comedic mystery visual novel following a man who must answer a burning question: who the hell did he hook up with last night?",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3851280/6ba7398a79a075047ace6b5343b627ec436c5a50/library_capsule_2x.jpg?t=1757969797",
    developers: [getDev("Don Attico"), getDev("Maurimo")],
    store: {
      steam: "https://store.steampowered.com/app/3851280/WHODUNNIT/",
      itch: "https://donattico.itch.io/whodunnit",
    },
    release: { type: "year", value: 2026 },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/u4JOTpOsfhg?autoplay=1&mute=1&start=4",
      duration: 20,
    },
  },
  {
    id: 4,
    slug: "PopSlinger",
    title: "PopSlinger",
    description: {
      es: "",
      en: "Join a magical girl with a soda-powered arsenal on a dreamy quest to save her home! In this part beat-‘em-up, part musical shooter, you’ll experience the whimsical story of Ria and Gin as they fight against sinister invaders from another dimension…and maybe even groove to that funky beat!",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/1928320/library_600x900_2x.jpg?t=1693269281",
    developers: [getDev("Funky Can Creative")],
    store: {
      steam: "https://store.steampowered.com/app/1928320/PopSlinger",
      switch: "https://www.nintendo.com/us/store/products/popslinger-switch/",
    },
    release: { type: "date", value: "2022-04-14" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/60VpYYXtVG0?autoplay=1&mute=1&start=10",
      duration: 20,
    },
  },
  {
    id: 5,
    slug: "PopSlinger2",
    title: "PopSlinger Vol. 2 - Loveless",
    description: {
      es: "",
      en: "Return to the PopSlinger universe in this coffee-fueled sequel! Join an elite agent and a digital idol on a mission to rescue a lost heroine in a world full of vibrant chaos. Face new enemies, uncover the mysteries of the Purple District, and groove to a freshly brewed beat!",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3195370/library_600x900_2x.jpg?t=1748658816",
    developers: [getDev("Funky Can Creative")],
    store: {
      steam:
        "https://store.steampowered.com/app/3195370/PopSlinger_Vol_2__Loveless",
      switch:
        "https://www.nintendo.com/us/store/products/popslinger-vol-2-loveless-switch/",
    },
    release: { type: "date", value: "2024-10-09" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/FmHXIWBuQV0?autoplay=1&mute=1&start=15",
      duration: 20,
    },
  },
  {
    id: 6,
    slug: "Underboard",
    title: "Underboard",
    description: {
      es: "",
      en: "Tactical team-building roguelike auto-battler with active and passive playstyles. Draft a team as you explore maps full of monsters, build synergies, equip items and cast spells to support your team during battles and help them escape the Underboard. ",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2376610/1ff8923b5dd303a590f52b8600d184894acc8f11/hero_capsule_2x.jpg?t=1771288428",
    developers: [getDev("Headless")],
    store: {
      steam: "https://store.steampowered.com/app/2376610/Underboard/",
    },
    release: { type: "date", value: "2026-02-06" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/ybNyAk3-o-8?autoplay=1&mute=1&start=4",
      duration: 20,
    },
  },
  {
    id: 7,
    slug: "Omnomspicturecollection",
    title: "Om Nom's picture collection",
    description: {
      es: "",
      en: "An amazing collaboration with Legends of Learning and Zeptolab. This fun and engaging game will help your kids learn about the different types of energy movement through physics-based puzzles and beutiful collectibles. A game fully designed and developed at Pixel Perfect Studio.",
    },
    imageUrl:
      "https://i0.wp.com/www.imcsw.com/wp-content/uploads/2025/10/OmNomTitle-ezgif.com-video-to-gif-converter-1.gif?w=3840&amp;ssl=1",
    developers: [getDev("PXL Perfect Studio")],
    store: {
      website:
        "https://games.legendsoflearning.com/game/cut-the-rope-om-nom-s-picture-collection/4581?learning_objective_id=985&partner=legends-developer",
    },
    release: { type: "date", value: "2026-02-06" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/-dAcuOdOMio?autoplay=1&mute=1&start=5",
      duration: 30,
    },
  },
  {
    id: 8,
    slug: "SuperCraneHD",
    title: "Super Crane HD",
    description: {
      es: "",
      en: "Retro match 3 about a Bug juggling at his job, BUT NOW IT'S BETTER Match 3 drops to clear them, but your tool changes constantly, so watch out! Be a Bug, Do a Work, Match a 3",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2976620/library_600x900_2x.jpg?t=1715316243",
    developers: [getDev("CalixJumio")],
    store: {
      steam: "https://store.steampowered.com/app/2976620/Super_Crane_HD/",
    },
    release: { type: "tbd" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/nGpze0AxYdc?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 9,
    slug: "IdleWaters",
    title: "Idle Waters",
    description: {
      es: "",
      en: "A relaxing idle fishing game that waits for you at the bottom of your screen. CATCH fish, BUY upgrades, COMPLETE your collection, and DISPLAY them in your aquarium.",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2963540/library_600x900_2x.jpg?t=1754971349",
    developers: [getDev("Ignita Games")],
    store: {
      steam: "https://store.steampowered.com/app/2963540/Idle_Waters/",
    },
    release: { type: "date", value: "2025-12-10" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/Bl6djZa1riE?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 10,
    slug: "FosteringApocalypse",
    title: "Fostering Apocalypse",
    description: {
      es: "",
      en: "The demon summoned to embark the second apocalypse is only a child, and a woman who has lost it all resolves to save her. A half-hour long narrative game with survival gameplay elements and two endings. ",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/1667490/library_600x900_2x.jpg?t=1623941010",
    developers: [getDev("Incisor Studios"), getDev("Maurimo")],
    store: {
      steam: "https://store.steampowered.com/app/1667490/Fostering_Apocalypse/",
    },
    release: { type: "date", value: "2021-07-15" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/JeBe6L4a4lQ?autoplay=1&mute=1&start=15",
      duration: 30,
    },
  },
  {
    id: 11,
    slug: "Incorporeal",
    title: "Incorporeal",
    description: {
      es: "",
      en: "Incorporeal is a dungeon crawler where you play as a treasure hunter who has the ability to sever their soul from their body. Dash through traps, strike foes with your spectral form, and protect your fragile body as you fight, puzzle, and survive the catacombs to claim ancient relics.  ",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3977270/51fba81750dd6d9299578d7e813dbd8e4fbd4c90/library_capsule_2x.jpg?t=1757095203",
    developers: [getDev("VFS")],
    store: {
      steam: "https://store.steampowered.com/app/3977270/Incorporeal/",
    },
    release: { type: "date", value: "2025-09-25" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/tBl4tiTA9Gk?autoplay=1&mute=1&start=10",
      duration: 30,
    },
  },
  {
    id: 12,
    slug: "Merkava",
    title: "Merkava: The Sacred Armour of Meirav",
    description: {
      es: "",
      en: "Save the world from Dinah's threat by defeating angels, demons, beasts, and aliens.",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/4016530/1345f26aa6c352d26012da5a876051d40b5de1be/library_capsule_2x.jpg?t=1757436922",
    developers: [getDev("Salem Electrónica")],
    store: {
      steam:
        "https://store.steampowered.com/app/4016530/Merkava_The_Sacred_Armour_of_Meirav/",
    },
    release: { type: "date", value: "2025-10-07" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/Y4jTbkh51Es?autoplay=1&mute=1&start=6",
      duration: 30,
    },
  },
  {
    id: 14,
    slug: "IdiotsInTheDAS",
    title: "Idiots in the DAS",
    description: {
      es: "",
      en: "Idiots in the DAS is a colorful parody that combines turn based RPG with 2D platformers, it focuses a lot on HIT or MISS and character progression, along with getting new party members to make unique attacks together in the same turn! It also contains in-game editors to customize and create!",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3345590/d93f96d82f57ce508842f1fa243647751ddb825e/library_capsule_2x.jpg?t=1763154105",
    developers: [getDev("RBIE")],
    store: {
      steam: "https://store.steampowered.com/app/3345590/Idiots_in_the_DAS/",
    },
    release: { type: "date", value: "2026-08-31" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/Q6v0aU29f2M?autoplay=1&mute=1&start=15",
      duration: 30,
    },
  },
  {
    id: 15,
    slug: "RootOut",
    title: "Root Out!",
    description: {
      es: "",
      en: "PaperBoat Studios presents a roguelike game for PC, where for the player must make their way through a world filled with fog and fungi enemies to reach their goal, while being hindered by them. To clear the path, the player must activate various sunflowers that will dissipate the fog around them to clear their way; however, at the same time, they must protect the area from enemies with the help of plants that will defend and help the player achieve their goal. Get fun with the variety of plants, guns and powerups that you may find in the run. Root your way to victory!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzIwNjY1OTg0LnBuZw==/original/LOQrQb.png",
    developers: [getDev("Paper Boat Studios")],
    store: {
      itch: "https://vov-artik.itch.io/root-out",
    },
    release: { type: "date", value: "2025-04-11" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/JizI8Y5mZmM?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 16,
    slug: "KnightOfIceDX",
    title: "Knight of Ice DX",
    description: {
      es: "",
      en: "Knight of Ice is a metroidvania game. Explore all the map to find the secrets that will lead you to a different destiny. Defeat all the monsters and fight the knights!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzEyNjIzMTA2LnBuZw==/original/Px%2BbqA.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/knight-of-ice-dx",
    },
    release: { type: "date", value: "2023-06-29" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/TFQNXflauUE?autoplay=1&mute=1&start=15",
      duration: 30,
    },
  },
  {
    id: 17,
    slug: "MetalWarHeretic",
    title: "Metal War Heretic",
    description: {
      es: "",
      en: "Metal War Heretic is a fast-paced hack n’ slash mobile game where you play as the last human trapped inside a massive war factory. The killer machines, programmed to wipe out all organic life, see you as a heretic in their metallic world. Armed with steel and fury, you must cut your way through relentless hordes of robots in every sector of the factory. Only by defeating all enemies can you activate the portal to advance to the next level. Fight, dodge, and unleash devastating combos as you push toward the factory’s core to stop the genocide threatening humanity. Do you have what it takes to be the heretic who defies the metal? ",
    },
    imageUrl:
      "https://img.itch.zone/aW1hZ2UvMzgyOTIzNS8yMjgzOTM1OS5wbmc=/794x1000/l41ur5.png",
    developers: [getDev("Paper Boat Studios")],
    store: {
      itch: "https://vov-artik.itch.io/metal-war-heretic",
    },
    release: { type: "date", value: "2025-08-22" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/7nNxGzvXA70?autoplay=1&mute=1&start=15",
      duration: 30,
    },
  },
  {
    id: 18,
    slug: "WeirdBunnyBanana",
    title: "Weird Bunny Banana - RESILIENT",
    description: {
      es: "",
      en: "Weird Bunny Banana is a BDSM-platformer where the game takes control, breaks your confidence, and makes you cry begging to get more of it! (Kinky wink). You will suffer. You will fail. You will be punished, and you'll be satisfied! And you’ll come back for more! Every death is a reminder that you are not in control, You're the game's b**ch. But then… you finally beat the level (or not).",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI5NjI2ODE1LnBuZw==/315x250%23c/MLBsAM.png",
    developers: [getDev("PXL Perfect Studio")],
    store: {
      itch: "https://ppstudiomty.itch.io/weird-bunny-banana-resilient",
    },
    release: { type: "date", value: "2026-09-26" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/rkjwe9FvQKA?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 19,
    slug: "Blooming",
    title: "Blooming",
    description: {
      es: "",
      en: "Blooming is a 2D action platformer where you wield a bow that transforms into dual blades. Explore interconnected areas in any order, defeat powerful bosses, and absorb their abilities to grow stronger.",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2530280/library_600x900_2x.jpg?t=1728594135",
    developers: [getDev("Skyque")],
    store: {
      steam: "https://store.steampowered.com/app/2530280/Blooming/",
      itch: "https://skyque.itch.io/blooming-demo",
    },
    release: { type: "date", value: "2020-01-01" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/b6Ks4Q2XOjM?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 20,
    slug: "TeaKnights",
    title: "TeaKnights",
    description: {
      es: "",
      en: "TeaKnights is a Y2K-inspired musical rail shooter set across seven tea-powered biodomes. As apprentice Camellia Jetsworth, blast enemies with TeaSetter REGALIAS, build chain combos to drive the dynamic soundtrack, face bosses, aid fellow knights, explore the overworld, and customize your look. ",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/4863130/06f323498c7ddd7089f2dce4881ed7b38082d33c/library_capsule_2x.jpg?t=1782188645",
    developers: [getDev("Funky Can Creative")],
    store: {
      steam: "https://store.steampowered.com/app/4863130/TeaKnights/",
    },
    release: { type: "tbd" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/D-lDLs9DDyo?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 21,
    slug: "EchoesBelow",
    title: "Echoes Below",
    description: {
      es: "Desciende a las profundidades del océano y explora un mundo submarino al lado de un misterioso pulpo. Juntos descubrirán criaturas marinas y revelarán los misterios que aguardan en el fondo del mar…",
      en: "",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/4841820/b51c7ec4c4ccc26108d387222f1e337822993fe7/library_capsule_2x.jpg",
    developers: [getDev("Fang & Fin Studio")],
    store: {
      steam: "https://store.steampowered.com/app/4841820/Echoes_Below/",
    },
    release: { type: "quarter", value: "Q1 2027" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/yje3QzuncC4?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 22,
    slug: "BloppyFish",
    title: "Bloppy Fish",
    description: {
      es: "Bloppy Fish es un arcade sencillo y adictivo donde controlas a un pequeño pez intentando sobrevivir el mayor tiempo posible entre obstáculos. Fácil de aprender, difícil de dominar y perfecto para partidas rápidas.",
      en: "",
    },
    imageUrl: "/games/BloppyFish.png",
    developers: [getDev("Tockus Games")],
    store: {
      googleplay:
        "https://play.google.com/store/apps/details?id=com.tockusgames.bloppyfish",
    },
    release: { type: "date", value: "2026-09-16" },
  },
  {
    id: 23,
    slug: "Trasmoz",
    title: "Trasmoz: El Canto del Ave de la Muerte",
    description: {
      es: "",
      en: "Our team is currently working on Trasmoz: El Canto del Ave de la Muerte (Trasmoz: The Song of the Deathbird). It's a classic-style platformer with a gothic atmosphere.",
    },
    imageUrl:
      "https://img.itch.zone/aW1hZ2UvMzc0MDgxOS8zMDA0MjgwNS5wbmc=/original/Fkn2mo.png",
    developers: [getDev("Salem Electrónica")],
    store: {
      itch: "https://salem-electronica.itch.io/trasmoz-el-canto-del-ave-de-la-muerte",
    },
    release: { type: "tbd" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/1qCd_86u8Go?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 24,
    slug: "DigDoom",
    title: "DIG DOOM",
    description: {
      es: "En DIG DOOM tienes que abrirte camino hacia las profundidades mientras esquivas enemigos que quieren convertirte en piedra. Cada movimiento cuenta, así que piensa rápido y sigue excavando. Simple, rápido y adictivo… pero cuidado, entre más profundo llegas, más difícil se pone. ",
      en: "",
    },
    imageUrl:
      "https://img.itch.zone/aW1hZ2UvNDUwNzI4MC8yNjg3MjU2NS5wbmc=/original/JBuvLc.png",
    developers: [getDev("Team-O")],
    store: {
      itch: "https://teamo.itch.io/dig-doom",
    },
    release: {
      type: "date",
      value: "2026-04-24",
    },
  },
  {
    id: 25,
    slug: "chronosandwich",
    title: "Chrono Sandwich",
    description: {
      es: "En un futuro donde toda la comida es holográfica, El Robot Chef vive junto a su dueña Astra. Pero cuando ella empieza a olvidar el sabor de la comida real, el pequeño robot decide emprender una misión imposible… ",
      en: "",
    },
    imageUrl:
      "https://img.itch.zone/aW1hZ2UvNDExMjExNC8yNDUwNzgyMi5wbmc=/794x1000/oWBoED.png",
    developers: [getDev("Team-O")],
    store: {
      itch: "https://teamo.itch.io/chronosandwich",
    },
    release: {
      type: "date",
      value: "2025-12-11",
    },
  },
  {
    id: 26,
    slug: "BichiroInATown",
    title: "Bichiro in a Town",
    description: {
      es: "",
      en: "Bichiro enters a new town, weak and starving, so the hero agrees to help everyone. Jump, fly and burrow around to collect items for the town.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzE0NzQ2MjQ3LnBuZw==/315x250%23c/m62YTw.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/bichiro-in-a-town",
    },
    release: { type: "tbd" },
  },
  {
    id: 27,
    slug: "BichiroInACave",
    title: "Bichiro in a cave",
    description: {
      es: "",
      en: "bichiro, don't go there!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzEzNDQ0MTI4LnBuZw==/original/qo6xE3.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/bichiro-in-a-cave",
    },
    release: { type: "date", value: "2023-09-18" },
  },
  {
    id: 28,
    slug: "TorreTactics",
    title: "TORRE TACTICS",
    description: {
      es: "",
      en: "A roguelike tactics game",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzEwMzgyNTU5LnBuZw==/315x250%23c/I4LLOa.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/torre",
    },
    release: { type: "date", value: "2021-06-27" },
  },
  {
    id: 29,
    slug: "TheDoctorCat",
    title: "the Doctor CAT",
    description: {
      es: "",
      en: "Mix and match the ingredients to create the best potions, er... medicine! Totally legal business.",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQ2OTYyOTYucG5n/original/oiyn5N.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/cat-doctor",
    },
    release: { type: "date", value: "2020-11-09" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/AAVKhpdlBWY?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 30,
    slug: "ThePotionMakinCat",
    title: "the Potion makin CAT",
    description: {
      es: "",
      en: "I heard there's a place that will create any kind of potion for you, they just have... puzzling ways of making them",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQ0NzI1MjEucG5n/original/t3aDAT.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/the-potion-makin-cat",
    },
    release: { type: "date", value: "2020-10-24" },
  },
  {
    id: 31,
    slug: "NeonRace",
    title: "Neon Race",
    description: {
      es: "",
      en: "Cute retro racer. Go loop and loop in this relaxing animal racing game!",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQzMDQyMzcucG5n/original/e0HFNE.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/neon-race",
    },
    release: { type: "date", value: "2020-09-08" },
  },
  {
    id: 32,
    slug: "ADayOff",
    title: "A Day Off",
    description: {
      es: "",
      en: "A Day Off is a mobile game about organizing a messy warehouse by sliding furniture and boxes in and out of their storage units.",
    },
    imageUrl: "https://img.itch.zone/aW1nLzIyNDA2ODMucG5n/original/onDwx9.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/a-day-off",
    },
    release: { type: "year", value: 2019 },
  },
  {
    id: 33,
    slug: "TheMacramancer",
    title: "The Macramancer",
    description: {
      es: "",
      en: "Be the world weaver in this platformer and turn based rpg, who happens to be a puzzle!",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQxODY2ODMucG5n/original/Sj6WeV.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/the-macramancer",
    },
    release: { type: "date", value: "2020-08-30" },
  },
  {
    id: 34,
    slug: "TheMacramancerPuzzles",
    title: "The Macramancer PUZZLES",
    description: {
      es: "",
      en: "Learn how to untangle magical enemies with this puzzles!",
    },
    imageUrl: "https://img.itch.zone/aW1nLzYwMzc5MDMucG5n/original/vIFhHx.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/the-macramancer-puzzles",
    },
    release: { type: "date", value: "2021-05-25" },
  },
  {
    id: 35,
    slug: "PicoRoom4Joy",
    title: "Pico Room4Joy",
    description: {
      es: "",
      en: "Provide the service of decorating and cleaning spaces so they spark joy!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzQ0MDU2MjcucG5n/315x250%23c/Xzs6vW.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://fayer.itch.io/joy-friends",
    },
    release: { type: "date", value: "2020-09-23" },
  },
  {
    id: 36,
    slug: "DeepDrill",
    title: "Deep Drill",
    description: {
      es: "",
      en: "Using your trusty drill, go deeper and deeper in this never ending, ever collapsing, increasingly complex dungeon.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzU4MDQ4MDcucG5n/315x250%23c/NhPXoT.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/deep-drill",
    },
    release: { type: "date", value: "2021-04-28" },
  },
  {
    id: 37,
    slug: "DrillBug",
    title: "DrillBug",
    description: {
      es: "",
      en: "With your trusty drill, gather items to grow your bug town in this island full of wonderful things.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzU2NDQyNjgucG5n/original/%2Fh5rPf.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/drillbug",
    },
    release: { type: "date", value: "2021-03-15" },
  },
  {
    id: 38,
    slug: "TheAnswersPuzzleShop",
    title: "the Answers [Puzzle] Shop",
    description: {
      es: "",
      en: "A new puzzle every day!, a #devtober project",
    },
    imageUrl: "https://img.itch.zone/aW1nLzE1Mzg2MzUuZ2lm/original/yxc7aJ.gif",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/the-answers-shop",
    },
    release: { type: "date", value: "2018-09-24" },
  },
  {
    id: 39,
    slug: "TheSpiderRuins",
    title: "The Spider Ruins",
    description: {
      es: "",
      en: "Be a small bug with a big knife, going for the adventure of your life in the search of the all mighty Giant Spider",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzQzMDgxODMucG5n/315x250%23c/DXA1WI.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/the-spider-ruins",
    },
    release: { type: "date", value: "2020-07-15" },
  },
  {
    id: 40,
    slug: "SpamCards",
    title: "Spam Cards",
    description: {
      es: "",
      en: "My friends made into pixelart, and an allegory of our WhatsApp club",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQ2NDc5NDUucG5n/original/DrY1BE.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/spam-cards",
    },
    release: { type: "date", value: "2020-11-21" },
  },
  {
    id: 41,
    slug: "TheKingsRole",
    title: "The King's Role",
    description: {
      es: "",
      en: "Do as you must to save your kingdom from ruin",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQ1NDgzNDcucG5n/original/rZVF7B.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/the-kings-role",
    },
    release: { type: "date", value: "2020-11-05" },
  },
  {
    id: 42,
    slug: "DiceEmblem",
    title: "Dice Emblem",
    description: {
      es: "",
      en: "A turn based strategy tactics like game. Roll the dice and seal your fate!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzM3Mzc0MTgucG5n/315x250%23c/%2FEbZ7%2B.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/dice-emblem",
    },
    release: { type: "date", value: "2020-05-17" },
  },
  {
    id: 43,
    slug: "Fragic",
    title: "Fragic",
    description: {
      es: "",
      en: "Use lasers to cure parasites from urgent patients in your clinic.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzM1Mjc2MjAuZ2lm/original/Q%2BakCu.gif",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/fragic",
    },
    release: { type: "date", value: "2020-05-28" },
  },
  {
    id: 44,
    slug: "FrogAndFriend",
    title: "Frog & Friend",
    description: {
      es: "",
      en: "Attend a recital of the (critiqued for being politically biased) band Frog & Friend.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzM3NzA0MzUucG5n/original/4%2FhYJE.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/frog-friend",
    },
    release: { type: "date", value: "2020-06-30" },
  },
  {
    id: 45,
    slug: "DiscBallRoom",
    title: "Disc Ball Room",
    description: {
      es: "",
      en: "You are a ball. You are in a room. There are discs following you. Do Not Die",
    },
    imageUrl: "https://img.itch.zone/aW1nLzUzMjY3MTIucG5n/original/zScwvx.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/disc-ball-room",
    },
    release: { type: "date", value: "2021-03-01" },
  },
  {
    id: 46,
    slug: "DogPhotoShoot",
    title: "Dog Photo Shoot",
    description: {
      es: "",
      en: "Take a clean photo of this dog, for money",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzUxODY4NjgucG5n/315x250%23c/n0gey3.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/dog-picture-day",
    },
    release: { type: "date", value: "2021-02-11" },
  },
  {
    id: 47,
    slug: "AmbushTheKing",
    title: "Ambush The King",
    description: {
      es: "",
      en: "You are an assassin. Kill the king!",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQ1MzExNDEuZ2lm/original/4jNBJv.gif",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/ambush-the-king",
    },
    release: { type: "date", value: "2020-11-02" },
  },
  {
    id: 48,
    slug: "GhostTrap",
    title: "Ghost Trap",
    description: {
      es: "",
      en: "Twin stick shoot a giant ghost into pieces to send them through the cempasuchil flower afterlife portal",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQ1MjMxNTAucG5n/original/SB1Z7j.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/ghost-trap",
    },
    release: { type: "date", value: "2020-10-31" },
  },
  {
    id: 49,
    slug: "ParkDogPolice",
    title: "Park Dog Police (Bitsy)",
    description: {
      es: "",
      en: "",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzQwMTY2MjAucG5n/315x250%23c/BT48pl.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/park-dog-police-bitsy",
    },
    release: { type: "date", value: "2019-10-13" },
  },
  {
    id: 50,
    slug: "SmallAlchemy",
    title: "Small Alchemy (Bitsy)",
    description: {
      es: "",
      en: "",
    },
    imageUrl: "https://img.itch.zone/aW1nLzI1ODM5MDUuZ2lm/original/yLUMV5.gif",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/small-alchemy-bitsy",
    },
    release: { type: "date", value: "2019-10-14" },
  },
  {
    id: 51,
    slug: "TouristGuideDog",
    title: "Tourist Guide Dog",
    description: {
      es: "",
      en: "You are a dog, and a tourist guide! Show this humans the way of dog into your favorite park.",
    },
    imageUrl:
      "https://img.itch.zone/aW1hZ2UvMTU5Nzc4LzczMjY4MS5wbmc=/original/N4dHMw.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/tourist-guide-dog",
    },
    release: { type: "date", value: "2017-07-17" },
  },
  {
    id: 52,
    slug: "DancingCards",
    title: "Dancing Cards",
    description: {
      es: "",
      en: "Dance to the Top!",
    },
    imageUrl:
      "https://img.itch.zone/aW1hZ2UvMjQ4MzAzLzExODY2OTUucG5n/original/W10%2Btt.png",
    developers: [getDev("CalixJumio")],
    store: {
      itch: "https://calixjumio.itch.io/dancing-cards",
    },
    release: { type: "date", value: "2018-04-23" },
  },
  {
    id: 53,
    slug: "InverterGun",
    title: "Inverter Gun",
    description: {
      es: "",
      en: "Inhale enemies inside you, convert them into ammo, and shoot them out !!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzE3MjkzNjkwLnBuZw==/315x250%23c/DTBNPG.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/inverter-gun",
    },
    release: { type: "date", value: "2024-08-11" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/j_zbLQAUK0Y?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 54,
    slug: "Rockyroid",
    title: "Rockyroid",
    description: {
      es: "",
      en: "Explore 3 exoplanets, find new creatures and fight them or capture them!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI3ODk2NzkxLnBuZw==/315x250%23c/hlomfJ.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/rockyroid",
    },
    release: { type: "date", value: "2023-09-25" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/u5uQvfRNHak?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 55,
    slug: "Tyrants",
    title: "Tyrants",
    description: {
      es: "",
      en: "Puzzle game. Help the hero NOT to reach the goal! Your role now is evil, make his path miserable.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzEyNzY3NjA5LnBuZw==/315x250%23c/J37276.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/tyrants",
    },
    release: { type: "date", value: "2023-07-09" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/rO5DcUebViU?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 56,
    slug: "DeliciousNightmare2",
    title: "Delicious Nightmare 2",
    description: {
      es: "",
      en: "3D platformer (Mario 64 like). Gather all the ingredients in this delicious nightmare!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI3ODk2NzM4LnBuZw==/original/JU2Wym.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/delicious-nightmare-2",
    },
    release: { type: "date", value: "2023-04-29" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/EJaNNc7jAxs?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 57,
    slug: "DeliciousNightmare",
    title: "Delicious Nightmare",
    description: {
      es: "",
      en: "Small platformer with cool melodies.",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQ5NjA4MjcucG5n/original/U3039B.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/delicious-nightmare",
    },
    release: { type: "date", value: "2021-01-05" },
  },
  {
    id: 58,
    slug: "KnightOfIce",
    title: "Knight of Ice",
    description: {
      es: "",
      en: "Metroidvania, full of secrets and powerful enemies. Find secret paths, get all the collectibles and enjoy!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI3ODk2NjMwLnBuZw==/original/f%2Bz8Cu.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/knight-of-ice",
    },
    release: { type: "date", value: "2022-09-25" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/-9chjtZq8Qk?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 59,
    slug: "Zombomb",
    title: "Zombomb",
    description: {
      es: "",
      en: "Survival Horror Shooter Puzzle game for #GPJam 2022!",
    },
    imageUrl: "https://img.itch.zone/aW1nLzg0MDIzNDcucG5n/original/oDkUUu.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/zombomb",
    },
    release: { type: "date", value: "2022-03-13" },
  },
  {
    id: 60,
    slug: "AHopefulPlay",
    title: "A Hopeful Play",
    description: {
      es: "",
      en: "Puzzle + Platform joins in an incredible adventure!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI3ODg5ODU3LnBuZw==/original/rFrJRJ.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/a-hopeful-play",
    },
    release: { type: "date", value: "2021-09-09" },
  },
  {
    id: 61,
    slug: "MinivAC",
    title: "MinivAC",
    description: {
      es: "",
      en: "Game based on Isaac Asimov's 'The Last Question' story. Compete with the best MinivACs and be the best!",
    },
    imageUrl: "https://img.itch.zone/aW1nLzUzMTY5MDIucG5n/original/ndHx72.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/minivac",
    },
    release: { type: "date", value: "2021-02-28" },
  },
  {
    id: 62,
    slug: "MultipLess",
    title: "MultipLess",
    description: {
      es: "",
      en: "You will need to decide whether you want to kill monsters and make your path more difficult, or to avoid them.",
    },
    imageUrl: "https://img.itch.zone/aW1nLzUwNzYwMDMucG5n/original/eANrIr.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/multipless",
    },
    release: { type: "date", value: "2021-01-29" },
  },
  {
    id: 63,
    slug: "ZeroHour",
    title: "Zero Hour",
    description: {
      es: "",
      en: "Zero Hour is a project made in an intensive month long Unity Course as part of a teaching program.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI3NjY0MDQ0LnBuZw==/original/VZScUx.png",
    developers: [getDev("Wolfsbane Studio")],
    store: {
      itch: "https://dhazard.itch.io/zerohour",
    },
    release: { type: "date", value: "2026-06-04" },
  },
  {
    id: 64,
    slug: "TheHoundOfUlster",
    title: "The Hound of Ulster",
    description: {
      es: "",
      en: "The Hound of Ulster is a top-down 3D action RPG inspired by the legendary Irish myth, The Ulster Cycle.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI0MTUyNjg2LnBuZw==/original/aNW02A.png",
    developers: [getDev("Wolfsbane Studio")],
    store: {
      itch: "https://centuriagames.itch.io/the-hound-of-ulster",
    },
    release: { type: "date", value: "2025-11-19" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/CyNoM7UsXZ8?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 65,
    slug: "Ediction",
    title: "Ediction",
    description: {
      es: "",
      en: "This body is not mine; it is the body.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI0NzQyNzA4LnBuZw==/315x250%23c/BOL6P7.png",
    developers: [getDev("Don Attico"), getDev("Maurimo")],
    store: {
      itch: "https://donattico.itch.io/ediction",
    },
    release: { type: "date", value: "2025-02-23" },
  },
  {
    id: 66,
    slug: "CartomancyAnthology",
    title: "Cartomancy Anthology",
    description: {
      es: "",
      en: "A collection of 22 unique games, based on the tarot's Major Arcana!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzkxOTU5NjAucG5n/315x250%23c/vNZm5i.png",
    developers: [getDev("Incisor Studios")],
    store: {
      itch: "https://cartomancyanthology.itch.io/cartomancy-anthology",
      steam: "https://store.steampowered.com/app/1869870/Cartomancy_Anthology/",
    },
    release: { type: "date", value: "2022-06-11" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/8N0mLe1jzy4?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 67,
    slug: "TheVaultOfDrBasilia",
    title: "The Vault of Dr. Basilia",
    description: {
      es: "",
      en: "Language translation puzzles and a weird disease.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI2NzMwNTUxLnBuZw==/original/1zVyhg.png",
    developers: [getDev("Maurimo")],
    store: {
      itch: "https://gyrium.itch.io/the-vault-of-dr-basilia",
    },
    release: { type: "date", value: "2026-02-03" },
  },
  {
    id: 68,
    slug: "ValleyOfAllunRah",
    title: "Valley of Allun Rah",
    description: {
      es: "",
      en: "Race against time on an omnidirectional bike on a large desert planet.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI1NTg2ODg0LnBuZw==/original/hAshNC.png",
    developers: [getDev("Maurimo")],
    store: {
      itch: "https://dicedbasilisk.itch.io/valley-of-allun-rah",
    },
    release: { type: "date", value: "2026-02-13" },
  },
  {
    id: 69,
    slug: "IndemnitySignal",
    title: "Indemnity Signal",
    description: {
      es: "",
      en: "Use waveforms and a printed manual to solve a deep sea escape room",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzIxNzYyMjExLnBuZw==/original/F5bhZC.png",
    developers: [getDev("Maurimo")],
    store: {
      itch: "https://gyrium.itch.io/indemnity-signal",
    },
    release: { type: "date", value: "2025-06-19" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/vjRHWA9Po6c?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 70,
    slug: "TheCauldronKids",
    title: "The Cauldron Kids: The Summoning of Mr Vermicelli",
    description: {
      es: "",
      en: "You're a 6 years old witch and today, you're home alone: time to go on a magical adventure!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzEzNTMyNTI3LnBuZw==/315x250%23c/5UD8Of.png",
    developers: [getDev("Maurimo")],
    store: {
      itch: "https://petgolemgames.itch.io/the-cauldron-kids",
      steam:
        "https://store.steampowered.com/app/2598120/The_Cauldron_Kids_The_Summoning_of_Mr_Vermicelli/",
    },
    release: { type: "date", value: "2023-09-26" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/qSjDua4m_VA?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 71,
    slug: "ReadySTEMGo",
    title: "Ready? STEM... Go!",
    description: {
      es: "Un plataformero 2D sobre utilizar la robótica, química y programación para hacerle un favor a tu profesora.",
      en: "",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzg4NTYzMjIucG5n/315x250%23c/xDylqb.png",
    developers: [getDev("Maurimo")],
    store: {
      itch: "https://maurimo.itch.io/ready-stem-go",
    },
    release: { type: "tbd" },
  },
  {
    id: 72,
    slug: "ThePoint",
    title: "The Point",
    description: {
      es: "",
      en: "A power fantasy where your middle finger is the answer.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzM3MjAyNzUucG5n/original/vrFL%2FA.png",
    developers: [getDev("Maurimo")],
    store: {
      itch: "https://maurimo.itch.io/thepoint",
    },
    release: { type: "date", value: "2020-06-19" },
  },
  {
    id: 73,
    slug: "ASYT",
    title: "ASYT",
    description: {
      es: "",
      en: "A procedural pinball-esque game for Windows.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI4OTI4NjcucG5n/315x250%23c/%2B0O4Aq.png",
    developers: [getDev("Maurimo")],
    store: {
      itch: "https://maurimo.itch.io/asyt",
    },
    release: { type: "date", value: "2020-01-20" },
  },
  {
    id: 74,
    slug: "VAPOLOrigins",
    title: "V.A.P.O.L Origins",
    description: {
      es: "Videojuego indie de terror psicológico desarrollado durante 8 meses, diseñado para incomodar y desafiar al jugador. V.A.P.O.L no ofrece respuestas claras ni caminos seguros. Cada paso te sumerge más en una atmósfera opresiva donde el miedo no se muestra, se siente. El juego no quiere que sigas avanzando.",
      en: "Psychological horror game. In 1984, the BAY Program was established as a classified experiment led by Dr. Ollivan Mildenhall. Everything changed on December 26, 1990, when a failure at BAY 09 released experimental gases throughout the hospital.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzMxMzc2Nzg2LnBuZw==/original/r5iEvK.png",
    developers: [getDev("Felix Raymundo")],
    store: {
      itch: "https://innovate-industries.itch.io/vapolcomplete",
    },
    release: { type: "tbd" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/jQhwLKjPYQI?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 75,
    slug: "ArcadeDefender",
    title: "Arcade Defender",
    description: {
      es: "",
      en: "Vertical retro shmup game. Can you beat wave 10? only 3% of players can.",
    },
    imageUrl: "https://img.itch.zone/aW1nLzc1MjYwNDkucG5n/original/aPZTIu.png",
    developers: [getDev("PXL Perfect Studio")],
    store: {
      itch: "https://ppstudiomty.itch.io/arcade-defender",
    },
    release: { type: "date", value: "2019-07-30" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/CmoRCawjzUU?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 76,
    slug: "ToubleAndTrouble",
    title: "Touble & Trouble",
    description: {
      es: "",
      en: "Semi-rhythmic game puzzle game. Help these two frog brothers become human again.",
    },
    imageUrl: "https://img.itch.zone/aW1nLzMzOTg0NDgucG5n/original/age2rq.png",
    developers: [getDev("PXL Perfect Studio")],
    store: {
      itch: "https://ppstudiomty.itch.io/touble-trouble",
    },
    release: { type: "date", value: "2020-05-06" },
  },
  {
    id: 77,
    slug: "RoboRodeo",
    title: "RoboRodeo",
    description: {
      es: "Un juego de pelea de robot pero en el viejo oeste - Made for GameJam PixelBorregos",
      en: "",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzE2MzA2ODk2LnBuZw==/315x250%23c/kqDFQ5.png",
    developers: [getDev("Viut")],
    store: {
      itch: "https://viut.itch.io/roborodeo",
    },
    release: { type: "date", value: "2024-05-26" },
  },
  {
    id: 78,
    slug: "CarryingCapacity",
    title: "Carrying Capacity",
    description: {
      es: "",
      en: "Made for Longy's Game Jam, where the theme was: running out of space.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzE0Mzk1MzM3LnBuZw==/original/EZjS79.png",
    developers: [getDev("Viut")],
    store: {
      itch: "https://viut.itch.io/carrying-capacity",
    },
    release: { type: "date", value: "2023-12-18" },
  },
  {
    id: 79,
    slug: "FeedbackLoop",
    title: "Feedback Loop",
    description: {
      es: "",
      en: "Can you get out of the feedback loop and turn your computer off?",
    },
    imageUrl: "https://img.itch.zone/aW1nLzQzNTUzOTIucG5n/original/XqVROV.png",
    developers: [getDev("Viut")],
    store: {
      itch: "https://viut.itch.io/feedback-loop",
    },
    release: { type: "date", value: "2020-10-04" },
  },
  {
    id: 80,
    slug: "DoubleShotTemple",
    title: "Double Shot Temple",
    description: {
      es: "",
      en: "Work with your divided half to get through a randomly generated temple. Made for United Game Jam 2020.",
    },
    imageUrl: "https://img.itch.zone/aW1nLzM3NTUxNTEucG5n/original/kyWM9U.png",
    developers: [getDev("Viut")],
    store: {
      itch: "https://viut.itch.io/double-shot-temple",
    },
    release: { type: "date", value: "2020-06-28" },
  },
  {
    id: 81,
    slug: "IslasQueCaen",
    title: "Islas Que Caen",
    description: {
      es: "",
      en: "Overambitious second game. Left unfinished 2018-ish",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzk2NzIwNjcucG5n/original/Jh5K%2BD.png",
    developers: [getDev("Viut")],
    store: {
      itch: "https://viut.itch.io/iqc",
    },
    release: { type: "date", value: "2020-09-08" },
  },
  {
    id: 82,
    slug: "DiscountRun",
    title: "Discount Run",
    description: {
      es: "",
      en: "First ever game",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzk2NTQ4NTcucG5n/original/KtH%2BGj.png",
    developers: [getDev("Viut")],
    store: {
      itch: "https://viut.itch.io/discount-run",
    },
    release: { type: "date", value: "2022-07-30" },
  },
  {
    id: 83,
    slug: "DearRed",
    title: "Dear Red",
    description: {
      es: "",
      en: "Little game I was working on, still missing polish but decided to move to GM2",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzk2NzIwNzMucG5n/315x250%23c/wEqcZV.png",
    developers: [getDev("Viut")],
    store: {
      itch: "https://viut.itch.io/dear-red",
    },
    release: { type: "date", value: "2019-04-18" },
  },
  {
    id: 84,
    slug: "SunboundDefenders",
    title: "Sunbound Defenders",
    description: {
      es: "",
      en: "Restore a polluted planet by commanding plant-based robots in an open-world RTS with Tower Defense mechanics.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI5MjQyMDAzLnBuZw==/original/HCluGp.png",
    developers: [getDev("Paper Boat Studios")],
    store: {
      itch: "https://vov-artik.itch.io/sunbound-defenders",
    },
    release: { type: "year", value: 2026 },
  },
  {
    id: 85,
    slug: "Canolith",
    title: "Canolith",
    description: {
      es: "",
      en: "Canolith is a survival horror game where players control a water treatment technician hired to fix electrical and plumbing issues. What starts as a routine day quickly turns into a nightmare when a massive, human-devouring monster begins stalking him.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzE4OTU4OTExLnBuZw==/original/haeCF4.png",
    developers: [getDev("Paper Boat Studios")],
    store: {
      itch: "https://vov-artik.itch.io/canolith",
    },
    release: { type: "date", value: "2024-12-12" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/hPVFK4Uqsdw?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 86,
    slug: "DrenchStealth",
    title: "Drench Stealth",
    description: {
      es: "",
      en: "Stealth game where the player has water powers: manipulate the state of matter to escape jail!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzE3MzM2NzkxLnBuZw==/original/84fb%2Ft.png",
    developers: [getDev("Paper Boat Studios")],
    store: {
      itch: "https://vov-artik.itch.io/drench-stealth",
    },
    release: { type: "date", value: "2024-08-15" },
  },
  {
    id: 87,
    slug: "SundownValley",
    title: "Sundown Valley",
    description: {
      es: "Sundown Valley es un juego de aventura y supervivencia en primera persona. Conviértete en un aldeano desconocido que queda varado en esta ciudad tras haber tenido fallas en su auto. De día, explora una pintoresca ciudad y convive con sus habitantes. Pero al caer el sol, todo cambiará...",
      en: "",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzIyODI1NjIyLnBuZw==/original/8YyHHs.png",
    developers: [getDev("Team-O")],
    store: {
      itch: "https://teamo.itch.io/sundown-valley",
    },
    release: { type: "date", value: "2025-08-21" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/6cU58woZLvc?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 88,
    slug: "Felinaria",
    title: "Felinaria",
    description: {
      es: "Felinaria es un juego de combate por turnos protagonizado por un gato hechicero que se aventura en un bosque mágico en busca del místico estambre sagrado para restaurar el equilibrio natural de su aldea.",
      en: "",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzIwNjUyNzYzLnBuZw==/original/bx5jFf.png",
    developers: [getDev("Team-O")],
    store: {
      itch: "https://teamo.itch.io/felinaria",
    },
    release: { type: "date", value: "2025-04-10" },
  },
  {
    id: 89,
    slug: "SuperCraneBug",
    title: "Super Crane Bug",
    description: {
      es: "",
      en: "Retro match 3 with a Bug juggling at his job. Line tiles in a line to destroy them, but the way to move them changes constantly. Be a Bug, Do a Work, Match a 3",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2318570/library_600x900_2x.jpg",
    developers: [getDev("CalixJumio")],
    store: {
      steam: "https://store.steampowered.com/app/2318570/Super_Crane_Bug/",
      itch: "https://calixjumio.itch.io/super-crane",
    },
    release: { type: "date", value: "2023-03-10" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/wQfPluGSUrw?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 90,
    slug: "UltraLMAD",
    title: "ULTRA LMAD",
    description: {
      es: "",
      en: "A free roguelike deckbuilder about becoming an LMAD in a fantasy way. Get cards by taking classes, build a deck to battle against projects and complete all semesters to graduate.",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/1419510/library_600x900_2x.jpg",
    developers: [getDev("Headless")],
    store: {
      steam: "https://store.steampowered.com/app/1419510/ULTRA_LMAD/",
    },
    release: { type: "date", value: "2023-01-20" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/77ydhaneiw8?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 91,
    slug: "WhileWaitingMyTurn",
    title: "While waiting my turn",
    description: {
      es: "",
      en: "Discover the joy of building tiny structures with board game pieces in this relaxing and small sandbox game. Stack and create unique buildings. Construct whatever you want – no puzzles to solve, no races to win.",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2456260/library_600x900_2x.jpg",
    developers: [getDev("Ignita Games")],
    store: {
      steam:
        "https://store.steampowered.com/app/2456260/While_waiting_my_turn/",
    },
    release: { type: "date", value: "2024-06-19" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/FV2mx5dTcHU?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 92,
    slug: "MorpiCardMix",
    title: "Morpi Card Mix",
    description: {
      es: "",
      en: "REAL-TIME auto-battler card game! BUILD your DECK, SUMMON morpis, PLAY cards to POWER UP your morpis and FIGHT against evil forces. Think and act fast in this real-time roguelike deck-builder game!",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2845820/library_600x900_2x.jpg",
    developers: [getDev("Ignita Games")],
    store: {
      steam: "https://store.steampowered.com/app/2845820/Morpi_Card_Mix/",
    },
    release: { type: "tbd" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/sbKwDCpDgdo?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 93,
    slug: "RinnyPlatformerRageGame",
    title: "Rinny Platformer Rage Game",
    description: {
      es: "Rinny Platformer Rage Game es un juego plataformero shitpost inspirado en Pretty Blood (la cual ya no nos afiliamos), tambien teniendo mucha inspiracion en UNDERTALE y DELTARUNE. Teniendo una historia que sirve como una precuela a Pretty Blood (ya no, porque no seguimos el canon).",
      en: "Rinny Platformer Rage Game is a platformer shitpost game inspired on various games, also having a lot of inspiration in UNDERTALE and DELTARUNE. Facing a story that goes through 4 chapters from 0 to 3",
    },
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3879020/library_600x900_2x.jpg",
    developers: [getDev("RBIE")],
    store: {
      steam:
        "https://store.steampowered.com/app/3879020/Rinny_Platformer_Rage_Game/",
    },
    release: { type: "tbd" },
  },
  {
    id: 94,
    slug: "Hookminer",
    title: "Hookminer!",
    description: {
      es: "",
      en: "Mining with timing! Aim your hook at the treasure and rack up a high score, pulling in riches to progress into deeper levels.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI3NzM4ODY2LnBuZw==/315x250%23c/6PVTSi.png",
    developers: [getDev("Alviedev"), getDev("Azulbit8")],
    store: {
      itch: "https://alviedev.itch.io/hookminer",
    },
    release: { type: "date", value: "2026-06-08" },
  },
  {
    id: 95,
    slug: "ItCountsSurvivor",
    title: "IT COUNTS! Survivor",
    description: {
      es: "",
      en: "A Vampire Survivors-like with a twist: the game is played on an old TV in-universe, and it can stop showing your game. Switch cameras to fix your TV before the monsters get you! Made for SHROOMJAM 2025.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI0MDc1ODE1LnBuZw==/315x250%23c/J04jzf.png",
    developers: [getDev("Alviedev")],
    store: {
      itch: "https://alviedev.itch.io/it-counts-survivor",
    },
    release: { type: "date", value: "2025-11-13" },
  },
  {
    id: 96,
    slug: "AntIdle",
    title: "Ant Idle",
    description: {
      es: "",
      en: "Idle game about ants!",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzIwOTk2MjI1LnBuZw==/original/GtDBwI.png",
    developers: [getDev("Alviedev")],
    store: {
      itch: "https://alviedev.itch.io/ant-idle-pico-8",
    },
    release: { type: "tbd" },
  },
  {
    id: 97,
    slug: "Pyrohexnics",
    title: "PYROHEXNICS",
    description: {
      es: "",
      en: "A small game where you choose a firework design, and then observe the magic right before your very eyes! 24 designs with unique firework effects every time.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzE4NTc1MTg4LnBuZw==/315x250%23c/QYRX9L.png",
    developers: [getDev("Alviedev")],
    store: {
      itch: "https://alviedev.itch.io/pyrohexnics",
    },
    release: { type: "date", value: "2024-11-14" },
  },
  {
    id: 98,
    slug: "RatonVaquero",
    title: "Ratón vaquero",
    description: {
      es: "",
      en: "The classic Mexican song now has a videogame! You are a cowboy mouse looking for outlaws in the desert night mirage. Use your action cards to attack, defend and advance.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzEzOTM5NjYyLnBuZw==/original/OQcUX6.png",
    developers: [getDev("Azulbit8")],
    store: {
      itch: "https://azulbit8.itch.io/raton-vaquero",
    },
    release: { type: "date", value: "2023-11-05" },
  },
  {
    id: 99,
    slug: "LongLongTrain",
    title: "Long Long Train",
    description: {
      es: "",
      en: "Have you ever seen a long long train? Play 3 microgames on board the Long Long Train from the future. Made for the Tu juego a Juicio Jam.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzY4ODc5MzQucG5n/original/mcdejd.png",
    developers: [getDev("Azulbit8")],
    store: {
      itch: "https://azulbit8.itch.io/long-long-train",
    },
    release: { type: "date", value: "2021-09-01" },
  },
  {
    id: 100,
    slug: "Nebulacraft",
    title: "Nebulacraft",
    description: {
      es: "",
      en: "Nebulacraft is a tribute to classic 1980s arcade games such as Galaga and Space Invaders.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzI1NDg0OTc5LnBuZw==/315x250%23c/gqBb9b.png",
    developers: [getDev("Jooyink")],
    store: {
      itch: "https://jooyink.itch.io/nebulacraft",
    },
    release: { type: "date", value: "2026-02-09" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/6R2Htfem89w?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 101,
    slug: "Robotroop",
    title: "Robotroop",
    description: {
      es: "",
      en: "A top-down shooter where you have to escape the laboratory while enemies try to stop you, meeting a lot of friends along the way. Made by a small team of university students.",
    },
    imageUrl:
      "https://img.itch.zone/aW1nLzc2OTA3MzIuanBn/315x250%23c/m0ZPMW.jpg",
    developers: [getDev("Jooyink")],
    store: {
      itch: "https://robotroop.itch.io/robotroop",
    },
    release: { type: "date", value: "2021-12-02" },
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/H5giY5_yuxY?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
];

export const games = gameList.map(withItch).map(withSteam);

// Slug of the game shown on the home page (example, "PopSlinger").
// Leave empty to rotate through every game, changing each Monday.
const featuredSlug = "Eagle-knight-paradox";

export function getFeaturedGame(): Game {
  if (featuredSlug) {
    const game = games.find((g) => g.slug === featuredSlug);
    if (!game) throw new Error(`Featured game "${featuredSlug}" not found`);
    return game;
  }
  // Weeks since the Unix epoch (a Thursday); +3 days makes weeks start on Monday
  const week = Math.floor((Date.now() / 86_400_000 + 3) / 7);
  return games[week % games.length];
}

export function gamesByDev(dev: Developer): Game[] {
  return games.filter((g) => g.developers.some((d) => d.slug === dev.slug));
}
