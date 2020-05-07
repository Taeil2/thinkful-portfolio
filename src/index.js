import 'normalize.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import './styles.css';

import $ from 'jquery';
import about from './about';
import skills from './skills';
import work from './work';

const renderPage = function() {
  let html = `
    <div class="wrapper">
      <h1>Hi, my name is Taeil Kwak and I am a UX designer and developer.</h1>
      <h2>I like to create enjoyable and useable experiences.</h2>
    </div>
  `;

  $('main').html(html);
};

const initializeNav = function() {
  $('.nav1 a').click(function(e) {
    e.preventDefault();
    let sectionName = $(this).attr('data-section');
    switch(sectionName) {
    case 'home':
      renderPage();
      break;
    case 'about':
      about.renderPage();
      break;
    case 'skills':
      skills.renderPage();
      break;
    case 'work':
      work.renderPage();
      break;
    default:
      break;
    }
    $('#email-link').click(function(e) {
      e.preventDefault();

    });
  });
};


function main() {
  initializeNav();
  renderPage();
}

$(main);
