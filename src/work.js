import $ from 'jquery';

import quizAppImage from './img/projects/thinkful-quiz-app.png';

const projects = [{
  name: 'Quiz App',
  description: 'This Video Game History Quiz was written by Yousef and I. We compiled 5 multiple choice questions about video game history. We choose this topic based on our common interests and wanted to make it fun/interesting. The technologies we used to build this app were HTML, CSS, and jQuery.',
  url: 'https://thinkful-ei-orka.github.io/Quiz-App_Taeil-Yousef/',
  github: 'https://github.com/thinkful-ei-orka/Quiz-App_Taeil-Yousef',
  image: quizAppImage,
  technologies: ['html', 'css', 'jquery'],
  skills: ['development'],
},
{
  name: 'Placeholder Project',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  url: 'https://www.google.com',
  github: 'https://github.com/Taeil2/thinkful-portfolio',
  image: 'https://via.placeholder.com/500x300',
  technologies: ['html', 'css', 'js'],
  skills: ['ux', 'development'],
},
{
  name: 'Placeholder Project',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  url: 'https://www.google.com',
  github: 'https://github.com/Taeil2/thinkful-portfolio',
  image: 'https://via.placeholder.com/500x300',
  technologies: ['html', 'css', 'js'],
  skills: ['ux', 'development'],
}
];

const renderPage = function() {
  let html = '<div class="project-page background"><div class="wrapper">';

  projects.forEach(function(project) {
    let githubLink = '';
    if (project.github.length > 0) {
      githubLink = `<a href="${project.github}" class="github-link"><i class="fab fa-github"></i></a>`;
    }

    html += `
      <div class="project hidden">
        <div class="content">
          <div class="image">
            <img src="${project.image}" alt="${project.name} Screenshot">
            <div class="${project.technologies.map(technology => technology).join(' ')} ${project.skills.map(skill => skill).join(' ')}">
              <div class="technologies">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js"></i>
              </div>
              <div class="skills">
              </div>
            </div>
          </div>
          <div class="description">
            <h3>${project.name}</h3>
            <p>${project.description}</h3>
            <div>
              <a href="${project.url}" class="btn">Visit Site</a>
              ${githubLink}
            </div>
          </div>
        </div>
      </div>
    `;
  });
  html += '</div></div>';

  $('main').html(html);

  animatePage();
};

const animatePage = function() {
  let projects = $('.project');
  let offset = 400;

  setTimeout(function() {
    // fade in first project
    $('.project:first-of-type').removeClass('hidden');

    // fade in projects on scroll
    $(window).scroll(function() {
      let bottomPos = $(window).scrollTop() + $(window).height();
      projects.each(function(i) {
        if (projects[i].offsetTop < bottomPos - offset) {
          $(projects[i]).removeClass('hidden');
        }
      });
    });
  }, 250);
};

export default {
  renderPage
};
