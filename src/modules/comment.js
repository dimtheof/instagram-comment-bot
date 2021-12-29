module.exports = async (page, comment, delay, cnt) => {
  const navigationPromise = page.waitForNavigation({ timeout: parseInt(delay) * 6000 });
  
      console.log('writing comment... ', cnt);
      // click the comment section
      await page.waitForSelector('textarea[class="Ypffh"]');
      await page.click('textarea[class="Ypffh"]');

      // write comment
      await page.keyboard.type(comment);

      // submit
      await page.waitForSelector('button[type="submit"]');
      await page.click('button[type="submit"]');
  
}
