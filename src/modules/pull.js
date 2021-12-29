module.exports = async (page, draw_url) => {
  const navigationPromise = page.waitForNavigation();

  await navigationPromise;

  await page.goto(draw_url);

  await navigationPromise;

}