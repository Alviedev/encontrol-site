import type { Developer, Game } from "./common";

export const developers: Developer[] = [
  {
    slug: "Playstorm",
    name: "Playstorm Studios",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/eac40994c080b6a217fca7576dbd5f2434beabd1_full.jpg",
    links: {
      website: "https://encontrol.dev",
    },
  },
  {
    slug: "PrettyScar",
    name: "Pretty Scar",
    logoUrl:
      "https://pbs.twimg.com/profile_images/1902760092984070144/q8AxPHop_400x400.jpg",
    links: {
      bluesky: "https://bsky.app/profile/prettyscar.dev",
    },
  },
  {
    slug: "DonAttico",
    name: "Don Attico",
    logoUrl:
      "https://cdn.bsky.app/img/avatar/plain/did:plc:sdpi3a4hw672aq26weu3qdud/bafkreieplw27vqutl7arbh4xa2djojetwv6y5itpnitw3lwljnl4o26oia@jpeg",
    links: {
      bluesky: "https://bsky.app/profile/whodunnitvn.bsky.social",
    },
  },
  {
    slug: "FunkyCanCreative",
    name: "Funky Can Creative",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/a5226947eb4f619efb9f9b7b1823587473bbbec4_full.jpg",
    links: {
      bluesky: "https://bsky.app/profile/whodunnitvn.bsky.social",
      twitter: "https://x.com/FunkyCanDev",
      instagram: "https://www.instagram.com/funkycancreative/",
    },
  },
  {
    slug: "Headless",
    name: "Headless",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/baf43430b4ea204c1068f2c9c5bb1f3346c0660b_full.jpg",
    links: {
      twitter: "https://x.com/Headless_Games",
      website: "https://www.headlessvideogames.com/",
    },
  },
  {
    slug: "PPStudio",
    name: "Pixel Perfect Studios",
    logoUrl:
      "https://i0.wp.com/www.imcsw.com/wp-content/uploads/2019/05/cropped-PPStudio-Logo-Round.png",
    links: {
      website: "https://www.pixelperfectstudio.mx/",
    },
  },
  {
    slug: "Calix",
    name: "CalixJumio",
    logoUrl:
      "https://cdn.bsky.app/img/avatar/plain/did:plc:lwugoxbxtqp7kaimrjwx2nxz/bafkreifrgr33upv6p2yamapmp5txiweiwo3zblj3xj5palak3iuidf5gq4@jpeg",
    links: {
      website: "https://calixjumio.wordpress.com/",
      bluesky: "https://bsky.app/profile/calixjumio.me",
    },
  },
  {
    slug: "Ignita",
    name: "Ignita Games",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/8eda51bf7a158755e5f9b0d81c08c82b790872db_full.jpg",
    links: {
      bluesky: "https://bsky.app/profile/marcoelz.bsky.social",
    },
  },
  {
    slug: "Incisor",
    name: "Incisor Studios",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/82fe62b9a2d7bd7add4a8017e0b2ddce54ed4eda_full.jpg",
    links: {
      itch: "https://incisor-studios.itch.io/",
      website: "https://incisorstudios.com/",
    },
  },
  {
    slug: "Maurimo",
    name: "Maurimo",
    logoUrl:
      "https://cdn.bsky.app/img/avatar/plain/did:plc:m4a24i77j6oxr6b4enanhkyl/bafkreigmws7rp25ss43do2sibxfbwlraq25shxmba2wy6tkm3wgk3xsn34",
    links: {
      bluesky: "https://bsky.app/profile/maurimo.dev",
      itch: "https://maurimo.itch.io/",
      website: "https://maurimo.dev/",
    },
  },
  {
    slug: "VFS",
    name: "VFS",
    logoUrl:
      "https://avatars.fastly.steamstatic.com/91a39256e375d9d9b8e1608f3f4e44572d00a808_full.jpg",
    links: {},
  },
  {
    slug: "Salem",
    name: "Salem Electrónica",
    links: {},
  },
  {
    slug: "FelixRaymundo",
    name: "Felix Raymundo",
    links: {
      youtube: "https://www.youtube.com/@mundayongstudio",
    },
  },
  {
    slug: "RBIE",
    name: "RBIE",
    logoUrl: "/devs/RbieLogo.png",
    links: {
      bluesky: "https://bsky.app/profile/ikaexo.bsky.social",
    },
  },
  {
    slug: "PaperBoatStudios",
    name: "Paper Boat Studios",
    links: {},
  },
  {
    slug: "Carlos_7x",
    name: "Carlos_7x",
    links: {
      itch: "https://carlos-7x.itch.io/",
    },
  },
  {
    slug: "Skyque",
    name: "Skyque",
    links: {
      twitter: "https://x.com/Skyque10",
      youtube: "https://www.youtube.com/@SkyqueDev",
    },
  },
];

