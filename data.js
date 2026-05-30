const TIMELINE_DATA = {
  mcu: {
    name: "Marvel Cinematic Universe",
    color: "#e63946",
    gradient: "linear-gradient(135deg, #e63946 0%, #1d3557 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>`, // Arc Reactor style
    events: [
      {
        id: "mcu-stones",
        title: "Creation of the Infinity Stones",
        description: "Six singularities are compressed into concentrated ingots of power during the birth of the universe.",
        inUniverseYear: -13800000000,
        inUniverseDisplay: "13.8 Billion Years Ago",
        releaseYear: 2014,
        releaseDisplay: "August 2014 (Guardians of the Galaxy)"
      },
      {
        id: "mcu-elves",
        title: "Bor Defeats the Dark Elves",
        description: "Odin's father, King Bor of Asgard, defeats Malekith and hides the Aether (Reality Stone).",
        inUniverseYear: -2988,
        inUniverseDisplay: "2988 BC",
        releaseYear: 2013,
        releaseDisplay: "November 2013 (Thor: The Dark World)"
      },
      {
        id: "mcu-giants",
        title: "Odin Defeats the Frost Giants",
        description: "Asgardian forces clash with Laufey's Frost Giants in Tønsberg, Norway, establishing a long-standing truce.",
        inUniverseYear: 965,
        inUniverseDisplay: "965 AD",
        releaseYear: 2011,
        releaseDisplay: "May 2011 (Thor)"
      },
      {
        id: "mcu-cap-origin",
        title: "Steve Rogers Becomes Captain America",
        description: "Undergoing Project Rebirth, frail Steve Rogers is injected with the Super Soldier Serum.",
        inUniverseYear: 1943,
        inUniverseDisplay: "1943",
        releaseYear: 2011.5,
        releaseDisplay: "July 2011 (Captain America: The First Avenger)"
      },
      {
        id: "mcu-cap-ice",
        title: "Captain America Crashes into the Arctic",
        description: "To save New York, Steve Rogers crashes the Valkyrie bomber into the ice, freezing himself for 70 years.",
        inUniverseYear: 1945,
        inUniverseDisplay: "1945",
        releaseYear: 2011.6,
        releaseDisplay: "July 2011 (Captain America: The First Avenger)"
      },
      {
        id: "mcu-marvel-origin",
        title: "Carol Danvers Regains Her Memories on Earth",
        description: "Kree warrior Vers crashes into a Blockbuster Video and discovers her past as Air Force pilot Carol Danvers.",
        inUniverseYear: 1995,
        inUniverseDisplay: "1995",
        releaseYear: 2019.2,
        releaseDisplay: "March 2019 (Captain Marvel)"
      },
      {
        id: "mcu-ironman-origin",
        title: "Tony Stark Builds the Mark I Suit",
        description: "Captured by the Ten Rings in a cave, Tony Stark constructs a crude exo-suit to escape, launching the age of Iron Man.",
        inUniverseYear: 2010,
        inUniverseDisplay: "2010",
        releaseYear: 2008.3,
        releaseDisplay: "May 2008 (Iron Man)"
      },
      {
        id: "mcu-thor-banished",
        title: "Thor is Banished to Earth",
        description: "Arrogant Prince Thor is stripped of Mjolnir and cast down to New Mexico by Odin to learn humility.",
        inUniverseYear: 2011,
        inUniverseDisplay: "2011",
        releaseYear: 2011.3,
        releaseDisplay: "May 2011 (Thor)"
      },
      {
        id: "mcu-avengers-assemble",
        title: "The Battle of New York",
        description: "Loki leads a Chitauri army through a wormhole, forcing the Avengers to assemble for the first time.",
        inUniverseYear: 2012,
        inUniverseDisplay: "2012",
        releaseYear: 2012.3,
        releaseDisplay: "May 2012 (The Avengers)"
      },
      {
        id: "mcu-shield-fall",
        title: "The Fall of S.H.I.E.L.D.",
        description: "Captain America and Black Widow discover HYDRA has infiltrated S.H.I.E.L.D. since its inception, leading to its collapse.",
        inUniverseYear: 2014,
        inUniverseDisplay: "2014",
        releaseYear: 2014.2,
        releaseDisplay: "April 2014 (Captain America: The Winter Soldier)"
      },
      {
        id: "mcu-guardians-form",
        title: "The Guardians of the Galaxy Form",
        description: "A group of space misfits escape the Kyln prison and unite to stop Ronan from destroying Xandar.",
        inUniverseYear: 2014.5,
        inUniverseDisplay: "2014",
        releaseYear: 2014.6,
        releaseDisplay: "August 2014 (Guardians of the Galaxy)"
      },
      {
        id: "mcu-ego",
        title: "Ego Tries to Consume the Universe",
        description: "Star-Lord's Celestial father, Ego, attempts to activate seedlings across planets to absorb all life.",
        inUniverseYear: 2014.8,
        inUniverseDisplay: "2014",
        releaseYear: 2017.3,
        releaseDisplay: "May 2017 (Guardians of the Galaxy Vol. 2)"
      },
      {
        id: "mcu-antman",
        title: "Scott Lang Becomes Ant-Man",
        description: "Ex-con Scott Lang is recruited by Hank Pym to steal the Yellowjacket suit from Pym Technologies.",
        inUniverseYear: 2015.5,
        inUniverseDisplay: "2015",
        releaseYear: 2015.5,
        releaseDisplay: "July 2015 (Ant-Man)"
      },
      {
        id: "mcu-sokovia",
        title: "The Battle of Sokovia",
        description: "The rogue AI Ultron lifts a city into the sky to trigger an extinction-level impact, countered by the Avengers.",
        inUniverseYear: 2015,
        inUniverseDisplay: "2015",
        releaseYear: 2015.3,
        releaseDisplay: "May 2015 (Avengers: Age of Ultron)"
      },
      {
        id: "mcu-spidey-recruit",
        title: "Peter Parker is Recruited by Tony Stark",
        description: "Tony Stark travels to Queens to recruit fifteen-year-old Peter Parker for the conflict in Germany.",
        inUniverseYear: 2016.1,
        inUniverseDisplay: "2016",
        releaseYear: 2016.2,
        releaseDisplay: "May 2016 (Captain America: Civil War)"
      },
      {
        id: "mcu-civil-war",
        title: "The Avengers Fracture in Civil War",
        description: "Clashing over the Sokovia Accords, Tony Stark and Steve Rogers lead opposing factions of Avengers in Germany.",
        inUniverseYear: 2016,
        inUniverseDisplay: "2016",
        releaseYear: 2016.3,
        releaseDisplay: "May 2016 (Captain America: Civil War)"
      },
      {
        id: "mcu-redroom",
        title: "The Red Room is Destroyed",
        description: "Natasha Romanoff reunites with her spy family to take down Dreykov and liberate the remaining Widows.",
        inUniverseYear: 2016.4,
        inUniverseDisplay: "2016",
        releaseYear: 2021.5,
        releaseDisplay: "July 2021 (Black Widow)"
      },
      {
        id: "mcu-vulture",
        title: "Spider-Man Battles Vulture at Coney Island",
        description: "Peter Parker rejects the high-tech Iron Spider suit to stop Adrian Toomes from hijacking an Avengers cargo plane.",
        inUniverseYear: 2016.7,
        inUniverseDisplay: "2016",
        releaseYear: 2017.5,
        releaseDisplay: "July 2017 (Spider-Man: Homecoming)"
      },
      {
        id: "mcu-strange-origin",
        title: "Stephen Strange Learns the Mystic Arts",
        description: "After a devastating car crash, brilliant neurosurgeon Stephen Strange travels to Kamar-Taj and meets the Ancient One.",
        inUniverseYear: 2016.8,
        inUniverseDisplay: "2016",
        releaseYear: 2016.8,
        releaseDisplay: "November 2016 (Doctor Strange)"
      },
      {
        id: "mcu-ragnarok",
        title: "The Destruction of Asgard",
        description: "To defeat the Goddess of Death Hela, Thor and Loki trigger Ragnarok, destroying their homeworld Asgard.",
        inUniverseYear: 2017.8,
        inUniverseDisplay: "2017",
        releaseYear: 2017.8,
        releaseDisplay: "November 2017 (Thor: Ragnarok)"
      },
      {
        id: "mcu-wasp-quantum",
        title: "Janet van Dyne Rescued from Quantum Realm",
        description: "Hank Pym travels deep into the microverse to extract his wife, Janet, after 30 years of isolation.",
        inUniverseYear: 2018.1,
        inUniverseDisplay: "2018",
        releaseYear: 2018.5,
        releaseDisplay: "July 2018 (Ant-Man and the Wasp)"
      },
      {
        id: "mcu-snap",
        title: "Thanos Snaps His Fingers",
        description: "Acquiring all six Infinity Stones, Thanos executes the Decimation, wiping out half of all life in the universe.",
        inUniverseYear: 2018,
        inUniverseDisplay: "2018",
        releaseYear: 2018.3,
        releaseDisplay: "April 2018 (Avengers: Infinity War)"
      },
      {
        id: "mcu-blip",
        title: "The Time Heist and The Blip Reversed",
        description: "The surviving Avengers travel through the Quantum Realm to gather the stones, and Hulk snaps everyone back.",
        inUniverseYear: 2023,
        inUniverseDisplay: "2023",
        releaseYear: 2019.3,
        releaseDisplay: "April 2019 (Avengers: Endgame)"
      },
      {
        id: "mcu-loki-tree",
        title: "Loki Becomes Keeper of the Multiverse",
        description: "Loki sacrifices his freedom to weave the dying timelines together into a cosmic tree at the end of time.",
        inUniverseYear: 2023.9,
        inUniverseDisplay: "2023",
        releaseYear: 2023.8,
        releaseDisplay: "November 2023 (Loki Season 2)"
      },
      {
        id: "mcu-westview",
        title: "The Anomaly at Westview",
        description: "Overcome by grief, Wanda Maximoff alters reality in a small town, transforming into the Scarlet Witch.",
        inUniverseYear: 2023.8,
        inUniverseDisplay: "2023",
        releaseYear: 2021.1,
        releaseDisplay: "January 2021 (WandaVision)"
      },
      {
        id: "mcu-sam-cap",
        title: "Sam Wilson Addresses the GRC",
        description: "Sam Wilson accepts the shield and costume, officially introducing himself as Captain America.",
        inUniverseYear: 2024.1,
        inUniverseDisplay: "2024",
        releaseYear: 2021.2,
        releaseDisplay: "April 2021 (The Falcon and the Winter Soldier)"
      },
      {
        id: "mcu-wenwu",
        title: "Xu Wenwu Passes Down the Ten Rings",
        description: "The leader of the Ten Rings sacrifices himself to save his son Shang-Chi, transferring the artifacts before his death.",
        inUniverseYear: 2024.2,
        inUniverseDisplay: "2024",
        releaseYear: 2021.7,
        releaseDisplay: "September 2021 (Shang-Chi)"
      },
      {
        id: "mcu-shangchi-dweller",
        title: "Shang-Chi Defeats the Dweller-in-Darkness",
        description: "Using the Ten Rings and the Great Protector dragon, Shang-Chi destroys the ancient soul-devouring beast in Ta Lo.",
        inUniverseYear: 2024.3,
        inUniverseDisplay: "2024",
        releaseYear: 2021.6,
        releaseDisplay: "September 2021 (Shang-Chi and the Legend of the Ten Rings)"
      },
      {
        id: "mcu-tiamut",
        title: "Tiamut is Petrified in the Ocean",
        description: "The Eternals unite to form the Uni-Mind, turning the emerging Celestial Tiamut into solid marble.",
        inUniverseYear: 2024.4,
        inUniverseDisplay: "2024",
        releaseYear: 2021.8,
        releaseDisplay: "November 2021 (Eternals)"
      },
      {
        id: "mcu-mysterio",
        title: "Spider-Man Battles Mysterio in London",
        description: "Peter Parker defeats Quentin Beck (Mysterio), but his secret identity is exposed to the entire world.",
        inUniverseYear: 2024.5,
        inUniverseDisplay: "2024",
        releaseYear: 2019.5,
        releaseDisplay: "July 2019 (Spider-Man: Far From Home)"
      },
      {
        id: "mcu-multiverse-spell",
        title: "Peter Parker's Spell Breaks the Multiverse",
        description: "Doctor Strange's memory-erasing spell is corrupted, pulling villains from other dimensions into Earth-616.",
        inUniverseYear: 2024.9,
        inUniverseDisplay: "2024",
        releaseYear: 2021.9,
        releaseDisplay: "December 2021 (Spider-Man: No Way Home)"
      },
      {
        id: "mcu-gorr",
        title: "Gorr is Defeated at the Gate of Eternity",
        description: "Gorr uses Stormbreaker to reach Eternity, but is convinced by Thor to wish for his daughter's resurrection instead of god slaughter.",
        inUniverseYear: 2025.7,
        inUniverseDisplay: "2025",
        releaseYear: 2022.5,
        releaseDisplay: "July 2022 (Thor: Love and Thunder)"
      },
      {
        id: "mcu-shuri-panther",
        title: "Shuri Becomes the New Black Panther",
        description: "Following T'Challa's death and a war with Talokan, Shuri synthesizes a new Heart-Shaped Herb to protect Wakanda.",
        inUniverseYear: 2025,
        inUniverseDisplay: "2025",
        releaseYear: 2022.8,
        releaseDisplay: "November 2022 (Black Panther: Wakanda Forever)"
      },
      {
        id: "mcu-highevolutionary",
        title: "High Evolutionary is Defeated",
        description: "The Guardians of the Galaxy rescue cages of modified creatures and dismantle the mad scientist's flagship.",
        inUniverseYear: 2026.2,
        inUniverseDisplay: "2026",
        releaseYear: 2023.3,
        releaseDisplay: "May 2023 (Guardians of the Galaxy Vol. 3)"
      },
      {
        id: "mcu-deadpool-wolverine",
        title: "Deadpool and Wolverine Save the Timeline",
        description: "Wade Wilson recruits a depressed Wolverine variant to prevent his universe from being pruned by the TVA.",
        inUniverseYear: 2026.5,
        inUniverseDisplay: "2026",
        releaseYear: 2024.5,
        releaseDisplay: "July 2024 (Deadpool & Wolverine)"
      }
    ]
  },
  starwars: {
    name: "Star Wars",
    color: "#2ec4b6",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 22h20L12 2z"/><circle cx="12" cy="13" r="3"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="21" x2="6" y2="3"/><line x1="18" y1="21" x2="18" y2="3"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="16" x2="18" y2="16"/></svg>`, // Lightsaber cross style
    events: [
      {
        id: "sw-republic",
        title: "Founding of the Old Republic",
        description: "Jedi and early galactic systems unite under a democratic constitution, initiating millennia of peace.",
        inUniverseYear: -25000,
        inUniverseDisplay: "25,000 BBY",
        releaseYear: 1977,
        releaseDisplay: "May 1977"
      },
      {
        id: "sw-sith-formed",
        title: "The Sith Order is Formed",
        description: "Rogue Jedi break away to exploit the Dark Side of the Force, initiating the Hundred-Year Darkness.",
        inUniverseYear: -7000,
        inUniverseDisplay: "7,000 BBY",
        releaseYear: 1980,
        releaseDisplay: "May 1980"
      },
      {
        id: "sw-anakin-born",
        title: "Birth of Anakin Skywalker",
        description: "Conceived by the midi-chlorians, Anakin Skywalker is born as a slave on the desert world of Tatooine.",
        inUniverseYear: -41,
        inUniverseDisplay: "41 BBY",
        releaseYear: 1999,
        releaseDisplay: "May 1999 (Star Wars: Episode I)"
      },
      {
        id: "sw-podrace",
        title: "Anakin Skywalker Wins Boonta Eve race",
        description: "Nine-year-old Anakin wins the dangerous podrace, securing his freedom from Watto.",
        inUniverseYear: -32.1,
        inUniverseDisplay: "32 BBY",
        releaseYear: 1999.4,
        releaseDisplay: "May 1999 (Star Wars: Episode I - The Phantom Menace)"
      },
      {
        id: "sw-maul-slay",
        title: "Darth Maul Kills Qui-Gon Jinn",
        description: "The Sith apprentice slays Qui-Gon on Naboo, before Obi-Wan Kenobi slices him in half.",
        inUniverseYear: -31.9,
        inUniverseDisplay: "32 BBY",
        releaseYear: 1999.5,
        releaseDisplay: "May 1999 (Star Wars: Episode I - The Phantom Menace)"
      },
      {
        id: "sw-naboo",
        title: "The Invasion of Naboo",
        description: "The Trade Federation blockades Naboo. Qui-Gon Jinn and Obi-Wan Kenobi rescue Queen Amidala and find Anakin.",
        inUniverseYear: -32,
        inUniverseDisplay: "32 BBY",
        releaseYear: 1999.3,
        releaseDisplay: "May 1999 (Star Wars: Episode I - The Phantom Menace)"
      },
      {
        id: "sw-jangofett",
        title: "Jango Fett is Slain on Geonosis",
        description: "Mace Windu deflects blaster bolts and decapitates the Mandalorian bounty hunter in the Petranaki Arena.",
        inUniverseYear: -22.1,
        inUniverseDisplay: "22 BBY",
        releaseYear: 2002.4,
        releaseDisplay: "May 2002 (Star Wars: Episode II - Attack of the Clones)"
      },
      {
        id: "sw-clone-wars",
        title: "The Battle of Geonosis",
        description: "The Grand Army of the Republic clashes with the Separatists, starting the galaxy-spanning Clone Wars.",
        inUniverseYear: -22,
        inUniverseDisplay: "22 BBY",
        releaseYear: 2002.3,
        releaseDisplay: "May 2002 (Star Wars: Episode II - Attack of the Clones)"
      },
      {
        id: "sw-ahsoka-leaves",
        title: "Ahsoka Tano Leaves the Jedi Order",
        description: "Framed for a bombing, Ahsoka is cleared but chooses to leave the Order after losing faith in the Council.",
        inUniverseYear: -20,
        inUniverseDisplay: "20 BBY",
        releaseYear: 2013,
        releaseDisplay: "March 2013 (Clone Wars Season 5)"
      },
      {
        id: "sw-luke-leia-born",
        title: "Birth of Luke and Leia",
        description: "Padmé Amidala gives birth to twins in secret on Polis Massa before passing away.",
        inUniverseYear: -19.1,
        inUniverseDisplay: "19 BBY",
        releaseYear: 2005.4,
        releaseDisplay: "May 2005 (Star Wars: Episode III - Revenge of the Sith)"
      },
      {
        id: "sw-order-66",
        title: "Execution of Order 66",
        description: "Supreme Chancellor Palpatine commands clone troopers to execute their Jedi generals, declaring the Galactic Empire.",
        inUniverseYear: -19,
        inUniverseDisplay: "19 BBY",
        releaseYear: 2005.3,
        releaseDisplay: "May 2005 (Star Wars: Episode III - Revenge of the Sith)"
      },
      {
        id: "sw-galen-captured",
        title: "Galen Erso is Captured by Krennic",
        description: "Director Krennic tracks down the Erso family on Lah'mu, capturing Galen and killing his wife Lyra.",
        inUniverseYear: -13.5,
        inUniverseDisplay: "13 BBY",
        releaseYear: 2016.7,
        releaseDisplay: "December 2016 (Rogue One)"
      },
      {
        id: "sw-han-escape",
        title: "Han Solo Escapes Corellia",
        description: "Han Solo escapes the slums of Corellia, joins the Imperial Academy, and eventually meets Chewbacca.",
        inUniverseYear: -13,
        inUniverseDisplay: "13 BBY",
        releaseYear: 2018.3,
        releaseDisplay: "May 2018 (Solo: A Star Wars Story)"
      },
      {
        id: "sw-kesselrun",
        title: "The Kessel Run in 12 Parsecs",
        description: "Han Solo navigates the Millennium Falcon through the Akkadese Maelstrom to escape Imperial forces.",
        inUniverseYear: -10,
        inUniverseDisplay: "10 BBY",
        releaseYear: 2018.4,
        releaseDisplay: "May 2018 (Solo: A Star Wars Story)"
      },
      {
        id: "sw-scarif",
        title: "The Battle of Scarif",
        description: "Jyn Erso leads a rogue band of rebels to transmit the Death Star design schematics from an Imperial base.",
        inUniverseYear: -0.1,
        inUniverseDisplay: "0.1 BBY",
        releaseYear: 2016.9,
        releaseDisplay: "December 2016 (Rogue One: A Star Wars Story)"
      },
      {
        id: "sw-yavin",
        title: "The Battle of Yavin",
        description: "Luke Skywalker fires a proton torpedo into the exhaust port, destroying the first Death Star.",
        inUniverseYear: 0,
        inUniverseDisplay: "0 BBY/ABY",
        releaseYear: 1977.3,
        releaseDisplay: "May 1977 (Star Wars: Episode IV - A New Hope)"
      },
      {
        id: "sw-hoth",
        title: "The Battle of Hoth",
        description: "Imperial walkers assault the Rebel base on Hoth, forcing Luke Skywalker to travel to Dagobah for Jedi training.",
        inUniverseYear: 3,
        inUniverseDisplay: "3 ABY",
        releaseYear: 1980.3,
        releaseDisplay: "May 1980 (Star Wars: Episode V - The Empire Strikes Back)"
      },
      {
        id: "sw-sailbarge",
        title: "Jabba's Sail Barge is Destroyed",
        description: "Luke Skywalker uses his new green lightsaber to free Han and Leia, blowing up Jabba the Hutt's luxury vessel.",
        inUniverseYear: 4.1,
        inUniverseDisplay: "4 ABY",
        releaseYear: 1983.4,
        releaseDisplay: "May 1983 (Star Wars: Episode VI - Return of the Jedi)"
      },
      {
        id: "sw-endor",
        title: "The Battle of Endor",
        description: "Rebel forces blow up the shield generator, Luke confronts Darth Vader, and the second Death Star is destroyed.",
        inUniverseYear: 4,
        inUniverseDisplay: "4 ABY",
        releaseYear: 1983.3,
        releaseDisplay: "May 1983 (Star Wars: Episode VI - Return of the Jedi)"
      },
      {
        id: "sw-jakku",
        title: "The Battle of Jakku",
        description: "The final massive showdown between the New Republic and the remnants of the Galactic Empire, leaving the planet littered with starship wreckage.",
        inUniverseYear: 5,
        inUniverseDisplay: "5 ABY",
        releaseYear: 2015.8,
        releaseDisplay: "December 2015 (Star Wars: Episode VII)"
      },
      {
        id: "sw-mandalorian",
        title: "Din Djarin Meets Grogu",
        description: "A lone Mandalorian bounty hunter is hired to retrieve a mysterious child, choosing to protect him instead.",
        inUniverseYear: 9,
        inUniverseDisplay: "9 ABY",
        releaseYear: 2019.8,
        releaseDisplay: "November 2019 (The Mandalorian - Season 1)"
      },
      {
        id: "sw-jedi-temple-fall",
        title: "Luke Skywalker's Temple Falls",
        description: "Ben Solo is corrupted by Snoke, burns down the Jedi training temple, and assumes the title Kylo Ren.",
        inUniverseYear: 28,
        inUniverseDisplay: "28 ABY",
        releaseYear: 2017.7,
        releaseDisplay: "December 2017 (Star Wars: Episode VIII)"
      },
      {
        id: "sw-starkiller",
        title: "Starkiller Base Firing and Destruction",
        description: "The First Order obliterates the New Republic senate on Hosnian Prime; Resistance forces subsequently destroy the base.",
        inUniverseYear: 34,
        inUniverseDisplay: "34 ABY",
        releaseYear: 2015.9,
        releaseDisplay: "December 2015 (Star Wars: Episode VII - The Force Awakens)"
      },
      {
        id: "sw-crait",
        title: "The Battle of Crait",
        description: "Luke Skywalker projects his image across the galaxy to stall Kylo Ren, allowing the Resistance remnants to escape.",
        inUniverseYear: 34.1,
        inUniverseDisplay: "34 ABY",
        releaseYear: 2017.9,
        releaseDisplay: "December 2017 (Star Wars: Episode VIII - The Last Jedi)"
      },
      {
        id: "sw-exegol",
        title: "The Battle of Exegol",
        description: "Rey defeats the cloned Emperor Palpatine with the aid of the spirits of past Jedi, ending the Sith's final return.",
        inUniverseYear: 35,
        inUniverseDisplay: "35 ABY",
        releaseYear: 2019.9,
        releaseDisplay: "December 2019 (Star Wars: Episode IX - The Rise of Skywalker)"
      },
      {
        id: "sw-grievous-defeated",
        title: "Obi-Wan Kenobi Defeats General Grievous",
        description: "Obi-Wan tracks the cyborg general to Utapau, defeating him in single combat and shooting his exposed organs.",
        inUniverseYear: -19.2,
        inUniverseDisplay: "19 BBY",
        releaseYear: 2005.35,
        releaseDisplay: "May 2005 (Star Wars: Episode III)"
      },
      {
        id: "sw-han-death",
        title: "Kylo Ren Kills Han Solo",
        description: "Kylo Ren stabs his father Han Solo with his crossguard lightsaber, letting him fall into the abyss of Starkiller Base.",
        inUniverseYear: 34.0,
        inUniverseDisplay: "34 ABY",
        releaseYear: 2015.85,
        releaseDisplay: "December 2015 (Star Wars: Episode VII)"
      },
      {
        id: "sw-leia-captured",
        title: "Princess Leia is Captured by Vader",
        description: "Darth Vader storms the consular ship Tantive IV, capturing Princess Leia as she hides the Death Star plans.",
        inUniverseYear: 0.001,
        inUniverseDisplay: "0 BBY",
        releaseYear: 1977.1,
        releaseDisplay: "May 1977 (Star Wars: Episode IV)"
      },
      {
        id: "sw-gungan-battle",
        title: "The Battle of the Gungan Plains",
        description: "The Gungan Grand Army fights a diversionary battle against Trade Federation battle droids on Naboo.",
        inUniverseYear: -32.02,
        inUniverseDisplay: "32 BBY",
        releaseYear: 1999.35,
        releaseDisplay: "May 1999 (Star Wars: Episode I)"
      },
      {
        id: "sw-mustafar-duel",
        title: "Obi-Wan Defeats Vader on Mustafar",
        description: "Obi-Wan Kenobi severs Anakin Skywalker's remaining limbs on the volcanic planet Mustafar, leaving him to burn.",
        inUniverseYear: -19.05,
        inUniverseDisplay: "19 BBY",
        releaseYear: 2005.38,
        releaseDisplay: "May 2005 (Star Wars: Episode III)"
      }
    ]
  },
  harrypotter: {
    name: "Harry Potter",
    color: "#ffb703",
    gradient: "linear-gradient(135deg, #1a0933 0%, #3e1b70 50%, #6f3aa6 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M5 12h14M8 5l8 14"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 1.5 0 2.5-1 3.5 1.5 1 2 2.5 2 4a3 3 0 0 1-3 3M7 21h10"/></svg>`, // Wand style
    events: [
      {
        id: "hp-founded",
        title: "Founding of Hogwarts",
        description: "Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin construct the school to teach young wizards.",
        inUniverseYear: 990,
        inUniverseDisplay: "c. 990 AD",
        releaseYear: 2001,
        releaseDisplay: "November 2001"
      },
      {
        id: "hp-tournament",
        title: "Triwizard Tournament Established",
        description: "A friendly competition between Hogwarts, Beauxbatons, and Durmstrang is created to foster international wizard relations.",
        inUniverseYear: 1294,
        inUniverseDisplay: "c. 1294 AD",
        releaseYear: 2005,
        releaseDisplay: "November 2005"
      },
      {
        id: "hp-flamel-stone",
        title: "Nicolas Flamel Creates Sorcerer's Stone",
        description: "The alchemist successfully synthesizes the red stone capable of producing the Elixir of Life.",
        inUniverseYear: 1350,
        inUniverseDisplay: "c. 1350 AD",
        releaseYear: 2001.2,
        releaseDisplay: "November 2001 (Harry Potter and the Sorcerer's Stone)"
      },
      {
        id: "hp-chamber-first",
        title: "The Chamber of Secrets is First Opened",
        description: "Sixteen-year-old Tom Riddle opens Slytherin's chamber, releasing the Basilisk and causing the death of Myrtle Warren.",
        inUniverseYear: 1943,
        inUniverseDisplay: "1943",
        releaseYear: 2002.8,
        releaseDisplay: "November 2002 (Harry Potter and the Chamber of Secrets)"
      },
      {
        id: "hp-grindelwald-defeat",
        title: "Dumbledore Defeats Grindelwald",
        description: "Albus Dumbledore duels dark wizard Gellert Grindelwald, winning the Elder Wand and ending the global wizarding war.",
        inUniverseYear: 1945,
        inUniverseDisplay: "1945",
        releaseYear: 2022.3,
        releaseDisplay: "April 2022 (Fantastic Beasts: The Secrets of Dumbledore)"
      },
      {
        id: "hp-map-created",
        title: "The Marauder's Map is Created",
        description: "Remus Lupin, Peter Pettigrew, Sirius Black, and James Potter chart the castle's secret passageways.",
        inUniverseYear: 1975,
        inUniverseDisplay: "c. 1975",
        releaseYear: 2004,
        releaseDisplay: "June 2004 (Harry Potter and the Prisoner of Azkaban)"
      },
      {
        id: "hp-parents-die",
        title: "Lord Voldemort Attacks Godric's Hollow",
        description: "Voldemort murders Lily and James Potter. His Killing Curse rebounds on baby Harry, leaving a lightning scar.",
        inUniverseYear: 1981,
        inUniverseDisplay: "October 1981",
        releaseYear: 2001.7,
        releaseDisplay: "November 2001 (Harry Potter and the Sorcerer's Stone)"
      },
      {
        id: "hp-stone",
        title: "Harry Potter Enters Hogwarts",
        description: "Harry Potter turns eleven, discovers he is a wizard, and protects the Sorcerer's Stone from Quirrell and Voldemort.",
        inUniverseYear: 1991,
        inUniverseDisplay: "1991",
        releaseYear: 2001.8,
        releaseDisplay: "November 2001 (Harry Potter and the Sorcerer's Stone)"
      },
      {
        id: "hp-snitch-catch",
        title: "Harry Catches Snitch in Mouth",
        description: "In his debut Quidditch match against Slytherin, Harry catches the Snitch by accidentally swallowing it.",
        inUniverseYear: 1991.9,
        inUniverseDisplay: "1991",
        releaseYear: 2001.9,
        releaseDisplay: "November 2001 (Harry Potter and the Sorcerer's Stone)"
      },
      {
        id: "hp-chamber",
        title: "The Chamber of Secrets is Reopened",
        description: "Ginny Weasley is possessed by Riddle's diary, opening the chamber again. Harry slays the Basilisk with Gryffindor's sword.",
        inUniverseYear: 1992,
        inUniverseDisplay: "1992",
        releaseYear: 2002.9,
        releaseDisplay: "November 2002 (Harry Potter and the Chamber of Secrets)"
      },
      {
        id: "hp-dobby-free",
        title: "Harry Potter Frees Dobby",
        description: "Harry tricks Lucius Malfoy into giving Dobby a sock hidden inside Riddle's ruined diary, liberating the House-Elf.",
        inUniverseYear: 1993.1,
        inUniverseDisplay: "1993",
        releaseYear: 2002.95,
        releaseDisplay: "November 2002 (Harry Potter and the Chamber of Secrets)"
      },
      {
        id: "hp-timeturner",
        title: "Hermione Granger Uses Time-Turner",
        description: "Hermione and Harry go back 3 hours in time to rescue Buckbeak and Sirius Black from the Dementor's Kiss.",
        inUniverseYear: 1993.8,
        inUniverseDisplay: "1993",
        releaseYear: 2004.2,
        releaseDisplay: "June 2004 (Harry Potter and the Prisoner of Azkaban)"
      },
      {
        id: "hp-lupin-werewolf",
        title: "Professor Lupin Transforms",
        description: "Lupin forgets his Wolfsbane Potion, transforming into a werewolf under the full moon and allowing Pettigrew to escape.",
        inUniverseYear: 1994.0,
        inUniverseDisplay: "1994",
        releaseYear: 2004.3,
        releaseDisplay: "June 2004 (Harry Potter and the Prisoner of Azkaban)"
      },
      {
        id: "hp-sirius-escape",
        title: "Sirius Black Escapes Azkaban",
        description: "Believed to be a mass murderer, Sirius Black escapes the prison to hunt down Peter Pettigrew at Hogwarts.",
        inUniverseYear: 1993,
        inUniverseDisplay: "1993",
        releaseYear: 2004.5,
        releaseDisplay: "June 2004 (Harry Potter and the Prisoner of Azkaban)"
      },
      {
        id: "hp-goblet-lit",
        title: "The Goblet of Fire Selects Champions",
        description: "The ancient wooden cup selects Fleur, Viktor, Cedric, and unexpectedly, Harry Potter.",
        inUniverseYear: 1994.2,
        inUniverseDisplay: "1994",
        releaseYear: 2005,
        releaseDisplay: "November 2005 (Harry Potter and the Goblet of Fire)"
      },
      {
        id: "hp-crouch-exposed",
        title: "Barty Crouch Jr. is Exposed",
        description: "The Polyjuice Potion wears off, revealing that the Death Eater Crouch Jr. was posing as Mad-Eye Moody.",
        inUniverseYear: 1995.0,
        inUniverseDisplay: "1995",
        releaseYear: 2005.95,
        releaseDisplay: "November 2005 (Harry Potter and the Goblet of Fire)"
      },
      {
        id: "hp-voldy-returns",
        title: "Lord Voldemort Returns",
        description: "The Triwizard Tournament ends in tragedy as Cedric Diggory is killed and Voldemort regenerates using Harry's blood.",
        inUniverseYear: 1994.9,
        inUniverseDisplay: "June 1994",
        releaseYear: 2005.9,
        releaseDisplay: "November 2005 (Harry Potter and the Goblet of Fire)"
      },
      {
        id: "hp-da-formed",
        title: "Dumbledore's Army is Formed",
        description: "Rebelling against Dolores Umbridge's theoretical teaching, Harry trains students in defensive magic in the Room of Requirement.",
        inUniverseYear: 1995.8,
        inUniverseDisplay: "1995",
        releaseYear: 2007.5,
        releaseDisplay: "July 2007 (Harry Potter and the Order of the Phoenix)"
      },
      {
        id: "hp-arthur-attacked",
        title: "Arthur Weasley is Attacked by Nagini",
        description: "Arthur is bitten by Voldemort's snake while guarding the prophecy, witnessed by Harry in a vision.",
        inUniverseYear: 1995.9,
        inUniverseDisplay: "1995",
        releaseYear: 2007.1,
        releaseDisplay: "July 2007 (Harry Potter and the Order of the Phoenix)"
      },
      {
        id: "hp-weasley-escape",
        title: "Fred & George Escape Hogwarts",
        description: "The twins set off a massive display of Wildfire Whiz-bangs to disrupt O.W.L. exams and fly away on brooms.",
        inUniverseYear: 1996.2,
        inUniverseDisplay: "1996",
        releaseYear: 2007.2,
        releaseDisplay: "July 2007 (Harry Potter and the Order of the Phoenix)"
      },
      {
        id: "hp-sirius-death",
        title: "Battle of Department of Mysteries",
        description: "Harry and friends clash with Death Eaters, culminating in Sirius Black being pushed into the Veil by Bellatrix.",
        inUniverseYear: 1996.5,
        inUniverseDisplay: "1996",
        releaseYear: 2007.4,
        releaseDisplay: "July 2007 (Harry Potter and the Order of the Phoenix)"
      },
      {
        id: "hp-astronomy-battle",
        title: "The Battle of the Astronomy Tower",
        description: "Death Eaters infiltrate Hogwarts. Severus Snape kills Albus Dumbledore atop the tower.",
        inUniverseYear: 1997.0,
        inUniverseDisplay: "1997",
        releaseYear: 2009.5,
        releaseDisplay: "July 2009 (Harry Potter and the Half-Blood Prince)"
      },
      {
        id: "hp-dumbledore-dies",
        title: "The Death of Albus Dumbledore",
        description: "Severus Snape casts Avada Kedavra on Dumbledore atop the Astronomy Tower, carrying out a pre-arranged plan.",
        inUniverseYear: 1997.1,
        inUniverseDisplay: "June 1997",
        releaseYear: 2009.55,
        releaseDisplay: "July 2009 (Harry Potter and the Half-Blood Prince)"
      },
      {
        id: "hp-wedding-escape",
        title: "Trio Escapes Bill & Fleur's Wedding",
        description: "Death Eaters crash the wedding reception as the Ministry falls; Harry, Ron, and Hermione disapparate to London.",
        inUniverseYear: 1997.7,
        inUniverseDisplay: "1997",
        releaseYear: 2010.4,
        releaseDisplay: "November 2010 (Harry Potter and the Deathly Hallows – Part 1)"
      },
      {
        id: "hp-locket-destroyed",
        title: "Ron Weasley Destroys Slytherin's Locket",
        description: "Using Gryffindor's Sword, Ron overcomes the locket's visions and destroys Voldemort's Horcrux.",
        inUniverseYear: 1997.9,
        inUniverseDisplay: "1997",
        releaseYear: 2010.5,
        releaseDisplay: "November 2010 (Harry Potter and the Deathly Hallows – Part 1)"
      },
      {
        id: "hp-dobby-death",
        title: "Dobby is Killed by Bellatrix's Knife",
        description: "Dobby rescues the prisoners from Malfoy Manor, but is struck by Bellatrix Lestrange's thrown silver dagger.",
        inUniverseYear: 1998.0,
        inUniverseDisplay: "1998",
        releaseYear: 2011.0,
        releaseDisplay: "July 2011 (Harry Potter and the Deathly Hallows – Part 2)"
      },
      {
        id: "hp-dragon-escape",
        title: "Escape from Gringotts on a Dragon",
        description: "Harry, Ron, and Hermione break into Bellatrix Lestrange's vault and escape riding a blind Ukrainian Ironbelly.",
        inUniverseYear: 1998.1,
        inUniverseDisplay: "1998",
        releaseYear: 2011.1,
        releaseDisplay: "July 2011 (Harry Potter and the Deathly Hallows – Part 2)"
      },
      {
        id: "hp-nagini-death",
        title: "Neville Decapitates Nagini",
        description: "Neville Longbottom pulls Gryffindor's Sword from the Sorting Hat and slices off Nagini's head, destroying the last Horcrux.",
        inUniverseYear: 1998.2,
        inUniverseDisplay: "1998",
        releaseYear: 2011.4,
        releaseDisplay: "July 2011 (Harry Potter and the Deathly Hallows – Part 2)"
      },
      {
        id: "hp-battle-hogwarts",
        title: "The Battle of Hogwarts",
        description: "Voldemort's forces assault Hogwarts. Harry destroys the remaining Horcruxes and defeats Voldemort once and for all.",
        inUniverseYear: 1998.3,
        inUniverseDisplay: "May 1998",
        releaseYear: 2011.5,
        releaseDisplay: "July 2011 (Harry Potter and the Deathly Hallows – Part 2)"
      },
      {
        id: "hp-epilogue",
        title: "The Nineteen Years Later Epilogue",
        description: "An adult Harry, Ginny, Ron, and Hermione watch their children board the Hogwarts Express at Platform 9¾.",
        inUniverseYear: 2017,
        inUniverseDisplay: "September 2017",
        releaseYear: 2011.6,
        releaseDisplay: "July 2011 (Harry Potter and the Deathly Hallows – Part 2)"
      }
    ]
  },
  lotr: {
    name: "Lord of the Rings",
    color: "#d4a373",
    gradient: "linear-gradient(135deg, #14213d 0%, #4a5759 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="9"/></svg>`, // Ring style
    events: [
      {
        id: "lotr-creation",
        title: "Creation of Arda",
        description: "Eru Ilúvatar and the Ainur sing the Great Music, bringing the universe and the world of Arda into existence.",
        inUniverseYear: -1000000,
        inUniverseDisplay: "Before the Ages",
        releaseYear: 2001,
        releaseDisplay: "December 2001"
      },
      {
        id: "lotr-elves-awake",
        title: "Awakening of the Elves",
        description: "The Elves, the Firstborn of Ilúvatar, awaken by the bay of Cuiviénen under the stars of Varda.",
        inUniverseYear: -500000,
        inUniverseDisplay: "Years of the Trees",
        releaseYear: 2001.1,
        releaseDisplay: "December 2001"
      },
      {
        id: "lotr-ring-forged",
        title: "Sauron Forges the One Ring",
        description: "Sauron secretly pours his cruelty and malice into the One Ring in the fires of Mount Doom in Mordor.",
        inUniverseYear: -4841,
        inUniverseDisplay: "c. 1600 Second Age",
        releaseYear: 2001.2,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-sauron-duel",
        title: "Sauron Kills Elendil and Gil-galad",
        description: "Sauron defeats the leaders of Elves and Men, but Isildur subsequently uses his father's broken sword Narsil to cut the Ring from Sauron's hand.",
        inUniverseYear: -3241.1,
        inUniverseDisplay: "3441 Second Age",
        releaseYear: 2001.25,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-last-alliance",
        title: "The Battle of the Last Alliance",
        description: "Elves and Men march against Mordor. Isildur cuts the Ring from Sauron's hand, ending the Second Age.",
        inUniverseYear: -3241,
        inUniverseDisplay: "3441 Second Age",
        releaseYear: 2001.3,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-smeagol",
        title: "Smeagol Claims the One Ring",
        description: "Smeagol strangles his cousin Deagol to claim the Ring, retreating into the Misty Mountains and transforming into Gollum.",
        inUniverseYear: -556,
        inUniverseDisplay: "2463 Third Age",
        releaseYear: 2003.9,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-bilbo-bday",
        title: "Bilbo Baggins' 111th Birthday Party",
        description: "Bilbo celebrates his birthday in the Shire, putting on the Ring and disappearing before leaving it for Frodo.",
        inUniverseYear: -17,
        inUniverseDisplay: "3001 Third Age",
        releaseYear: 2001.4,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-whitecouncil",
        title: "White Council Expels the Necromancer",
        description: "Galadriel, Elrond, and Saruman attack Dol Guldur, forcing Sauron's dark presence to flee to Mordor.",
        inUniverseYear: -78.2,
        inUniverseDisplay: "2941 Third Age",
        releaseYear: 2014.2,
        releaseDisplay: "December 2014 (The Hobbit: Battle of Five Armies)"
      },
      {
        id: "lotr-riddles",
        title: "Riddles in the Dark",
        description: "Lost in the caverns, Bilbo Baggins finds the Ring and engages in a game of riddles with Gollum to win his escape.",
        inUniverseYear: -78,
        inUniverseDisplay: "2941 Third Age",
        releaseYear: 2012.9,
        releaseDisplay: "December 2012 (The Hobbit: An Unexpected Journey)"
      },
      {
        id: "lotr-five-armies",
        title: "The Battle of the Five Armies",
        description: "Men, Elves, Dwarves, Orcs, and Eagles clash at Erebor, culminating in the death of Thorin Oakenshield.",
        inUniverseYear: -78.1,
        inUniverseDisplay: "2941 Third Age",
        releaseYear: 2014.9,
        releaseDisplay: "December 2014 (The Hobbit: The Battle of the Five Armies)"
      },
      {
        id: "lotr-weathertop",
        title: "Frodo is Stabbed at Weathertop",
        description: "The Witch-king of Angmar stabs Frodo with a Morgul-blade before Aragorn drives the Nazgûl away with fire.",
        inUniverseYear: -0.95,
        inUniverseDisplay: "3018 Third Age",
        releaseYear: 2001.7,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-fellowship",
        title: "The Fellowship Sets Out",
        description: "Nine companions depart Rivendell on a quest to destroy the Ring of Power in the fires of Mount Doom.",
        inUniverseYear: -1,
        inUniverseDisplay: "3018 Third Age",
        releaseYear: 2001.9,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-moria-enter",
        title: "The Fellowship Enters Moria",
        description: "Fleeing the Watcher in the Water, the Fellowship escapes into the dark mines of Khazad-dûm.",
        inUniverseYear: -0.92,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2001.75,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-moria-fall",
        title: "Gandalf Falls in Khazad-dûm",
        description: "Gandalf battles the Balrog atop the Bridge of Khazad-dûm, falling into the abyss with the beast.",
        inUniverseYear: -0.9,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2001.8,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-boromir-death",
        title: "Boromir is Slain by Orcs",
        description: "Boromir redeems himself by defending Merry and Pippin, taking multiple arrows from Lurtz's bow.",
        inUniverseYear: -0.85,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2001.95,
        releaseDisplay: "December 2001 (The Fellowship of the Ring)"
      },
      {
        id: "lotr-meet-eomer",
        title: "Three Hunters Meet Eomer in Rohan",
        description: "Aragorn, Legolas, and Gimli meet the exiled Riders of Rohan on the plains, receiving spare horses.",
        inUniverseYear: -0.03,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2002.6,
        releaseDisplay: "December 2002 (The Two Towers)"
      },
      {
        id: "lotr-gandalf-white",
        title: "Gandalf the White Appears in Fangorn",
        description: "Aragorn, Legolas, and Gimli track the hobbits into the forest, encountering the resurrected wizard.",
        inUniverseYear: -0.02,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2002.7,
        releaseDisplay: "December 2002 (The Two Towers)"
      },
      {
        id: "lotr-deadmarshes",
        title: "Gollum Guides Frodo Thru Dead Marshes",
        description: "Gollum leads the hobbits through the swamp of floating corpse faces to reach the Black Gate.",
        inUniverseYear: -0.05,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2002.5,
        releaseDisplay: "December 2002 (The Two Towers)"
      },
      {
        id: "lotr-isengard-flood",
        title: "Ents Flood Isengard",
        description: "Enraged by the logging of Fangorn Forest, Treebeard and the Ents destroy the dams, flooding Saruman's fortress.",
        inUniverseYear: 0.01,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2002.8,
        releaseDisplay: "December 2002 (The Two Towers)"
      },
      {
        id: "lotr-entdraught",
        title: "Merry & Pippin Drink Ent-draught",
        description: "The hobbits drink the magical forest spring water, growing several inches taller than normal hobbits.",
        inUniverseYear: 0.02,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2002.82,
        releaseDisplay: "December 2002 (The Two Towers)"
      },
      {
        id: "lotr-helms-deep",
        title: "The Battle of Helm's Deep",
        description: "The Rohirrim make a desperate stand at the Hornburg fortress against Saruman's army of 10,000 Uruk-hai.",
        inUniverseYear: 0,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2002.9,
        releaseDisplay: "December 2002 (The Two Towers)"
      },
      {
        id: "lotr-palantir",
        title: "Pippin Looks into the Palantir",
        description: "Pippin steals the seeing-stone from sleeping Gandalf, accidentally revealing himself to Sauron.",
        inUniverseYear: 0.04,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2003.3,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-beacons",
        title: "The Beacons of Gondor are Lit",
        description: "Pippin climbs the high tower in Minas Tirith to light the signal fire, calling Rohan for aid.",
        inUniverseYear: 0.06,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2003.55,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-paths-dead",
        title: "Aragorn Takes Paths of the Dead",
        description: "Aragorn, Legolas, and Gimli travel the haunted road to summon the Oathbreakers to fulfill their vow.",
        inUniverseYear: 0.05,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2003.5,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-pelennor",
        title: "The Charge of the Rohirrim",
        description: "King Theoden leads 6,000 riders in a spectacular charge onto the Pelennor Fields, breaking Sauron's siege.",
        inUniverseYear: 0.075,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2003.65,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-witchking-death",
        title: "The Witch-king of Angmar is Slain",
        description: "Éowyn of Rohan defeats the Lord of the Nazgûl, declaring 'I am no man!' with Merry's assistance.",
        inUniverseYear: 0.08,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2003.6,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-sam-carries",
        title: "Sam Carries Frodo up Mount Doom",
        description: "With Frodo exhausted by the Ring's weight, Samwise declares 'I can't carry it for you, but I can carry you!'",
        inUniverseYear: 0.09,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2003.75,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-ring-destroyed",
        title: "Destruction of the One Ring",
        description: "Gollum bites the Ring from Frodo's finger and falls into Mount Doom, causing Sauron's final defeat.",
        inUniverseYear: 0.1,
        inUniverseDisplay: "March 3019 Third Age",
        releaseYear: 2003.8,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-king-crowned",
        title: "Aragorn is Crowned King Elessar",
        description: "Aragorn is crowned in Minas Tirith and reunites with Arwen, beginning the Fourth Age of peace.",
        inUniverseYear: 0.12,
        inUniverseDisplay: "3019 Third Age",
        releaseYear: 2003.85,
        releaseDisplay: "December 2003 (The Return of the King)"
      },
      {
        id: "lotr-grey-havens",
        title: "Departure at the Grey Havens",
        description: "Frodo, Bilbo, Gandalf, Elrond, and Galadriel board an Elven ship and sail west to Valinor, ending the Third Age.",
        inUniverseYear: 2,
        inUniverseDisplay: "3021 Third Age",
        releaseYear: 2003.9,
        releaseDisplay: "December 2003 (The Return of the King)"
      }
    ]
  },
  tenet: {
    name: "TENET (GOD Tier)",
    color: "#00ffff",
    gradient: "linear-gradient(135deg, #020205 0%, #001220 50%, #00ffff 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M7 7l-5 5 5 5M17 7l5 5-5 5"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6V2M12 22v-4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
    events: [
      {
        id: "tenet-sator-ruins",
        title: "Sator Finds Future Gold",
        description: "A young Andrei Sator discovers future gold and instructions in the ruins of Stalsk-12, launching his rise to power.",
        inUniverseYear: 1990,
        inUniverseDisplay: "Sator's Early Years",
        releaseYear: 2020.1,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-neil-recruitment",
        title: "Neil's Recruitment by the Protagonist",
        description: "A future version of the Protagonist travels into the past to recruit and train a young Neil, establishing their deep friendship.",
        inUniverseYear: 2010,
        inUniverseDisplay: "Neil's Training",
        releaseYear: 2020.2,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-kyiv-opera",
        title: "The Kyiv Opera House Siege",
        description: "The Protagonist infiltrates the Kyiv Opera House. Neil saves him with a mysterious inverted bullet that travels backward in time.",
        inUniverseYear: 2020.3,
        inUniverseDisplay: "Kyiv Opera House",
        flow: "blue",
        releaseYear: 2020.3,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-stalsk-battle",
        title: "The Battle of Stalsk-12",
        description: "The Protagonist secures the Algorithm in Russia while Neil dies at the bunker gate to save him.",
        inUniverseYear: 2020.3,
        inUniverseDisplay: "Stalsk-12 Battle",
        flow: "red",
        releaseYear: 2020.35,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-vietnam-yacht",
        title: "Vietnam Yacht Assassination",
        description: "Cat assassinates Andrei Sator on his yacht in Vietnam to prevent him from triggering the end of the world.",
        inUniverseYear: 2020.3,
        inUniverseDisplay: "Vietnam Yacht",
        flow: "red",
        releaseYear: 2020.4,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-ship-wake",
        title: "Waking Up on the Ship",
        description: "Having survived a fake suicide pill, the Protagonist wakes up on a wind turbine ship and is introduced to the word 'Tenet'.",
        inUniverseYear: 2020.41,
        inUniverseDisplay: "Wind Turbine Vessel",
        releaseYear: 2020.42,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-inversion-discovery",
        title: "Discovery of Inversion",
        description: "The Protagonist visits the scientist Barbara, who shows him inverted bullet casings that 'catch' bullets instead of firing them.",
        inUniverseYear: 2020.43,
        inUniverseDisplay: "Inversion Laboratory",
        releaseYear: 2020.44,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-mumbai-bungee",
        title: "The Mumbai Bungee Interrogation",
        description: "The Protagonist and Neil bungee-jump off a skyscraper in Mumbai to interrogate the arms dealer Priya.",
        inUniverseYear: 2020.51,
        inUniverseDisplay: "Mumbai Interrogation",
        releaseYear: 2020.46,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-crosby-meeting",
        title: "Meeting Sir Michael Crosby",
        description: "The Protagonist meets a British intelligence agent in London to get advice on Sator's background and a forged Goya drawing.",
        inUniverseYear: 2020.52,
        inUniverseDisplay: "London Intelligence Briefing",
        releaseYear: 2020.48,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-kitchen-fight",
        title: "The London Kitchen Fight",
        description: "The Protagonist fights off Sator's henchmen in a restaurant kitchen to protect himself and get Sator's attention.",
        inUniverseYear: 2020.53,
        inUniverseDisplay: "Shipyard Kitchen Fight",
        releaseYear: 2020.49,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-container-voyage",
        title: "The Container Voyage",
        description: "Isolated inside a secure shipping container on a cargo ship, the Protagonist, Neil, and Cat move backward through time while breathing inverted oxygen to heal her wound.",
        inUniverseYear: 2020.54,
        inUniverseDisplay: "Container Voyage",
        releaseYear: 2020.5,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-oslo-heist",
        title: "Oslo Airport Heist",
        description: "The Protagonist and Neil crash a Boeing 747 into the Oslo Freeport vault to destroy Sator's Goya painting.",
        inUniverseYear: 2020.6,
        inUniverseDisplay: "Oslo Airport Vault",
        flow: "blue",
        releaseYear: 2020.55,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-oslo-clash",
        title: "Oslo Turnstile Fight",
        description: "Inside the Turnstile room, the Protagonist unwittingly fights a future, backward-moving version of himself.",
        inUniverseYear: 2020.6,
        inUniverseDisplay: "Oslo Turnstile Chamber",
        flow: "red",
        releaseYear: 2020.6,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-tallinn-robbery",
        title: "Tallinn Highway Robbery",
        description: "The Protagonist and Neil perform an elaborate highway heist in Tallinn to steal the mysterious plutonium artifact.",
        inUniverseYear: 2020.7,
        inUniverseDisplay: "Tallinn Plutonium Heist",
        flow: "blue",
        releaseYear: 2020.65,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-tallinn-saab",
        title: "The Saab Highway Chase",
        description: "On the Tallinn highway, a Saab driven by a backward-moving version of the Protagonist is flipped and set on fire by Sator.",
        inUniverseYear: 2020.7,
        inUniverseDisplay: "Tallinn Saab Flip",
        flow: "red",
        releaseYear: 2020.7,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-tallinn-inversion",
        title: "Tallinn Turnstile Inversion",
        description: "After Sator shoots Cat, she is taken into the Tallinn Turnstile to invert her flow, allowing her wound to heal as she moves backward in time.",
        inUniverseYear: 2020.7,
        inUniverseDisplay: "Tallinn Turnstile Chamber",
        flow: "blue",
        releaseYear: 2020.75,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-london-cleanup",
        title: "The London Clean-up",
        description: "The Protagonist assassinates Priya in London to protect Cat and close the temporal loop.",
        inUniverseYear: 2020.8,
        inUniverseDisplay: "London Aftermath",
        releaseYear: 2020.8,
        releaseDisplay: "August 2020"
      },
      {
        id: "tenet-origin-future",
        title: "The Deep Future Origin",
        description: "The Protagonist establishes the entire Tenet organization, sending instructions and inverted materials back through time to orchestrate the global mission.",
        inUniverseYear: 2050,
        inUniverseDisplay: "Deep Future",
        releaseYear: 2020.9,
        releaseDisplay: "August 2020"
      }
    ]
  },
  got: {
    name: "Game of Thrones",
    color: "#6c757d",
    gradient: "linear-gradient(135deg, #1b1e22 0%, #495057 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`, // Iron throne sword notch or shield
    events: [
      {
        id: "got-doom-valyria",
        title: "The Doom of Valyria",
        description: "A cataclysmic volcanic eruption destroys the Valyrian Peninsula and almost all dragons, leaving the Targaryens as survivors.",
        inUniverseYear: -100,
        inUniverseDisplay: "100 BC (Years Before Conquest)",
        releaseYear: 2011.0,
        releaseDisplay: "April 2011 (Season 1 Lore)"
      },
      {
        id: "got-conquest",
        title: "Aegon's Conquest",
        description: "Aegon Targaryen and his sister-wives invade Westeros, uniting six of the Seven Kingdoms under the Iron Throne.",
        inUniverseYear: 0,
        inUniverseDisplay: "0 AC (Aegon's Coronation)",
        releaseYear: 2011.1,
        releaseDisplay: "April 2011 (Season 1 Lore)"
      },
      {
        id: "got-rebellion",
        title: "Robert's Rebellion",
        description: "Robert Baratheon leads a rebellion following the abduction of Lyanna Stark, defeating Rhaegar Targaryen.",
        inUniverseYear: 281,
        inUniverseDisplay: "281 AC",
        releaseYear: 2011.2,
        releaseDisplay: "April 2011 (Season 1 Lore)"
      },
      {
        id: "got-robert-king",
        title: "Robert Baratheon is Crowned King",
        description: "Following the Sack of King's Landing and King Aerys' death, Robert ascends the Iron Throne.",
        inUniverseYear: 283,
        inUniverseDisplay: "283 AC",
        releaseYear: 2011.3,
        releaseDisplay: "April 2011 (Season 1 Lore)"
      },
      {
        id: "got-greyjoy-rebellion",
        title: "The Greyjoy Rebellion Defeated",
        description: "Balon Greyjoy rebels to regain Ironborn independence. King Robert crushes it, taking Theon as a ward.",
        inUniverseYear: 289,
        inUniverseDisplay: "289 AC",
        releaseYear: 2011.4,
        releaseDisplay: "April 2011 (Season 1 Lore)"
      },
      {
        id: "got-daenerys-drogo",
        title: "Daenerys Weds Khal Drogo",
        description: "Viserys Targaryen sells his sister Daenerys in marriage to Khal Drogo in exchange for a Dothraki army.",
        inUniverseYear: 298.1,
        inUniverseDisplay: "298 AC",
        releaseYear: 2011.5,
        releaseDisplay: "April 2011 (Season 1 Episode 1)"
      },
      {
        id: "got-bran-push",
        title: "Bran Stark is Pushed from the Window",
        description: "Jaime Lannister pushes ten-year-old Bran from a tower window in Winterfell to keep his affair with Cersei a secret.",
        inUniverseYear: 298.2,
        inUniverseDisplay: "298 AC",
        releaseYear: 2011.6,
        releaseDisplay: "April 2011 (Season 1 Episode 1)"
      },
      {
        id: "got-ned-execution",
        title: "Execution of Ned Stark",
        description: "Newly crowned King Joffrey orders Lord Eddard Stark decapitated for treason outside the Sept of Baelor.",
        inUniverseYear: 299.1,
        inUniverseDisplay: "299 AC",
        releaseYear: 2011.9,
        releaseDisplay: "June 2011 (Season 1 Episode 9)"
      },
      {
        id: "got-dragons-born",
        title: "Birth of Daenerys' Dragons",
        description: "Daenerys Targaryen steps into Khal Drogo's funeral pyre, emerging unburnt with three hatched baby dragons.",
        inUniverseYear: 299.2,
        inUniverseDisplay: "299 AC",
        releaseYear: 2011.95,
        releaseDisplay: "June 2011 (Season 1 Episode 10)"
      },
      {
        id: "got-renly-shadow",
        title: "Renly Baratheon is Assassinated",
        description: "Melisandre channels Stannis' energy to birth a shadow assassin that stabs Renly in his war tent.",
        inUniverseYear: 299.4,
        inUniverseDisplay: "299 AC",
        releaseYear: 2012.3,
        releaseDisplay: "April 2012 (Season 2 Episode 5)"
      },
      {
        id: "got-blackwater",
        title: "The Battle of the Blackwater",
        description: "Stannis Baratheon attacks King's Landing. Tyrion Lannister defends the city using a trap of green wildfire.",
        inUniverseYear: 299.8,
        inUniverseDisplay: "299 AC",
        releaseYear: 2012.4,
        releaseDisplay: "May 2012 (Season 2 Episode 9)"
      },
      {
        id: "got-dracarys-astapor",
        title: "Daenerys Liberates the Unsullied",
        description: "Daenerys tricks the slave masters of Astapor, ordering her dragon Drogon to burn them in the plaza.",
        inUniverseYear: 299.9,
        inUniverseDisplay: "299 AC",
        releaseYear: 2013.25,
        releaseDisplay: "April 2013 (Season 3 Episode 4)"
      },
      {
        id: "got-red-wedding",
        title: "The Red Wedding",
        description: "Walder Frey betrays Robb Stark, murdering the King in the North, his mother Catelyn, and his pregnant wife Talisa.",
        inUniverseYear: 300.0,
        inUniverseDisplay: "300 AC",
        releaseYear: 2013.4,
        releaseDisplay: "June 2013 (Season 3 Episode 9)"
      },
      {
        id: "got-purple-wedding",
        title: "The Purple Wedding",
        description: "King Joffrey Baratheon is poisoned and dies choking at his own wedding feast in King's Landing.",
        inUniverseYear: 300.2,
        inUniverseDisplay: "300 AC",
        releaseYear: 2014.3,
        releaseDisplay: "April 2014 (Season 4 Episode 2)"
      },
      {
        id: "got-mountain-viper",
        title: "The Viper vs The Mountain Duel",
        description: "Oberyn Martell fights Gregor Clegane in a trial by combat. He dominates, but gets his skull crushed after showboating.",
        inUniverseYear: 300.3,
        inUniverseDisplay: "300 AC",
        releaseYear: 2014.35,
        releaseDisplay: "June 2014 (Season 4 Episode 8)"
      },
      {
        id: "got-tywin-death",
        title: "Tyrion Shoots Tywin Lannister",
        description: "Escaping execution, Tyrion kills his father Tywin with a crossbow while the patriarch is on the privy.",
        inUniverseYear: 300.4,
        inUniverseDisplay: "300 AC",
        releaseYear: 2014.4,
        releaseDisplay: "June 2014 (Season 4 Episode 10)"
      },
      {
        id: "got-castleblack",
        title: "The Battle of Castle Black",
        description: "The Night's Watch defends the Wall from a wildling army. Ygritte is killed in Jon Snow's arms.",
        inUniverseYear: 300.5,
        inUniverseDisplay: "300 AC",
        releaseYear: 2014.45,
        releaseDisplay: "June 2014 (Season 4 Episode 9)"
      },
      {
        id: "got-hardhome",
        title: "The Massacre at Hardhome",
        description: "Jon Snow rescues wildlings at Hardhome when the Night King attacks, turning the fallen into wights.",
        inUniverseYear: 302.0,
        inUniverseDisplay: "302 AC",
        releaseYear: 2015.4,
        releaseDisplay: "May 2015 (Season 5 Episode 8)"
      },
      {
        id: "got-jon-stabbed",
        title: "Jon Snow is Assassinated by Mutineers",
        description: "Alliser Thorne and members of the Night's Watch stab Lord Commander Jon Snow under a sign reading 'Traitor'.",
        inUniverseYear: 302.2,
        inUniverseDisplay: "302 AC",
        releaseYear: 2015.45,
        releaseDisplay: "June 2015 (Season 5 Episode 10)"
      },
      {
        id: "got-jon-resurrected",
        title: "Jon Snow is Resurrected",
        description: "Melisandre cleanses Jon Snow's body and invokes the Lord of Light, successfully bringing him back to life.",
        inUniverseYear: 302.8,
        inUniverseDisplay: "302 AC",
        releaseYear: 2016.2,
        releaseDisplay: "May 2016 (Season 6 Episode 2)"
      },
      {
        id: "got-dosh-khaleen-burns",
        title: "Daenerys Burns the Dothraki Khals",
        description: "Locked in the Temple of Dosh Khaleen, Daenerys tips over burning cauldrons, trapping and roasting the Khals.",
        inUniverseYear: 302.9,
        inUniverseDisplay: "302 AC",
        releaseYear: 2016.3,
        releaseDisplay: "May 2016 (Season 6 Episode 4)"
      },
      {
        id: "got-hold-door",
        title: "Hodor Dies Holding the Door",
        description: "Bran Stark accidentally wargs into past Wylis while present Hodor holds back wights, giving Hodor his name.",
        inUniverseYear: 303.1,
        inUniverseDisplay: "303 AC",
        releaseYear: 2016.35,
        releaseDisplay: "May 2016 (Season 6 Episode 5)"
      },
      {
        id: "got-bastards",
        title: "The Battle of the Bastards",
        description: "Jon Snow and Sansa Stark defeat Ramsay Bolton, reclaiming Winterfell for House Stark.",
        inUniverseYear: 303.0,
        inUniverseDisplay: "303 AC",
        releaseYear: 2016.4,
        releaseDisplay: "June 2016 (Season 6 Episode 9)"
      },
      {
        id: "got-sept-destroyed",
        title: "Destruction of the Sept of Baelor",
        description: "Cersei Lannister uses wildfire to obliterate the Great Sept, vaporizing the High Sparrow and Margaery Tyrell.",
        inUniverseYear: 303.2,
        inUniverseDisplay: "303 AC",
        releaseYear: 2016.45,
        releaseDisplay: "June 2016 (Season 6 Episode 10)"
      },
      {
        id: "got-walder-frey-death",
        title: "Arya Stark Decapitates Walder Frey",
        description: "Arya feeds Walder Frey a pie made of his sons, then cuts his throat, avenging the Red Wedding.",
        inUniverseYear: 303.4,
        inUniverseDisplay: "303 AC",
        releaseYear: 2016.5,
        releaseDisplay: "June 2016 (Season 6 Episode 10)"
      },
      {
        id: "got-olenna-poison",
        title: "Olenna Tyrell Confesses Poisoning Joffrey",
        description: "After drinking poisoned wine given by Jaime Lannister, Olenna tells him: 'Tell Cersei. I want her to know it was me.'",
        inUniverseYear: 303.8,
        inUniverseDisplay: "303 AC",
        releaseYear: 2017.4,
        releaseDisplay: "July 2017 (Season 7 Episode 3)"
      },
      {
        id: "got-wall-falls",
        title: "The Wall is Breached",
        description: "The Night King rides the undead dragon Viserion, melting a path through Eastwatch-by-the-Sea for the Army of the Dead.",
        inUniverseYear: 304.0,
        inUniverseDisplay: "304 AC",
        releaseYear: 2017.6,
        releaseDisplay: "August 2017 (Season 7 Episode 7)"
      },
      {
        id: "got-longnight",
        title: "The Battle of Winterfell / Long Night",
        description: "Allied forces make a stand against the dead. Arya Stark stabs the Night King, shattering the Army of the Dead.",
        inUniverseYear: 305.0,
        inUniverseDisplay: "305 AC",
        releaseYear: 2019.3,
        releaseDisplay: "April 2019 (Season 8 Episode 3)"
      },
      {
        id: "got-kingslanding-burns",
        title: "The Destruction of King's Landing",
        description: "Daenerys Targaryen goes rogue, ignoring the bells of surrender to burn King's Landing and its citizens.",
        inUniverseYear: 305.2,
        inUniverseDisplay: "305 AC",
        releaseYear: 2019.4,
        releaseDisplay: "May 2019 (Season 8 Episode 5)"
      },
      {
        id: "got-bran-king",
        title: "Bran the Broken is Chosen King",
        description: "Jon Snow kills Daenerys to save the realm. Westerosi lords select Bran Stark as the new sovereign.",
        inUniverseYear: 305.5,
        inUniverseDisplay: "305 AC",
        releaseYear: 2019.5,
        releaseDisplay: "May 2019 (Season 8 Episode 6)"
      }
    ]
  },
  vampirediaries: {
    name: "The Vampire Diaries",
    color: "#b91c1c",
    gradient: "linear-gradient(135deg, #1e0505 0%, #b91c1c 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L12 2C12 2 6 9 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 9 12 2 12 2Z"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`, // Crimson Heart
    events: [
      {
        id: "tvd-silas-immortal",
        title: "Silas and Amara Immortality Spell",
        description: "The witch Qetsiyah creates a spell of true immortality, which Silas and Amara drink, creating the first active doppelgängers.",
        inUniverseYear: 973,
        inUniverseDisplay: "973 AD",
        releaseYear: 2013.0,
        releaseDisplay: "October 2013 (Season 5)"
      },
      {
        id: "tvd-original-turned",
        title: "The Mikaelsons Become Originals",
        description: "Esther Mikaelson uses dark magic and the white oak tree to turn her family into the world's first vampires.",
        inUniverseYear: 1001,
        inUniverseDisplay: "1001 AD",
        releaseYear: 2011.8,
        releaseDisplay: "November 2011 (Season 3 Episode 8)"
      },
      {
        id: "tvd-esther-murder",
        title: "Klaus Kills Esther Mikaelson",
        description: "Klaus murders his mother Esther in a fit of rage after she binds his werewolf side, blaming it on Mikael.",
        inUniverseYear: 1002,
        inUniverseDisplay: "1002 AD",
        releaseYear: 2011.9,
        releaseDisplay: "November 2011 (Season 3)"
      },
      {
        id: "tvd-brotherhood-five",
        title: "The Brotherhood of the Five Formed",
        description: "A group of highly trained hunters is created by a witch, marked by magic tattoos to exterminate vampires.",
        inUniverseYear: 1114,
        inUniverseDisplay: "1114 AD",
        releaseYear: 2012.8,
        releaseDisplay: "October 2012 (Season 4)"
      },
      {
        id: "tvd-katherine-turned",
        title: "Katerina Petrova Turns Into Katherine",
        description: "Katerina Petrova tricks Rose into feeding her blood and hangs herself, becoming a vampire to escape Klaus.",
        inUniverseYear: 1492,
        inUniverseDisplay: "1492 AD",
        releaseYear: 2010.8,
        releaseDisplay: "November 2010 (Season 2 Episode 9)"
      },
      {
        id: "tvd-salvatore-turned",
        title: "Stefan and Damon Are Turned",
        description: "Katherine feeds them her blood, and their father shoots them. They awaken as vampires in Mystic Falls.",
        inUniverseYear: 1864,
        inUniverseDisplay: "1864 AD",
        releaseYear: 2009.2,
        releaseDisplay: "September 2009 (Season 1)"
      },
      {
        id: "tvd-lexi-stefan",
        title: "Lexi Meets Stefan Salvatore",
        description: "Alexia 'Lexi' Branson meets Stefan, helping him control his Ripper urges and teaching him 'clean' feeding.",
        inUniverseYear: 1864.5,
        inUniverseDisplay: "1864 AD",
        releaseYear: 2009.8,
        releaseDisplay: "November 2009 (Season 1 Episode 8)"
      },
      {
        id: "tvd-stefan-damon-boston",
        title: "Stefan and Damon Boston Reunion",
        description: "The brothers cross paths in Boston after years of estrangement, but Damon's wild lifestyle splits them again.",
        inUniverseYear: 1912,
        inUniverseDisplay: "1912 AD",
        releaseYear: 2012.2,
        releaseDisplay: "March 2012 (Season 3 Episode 16)"
      },
      {
        id: "tvd-damon-sage",
        title: "Damon Meets Sage in Chicago",
        description: "Damon meets the ancient vampire Sage, who teaches him how to enjoy being a vampire and exploit humans.",
        inUniverseYear: 1922,
        inUniverseDisplay: "1922 AD",
        releaseYear: 2012.25,
        releaseDisplay: "March 2012 (Season 3 Episode 16)"
      },
      {
        id: "tvd-parents-crash",
        title: "Elena's Parents Die on Wickery Bridge",
        description: "Grayson and Miranda Gilbert drown. Stefan Salvatore arrives and rescues Elena from the sunken car.",
        inUniverseYear: 2009.3,
        inUniverseDisplay: "May 2009",
        releaseYear: 2009.1,
        releaseDisplay: "September 2009 (Season 1 Pilot)"
      },
      {
        id: "tvd-stefan-enrolls",
        title: "Stefan Enrolls at Mystic Falls High",
        description: "Stefan Salvatore returns to town and meets Elena Gilbert, who looks identical to his old love Katherine.",
        inUniverseYear: 2009.7,
        inUniverseDisplay: "September 2009",
        releaseYear: 2009.15,
        releaseDisplay: "September 2009 (Season 1 Pilot)"
      },
      {
        id: "tvd-vicki-staked",
        title: "Vicki Donovan is Staked",
        description: "Damon turns Vicki, but she loses control and attacks Elena at the Halloween dance, forcing Stefan to stake her.",
        inUniverseYear: 2009.8,
        inUniverseDisplay: "October 2009",
        releaseYear: 2009.3,
        releaseDisplay: "October 2009 (Season 1 Episode 7)"
      },
      {
        id: "tvd-katherine-returns",
        title: "Katherine Pierce Returns",
        description: "Katherine returns to Mystic Falls, posing as Elena, and immediately stabs John Gilbert in the kitchen.",
        inUniverseYear: 2010.5,
        inUniverseDisplay: "May 2010",
        releaseYear: 2010.4,
        releaseDisplay: "May 2010 (Season 1 Episode 22)"
      },
      {
        id: "tvd-caroline-turned",
        title: "Caroline Forbes Turns Into a Vampire",
        description: "Katherine smothers Caroline with a pillow while she has Damon's blood in her system, initiating her transition.",
        inUniverseYear: 2010.6,
        inUniverseDisplay: "September 2010",
        releaseYear: 2010.5,
        releaseDisplay: "September 2010 (Season 2 Episode 2)"
      },
      {
        id: "tvd-tyler-curse",
        title: "Tyler Lockwood Triggers Werewolf Curse",
        description: "Tyler accidentally kills Sarah at the Masquerade ball due to Katherine's compulsion, triggering his curse.",
        inUniverseYear: 2010.8,
        inUniverseDisplay: "October 2010",
        releaseYear: 2010.6,
        releaseDisplay: "October 2010 (Season 2 Episode 7)"
      },
      {
        id: "tvd-klaus-sacrifice",
        title: "Klaus Performs Hybrid Sacrifice",
        description: "Klaus sacrifices werewolf Jules, vampire Jenna Sommers, and doppelgänger Elena to break his hybrid curse.",
        inUniverseYear: 2011.3,
        inUniverseDisplay: "April 2011",
        releaseYear: 2011.2,
        releaseDisplay: "May 2011 (Season 2 Episode 21)"
      },
      {
        id: "tvd-jenna-death",
        title: "Jenna Sommers is Sacrificed",
        description: "Elena's beloved aunt Jenna is turned into a vampire and then brutally staked by Klaus during his hybrid ritual.",
        inUniverseYear: 2011.4,
        inUniverseDisplay: "May 2011",
        releaseYear: 2011.3,
        releaseDisplay: "May 2011 (Season 2 Episode 21)"
      },
      {
        id: "tvd-elena-vampire",
        title: "Elena Gilbert Becomes a Vampire",
        description: "Elena dies in a car crash off Wickery Bridge with vampire blood in her system, waking up to feed.",
        inUniverseYear: 2012.3,
        inUniverseDisplay: "May 2012",
        releaseYear: 2012.4,
        releaseDisplay: "May 2012 (Season 3 Episode 22)"
      },
      {
        id: "tvd-jeremy-hunter",
        title: "Jeremy Gilbert Becomes a Hunter",
        description: "Jeremy kills Connor Jordan, triggering his awakening as a member of the Brotherhood of the Five.",
        inUniverseYear: 2012.7,
        inUniverseDisplay: "November 2012",
        releaseYear: 2012.7,
        releaseDisplay: "November 2012 (Season 4 Episode 6)"
      },
      {
        id: "tvd-silas-awakened",
        title: "Silas is Awakened on the Island",
        description: "Shane and Jeremy feed doppelgänger blood to Silas's petrified body on the island, waking the ancient psychic.",
        inUniverseYear: 2013.1,
        inUniverseDisplay: "February 2013",
        releaseYear: 2013.1,
        releaseDisplay: "February 2013 (Season 4 Episode 14)"
      },
      {
        id: "tvd-humanity-off",
        title: "Elena Gilbert Shuts Off Humanity",
        description: "Following Jeremy's murder by Silas, Damon Salvatore uses the sire bond to compel Elena to turn off her emotions.",
        inUniverseYear: 2013.2,
        inUniverseDisplay: "February 2013",
        releaseYear: 2013.15,
        releaseDisplay: "February 2013 (Season 4 Episode 15)"
      },
      {
        id: "tvd-bonnie-dies",
        title: "Bonnie Bennett Dies",
        description: "Bonnie uses excessive expression magic to drop the veil and resurrect Jeremy, dying from physical strain.",
        inUniverseYear: 2013.4,
        inUniverseDisplay: "May 2013",
        releaseYear: 2013.3,
        releaseDisplay: "May 2013 (Season 4 Episode 22)"
      },
      {
        id: "tvd-katherine-cure",
        title: "Katherine is Forced to Take the Cure",
        description: "Elena shoves the Cure down Katherine's throat during a physical brawl in the Hogwarts-like school hallways.",
        inUniverseYear: 2013.5,
        inUniverseDisplay: "May 2013",
        releaseYear: 2013.4,
        releaseDisplay: "May 2013 (Season 4 Episode 23)"
      },
      {
        id: "tvd-prisonworld",
        title: "Damon and Bonnie Trapped in 1994",
        description: "As the Other Side collapses, Bonnie and Damon hold hands and are pulled into a snapshot 1994 prison world.",
        inUniverseYear: 2014.3,
        inUniverseDisplay: "May 2014",
        releaseYear: 2014.4,
        releaseDisplay: "May 2014 (Season 5 Episode 22)"
      },
      {
        id: "tvd-alaric-human",
        title: "Alaric Saltzman Becomes Human Again",
        description: "Jo rescues Alaric from the magic-free border of Mystic Falls, stripping away his Original vampire magic and saving his life.",
        inUniverseYear: 2014.7,
        inUniverseDisplay: "November 2014",
        releaseYear: 2014.8,
        releaseDisplay: "November 2014 (Season 6 Episode 6)"
      },
      {
        id: "tvd-gemini-merge",
        title: "Kai and Luke Parker Merge",
        description: "The Gemini twins merge their power; Kai wins the combat, absorbing Luke's traits and becoming Coven Leader.",
        inUniverseYear: 2015.1,
        inUniverseDisplay: "January 2015",
        releaseYear: 2015.0,
        releaseDisplay: "January 2015 (Season 6 Episode 12)"
      },
      {
        id: "tvd-elena-sleeps",
        title: "Elena Gilbert Put into Sleeping Curse",
        description: "Kai binds Elena's life to Bonnie's, putting Elena into a magic coma that lasts as long as Bonnie is alive.",
        inUniverseYear: 2015.4,
        inUniverseDisplay: "May 2015",
        releaseYear: 2015.3,
        releaseDisplay: "May 2015 (Season 6 Episode 22)"
      },
      {
        id: "tvd-rayna-cruz",
        title: "Rayna Cruz Begins Hunting Stefan",
        description: "The vampire huntress Rayna Cruz breaks out of confinement, marking Stefan with her Phoenix Sword.",
        inUniverseYear: 2016.2,
        inUniverseDisplay: "February 2016",
        releaseYear: 2016.1,
        releaseDisplay: "February 2016 (Season 7 Episode 12)"
      },
      {
        id: "tvd-stefan-hellfire",
        title: "Stefan Salvatore Sacrifices Himself",
        description: "Stefan injects Damon with the Cure, then holds Katherine Pierce in hellfire to save Mystic Falls.",
        inUniverseYear: 2017.2,
        inUniverseDisplay: "March 2017",
        releaseYear: 2017.2,
        releaseDisplay: "March 2017 (Season 8 Episode 16)"
      },
      {
        id: "tvd-elena-wakes",
        title: "Elena Wakes and Reconnects with Damon",
        description: "Bonnie breaks the spell, waking Elena. Elena lives a long, happy human life with Damon Salvatore.",
        inUniverseYear: 2017.3,
        inUniverseDisplay: "March 2017",
        releaseYear: 2017.3,
        releaseDisplay: "March 2017 (Season 8 Episode 16)"
      }
    ]
  },
  friends: {
    name: "Friends",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #0d0614 0%, #260a3d 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="currentColor"><circle cx="6" cy="12" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="18" cy="12" r="3"/></svg>`, // Three dots logo style
    events: [
      {
        id: "fr-ross-carol-marry",
        title: "Ross and Carol Get Married",
        description: "Ross Geller marries Carol Willick, unaware of her true romantic orientation.",
        inUniverseYear: 1987,
        inUniverseDisplay: "1987 (Seven Years Before Pilot)",
        releaseYear: 1994,
        releaseDisplay: "September 1994 (Pilot Lore)"
      },
      {
        id: "fr-thanksgiving-flashback",
        title: "Chandler Meets Monica at Thanksgiving",
        description: "Chandler visits the Gellers for Thanksgiving, calling Monica fat and causing her to lose weight by next year.",
        inUniverseYear: 1988,
        inUniverseDisplay: "November 1988",
        releaseYear: 1998.9,
        releaseDisplay: "November 1998 (Season 5 Episode 8)"
      },
      {
        id: "fr-pilot",
        title: "Rachel Escapes Wedding to Barry",
        description: "Rachel Green flees her wedding, meets Monica at Central Perk, and joins the gang as Monica's roommate.",
        inUniverseYear: 1994.7,
        inUniverseDisplay: "September 1994",
        releaseYear: 1994.7,
        releaseDisplay: "September 1994 (Season 1 Episode 1)"
      },
      {
        id: "fr-ben-born",
        title: "Ross's Son Ben is Born",
        description: "Carol gives birth to Ben Geller in the hospital. Ross and Susan argue over naming him.",
        inUniverseYear: 1995.4,
        inUniverseDisplay: "May 1995",
        releaseYear: 1995.4,
        releaseDisplay: "May 1995 (Season 1 Episode 23)"
      },
      {
        id: "fr-rain-kiss",
        title: "Ross and Rachel Rain Kiss",
        description: "Ross and Rachel share their first passionate kiss in the doorway of Central Perk during a rainstorm.",
        inUniverseYear: 1995.8,
        inUniverseDisplay: "November 1995",
        releaseYear: 1995.8,
        releaseDisplay: "November 1995 (Season 2 Episode 7)"
      },
      {
        id: "fr-joey-drake",
        title: "Joey Becomes Dr. Drake Ramoray",
        description: "Joey gets cast as a neurosurgeon on Days of Our Lives, moving out of Chandler's apartment.",
        inUniverseYear: 1996.1,
        inUniverseDisplay: "January 1996",
        releaseYear: 1996.1,
        releaseDisplay: "January 1996 (Season 2 Episode 10)"
      },
      {
        id: "fr-smelly-cat-video",
        title: "Phoebe Records 'Smelly Cat' Video",
        description: "Phoebe stars in a professional music video for Smelly Cat, but her voice is secretly dubbed by another singer.",
        inUniverseYear: 1996.2,
        inUniverseDisplay: "February 1996",
        releaseYear: 1996.2,
        releaseDisplay: "February 1996 (Season 2 Episode 17)"
      },
      {
        id: "fr-the-break",
        title: "Ross and Rachel Go on a Break",
        description: "After an argument about Mark, Rachel suggests a break. Ross sleeps with Chloe the copy girl that same night.",
        inUniverseYear: 1997.2,
        inUniverseDisplay: "February 1997",
        releaseYear: 1997.2,
        releaseDisplay: "February 1997 (Season 3 Episode 15)"
      },
      {
        id: "fr-chick-duck",
        title: "Joey Buys Chick and Duck",
        description: "Joey buys a baby chick to save it, and Chandler later returns with a duck, creating their iconic pets.",
        inUniverseYear: 1997.3,
        inUniverseDisplay: "April 1997",
        releaseYear: 1997.3,
        releaseDisplay: "April 1997 (Season 3 Episode 21)"
      },
      {
        id: "fr-surrogacy-agreed",
        title: "Phoebe Agrees to Surrogacy",
        description: "Phoebe agrees to carry a baby for her half-brother Frank Jr. and his wife Alice.",
        inUniverseYear: 1997.8,
        inUniverseDisplay: "December 1997",
        releaseYear: 1997.8,
        releaseDisplay: "December 1997 (Season 4 Episode 11)"
      },
      {
        id: "fr-london-monica-chandler",
        title: "Monica & Chandler Sleep Together",
        description: "Monica and Chandler spend the night together in London before Ross's wedding, beginning their romance.",
        inUniverseYear: 1998.4,
        inUniverseDisplay: "May 1998",
        releaseYear: 1998.4,
        releaseDisplay: "May 1998 (Season 4 Episode 24)"
      },
      {
        id: "fr-ross-wrong-name",
        title: "Ross Says Rachel at the Altar",
        description: "Ross accidentally says: 'I take thee, Rachel' instead of Emily during his wedding vows in London.",
        inUniverseYear: 1998.5,
        inUniverseDisplay: "May 1998",
        releaseYear: 1998.5,
        releaseDisplay: "May 1998 (Season 4 Episode 24)"
      },
      {
        id: "fr-triplets-born",
        title: "Phoebe Gives Birth to Triplets",
        description: "Phoebe goes into labor and delivers triplets at the hospital, naming one of them Chandler.",
        inUniverseYear: 1998.8,
        inUniverseDisplay: "October 1998",
        releaseYear: 1998.8,
        releaseDisplay: "October 1998 (Season 5 Episode 3)"
      },
      {
        id: "fr-secret-revealed",
        title: "The Monica & Chandler Secret Out",
        description: "Phoebe spots Monica and Chandler from Ugly Naked Guy's apartment, starting a game of secrets: 'They don't know we know...'",
        inUniverseYear: 1999.1,
        inUniverseDisplay: "February 1999",
        releaseYear: 1999.1,
        releaseDisplay: "February 1999 (Season 5 Episode 14)"
      },
      {
        id: "fr-ralph-lauren",
        title: "Rachel Hired at Ralph Lauren",
        description: "Rachel gets a job at Ralph Lauren despite accidentally kissing her interviewer on the cheek during the meeting.",
        inUniverseYear: 1999.2,
        inUniverseDisplay: "March 1999",
        releaseYear: 1999.2,
        releaseDisplay: "March 1999 (Season 5 Episode 17)"
      },
      {
        id: "fr-vegas-marriage",
        title: "Ross and Rachel Marry in Vegas",
        description: "Ross and Rachel get extremely drunk and run out of a chapel married, leaving Monica and Chandler stunned.",
        inUniverseYear: 1999.4,
        inUniverseDisplay: "May 1999",
        releaseYear: 1999.4,
        releaseDisplay: "May 1999 (Season 5 Episode 24)"
      },
      {
        id: "fr-annulment",
        title: "Ross and Rachel Annulment",
        description: "Ross lies about getting an annulment, leading to a long legal process to officially dissolve their Vegas marriage.",
        inUniverseYear: 1999.7,
        inUniverseDisplay: "October 1999",
        releaseYear: 1999.7,
        releaseDisplay: "October 1999 (Season 6)"
      },
      {
        id: "fr-proposal",
        title: "Chandler Proposes to Monica",
        description: "After a misunderstanding with Richard, Monica fills the apartment with candles and proposes to Chandler, who finishes the question.",
        inUniverseYear: 2000.4,
        inUniverseDisplay: "May 2000",
        releaseYear: 2000.4,
        releaseDisplay: "May 2000 (Season 6 Episode 25)"
      },
      {
        id: "fr-drake-returns",
        title: "Dr. Drake Ramoray returns to DOOL",
        description: "Joey gets his character brought back to life via a brain transplant from Jessica Lockhart.",
        inUniverseYear: 2001.2,
        inUniverseDisplay: "February 2001",
        releaseYear: 2001.2,
        releaseDisplay: "February 2001 (Season 7 Episode 15)"
      },
      {
        id: "fr-rachel-pregnant",
        title: "Rachel is Pregnant at the Wedding",
        description: "Phoebe finds a positive pregnancy test in Monica's bathroom; Rachel confesses she is pregnant at the reception.",
        inUniverseYear: 2001.4,
        inUniverseDisplay: "May 2001",
        releaseYear: 2001.4,
        releaseDisplay: "May 2001 (Season 7 Episode 24)"
      },
      {
        id: "fr-spudnik",
        title: "Ross Wears Spudnik Costume",
        description: "Ross Geller dresses as a potato satellite (Spudnik) at Monica's Halloween party, competing in arm-wrestling with Chandler.",
        inUniverseYear: 2001.8,
        inUniverseDisplay: "October 2001",
        releaseYear: 2001.8,
        releaseDisplay: "October 2001 (Season 8 Episode 6)"
      },
      {
        id: "fr-emma-born",
        title: "Rachel Gives Birth to Emma",
        description: "After extremely long hours of labor, Rachel and Ross welcome their daughter, Emma Geller-Green.",
        inUniverseYear: 2002.4,
        inUniverseDisplay: "May 2002",
        releaseYear: 2002.4,
        releaseDisplay: "May 2002 (Season 8 Episode 24)"
      },
      {
        id: "fr-accidental-proposal",
        title: "Joey Accidentally Proposes to Rachel",
        description: "Joey picks up Ross's ring from the floor; Rachel misinterprets it as a proposal and says yes.",
        inUniverseYear: 2002.5,
        inUniverseDisplay: "May 2002",
        releaseYear: 2002.5,
        releaseDisplay: "May 2002 (Season 8 Episode 24)"
      },
      {
        id: "fr-barbados",
        title: "The Barbados Trips and Dating Swap",
        description: "In Barbados, Joey and Rachel kiss, while Ross kisses Charlie, shifting the romantic pairings.",
        inUniverseYear: 2003.4,
        inUniverseDisplay: "May 2003",
        releaseYear: 2003.4,
        releaseDisplay: "May 2003 (Season 9 Episode 24)"
      },
      {
        id: "fr-westchester-house",
        title: "Monica and Chandler Buy Westchester House",
        description: "Monica and Chandler decide to leave the city to raise children in a quiet house in Westchester.",
        inUniverseYear: 2003.9,
        inUniverseDisplay: "December 2003",
        releaseYear: 2003.9,
        releaseDisplay: "December 2003 (Season 10)"
      },
      {
        id: "fr-phoebe-wedding",
        title: "Phoebe Marries Mike in the Snow",
        description: "A major blizzard cancels their venue, leading Phoebe and Mike to marry in the street outside Central Perk.",
        inUniverseYear: 2004.1,
        inUniverseDisplay: "February 2004",
        releaseYear: 2004.1,
        releaseDisplay: "February 2004 (Season 10 Episode 12)"
      },
      {
        id: "fr-twins-adopted",
        title: "Monica and Chandler Adopt Twins",
        description: "Erica gives birth to twins; Monica and Chandler are surprised by a second baby, naming them Jack and Erica.",
        inUniverseYear: 2004.4,
        inUniverseDisplay: "May 2004",
        releaseYear: 2004.4,
        releaseDisplay: "May 2004 (Season 10 Episode 17)"
      },
      {
        id: "fr-got-off-plane",
        title: "Rachel Gets Off the Plane to Paris",
        description: "Rachel decides to stay with Ross, stepping off her flight to Paris and appearing at his door.",
        inUniverseYear: 2004.5,
        inUniverseDisplay: "May 2004",
        releaseYear: 2004.5,
        releaseDisplay: "May 2004 (Season 10 Episode 17)"
      },
      {
        id: "fr-finale-empty",
        title: "The Empty Apartment",
        description: "The six friends leave their keys on the kitchen counter and go to Central Perk for one final cup of coffee.",
        inUniverseYear: 2004.6,
        inUniverseDisplay: "May 2004",
        releaseYear: 2004.6,
        releaseDisplay: "May 2004 (Season 10 Episode 18)"
      },
      {
        id: "fr-joey-moves-la",
        title: "Joey Moves to Los Angeles",
        description: "Joey Tribbiani packs his bags and relocates to Hollywood to further his acting career.",
        inUniverseYear: 2004.8,
        inUniverseDisplay: "September 2004",
        releaseYear: 2004.8,
        releaseDisplay: "September 2004 (Joey Spin-off Pilot)"
      }
    ]
  },
  b99: {
    name: "Brooklyn Nine-Nine",
    color: "#1e3a8a",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`,
    lifeIcon: `<svg viewBox="0 0 24 24" class="life-icon" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    events: [
      {
        id: "b99-pilot",
        title: "Captain Holt Takes Command",
        description: "The strict and robotic Captain Raymond Holt takes over the 99th Precinct, immediately clashing with detective Jake Peralta.",
        inUniverseYear: 2013.7,
        inUniverseDisplay: "September 2013",
        releaseYear: 2013.7,
        releaseDisplay: "September 2013 (S1E1)"
      },
      {
        id: "b99-heist-1",
        title: "The First Halloween Heist",
        description: "Jake Peralta bets Captain Holt that he can steal Holt's Medal of Valor by midnight, initiating the precinct's annual heist tradition.",
        inUniverseYear: 2013.8,
        inUniverseDisplay: "October 2013",
        releaseYear: 2013.8,
        releaseDisplay: "October 2013 (S1E6)"
      },
      {
        id: "b99-the-bet",
        title: "The Bet Concludes",
        description: "Jake wins the arrest bet against Amy Santiago, forcing her to go on a terrible date but realizing he has feelings for her.",
        inUniverseYear: 2014.1,
        inUniverseDisplay: "January 2014",
        releaseYear: 2014.1,
        releaseDisplay: "January 2014 (S1E13)"
      },
      {
        id: "b99-undercover",
        title: "Jake Goes Undercover",
        description: "After being fired from the NYPD as cover, Jake Peralta goes deep undercover to infiltrate the Mafia.",
        inUniverseYear: 2014.2,
        inUniverseDisplay: "March 2014",
        releaseYear: 2014.2,
        releaseDisplay: "March 2014 (S1E22)"
      },
      {
        id: "b99-mafia-return",
        title: "Jake Returns from Undercover",
        description: "Jake returns to the 99th precinct after successfully taking down the Mafia family he infiltrated.",
        inUniverseYear: 2014.7,
        inUniverseDisplay: "September 2014",
        releaseYear: 2014.7,
        releaseDisplay: "September 2014 (S2E1)"
      },
      {
        id: "b99-heist-2",
        title: "Halloween II",
        description: "Captain Holt wins the second Halloween Heist with the help of the squad, proving Jake Peralta is not the ultimate detective/genius.",
        inUniverseYear: 2014.8,
        inUniverseDisplay: "October 2014",
        releaseYear: 2014.8,
        releaseDisplay: "October 2014 (S2E4)"
      },
      {
        id: "b99-parents-marriage",
        title: "Lynn and Darlene Get Married",
        description: "Charles Boyle's father Lynn and Gina Linetti's mother Darlene get married, making Charles and Gina step-siblings.",
        inUniverseYear: 2015.2,
        inUniverseDisplay: "March 2015",
        releaseYear: 2015.2,
        releaseDisplay: "March 2015 (S2E17)"
      },
      {
        id: "b99-holt-transfer-kiss",
        title: "Jake and Amy Kiss",
        description: "Captain Holt is forced to transfer to Public Relations by Madeline Wuntch. Jake and Amy kiss in the file room while undercover.",
        inUniverseYear: 2015.4,
        inUniverseDisplay: "May 2015",
        releaseYear: 2015.4,
        releaseDisplay: "May 2015 (S2E23)"
      },
      {
        id: "b99-dozerman-captain",
        title: "Captain Dozerman's Short Reign",
        description: "The efficiency-obsessed Seth Dozerman becomes captain of the 99, but quickly dies of a heart attack.",
        inUniverseYear: 2015.7,
        inUniverseDisplay: "September 2015",
        releaseYear: 2015.7,
        releaseDisplay: "September 2015 (S3E1)"
      },
      {
        id: "b99-heist-3",
        title: "Halloween III",
        description: "Amy Santiago wins the third heist, outsmarting both Jake and Holt, and cementing her status as a contender.",
        inUniverseYear: 2015.8,
        inUniverseDisplay: "October 2015",
        releaseYear: 2015.8,
        releaseDisplay: "October 2015 (S3E4)"
      },
      {
        id: "b99-holt-returns-99",
        title: "Holt Reclaims the 99",
        description: "Following the ousting of The Vulture, Captain Holt officially returns as commander of the 99th Precinct.",
        inUniverseYear: 2015.9,
        inUniverseDisplay: "December 2015",
        releaseYear: 2015.9,
        releaseDisplay: "December 2015 (S3E10)"
      },
      {
        id: "b99-witness-protection",
        title: "Witness Protection in Florida",
        description: "Threatened by mob boss Jimmy Figgis, Jake and Holt are placed in witness protection in Coral Palms, Florida.",
        inUniverseYear: 2016.4,
        inUniverseDisplay: "May 2016",
        releaseYear: 2016.4,
        releaseDisplay: "May 2016 (S3E23)"
      },
      {
        id: "b99-florida-life",
        title: "The Coral Palms Exile",
        description: "Jake and Holt live undercover as Larry and Greg in Florida, trying to adapt to suburban lives.",
        inUniverseYear: 2016.7,
        inUniverseDisplay: "September 2016",
        releaseYear: 2016.7,
        releaseDisplay: "September 2016 (S4E1)"
      },
      {
        id: "b99-figgis-defeat",
        title: "The Fall of Jimmy Figgis",
        description: "The 99th Precinct travels to Florida, successfully trapping and defeating crime boss Jimmy Figgis.",
        inUniverseYear: 2016.75,
        inUniverseDisplay: "October 2016",
        releaseYear: 2016.75,
        releaseDisplay: "October 2016 (S4E4)"
      },
      {
        id: "b99-heist-4",
        title: "Halloween IV",
        description: "Gina Linetti outsmarts the precinct to win the fourth Halloween Heist, declaring herself 'Ultimate Human/Genius'.",
        inUniverseYear: 2016.8,
        inUniverseDisplay: "October 2016",
        releaseYear: 2016.8,
        releaseDisplay: "October 2016 (S4E5)"
      },
      {
        id: "b99-gina-bus",
        title: "Gina is Hit by a Bus",
        description: "Shortly after promising to be a better listener, Gina Linetti is dramatically hit by a city bus.",
        inUniverseYear: 2017.1,
        inUniverseDisplay: "January 2017",
        releaseYear: 2017.1,
        releaseDisplay: "January 2017 (S4E12)"
      },
      {
        id: "b99-framed-prison",
        title: "Framed and Sentenced",
        description: "Lt. Melanie Hawkins frames Jake Peralta and Rosa Diaz for bank robbery, and the two are found guilty.",
        inUniverseYear: 2017.4,
        inUniverseDisplay: "May 2017",
        releaseYear: 2017.4,
        releaseDisplay: "May 2017 (S4E22)"
      },
      {
        id: "b99-prison-life",
        title: "Behind Bars",
        description: "Jake Peralta and Rosa Diaz experience prison life firsthand, while the squad works to clear their names.",
        inUniverseYear: 2017.7,
        inUniverseDisplay: "September 2017",
        releaseYear: 2017.7,
        releaseDisplay: "September 2017 (S5E1)"
      },
      {
        id: "b99-heist-5",
        title: "The Proposal Heist",
        description: "During the fifth Halloween Heist, Jake Peralta uses the championship belt to propose marriage to Amy Santiago.",
        inUniverseYear: 2017.8,
        inUniverseDisplay: "October 2017",
        releaseYear: 2017.8,
        releaseDisplay: "October 2017 (S5E4)"
      },
      {
        id: "b99-rosa-out",
        title: "Rosa Diaz Comes Out",
        description: "Detective Rosa Diaz officially comes out as bisexual to the squad and eventually to her parents.",
        inUniverseYear: 2017.9,
        inUniverseDisplay: "December 2017",
        releaseYear: 2017.9,
        releaseDisplay: "December 2017 (S5E10)"
      },
      {
        id: "b99-jake-amy-wedding",
        title: "The Wedding of Jake and Amy",
        description: "After a bomb threat cancels their original wedding venue, Jake and Amy get married outside the precinct.",
        inUniverseYear: 2018.4,
        inUniverseDisplay: "May 2018",
        releaseYear: 2018.4,
        releaseDisplay: "May 2018 (S5E22)"
      },
      {
        id: "b99-honeymoon",
        title: "The Honey-Moot",
        description: "Jake and Amy's beach honeymoon is crashed by a depressed Captain Holt after he is passed over for Commissioner.",
        inUniverseYear: 2019.0,
        inUniverseDisplay: "January 2019",
        releaseYear: 2019.0,
        releaseDisplay: "January 2019 (S6E1)"
      },
      {
        id: "b99-gina-departure",
        title: "Gina Linetti Leaves the NYPD",
        description: "Gina Linetti decides to leave the NYPD to follow her dreams of becoming an internet celebrity and entrepreneur.",
        inUniverseYear: 2019.1,
        inUniverseDisplay: "January 2019",
        releaseYear: 2019.1,
        releaseDisplay: "January 2019 (S6E4)"
      },
      {
        id: "b99-heist-6",
        title: "The Cinco de Mayo Heist",
        description: "A delayed Halloween Heist is held on Cinco de Mayo, which Lieutenant Terry Jeffords wins by outsmarting everyone.",
        inUniverseYear: 2019.3,
        inUniverseDisplay: "May 2019",
        releaseYear: 2019.3,
        releaseDisplay: "May 2019 (S6E16)"
      },
      {
        id: "b99-holt-patrol",
        title: "Holt Demoted to Patrol",
        description: "Madeline Wuntch demotes Captain Holt to a patrol officer after revealing he did not complete his required officer training.",
        inUniverseYear: 2019.4,
        inUniverseDisplay: "May 2019",
        releaseYear: 2019.4,
        releaseDisplay: "May 2019 (S6E18)"
      },
      {
        id: "b99-patrol-partner",
        title: "Officer Holt and Debbie",
        description: "Officer Holt walks the beat with his eccentric and unstable new partner, Officer Debbie Fogle.",
        inUniverseYear: 2020.1,
        inUniverseDisplay: "February 2020",
        releaseYear: 2020.1,
        releaseDisplay: "February 2020 (S7E1)"
      },
      {
        id: "b99-wuntch-death",
        title: "The Death of Wuntch",
        description: "Madeline Wuntch passes away, and Captain Holt holds a memorial service that he struggles to keep respectful.",
        inUniverseYear: 2020.2,
        inUniverseDisplay: "March 2020",
        releaseYear: 2020.2,
        releaseDisplay: "March 2020 (S7E8)"
      },
      {
        id: "b99-heist-7",
        title: "The Three-Phase Heist",
        description: "Rosa Diaz wins the seventh heist, revealing she won all three distinct parts of the heist throughout the year.",
        inUniverseYear: 2020.3,
        inUniverseDisplay: "April 2020",
        releaseYear: 2020.3,
        releaseDisplay: "April 2020 (S7E11)"
      },
      {
        id: "b99-mac-born",
        title: "The Birth of Mac",
        description: "Amy goes into labor during a massive NYC blackout. Jake rushes across the city, and they welcome their son Mac Peralta.",
        inUniverseYear: 2020.4,
        inUniverseDisplay: "April 2020",
        releaseYear: 2020.4,
        releaseDisplay: "April 2020 (S7E13)"
      },
      {
        id: "b99-rosa-resigns",
        title: "Rosa Diaz Resigns",
        description: "Distrustful of the system, Rosa Diaz resigns from the NYPD to start her own private investigation business.",
        inUniverseYear: 2021.6,
        inUniverseDisplay: "August 2021",
        releaseYear: 2021.6,
        releaseDisplay: "August 2021 (S8E1)"
      },
      {
        id: "b99-finale",
        title: "The Final Heist",
        description: "During a grand final heist, Jake Peralta announces he is resigning from the NYPD to raise Mac, ending the squad's era.",
        inUniverseYear: 2021.7,
        inUniverseDisplay: "September 2021",
        releaseYear: 2021.7,
        releaseDisplay: "September 2021 (S8E9/10)"
      }
    ]
  }
};
