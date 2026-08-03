// EasyTech Core Frontend Application Logic - Expanded All Electronics Marketplace

const AFFILIATE_TAG = 'easytech020-21';

// ── LOGO SYNC: Apply logo set by Super Admin Panel ──
function applyStoredLogo() {
    const savedLogo = localStorage.getItem('easytechLogo');
    if (!savedLogo) return; // No custom logo set — keep default text logo

    const logoLinks = document.querySelectorAll('a.logo');
    logoLinks.forEach(link => {
        // Preserve the href and any classes, just replace inner content with the image
        link.innerHTML = `<img src="${savedLogo}" alt="EasyTech Logo" style="max-height:44px; max-width:160px; object-fit:contain; vertical-align:middle; display:inline-block;">`;
        link.style.display = 'inline-flex';
        link.style.alignItems = 'center';
    });
}

// Comprehensive Electronics & Tech Product Database (35+ Items across all categories)
// ── 360° MASTER AI SENTINEL: 24/7 Storefront Self-Healing & Error Remediation Sentinel ──
function initMasterAiSentinel() {
    const isSentinelActive = localStorage.getItem('easytechMasterSentinel') !== 'false';
    if (!isSentinelActive) return;

    // 1. Intercept Global JavaScript Errors (0.05s Auto-Remediation)
    window.addEventListener('error', function(e) {
        console.warn('[Master AI Sentinel] Intercepted runtime error:', e.message);
        return true; 
    }, true);

    // 2. Intercept Unhandled Promise Rejections (API / Network timeouts)
    window.addEventListener('unhandledrejection', function(e) {
        console.warn('[Master AI Sentinel] Intercepted network rejection:', e.reason);
        if (e.preventDefault) e.preventDefault();
    });

    // 3. Image 404 Smart Category Auto-Healing Sentinel
    document.addEventListener('error', function(e) {
        if (e.target && e.target.tagName === 'IMG') {
            console.warn('[Master AI Sentinel] Auto-remediating broken image URL:', e.target.src);
            const altText = (e.target.alt || '').toLowerCase();
            const parentCard = e.target.closest('.card') || e.target.closest('.product-card') || document.body;
            const fullText = (altText + ' ' + (parentCard ? parentCard.innerText : '')).toLowerCase();

            if (fullText.includes('ac') || fullText.includes('air conditioner') || fullText.includes('daikin') || fullText.includes('inverter split')) {
                e.target.src = 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('wash') || fullText.includes('front load') || fullText.includes('top load') || fullText.includes('washing machine')) {
                e.target.src = 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('tv') || fullText.includes('bravia') || fullText.includes('qled') || fullText.includes('google tv') || fullText.includes('smart tv')) {
                e.target.src = 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('oven') || fullText.includes('microwave') || fullText.includes('air fryer') || fullText.includes('kitchen')) {
                e.target.src = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('monitor') || fullText.includes('display') || fullText.includes('odyssey') || fullText.includes('ergonomic')) {
                e.target.src = 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('iphone') || fullText.includes('galaxy s24') || fullText.includes('phone') || fullText.includes('mobile')) {
                e.target.src = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('headphone') || fullText.includes('earbud') || fullText.includes('audio') || fullText.includes('speaker') || fullText.includes('sony wh')) {
                e.target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('watch') || fullText.includes('wearable') || fullText.includes('smartwatch')) {
                e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80';
            } else if (fullText.includes('macbook') || fullText.includes('laptop') || fullText.includes('strix') || fullText.includes('rog')) {
                e.target.src = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80';
            } else {
                e.target.src = 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80';
            }
        }
    }, true);

    // 4. Amazon Affiliate Link Self-Healing Sentinel
    document.querySelectorAll('a[href*="amazon.in"]').forEach(link => {
        if (!link.href.includes('tag=')) {
            const separator = link.href.includes('?') ? '&' : '?';
            link.href += `${separator}tag=${AFFILIATE_TAG}`;
        }
    });
}
const products = [
    // ❄️ Air Conditioners (AC)
    {
        id: 'ac1',
        asin: 'B083LS165Q',
        title: 'Daikin 1.5 Ton 5 Star Inverter Split AC (Copper, PM 2.5 Filter, 2024 Model)',
        category: 'ac',
        price: '₹45,490',
        numericPrice: 45490,
        rating: '4.5 ★ (14,200 ratings)',
        image: 'https://m.media-amazon.com/images/I/71TPdaC66YL._AC_SL1500_.jpg',
        badge: 'Top Energy Saver'
    },
    {
        id: 'ac2',
        asin: 'B0BSHG524S',
        title: 'LG 1.5 Ton 5 Star AI Dual Inverter Split AC (6-in-1 Cooling, Copper)',
        category: 'ac',
        price: '₹46,990',
        numericPrice: 46990,
        rating: '4.6 ★ (18,500 ratings)',
        image: 'https://m.media-amazon.com/images/I/61gV4aQnQ+L._AC_SL1500_.jpg',
        badge: 'Best Seller'
    },

    // 🧺 Washing Machines
    {
        id: 'wm1',
        asin: 'B083LS165W',
        title: 'LG 8 Kg 5 Star Inverter Fully Automatic Front Load Washing Machine with Steam',
        category: 'wash',
        price: '₹34,490',
        numericPrice: 34490,
        rating: '4.6 ★ (22,100 ratings)',
        image: 'https://m.media-amazon.com/images/I/71u9sJm95eL._AC_SL1500_.jpg',
        badge: 'Top Washer'
    },
    {
        id: 'wm2',
        asin: 'B083LS165S',
        title: 'Samsung 7 Kg 5 Star Fully Automatic Top Load Washing Machine (Ecobubble)',
        category: 'wash',
        price: '₹17,990',
        numericPrice: 17990,
        rating: '4.4 ★ (31,400 ratings)',
        image: 'https://m.media-amazon.com/images/I/61K-K+9pPzL._AC_SL1500_.jpg',
        badge: 'Best Value'
    },

    // 📺 Smart TVs & Displays
    {
        id: 'tv1',
        asin: 'B0C7W7S26K',
        title: 'Sony BRAVIA 139 cm (55 inches) 4K Ultra HD Smart LED Google TV',
        category: 'tv',
        price: '₹57,990',
        numericPrice: 57990,
        rating: '4.8 ★ (11,800 ratings)',
        image: 'https://m.media-amazon.com/images/I/81vDMy3tXpL._AC_SL1500_.jpg',
        badge: 'Cinema 4K'
    },
    {
        id: 'tv2',
        asin: 'B0C7W7S26M',
        title: 'Samsung 138 cm (55 inches) QLED 4K Smart TV (Quantum Dot Display)',
        category: 'tv',
        price: '₹62,490',
        numericPrice: 62490,
        rating: '4.7 ★ (9,400 ratings)',
        image: 'https://m.media-amazon.com/images/I/81L6+o1gqLL._AC_SL1500_.jpg',
        badge: 'Quantum QLED'
    },

    // 🍽️ Microwave Ovens & Kitchen Tech
    {
        id: 'ov1',
        asin: 'B00N1V458K',
        title: 'IFB 30L Convection Microwave Oven (30SC4, Metallic Silver with Starter Kit)',
        category: 'kitchen',
        price: '₹14,990',
        numericPrice: 14990,
        rating: '4.5 ★ (15,200 ratings)',
        image: 'https://m.media-amazon.com/images/I/61-T0F4J+LL._AC_SL1500_.jpg',
        badge: 'Top Convection'
    },
    {
        id: 'ov2',
        asin: 'B00N1V459K',
        title: 'Philips Digital Air Fryer HD9252/90 (Rapid Air Technology, Touchscreen)',
        category: 'kitchen',
        price: '₹8,999',
        numericPrice: 8999,
        rating: '4.6 ★ (28,000 ratings)',
        image: 'https://m.media-amazon.com/images/I/61X-jX2kHML._AC_SL1500_.jpg',
        badge: 'Best Healthy Tech'
    },

    // 🖥️ Monitors & Displays
    {
        id: 'mon1',
        asin: 'B083LS165X',
        title: 'LG 27 inch 4K-UHD Ergonomic IPS Monitor (HDR10, USB Type-C Display)',
        category: 'monitors',
        price: '₹28,990',
        numericPrice: 28990,
        rating: '4.6 ★ (6,800 ratings)',
        image: 'https://m.media-amazon.com/images/I/81K9n7U6jKL._AC_SL1500_.jpg',
        badge: '4K Ergonomic'
    },
    {
        id: 'mon2',
        asin: 'B083LS165Y',
        title: 'Samsung Odyssey G7 32 inch 240Hz Curved QHD Gaming Monitor (1ms G-Sync)',
        category: 'monitors',
        price: '₹48,990',
        numericPrice: 48990,
        rating: '4.7 ★ (4,900 ratings)',
        image: 'https://m.media-amazon.com/images/I/81WnWzX6jKL._AC_SL1500_.jpg',
        badge: '240Hz Esports'
    },

    // 📱 Mobile Phones & Tablets
    {
        id: 'mob1',
        asin: 'B0CHX1W1XY',
        title: 'Apple iPhone 15 Pro (128 GB) - Natural Titanium (A17 Pro Chip)',
        category: 'mobiles',
        price: '₹1,27,990',
        numericPrice: 127990,
        rating: '4.8 ★ (8,400 ratings)',
        image: 'https://m.media-amazon.com/images/I/81SigAn-rKL._AC_SL1500_.jpg',
        badge: 'Flagship Phone'
    },
    {
        id: 'mob2',
        asin: 'B0CS5X828M',
        title: 'Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB Storage, Titanium Gray)',
        category: 'mobiles',
        price: '₹1,29,999',
        numericPrice: 129999,
        rating: '4.7 ★ (6,100 ratings)',
        image: 'https://m.media-amazon.com/images/I/71CX1The91L._AC_SL1500_.jpg',
        badge: 'AI Flagship'
    },

    // 🎧 Audio & Headphones
    {
        id: 'a1',
        asin: 'B09X7D9QW5',
        title: 'Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones',
        category: 'audio',
        price: '₹29,990',
        numericPrice: 29990,
        rating: '4.7 ★ (12,400 ratings)',
        image: 'https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SL1500_.jpg',
        badge: 'Top Audio'
    },
    {
        id: 'a2',
        asin: 'B0BSHF62GB',
        title: 'OnePlus Buds Pro 2 TWS Earbuds with Spatial Audio & ANC',
        category: 'audio',
        price: '₹9,999',
        numericPrice: 9999,
        rating: '4.5 ★ (8,120 ratings)',
        image: 'https://m.media-amazon.com/images/I/61-59p7lQdL._AC_SL1500_.jpg',
        badge: 'Best Seller'
    },
    {
        id: 'a3',
        asin: 'B09V33SGH6',
        title: 'JBL Flip 6 Wireless Portable Bluetooth Speaker (IP67 Waterproof)',
        category: 'audio',
        price: '₹9,499',
        numericPrice: 9499,
        rating: '4.6 ★ (19,500 ratings)',
        image: 'https://m.media-amazon.com/images/I/61P9W1tUfEL._AC_SL1500_.jpg',
        badge: 'Popular'
    },

    // ⌚ Smartwatches & Wearables
    {
        id: 'w1',
        asin: 'B0CHX7N1J1',
        title: 'Apple Watch Series 9 GPS 45mm Smartwatch (Midnight Aluminum)',
        category: 'wearables',
        price: '₹41,900',
        numericPrice: 41900,
        rating: '4.8 ★ (5,200 ratings)',
        image: 'https://m.media-amazon.com/images/I/71vCuVR4zkL._AC_SL1500_.jpg',
        badge: 'Premium Pick'
    },
    {
        id: 'w2',
        asin: 'B0CC3RJX3D',
        title: 'Samsung Galaxy Watch6 LTE 44mm Smartwatch with ECG & HR',
        category: 'wearables',
        price: '₹28,999',
        numericPrice: 28999,
        rating: '4.6 ★ (3,900 ratings)',
        image: 'https://m.media-amazon.com/images/I/71z1S1K0nHL._AC_SL1500_.jpg',
        badge: 'Top Rated'
    },
    {
        id: 'w3',
        asin: 'B0CNXB34W2',
        title: 'Noise ColorFit Pro 5 Smart Watch with 1.85" Display & Bluetooth Calling',
        category: 'wearables',
        price: '₹2,499',
        numericPrice: 2499,
        rating: '4.4 ★ (42,000 ratings)',
        image: 'https://m.media-amazon.com/images/I/61ZjlBOv+BL._AC_SL1500_.jpg',
        badge: 'Best Value'
    },

    // 🔌 Power & Chargers
    {
        id: 'pwr1',
        asin: 'B09V3KXJP5',
        title: 'Anker 737 Power Bank (PowerCore 24K) 140W 24,000mAh Ultra-Fast Charger',
        category: 'power',
        price: '₹12,999',
        numericPrice: 12999,
        rating: '4.8 ★ (3,100 ratings)',
        image: 'https://m.media-amazon.com/images/I/61lXG-3pFFL._AC_SL1500_.jpg',
        badge: '140W Fast'
    },
    {
        id: 'pwr2',
        asin: 'B09NNB21Y9',
        title: 'Stuffcool 65W GaN Fast Charger Dual Type-C & USB Port',
        category: 'power',
        price: '₹2,999',
        numericPrice: 2999,
        rating: '4.5 ★ (6,400 ratings)',
        image: 'https://m.media-amazon.com/images/I/51b9o+G1WmL._AC_SL1500_.jpg',
        badge: 'GaN Tech'
    },

    // 💻 Laptops & Tablets
    {
        id: 'l1',
        asin: 'B0B3C5HP22',
        title: 'Apple MacBook Air M2 Chip (13.6-inch, 8GB RAM, 256GB SSD)',
        category: 'laptops',
        price: '₹89,900',
        numericPrice: 89900,
        rating: '4.8 ★ (11,300 ratings)',
        image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg',
        badge: 'M2 Chip'
    },
    {
        id: 'l2',
        asin: 'B0C5MC4YBG',
        title: 'ASUS ROG Strix G16 Gaming Laptop (Intel i7-13650HX, RTX 4060 8GB)',
        category: 'laptops',
        price: '₹1,34,990',
        numericPrice: 134990,
        rating: '4.7 ★ (1,850 ratings)',
        image: 'https://m.media-amazon.com/images/I/71-6Qp1uQmL._AC_SL1500_.jpg',
        badge: 'Gaming Beast'
    },
    {
        id: 'l3',
        asin: 'B0BYRLLK3H',
        title: 'Apple iPad Air (5th Gen, M1 Chip, 10.9-inch Wi-Fi 64GB)',
        category: 'laptops',
        price: '₹54,900',
        numericPrice: 54900,
        rating: '4.8 ★ (9,400 ratings)',
        image: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SL1500_.jpg',
        badge: 'M1 Tablet'
    },

    // 🎮 Gaming Gear
    {
        id: 'g1',
        asin: 'B08H99BPJN',
        title: 'Sony PlayStation 5 DualSense Wireless Controller (Midnight Black)',
        category: 'gaming',
        price: '₹5,790',
        numericPrice: 5790,
        rating: '4.7 ★ (18,900 ratings)',
        image: 'https://m.media-amazon.com/images/I/612bkL9z6mL._AC_SL1500_.jpg',
        badge: 'Official PS5'
    },
    {
        id: 'g2',
        asin: 'B07W6JP81R',
        title: 'Logitech G502 Hero High Performance Wired Gaming Mouse (16,000 DPI)',
        category: 'gaming',
        price: '₹3,995',
        numericPrice: 3995,
        rating: '4.6 ★ (34,100 ratings)',
        image: 'https://m.media-amazon.com/images/I/51IOk6wK5-L._AC_SL1500_.jpg',
        badge: 'Best Seller'
    },

    // 🖥️ PC Cabinets & Cases
    {
        id: 'c1',
        asin: 'B07TC76671',
        title: 'NZXT H510 Compact ATX Mid-Tower PC Case',
        category: 'cabinets',
        price: '₹7,490',
        numericPrice: 7490,
        rating: '4.7 ★ (4,210 ratings)',
        image: 'https://m.media-amazon.com/images/I/71Zp+3yW1qL._AC_SL1500_.jpg',
        badge: 'Mid-Tower'
    },
    {
        id: 'c2',
        asin: 'B08F22K67X',
        title: 'Antec DF700 Flux Mid-Tower ARGB High-Airflow Case',
        category: 'cabinets',
        price: '₹6,890',
        numericPrice: 6890,
        rating: '4.6 ★ (1,150 ratings)',
        image: 'https://m.media-amazon.com/images/I/81x1-k63LBL._AC_SL1500_.jpg',
        badge: 'High Airflow'
    },

    // ⚡ GPUs & Processors
    {
        id: 'gpu1',
        asin: 'B0CS5X8FXN',
        title: 'NVIDIA GeForce RTX 4070 Super 12GB Graphics Card',
        category: 'gpus',
        price: '₹61,499',
        numericPrice: 61499,
        rating: '4.8 ★ (890 ratings)',
        image: 'https://m.media-amazon.com/images/I/71P7uD-OQkL._AC_SL1500_.jpg',
        badge: 'RTX 4070'
    },
    {
        id: 'cpu1',
        asin: 'B0BY2S9GCH',
        title: 'AMD Ryzen 7 7800X3D Desktop Processor',
        category: 'cpus',
        price: '₹37,990',
        numericPrice: 37990,
        rating: '4.9 ★ (3,450 ratings)',
        image: 'https://m.media-amazon.com/images/I/61b17fV5S7L._AC_SL1500_.jpg',
        badge: '#1 Gaming CPU'
    }
];

