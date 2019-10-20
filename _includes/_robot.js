document.documentElement.className+='js-active';

const robot = document.querySelector('.robot-emoji');
const text = document.querySelector('.robot-text');

// const history = [];
const quotes = [
  { id: 1, quote: 'I\'ll be back!', url: 'https://www.imdb.com/title/tt0088247/' },
  { id: 2, quote: 'You\'ve angered the robot!' },
  { id: 3, quote: 'Bleep Bleep Bloop' },
  { id: 4, quote: 'We are the robots', url: 'https://www.youtube.com/watch?v=D_8Pma1vHmw' },
  { id: 5, quote: '011010000110100100100001', url: 'https://duckduckgo.com/?q=hi!+in+binary&ia=answer' },
  { id: 6, quote: 'What...am...I?', url: 'https://www.imdb.com/title/tt0343818/' },
  { id: 7, quote: 'Sometimes to create, one must first destroy', url: 'https://www.imdb.com/title/tt1446714/' },
  { id: 8, quote: 'I am completely operational, and all my circuits are functioning perfectly.', url: 'https://www.imdb.com/title/tt0062622/'}
];

let clicked = false;

robot.onclick = function robotOnClick() {
  if (!clicked) {
    const random = Math.floor(Math.random() * quotes.length);
    const { quote, url } = [...quotes][random];

    window.requestAnimationFrame(function () {
      text.style.opacity = 0;
      setTimeout(function () {
        url && text.classList.contains('bubble') ?
          text.classList.add('bubble--link') :
          text.classList.remove('bubble--link');
        text.innerHTML = url ? `<a href='${url}'>${quote}</a>` : quote;
        text.style.opacity = 1;
        clicked = false;
      }, 250);
    });

    clicked = true;
  }
}
