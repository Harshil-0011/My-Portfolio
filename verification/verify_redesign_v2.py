from playwright.sync_api import Page, expect, sync_playwright
import time

def test_verify_redesign(page: Page):
    # Go to the local dev server
    page.goto("http://localhost:5185/")

    # Wait for the hero section to load
    expect(page.get_by_text("HARSHIL")).to_be_visible()

    # Screenshot of the Hero Section
    page.screenshot(path="/home/jules/verification/hero_redesign.png")

    # Scroll to Archives
    page.get_by_text("Archives").first.scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path="/home/jules/verification/archives_redesign.png")

    # Scroll to Ledger (where experience is)
    page.get_by_text("Ledger").first.scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path="/home/jules/verification/ledger_redesign.png")

    # Scroll to Gateway
    page.get_by_text("Gateway").first.scroll_into_view_if_needed()
    time.sleep(1)
    page.screenshot(path="/home/jules/verification/gateway_redesign.png")

    # Verify the "Request Full CV" button functionality
    cv_button = page.get_by_text("Request Full CV")
    cv_button.click()
    time.sleep(1)
    # Check if we are at the Gateway section
    expect(page.get_by_text("INITIATE SECURE TRANSMISSION")).to_be_in_viewport()
    page.screenshot(path="/home/jules/verification/cv_request_scroll.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        try:
            test_verify_redesign(page)
        finally:
            browser.close()
