const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "index.html",
      "rulebook.html",
      "favicon.ico",
      "css/main.css",
      "js/toc.js",
      "images/basestar-critical.gif",
      "images/basestar-hangar.gif",
      "images/basestar-structural.gif",
      "images/basestar-weapons.gif",
      "images/cac_example.png",
      "images/event_example.png",
      "images/final_battle.png",
      "images/ic.png",
      "images/ionian-critical.png",
      "images/ionian-hangar.png",
      "images/ionian-personnel.png",
      "images/ionian-raiders.png",
      "images/ionian-structural.png",
      "images/ionian-weapons.png",
      "images/loyalty.png",
      "images/overlay.png",
      "images/skill.png",
      "images/skillcheck.png",
      "images/skillcheckability.png",
      "images/starting_layout.png",
      "images/succession.jpg",
      "images/supercrisis.png",
      "images/trauma_tokens.png",
      "images/icons/190.png",
      "images/icons/512.png",
    ]),
  );
});
