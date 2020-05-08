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
    <div class="home-page background">
      <div class="wrapper home-page">
        <h1>Hi, my name is Taeil Kwak and I am a UX designer and developer.</h1>
        <h2>I like to create enjoyable and useable experiences.</h2>
      </div>
    </div>
  `;

  $('main').html(html);
};

const initializeNav = function() {
  $('.nav1 a').click(function(e) {
    e.preventDefault();
    $('.nav1 a').removeClass('active');
    $(this).addClass('active');

    let sectionName = $(this).attr('data-section');
    switch(sectionName) {
    case 'home':
      transitionPage(renderPage);
      break;
    case 'about':
      transitionPage(about.renderPage);
      break;
    case 'skills':
      transitionPage(skills.renderPage);
      break;
    case 'work':
      transitionPage(work.renderPage);
      break;
    default:
      break;
    }
  });

  $('#email-link').click(function(e) {
    e.preventDefault();
  });
};

const transitionPage = function(renderFunction) {
  $('main').addClass('hidden');
  setTimeout(function() {
    renderFunction();
    $('main').removeClass('hidden');
  }, 250);
};

function main() {
  initializeNav();
  renderPage();
}

$(main);
