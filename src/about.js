import $ from 'jquery';

const renderPage = function() {
  let html = `
    <div class="about-page background">
      <div class="wrapper">
        <h1>About Me</h1>
        <p>My life in tech began with an interest in user interface design. I liked simple, usable, and intuitive interfaces. To pursue this, I learned about UX and user-centered design from the School of Information at UC Berkeley.</p>
        <p>From there, I moved to a small web agency called Tecture, LLC working both as a UX designer and a front end developer. I designed and developed several websites, growing in both UX and development.</p>
        <p>I am now attending a Thinkful bootcamp in software engineering to further develop my technical skills. I am eager to try something new where I can continue to learn and grow with others.</p>
        <p>Outside of work, I love sports, fitness, and being active. You can find me at the gym or the outdoors most days. I also like to be healthy, cook, and play instruments. I am very globally curious. I love to explore the world and experience different cities and cultures.</p>
        </ul>
      </div>
    </div>
  `;

  $('main').html(html);
};

export default {
  renderPage
};
