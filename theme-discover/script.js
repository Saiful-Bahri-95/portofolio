const params = new URLSearchParams(window.location.search);
const theme = params.get("theme") || "website"; // default theme

document.body.classList.add(theme);

// Project data by theme
const projectsByTheme = {
  website: [
    {
      title: "Modern Web",
      description: "Template modern untuk website portofolio dan bisnis.",
      image: "image/modernweb.jpg",
      link: "#"
    }
  ],
  portofolio: [
    {
      title: "My CV",
      description: "Contoh portofolio untuk profesional di bidang desain.",
      image: "image/portofolio.jpg",
      link: "#"
    }
  ],
  ecommerce: [
    {
    title: "Hexa Shopp",
    description: "HexaShop is an ecommerce HTML CSS template for your online stores. This layout is based on Bootstrap v4.5.2 CSS framework.",
    image: "image/hexa.jpg",
    link: "../a-ecommerce/hexa/index.html"
    },
    {
    title: "Food Mart",
    description: "Foodmart is an eCommerce website template for any grocery store, It is suitable for any eCommerce store, online shopping website.",
    image: "image/foodmart.jpg",
    link: "../a-ecommerce/foodmart/index.html"
    },
    {
    title: "Furry",
    description: "Furry is a HTML Bootstrap 5 website template for pet-related e-commerce stores. It is mainly specially designed for pet stores. ",
    image: "image/furry.jpg",
    link: "../a-ecommerce/furry/index.html"
   }
  ],
  branding: [
    {
      title: "Creative Brand",
      description: "Branding dinamis untuk startup dan agensi.",
      image: "image/branding.jpg",
      link: "#"
    }
  ]
};

const projects = projectsByTheme[theme] || [];
const container = document.getElementById("project-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="card-content">
      <h3 class="card-title">${project.title}</h3>
      <p class="card-description">${project.description}</p>
      <a href="${project.link}" class="card-button" target="_blank">View Project</a>
    </div>
  `;
  container.appendChild(card);
});