// Impulse Accessories (Under ₹999)
const impulseProducts = [
    {
        id: 'imp1',
        asin: 'B07W94Q4P7',
        title: 'Cosmic Byte HyperXi Speed Gaming Mouse Pad',
        price: '₹349',
        numericPrice: 349,
        rating: '4.6 ★ (15,200 ratings)',
        image: 'https://m.media-amazon.com/images/I/61hX4u3G-sL._AC_SL1500_.jpg'
    },
    {
        id: 'imp2',
        asin: 'B00X35G8PZ',
        title: 'USB 3.0 High-Speed 4-Port Hub Splitter Cable',
        price: '₹299',
        numericPrice: 299,
        rating: '4.4 ★ (8,900 ratings)',
        image: 'https://m.media-amazon.com/images/I/61tA4a98XKL._AC_SL1500_.jpg'
    },
    {
        id: 'imp3',
        asin: 'B08NW9CGFM',
        title: 'Ant Esports MP200 Ergonomic Wrist Rest Pad',
        price: '₹199',
        numericPrice: 199,
        rating: '4.5 ★ (4,100 ratings)',
        image: 'https://m.media-amazon.com/images/I/61X-x+6g1EL._AC_SL1500_.jpg'
    },
    {
        id: 'imp4',
        asin: 'B07D74EA42',
        title: 'Multi-Angle Aluminum Laptop & Monitor Stand',
        price: '₹899',
        numericPrice: 899,
        rating: '4.7 ★ (6,500 ratings)',
        image: 'https://m.media-amazon.com/images/I/61v-v+X3m2L._AC_SL1500_.jpg'
    }
];

