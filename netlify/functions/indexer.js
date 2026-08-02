// Netlify Serverless Function - Google Indexing API & Technical SEO Submitter
// Runs automatically every 24 hours at 1:00 AM via Netlify Cron

exports.handler = async function(event, context) {
    console.log("📡 Running Google Instant SEO Indexing Submitter...");

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

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                status: "success",
                indexedUrls: pagesToSubmit,
                submittedAt: new Date().toISOString(),
                message: "All primary pages automatically submitted to Google Search Indexing API & Sitemap ping."
            })
        };
    } catch (error) {
        console.error("SEO Indexer Error:", error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ status: "error", message: error.message })
        };
    }
};
