const hamburgerbtn = document.querySelector('#hamburger');
const menu = document.querySelector('.menu-container');
hamburgerbtn.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
});

const closeMenu = document.querySelector('.close-menu');
closeMenu.addEventListener('click', () => {
  menu.classList.toggle('showMenu');
});

// store team members in local storage

const teams = {
  team1: {
    img: './assets/images/team1.jpeg',
    name: 'Daniel Thompson',
    heading: 'A Tech Savvy Professional with a Diverse Skill Set and a Passion for Innovative Solutions.',
    subheading: 'With a wealth of experience in the tech industry, Daniel Thompson stands out as a seasoned expert in various programming languages and frameworks.',
  },
  team2: {
    img: './assets/images/team2.jpeg',
    name: 'Emma Johnson',
    heading: 'Ecommerce expert driving growth through strategic marketing and customer-centric solutions.',
    subheading: 'Experienced Shopify specialist driving growth through strategic marketing, customer-centric solutions, and a deep understanding of the ecommerce landscape.',
  },
  team3: {
    img: './assets/images/team3.jpeg',
    name: 'Amelia Rose Parker',
    heading: 'HTML and CSS Guru: Mastering the Art of Web Design and Styling',
    subheading: "Whether it's designing intuitive user interfaces or optimizing website performance, Amelia's dedication and proficiency make him an invaluable asset in the world of web development.",
  },
  team4: {
    img: './assets/images/team4.jpeg',
    name: 'Benjamin James Anderson',
    heading: 'A skilled and dedicated individual with a solid background in web development.',
    subheading: 'With years of experience in the industry, Anderson possesses a comprehensive understanding of HTML, CSS, JavaScript, and other essential web technologies.',
  },
};

const { localStorage } = window;
localStorage.setItem('teams', JSON.stringify(teams));

window.addEventListener('load', () => {
  if (localStorage.getItem('teams')) {
    const teamKeys = Object.keys(JSON.parse(localStorage.getItem('teams')));
    const teamValues = Object.values(JSON.parse(localStorage.getItem('teams')));
    const target = document.querySelector('.teams-header');
    const teamAllContainer = document.createElement('div');
    teamAllContainer.setAttribute('class', 'teamAllContainer');
    let n = 0;
    if (window.innerWidth <= 768) {
      n = 2;
    } else if (window.innerWidth > 768) {
      n = teamKeys.length;
    }

    for (let i = 0; i < n; i += 1) {
      if (Object.prototype.hasOwnProperty.call(teamValues, i)) {
        const team = `
              
                <div class="item-left">
                  <img src="${teamValues[i].img}">
                </div>
                <div class="item-right">
                  <h3>${teamValues[i].name}</h3>
                  <p>${teamValues[i].heading}</p>
                  <hr>
                  <p>${teamValues[i].subheading}</p>
                </div>
              
  `;

        const teamContainer = document.createElement('div');
        teamContainer.setAttribute('class', 'team');
        teamContainer.innerHTML = team;
        teamAllContainer.appendChild(teamContainer);
        target.insertAdjacentElement('afterend', teamAllContainer);
      }
    }
  }
});
