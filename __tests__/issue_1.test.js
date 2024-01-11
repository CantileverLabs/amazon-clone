describe("Issue #1", () => {
  beforeAll(async () => {
    this.page = await globalThis.__BROWSER_GLOBAL__.newPage();
    await this.page.goto("http://localhost:3000");
    await this.page.setViewport({ width: 1280, height: 1024 });
  });
  it(
    "should be able to detect sidenav overlapping",
    async () => {
      // // Select the div elements using their selectors
      // const div1Selector = ".home__sidebar";
      // const div2Selector = ".home__products_section";

      // // Use Puppeteer to get bounding boxes of the div elements
      // const div1BoundingBox = await this.page.$eval(div1Selector, (div) => {
      //   const { x, y, width, height } = div.getBoundingClientRect();
      //   return { x, y, width, height };
      // });

      // const div2BoundingBox = await this.page.$eval(div2Selector, (div) => {
      //   const { x, y, width, height } = div.getBoundingClientRect();
      //   return { x, y, width, height };
      // });

      // // Check if divs overlap
      // const overlap = !(
      //   div2BoundingBox.x > div1BoundingBox.x + div1BoundingBox.width ||
      //   div2BoundingBox.x + div2BoundingBox.width < div1BoundingBox.x ||
      //   div2BoundingBox.y > div1BoundingBox.y + div1BoundingBox.height ||
      //   div2BoundingBox.y + div2BoundingBox.height < div1BoundingBox.y
      // );

      // expect(overlap).toBe(false);
    },
    30 * 1000
  );
});
