/** CE JS - Fortaleza - Vibrant-energetic with red-orange warm tones */
const STATE_CONFIG = {
  stateCode: 'ce',
  capital: 'Fortaleza',
  formspreeUrl: 'https://formspree.io/f/xceqbddb',
  colors: { primary: '#ff6b6b', secondary: '#ffa07a', accent: '#ffe4b5' },
  animations: {"enabled": true, "header": {"type": "coastalSlide", "duration": "0.7s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "beachWave", "duration": "1.2s", "easing": "ease-in-out", "stagger": "0.2s"}, "hero": {"type": "oceanParallax", "speed": 0.5, "direction": "horizontal"}, "cards": {"type": "waveFloat", "amplitude": 10, "frequency": 2}, "images": {"type": "tideReveal", "direction": "up", "duration": "1s"}},
  interactions: {"hover": "wave-lift", "scroll": "tide-flow", "transitions": "coastal-ease", "click": "wave-splash"},
  premiumEffects: ["ocean-waves", "sand-texture", "beach-gradient", "seagull-motion"]
};

const SECTIONS = ["ce-index-section--map", "ce-index-section-frequently-asked-questions-about-living-in-", "ce-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
