import asyncio
from playwright.async_api import async_playwright
import os
import subprocess
import time

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        # Start dev server
        process = subprocess.Popen(['npm', 'run', 'dev'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        # Wait for server to be ready
        max_retries = 10
        for i in range(max_retries):
            try:
                await page.goto('http://localhost:5173')
                break
            except:
                await asyncio.sleep(2)
        else:
            print("Server failed to start")
            process.terminate()
            return

        # Wait for animations to settle
        await asyncio.sleep(5)

        # Capture full page
        await page.screenshot(path='/home/jules/verification/full_site.png', full_page=True)
        print(f"Full site screenshot saved to /home/jules/verification/full_site.png")

        await browser.close()
        process.terminate()

if __name__ == "__main__":
    asyncio.run(capture())
