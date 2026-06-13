import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})
        await page.goto("http://localhost:5000")

        # Wait for terminal simulation to finish
        await asyncio.sleep(15)

        await page.screenshot(path="masterpiece_verification.png", full_page=True)
        print("Screenshot saved as masterpiece_verification.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
