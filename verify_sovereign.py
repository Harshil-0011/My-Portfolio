from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 1000})
        page.goto("http://localhost:8002")
        # Wait for assets to load
        time.sleep(5)
        # Move mouse to trigger magnifier effect
        page.mouse.move(640, 500)
        time.sleep(1)
        page.screenshot(path="final_sovereign_v2.png")
        browser.close()

if __name__ == "__main__":
    verify()
