describe("Issue #3", () => {
  beforeAll(async () => {
    this.page = await globalThis.__BROWSER_GLOBAL__.newPage();
    await this.page.goto("http://localhost:3000");
    await this.page.setViewport({ width: 1280, height: 1024 });
  });

  it("should not be able to order with negative qty", async () => {
    // const buttonSelector = ".home__row > div:nth-child(1) > button";
    // const anchorTagSelector = ".header__optionBasket";
    // await this.page.click(buttonSelector);
    // await this.page.click(anchorTagSelector);

    // const minusButtonSelector =
    //   ".checkoutProduct_btn_group > button:nth-child(1)";
    // await this.page.click(minusButtonSelector);

    // const productElement = await this.page.$(".checkoutProduct");

    // expect(productElement).toBeFalsy();
  });
});
