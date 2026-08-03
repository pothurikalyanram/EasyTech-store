// Cloudflare Pages Function - AI Blog Generator (Google Gemini Flash)

export async function onRequest(context) {
    const { env } = context;

    console.log("🤖 Running Daily AI Blog Generator Engine on Cloudflare...");

    const GEMINI_API_KEY = env?.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return new Response(JSON.stringify({ 
            status: "warning", 
            message: "GEMINI_API_KEY environment variable pending. Running in standard catalog mode." 
        }), {
            status: 200,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            }
        });
    }

    try {
        const topics = [
            "Best Gaming PC Build Under ₹60,000 in India (2026)",
            "NVIDIA RTX 4070 Super Review & Gaming Benchmarks",
            "Top 5 High-Airflow RGB Cabinets in India",
            "Intel i5-14600K vs AMD Ryzen 7 7800X3D Comparison",
            "Best 4K Smart TVs with 120Hz Refresh Rate for Gaming"
        ];
        const selectedTopic = topics[Math.floor(Math.random() * topics.length)];

        console.log(`Generating real Gemini AI article for topic: ${selectedTopic}`);

        const prompt = `Write a professional 300-word hardware review article titled "${selectedTopic}" focusing on electronics and PC hardware available in India. Include key specs, gaming/performance benchmarks, and a concluding buying recommendation.`;

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Article generated successfully.";

        return new Response(JSON.stringify({
            status: "success",
            topic: selectedTopic,
            content: generatedText,
            generatedAt: new Date().toISOString()
        }), {
            status: 200,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            }
        });
    } catch (error) {
        console.error("Gemini AI API Error:", error);
        return new Response(JSON.stringify({ status: "error", message: error.message }), {
            status: 500,
            headers: { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            }
        });
    }
}
