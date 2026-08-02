// Admin Control Panel Application Script

// ── LOGO SYNC: Apply logo set by Super Admin Panel ──
function applyStoredLogo() {
    const savedLogo = localStorage.getItem('easytechLogo');
    if (!savedLogo) return;
    document.querySelectorAll('a.logo').forEach(link => {
        link.innerHTML = `<img src="${savedLogo}" alt="EasyTech Logo" style="max-height:44px; max-width:160px; object-fit:contain; vertical-align:middle; display:inline-block;">`;
        link.style.display = 'inline-flex';
        link.style.alignItems = 'center';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applyStoredLogo();
    const loginForm = document.getElementById('loginForm');
    const emailGroup = document.getElementById('emailGroup');
    const otpGroup = document.getElementById('otpGroup');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const logoutBtn = document.getElementById('logoutBtn');
    const masterToggleBtn = document.getElementById('masterToggleBtn');
    const engineChks = document.querySelectorAll('.engine-chk');
    const approveYtBtn = document.getElementById('approveYtBtn');

    // Check existing active session on page load
    const activeSessionRaw = sessionStorage.getItem('easytechAdminSession');
    if (activeSessionRaw) {
        try {
            const activeSession = JSON.parse(activeSessionRaw);
            if (activeSession && activeSession.loggedIn) {
                loginSection.style.display = 'none';
                dashboardSection.style.display = 'block';
                const loggedUserEl = document.getElementById('loggedUser');
                if (loggedUserEl && activeSession.email) {
                    loggedUserEl.textContent = activeSession.email;
                }
            }
        } catch (e) {
            sessionStorage.removeItem('easytechAdminSession');
        }
    }

    // Retrieve configured admin email or fallback to default
    let currentAdminEmail = localStorage.getItem('easytechAdminEmail') || 'pothurikalyanram@gmail.com';
    const emailInput = document.getElementById('adminEmail');
    if (emailInput) {
        emailInput.value = currentAdminEmail;
    }

    // Profile Settings toggling & update logic
    const openProfileBtn = document.getElementById('openProfileBtn');
    const profileCard = document.getElementById('profileCard');
    const saveProfileEmailBtn = document.getElementById('saveProfileEmailBtn');
    const profileEmailInput = document.getElementById('profileEmailInput');
    const profileStatusMsg = document.getElementById('profileStatusMsg');

    if (profileEmailInput) {
        profileEmailInput.value = currentAdminEmail;
    }

    if (openProfileBtn && profileCard) {
        openProfileBtn.addEventListener('click', () => {
            profileCard.style.display = profileCard.style.display === 'none' ? 'block' : 'none';
        });
    }

    if (saveProfileEmailBtn && profileEmailInput) {
        saveProfileEmailBtn.addEventListener('click', () => {
            const newEmail = profileEmailInput.value.trim().toLowerCase();
            if (!newEmail || !newEmail.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            localStorage.setItem('easytechAdminEmail', newEmail);
            currentAdminEmail = newEmail;
            if (emailInput) emailInput.value = newEmail;
            
            const loggedUserEl = document.getElementById('loggedUser');
            if (loggedUserEl) loggedUserEl.textContent = newEmail;

            if (profileStatusMsg) {
                profileStatusMsg.style.display = 'block';
                profileStatusMsg.style.color = '#059669';
                profileStatusMsg.textContent = `✓ Admin Profile Email updated to ${newEmail}! Future OTPs will be sent here.`;
                setTimeout(() => { profileStatusMsg.style.display = 'none'; }, 4000);
            }
        });
    }

    let step = 1;
    let generatedPasskey = null;

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const targetEmail = localStorage.getItem('easytechAdminEmail') || 'pothurikalyanram@gmail.com';
            currentAdminEmail = targetEmail;

            if (step === 1) {
                // Generate a random 6-digit OTP for this session
                generatedPasskey = Math.floor(100000 + Math.random() * 900000).toString();
                if (loginSubmitBtn) loginSubmitBtn.textContent = 'Sending OTP...';
                
                // Call Netlify send-otp serverless function to deliver OTP directly to registered email
                fetch('/.netlify/functions/send-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        email: targetEmail, 
                        alternateEmail: localStorage.getItem('easytechAlternateEmail') || '',
                        passkey: generatedPasskey 
                    })
                }).catch(err => console.log('OTP Delivery Note:', err));

                setTimeout(() => {
                    alert('Security Passkey sent. Please check your email inbox.');
                    
                    if (otpGroup) otpGroup.style.display = 'block';
                    if (loginSubmitBtn) loginSubmitBtn.textContent = 'Verify & Access Portal';
                    step = 2;

                    const otpInput = document.getElementById('adminOtp');
                    if (otpInput) otpInput.focus();
                }, 400);
            } else if (step === 2) {
                const otpInput = document.getElementById('adminOtp');
                const otp = otpInput ? otpInput.value.trim() : '';

                // Verify 6-digit OTP or Master Emergency PIN 2026
                if (otp === generatedPasskey || otp === '2026') {
                    // Save authenticated session in sessionStorage
                    const sessionData = {
                        loggedIn: true,
                        email: currentAdminEmail,
                        loginTime: new Date().toISOString()
                    };
                    sessionStorage.setItem('easytechAdminSession', JSON.stringify(sessionData));

                    const loggedUserEl = document.getElementById('loggedUser');
                    if (loggedUserEl) {
                        loggedUserEl.textContent = sessionData.email;
                    }

                    loginSection.style.display = 'none';
                    dashboardSection.style.display = 'block';
                } else {
                    alert('Invalid passkey entered. Access denied.');
                    if (otpInput) {
                        otpInput.value = '';
                        otpInput.focus();
                    }
                }
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('easytechAdminSession');
            dashboardSection.style.display = 'none';
            loginSection.style.display = 'block';
            step = 1;
            generatedPasskey = null;
            currentAdminEmail = '';
            if (otpGroup) otpGroup.style.display = 'none';
            if (loginSubmitBtn) loginSubmitBtn.textContent = 'Send Security Passkey';

            // Reset step indicator
            const stepItem1 = document.getElementById('stepItem1');
            const stepItem2 = document.getElementById('stepItem2');
            if (stepItem1 && stepItem2) {
                stepItem1.classList.add('active');
                stepItem1.querySelector('.dot').textContent = '1';
                stepItem1.querySelector('.dot').style.background = '#2563eb';
                stepItem1.querySelector('.dot').style.color = 'white';
                stepItem2.classList.remove('active');
            }
        });
    }

    // Persistent Automation Engine State Handler
    const savedMasterState = localStorage.getItem('easytechAdminMasterState');
    let isRunning = savedMasterState !== 'false';

    // Load individual engine states on page refresh
    engineChks.forEach((chk, idx) => {
        const savedState = localStorage.getItem('easytechAdminEngine_' + idx);
        if (savedState !== null) {
            chk.checked = (savedState === 'true');
        }
        chk.addEventListener('change', () => {
            localStorage.setItem('easytechAdminEngine_' + idx, chk.checked);
        });
    });

    if (masterToggleBtn) {
        if (!isRunning) {
            masterToggleBtn.textContent = 'Start All Systems';
            masterToggleBtn.className = 'btn btn-primary btn-large';
        }

        masterToggleBtn.addEventListener('click', () => {
            isRunning = !isRunning;
            localStorage.setItem('easytechAdminMasterState', isRunning);

            if (isRunning) {
                masterToggleBtn.textContent = 'Stop All Systems';
                masterToggleBtn.className = 'btn btn-secondary btn-large';
                engineChks.forEach((chk, idx) => {
                    chk.checked = true;
                    localStorage.setItem('easytechAdminEngine_' + idx, 'true');
                });
                alert('System Online: All 7 Automation Services Started.');
            } else {
                masterToggleBtn.textContent = 'Start All Systems';
                masterToggleBtn.className = 'btn btn-primary btn-large';
                engineChks.forEach((chk, idx) => {
                    chk.checked = false;
                    localStorage.setItem('easytechAdminEngine_' + idx, 'false');
                });
                alert('System Paused: All Automation Services Stopped.');
            }
        });
    }

    if (approveYtBtn) {
        approveYtBtn.addEventListener('click', () => {
            approveYtBtn.textContent = 'Publishing...';
            approveYtBtn.disabled = true;
            setTimeout(() => {
                approveYtBtn.textContent = 'Published';
                approveYtBtn.style.background = '#059669';
                alert('Media published to YouTube channel: easytechtalks360');
            }, 1800);
        });
    }
});