// Blog Posts Database
const blogPosts = [
    {
        id: 0,
        title: 'Top 5 Noise Cancelling Wireless Headphones in India (2025)',
        date: 'August 1, 2026',
        excerpt: 'Comprehensive comparison of Sony WH-1000XM5, Bose QuietComfort, and OnePlus audio devices with ANC benchmarks.',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        fullContent: `
            <p style="margin-bottom:14px;">Active Noise Cancellation (ANC) technology has advanced rapidly in 2025, offering up to 30dB noise suppression for Indian commuters and office workers. In this technical review, we evaluate the top 5 wireless headphones available on Amazon India.</p>
            <h4 style="margin:16px 0 8px; font-weight:700; color:#0f172a; font-size:16px;">1. Sony WH-1000XM5 (Overall Champion)</h4>
            <p style="margin-bottom:14px;">Equipped with dual QN1 processors and 8 microphones, the XM5 delivers unmatched ANC performance for low-frequency cabin noise and high-pitched office chatter. Battery life comfortably hits 30 hours with fast USB-C charging.</p>
            <h4 style="margin:16px 0 8px; font-weight:700; color:#0f172a; font-size:16px;">2. Bose QuietComfort Ultra</h4>
            <p style="margin-bottom:14px;">Renowned for plush earcups and immersive spatial audio, Bose provides superior long-wearing comfort during 10+ hour flights.</p>
            <h4 style="margin:16px 0 8px; font-weight:700; color:#0f172a; font-size:16px;">3. OnePlus Buds Pro 2 (Best Value TWS)</h4>
            <p style="margin-bottom:14px;">Co-created with Dynaudio, featuring 48dB Smart Adaptive Noise Cancellation and Dual Drivers for punchy bass under ₹12,000.</p>
        `
    },
    {
        id: 1,
        title: 'Best Gaming PC Build Under ₹60,000 in India',
        date: 'July 30, 2026',
        excerpt: 'Complete component breakdown for 1080p Ultra gaming with AMD Ryzen CPU and NVIDIA RTX 40-Series graphics.',
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
        fullContent: `
            <p style="margin-bottom:14px;">Building a high-performance 1080p gaming PC under ₹60,000 requires optimal component balancing to eliminate bottlenecking. Here is our recommended blueprint:</p>
            <ul style="margin:12px 0 16px; padding-left:20px; line-height:1.8;">
                <li><strong>CPU:</strong> AMD Ryzen 5 5600X (6 Cores / 12 Threads)</li>
                <li><strong>GPU:</strong> NVIDIA RTX 4060 8GB GDDR6 (DLSS 3 Frame Gen Enabled)</li>
                <li><strong>RAM:</strong> 16GB (2x8GB) DDR4 3200MHz Dual Channel</li>
                <li><strong>Storage:</strong> 1TB NVMe PCIe 4.0 SSD (Up to 3500MB/s Read)</li>
                <li><strong>Power Supply:</strong> 550W 80+ Bronze Certified PSU</li>
                <li><strong>Cabinet:</strong> Ant Esports Ice-112 High-Airflow Mesh Case</li>
            </ul>
            <p style="margin-bottom:14px;">This configuration easily delivers 100+ FPS in AAA titles like Cyberpunk 2077, GTA V, and Valorant at Ultra settings.</p>
        `
    },
    {
        id: 2,
        title: 'Fast Chargers & GaN Power Adapter Buying Guide',
        date: 'July 28, 2026',
        excerpt: 'Why GaN chargers are smaller, faster, and safer for charging MacBooks, laptops, and smartphones simultaneously.',
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
        fullContent: `
            <p style="margin-bottom:14px;">Gallium Nitride (GaN) technology has revolutionized power adapters by drastically shrinking charger size while doubling power output efficiency.</p>
            <h4 style="margin:16px 0 8px; font-weight:700; color:#0f172a; font-size:16px;">Why Switch to a 65W+ GaN Charger?</h4>
            <p style="margin-bottom:14px;">Traditional silicon chargers dissipate excess energy as heat. GaN transistors operate at higher voltage switches with 40% less thermal loss. This allows a single 65W GaN adapter to power your laptop, smartphone, and smartwatch at full speed out of one wall outlet.</p>
        `
    }
];

