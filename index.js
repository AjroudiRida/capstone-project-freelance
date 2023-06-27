const hamburgerbtn = document.querySelector("#hamburger");
const menu = document.querySelector(".menu-container");
hamburgerbtn.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
});

const closeMenu = document.querySelector(".close-menu");
closeMenu.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
});

// store team members in local storage

let teams  = {
  team1: {
    img: "./assets/images/team1.jpeg",
    name: "Daniel Thompson",
    heading: "A Tech Savvy Professional with a Diverse Skill Set and a Passion for Innovative Solutions.",
    subheading: "With a wealth of experience in the tech industry, Daniel Thompson stands out as a seasoned expert in various programming languages and frameworks."
  },
  team2: {
    img: "./assets/images/team2.jpeg",
    name: "Emma Johnson",
    heading: "Ecommerce expert driving growth through strategic marketing and customer-centric solutions.",
    subheading: "Experienced Shopify specialist driving growth through strategic marketing, customer-centric solutions, and a deep understanding of the ecommerce landscape."
  }
}

let localStorage = window['localStorage'];
localStorage.setItem("teams",JSON.stringify(teams));

window.addEventListener("load", () => {
  if (localStorage.getItem('teams')) {
    const teamKeys = Object.keys(JSON.parse(localStorage.getItem("teams")));
    const teamValues = Object.values(JSON.parse(localStorage.getItem("teams")));
    const target = document.querySelector(".teams-header");
    for (let i = 0; i < teamKeys.length; i += 1)
    {
      if (Object.prototype.hasOwnProperty.call(teamValues, i))
      {
        
        let team = `
              
                <div class="item-left">
                  <img src="`+teamValues[i].img+`">
                </div>
                <div class="item-right">
                  <h3>`+teamValues[i].name+`</h3>
                  <p>`+teamValues[i].heading+`</p>
                  <hr>
                  <p>`+teamValues[i].subheading+`</p>
                </div>
              
  `;
  
          let teamContainer = document.createElement("div");
          teamContainer.setAttribute("class", "team");
          teamContainer.innerHTML = team;
          target.insertAdjacentElement("afterend", teamContainer);
  
      }
    }
  
  }
});


