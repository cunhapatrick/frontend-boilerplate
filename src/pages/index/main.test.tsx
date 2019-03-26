import React from "react";
import Main from "./main";

// NOTE enzyme to mount components
// import { shallow, mount } from "enzyme";
// NOTE Faker is used to generate random values to e2e tests
// import faker from "faker";
import puppeteer from "puppeteer";

describe("Example Test Page", () => {
  it("Should render a button", async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ""
    });

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".title");

    const html = await page.$eval(".example", e => e.innerHTML);
    expect(html).toBe("Hello Conaz");

    browser.close();
  }, 16000);
});