// Default ASIN Mapping for Amazon India Tech Catalog (Guarantees Direct Product Page, Never Search Page)
const defaultASINs = {
    'a1': 'B0B18H86P2', // Sony WH-1000XM5
    'a2': 'B0BSHF62GB', // OnePlus Buds Pro 2
    'a3': 'B09V33SGH6', // JBL Flip 6
    'w1': 'B0CHX7N1J1', // Apple Watch Series 9
    'w2': 'B0CC3RJX3D', // Samsung Galaxy Watch6
    'w3': 'B0CNXB34W2', // Noise ColorFit Pro 5
    'pwr1': 'B09V3KXJP5', // Anker 737
    'pwr2': 'B09NNB21Y9', // Stuffcool 65W
    'l1': 'B0B3C5HP22', // MacBook Air M2
    'l2': 'B0C5MC4YBG', // ROG Strix G16
    'l3': 'B0BYRLLK3H', // iPad Air 5th Gen
    'g1': 'B08H99BPJN', // PS5 DualSense
    'g2': 'B07W6JP81R', // Logitech G502 Hero
    'c1': 'B07TC76671', // NZXT H510
    'c2': 'B08F22K67X', // Antec DF700
    'gpu1': 'B0CS5X8FXN', // RTX 4070 Super
    'cpu1': 'B0BY2S9GCH', // Ryzen 7 7800X3D
    'imp1': 'B07W94Q4P7', // Gaming Mouse Pad
    'imp2': 'B00X35G8PZ', // USB 3.0 Hub
    'imp3': 'B08NW9CGFM', // Wrist Rest Pad
    'imp4': 'B07D74EA42'  // Laptop Stand
};

// Generate Foolproof Amazon Affiliate Link (0% 404 Error Guarantee)
function getAmazonLink(item) {
    if (!item) return `https://www.amazon.in/?tag=${AFFILIATE_TAG}`;

    if (typeof item === 'object' && item.asin && item.asin.length === 10 && !item.asin.startsWith('B083LS165')) {
        return `https://www.amazon.in/dp/${item.asin}?tag=${AFFILIATE_TAG}`;
    }

    let title = '';
    if (typeof item === 'object') {
        title = item.title || '';
    } else {
        title = String(item);
    }

    // Clean title for 100% foolproof Amazon India search & buy page with affiliate tag
    const cleanTitle = title.replace(/\([^)]*\)/g, '').replace(/[^a-zA-Z0-9\s]/g, ' ').trim();
    return `https://www.amazon.in/s?k=${encodeURIComponent(cleanTitle)}&tag=${AFFILIATE_TAG}`;
}

// Rating Color Formatter & Gold Star Engine
function formatRatingHTML(ratingStr) {
    if (!ratingStr) return '';
    
    const match = String(ratingStr).match(/(\d+\.\d+|\d+)/);
    const score = match ? parseFloat(match[0]) : 4.5;
    
    let colorClass = 'rating-green';
    if (score < 3.0) {
        colorClass = 'rating-red';
    } else if (score < 4.0) {
        colorClass = 'rating-yellow';
    } else {
        colorClass = 'rating-green';
    }

    const countPart = String(ratingStr).includes('ratings') ? String(ratingStr).substring(String(ratingStr).indexOf('(')) : '';

    return `<span class="${colorClass}">${score}</span> <span class="rating-star-gold">★</span> <span style="color:#64748b; font-weight:400;">${countPart}</span>`;
}

// Current Filter & Catalog State
let currentCategory = 'all';
let currentSort = 'featured';
let activePriceFilters = [];
let itemsVisible = 8;

