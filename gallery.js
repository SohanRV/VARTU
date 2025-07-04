function openModal(el) {
  const modal = document.getElementById("modal");
  const content = document.querySelector(".modal-content");
  modal.classList.add("active");
  content.innerHTML = "";

  if (el.tagName === "IMG") {
    content.innerHTML = `<img src="${el.src}" alt="">`;
  } else if (el.tagName === "VIDEO") {
    content.innerHTML = `<video src="${el.src}" controls autoplay></video>`;
  }
}

const machineDetails = {
  "KATRAN AWS": {
    type: "img",
    src: "assets/Katran AWS.png",
    description: `
      <ul style="text-align: left; padding-left: 1rem;">
        <li>Handles 300–1000 KG/hour of garden waste</li>
        <li>Durable, laser-cut precision blades</li>
        <li>Large fast-feed hopper for easy input</li>
        <li>Available in Three Phase motors</li>
      </ul>
    `
  },
  "D Leaf 505": {
    type: "img",
    src: "assets/KatranDleaf505.jpg",
    description: `
      <ul style="text-align: left; padding-left: 1rem;">
        <li>Designed For Dry-Leaf, Green-Leaf, Wet-Leaf</li>
        <li>Stainless steel blades, everlasting</li>
        <li>Suitable for Industrial Builds and others</li>
        <li>Anti-choking Design</li>
        <li>Up to 100 Bags Per Day Capacity (8 Hours)</li>
      </ul>
    `
  },
  "D Leaf 303": {
    type: "img",
    src: "assets/KatranDleaf303.png",
    description: `
      <ul style="text-align: left; padding-left: 1rem;">
        <li>Designed For Dry-Leaf, Green-Leaf, Wet-Leaf</li>
        <li>Stainless steel blades, everlasting</li>
        <li>Suitable for Industrial Builds and others</li>
        <li>Anti-choking Design</li>
        <li>Up to 15 Bags Per Day Capacity (3 Hours)</li>
      </ul>
    `
  },
  "D Leaf 202": {
    type: "img",
    src: "assets/Dleaf202.jpg",
    description: `
      <ul style="text-align: left; padding-left: 1rem;">
        <li>Designed For Dry-Leaf, Green-Leaf, Wet-Leaf</li>
        <li>Stainless steel blades, everlasting</li>
        <li>Suitable for Industrial Builds and others</li>
        <li>Anti-choking Design</li>
        <li>Up to 10 Bags Per Day Capacity (3 Hours)</li>
      </ul>
    `
  },
  "KATRAN REPLAST 300": {
    type: "img",
    src: "assets/Katran Replast.png",
    description: `
      <ul style="text-align: left; padding-left: 1rem;">
        <li>Comes in various power capacities</li>
        <li>Input capacity range - 10 KG/hour to 1000 KG/hour</li>
        <li>Output size control range from 5 mm to 20 mm</li>
        <li>Machine running RPM - 15 RPM to 90 RPM as per requirement</li>
        <li>Input Material - PET, PVC, Foam, LDPE, HDPE, Polypropylene, Polyester Bags, Bio-Medical Plastic Waste & Municipal Plastic Waste</li>
      </ul>
    `
  },
  "Compost Hut": {
    type: "img",
    src: "assets/Compost Hut.png",
    description: `
      <ul style="text-align: left; padding-left: 1rem;">
        <li>Input Capacity - 100 Kg/Day, 1500 Kg Total</li>
        <li>Space Required - 2 Square Meters for machine installation</li>
        <li>Inbuilt leachate collection of 80 litre capacity</li>
        <li>Minimum electricity use - Just 2 KW/Day</li>
        <li>Made with Stainless Steel, Steel with powder coating and Industrial Grade HDPE making it rust proof</li>
        <li>Odour free daily Composting System</li>
      </ul>
    `
  }
};

function openModalByName(machineName) {
  const modal = document.getElementById("modal");
  const content = document.querySelector(".modal-content");
  modal.classList.add("active");

  const data = machineDetails[machineName];

  if (!data) {
    content.innerHTML = `<p>Machine info not found.</p>`;
    return;
  }

  if (data.type === "img") {
    content.innerHTML = `
      <img src="${data.src}" alt="${machineName}">
      <p>${data.description}</p>
    `;
  } else if (data.type === "video") {
    content.innerHTML = `
      <video src="${data.src}" controls autoplay></video>
      <p>${data.description}</p>
    `;
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  const content = document.querySelector(".modal-content");
  modal.classList.remove("active");
  content.innerHTML = "";
}
