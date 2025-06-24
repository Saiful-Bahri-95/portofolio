const params = new URLSearchParams(window.location.search);
const theme = params.get("theme") || "website"; // default theme

document.body.classList.add(theme);

// Project data by theme
const projectsByTheme = {
  website: [
    {
      title: "e-Learning",
      description: "Elearning is a education website template built with Bootstrap 5. It is a clean, modern, and free eLearning HTML template with a beautiful design and unique & awesome features.",
      image: "image/elearning.jpg",
      link: "../a-website/elearning/index.html"
    },
    {
      title: "e-Learning",
      description: "Elearning is a free education website template built with Bootstrap 5. It is a clean, modern, and free eLearning HTML template with a beautiful design and unique & awesome features.",
      image: "image/elearning.jpg",
      link: "../a-website/elearning/index.html"
    },
    {
      title: "e-Learning",
      description: "Elearning is a free education website template built with Bootstrap 5. It is a clean, modern, and free eLearning HTML template with a beautiful design and unique & awesome features.",
      image: "image/elearning.jpg",
      link: "../a-website/elearning/index.html"
    },
  ],
  portofolio: [
    {
      title: "Kelly",
      description: "Kelly is a portfolio template with a modern and exclusive design. It is a template that enhances user engagement with an intuitive layout. The developer-friendly theme offers smooth customization with a clean codebase.",
      image: "image/kelly.jpg",
      link: "../a-portofolio/kelly/index.html"
    },
    {
      title: "Johnson",
      description: "MyResume is a responsive portfolio template for creative professionals. This is a free theme with a clean codebase. So it tweaks your branding effortlessly. The developer-friendly theme has optimized page speed ",
      image: "image/johnson.jpg",
      link: "../a-portofolio/johnson/index.html"
    },
    {
      title: "Kelly",
      description: "Elearning is a free education website template built with Bootstrap 5. It is a clean, modern, and free eLearning HTML template with a beautiful design and unique & awesome features.",
      image: "image/kelly.jpg",
      link: "../a-portofolio/kelly/index.html"
    },
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
   },
   {
      title: "Stylish",
      description: "Stylish is a free eCommerce shoe Store HTML template It is suitable for any eCommerce store, online shopping website, tech store.",
      image: "image/stylish.jpg",
      link: "../a-ecommerce/stylish/index.html"
   }
  ],
  branding: [
    {
      title: "Barber Shop",
      description: "Gentlemen's Barber Shop is free Bootstrap Bootstrap v5.2.2 HTML CSS template for your business. This one-page layout has a sidebar navigation menu.",
      image: "image/barber-shop.jpg",
      link: "../a-branding/barber-shop/index.html"
    },
    {
      title: "Highway",
      description: "Highway HTML Template has a full-page video banner and a grid image gallery. About page and blog page included. Main menu and contact form are sliding full-screen overlay.",
      image: "image/highway.jpg",
      link: "../a-branding/highway/index.html"
    },
    {
      title: "Polygon",
      description: ".Polygon HTML5 theme features image gallery, about page, services with hexagon icon boxes, contact form and maps. This one is a responsive Bootstrap layout.",
      image: "image/polygon.jpg",
      link: "../a-branding/polygon/index.html"
    },
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