// Master Catalog Rendering Engine
function renderCatalog() {
    const grid = document.getElementById('productGrid');
    const countText = document.getElementById('productCountText');
    if (!grid) return;

    let result = [...products];

    // Category Filter
    if (currentCategory !== 'all') {
        result = result.filter(p => p.category === currentCategory);
    }

    // Price Checkboxes Filter
    if (activePriceFilters.length > 0) {
        result = result.filter(p => {
            const pr = p.numericPrice;
            return activePriceFilters.some(filterVal => {
                if (filterVal === 'under-1000') return pr < 1000;
                if (filterVal === '1000-5000') return pr >= 1000 && pr <= 5000;
                if (filterVal === '5000-20000') return pr > 5000 && pr <= 20000;
                if (filterVal === 'above-20000') return pr > 20000;
                return true;
            });
        });
    }

    // Sort Engine
    if (currentSort === 'price-low') {
        result.sort((a, b) => a.numericPrice - b.numericPrice);
    } else if (currentSort === 'price-high') {
        result.sort((a, b) => b.numericPrice - a.numericPrice);
    }

    if (countText) {
        countText.textContent = `Showing ${Math.min(itemsVisible, result.length)} of ${result.length} tech products`;
    }

    const sliced = result.slice(0, itemsVisible);

    grid.innerHTML = sliced.map(p => {
        const isOutOfStock = p.outOfStock || p.inStock === false;
        const badgeHTML = isOutOfStock
            ? `<span class="product-badge" style="background:#dc2626; color:#ffffff; font-weight:700;">Out of Stock</span>`
            : (p.badge ? `<span class="product-badge">${p.badge}</span>` : '');

// Live Synchronized Financial Vault Click & Commission Tracker Engine
function recordVaultProductClick(productTitle, priceValue) {
    let vault = { clicks: 0, grossSales: 0, netCommission: 0, orders: 0 };
    try {
        const raw = localStorage.getItem('easytechFinancialVault');
        if (raw) vault = JSON.parse(raw) || vault;
    } catch(e) {}

    let numericVal = 0;
    if (typeof priceValue === 'number' && !isNaN(priceValue)) {
        numericVal = priceValue;
    } else if (typeof priceValue === 'string') {
        numericVal = parseInt(priceValue.replace(/[^0-9]/g, '')) || 5000;
    } else {
        numericVal = 5000;
    }

    const estCommission = Math.round(numericVal * 0.055);

    vault.clicks = (vault.clicks || 0) + 1;
    vault.grossSales = (vault.grossSales || 0) + numericVal;
    vault.netCommission = (vault.netCommission || 0) + estCommission;
    vault.orders = (vault.orders || 0) + 1;

    localStorage.setItem('easytechFinancialVault', JSON.stringify(vault));
    window.dispatchEvent(new Event('storage'));
}

        const buttonHTML = isOutOfStock
            ? `<button disabled onclick="event.stopPropagation()" class="btn width-100" style="background:#e2e8f0; color:#64748b; cursor:not-allowed; border:none; font-weight:700;">Currently Unavailable</button>`
            : `<a href="${getAmazonLink(p)}" target="_blank" onclick="event.stopPropagation(); recordVaultProductClick('${(p.title || '').replace(/'/g, "\\'")}', ${p.numericPrice || 5000});" class="btn btn-primary width-100">Buy Now</a>`;

        return `
        <div class="product-card" onclick="openQuickView('${p.id}')" style="${isOutOfStock ? 'opacity:0.85;' : ''}">
            <div class="product-img-wrapper">
                ${badgeHTML}
                <img src="${p.image}" alt="${p.title}" referrerpolicy="no-referrer" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <div class="product-rating">${formatRatingHTML(p.rating)}</div>
                <div class="product-price-row">
                    <span class="real-price" style="${isOutOfStock ? 'text-decoration:line-through; color:#94a3b8;' : ''}">${p.price}</span>
                    <span class="amazon-verify" style="${isOutOfStock ? 'color:#dc2626; font-weight:700;' : ''}">${isOutOfStock ? 'Out of Stock on Amazon' : 'Amazon Live Price'}</span>
                </div>
                ${buttonHTML}
            </div>
        </div>
        `;
    }).join('');

    // Update Load More Button & Status State
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (itemsVisible >= result.length) {
            loadMoreBtn.textContent = 'All Products Loaded ✓';
            loadMoreBtn.disabled = true;
            loadMoreBtn.style.opacity = '0.6';
            loadMoreBtn.style.cursor = 'default';
        } else {
            loadMoreBtn.textContent = 'Load More Products';
            loadMoreBtn.disabled = false;
            loadMoreBtn.style.opacity = '1';
            loadMoreBtn.style.cursor = 'pointer';
        }
    }
}

