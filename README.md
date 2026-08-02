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
3. **Automated Serverless AI Engines**:
   - **Google Gemini 1.5 Flash AI Blog Bot**: Daily automated hardware review writer.
   - **Amazon Price & Stock Sync Engine**: Ultra-fast **5-minute live price & stock verification**.
   - **Google Search Console Instant Indexer**: Daily 1:00 AM SEO sitemap & URL submitter.

---

## 📁 Repository File Map

* **`index.html`**: Main marketplace storefront with live search, category filters, infinite scroll, and Amazon deal cards.
* **`app.js`**: Core storefront logic, `syncLiveAmazonPrices()`, `getAmazonLink()`, out-of-stock badges, and multi-language switcher.
* **`styles.css`**: Modern clean white design system with responsive card layouts and smooth hover animations.
* **`builder.html` & `builder.js`**: Custom 3D PC Builder studio with Three.js rendering, power wattage calculator, and 1-click Amazon affiliate cart builder.
* **`blog.html`**: Full-page technical review reader displaying AI-generated benchmarks, specs, and Amazon deal buttons.
* **`super-admin-master.html` & `super-admin.js`**: Founder Control Panel with Master PIN (`2026`), State-wise India SEO Traffic Map, and Ad Slot Manager (Slots 1–7).
* **`netlify/functions/`**: Serverless functions for Gemini AI blogging (`blog-generator.js`), Amazon price sync (`price-updater.js`), and Google SEO indexing (`indexer.js`).
* **`sitemap.xml` & `robots.txt`**: Search engine indexer files.
* **`netlify.toml`**: Scheduled cron configuration and security headers.

---

## ⚡ How to Deploy to Netlify (1-Minute Setup)

1. Open **[Netlify Dashboard](https://app.netlify.com/projects/easytech-store/deploys)**.
2. Drag and drop the folder `E:\EasyTech E-Commerce Automated Website Workspace` into the Netlify upload box.
3. Once uploaded, click **`Publish deploy`** on today's top build!

---

**© 2026 EasyTech (easytechpc.store) - All Rights Reserved.**
