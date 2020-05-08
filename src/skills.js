import $ from 'jquery';

import htmlImage from './img/tech-logos/html5-mark.svg';
import cssImage from './img/tech-logos/css3-mark.svg';
import sassImage from './img/tech-logos/sass-circle.svg';
import bootstrapImage from './img/tech-logos/bootstrap.svg';
import javascriptImage from './img/tech-logos/javascript-small.png';
import jqueryImage from './img/tech-logos/jquery.svg';
import reactImage from './img/tech-logos/react.svg';
import angularImage from './img/tech-logos/angular.svg';
import nodejsImage from './img/tech-logos/nodejs-icon.svg';
import npmImage from './img/tech-logos/npm-red.svg';
import webpackImage from './img/tech-logos/webpack-noborder.svg';
import githubImage from './img/tech-logos/github.svg';
import wordpressImage from './img/tech-logos/wordpress.svg';
import phpImage from './img/tech-logos/php.svg';

// Each skill goes into a category
// Each skill has a title, image, and image apsect ratio
const skills = {
  Web: [['HTML', htmlImage, 'tall'], ['CSS', cssImage, 'tall'], ['SASS', sassImage, 'square'], ['Bootstrap', bootstrapImage, 'square']],
  JavaScript: [['JavaScript', javascriptImage, 'tall'], ['jQuery', jqueryImage, 'square'], ['React', reactImage, 'square'], ['Angular', angularImage, 'tall'], ['Node.js', nodejsImage, 'square'], ['npm', npmImage, 'wide'], ['Webpack', webpackImage, 'square']],
  Other: [['Github', githubImage, 'square'], ['Wordpress', wordpressImage, 'square'], ['php', phpImage, 'wide']]
};

const renderPage = function() {
  let html = '<div class="skills-page background"><div class="wrapper"><h1>Skills</h1>';

  for (let key in skills) {
    html += `<h2 class="hidden">${key}</h2><div class="skills-container">`;
    skills[key].forEach((skill) => {
      html += `
        <div class="skill hidden">
          <div class="image-container ${skill[2]}">
            <img src="${skill[1]}" alt="${skill[0]} Logo">
          </div>
          <div class="title">${skill[0]}</div>
        </div>`;
    });
    html += '</div>';
  }

  html += '</div></div>';

  $('main').html(html);

  animatePage();
};

const animatePage = function() {
  $('.hidden').each(function(i) {
    let hiddenElement = $(this);
    setTimeout(function() {
      hiddenElement.removeClass('hidden');
    }, 200*i);
  });
};

export default {
  renderPage
};
