// Cloudflare Worker Entrypoint - Safe Static Asset Handler

export default {
  async fetch(request, env, ctx) {
    try {
      if (env && env.ASSETS && typeof env.ASSETS.fetch === 'function') {
        return await env.ASSETS.fetch(request);
      }
    } catch (err) {
      console.warn("Asset fetch fallback mode:", err);
    }

    // Direct fallback response if ASSETS binding is initializing
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EasyTech E-Commerce</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
    .card { background: #1e293b; padding: 40px; border-radius: 16px; border: 1px solid #334155; max-width: 480px; }
    h1 { color: #38bdf8; margin-bottom: 12px; }
    p { color: #94a3b8; font-size: 15px; }
    a { color: #34d399; text-decoration: none; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 EasyTech Store Live</h1>
    <p>Marketplace & PC Builder platform running smoothly on Cloudflare Edge.</p>
    <p><a href="/index.html">Click here to view Storefront</a></p>
  </div>
</body>
</html>`, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=UTF-8' }
    });
  }
};
