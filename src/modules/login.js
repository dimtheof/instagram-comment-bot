const {
  login_url
} = require('../uri_s.json');

let yourUser, yourPass;

if (require('../credencials.json')) {
  const {
    user,
    password
  } = require('../credencials.json');

  yourUser = user;
  yourPass = password;
} else {
  const {
    user,
    password
  } = require('../credencials.template.json');

  yourUser = user;
  yourPass = password;
}

module.exports = async page => {
  const navigationPromise = page.waitForNavigation();

  // load login page
  await page.goto(login_url);

  await navigationPromise;

  // go to username
  await page.waitForSelector('input[name="username"]');
  await page.click('input[name="username"]');

  await navigationPromise;

  // write username
  await page.type('input[name="username"]', yourUser);

  // go to password
  await page.waitForSelector('input[name="password"]');
  await page.click('input[name="password"]');

  await navigationPromise;

  // write password
  await page.type('input[name="password"]', yourPass);

  // click Enter
  await page.waitForSelector('button[class="sqdOP  L3NKy   y3zKF     "]');
  await page.click('button[class="sqdOP  L3NKy   y3zKF     "]');

  await navigationPromise;

  // close poput
   await page.waitForSelector('button[class="aOOlW   HoLwm "]');
   await page.click('button[class="aOOlW   HoLwm "]');
}