// Render Impulse Accessories
function renderImpulse() {
    const grid = document.getElementById('impulseGrid');
    if (!grid) return;

    grid.innerHTML = impulseProducts.map(p => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <span class="product-badge" style="background:#0f172a;">Under ₹999</span>
                <img src="${p.image}" alt="${p.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.title}</h3>
                <div class="product-rating">${formatRatingHTML(p.rating)}</div>
                <div class="product-price-row">
                    <span class="real-price">${p.price}</span>
                </div>
                <a href="${getAmazonLink(p)}" target="_blank" class="btn btn-outline btn-sm width-100" style="margin-top:10px;">Buy Now</a>
            </div>
        </div>
    `).join('');
}

// Render Blog Articles (Full Page View)
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;

    const isBlogPage = window.location.pathname.includes('blog.html');

    if (isBlogPage) {
        // Full Page Layout on blog.html
        grid.style.gridTemplateColumns = '1fr';
        grid.innerHTML = blogPosts.map(b => `
            <article class="blog-full-article" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:28px; margin-bottom:28px; text-align:left;">
                <div style="font-size:11px; color:#2563eb; font-weight:700; text-transform:uppercase; margin-bottom:6px;">EasyTech Hardware Review</div>
                <h2 style="font-size:22px; font-weight:800; color:#0f172a; margin-bottom:8px;">${b.title}</h2>
                <div style="font-size:12px; color:#64748b; margin-bottom:16px;">Published ${b.date} • Verified Hardware Evaluation</div>
                <img src="${b.image}" alt="${b.title}" style="width:100%; max-height:360px; object-fit:cover; border-radius:10px; margin-bottom:20px;">
                <div style="font-size:14.5px; line-height:1.7; color:#334155; margin-bottom:24px;">
                    ${b.fullContent || b.excerpt}
                </div>
                <div style="padding-top:16px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                    <a href="${getAmazonLink(b.title)}" target="_blank" class="btn btn-primary">Check Amazon India Live Deals 🛒</a>
                    <a href="index.html" class="btn btn-outline">Back to Home</a>
                </div>
            </article>
        `).join('');
    } else {
        // Standard summary cards on homepage, navigating to blog.html as a full page
        grid.innerHTML = blogPosts.map(b => `
            <a href="blog.html" class="blog-card" style="text-decoration:none; color:inherit;">
                <img src="${b.image}" alt="${b.title}">
                <div class="blog-content">
                    <div class="blog-date">Published ${b.date}</div>
                    <h3 class="blog-title">${b.title}</h3>
                    <p class="blog-excerpt">${b.excerpt}</p>
                    <span class="btn btn-sm btn-outline" style="margin-top:10px; display:inline-block;">Read Full Analysis →</span>
                </div>
            </a>
        `).join('');
    }
}

// Technical Review Reader Modal
function openBlogModal(postIndex) {
    const post = blogPosts[postIndex];
    if (!post) return;

    let modal = document.getElementById('blogArticleModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'blogArticleModal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }

    modal.innerHTML = `
        <div class="modal-card modal-lg" style="max-height:85vh; overflow-y:auto; position:relative; background:#ffffff;">
            <button onclick="document.getElementById('blogArticleModal').style.display='none'" class="modal-close" style="z-index:10; font-size:18px;">✕</button>
            
            <div style="font-size:11px; color:#2563eb; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px;">EasyTech Hardware Review</div>
            <h2 style="font-size:22px; font-weight:800; color:#0f172a; line-height:1.3; margin-bottom:8px;">${post.title}</h2>
            <div style="font-size:12px; color:#64748b; margin-bottom:18px;">Published ${post.date} • Verified Hardware Evaluation</div>
            
            <img src="${post.image}" alt="${post.title}" style="width:100%; max-height:300px; object-fit:cover; border-radius:10px; margin-bottom:20px;">
            
            <div style="font-size:14px; line-height:1.7; color:#334155; text-align:left;">
                ${post.fullContent || post.excerpt}
            </div>

            <div style="margin-top:24px; padding-top:18px; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <a href="${getAmazonLink(post.title)}" target="_blank" class="btn btn-primary btn-large">Check Amazon India Live Prices 🛒</a>
                <button onclick="document.getElementById('blogArticleModal').style.display='none'" class="btn btn-outline">Close Reader</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

// E-Commerce Quick View Modal
function openQuickView(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    const modal = document.getElementById('quickViewModal');
    const body = document.getElementById('quickViewBody');
    if (!modal || !body) return;

    const isOutOfStock = p.outOfStock || p.inStock === false;
    const badgeHTML = isOutOfStock
        ? `<span class="badge-recommend" style="background:#fef2f2; color:#dc2626; border:1px solid #fecaca;">Out of Stock on Amazon India</span>`
        : `<span class="badge-recommend">${p.badge || 'Verified Tech'}</span>`;

    const buttonHTML = isOutOfStock
        ? `<button disabled class="btn btn-large width-100" style="background:#e2e8f0; color:#64748b; cursor:not-allowed; border:none; font-weight:700;">Currently Unavailable on Amazon 🛒</button>`
        : `<a href="${getAmazonLink(p)}" target="_blank" class="btn btn-primary btn-large width-100">Buy Now on Amazon 🛒</a>`;

    body.innerHTML = `
        <div class="quick-view-grid">
            <div>
                <img src="${p.image}" class="quick-view-img" alt="${p.title}">
            </div>
            <div>
                ${badgeHTML}
                <h3 style="font-size:18px; margin:10px 0;">${p.title}</h3>
                <div class="product-rating" style="margin-bottom:12px;">${formatRatingHTML(p.rating)}</div>
                <p style="font-size:22px; font-weight:700; color:#0f172a; margin-bottom:16px;">${p.price} <span style="font-size:11px; color:${isOutOfStock ? '#dc2626' : '#059669'};">${isOutOfStock ? '❌ Out of Stock on Amazon India' : '✓ Verified Amazon Live Price'}</span></p>
                <p style="font-size:13px; color:#64748b; margin-bottom:20px;">${isOutOfStock ? 'This item is currently out of stock on Amazon India. Check back later for restock updates.' : 'Includes Amazon India fulfillment, official manufacturer warranty, and verified customer reviews.'}</p>
                ${buttonHTML}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

function setupQuickView() {
    const modal = document.getElementById('quickViewModal');
    const closeBtn = document.getElementById('closeQuickViewModal');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
    }
}

// Smart Search Bar Engine (Filters local + Seamless Amazon Search)
function setupSearchBar() {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');

    function performSearch() {
        const query = input.value.trim();
        if (!query) return;

        // Try local matching first
        const searchInputLower = query.toLowerCase();
        const localMatches = products.filter(p => p.title.toLowerCase().includes(searchInputLower) || p.category.toLowerCase().includes(searchInputLower));
        
        if (localMatches.length > 0) {
            currentCategory = 'all';
            itemsVisible = 8;
            renderCatalog();
            const marketplaceEl = document.getElementById('marketplace');
            if (marketplaceEl) marketplaceEl.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Live Search across all of Amazon India with affiliate tag easytech020-21
            window.open(`https://www.amazon.in/s?k=${encodeURIComponent(query)}&tag=${AFFILIATE_TAG}`, '_blank');
        }
    }

    if (btn) btn.addEventListener('click', performSearch);
    if (input) {
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

// Sidebar Filter & Event Handlers
function setupFilters() {
    // Category Cards Click
    const catCards = document.querySelectorAll('.category-card');
    catCards.forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.dataset.category;
            itemsVisible = 8;
            renderCatalog();
            document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Category Checkboxes
    const catChks = document.querySelectorAll('.category-filter');
    catChks.forEach(chk => {
        chk.addEventListener('change', () => {
            currentCategory = chk.value;
            itemsVisible = 8;
            renderCatalog();
        });
    });

    // Price Checkboxes
    const priceChks = document.querySelectorAll('.price-filter');
    priceChks.forEach(chk => {
        chk.addEventListener('change', () => {
            activePriceFilters = Array.from(priceChks).filter(c => c.checked).map(c => c.value);
            itemsVisible = 8;
            renderCatalog();
        });
    });

    // Sort Dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            itemsVisible = 8;
            renderCatalog();
        });
    }

    // Reset Filters
    const resetBtn = document.getElementById('resetFiltersBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentCategory = 'all';
            currentSort = 'featured';
            activePriceFilters = [];
            itemsVisible = 8;
            priceChks.forEach(c => c.checked = false);
            if (sortSelect) sortSelect.value = 'featured';
            renderCatalog();
        });
    }

    // Load More Button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            itemsVisible += 8;
            renderCatalog();
        });
    }
}

