const puppeteer = require('puppeteer');
const {
  question
} = require('readline-sync');

const sleep = ms => new Promise(res => setTimeout(res, ms));

const {
  toComment,
  delay
} = require('./credencials.json');

// module to login
const login = require('./modules/login.js');
// module to pull page
const pull = require('./modules/pull.js');
// module to comment
const comment = require('./modules/comment');

// url to pull
const draw_url = question('> url to draw: ');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--window-size=770,720']
  });
  const page = await browser.newPage();


  await login(page);

  await pull(page, draw_url);

  for (let cnt=1; cnt < 5000; cnt++) {
    await comment(page, toComment, delay, cnt);
    await sleep(30000);
  }

  console.log('end');


  // await browser.close();
})();