import $ from 'jquery';

const renderPage = function() {
  let html = `
    <div class="about-page background">
      <div class="wrapper">
        <h1>About Me</h1>
        <p>My life in tech began with an interest in user interface design. I liked simple, usable, and intuitive interfaces. To pursue this, I received a masters in UX design from UC Berkeley.</p>
        <p>From there, I moved to a small web agency called Tecture, LLC working both as a UX designer and a front end developer. I designed and developed several websites, growing in both UX and development.</p>
        <p>I am now attending a Thinkful bootcamp in software engineering to further develop my technical skills.</p>
        <p>Outside of work</p>
        <ul>
          <li>Sports, fitness, and being active</li>
          <li>Health, nutrition, and cooking</li>
          <li>World, culture, and travel</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  `;

  $('main').html(html);
};

export default {
  renderPage
};
