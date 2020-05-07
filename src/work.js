import $ from 'jquery';

const projects = [{
  name: 'Placeholder Project',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  url: 'https://www.google.com',
  github: 'https://github.com/Taeil2/thinkful-portfolio',
  image: 'https://via.placeholder.com/500x300',
  technologies: ['html', 'css'],
  skills: [],
}];

const renderPage = function() {
  let html = `
    <div class="wrapper">

    </div>
  `;

  projects.forEach(function(project) {
    let githubLink = '';
    if (project.github.length > 0) {
      githubLink = `<a href="${project.github}"><i class="fab fa-github"></i></a>`;
    }

    html += `
      <div class="project">
        <div>
          <img src="${project.image}" alt="${project.name} Screenshot">
          <div class="${project.technologies.map(technology => technology).join(' ')} ${project.skills.map(skill => skill).join(' ')}">
            <div class="technologies">

            </div>
            <div class="skills">
            </div>
          </div>
        </div>
        <div>
          <h3>${project.name}</h3>
          <p>${project.description}</h3>
          <div>
          <a href="${project.url}">Visit Site</a>
          ${githubLink}
        </div>
      </div>
    `;
  });

  $('main').html(html);
};

export default {
  renderPage
};
