// Cloudflare Pages Function: Send Real Admin Security Passkey OTP via Resend API

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const body = await request.json().catch(() => ({}));
        const email = body.email || 'pothurikalyanram@gmail.com';
        const alternateEmail = body.alternateEmail || '';
        const passkey = body.passkey || Math.floor(100000 + Math.random() * 900000).toString();

        const recipients = [email];
        if (alternateEmail && alternateEmail.includes('@') && alternateEmail !== email) {
            recipients.push(alternateEmail);
        }

        const RESEND_API_KEY = env.RESEND_API_KEY;

        if (!RESEND_API_KEY) {
            return new Response(JSON.stringify({
                status: 'fallback',
                passkey: passkey,
                message: 'Resend API key not configured. Using Emergency Passkey mode.'
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
            });
        }

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'EasyTech Admin Security <onboarding@resend.dev>',
                to: recipients,
                subject: '🔒 Your 6-Digit EasyTech Admin Security Passkey & Emergency PIN',
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 28px; background: #0f172a; color: #ffffff; border-radius: 14px; max-width: 520px; margin: 0 auto; border: 1px solid #334155;">
                        <h2 style="color: #60a5fa; margin-bottom: 4px; font-size: 22px;">EasyTech Admin Control Portal</h2>
                        <p style="font-size: 13px; color: #94a3b8; margin-top: 0;">Two-Factor Identity Verification & Master Access Credentials</p>
                        <hr style="border: none; border-top: 1px solid #334155; margin: 20px 0;" />
                        
                        <p style="font-size: 13px; color: #cbd5e1; margin-bottom: 8px;">🔑 Your 6-Digit Security Access Passkey (OTP):</p>
                        <div style="font-size: 34px; font-weight: 800; color: #34d399; letter-spacing: 6px; padding: 16px 24px; background: #1e293b; display: inline-block; border-radius: 10px; border: 1px solid #059669; margin-bottom: 24px;">
                            ${passkey}
                        </div>

                        <div style="background: #1e293b; border-left: 4px solid #3b82f6; padding: 14px 18px; border-radius: 8px;">
                            <p style="font-size: 11px; color: #94a3b8; margin: 0 0 4px 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">🛡️ Emergency Backup Master PIN:</p>
                            <p style="font-size: 22px; font-weight: 800; color: #60a5fa; margin: 0; letter-spacing: 4px;">2026</p>
                            <p style="font-size: 11px; color: #64748b; margin: 6px 0 0 0;">Use this Emergency PIN if you ever lose device network connectivity.</p>
                        </div>

                        <hr style="border: none; border-top: 1px solid #334155; margin: 20px 0;" />
                        <p style="font-size: 11px; color: #64748b; margin: 0;">Registered Administrator Email: ${email}</p>
                    </div>
                `
            })
        });

        const data = await response.json();

        return new Response(JSON.stringify({
            status: 'success',
            email: email,
            passkey: passkey,
            resendId: data.id || null,
            message: `Security passkey delivered to ${email}`
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }
}
