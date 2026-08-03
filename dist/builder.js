// PC Builder Studio Engine - 2D PC Cabinet & Component Selection Engine
const AFFILIATE_TAG = 'easytech020-21';

const CABINET_DATA = {
    'c1': {
        name: 'Thermaltake View 200 ARGB',
        desc: 'Dual-Chamber Tempered Glass Chassis with 3x 120mm ARGB Fans',
        img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
        fallbackImg: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80',
        price: 8490
    },
    'c2': {
        name: 'NZXT H510 Mid-Tower',
        desc: 'Matte Black Minimalist Mid-Tower with Flush Glass Side Panel',
        img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80',
        fallbackImg: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80',
        price: 7490
    },
    'c3': {
        name: 'Antec DF700 Flux Mesh',
        desc: 'High-Airflow Wave Mesh Front Panel with 5x Pre-Installed Fans',
        img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=80',
        fallbackImg: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=80',
        price: 6890
    },
    'c4': {
        name: 'Lian Li O11 Dynamic',
        desc: 'Snow White Dual-Glass Premium Showcase Chassis',
        img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        fallbackImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        price: 13490
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const cabinetSelect = document.getElementById('cabinetSelect');
    const moboSelect = document.getElementById('moboSelect');
    const cpuSelect = document.getElementById('cpuSelect');
    const gpuSelect = document.getElementById('gpuSelect');
    const ramSelect = document.getElementById('ramSelect');
    const storageSelect = document.getElementById('storageSelect');
    const psuSelect = document.getElementById('psuSelect');
    const totalPriceEl = document.getElementById('totalPrice');
    const buyAllBtn = document.getElementById('buyAllBtn');

    const cabinet2dImg = document.getElementById('cabinet2dImg');
    const cabinetTitleDisplay = document.getElementById('cabinetTitleDisplay');
    const cabinetSubDisplay = document.getElementById('cabinetSubDisplay');

    function updateCabinetView() {
        const val = cabinetSelect ? cabinetSelect.value : 'c1';
        const data = CABINET_DATA[val] || CABINET_DATA['c1'];

        if (cabinet2dImg) {
            cabinet2dImg.src = data.img;
            cabinet2dImg.onerror = () => {
                cabinet2dImg.src = data.fallbackImg;
            };
        }
        if (cabinetTitleDisplay) cabinetTitleDisplay.textContent = data.name;
        if (cabinetSubDisplay) cabinetSubDisplay.textContent = data.desc;

        calculateTotal();
    }

    function calculateTotal() {
        let total = 0;
        const selectors = [cabinetSelect, moboSelect, cpuSelect, gpuSelect, ramSelect, storageSelect, psuSelect];

        selectors.forEach(sel => {
            if (sel) {
                const opt = sel.options[sel.selectedIndex];
                const p = parseInt(opt.getAttribute('data-price') || '0', 10);
                total += p;
            }
        });

        if (totalPriceEl) {
            totalPriceEl.textContent = '₹' + total.toLocaleString('en-IN');
        }
    }

    // Attach listeners
    [cabinetSelect, moboSelect, cpuSelect, gpuSelect, ramSelect, storageSelect, psuSelect].forEach(sel => {
        sel?.addEventListener('change', () => {
            if (sel === cabinetSelect) updateCabinetView();
            else calculateTotal();
        });
    });

    buyAllBtn?.addEventListener('click', () => {
        const cabName = cabinetSelect ? cabinetSelect.options[cabinetSelect.selectedIndex].text.split(' - ')[0] : 'PC Cabinet';
        const searchUrl = `https://www.amazon.in/s?k=${encodeURIComponent(cabName)}&tag=${AFFILIATE_TAG}`;
        window.open(searchUrl, '_blank');
    });

    // Initial run
    updateCabinetView();
});
