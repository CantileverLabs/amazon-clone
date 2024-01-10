describe("Issue #2", () => {
  beforeAll(async () => {
    this.page = await globalThis.__BROWSER_GLOBAL__.newPage();
    await this.page.goto("http://localhost:3000/login");
    await this.page.setViewport({ width: 1280, height: 1024 });
    console.log(await this.page.title())
    await this.page.screenshot({
      path: "./testing.img"
    });
  });

  it("Password field should be disabled if email is invalid", async () => {
    const inputField1Selector =
      ".login__container > form > input[type='email']";
    const inputField2Selector =
      ".login__container > form > input[type='password']";

    // Input text into the first input field
    const textToInput = "Hello, Puppeteer!";
    await this.page.type(inputField1Selector, textToInput);

    // Check if the adjacent input field is read-only
    const isInputField2ReadOnly = await this.page.$eval(
      inputField2Selector,
      (inputField) => inputField.readOnly
    );
    expect(isInputField2ReadOnly).toBe(true);
  });
});
