// Add smooth pop-up or enhanced interaction if required
document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(1.1)';
        container.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
        container.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('click', () => {
        alert(`You clicked on "${container.querySelector('.container-title').innerText}"`);
    });
});
// Team Member Data
const teamMembers = [
    { name: "John Doe", role: "CEO", img: "team1.jpg" },
    { name: "Jane Smith", role: "CTO", img: "team2.jpg" },
    { name: "David Lee", role: "Designer", img: "team3.jpg" },
    { name: "Sophia Kim", role: "Developer", img: "team4.jpg" },
];

// Dynamically Add Team Members
const teamContainer = document.querySelector('.team-container');

teamMembers.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');
    memberDiv.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
    `;
    teamContainer.appendChild(memberDiv);
});

// Placeholder Map
const map = document.getElementById('map');
map.innerHTML = "Interactive Map Coming Soon!";



document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".interactive-image-l");
    const title = document.querySelector(".image-title-l");
  
    image.addEventListener("mouseenter", function () {
      // Set the title's opacity to 0 on hover
      title.style.opacity = "0";
    });
  
    image.addEventListener("mouseleave", function () {
      // Set the title's opacity back to 0.5 when leaving the hover
      title.style.opacity = "0.5";
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".interactive-image-r");
    const title = document.querySelector(".image-title-r");
  
    image.addEventListener("mouseenter", function () {
      // Set the title's opacity to 0 on hover
      title.style.opacity = "0";
    });
  
    image.addEventListener("mouseleave", function () {
      // Set the title's opacity back to 0.5 when leaving the hover
      title.style.opacity = "0.5";
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".interactive-image-l");
    const title = document.querySelector(".image-title-l");
  
    image.addEventListener("mouseenter", function () {
      // Set the title's opacity to 0 on hover
      title.style.opacity = "0";
    });
  
    image.addEventListener("mouseleave", function () {
      // Set the title's opacity back to 0.5 when leaving the hover
      title.style.opacity = "0.5";
    });
  });


  
  document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-link");
  
    socialLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.5) rotate(360deg)";
        link.style.transition = "all 0.4s ease-in-out";
      });
  
      link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
      });
    });
  });
  