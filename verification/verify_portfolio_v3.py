import asyncio
from playwright.async_api import async_playwright
import os

async def verify_portfolio():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Open the local index.html file
        file_path = "file://" + os.path.abspath("docs/index.html")
        await page.goto(file_path)

        # Wait for terminal simulation to start and animations to initialize
        await page.wait_for_timeout(8000)

        # Take desktop screenshot
        await page.set_viewport_size({"width": 1440, "height": 900})
        await page.screenshot(path="/home/jules/verification/portfolio_v3_desktop.png", full_page=True)

        # Take mobile screenshot
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.screenshot(path="/home/jules/verification/portfolio_v3_mobile.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_portfolio())
