const projects = [
  {
    title: "Hexa Shopp",
    description: "HexaShop is an ecommerce HTML CSS template for your online stores. This layout is based on Bootstrap v4.5.2 CSS framework.",
    image: "image/hexa.jpg",
    link: "./a_shopping/hexa/index.html"
  },
  {
    title: "Food Mart",
    description: "Foodmart is an eCommerce website template for any grocery store, It is suitable for any eCommerce store, online shopping website.",
    image: "image/foodmart.jpg",
    link: "./a_shopping/foodmart/index.html"
  },
  {
    title: "Furry",
    description: "Furry is a HTML Bootstrap 5 website template for pet-related e-commerce stores. It is mainly specially designed for pet stores. ",
    image: "image/furry.jpg",
    link: "./a_shopping/furry/index.html"
  }
];

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
