import $ from 'jquery';

const renderPage = function() {
  let html = `
    <div class="wrapper">
      <h1>This is the Skills Page</h1>
    </div>
  `;

  $('main').html(html);
};

export default {
  renderPage
};
