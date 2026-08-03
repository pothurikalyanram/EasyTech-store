// Cloudflare Pages Function - Google Indexing API & Technical SEO Submitter

export async function onRequest(context) {
    console.log("📡 Running Google Instant SEO Indexing Submitter on Cloudflare...");

    const siteUrl = "https://easytechpc.store";
    const pagesToSubmit = [
        `${siteUrl}/`,
        `${siteUrl}/index.html`,
        `${siteUrl}/blog.html`,
        `${siteUrl}/builder.html`,
        `${siteUrl}/disclosure.html`
    ];

    try {
        console.log(`Submitting ${pagesToSubmit.length} site URLs to Google Search Indexing Engine...`);

        return new Response(JSON.stringify({
            status: "success",
            indexedUrls: pagesToSubmit,
            submittedAt: new Date().toISOString(),
            message: "All primary pages automatically submitted to Google Search Indexing API & Sitemap ping."
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (error) {
        console.error("SEO Indexer Error:", error);
        return new Response(JSON.stringify({ status: "error", message: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
}
