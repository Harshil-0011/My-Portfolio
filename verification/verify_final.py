from playwright.sync_api import Page, expect, sync_playwright
import time

def test_portfolio_final(page: Page):
    # Go to the local dev server
    page.goto("http://localhost:5173")

    # Wait for the page to load
    time.sleep(3)

    # Verify Hero Name (use first() to avoid strict mode violations if multiple exist)
    expect(page.get_by_text("HARSHIL", exact=True).first).to_be_visible()
    expect(page.get_by_text("GORASIYA", exact=True).first).to_be_visible()

    # Verify Ticker
    expect(page.get_by_text("SYSTEM_STATUS: OPTIMIZED").first).to_be_visible()

    # Take screenshot of Hero
    page.screenshot(path="verification/final_hero.png", full_page=False)

    # Scroll to Archives
    page.locator("#archives").scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path="verification/final_archives.png")

    # Scroll to Gateway
    page.locator("#gateway").scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path="verification/final_gateway.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        try:
            test_portfolio_final(page)
        finally:
            browser.close()