export function getDev(name: string): Developer {
  const dev = developers.find((d) => d.name === name);
  if (!dev) throw new Error(`Developer "${name}" not found`);
  return dev;
}

export const games: Game[] = [
  {
    id: 1,
    slug: "Eagle-knight-paradox",
    title: "Eagle Knight Paradox",
    description:
      "Eagle Knight Paradox is a story-driven action-adventure that blends high-speed mecha battles with slice-of-life exploration. Step into the neon-lit city of Comala 88, where every choice you make will shape not only the fate of the city but also the lives of the people you meet.",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3008700/library_600x900_2x.jpg?t=1765331087",
    developers: [getDev("Playstorm Studios")],
    store: {
      steam: "https://store.steampowered.com/app/3008700",
    },
    release: { type: "date", value: "2026-09-21" },
    released: true,
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
    description:
      "Uppercute is a 3D action platformer where, with the help of your sister and the use of your runner skills, you’ll dive into people's minds, face challenging opponents and retrieve valuable information to solve the mystery of your brother's disappearance. ",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3151660/16ed08a363857124e7aa8e99b64e6e8ce931b9c1/library_600x900_2x.jpg?t=1749495379",
    developers: [getDev("Pretty Scar")],
    store: {
      steam: "https://store.steampowered.com/app/3151660",
    },
    release: { type: "quarter", value: "Q2 2026" },
    released: false,
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
    description:
      "WHODUNNIT: Hitting Singles is the first episode of a comedic mystery visual novel following a man who must answer a burning question: who the hell did he hook up with last night?",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3851280/6ba7398a79a075047ace6b5343b627ec436c5a50/library_capsule_2x.jpg?t=1757969797",
    developers: [getDev("Don Attico"), getDev("Maurimo")],
    store: {
      steam: "https://store.steampowered.com/app/3851280/WHODUNNIT/",
      itch: "https://donattico.itch.io/whodunnit",
    },
    release: { type: "year", value: 2026 },
    released: false,
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
    description:
      "Join a magical girl with a soda-powered arsenal on a dreamy quest to save her home! In this part beat-‘em-up, part musical shooter, you’ll experience the whimsical story of Ria and Gin as they fight against sinister invaders from another dimension…and maybe even groove to that funky beat!",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/1928320/library_600x900_2x.jpg?t=1693269281",
    developers: [getDev("Funky Can Creative")],
    store: {
      steam: "https://store.steampowered.com/app/1928320/PopSlinger",
      switch: "https://www.nintendo.com/us/store/products/popslinger-switch/",
    },
    release: { type: "date", value: "2022-04-14" },
    released: true,
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
    description:
      "Return to the PopSlinger universe in this coffee-fueled sequel! Join an elite agent and a digital idol on a mission to rescue a lost heroine in a world full of vibrant chaos. Face new enemies, uncover the mysteries of the Purple District, and groove to a freshly brewed beat!",
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
    released: true,
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
    description:
      "Tactical team-building roguelike auto-battler with active and passive playstyles. Draft a team as you explore maps full of monsters, build synergies, equip items and cast spells to support your team during battles and help them escape the Underboard. ",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2376610/1ff8923b5dd303a590f52b8600d184894acc8f11/hero_capsule_2x.jpg?t=1771288428",
    developers: [getDev("Headless")],
    store: {
      steam: "https://store.steampowered.com/app/2376610/Underboard/",
    },
    release: { type: "date", value: "2026-02-06" },
    released: true,
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
    description:
      "An amazing collaboration with Legends of Learning and Zeptolab. This fun and engaging game will help your kids learn about the different types of energy movement through physics-based puzzles and beutiful collectibles. A game fully designed and developed at Pixel Perfect Studio.",
    imageUrl:
      "https://i0.wp.com/www.imcsw.com/wp-content/uploads/2025/10/OmNomTitle-ezgif.com-video-to-gif-converter-1.gif?w=3840&amp;ssl=1",
    developers: [getDev("Pixel Perfect Studios")],
    store: {
      website:
        "https://games.legendsoflearning.com/game/cut-the-rope-om-nom-s-picture-collection/4581?learning_objective_id=985&partner=legends-developer",
    },
    release: { type: "date", value: "2026-02-06" },
    released: true,
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
    description:
      "Retro match 3 about a Bug juggling at his job, BUT NOW IT'S BETTER Match 3 drops to clear them, but your tool changes constantly, so watch out! Be a Bug, Do a Work, Match a 3",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2976620/library_600x900_2x.jpg?t=1715316243",
    developers: [getDev("CalixJumio")],
    store: {
      steam: "https://store.steampowered.com/app/2976620/Super_Crane_HD/",
    },
    release: { type: "tbd" },
    released: false,
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
    description:
      "A relaxing idle fishing game that waits for you at the bottom of your screen. CATCH fish, BUY upgrades, COMPLETE your collection, and DISPLAY them in your aquarium.",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2963540/library_600x900_2x.jpg?t=1754971349",
    developers: [getDev("Ignita Games")],
    store: {
      steam: "https://store.steampowered.com/app/2963540/Idle_Waters/",
    },
    release: { type: "date", value: "2025-12-10" },
    released: true,
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
    description:
      "The demon summoned to embark the second apocalypse is only a child, and a woman who has lost it all resolves to save her. A half-hour long narrative game with survival gameplay elements and two endings. ",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/1667490/library_600x900_2x.jpg?t=1623941010",
    developers: [getDev("Incisor Studios"), getDev("Maurimo")],
    store: {
      steam: "https://store.steampowered.com/app/1667490/Fostering_Apocalypse/",
    },
    release: { type: "date", value: "2021-07-15" },
    released: true,
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
    description:
      "Incorporeal is a dungeon crawler where you play as a treasure hunter who has the ability to sever their soul from their body. Dash through traps, strike foes with your spectral form, and protect your fragile body as you fight, puzzle, and survive the catacombs to claim ancient relics.  ",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3977270/51fba81750dd6d9299578d7e813dbd8e4fbd4c90/library_capsule_2x.jpg?t=1757095203",
    developers: [getDev("VFS")],
    store: {
      steam: "https://store.steampowered.com/app/3977270/Incorporeal/",
    },
    release: { type: "date", value: "2025-09-25" },
    released: true,
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
    description:
      "Save the world from Dinah's threat by defeating angels, demons, beasts, and aliens.",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/4016530/1345f26aa6c352d26012da5a876051d40b5de1be/library_capsule_2x.jpg?t=1757436922",
    developers: [getDev("Salem Electrónica")],
    store: {
      steam:
        "https://store.steampowered.com/app/4016530/Merkava_The_Sacred_Armour_of_Meirav/",
    },
    release: { type: "date", value: "2025-10-07" },
    released: true,
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/Y4jTbkh51Es?autoplay=1&mute=1&start=6",
      duration: 30,
    },
  },
  {
    id: 13,
    slug: "VAPOL",
    title: "V.A.P.O.L",
    description:
      "Videojuego indie de terror psicológico desarrollado durante 8 meses, diseñado para incomodar y desafiar al jugador. V.A.P.O.L no ofrece respuestas claras ni caminos seguros. Cada paso te sumerge más en una atmósfera opresiva donde el miedo no se muestra, se siente. El juego no quiere que sigas avanzando.",
    imageUrl: "https://img.itch.zone/aW1nLzI1OTA0NTEzLnBuZw==/x200/PFR6Ga.png",
    developers: [getDev("Felix Raymundo")],
    store: {
      itch: "https://mundayongstudios.itch.io/vapol-spanish-edition",
    },
    release: { type: "date", value: "2025-10-07" },
    released: true,
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/Em_-2mgbgoI?autoplay=1&mute=1&start=15",
      duration: 20,
    },
  },
  {
    id: 14,
    slug: "IdiotsInTheDAS",
    title: "Idiots in the DAS",
    description:
      "Idiots in the DAS is a colorful parody that combines turn based RPG with 2D platformers, it focuses a lot on HIT or MISS and character progression, along with getting new party members to make unique attacks together in the same turn! It also contains in-game editors to customize and create!",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/3345590/d93f96d82f57ce508842f1fa243647751ddb825e/library_capsule_2x.jpg?t=1763154105",
    developers: [getDev("RBIE")],
    store: {
      steam: "https://store.steampowered.com/app/3345590/Idiots_in_the_DAS/",
    },
    release: { type: "date", value: "2026-08-31" },
    released: true,
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
    description:
      "PaperBoat Studios presents a roguelike game for PC, where for the player must make their way through a world filled with fog and fungi enemies to reach their goal, while being hindered by them. To clear the path, the player must activate various sunflowers that will dissipate the fog around them to clear their way; however, at the same time, they must protect the area from enemies with the help of plants that will defend and help the player achieve their goal. Get fun with the variety of plants, guns and powerups that you may find in the run. Root your way to victory!",
    imageUrl:
      "https://img.itch.zone/aW1nLzIwNjY1OTg0LnBuZw==/original/LOQrQb.png",
    developers: [getDev("Paper Boat Studios")],
    store: {
      itch: "https://vov-artik.itch.io/root-out",
    },
    release: { type: "date", value: "2025-04-11" },
    released: true,
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
    description:
      "Knight of Ice is a metroidvania game. Explore all the map to find the secrets that will lead you to a different destiny. Defeat all the monsters and fight the knights!",
    imageUrl:
      "https://img.itch.zone/aW1nLzEyNjIzMTA2LnBuZw==/original/Px%2BbqA.png",
    developers: [getDev("Carlos_7x")],
    store: {
      itch: "https://carlos-7x.itch.io/knight-of-ice-dx",
    },
    release: { type: "date", value: "2023-06-29" },
    released: true,
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
    description:
      "Metal War Heretic is a fast-paced hack n’ slash mobile game where you play as the last human trapped inside a massive war factory. The killer machines, programmed to wipe out all organic life, see you as a heretic in their metallic world. Armed with steel and fury, you must cut your way through relentless hordes of robots in every sector of the factory. Only by defeating all enemies can you activate the portal to advance to the next level. Fight, dodge, and unleash devastating combos as you push toward the factory’s core to stop the genocide threatening humanity. Do you have what it takes to be the heretic who defies the metal? ",
    imageUrl:
      "https://img.itch.zone/aW1hZ2UvMzgyOTIzNS8yMjgzOTM1OS5wbmc=/794x1000/l41ur5.png",
    developers: [getDev("Paper Boat Studios")],
    store: {
      itch: "https://vov-artik.itch.io/metal-war-heretic",
    },
    release: { type: "date", value: "2025-08-22" },
    released: true,
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/7nNxGzvXA70?autoplay=1&mute=1&start=15",
      duration: 30,
    },
  },
  {
    id: 18,
    slug: "WeirdBunnyBanana",
    title: "Weird Bunny Banana",
    description:
      "An entertaining and super challenging short platformer for the most hardcore players!",
    imageUrl:
      "https://picon.ngfiles.com/745000/flash_745318_card.png?f1600906928",
    developers: [getDev("Pixel Perfect Studios")],
    store: {
      itch: "https://ppstudiomty.itch.io/weird-bunny-banana",
    },
    release: { type: "date", value: "2020-01-01" },
    released: true,
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/XMitOZWN86U?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
  {
    id: 19,
    slug: "Blooming",
    title: "Blooming",
    description:
      "Blooming is a 2D action platformer where you wield a bow that transforms into dual blades. Explore interconnected areas in any order, defeat powerful bosses, and absorb their abilities to grow stronger.",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/2530280/library_600x900_2x.jpg?t=1728594135",
    developers: [getDev("Skyque")],
    store: {
      steam: "https://store.steampowered.com/app/2530280/Blooming/",
    },
    release: { type: "date", value: "2020-01-01" },
    released: true,
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
    description:
      "TeaKnights is a Y2K-inspired musical rail shooter set across seven tea-powered biodomes. As apprentice Camellia Jetsworth, blast enemies with TeaSetter REGALIAS, build chain combos to drive the dynamic soundtrack, face bosses, aid fellow knights, explore the overworld, and customize your look. ",
    imageUrl:
      "https://shared.steamstatic.com/store_item_assets/steam/apps/4863130/06f323498c7ddd7089f2dce4881ed7b38082d33c/library_capsule_2x.jpg?t=1782188645",
    developers: [getDev("Funky Can Creative")],
    store: {
      steam: "https://store.steampowered.com/app/4863130/TeaKnights/",
    },
    release: { type: "tbd" },
    released: false,
    clip: {
      type: "youtube",
      url: "https://www.youtube.com/embed/D-lDLs9DDyo?autoplay=1&mute=1&start=0",
      duration: 30,
    },
  },
];
