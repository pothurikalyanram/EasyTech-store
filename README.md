# 🚀 EasyTech E-Commerce — Headless Amazon Affiliate Storefront

Welcome to **EasyTech (`easytechpc.store`)**, a high-performance **Headless Amazon Affiliate Storefront** & Custom 3D PC Builder platform engineered for Indian tech buyers and workstation builders.

---

## 🎯 Core Project Vision & Architecture

```
[ Visitor Browses / Searches easytechpc.store ]
                    │
                    ▼
[ Headless Frontend (app.js + index.html) ]
                    │
   (Direct Amazon CDN Image & Live Price Projection)
                    │
                    ▼
[ Amazon India Products Grid (m.media-amazon.com) ]
                    │
 (Customer Clicks "Buy Now" ➔ Opens Amazon Checkout in New Tab)
                    │
                    ▼
[ Amazon Payment Portal + Affiliate Tag: easytech020-21 ]
                    │
                    ▼
[ Daily Commission Automated Tracking on Amazon Associates Dashboard ]
```

### Key Vision Pillars:
1. **Zero Database Dependency**: Bypasses heavy local database storage by projecting live high-resolution product images directly from Amazon India's official media CDN (`m.media-amazon.com`).
2. **0% 404 Error Checkout Guarantee**: Every product card routes directly to Amazon India's live checkout search engine (`https://www.amazon.in/s?k=PRODUCT_NAME&tag=easytech020-21`).
3. **Automated Serverless Cloudflare Functions**:
   - **Google Gemini AI Blog Engine** (`/api/blog-generator`): Hardware review writer.
   - **Amazon Price & Stock Sync Engine** (`/api/price-updater`): Live price & stock verification.
   - **Google Search Console Instant Indexer** (`/api/indexer`): SEO sitemap & URL submitter.
   - **Admin Security Passkey Engine** (`/api/send-otp`): Resend API two-factor verification.

---

## 📁 Repository File Map

* **`index.html`**: Main marketplace storefront with live search, category filters, infinite scroll, and Amazon deal cards.
* **`app.js`**: Core storefront logic, `syncLiveAmazonPrices()`, `getAmazonLink()`, out-of-stock badges, and multi-language switcher.
* **`styles.css`**: Modern clean white design system with responsive card layouts and smooth hover animations.
* **`builder.html` & `builder.js`**: Custom PC Builder studio with wattage calculator and 1-click Amazon affiliate cart builder.
* **`blog.html`**: Full-page technical review reader displaying AI-generated benchmarks, specs, and Amazon deal buttons.
* **`super-admin-master.html` & `super-admin.js`**: Founder Control Panel with Master PIN (`2026`), State-wise India SEO Traffic Map, and Ad Slot Manager.
* **`functions/api/`**: Cloudflare Pages Serverless Functions for Gemini AI blogging, Amazon price sync, Google SEO indexing, and admin OTP authentication.
* **`sitemap.xml` & `robots.txt`**: Search engine indexer files.
* **`_headers` & `_redirects`**: Cloudflare Pages security headers and route rewrites.

---

## ⚡ How to Deploy to Cloudflare Pages (Automated Setup)

### Method 1: Using Command Line (Wrangler CLI)
Run the following command in your terminal:
```bash
npx wrangler pages deploy . --project-name easytech-store
```
*(If prompted, log in with your Cloudflare account in the browser window that opens)*.

### Method 2: Connecting GitHub Repository to Cloudflare Pages Dashboard
1. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com/)** ➔ **Workers & Pages** ➔ **Create Application** ➔ **Pages** ➔ **Connect to Git**.
2. Select your repository `EasyTech-store`.
3. Build Settings:
   - **Framework Preset**: None
   - **Build Command**: *(Leave empty)*
   - **Build output directory**: `.`
4. Click **Save and Deploy**. Cloudflare will automatically build and deploy your site with free serverless functions enabled!

---

## 🌐 Linking Your GoDaddy Domain (`easytechpc.store`) to Cloudflare (Free DNS & SSL)

Follow these 4 simple steps to point your GoDaddy domain to Cloudflare:

1. **Add Your Domain in Cloudflare**:
   - In Cloudflare Dashboard, click **Add a Site** and type your GoDaddy domain (e.g. `easytechpc.store`).
   - Select the **Free** plan ($0/mo).
   - Cloudflare will automatically scan your existing DNS records.

2. **Copy Cloudflare Nameservers**:
   - Cloudflare will provide 2 unique nameservers (e.g., `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com`).

3. **Update Nameservers in GoDaddy**:
   - Log into **[GoDaddy Domain Portfolio](https://dcc.godaddy.com/)**.
   - Click your domain (`easytechpc.store`) ➔ **DNS** ➔ **Nameservers**.
   - Click **Change Nameservers** ➔ **I'll use my own nameservers**.
   - Paste the 2 Cloudflare Nameservers and click **Save**.

4. **Attach Custom Domain in Cloudflare Pages**:
   - In Cloudflare Pages project (`easytech-store`), go to **Custom Domains** ➔ **Set up a Custom Domain**.
   - Enter `easytechpc.store` (and `www.easytechpc.store`).
   - Cloudflare will automatically activate free SSL/TLS, DDoS protection, and global CDN caching!

---

**© 2026 EasyTech (easytechpc.store) - All Rights Reserved.**
