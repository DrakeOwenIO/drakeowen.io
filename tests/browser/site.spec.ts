import { test, expect } from "@playwright/test";
for (const width of [320, 375, 390, 768, 1024, 1440]) {
  test(`homepage and contact fit ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/", "/work", "/journal", "/about", "/connect"]) {
      await page.goto(path);
      await expect(page.locator("h1")).toBeVisible();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
    }
    await expect(
      page.getByRole("link", { name: "Save to Contacts" }),
    ).toBeVisible();
  });
}
for (const width of [320, 375, 390]) {
  test(`mobile navigation works at ${width}px`, async ({ browser }) => {
    const context = await browser.newContext({ hasTouch: true });
    const page = await context.newPage();
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Toggle navigation" });
    const menu = page.getByRole("navigation", { name: "Mobile navigation" });
    await expect(menu).not.toBeVisible();
    await toggle.tap();
    await expect(
      page.getByRole("button", { name: "Toggle navigation", expanded: true }),
    ).toBeVisible();
    for (const label of ["Home", "Work", "Journal", "About", "Connect"]) {
      await expect(
        menu.getByRole("link", { name: label, exact: true }),
      ).toBeVisible();
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await toggle.tap();
    await expect(menu).not.toBeVisible();
    await toggle.tap();
    await page.locator(".hero-caption").click();
    await expect(menu).not.toBeVisible();
    await toggle.focus();
    await page.keyboard.press("Space");
    await expect(menu).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(
      menu.getByRole("link", { name: "Home", exact: true }),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(menu).not.toBeVisible();
    await expect(toggle).toBeFocused();
    for (const [label, path] of [
      ["Home", "/"],
      ["Work", "/work"],
      ["Journal", "/journal"],
      ["About", "/about"],
      ["Connect", "/connect"],
    ]) {
      await toggle.tap();
      await menu.getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(path);
      await expect(menu).not.toBeVisible();
    }
    await toggle.tap();
    await page
      .getByRole("link", { name: "Connect", exact: true })
      .filter({ visible: true })
      .first()
      .click();
    await expect(menu).not.toBeVisible();
    await page.getByRole("link", { name: "Save to Contacts" }).focus();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("link", { name: "Save to Contacts" }),
    ).toBeFocused();
    await toggle.tap();
    await page.setViewportSize({ width: 1024, height: 844 });
    await expect(toggle).not.toBeVisible();
    await expect(page.locator("details.mobile-menu")).not.toHaveAttribute(
      "open",
    );
    await page.setViewportSize({ width, height: 844 });
    await expect(menu).not.toBeVisible();
    await context.close();
  });
}
test("mobile disclosure works before JavaScript is available", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  const page = await context.newPage();
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Toggle navigation" });
  const menu = page.getByRole("navigation", { name: "Mobile navigation" });
  await toggle.click();
  await expect(menu).toBeVisible();
  await toggle.click();
  await expect(menu).not.toBeVisible();
  await toggle.click();
  await menu.getByRole("link", { name: "Connect", exact: true }).click();
  await expect(page).toHaveURL("/connect");
  await expect(
    page.getByRole("link", { name: "Save to Contacts" }),
  ).toBeVisible();
  await context.close();
});
test("routes and metadata are present", async ({ page }) => {
  for (const path of ["/", "/work", "/journal", "/about", "/connect"]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("link[rel=canonical]")).toHaveAttribute(
      "href",
      `https://drakeowen.com${path === "/" ? "" : path}`,
    );
  }
});
test("vCard downloads with the expected contents", async ({
  page,
  request,
}) => {
  await page.goto("/connect");
  const downloadEvent = page.waitForEvent("download");
  await page.getByRole("link", { name: "Save to Contacts" }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe("Drake-Owen.vcf");
  const response = await request.get("/api/contact/vcard");
  expect(response.headers()["content-type"]).toBe("text/vcard; charset=utf-8");
  expect(await response.text()).toContain("FN:Drake Owen\r\n");
});
test("reduced motion and skip navigation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});

test("contact card shows verified links and loads the portrait on a narrow phone", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/connect");
  const card = page.locator(".contact-card");
  for (const [name, href] of [
    ["Email", "mailto:drakeowen@automatedresults.com"],
    ["Work phone", "tel:+18286808125"],
    ["Cell", "tel:+18645062854"],
    ["LinkedIn", "https://www.linkedin.com/in/drake-owen-688429163/"],
    ["GitHub", "https://github.com/DrakeOwenIO"],
    ["Automated Results", "https://automatedresults.com"],
  ]) {
    await expect(
      card.getByRole("link", { name: new RegExp(name) }),
    ).toHaveAttribute("href", href);
  }
  const portrait = card.getByRole("img", { name: "Drake Owen" });
  await expect(portrait).toBeVisible();
  await expect
    .poll(() =>
      portrait.evaluate((image) => (image as HTMLImageElement).naturalWidth),
    )
    .toBeGreaterThan(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
