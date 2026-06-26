/* ===================================================
   NOIR — The Dark Editorial Design System
   Interactions + PayPal Smart Buttons
   github.com/Gorupa/noir-ui-kit
   =================================================== */

// ── Live Component Demo ─────────────────────────────────
function updateNorDemo() {
  const input = document.getElementById('noir-demo-input');
  const preview = document.getElementById('noir-demo-preview');
  if (!input || !preview) return;
  const val = input.value.trim();
  preview.textContent = val === '' ? 'Your text here, rendered live.' : val;
}

// ── Scroll reveal (subtle, editorial) ──────────────────
function initReveal() {
  if (!window.IntersectionObserver) return;
  const els = document.querySelectorAll('.n-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('n-revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);

// ── Tab switcher for component demo ────────────────────
function switchTab(tabId) {
  document.querySelectorAll('.demo-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + tabId);
  const tab   = document.getElementById('tab-'   + tabId);
  if (panel) panel.classList.add('active');
  if (tab)   tab.classList.add('active');
}

// ── Copy code snippet ───────────────────────────────────
function copySnippet(btn) {
  const code = btn.closest('.code-block').querySelector('pre').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    btn.style.color = 'var(--n-gold)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1800);
  });
}

// ═══════════════════════════════════════════════════════
// PAYPAL SMART BUTTONS — same client as KABOOM
// Tiers: Artisan $20 | Maison $38
// ═══════════════════════════════════════════════════════

const paypalBtnStyle = {
  color:  'black',
  shape:  'rect',
  label:  'checkout',
  height: 48
};

// 1 ─ Artisan Tier ($20)
if (document.getElementById('paypal-btn-artisan')) {
  paypal.Buttons({
    style: paypalBtnStyle,
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          description: 'NOIR UI — Artisan Tier',
          amount: { value: '20.00' }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Payment received, ' + details.payer.name.given_name + '! Redirecting you to WhatsApp — I will send the kit within a few hours.');
        window.open(
          'https://wa.me/917339992788?text=Hi%20Gaurav!%20I%20just%20paid%20%2420%20via%20PayPal%20for%20NOIR%20UI%20Artisan%20Tier.%20Transaction%20ID:%20' + details.id,
          '_blank'
        );
      });
    },
    onError: function(err) {
      console.error('PayPal error:', err);
      alert('Something went wrong with PayPal. Please try UPI or contact me on WhatsApp.');
    }
  }).render('#paypal-btn-artisan');
}

// 2 ─ Maison Tier ($38)
if (document.getElementById('paypal-btn-maison')) {
  paypal.Buttons({
    style: paypalBtnStyle,
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          description: 'NOIR UI — Maison Tier',
          amount: { value: '38.00' }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Payment received, ' + details.payer.name.given_name + '! Redirecting you to WhatsApp — I will send the kit within a few hours.');
        window.open(
          'https://wa.me/917339992788?text=Hi%20Gaurav!%20I%20just%20paid%20%2438%20via%20PayPal%20for%20NOIR%20UI%20Maison%20Tier.%20Transaction%20ID:%20' + details.id,
          '_blank'
        );
      });
    },
    onError: function(err) {
      console.error('PayPal error:', err);
      alert('Something went wrong with PayPal. Please try UPI or contact me on WhatsApp.');
    }
  }).render('#paypal-btn-maison');
}
