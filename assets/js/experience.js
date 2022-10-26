AOS.init();

//  Work experience cards

const experiencecards = document.querySelector('.experience-cards');
const exp = [
  {
    title: 'Community development Project',
    cardImage: 'assets/images/experience-page/brac.jpg',
    place: 'BRAC(Bangladesh Rural Advancement Committee',
    time: '(May, 2020 - present)',
    desp: '<li>BRAC NGO’s education projrct I consider myself as a volentier</li> <li> We were visiting some local poor areas in the village side to find some villegers Boys/Girls to provide them free education.</li>',
  },
  {
    title: 'Student Developer',
    cardImage: 'assets/images/experience-page/gsoc.png',
    place: 'Google Summer Of Code',
    time: '(Mar - Aug, 2019)',
    desp: '<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>',
  },
];

const showCards2 = () => {
  let output = '';
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener('DOMContentLoaded', showCards2);

// Volunteership Cards

const volunteership = document.querySelector('.volunteership');
const volunteershipcards = [
  {
    title: 'GirlScript Summer Of Code 2020',
    cardImage: 'assets/images/experience-page/1.jpg',
    description:
      'Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.',
  },
  {
    title: 'StudentCode-in 2020',
    cardImage: 'assets/images/experience-page/2.jpg',
    description:
      'Responsible for handling open source contributions for the project Awesome Developer Portfolio.',
  },
  {
    title: 'PClub Summer Of Code 2020',
    cardImage: 'assets/images/experience-page/3.jpg',
    description:
      'Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.',
  },
  {
    title: 'Hakin-Codes',
    cardImage: 'assets/images/experience-page/4.jpg',
    description:
      'Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.',
  },
];

const showCards = () => {
  let output = '';
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};