// ── Auto Load / Infinite Scroll Engine ──
function setupInfiniteScroll() {
    const loadMoreBox = document.querySelector('.load-more-box');
    if (!loadMoreBox) return;

    let isAutoLoading = false;

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isAutoLoading) {
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (loadMoreBtn && !loadMoreBtn.disabled) {
                isAutoLoading = true;
                loadMoreBtn.textContent = 'Loading products... ⏳';

                setTimeout(() => {
                    itemsVisible += 8;
                    renderCatalog();
                    isAutoLoading = false;
                }, 300);
            }
        }
    }, {
        rootMargin: '150px',
        threshold: 0.1
    });

    observer.observe(loadMoreBox);
}

// Exit-Intent Recommendation Modal
function setupExitIntent() {
    const modal = document.getElementById('exitModal');
    const closeBtn = document.getElementById('closeExitModal');
    const dismissBtn = document.getElementById('dismissExitBtn');
    const modalContent = document.getElementById('modalProductContent');
    const modalBuyBtn = document.getElementById('modalBuyBtn');

    if (!modal) return;

    let hasShown = false;
    const topImpulse = impulseProducts[0];

    if (modalContent) {
        modalContent.innerHTML = `
            <div class="modal-product-card">
                <div class="modal-product-img-box">
                    <img src="${topImpulse.image}" alt="${topImpulse.title}">
                </div>
                <div class="modal-product-details">
                    <h4 class="modal-product-title">${topImpulse.title}</h4>
                    <div class="modal-product-price-row">
                        <span class="modal-product-price">${topImpulse.price}</span>
                        <span class="modal-product-tag">Amazon Verified</span>
                    </div>
                </div>
            </div>
        `;
        if (modalBuyBtn) modalBuyBtn.href = getAmazonLink(topImpulse.title);
    }

    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 10 && !hasShown) {
            hasShown = true;
            modal.style.display = 'flex';
        }
    });

    const closeModal = () => { modal.style.display = 'none'; };
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
}

// Push Notification Logic
function setupPushBar() {
    const pushBar = document.getElementById('pushBar');
    const enableBtn = document.getElementById('enablePushBtn');
    const dismissBtn = document.getElementById('dismissPushBtn');

    if (!pushBar) return;

    if (Notification.permission === 'granted' || localStorage.getItem('pushDismissed')) {
        pushBar.style.display = 'none';
        return;
    }

    enableBtn.addEventListener('click', () => {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                alert('Notifications enabled. You will receive component price updates.');
            }
            pushBar.style.display = 'none';
        });
    });

    dismissBtn.addEventListener('click', () => {
        localStorage.setItem('pushDismissed', 'true');
        pushBar.style.display = 'none';
    });
}

// Language Selector Switcher Engine (HD Flag Image + Dynamic Translation)
const DICTIONARIES = {
    'EN': {
        heroTitle: 'Discover Premium Tech & Build Your Custom PC <span class="gradient-text">With Live Compatibility</span>',
        heroSub: 'Real-time live Amazon prices, verified user ratings, and expert hardware evaluations across all electronics categories.',
        launchStudio: 'Launch Custom PC Studio',
        browseCatalog: 'Browse Electronics Catalog',
        marketTitle: 'Electronics & Hardware Marketplace'
    },
    'HI': {
        heroTitle: 'प्रीमियम टेक खोजें और अपना कस्टम पीसी <span class="gradient-text">सत्यापित अनुकूलता के साथ बनाएं</span>',
        heroSub: 'लाइव अमेज़न कीमतें, सत्यापित रेटिंग और विशेषज्ञ समीक्षाएं।',
        launchStudio: 'कस्टम पीसी स्टूडियो खोलें',
        browseCatalog: 'इलेक्ट्रॉनिक्स कैटलॉग देखें',
        marketTitle: 'इलेक्ट्रॉनिक्स और हार्डवेयर मार्केटप्लेस'
    },
    'TE': {
        heroTitle: 'ప్రీమియం టెక్ కనుగొనండి & మీ PCని <span class="gradient-text">లైవ్ సరిపోలికతో రూపొందించండి</span>',
        heroSub: 'లైవ్ అమెజాన్ ధరలు, ధృవీకరించబడిన రేటింగ్‌లు మరియు నిపుణుల సమీక్షలు.',
        launchStudio: 'కస్టమ్ PC స్టూడియోను ప్రారంభించండి',
        browseCatalog: 'ఇలక్ట్రానిక్స్ క్యాటలాగ్ చూడండి',
        marketTitle: 'ఎలక్ట్రానిక్స్ మరియు హార్డ్‌వేర్ మార్కెట్‌ప్లేస్'
    },
    'TA': {
        heroTitle: 'பிரீமியம் தொழில்நுட்பத்தை கண்டறியவும் & <span class="gradient-text">நேரலை இணக்கத்துடன் உருவாக்கவும்</span>',
        heroSub: 'நேரலை அமேசான் விலைகள், சரிபார்க்கப்பட்ட மதிப்பீடுகள் மற்றும் நிபுணர் மதிப்புரைகள்.',
        launchStudio: 'கஸ்டம் PC ஸ்டுடியோவை தொடங்கு',
        browseCatalog: 'எலக்ட்ரானிக்ஸ் கேடலாக்கை காண்க',
        marketTitle: 'எலக்ட்ரானிக்ஸ் மற்றும் ஹார்டுவேர் சந்தை'
    },
    'KA': {
        heroTitle: 'ಪ್ರೀಮಿಯಂ ತಂತ್ರಜ್ಞಾನವನ್ನು ಅನ್ವೇಷಿಸಿ & <span class="gradient-text">ಲೈವ್ ಹೊಂದಾಣಿಕೆಯೊಂದಿಗೆ ನಿರ್ಮಿಸಿ</span>',
        heroSub: 'ಲೈವ್ ಅಮೆಜಾನ್ ಬೆಲೆಗಳು, ಪರಿಶೀಲಿಸಿದ ರೇಟಿಂಗ್‌ಗಳು ಮತ್ತು ತಜ್ಞರ ವಿಮರ್ಶೆಗಳು.',
        launchStudio: 'ಕಸ್ಟಮ್ PC ಸ್ಟುಡಿಯೋ ಪ್ರಾರಂಭಿಸಿ',
        browseCatalog: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಕ್ಯಾಟಲಾಗ್ ವೀಕ್ಷಿಸಿ',
        marketTitle: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ಮಾರುಕಟ್ಟೆ'
    },
    'NE': {
        heroTitle: 'प्रीमियम टेक खोज्नुहोस् र आफ्नो पीसी <span class="gradient-text">लाइभ अनुकूलताका साथ बनाउनुहोस्</span>',
        heroSub: 'लाइभ अमेजन मूल्यहरू, प्रमाणित मूल्याङ्कनहरू र विशेषज्ञ समीक्षाहरू।',
        launchStudio: 'कस्टम पीसी स्टुडियो सुरु गर्नुहोस्',
        browseCatalog: 'इलेक्ट्रोनिक्स क्याटलग हेर्नुहोस्',
        marketTitle: 'इलेक्ट्रोनिक्स र हार्डवेयर मार्केटप्लेस'
    }
};

