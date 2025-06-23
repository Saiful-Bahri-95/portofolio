const projects = [
  {
    title: "Project A",
    description: "Deskripsi singkat tentang Project A.",
    image: "image/hexashopp.JPG",
    link: "./a_shopping/index.html"
  },
  {
    title: "Project B",
    description: "Deskripsi singkat tentang Project B.",
    image: "image/img2.jpg",
    link: "#"
  },
  {
    title: "Project C",
    description: "Deskripsi singkat tentang Project C.",
    image: "image/img3.jpg",
    link: "#"
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
