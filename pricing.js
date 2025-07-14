const pricingData = [
  {
    title: "Basic Cut",
    description: "Clean and classic haircut.",
    price: "$20",
    features: ["✔ Haircut & styling", "✔ Neck shave", "✔ 20 minutes"],
    highlight: false,
  },
  {
    title: "Premium Package",
    description: "For the gentleman who wants the best.",
    price: "$40",
    features: [
      "✔ Haircut & skin fade",
      "✔ Beard trim & style",
      "✔ Hot towel finish",
      "✔ 45 minutes",
    ],
    highlight: true,
  },
  {
    title: "Beard Trim",
    description: "Clean up and shape your beard.",
    price: "$15",
    features: ["✔ Beard line-up", "✔ Razor or clipper trim", "✔ 15–20 minutes"],
    highlight: false,
  },
];

const container = document.getElementById("pricingCards");

pricingData.forEach((pkg) => {
  const card = document.createElement("div");
  card.className = `bg-[#1a1a1a] rounded-lg p-6 border ${
    pkg.highlight
      ? "border-yellow-600 scale-105 shadow-lg"
      : "border-white/10 hover:border-yellow-600 transition"
  }`;

  card.innerHTML = `
      <h3 class="text-2xl font-bold mb-2">${pkg.title}</h3>
      <p class="text-gray-400 mb-6">${pkg.description}</p>
      <div class="text-yellow-500 text-3xl font-extrabold mb-4">${
        pkg.price
      }</div>
      <ul class="text-gray-300 mb-6 space-y-2">
        ${pkg.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <button class="w-full py-2 mt-4 bg-yellow-600 text-white font-bold rounded hover:bg-yellow-500 transition">
        Book Now
      </button>
    `;
  container.appendChild(card);
});

// toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});
