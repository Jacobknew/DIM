module.exports = {
  junkItemTemplate: '<%= reason %> / Conflicts: <%= hasConflict %>',
  junkReasonTemplate: '<%= combo[0] %> / <%= combo[1] %> - <%= reason %> <%= conflicts %>',
  //items that should not be included as part of the analysis
  skipTags: ['junk'],
  //items that should not be shown as having junk perks
  ignoreTags: ['keep', 'favorite'],
  //set this to true to always keep unique armor items even if it's a year 1 item
  keepUniqueAlways: false,
  //unwanted individual single perks (any column)
  unwantedPerks: [
    //these archetypes have plenty of ammo so very rare to need to scavenge/reserve it
    'Auto Rifle Scavenger',
    'Pulse Rifle Scavenger',
    'Scout Rifle Scavenger',
    'Sidearm Scavenger',
    'Auto Rifle Reserves',
    'Pulse Rifle Reserves',
    'Scout Rifle Reserves',
    'Sidearm Reserves',
    'Submachine Gun Reserves',
    //I rarely do melee so remove those perks with every other perk
    'Impact Induction',
    'Invigoration',
    'Hands-On',
    //Bow doesn't need reload speed improvements, plenty of ammo so no need to buff that either
    'Bow Reloader',
    'Bow Reserves',
    'Arrow Scavenger',
    //who needs to really aim these anyway?
    'Unflinching Grenade Launcher Aim',
    'Unflinching Power Aim',
    //Primary Ammo is already plentiful and if we're going to make a spec something that affects all Power weapons is meh
    'Primary Ammo Finder',
    'Unflinching Power Aim',
    'Power Dexterity',
    //I don't want every combination that exists for Light Reactor (super energy from fusion rifle kills)
    'Light Reactor',
    'Remote Connnection'
  ],
  wantedPerkPairs: [
    ['Light Reactor', 'Fusion Rifle Reserves'],
    ['Light Reactor', 'Special Ammo Finder'],
    ['Remote Connection', 'Sniper Rifle Reserves'],
    ['Remote Connection', 'Special Ammo Finder'],

    ['Impact Induction', 'Special Ammo Finder'],
    ['Invigoration', 'Special Ammo Finder'],
    ['Hands-On', 'Special Ammo Finder'],
    ['Impact Induction', 'Heavy Ammo Finder'],
    ['Invigoration', 'Heavy Ammo Finder'],
    ['Hands-On', 'Heavy Ammo Finder'],
    ['Impact Induction', 'Heavy Ammo Finder'],

    //keep scavenger and sidearm perks if it has a matching aim/dexterity perk
    ['Unflinching Light Arms Aim', 'Submachine Gun Reserves'],
    ['Unflinching Submachine Gun Aim', 'Submachine Gun Reserves'],

    ['Unflinching Light Arms Aim', 'Sidearm Reserves'],
    ['Unflinching Sidearm Aim', 'Sidearm Reserves'],

    ['Light Arms Dexterity', 'Submachine Gun Scavenger'],
    ['Submachine Gun Dexterity', 'Submachine Gun Scavenger'],

    ['Light Arms Dexterity', 'Sidearm Scavenger'],
    ['Sidearm Dexterity', 'Sidearm Scavenger']
  ],
  //unwanted combos (first column + second column)
  unwantedPerkPairs: [['Power Weapon Loader', 'Sword Scavenger']],
  // RL/LF/Sword Perk + non-matching RL/LF/Sword Perk
  // real example: LF loader + sword scavener
  uniqueWeaponSlots: ['Sword', 'Rocket', 'Linear', 'Machine'],

  // if you have the generic type you don't need the specific type (these generic are the same speed as the specific)
  genericEtsPerks: {
    // this applies to gauntlets, machine gun isn't specified but testing shows it has an improvement
    'Large Weapon': ['Rocket Launcher', 'Grenade Launcher', 'Shotgun', 'Machine Gun'],
    // these apply to both gauntlets and chests
    'Light Arms': ['Hand Cannon', 'Submachine Gun', 'Sidearm', 'Bow'],
    //these apply to gauntlets, chest and boots
    Rifle: [
      'Scout Rifle',
      'Auto Rifle',
      'Pulse Rifle',
      'Sniper Rifle',
      'Linear Fusion Rifle',
      'Fusion Rifle'
    ],
    // these apply to boots only
    'Oversize Weapon': ['Rocket Launcher', 'Grenade Launcher', 'Shotgun', 'Bow'],
    // these two apply to helmets only
    'Scatter Projectile': [
      'Auto Rifle',
      'Submachine Gun',
      'Pulse Rifle',
      'Sidearm',
      'Fusion Rifle'
    ],
    'Precision Weapon': [
      'Hand Cannon',
      'Scout Rifle',
      'Trace Rifle',
      'Bow',
      'Linear Fusion Rifle',
      'Sniper Rifle'
      //'Shotgun' applies to Slug Shotguns but that's only the Chaperone so Shotgun Targeting is still needed
    ]
  },
  //if you have for example: Light Arms/Large Weapon/Rifle Loader + Special Ammo Finder you don't need Kinetic Weapon Loader + Special Ammo Finder
  genericTypeEquivalents: {
    'Kinetic Weapon': {
      Helmet: ['Precision Weapon', 'Scatter Projectile'],
      Gauntlets: ['Rifle', 'Light Arms', 'Large Weapon'],
      'Chest Armor': ['Rifle', 'Light Arms'],
      Boots: ['Rifle', 'Light Arms', 'Oversize Weapon']
    },
    'Energy Weapon': {
      Helmet: ['Precision Weapon', 'Scatter Projectile'],
      Gauntlets: ['Rifle', 'Light Arms', 'Large Weapon'],
      'Chest Armor': ['Rifle', 'Light Arms'],
      Boots: ['Rifle', 'Light Arms', 'Oversize Weapon']
    },
    'Power Weapon': {
      Helmet: ['Precision Weapon'],
      Gauntlets: ['Rifle', 'Large Weapon'],
      'Chest Armor': ['Rifle'],
      Boots: ['Rifle', 'Oversize Weapon']
    }
  },
  // these use the term 'slightly' which indicates it's less effective than the fast generic versions as well as the specific weapon version
  genericTypeNames: {
    // this applies to chests only
    'Large Arms': ['Rocket Launcher', 'Grenade Launcher', 'Shotgun', 'Machine Gun'],
    'Kinetic Weapon': [
      'Scout Rifle', // Rifle
      'Auto Rifle', // Rifle
      'Pulse Rifle', // Rifle
      'Sniper Rifle', // Rifle
      'Shotgun', //Large Arms
      'Grenade Launcher', //Large Arms
      'Bow', //Light Arms
      'Hand Cannon', // Light Arms
      'Submachine Gun', // Light Arms
      'Sidearm' // Light Arms
    ],
    'Energy Weapon': [
      'Scout Rifle', // Rifle
      'Auto Rifle', // Rifle
      'Pulse Rifle', // Rifle
      'Sniper Rifle', // Rifle
      'Fusion Rifle', // Rifle
      'Shotgun', // Large Arms
      'Grenade Launcher', // Large Arms
      'Bow', //Light Arms
      'Hand Cannon', // Light Arms
      'Submachine Gun', // Light Arms
      'Sidearm' // Light Arms
    ],
    'Power Weapon': [
      'Sword',
      'Rocket Launcher', // Large Arms
      'Grenade Launcher', // Large Arms
      'Machine Gun', // Large Arms
      'Shotgun', // Large Arms
      'Linear Fusion Rifle', // Rifle
      'Sniper Rifle' //Rifle
    ]
  }
};
