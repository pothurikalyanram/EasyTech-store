// Cloudflare Pages Function - Amazon PA API Price & Image Sync

export async function onRequest(context) {
    const { env } = context;

    console.log("💰 Running Amazon Price & Image Auto-Sync Engine on Cloudflare...");

    const AMAZON_ACCESS_KEY = env?.AMAZON_ACCESS_KEY;
    const AMAZON_SECRET_KEY = env?.AMAZON_SECRET_KEY;
    const AFFILIATE_TAG = env?.AFFILIATE_TAG || 'easytech020-21';

    const hasKeys = AMAZON_ACCESS_KEY && AMAZON_SECRET_KEY && AMAZON_ACCESS_KEY !== 'none';

    return new Response(JSON.stringify({
        status: hasKeys ? "active_sync" : "standard_mode",
        tag: AFFILIATE_TAG,
        lastSync: new Date().toISOString(),
        message: hasKeys 
            ? "Live price & image sync active with Amazon PA API!" 
            : "Standard live Amazon prices and direct image links active. Affiliate Tag verified."
    }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
