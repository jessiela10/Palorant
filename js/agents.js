const agents = [
  {
    id: "jett",
    name: "Jett",
    role: "Duelist",
    color: "#8bd3f7",
    description:
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    abilities: [
      {
        name: "Cloudburst",
        key: "Q",
        keyImage: "./assets/images/Cloudburst.png",
        description:
          "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
      },
      {
        name: "Updraft",
        key: "E",
        keyImage: "./assets/images/Updraft (2).png",
        description: "INSTANTLY propel Jett high into the air.",
      },
      {
        name: "Tailwind",
        key: "C",
        keyImage: "./assets/images/Tailwind.png",
        description:
          "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward.",
      },
      {
        name: "Blade Storm",
        key: "X",
        keyImage: "./assets/images/Blade-Storm.png",
        description:
          "EQUIP a set of highly accurate throwing knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.",
      },
    ],
    portrait:
      "./assets/images/Jett.png",
    background:
      "./assets/images/backgroundJett.png",
    roleIcon:
      "./assets/images/Duelist.png",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    role: "Duelist",
    color: "#ff8e79",
    description:
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    abilities: [
      {
        name: "Blaze",
        key: "Q",
        keyImage: "./assets/images/Blaze.png",
        description:
          "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
      },
      {
        name: "Curveball",
        key: "E",
        keyImage: "./assets/images/CurveBall.png",
        description:
          "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
      },
      {
        name: "Hot Hands",
        key: "C",
        keyImage: "./assets/images/Hot hands.png",
        description:
          "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
      },
      {
        name: "Run It Back",
        key: "X",
        keyImage: "./assets/images/Run-it-back.png",
        description:
          "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
      },
    ],
    portrait:
      "./assets/images/Phoniex.png",
    background:
      "./assets/images/backgroundPhoneix.png",
    roleIcon:
      "./assets/images/Duelist.png",
  },
  {
    id: "sova",
    name: "Sova",
    role: "Initiator",
    color: "#7aa2e3",
    description:
      "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    abilities: [
      {
        name: "Shock Bolt",
        key: "Q",
        keyImage: "./assets/images/Shock-Bold.png",
        description:
          "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
      },
      {
        name: "Recon Bolt",
        key: "E",
        keyImage: "./assets/images/Recon-Bolt.png",
        description:
          "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
      },
      {
        name: "Owl Drone",
        key: "C",
        keyImage: "./assets/images/Owl-Drone.png",
        description:
          "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
      },
      {
        name: "Hunter's Fury",
        key: "X",
        keyImage: "./assets/images/Hunter's.png",
        description:
          "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
      },
    ],
    portrait:
      "./assets/images/Sova.png",
    background:
      "./assets/images/backgroundSova.png",
    roleIcon:
      "./assets/images/Duelist.png",
  },
  {
    id: "brimstone",
    name: "Brimstone",
    role: "Controller",
    color: "#ff8e79",
    description:
      "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.",
    abilities: [
      {
        name: "Incendiary",
        key: "Q",
        keyImage: "./assets/images/Incendiary.png",
        description:
          "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
      },
      {
        name: "Sky Smoke",
        key: "E",
        keyImage: "./assets/images/Sky-smoke.png",
        description:
          "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
      },
      {
        name: "Stim Beacon",
        key: "C",
        keyImage: "./assets/images/Stim-Bacon.png",
        description:
          "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
      },
      {
        name: "Orbital Strike",
        key: "X",
        keyImage: "./assets/images/Sky-smoke.png",
        description:
          "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
      },
    ],
    portrait:
      "./assets/images/BrimStone.png",
    background:
      "./assets/images/backgroundBrim.png",
    roleIcon:
      "./assets/images/Blaze.png",
  },
  {
    id: "sage",
    name: "Sage",
    role: "Sentinel",
    color: "#6ddea8",
    description:
      "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    abilities: [
      {
        name: "Barrier Orb",
        key: "Q",
        keyImage: "./assets/images/Sky-smoke.png",
        description:
          "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.",
      },
      {
        name: "Slow Orb",
        key: "E",
        keyImage: "./assets/images/Run-it-back.png",
        description:
          "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
      },
      {
        name: "Healing Orb",
        key: "C",
        keyImage: "./assets/images/Hunter's.png",
        description:
          "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
      },
      {
        name: "Resurrection",
        key: "X",
        keyImage: "./assets/images/Blaze.png",
        description:
          "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
      },
    ],
    portrait:
      "./assets/images/Sage.png",
    background:
      "./assets/images/backgroundSage.png",
    roleIcon:
      "./assets/images/Duelist.png",
  },
];


const agentsContainer = document.getElementById("agentsContainer");
const agentModal = document.getElementById("agentModal");
const modalClose = document.getElementById("modalClose");


function loadAgents() {
  agentsContainer.innerHTML = "";

  agents.forEach((agent) => {
    const agentCard = document.createElement("div");
    agentCard.className = "agent-card";
    agentCard.dataset.id = agent.id;

    agentCard.innerHTML = `
      <div class="agent-bg" style="background-image: url('${agent.background}')">
        <img class="agent-portrait" src="${agent.portrait}" alt="${agent.name}">
      </div>
      <div class="agent-info">
        <h2 class="agent-name">${agent.name}</h2>
        <div class="agent-role" style="background-color: ${agent.color}">${agent.role}</div>
        <p class="agent-bio">${agent.description.substring(0, 120)}...</p>
      </div>
    `;

    agentCard.addEventListener("click", () => openModal(agent));
    agentsContainer.appendChild(agentCard);
  });
}

function openModal(agent) {
  document.body.style.overflow = "hidden";
  document.getElementById("modalHeader").style.backgroundImage = `url('${agent.background}')`;
  document.getElementById("modalPortrait").src = agent.portrait;
  document.getElementById("modalAgentName").textContent = agent.name;

  const modalAgentRole = document.getElementById("modalAgentRole");
  modalAgentRole.innerHTML = `
    <img src="${agent.roleIcon}" class="agent-role-icon" alt="${agent.role}">
    ${agent.role}
  `;
  modalAgentRole.style.backgroundColor = agent.color;

  document.getElementById("modalAgentDescription").textContent = agent.description;

  const abilitiesContainer = document.getElementById("modalAbilities");
  abilitiesContainer.innerHTML = "";

  agent.abilities.forEach((ability) => {
    const abilityElement = document.createElement("div");
    abilityElement.className = "ability";
    abilityElement.innerHTML = `
      <div class="ability-icon" style="background-color: ${agent.color}">
        <img src="${ability.keyImage}" alt="${ability.key} key" class="ability-key-image">
      </div>
      <div class="ability-info">
        <h4>${ability.name}</h4>
        <p>${ability.description}</p>
      </div>
    `;
    abilitiesContainer.appendChild(abilityElement);
  });

  document.documentElement.style.setProperty("--agent-color", agent.color);

  agentModal.style.display = "block";
}

function closeModal() {
  document.body.style.overflow = "auto";
  agentModal.style.display = "none";
}

modalClose.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === agentModal) {
    closeModal();
  }
});

loadAgents();