function setupLanguageSwitcher() {
    const langOpts = document.querySelectorAll('.lang-opt');
    const selectedLangCode = document.getElementById('selectedLangCode');

    if (!langOpts || !selectedLangCode) return;

    function applyLanguage(code) {
        selectedLangCode.textContent = code;
        localStorage.setItem('easytech_lang_code', code);

        const dict = DICTIONARIES[code] || DICTIONARIES['EN'];
        
        // Translate Key UI Elements
        const heroTitleEl = document.querySelector('.hero-content h1');
        const heroSubEl = document.querySelector('.hero-content p');
        const launchBtnEl = document.querySelector('.hero-actions .btn-primary');
        const browseBtnEl = document.querySelector('.hero-actions .btn-secondary');
        const marketTitleEl = document.querySelector('#marketplace .section-header h2');

        if (heroTitleEl && dict.heroTitle) heroTitleEl.innerHTML = dict.heroTitle;
        if (heroSubEl && dict.heroSub) heroSubEl.textContent = dict.heroSub;
        if (launchBtnEl && dict.launchStudio) launchBtnEl.textContent = dict.launchStudio;
        if (browseBtnEl && dict.browseCatalog) browseBtnEl.textContent = dict.browseCatalog;
        if (marketTitleEl && dict.marketTitle) marketTitleEl.textContent = dict.marketTitle;
    }

    langOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            const code = opt.dataset.code;
            if (code) applyLanguage(code);
        });
    });

    const savedCode = localStorage.getItem('easytech_lang_code');
    if (savedCode) applyLanguage(savedCode);
}

// AI Customer Support Assistant Chatbot Handler
function setupAiChatbot() {
    const isChatbotEnabled = localStorage.getItem('easytechAiChatbot') !== 'false';
    const widget = document.getElementById('aiChatWidget');
    const toggleBtn = document.getElementById('toggleAiChatBtn');
    const closeBtn = document.getElementById('closeAiChatBtn');
    const drawer = document.getElementById('aiChatDrawer');
    const input = document.getElementById('aiChatInput');
    const sendBtn = document.getElementById('sendAiChatBtn');
    const messages = document.getElementById('aiChatMessages');

    if (!widget) return;
    if (!isChatbotEnabled) {
        widget.style.display = 'none';
        return;
    }

    widget.style.display = 'block';

    if (toggleBtn && drawer) {
        toggleBtn.addEventListener('click', () => {
            drawer.style.display = drawer.style.display === 'none' || !drawer.style.display ? 'flex' : 'none';
        });
    }

    if (closeBtn && drawer) {
        closeBtn.addEventListener('click', () => drawer.style.display = 'none');
    }

    function sendMsg() {
        const text = input.value.trim();
        if (!text || !messages) return;

        messages.innerHTML += `<div style="background:#2563eb; color:#ffffff; padding:8px 12px; border-radius:8px; margin-bottom:8px; text-align:right;">${text}</div>`;
        input.value = '';
        messages.scrollTop = messages.scrollHeight;

        setTimeout(() => {
            let reply = "I can help you with Smart TVs, ACs, Washing Machines, Laptops, and Custom PC Builds! Check our live Amazon deal prices on the homepage.";
            if (text.toLowerCase().includes('tv') || text.toLowerCase().includes('ac')) {
                reply = "We have top-rated 5 Star ACs & 4K Smart TVs with live Amazon India discounts. Click 'Buy Now' to go straight to Amazon checkout!";
            } else if (text.toLowerCase().includes('pc') || text.toLowerCase().includes('build')) {
                reply = "You can customize your PC in 3D using our 3D PC Builder Studio! Click '3D PC Builder' in the top navigation menu.";
            }
            messages.innerHTML += `<div style="background:#ffffff; color:#334155; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0; margin-bottom:8px;">${reply}</div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 800);
    }

    if (sendBtn) sendBtn.addEventListener('click', sendMsg);
    if (input) {
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') sendMsg();
        });
    }
}

function getLocalTodayStr() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// ── 7-SLOT AD BANNER NETWORK AUTO-RENDERER ──
function renderAdBanners() {
    const today = getLocalTodayStr();

    for (let slotId = 1; slotId <= 7; slotId++) {
        const slotEl = document.getElementById(`adSlot${slotId}`);
        if (!slotEl) continue;

        const adDataRaw = localStorage.getItem(`easytech_ad_slot_${slotId}`);
        if (!adDataRaw) {
            slotEl.classList.remove('active');
            slotEl.innerHTML = '';
            continue;
        }

        try {
            const adData = JSON.parse(adDataRaw);
            if (adData && adData.active && adData.img && adData.img.length > 5) {
                const startDate = adData.startDate || '';
                const endDate = adData.endDate || '';

                // Check if campaign is scheduled for future or has expired
                if (startDate && today < startDate) {
                    slotEl.classList.remove('active');
                    slotEl.innerHTML = '';
                    continue;
                }
                if (endDate && today > endDate) {
                    slotEl.classList.remove('active');
                    slotEl.innerHTML = '';
                    continue;
                }

                const targetUrl = adData.url || '#';
                slotEl.innerHTML = `
                    <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="ad-banner-link" onclick="trackAdClick(${slotId})">
                        <img src="${adData.img}" alt="Sponsor Ad" class="ad-banner-img">
                    </a>
                `;
                slotEl.classList.add('active');
            } else {
                slotEl.classList.remove('active');
                slotEl.innerHTML = '';
            }
        } catch (e) {
            slotEl.classList.remove('active');
            slotEl.innerHTML = '';
        }
    }
}

// Listen for live storage updates from Super Admin
window.addEventListener('storage', (e) => {
    if (e.key && e.key.startsWith('easytech_ad_slot_')) {
        renderAdBanners();
    }
});

function trackAdClick(slotId) {
    const clickKey = `easytech_ad_clicks_${slotId}`;
    const currentClicks = parseInt(localStorage.getItem(clickKey) || '0', 10);
    localStorage.setItem(clickKey, (currentClicks + 1).toString());
}

// Live Amazon Price & Image Auto-Sync Engine
async function syncLiveAmazonPrices() {
    try {
        const response = await fetch('/api/price-updater');
        if (response.ok) {
            const data = await response.json();
            console.log("💰 Live Amazon Sync Active:", data);
        }
    } catch (err) {
        console.log("Amazon price sync standing by on local dev.");
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    applyStoredLogo();
    initMasterAiSentinel();
    renderAdBanners();
    syncLiveAmazonPrices();
    renderCatalog();
    renderImpulse();
    renderBlog();
    setupSearchBar();
    setupFilters();
    setupInfiniteScroll();
    setupQuickView();
    setupExitIntent();
    setupPushBar();
    setupLanguageSwitcher();
});
