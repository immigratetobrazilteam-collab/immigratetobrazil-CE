
// Master JS for State: CE - Persona: Dune Beach Wanderer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 780;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const ce_index_form_immigrate_to_cear = document.getElementById('ce-index-form-immigrate-to-cear');
  if (ce_index_form_immigrate_to_cear) {
    gsap.from('#ce-index-form-immigrate-to-cear input, #ce-index-form-immigrate-to-cear textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_index_list__immigration_assistance_for_surfing_adventurers_in_cear_ = document.getElementById('ce-index-list--immigration-assistance-for-surfing-adventurers-in-cear-');
  if (ce_index_list__immigration_assistance_for_surfing_adventurers_in_cear_) {
    gsap.from('#ce-index-list--immigration-assistance-for-surfing-adventurers-in-cear- li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_index_list_immigration_legal_services_in_brazil = document.getElementById('ce-index-list-immigration-legal-services-in-brazil');
  if (ce_index_list_immigration_legal_services_in_brazil) {
    gsap.from('#ce-index-list-immigration-legal-services-in-brazil li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_index_section_why_cear = document.getElementById('ce-index-section-why-cear');
  if (ce_index_section_why_cear) {
    gsap.fromTo('#ce-index-section-why-cear', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_index_list_how_the_process_works = document.getElementById('ce-index-list-how-the-process-works');
  if (ce_index_list_how_the_process_works) {
    gsap.from('#ce-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_index_section__frequently_asked_questions_about_living_in_cear_ = document.getElementById('ce-index-section--frequently-asked-questions-about-living-in-cear-');
  if (ce_index_section__frequently_asked_questions_about_living_in_cear_) {
    gsap.fromTo('#ce-index-section--frequently-asked-questions-about-living-in-cear-', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('ce-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (ce_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#ce-renouncingcitizenship-form-renounce-brazilian-citizenship input, #ce-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_quick_facts = document.getElementById('ce-renouncingcitizenship-list-quick-facts');
  if (ce_renouncingcitizenship_list_quick_facts) {
    gsap.from('#ce-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('ce-renouncingcitizenship-list-common-challenges-applicants-face');
  if (ce_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ce-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('ce-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (ce_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ce-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_renunciation_overview = document.getElementById('ce-renouncingcitizenship-section-renunciation-overview');
  if (ce_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#ce-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_form_who_is_this_for = document.getElementById('ce-renouncingcitizenship-form-who-is-this-for');
  if (ce_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#ce-renouncingcitizenship-form-who-is-this-for input, #ce-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_required_documents = document.getElementById('ce-renouncingcitizenship-list-required-documents');
  if (ce_renouncingcitizenship_list_required_documents) {
    gsap.from('#ce-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_process = document.getElementById('ce-renouncingcitizenship-list-process');
  if (ce_renouncingcitizenship_list_process) {
    gsap.from('#ce-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_timelines_deadlines = document.getElementById('ce-renouncingcitizenship-section-timelines-deadlines');
  if (ce_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ce-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_fees_costs = document.getElementById('ce-renouncingcitizenship-section-fees-costs');
  if (ce_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#ce-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('ce-renouncingcitizenship-list-risks-common-mistakes');
  if (ce_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#ce-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('ce-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (ce_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_cear_specific_context = document.getElementById('ce-renouncingcitizenship-section-cear-specific-context');
  if (ce_renouncingcitizenship_section_cear_specific_context) {
    gsap.fromTo('#ce-renouncingcitizenship-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_what_our_clients_say = document.getElementById('ce-renouncingcitizenship-section-what-our-clients-say');
  if (ce_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ce-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('ce-renouncingcitizenship-section-frequently-asked-questions');
  if (ce_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ce-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_international_support = document.getElementById('ce-renouncingcitizenship-section-international-support');
  if (ce_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#ce-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_our_credentials = document.getElementById('ce-renouncingcitizenship-list-our-credentials');
  if (ce_renouncingcitizenship_list_our_credentials) {
    gsap.from('#ce-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_list_related_services = document.getElementById('ce-renouncingcitizenship-list-related-services');
  if (ce_renouncingcitizenship_list_related_services) {
    gsap.from('#ce-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('ce-renouncingcitizenship-section-youre-in-good-hands');
  if (ce_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ce-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_renouncingcitizenship_section_21 = document.getElementById('ce-renouncingcitizenship-section-21');
  if (ce_renouncingcitizenship_section_21) {
    gsap.fromTo('#ce-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('ce-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (ce_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#ce-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #ce-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_quick_facts = document.getElementById('ce-provisional-list-quick-facts');
  if (ce_provisional_list_quick_facts) {
    gsap.from('#ce-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_common_challenges_applicants_face = document.getElementById('ce-provisional-list-common-challenges-applicants-face');
  if (ce_provisional_list_common_challenges_applicants_face) {
    gsap.from('#ce-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_how_we_solve_these_challenges = document.getElementById('ce-provisional-list-how-we-solve-these-challenges');
  if (ce_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#ce-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_naturalisation_overview = document.getElementById('ce-provisional-section-naturalisation-overview');
  if (ce_provisional_section_naturalisation_overview) {
    gsap.fromTo('#ce-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_form_who_is_this_naturalisation_for = document.getElementById('ce-provisional-form-who-is-this-naturalisation-for');
  if (ce_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#ce-provisional-form-who-is-this-naturalisation-for input, #ce-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_required_documents = document.getElementById('ce-provisional-list-required-documents');
  if (ce_provisional_list_required_documents) {
    gsap.from('#ce-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_application_process = document.getElementById('ce-provisional-list-application-process');
  if (ce_provisional_list_application_process) {
    gsap.from('#ce-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_timelines_deadlines = document.getElementById('ce-provisional-section-timelines-deadlines');
  if (ce_provisional_section_timelines_deadlines) {
    gsap.fromTo('#ce-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_fees_costs = document.getElementById('ce-provisional-section-fees-costs');
  if (ce_provisional_section_fees_costs) {
    gsap.fromTo('#ce-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_risks_common_mistakes = document.getElementById('ce-provisional-list-risks-common-mistakes');
  if (ce_provisional_list_risks_common_mistakes) {
    gsap.from('#ce-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_diy_vs_professional_assistance = document.getElementById('ce-provisional-section-diy-vs-professional-assistance');
  if (ce_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_cear_specific_context = document.getElementById('ce-provisional-section-cear-specific-context');
  if (ce_provisional_section_cear_specific_context) {
    gsap.fromTo('#ce-provisional-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_what_our_clients_say = document.getElementById('ce-provisional-section-what-our-clients-say');
  if (ce_provisional_section_what_our_clients_say) {
    gsap.fromTo('#ce-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_frequently_asked_questions = document.getElementById('ce-provisional-section-frequently-asked-questions');
  if (ce_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#ce-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_international_support = document.getElementById('ce-provisional-section-international-support');
  if (ce_provisional_section_international_support) {
    gsap.fromTo('#ce-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_our_credentials = document.getElementById('ce-provisional-list-our-credentials');
  if (ce_provisional_list_our_credentials) {
    gsap.from('#ce-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_list_related_services = document.getElementById('ce-provisional-list-related-services');
  if (ce_provisional_list_related_services) {
    gsap.from('#ce-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_youre_in_good_hands = document.getElementById('ce-provisional-section-youre-in-good-hands');
  if (ce_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#ce-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_provisional_section_21 = document.getElementById('ce-provisional-section-21');
  if (ce_provisional_section_21) {
    gsap.fromTo('#ce-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('ce-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (ce_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#ce-special-form-special-naturalisation-in-brazil-for-particular-cases input, #ce-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_quick_facts = document.getElementById('ce-special-list-quick-facts');
  if (ce_special_list_quick_facts) {
    gsap.from('#ce-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_common_challenges_applicants_face = document.getElementById('ce-special-list-common-challenges-applicants-face');
  if (ce_special_list_common_challenges_applicants_face) {
    gsap.from('#ce-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_how_we_solve_these_challenges = document.getElementById('ce-special-list-how-we-solve-these-challenges');
  if (ce_special_list_how_we_solve_these_challenges) {
    gsap.from('#ce-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_naturalisation_overview = document.getElementById('ce-special-section-naturalisation-overview');
  if (ce_special_section_naturalisation_overview) {
    gsap.fromTo('#ce-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_form_who_is_this_naturalisation_for = document.getElementById('ce-special-form-who-is-this-naturalisation-for');
  if (ce_special_form_who_is_this_naturalisation_for) {
    gsap.from('#ce-special-form-who-is-this-naturalisation-for input, #ce-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_required_documents = document.getElementById('ce-special-list-required-documents');
  if (ce_special_list_required_documents) {
    gsap.from('#ce-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_application_process = document.getElementById('ce-special-list-application-process');
  if (ce_special_list_application_process) {
    gsap.from('#ce-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_timelines_deadlines = document.getElementById('ce-special-section-timelines-deadlines');
  if (ce_special_section_timelines_deadlines) {
    gsap.fromTo('#ce-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_fees_costs = document.getElementById('ce-special-section-fees-costs');
  if (ce_special_section_fees_costs) {
    gsap.fromTo('#ce-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_risks_common_mistakes = document.getElementById('ce-special-list-risks-common-mistakes');
  if (ce_special_list_risks_common_mistakes) {
    gsap.from('#ce-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_diy_vs_professional_assistance = document.getElementById('ce-special-section-diy-vs-professional-assistance');
  if (ce_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_cear_specific_context = document.getElementById('ce-special-section-cear-specific-context');
  if (ce_special_section_cear_specific_context) {
    gsap.fromTo('#ce-special-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_what_our_clients_say = document.getElementById('ce-special-section-what-our-clients-say');
  if (ce_special_section_what_our_clients_say) {
    gsap.fromTo('#ce-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_frequently_asked_questions = document.getElementById('ce-special-section-frequently-asked-questions');
  if (ce_special_section_frequently_asked_questions) {
    gsap.fromTo('#ce-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_international_support = document.getElementById('ce-special-section-international-support');
  if (ce_special_section_international_support) {
    gsap.fromTo('#ce-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_our_credentials = document.getElementById('ce-special-list-our-credentials');
  if (ce_special_list_our_credentials) {
    gsap.from('#ce-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_list_related_services = document.getElementById('ce-special-list-related-services');
  if (ce_special_list_related_services) {
    gsap.from('#ce-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_youre_in_good_hands = document.getElementById('ce-special-section-youre-in-good-hands');
  if (ce_special_section_youre_in_good_hands) {
    gsap.fromTo('#ce-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_special_section_21 = document.getElementById('ce-special-section-21');
  if (ce_special_section_21) {
    gsap.fromTo('#ce-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('ce-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (ce_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#ce-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #ce-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_quick_facts = document.getElementById('ce-ordinary-list-quick-facts');
  if (ce_ordinary_list_quick_facts) {
    gsap.from('#ce-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_common_challenges_applicants_face = document.getElementById('ce-ordinary-list-common-challenges-applicants-face');
  if (ce_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#ce-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_how_we_solve_these_challenges = document.getElementById('ce-ordinary-list-how-we-solve-these-challenges');
  if (ce_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ce-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_naturalisation_overview = document.getElementById('ce-ordinary-section-naturalisation-overview');
  if (ce_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#ce-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_form_who_is_this_naturalisation_for = document.getElementById('ce-ordinary-form-who-is-this-naturalisation-for');
  if (ce_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ce-ordinary-form-who-is-this-naturalisation-for input, #ce-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_required_documents = document.getElementById('ce-ordinary-list-required-documents');
  if (ce_ordinary_list_required_documents) {
    gsap.from('#ce-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_application_process = document.getElementById('ce-ordinary-list-application-process');
  if (ce_ordinary_list_application_process) {
    gsap.from('#ce-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_timelines_deadlines = document.getElementById('ce-ordinary-section-timelines-deadlines');
  if (ce_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#ce-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_fees_costs = document.getElementById('ce-ordinary-section-fees-costs');
  if (ce_ordinary_section_fees_costs) {
    gsap.fromTo('#ce-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_risks_common_mistakes = document.getElementById('ce-ordinary-list-risks-common-mistakes');
  if (ce_ordinary_list_risks_common_mistakes) {
    gsap.from('#ce-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_diy_vs_professional_assistance = document.getElementById('ce-ordinary-section-diy-vs-professional-assistance');
  if (ce_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_cear_specific_context = document.getElementById('ce-ordinary-section-cear-specific-context');
  if (ce_ordinary_section_cear_specific_context) {
    gsap.fromTo('#ce-ordinary-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_what_our_clients_say = document.getElementById('ce-ordinary-section-what-our-clients-say');
  if (ce_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#ce-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_frequently_asked_questions = document.getElementById('ce-ordinary-section-frequently-asked-questions');
  if (ce_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ce-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_international_support = document.getElementById('ce-ordinary-section-international-support');
  if (ce_ordinary_section_international_support) {
    gsap.fromTo('#ce-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_our_credentials = document.getElementById('ce-ordinary-list-our-credentials');
  if (ce_ordinary_list_our_credentials) {
    gsap.from('#ce-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_list_related_services = document.getElementById('ce-ordinary-list-related-services');
  if (ce_ordinary_list_related_services) {
    gsap.from('#ce-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_youre_in_good_hands = document.getElementById('ce-ordinary-section-youre-in-good-hands');
  if (ce_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ce-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_ordinary_section_21 = document.getElementById('ce-ordinary-section-21');
  if (ce_ordinary_section_21) {
    gsap.fromTo('#ce-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('ce-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (ce_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#ce-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #ce-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_quick_facts = document.getElementById('ce-extraordinary-list-quick-facts');
  if (ce_extraordinary_list_quick_facts) {
    gsap.from('#ce-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_common_challenges_applicants_face = document.getElementById('ce-extraordinary-list-common-challenges-applicants-face');
  if (ce_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#ce-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_how_we_solve_these_challenges = document.getElementById('ce-extraordinary-list-how-we-solve-these-challenges');
  if (ce_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ce-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_naturalisation_overview = document.getElementById('ce-extraordinary-section-naturalisation-overview');
  if (ce_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#ce-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('ce-extraordinary-form-who-is-this-naturalisation-for');
  if (ce_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ce-extraordinary-form-who-is-this-naturalisation-for input, #ce-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_required_documents = document.getElementById('ce-extraordinary-list-required-documents');
  if (ce_extraordinary_list_required_documents) {
    gsap.from('#ce-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_application_process = document.getElementById('ce-extraordinary-list-application-process');
  if (ce_extraordinary_list_application_process) {
    gsap.from('#ce-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_timelines_deadlines = document.getElementById('ce-extraordinary-section-timelines-deadlines');
  if (ce_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#ce-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_fees_costs = document.getElementById('ce-extraordinary-section-fees-costs');
  if (ce_extraordinary_section_fees_costs) {
    gsap.fromTo('#ce-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_risks_common_mistakes = document.getElementById('ce-extraordinary-list-risks-common-mistakes');
  if (ce_extraordinary_list_risks_common_mistakes) {
    gsap.from('#ce-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_diy_vs_professional_assistance = document.getElementById('ce-extraordinary-section-diy-vs-professional-assistance');
  if (ce_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_cear_specific_context = document.getElementById('ce-extraordinary-section-cear-specific-context');
  if (ce_extraordinary_section_cear_specific_context) {
    gsap.fromTo('#ce-extraordinary-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_what_our_clients_say = document.getElementById('ce-extraordinary-section-what-our-clients-say');
  if (ce_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#ce-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_frequently_asked_questions = document.getElementById('ce-extraordinary-section-frequently-asked-questions');
  if (ce_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ce-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_international_support = document.getElementById('ce-extraordinary-section-international-support');
  if (ce_extraordinary_section_international_support) {
    gsap.fromTo('#ce-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_our_credentials = document.getElementById('ce-extraordinary-list-our-credentials');
  if (ce_extraordinary_list_our_credentials) {
    gsap.from('#ce-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_list_related_services = document.getElementById('ce-extraordinary-list-related-services');
  if (ce_extraordinary_list_related_services) {
    gsap.from('#ce-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_youre_in_good_hands = document.getElementById('ce-extraordinary-section-youre-in-good-hands');
  if (ce_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ce-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extraordinary_section_21 = document.getElementById('ce-extraordinary-section-21');
  if (ce_extraordinary_section_21) {
    gsap.fromTo('#ce-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('ce-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (ce_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#ce-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #ce-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_quick_facts = document.getElementById('ce-reacquisitioncitizenship-list-quick-facts');
  if (ce_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#ce-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('ce-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (ce_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ce-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('ce-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (ce_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ce-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('ce-reacquisitioncitizenship-section-reacquisition-overview');
  if (ce_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('ce-reacquisitioncitizenship-form-who-is-this-for');
  if (ce_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#ce-reacquisitioncitizenship-form-who-is-this-for input, #ce-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_required_documents = document.getElementById('ce-reacquisitioncitizenship-list-required-documents');
  if (ce_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#ce-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_process = document.getElementById('ce-reacquisitioncitizenship-list-process');
  if (ce_reacquisitioncitizenship_list_process) {
    gsap.from('#ce-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('ce-reacquisitioncitizenship-section-timelines-deadlines');
  if (ce_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_fees_costs = document.getElementById('ce-reacquisitioncitizenship-section-fees-costs');
  if (ce_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('ce-reacquisitioncitizenship-list-risks-common-mistakes');
  if (ce_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#ce-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('ce-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (ce_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_cear_specific_context = document.getElementById('ce-reacquisitioncitizenship-section-cear-specific-context');
  if (ce_reacquisitioncitizenship_section_cear_specific_context) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('ce-reacquisitioncitizenship-section-what-our-clients-say');
  if (ce_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('ce-reacquisitioncitizenship-section-frequently-asked-questions');
  if (ce_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_international_support = document.getElementById('ce-reacquisitioncitizenship-section-international-support');
  if (ce_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_our_credentials = document.getElementById('ce-reacquisitioncitizenship-list-our-credentials');
  if (ce_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#ce-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_list_related_services = document.getElementById('ce-reacquisitioncitizenship-list-related-services');
  if (ce_reacquisitioncitizenship_list_related_services) {
    gsap.from('#ce-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('ce-reacquisitioncitizenship-section-youre-in-good-hands');
  if (ce_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_reacquisitioncitizenship_section_21 = document.getElementById('ce-reacquisitioncitizenship-section-21');
  if (ce_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#ce-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('ce-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (ce_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#ce-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #ce-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_quick_facts = document.getElementById('ce-scientificresearch-list-quick-facts');
  if (ce_scientificresearch_list_quick_facts) {
    gsap.from('#ce-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_common_challenges_applicants_face = document.getElementById('ce-scientificresearch-list-common-challenges-applicants-face');
  if (ce_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#ce-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('ce-scientificresearch-list-how-we-solve-these-challenges');
  if (ce_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#ce-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_residency_overview = document.getElementById('ce-scientificresearch-section-residency-overview');
  if (ce_scientificresearch_section_residency_overview) {
    gsap.fromTo('#ce-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_form_who_is_this_residency_for = document.getElementById('ce-scientificresearch-form-who-is-this-residency-for');
  if (ce_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#ce-scientificresearch-form-who-is-this-residency-for input, #ce-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_required_documents = document.getElementById('ce-scientificresearch-list-required-documents');
  if (ce_scientificresearch_list_required_documents) {
    gsap.from('#ce-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_application_process = document.getElementById('ce-scientificresearch-list-application-process');
  if (ce_scientificresearch_list_application_process) {
    gsap.from('#ce-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_timelines_deadlines = document.getElementById('ce-scientificresearch-section-timelines-deadlines');
  if (ce_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#ce-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_fees_costs = document.getElementById('ce-scientificresearch-section-fees-costs');
  if (ce_scientificresearch_section_fees_costs) {
    gsap.fromTo('#ce-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_risks_common_mistakes = document.getElementById('ce-scientificresearch-list-risks-common-mistakes');
  if (ce_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#ce-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('ce-scientificresearch-section-diy-vs-professional-assistance');
  if (ce_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_cear_specific_context = document.getElementById('ce-scientificresearch-section-cear-specific-context');
  if (ce_scientificresearch_section_cear_specific_context) {
    gsap.fromTo('#ce-scientificresearch-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_what_our_clients_say = document.getElementById('ce-scientificresearch-section-what-our-clients-say');
  if (ce_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#ce-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_frequently_asked_questions = document.getElementById('ce-scientificresearch-section-frequently-asked-questions');
  if (ce_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#ce-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_international_support = document.getElementById('ce-scientificresearch-section-international-support');
  if (ce_scientificresearch_section_international_support) {
    gsap.fromTo('#ce-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_our_credentials = document.getElementById('ce-scientificresearch-list-our-credentials');
  if (ce_scientificresearch_list_our_credentials) {
    gsap.from('#ce-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_list_related_services = document.getElementById('ce-scientificresearch-list-related-services');
  if (ce_scientificresearch_list_related_services) {
    gsap.from('#ce-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_youre_in_good_hands = document.getElementById('ce-scientificresearch-section-youre-in-good-hands');
  if (ce_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#ce-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_scientificresearch_section_21 = document.getElementById('ce-scientificresearch-section-21');
  if (ce_scientificresearch_section_21) {
    gsap.fromTo('#ce-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_form_study_in_brazil_with_study_residency = document.getElementById('ce-study-form-study-in-brazil-with-study-residency');
  if (ce_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#ce-study-form-study-in-brazil-with-study-residency input, #ce-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_quick_facts = document.getElementById('ce-study-list-quick-facts');
  if (ce_study_list_quick_facts) {
    gsap.from('#ce-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_common_challenges_applicants_face = document.getElementById('ce-study-list-common-challenges-applicants-face');
  if (ce_study_list_common_challenges_applicants_face) {
    gsap.from('#ce-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_how_we_solve_these_challenges = document.getElementById('ce-study-list-how-we-solve-these-challenges');
  if (ce_study_list_how_we_solve_these_challenges) {
    gsap.from('#ce-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_residency_overview = document.getElementById('ce-study-section-residency-overview');
  if (ce_study_section_residency_overview) {
    gsap.fromTo('#ce-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_form_who_is_this_residency_for = document.getElementById('ce-study-form-who-is-this-residency-for');
  if (ce_study_form_who_is_this_residency_for) {
    gsap.from('#ce-study-form-who-is-this-residency-for input, #ce-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_required_documents = document.getElementById('ce-study-list-required-documents');
  if (ce_study_list_required_documents) {
    gsap.from('#ce-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_application_process = document.getElementById('ce-study-list-application-process');
  if (ce_study_list_application_process) {
    gsap.from('#ce-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_timelines_deadlines = document.getElementById('ce-study-section-timelines-deadlines');
  if (ce_study_section_timelines_deadlines) {
    gsap.fromTo('#ce-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_fees_costs = document.getElementById('ce-study-section-fees-costs');
  if (ce_study_section_fees_costs) {
    gsap.fromTo('#ce-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_risks_common_mistakes = document.getElementById('ce-study-list-risks-common-mistakes');
  if (ce_study_list_risks_common_mistakes) {
    gsap.from('#ce-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_diy_vs_professional_assistance = document.getElementById('ce-study-section-diy-vs-professional-assistance');
  if (ce_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_cear_specific_context = document.getElementById('ce-study-section-cear-specific-context');
  if (ce_study_section_cear_specific_context) {
    gsap.fromTo('#ce-study-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_what_our_clients_say = document.getElementById('ce-study-section-what-our-clients-say');
  if (ce_study_section_what_our_clients_say) {
    gsap.fromTo('#ce-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_frequently_asked_questions = document.getElementById('ce-study-section-frequently-asked-questions');
  if (ce_study_section_frequently_asked_questions) {
    gsap.fromTo('#ce-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_international_support = document.getElementById('ce-study-section-international-support');
  if (ce_study_section_international_support) {
    gsap.fromTo('#ce-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_our_credentials = document.getElementById('ce-study-list-our-credentials');
  if (ce_study_list_our_credentials) {
    gsap.from('#ce-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_list_related_services = document.getElementById('ce-study-list-related-services');
  if (ce_study_list_related_services) {
    gsap.from('#ce-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_youre_in_good_hands = document.getElementById('ce-study-section-youre-in-good-hands');
  if (ce_study_section_youre_in_good_hands) {
    gsap.fromTo('#ce-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_study_section_21 = document.getElementById('ce-study-section-21');
  if (ce_study_section_21) {
    gsap.fromTo('#ce-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('ce-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (ce_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#ce-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #ce-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_quick_facts = document.getElementById('ce-educationalexchange-list-quick-facts');
  if (ce_educationalexchange_list_quick_facts) {
    gsap.from('#ce-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_common_challenges_applicants_face = document.getElementById('ce-educationalexchange-list-common-challenges-applicants-face');
  if (ce_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#ce-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('ce-educationalexchange-list-how-we-solve-these-challenges');
  if (ce_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ce-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_residency_overview = document.getElementById('ce-educationalexchange-section-residency-overview');
  if (ce_educationalexchange_section_residency_overview) {
    gsap.fromTo('#ce-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_form_who_is_this_residency_for = document.getElementById('ce-educationalexchange-form-who-is-this-residency-for');
  if (ce_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#ce-educationalexchange-form-who-is-this-residency-for input, #ce-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_required_documents = document.getElementById('ce-educationalexchange-list-required-documents');
  if (ce_educationalexchange_list_required_documents) {
    gsap.from('#ce-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_application_process = document.getElementById('ce-educationalexchange-list-application-process');
  if (ce_educationalexchange_list_application_process) {
    gsap.from('#ce-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_timelines_deadlines = document.getElementById('ce-educationalexchange-section-timelines-deadlines');
  if (ce_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#ce-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_fees_costs = document.getElementById('ce-educationalexchange-section-fees-costs');
  if (ce_educationalexchange_section_fees_costs) {
    gsap.fromTo('#ce-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_risks_common_mistakes = document.getElementById('ce-educationalexchange-list-risks-common-mistakes');
  if (ce_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#ce-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('ce-educationalexchange-section-diy-vs-professional-assistance');
  if (ce_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_cear_specific_context = document.getElementById('ce-educationalexchange-section-cear-specific-context');
  if (ce_educationalexchange_section_cear_specific_context) {
    gsap.fromTo('#ce-educationalexchange-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_what_our_clients_say = document.getElementById('ce-educationalexchange-section-what-our-clients-say');
  if (ce_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#ce-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_frequently_asked_questions = document.getElementById('ce-educationalexchange-section-frequently-asked-questions');
  if (ce_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ce-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_international_support = document.getElementById('ce-educationalexchange-section-international-support');
  if (ce_educationalexchange_section_international_support) {
    gsap.fromTo('#ce-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_our_credentials = document.getElementById('ce-educationalexchange-list-our-credentials');
  if (ce_educationalexchange_list_our_credentials) {
    gsap.from('#ce-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_list_related_services = document.getElementById('ce-educationalexchange-list-related-services');
  if (ce_educationalexchange_list_related_services) {
    gsap.from('#ce-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_youre_in_good_hands = document.getElementById('ce-educationalexchange-section-youre-in-good-hands');
  if (ce_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ce-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_educationalexchange_section_21 = document.getElementById('ce-educationalexchange-section-21');
  if (ce_educationalexchange_section_21) {
    gsap.fromTo('#ce-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('ce-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (ce_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#ce-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #ce-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_quick_facts = document.getElementById('ce-humanitarian-list-quick-facts');
  if (ce_humanitarian_list_quick_facts) {
    gsap.from('#ce-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_common_challenges_applicants_face = document.getElementById('ce-humanitarian-list-common-challenges-applicants-face');
  if (ce_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#ce-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_how_we_solve_these_challenges = document.getElementById('ce-humanitarian-list-how-we-solve-these-challenges');
  if (ce_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#ce-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_residency_overview = document.getElementById('ce-humanitarian-section-residency-overview');
  if (ce_humanitarian_section_residency_overview) {
    gsap.fromTo('#ce-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_form_who_is_this_residency_for = document.getElementById('ce-humanitarian-form-who-is-this-residency-for');
  if (ce_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#ce-humanitarian-form-who-is-this-residency-for input, #ce-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_required_documents = document.getElementById('ce-humanitarian-list-required-documents');
  if (ce_humanitarian_list_required_documents) {
    gsap.from('#ce-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_application_process = document.getElementById('ce-humanitarian-list-application-process');
  if (ce_humanitarian_list_application_process) {
    gsap.from('#ce-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_timelines_deadlines = document.getElementById('ce-humanitarian-section-timelines-deadlines');
  if (ce_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#ce-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_fees_costs = document.getElementById('ce-humanitarian-section-fees-costs');
  if (ce_humanitarian_section_fees_costs) {
    gsap.fromTo('#ce-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_risks_common_mistakes = document.getElementById('ce-humanitarian-list-risks-common-mistakes');
  if (ce_humanitarian_list_risks_common_mistakes) {
    gsap.from('#ce-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_diy_vs_professional_assistance = document.getElementById('ce-humanitarian-section-diy-vs-professional-assistance');
  if (ce_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_cear_specific_context = document.getElementById('ce-humanitarian-section-cear-specific-context');
  if (ce_humanitarian_section_cear_specific_context) {
    gsap.fromTo('#ce-humanitarian-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_what_our_clients_say = document.getElementById('ce-humanitarian-section-what-our-clients-say');
  if (ce_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#ce-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_frequently_asked_questions = document.getElementById('ce-humanitarian-section-frequently-asked-questions');
  if (ce_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#ce-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_international_support = document.getElementById('ce-humanitarian-section-international-support');
  if (ce_humanitarian_section_international_support) {
    gsap.fromTo('#ce-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_our_credentials = document.getElementById('ce-humanitarian-list-our-credentials');
  if (ce_humanitarian_list_our_credentials) {
    gsap.from('#ce-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_list_related_services = document.getElementById('ce-humanitarian-list-related-services');
  if (ce_humanitarian_list_related_services) {
    gsap.from('#ce-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_youre_in_good_hands = document.getElementById('ce-humanitarian-section-youre-in-good-hands');
  if (ce_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#ce-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_humanitarian_section_21 = document.getElementById('ce-humanitarian-section-21');
  if (ce_humanitarian_section_21) {
    gsap.fromTo('#ce-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('ce-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (ce_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#ce-digitalnomad-form-digital-nomad-residency-in-brazil input, #ce-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_quick_facts = document.getElementById('ce-digitalnomad-list-quick-facts');
  if (ce_digitalnomad_list_quick_facts) {
    gsap.from('#ce-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_common_challenges_applicants_face = document.getElementById('ce-digitalnomad-list-common-challenges-applicants-face');
  if (ce_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#ce-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('ce-digitalnomad-list-how-we-solve-these-challenges');
  if (ce_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#ce-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_residency_overview = document.getElementById('ce-digitalnomad-section-residency-overview');
  if (ce_digitalnomad_section_residency_overview) {
    gsap.fromTo('#ce-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_form_who_is_this_residency_for = document.getElementById('ce-digitalnomad-form-who-is-this-residency-for');
  if (ce_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#ce-digitalnomad-form-who-is-this-residency-for input, #ce-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_required_documents = document.getElementById('ce-digitalnomad-list-required-documents');
  if (ce_digitalnomad_list_required_documents) {
    gsap.from('#ce-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_application_process = document.getElementById('ce-digitalnomad-list-application-process');
  if (ce_digitalnomad_list_application_process) {
    gsap.from('#ce-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_timelines_deadlines = document.getElementById('ce-digitalnomad-section-timelines-deadlines');
  if (ce_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#ce-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_fees_costs = document.getElementById('ce-digitalnomad-section-fees-costs');
  if (ce_digitalnomad_section_fees_costs) {
    gsap.fromTo('#ce-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_risks_common_mistakes = document.getElementById('ce-digitalnomad-list-risks-common-mistakes');
  if (ce_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#ce-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('ce-digitalnomad-section-diy-vs-professional-assistance');
  if (ce_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_cear_specific_context = document.getElementById('ce-digitalnomad-section-cear-specific-context');
  if (ce_digitalnomad_section_cear_specific_context) {
    gsap.fromTo('#ce-digitalnomad-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_what_our_clients_say = document.getElementById('ce-digitalnomad-section-what-our-clients-say');
  if (ce_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#ce-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_frequently_asked_questions = document.getElementById('ce-digitalnomad-section-frequently-asked-questions');
  if (ce_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#ce-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_international_support = document.getElementById('ce-digitalnomad-section-international-support');
  if (ce_digitalnomad_section_international_support) {
    gsap.fromTo('#ce-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_our_credentials = document.getElementById('ce-digitalnomad-list-our-credentials');
  if (ce_digitalnomad_list_our_credentials) {
    gsap.from('#ce-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_list_related_services = document.getElementById('ce-digitalnomad-list-related-services');
  if (ce_digitalnomad_list_related_services) {
    gsap.from('#ce-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_youre_in_good_hands = document.getElementById('ce-digitalnomad-section-youre-in-good-hands');
  if (ce_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#ce-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_digitalnomad_section_21 = document.getElementById('ce-digitalnomad-section-21');
  if (ce_digitalnomad_section_21) {
    gsap.fromTo('#ce-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('ce-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (ce_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#ce-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #ce-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_quick_facts = document.getElementById('ce-familyreunion-list-quick-facts');
  if (ce_familyreunion_list_quick_facts) {
    gsap.from('#ce-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_common_challenges_applicants_face = document.getElementById('ce-familyreunion-list-common-challenges-applicants-face');
  if (ce_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#ce-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_how_we_solve_these_challenges = document.getElementById('ce-familyreunion-list-how-we-solve-these-challenges');
  if (ce_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#ce-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_residency_overview = document.getElementById('ce-familyreunion-section-residency-overview');
  if (ce_familyreunion_section_residency_overview) {
    gsap.fromTo('#ce-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_form_who_is_this_residency_for = document.getElementById('ce-familyreunion-form-who-is-this-residency-for');
  if (ce_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#ce-familyreunion-form-who-is-this-residency-for input, #ce-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_required_documents = document.getElementById('ce-familyreunion-list-required-documents');
  if (ce_familyreunion_list_required_documents) {
    gsap.from('#ce-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_application_process = document.getElementById('ce-familyreunion-list-application-process');
  if (ce_familyreunion_list_application_process) {
    gsap.from('#ce-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_timelines_deadlines = document.getElementById('ce-familyreunion-section-timelines-deadlines');
  if (ce_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#ce-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_fees_costs = document.getElementById('ce-familyreunion-section-fees-costs');
  if (ce_familyreunion_section_fees_costs) {
    gsap.fromTo('#ce-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_risks_common_mistakes = document.getElementById('ce-familyreunion-list-risks-common-mistakes');
  if (ce_familyreunion_list_risks_common_mistakes) {
    gsap.from('#ce-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_diy_vs_professional_assistance = document.getElementById('ce-familyreunion-section-diy-vs-professional-assistance');
  if (ce_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_cear_specific_context = document.getElementById('ce-familyreunion-section-cear-specific-context');
  if (ce_familyreunion_section_cear_specific_context) {
    gsap.fromTo('#ce-familyreunion-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_what_our_clients_say = document.getElementById('ce-familyreunion-section-what-our-clients-say');
  if (ce_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#ce-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_frequently_asked_questions = document.getElementById('ce-familyreunion-section-frequently-asked-questions');
  if (ce_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#ce-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_international_support = document.getElementById('ce-familyreunion-section-international-support');
  if (ce_familyreunion_section_international_support) {
    gsap.fromTo('#ce-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_our_credentials = document.getElementById('ce-familyreunion-list-our-credentials');
  if (ce_familyreunion_list_our_credentials) {
    gsap.from('#ce-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_list_related_services = document.getElementById('ce-familyreunion-list-related-services');
  if (ce_familyreunion_list_related_services) {
    gsap.from('#ce-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_youre_in_good_hands = document.getElementById('ce-familyreunion-section-youre-in-good-hands');
  if (ce_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#ce-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_familyreunion_section_21 = document.getElementById('ce-familyreunion-section-21');
  if (ce_familyreunion_section_21) {
    gsap.fromTo('#ce-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('ce-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (ce_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#ce-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #ce-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_quick_facts = document.getElementById('ce-mercosul-list-quick-facts');
  if (ce_mercosul_list_quick_facts) {
    gsap.from('#ce-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_common_challenges_applicants_face = document.getElementById('ce-mercosul-list-common-challenges-applicants-face');
  if (ce_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#ce-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_how_we_solve_these_challenges = document.getElementById('ce-mercosul-list-how-we-solve-these-challenges');
  if (ce_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#ce-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_residency_overview = document.getElementById('ce-mercosul-section-residency-overview');
  if (ce_mercosul_section_residency_overview) {
    gsap.fromTo('#ce-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_form_who_is_this_residency_for = document.getElementById('ce-mercosul-form-who-is-this-residency-for');
  if (ce_mercosul_form_who_is_this_residency_for) {
    gsap.from('#ce-mercosul-form-who-is-this-residency-for input, #ce-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_required_documents = document.getElementById('ce-mercosul-list-required-documents');
  if (ce_mercosul_list_required_documents) {
    gsap.from('#ce-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_application_process = document.getElementById('ce-mercosul-list-application-process');
  if (ce_mercosul_list_application_process) {
    gsap.from('#ce-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_timelines_deadlines = document.getElementById('ce-mercosul-section-timelines-deadlines');
  if (ce_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#ce-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_fees_costs = document.getElementById('ce-mercosul-section-fees-costs');
  if (ce_mercosul_section_fees_costs) {
    gsap.fromTo('#ce-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_risks_common_mistakes = document.getElementById('ce-mercosul-list-risks-common-mistakes');
  if (ce_mercosul_list_risks_common_mistakes) {
    gsap.from('#ce-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_diy_vs_professional_assistance = document.getElementById('ce-mercosul-section-diy-vs-professional-assistance');
  if (ce_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_cear_specific_context = document.getElementById('ce-mercosul-section-cear-specific-context');
  if (ce_mercosul_section_cear_specific_context) {
    gsap.fromTo('#ce-mercosul-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_what_our_clients_say = document.getElementById('ce-mercosul-section-what-our-clients-say');
  if (ce_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#ce-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_frequently_asked_questions = document.getElementById('ce-mercosul-section-frequently-asked-questions');
  if (ce_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#ce-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_international_support = document.getElementById('ce-mercosul-section-international-support');
  if (ce_mercosul_section_international_support) {
    gsap.fromTo('#ce-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_our_credentials = document.getElementById('ce-mercosul-list-our-credentials');
  if (ce_mercosul_list_our_credentials) {
    gsap.from('#ce-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_list_related_services = document.getElementById('ce-mercosul-list-related-services');
  if (ce_mercosul_list_related_services) {
    gsap.from('#ce-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_youre_in_good_hands = document.getElementById('ce-mercosul-section-youre-in-good-hands');
  if (ce_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#ce-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_mercosul_section_21 = document.getElementById('ce-mercosul-section-21');
  if (ce_mercosul_section_21) {
    gsap.fromTo('#ce-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('ce-retiree-form-retire-in-brazil-with-retiree-residency');
  if (ce_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#ce-retiree-form-retire-in-brazil-with-retiree-residency input, #ce-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_quick_facts = document.getElementById('ce-retiree-list-quick-facts');
  if (ce_retiree_list_quick_facts) {
    gsap.from('#ce-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_common_challenges_applicants_face = document.getElementById('ce-retiree-list-common-challenges-applicants-face');
  if (ce_retiree_list_common_challenges_applicants_face) {
    gsap.from('#ce-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_how_we_solve_these_challenges = document.getElementById('ce-retiree-list-how-we-solve-these-challenges');
  if (ce_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#ce-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_residency_overview = document.getElementById('ce-retiree-section-residency-overview');
  if (ce_retiree_section_residency_overview) {
    gsap.fromTo('#ce-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_form_who_is_this_residency_for = document.getElementById('ce-retiree-form-who-is-this-residency-for');
  if (ce_retiree_form_who_is_this_residency_for) {
    gsap.from('#ce-retiree-form-who-is-this-residency-for input, #ce-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_required_documents = document.getElementById('ce-retiree-list-required-documents');
  if (ce_retiree_list_required_documents) {
    gsap.from('#ce-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_application_process = document.getElementById('ce-retiree-list-application-process');
  if (ce_retiree_list_application_process) {
    gsap.from('#ce-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_timelines_deadlines = document.getElementById('ce-retiree-section-timelines-deadlines');
  if (ce_retiree_section_timelines_deadlines) {
    gsap.fromTo('#ce-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_fees_costs = document.getElementById('ce-retiree-section-fees-costs');
  if (ce_retiree_section_fees_costs) {
    gsap.fromTo('#ce-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_risks_common_mistakes = document.getElementById('ce-retiree-list-risks-common-mistakes');
  if (ce_retiree_list_risks_common_mistakes) {
    gsap.from('#ce-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_diy_vs_professional_assistance = document.getElementById('ce-retiree-section-diy-vs-professional-assistance');
  if (ce_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_cear_specific_context = document.getElementById('ce-retiree-section-cear-specific-context');
  if (ce_retiree_section_cear_specific_context) {
    gsap.fromTo('#ce-retiree-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_what_our_clients_say = document.getElementById('ce-retiree-section-what-our-clients-say');
  if (ce_retiree_section_what_our_clients_say) {
    gsap.fromTo('#ce-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_frequently_asked_questions = document.getElementById('ce-retiree-section-frequently-asked-questions');
  if (ce_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#ce-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_international_support = document.getElementById('ce-retiree-section-international-support');
  if (ce_retiree_section_international_support) {
    gsap.fromTo('#ce-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_our_credentials = document.getElementById('ce-retiree-list-our-credentials');
  if (ce_retiree_list_our_credentials) {
    gsap.from('#ce-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_list_related_services = document.getElementById('ce-retiree-list-related-services');
  if (ce_retiree_list_related_services) {
    gsap.from('#ce-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_youre_in_good_hands = document.getElementById('ce-retiree-section-youre-in-good-hands');
  if (ce_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#ce-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_retiree_section_21 = document.getElementById('ce-retiree-section-21');
  if (ce_retiree_section_21) {
    gsap.fromTo('#ce-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('ce-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (ce_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#ce-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #ce-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_quick_facts = document.getElementById('ce-volunteer-list-quick-facts');
  if (ce_volunteer_list_quick_facts) {
    gsap.from('#ce-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_common_challenges_applicants_face = document.getElementById('ce-volunteer-list-common-challenges-applicants-face');
  if (ce_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#ce-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_how_we_solve_these_challenges = document.getElementById('ce-volunteer-list-how-we-solve-these-challenges');
  if (ce_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#ce-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_residency_overview = document.getElementById('ce-volunteer-section-residency-overview');
  if (ce_volunteer_section_residency_overview) {
    gsap.fromTo('#ce-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_form_who_is_this_residency_for = document.getElementById('ce-volunteer-form-who-is-this-residency-for');
  if (ce_volunteer_form_who_is_this_residency_for) {
    gsap.from('#ce-volunteer-form-who-is-this-residency-for input, #ce-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_required_documents = document.getElementById('ce-volunteer-list-required-documents');
  if (ce_volunteer_list_required_documents) {
    gsap.from('#ce-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_application_process = document.getElementById('ce-volunteer-list-application-process');
  if (ce_volunteer_list_application_process) {
    gsap.from('#ce-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_timelines_deadlines = document.getElementById('ce-volunteer-section-timelines-deadlines');
  if (ce_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#ce-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_fees_costs = document.getElementById('ce-volunteer-section-fees-costs');
  if (ce_volunteer_section_fees_costs) {
    gsap.fromTo('#ce-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_risks_common_mistakes = document.getElementById('ce-volunteer-list-risks-common-mistakes');
  if (ce_volunteer_list_risks_common_mistakes) {
    gsap.from('#ce-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_diy_vs_professional_assistance = document.getElementById('ce-volunteer-section-diy-vs-professional-assistance');
  if (ce_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_cear_specific_context = document.getElementById('ce-volunteer-section-cear-specific-context');
  if (ce_volunteer_section_cear_specific_context) {
    gsap.fromTo('#ce-volunteer-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_what_our_clients_say = document.getElementById('ce-volunteer-section-what-our-clients-say');
  if (ce_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#ce-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_frequently_asked_questions = document.getElementById('ce-volunteer-section-frequently-asked-questions');
  if (ce_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#ce-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_international_support = document.getElementById('ce-volunteer-section-international-support');
  if (ce_volunteer_section_international_support) {
    gsap.fromTo('#ce-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_our_credentials = document.getElementById('ce-volunteer-list-our-credentials');
  if (ce_volunteer_list_our_credentials) {
    gsap.from('#ce-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_list_related_services = document.getElementById('ce-volunteer-list-related-services');
  if (ce_volunteer_list_related_services) {
    gsap.from('#ce-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_youre_in_good_hands = document.getElementById('ce-volunteer-section-youre-in-good-hands');
  if (ce_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#ce-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_volunteer_section_21 = document.getElementById('ce-volunteer-section-21');
  if (ce_volunteer_section_21) {
    gsap.fromTo('#ce-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('ce-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (ce_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#ce-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #ce-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_quick_facts = document.getElementById('ce-skilledworker-list-quick-facts');
  if (ce_skilledworker_list_quick_facts) {
    gsap.from('#ce-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_common_challenges_applicants_face = document.getElementById('ce-skilledworker-list-common-challenges-applicants-face');
  if (ce_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#ce-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_how_we_solve_these_challenges = document.getElementById('ce-skilledworker-list-how-we-solve-these-challenges');
  if (ce_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#ce-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_residency_overview = document.getElementById('ce-skilledworker-section-residency-overview');
  if (ce_skilledworker_section_residency_overview) {
    gsap.fromTo('#ce-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_form_who_is_this_residency_for = document.getElementById('ce-skilledworker-form-who-is-this-residency-for');
  if (ce_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#ce-skilledworker-form-who-is-this-residency-for input, #ce-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_required_documents = document.getElementById('ce-skilledworker-list-required-documents');
  if (ce_skilledworker_list_required_documents) {
    gsap.from('#ce-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_application_process = document.getElementById('ce-skilledworker-list-application-process');
  if (ce_skilledworker_list_application_process) {
    gsap.from('#ce-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_timelines_deadlines = document.getElementById('ce-skilledworker-section-timelines-deadlines');
  if (ce_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#ce-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_fees_costs = document.getElementById('ce-skilledworker-section-fees-costs');
  if (ce_skilledworker_section_fees_costs) {
    gsap.fromTo('#ce-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_risks_common_mistakes = document.getElementById('ce-skilledworker-list-risks-common-mistakes');
  if (ce_skilledworker_list_risks_common_mistakes) {
    gsap.from('#ce-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_diy_vs_professional_assistance = document.getElementById('ce-skilledworker-section-diy-vs-professional-assistance');
  if (ce_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_cear_specific_context = document.getElementById('ce-skilledworker-section-cear-specific-context');
  if (ce_skilledworker_section_cear_specific_context) {
    gsap.fromTo('#ce-skilledworker-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_what_our_clients_say = document.getElementById('ce-skilledworker-section-what-our-clients-say');
  if (ce_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#ce-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_frequently_asked_questions = document.getElementById('ce-skilledworker-section-frequently-asked-questions');
  if (ce_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#ce-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_international_support = document.getElementById('ce-skilledworker-section-international-support');
  if (ce_skilledworker_section_international_support) {
    gsap.fromTo('#ce-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_our_credentials = document.getElementById('ce-skilledworker-list-our-credentials');
  if (ce_skilledworker_list_our_credentials) {
    gsap.from('#ce-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_list_related_services = document.getElementById('ce-skilledworker-list-related-services');
  if (ce_skilledworker_list_related_services) {
    gsap.from('#ce-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_youre_in_good_hands = document.getElementById('ce-skilledworker-section-youre-in-good-hands');
  if (ce_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#ce-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_skilledworker_section_21 = document.getElementById('ce-skilledworker-section-21');
  if (ce_skilledworker_section_21) {
    gsap.fromTo('#ce-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('ce-religious-form-religious-residency-in-brazil-for-missions');
  if (ce_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#ce-religious-form-religious-residency-in-brazil-for-missions input, #ce-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_quick_facts = document.getElementById('ce-religious-list-quick-facts');
  if (ce_religious_list_quick_facts) {
    gsap.from('#ce-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_common_challenges_applicants_face = document.getElementById('ce-religious-list-common-challenges-applicants-face');
  if (ce_religious_list_common_challenges_applicants_face) {
    gsap.from('#ce-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_how_we_solve_these_challenges = document.getElementById('ce-religious-list-how-we-solve-these-challenges');
  if (ce_religious_list_how_we_solve_these_challenges) {
    gsap.from('#ce-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_residency_overview = document.getElementById('ce-religious-section-residency-overview');
  if (ce_religious_section_residency_overview) {
    gsap.fromTo('#ce-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_form_who_is_this_residency_for = document.getElementById('ce-religious-form-who-is-this-residency-for');
  if (ce_religious_form_who_is_this_residency_for) {
    gsap.from('#ce-religious-form-who-is-this-residency-for input, #ce-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_required_documents = document.getElementById('ce-religious-list-required-documents');
  if (ce_religious_list_required_documents) {
    gsap.from('#ce-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_application_process = document.getElementById('ce-religious-list-application-process');
  if (ce_religious_list_application_process) {
    gsap.from('#ce-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_timelines_deadlines = document.getElementById('ce-religious-section-timelines-deadlines');
  if (ce_religious_section_timelines_deadlines) {
    gsap.fromTo('#ce-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_fees_costs = document.getElementById('ce-religious-section-fees-costs');
  if (ce_religious_section_fees_costs) {
    gsap.fromTo('#ce-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_risks_common_mistakes = document.getElementById('ce-religious-list-risks-common-mistakes');
  if (ce_religious_list_risks_common_mistakes) {
    gsap.from('#ce-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_diy_vs_professional_assistance = document.getElementById('ce-religious-section-diy-vs-professional-assistance');
  if (ce_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_cear_specific_context = document.getElementById('ce-religious-section-cear-specific-context');
  if (ce_religious_section_cear_specific_context) {
    gsap.fromTo('#ce-religious-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_what_our_clients_say = document.getElementById('ce-religious-section-what-our-clients-say');
  if (ce_religious_section_what_our_clients_say) {
    gsap.fromTo('#ce-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_frequently_asked_questions = document.getElementById('ce-religious-section-frequently-asked-questions');
  if (ce_religious_section_frequently_asked_questions) {
    gsap.fromTo('#ce-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_international_support = document.getElementById('ce-religious-section-international-support');
  if (ce_religious_section_international_support) {
    gsap.fromTo('#ce-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_our_credentials = document.getElementById('ce-religious-list-our-credentials');
  if (ce_religious_list_our_credentials) {
    gsap.from('#ce-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_list_related_services = document.getElementById('ce-religious-list-related-services');
  if (ce_religious_list_related_services) {
    gsap.from('#ce-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_youre_in_good_hands = document.getElementById('ce-religious-section-youre-in-good-hands');
  if (ce_religious_section_youre_in_good_hands) {
    gsap.fromTo('#ce-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_religious_section_21 = document.getElementById('ce-religious-section-21');
  if (ce_religious_section_21) {
    gsap.fromTo('#ce-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('ce-investor-form-gain-residency-in-brazil-through-investment');
  if (ce_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#ce-investor-form-gain-residency-in-brazil-through-investment input, #ce-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_quick_facts = document.getElementById('ce-investor-list-quick-facts');
  if (ce_investor_list_quick_facts) {
    gsap.from('#ce-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_common_challenges_applicants_face = document.getElementById('ce-investor-list-common-challenges-applicants-face');
  if (ce_investor_list_common_challenges_applicants_face) {
    gsap.from('#ce-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_how_we_solve_these_challenges = document.getElementById('ce-investor-list-how-we-solve-these-challenges');
  if (ce_investor_list_how_we_solve_these_challenges) {
    gsap.from('#ce-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_residency_overview = document.getElementById('ce-investor-section-residency-overview');
  if (ce_investor_section_residency_overview) {
    gsap.fromTo('#ce-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_form_who_is_this_residency_for = document.getElementById('ce-investor-form-who-is-this-residency-for');
  if (ce_investor_form_who_is_this_residency_for) {
    gsap.from('#ce-investor-form-who-is-this-residency-for input, #ce-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_required_documents = document.getElementById('ce-investor-list-required-documents');
  if (ce_investor_list_required_documents) {
    gsap.from('#ce-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_application_process = document.getElementById('ce-investor-list-application-process');
  if (ce_investor_list_application_process) {
    gsap.from('#ce-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_timelines_deadlines = document.getElementById('ce-investor-section-timelines-deadlines');
  if (ce_investor_section_timelines_deadlines) {
    gsap.fromTo('#ce-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_fees_costs = document.getElementById('ce-investor-section-fees-costs');
  if (ce_investor_section_fees_costs) {
    gsap.fromTo('#ce-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_risks_common_mistakes = document.getElementById('ce-investor-list-risks-common-mistakes');
  if (ce_investor_list_risks_common_mistakes) {
    gsap.from('#ce-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_diy_vs_professional_assistance = document.getElementById('ce-investor-section-diy-vs-professional-assistance');
  if (ce_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_cear_specific_context = document.getElementById('ce-investor-section-cear-specific-context');
  if (ce_investor_section_cear_specific_context) {
    gsap.fromTo('#ce-investor-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_what_our_clients_say = document.getElementById('ce-investor-section-what-our-clients-say');
  if (ce_investor_section_what_our_clients_say) {
    gsap.fromTo('#ce-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_frequently_asked_questions = document.getElementById('ce-investor-section-frequently-asked-questions');
  if (ce_investor_section_frequently_asked_questions) {
    gsap.fromTo('#ce-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_international_support = document.getElementById('ce-investor-section-international-support');
  if (ce_investor_section_international_support) {
    gsap.fromTo('#ce-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_our_credentials = document.getElementById('ce-investor-list-our-credentials');
  if (ce_investor_list_our_credentials) {
    gsap.from('#ce-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_list_related_services = document.getElementById('ce-investor-list-related-services');
  if (ce_investor_list_related_services) {
    gsap.from('#ce-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_youre_in_good_hands = document.getElementById('ce-investor-section-youre-in-good-hands');
  if (ce_investor_section_youre_in_good_hands) {
    gsap.fromTo('#ce-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_investor_section_21 = document.getElementById('ce-investor-section-21');
  if (ce_investor_section_21) {
    gsap.fromTo('#ce-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('ce-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (ce_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#ce-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #ce-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_quick_facts = document.getElementById('ce-healthtreatment-list-quick-facts');
  if (ce_healthtreatment_list_quick_facts) {
    gsap.from('#ce-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_common_challenges_applicants_face = document.getElementById('ce-healthtreatment-list-common-challenges-applicants-face');
  if (ce_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#ce-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('ce-healthtreatment-list-how-we-solve-these-challenges');
  if (ce_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#ce-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_residency_overview = document.getElementById('ce-healthtreatment-section-residency-overview');
  if (ce_healthtreatment_section_residency_overview) {
    gsap.fromTo('#ce-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_form_who_is_this_residency_for = document.getElementById('ce-healthtreatment-form-who-is-this-residency-for');
  if (ce_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#ce-healthtreatment-form-who-is-this-residency-for input, #ce-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_required_documents = document.getElementById('ce-healthtreatment-list-required-documents');
  if (ce_healthtreatment_list_required_documents) {
    gsap.from('#ce-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_application_process = document.getElementById('ce-healthtreatment-list-application-process');
  if (ce_healthtreatment_list_application_process) {
    gsap.from('#ce-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_timelines_deadlines = document.getElementById('ce-healthtreatment-section-timelines-deadlines');
  if (ce_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#ce-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_fees_costs = document.getElementById('ce-healthtreatment-section-fees-costs');
  if (ce_healthtreatment_section_fees_costs) {
    gsap.fromTo('#ce-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_risks_common_mistakes = document.getElementById('ce-healthtreatment-list-risks-common-mistakes');
  if (ce_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#ce-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('ce-healthtreatment-section-diy-vs-professional-assistance');
  if (ce_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_cear_specific_context = document.getElementById('ce-healthtreatment-section-cear-specific-context');
  if (ce_healthtreatment_section_cear_specific_context) {
    gsap.fromTo('#ce-healthtreatment-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_what_our_clients_say = document.getElementById('ce-healthtreatment-section-what-our-clients-say');
  if (ce_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#ce-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_frequently_asked_questions = document.getElementById('ce-healthtreatment-section-frequently-asked-questions');
  if (ce_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#ce-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_international_support = document.getElementById('ce-healthtreatment-section-international-support');
  if (ce_healthtreatment_section_international_support) {
    gsap.fromTo('#ce-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_our_credentials = document.getElementById('ce-healthtreatment-list-our-credentials');
  if (ce_healthtreatment_list_our_credentials) {
    gsap.from('#ce-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_list_related_services = document.getElementById('ce-healthtreatment-list-related-services');
  if (ce_healthtreatment_list_related_services) {
    gsap.from('#ce-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_youre_in_good_hands = document.getElementById('ce-healthtreatment-section-youre-in-good-hands');
  if (ce_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#ce-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_healthtreatment_section_21 = document.getElementById('ce-healthtreatment-section-21');
  if (ce_healthtreatment_section_21) {
    gsap.fromTo('#ce-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('ce-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (ce_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#ce-cplp-form-residency-for-cplp-citizens-in-brazil input, #ce-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_quick_facts = document.getElementById('ce-cplp-list-quick-facts');
  if (ce_cplp_list_quick_facts) {
    gsap.from('#ce-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_common_challenges_applicants_face = document.getElementById('ce-cplp-list-common-challenges-applicants-face');
  if (ce_cplp_list_common_challenges_applicants_face) {
    gsap.from('#ce-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_how_we_solve_these_challenges = document.getElementById('ce-cplp-list-how-we-solve-these-challenges');
  if (ce_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#ce-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_residency_overview = document.getElementById('ce-cplp-section-residency-overview');
  if (ce_cplp_section_residency_overview) {
    gsap.fromTo('#ce-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_form_who_is_this_residency_for = document.getElementById('ce-cplp-form-who-is-this-residency-for');
  if (ce_cplp_form_who_is_this_residency_for) {
    gsap.from('#ce-cplp-form-who-is-this-residency-for input, #ce-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_required_documents = document.getElementById('ce-cplp-list-required-documents');
  if (ce_cplp_list_required_documents) {
    gsap.from('#ce-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_application_process = document.getElementById('ce-cplp-list-application-process');
  if (ce_cplp_list_application_process) {
    gsap.from('#ce-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_timelines_deadlines = document.getElementById('ce-cplp-section-timelines-deadlines');
  if (ce_cplp_section_timelines_deadlines) {
    gsap.fromTo('#ce-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_fees_costs = document.getElementById('ce-cplp-section-fees-costs');
  if (ce_cplp_section_fees_costs) {
    gsap.fromTo('#ce-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_risks_common_mistakes = document.getElementById('ce-cplp-list-risks-common-mistakes');
  if (ce_cplp_list_risks_common_mistakes) {
    gsap.from('#ce-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_diy_vs_professional_assistance = document.getElementById('ce-cplp-section-diy-vs-professional-assistance');
  if (ce_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_cear_specific_context = document.getElementById('ce-cplp-section-cear-specific-context');
  if (ce_cplp_section_cear_specific_context) {
    gsap.fromTo('#ce-cplp-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_what_our_clients_say = document.getElementById('ce-cplp-section-what-our-clients-say');
  if (ce_cplp_section_what_our_clients_say) {
    gsap.fromTo('#ce-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_frequently_asked_questions = document.getElementById('ce-cplp-section-frequently-asked-questions');
  if (ce_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#ce-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_international_support = document.getElementById('ce-cplp-section-international-support');
  if (ce_cplp_section_international_support) {
    gsap.fromTo('#ce-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_our_credentials = document.getElementById('ce-cplp-list-our-credentials');
  if (ce_cplp_list_our_credentials) {
    gsap.from('#ce-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_list_related_services = document.getElementById('ce-cplp-list-related-services');
  if (ce_cplp_list_related_services) {
    gsap.from('#ce-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_youre_in_good_hands = document.getElementById('ce-cplp-section-youre-in-good-hands');
  if (ce_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#ce-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_cplp_section_21 = document.getElementById('ce-cplp-section-21');
  if (ce_cplp_section_21) {
    gsap.fromTo('#ce-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('ce-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (ce_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#ce-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #ce-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_quick_facts = document.getElementById('ce-youthexchange-list-quick-facts');
  if (ce_youthexchange_list_quick_facts) {
    gsap.from('#ce-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_common_challenges_applicants_face = document.getElementById('ce-youthexchange-list-common-challenges-applicants-face');
  if (ce_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#ce-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_how_we_solve_these_challenges = document.getElementById('ce-youthexchange-list-how-we-solve-these-challenges');
  if (ce_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ce-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_residency_overview = document.getElementById('ce-youthexchange-section-residency-overview');
  if (ce_youthexchange_section_residency_overview) {
    gsap.fromTo('#ce-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_form_who_is_this_residency_for = document.getElementById('ce-youthexchange-form-who-is-this-residency-for');
  if (ce_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#ce-youthexchange-form-who-is-this-residency-for input, #ce-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_required_documents = document.getElementById('ce-youthexchange-list-required-documents');
  if (ce_youthexchange_list_required_documents) {
    gsap.from('#ce-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_application_process = document.getElementById('ce-youthexchange-list-application-process');
  if (ce_youthexchange_list_application_process) {
    gsap.from('#ce-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_timelines_deadlines = document.getElementById('ce-youthexchange-section-timelines-deadlines');
  if (ce_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#ce-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_fees_costs = document.getElementById('ce-youthexchange-section-fees-costs');
  if (ce_youthexchange_section_fees_costs) {
    gsap.fromTo('#ce-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_risks_common_mistakes = document.getElementById('ce-youthexchange-list-risks-common-mistakes');
  if (ce_youthexchange_list_risks_common_mistakes) {
    gsap.from('#ce-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_diy_vs_professional_assistance = document.getElementById('ce-youthexchange-section-diy-vs-professional-assistance');
  if (ce_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_cear_specific_context = document.getElementById('ce-youthexchange-section-cear-specific-context');
  if (ce_youthexchange_section_cear_specific_context) {
    gsap.fromTo('#ce-youthexchange-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_what_our_clients_say = document.getElementById('ce-youthexchange-section-what-our-clients-say');
  if (ce_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#ce-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_frequently_asked_questions = document.getElementById('ce-youthexchange-section-frequently-asked-questions');
  if (ce_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ce-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_international_support = document.getElementById('ce-youthexchange-section-international-support');
  if (ce_youthexchange_section_international_support) {
    gsap.fromTo('#ce-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_our_credentials = document.getElementById('ce-youthexchange-list-our-credentials');
  if (ce_youthexchange_list_our_credentials) {
    gsap.from('#ce-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_list_related_services = document.getElementById('ce-youthexchange-list-related-services');
  if (ce_youthexchange_list_related_services) {
    gsap.from('#ce-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_youre_in_good_hands = document.getElementById('ce-youthexchange-section-youre-in-good-hands');
  if (ce_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ce-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_youthexchange_section_21 = document.getElementById('ce-youthexchange-section-21');
  if (ce_youthexchange_section_21) {
    gsap.fromTo('#ce-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('ce-work-form-work-and-reside-in-brazil-with-work-residency');
  if (ce_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#ce-work-form-work-and-reside-in-brazil-with-work-residency input, #ce-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_quick_facts = document.getElementById('ce-work-list-quick-facts');
  if (ce_work_list_quick_facts) {
    gsap.from('#ce-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_common_challenges_applicants_face = document.getElementById('ce-work-list-common-challenges-applicants-face');
  if (ce_work_list_common_challenges_applicants_face) {
    gsap.from('#ce-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_how_we_solve_these_challenges = document.getElementById('ce-work-list-how-we-solve-these-challenges');
  if (ce_work_list_how_we_solve_these_challenges) {
    gsap.from('#ce-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_residency_overview = document.getElementById('ce-work-section-residency-overview');
  if (ce_work_section_residency_overview) {
    gsap.fromTo('#ce-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_form_who_is_this_residency_for = document.getElementById('ce-work-form-who-is-this-residency-for');
  if (ce_work_form_who_is_this_residency_for) {
    gsap.from('#ce-work-form-who-is-this-residency-for input, #ce-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_required_documents = document.getElementById('ce-work-list-required-documents');
  if (ce_work_list_required_documents) {
    gsap.from('#ce-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_application_process = document.getElementById('ce-work-list-application-process');
  if (ce_work_list_application_process) {
    gsap.from('#ce-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_timelines_deadlines = document.getElementById('ce-work-section-timelines-deadlines');
  if (ce_work_section_timelines_deadlines) {
    gsap.fromTo('#ce-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_fees_costs = document.getElementById('ce-work-section-fees-costs');
  if (ce_work_section_fees_costs) {
    gsap.fromTo('#ce-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_risks_common_mistakes = document.getElementById('ce-work-list-risks-common-mistakes');
  if (ce_work_list_risks_common_mistakes) {
    gsap.from('#ce-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_diy_vs_professional_assistance = document.getElementById('ce-work-section-diy-vs-professional-assistance');
  if (ce_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_cear_specific_context = document.getElementById('ce-work-section-cear-specific-context');
  if (ce_work_section_cear_specific_context) {
    gsap.fromTo('#ce-work-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_what_our_clients_say = document.getElementById('ce-work-section-what-our-clients-say');
  if (ce_work_section_what_our_clients_say) {
    gsap.fromTo('#ce-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_frequently_asked_questions = document.getElementById('ce-work-section-frequently-asked-questions');
  if (ce_work_section_frequently_asked_questions) {
    gsap.fromTo('#ce-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_international_support = document.getElementById('ce-work-section-international-support');
  if (ce_work_section_international_support) {
    gsap.fromTo('#ce-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_our_credentials = document.getElementById('ce-work-list-our-credentials');
  if (ce_work_list_our_credentials) {
    gsap.from('#ce-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_list_related_services = document.getElementById('ce-work-list-related-services');
  if (ce_work_list_related_services) {
    gsap.from('#ce-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_youre_in_good_hands = document.getElementById('ce-work-section-youre-in-good-hands');
  if (ce_work_section_youre_in_good_hands) {
    gsap.fromTo('#ce-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_work_section_21 = document.getElementById('ce-work-section-21');
  if (ce_work_section_21) {
    gsap.fromTo('#ce-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('ce-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (ce_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#ce-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #ce-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_quick_facts = document.getElementById('ce-startup-list-quick-facts');
  if (ce_startup_list_quick_facts) {
    gsap.from('#ce-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_common_challenges_applicants_face = document.getElementById('ce-startup-list-common-challenges-applicants-face');
  if (ce_startup_list_common_challenges_applicants_face) {
    gsap.from('#ce-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_how_we_solve_these_challenges = document.getElementById('ce-startup-list-how-we-solve-these-challenges');
  if (ce_startup_list_how_we_solve_these_challenges) {
    gsap.from('#ce-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_visa_overview = document.getElementById('ce-startup-section-visa-overview');
  if (ce_startup_section_visa_overview) {
    gsap.fromTo('#ce-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_form_who_is_this_visa_for = document.getElementById('ce-startup-form-who-is-this-visa-for');
  if (ce_startup_form_who_is_this_visa_for) {
    gsap.from('#ce-startup-form-who-is-this-visa-for input, #ce-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_required_documents = document.getElementById('ce-startup-list-required-documents');
  if (ce_startup_list_required_documents) {
    gsap.from('#ce-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_application_process = document.getElementById('ce-startup-list-application-process');
  if (ce_startup_list_application_process) {
    gsap.from('#ce-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_timelines_deadlines = document.getElementById('ce-startup-section-timelines-deadlines');
  if (ce_startup_section_timelines_deadlines) {
    gsap.fromTo('#ce-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_fees_costs = document.getElementById('ce-startup-section-fees-costs');
  if (ce_startup_section_fees_costs) {
    gsap.fromTo('#ce-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_risks_common_mistakes = document.getElementById('ce-startup-list-risks-common-mistakes');
  if (ce_startup_list_risks_common_mistakes) {
    gsap.from('#ce-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_diy_vs_professional_assistance = document.getElementById('ce-startup-section-diy-vs-professional-assistance');
  if (ce_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_cear_specific_context = document.getElementById('ce-startup-section-cear-specific-context');
  if (ce_startup_section_cear_specific_context) {
    gsap.fromTo('#ce-startup-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_what_our_clients_say = document.getElementById('ce-startup-section-what-our-clients-say');
  if (ce_startup_section_what_our_clients_say) {
    gsap.fromTo('#ce-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_frequently_asked_questions = document.getElementById('ce-startup-section-frequently-asked-questions');
  if (ce_startup_section_frequently_asked_questions) {
    gsap.fromTo('#ce-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_international_support = document.getElementById('ce-startup-section-international-support');
  if (ce_startup_section_international_support) {
    gsap.fromTo('#ce-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_our_credentials = document.getElementById('ce-startup-list-our-credentials');
  if (ce_startup_list_our_credentials) {
    gsap.from('#ce-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_list_related_services = document.getElementById('ce-startup-list-related-services');
  if (ce_startup_list_related_services) {
    gsap.from('#ce-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_youre_in_good_hands = document.getElementById('ce-startup-section-youre-in-good-hands');
  if (ce_startup_section_youre_in_good_hands) {
    gsap.fromTo('#ce-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_startup_section_21 = document.getElementById('ce-startup-section-21');
  if (ce_startup_section_21) {
    gsap.fromTo('#ce-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('ce-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (ce_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#ce-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #ce-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_quick_facts = document.getElementById('ce-family-list-quick-facts');
  if (ce_family_list_quick_facts) {
    gsap.from('#ce-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_common_challenges_applicants_face = document.getElementById('ce-family-list-common-challenges-applicants-face');
  if (ce_family_list_common_challenges_applicants_face) {
    gsap.from('#ce-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_how_we_solve_these_challenges = document.getElementById('ce-family-list-how-we-solve-these-challenges');
  if (ce_family_list_how_we_solve_these_challenges) {
    gsap.from('#ce-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_visa_overview = document.getElementById('ce-family-section-visa-overview');
  if (ce_family_section_visa_overview) {
    gsap.fromTo('#ce-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_form_who_is_this_visa_for = document.getElementById('ce-family-form-who-is-this-visa-for');
  if (ce_family_form_who_is_this_visa_for) {
    gsap.from('#ce-family-form-who-is-this-visa-for input, #ce-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_required_documents = document.getElementById('ce-family-list-required-documents');
  if (ce_family_list_required_documents) {
    gsap.from('#ce-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_application_process = document.getElementById('ce-family-list-application-process');
  if (ce_family_list_application_process) {
    gsap.from('#ce-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_timelines_deadlines = document.getElementById('ce-family-section-timelines-deadlines');
  if (ce_family_section_timelines_deadlines) {
    gsap.fromTo('#ce-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_fees_costs = document.getElementById('ce-family-section-fees-costs');
  if (ce_family_section_fees_costs) {
    gsap.fromTo('#ce-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_risks_common_mistakes = document.getElementById('ce-family-list-risks-common-mistakes');
  if (ce_family_list_risks_common_mistakes) {
    gsap.from('#ce-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_diy_vs_professional_assistance = document.getElementById('ce-family-section-diy-vs-professional-assistance');
  if (ce_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_cear_specific_context = document.getElementById('ce-family-section-cear-specific-context');
  if (ce_family_section_cear_specific_context) {
    gsap.fromTo('#ce-family-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_what_our_clients_say = document.getElementById('ce-family-section-what-our-clients-say');
  if (ce_family_section_what_our_clients_say) {
    gsap.fromTo('#ce-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_frequently_asked_questions = document.getElementById('ce-family-section-frequently-asked-questions');
  if (ce_family_section_frequently_asked_questions) {
    gsap.fromTo('#ce-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_international_support = document.getElementById('ce-family-section-international-support');
  if (ce_family_section_international_support) {
    gsap.fromTo('#ce-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_our_credentials = document.getElementById('ce-family-list-our-credentials');
  if (ce_family_list_our_credentials) {
    gsap.from('#ce-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_list_related_services = document.getElementById('ce-family-list-related-services');
  if (ce_family_list_related_services) {
    gsap.from('#ce-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_youre_in_good_hands = document.getElementById('ce-family-section-youre-in-good-hands');
  if (ce_family_section_youre_in_good_hands) {
    gsap.fromTo('#ce-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_family_section_21 = document.getElementById('ce-family-section-21');
  if (ce_family_section_21) {
    gsap.fromTo('#ce-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('ce-sports-form-compete-in-brazil-with-the-sports-visa');
  if (ce_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#ce-sports-form-compete-in-brazil-with-the-sports-visa input, #ce-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_quick_facts = document.getElementById('ce-sports-list-quick-facts');
  if (ce_sports_list_quick_facts) {
    gsap.from('#ce-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_common_challenges_applicants_face = document.getElementById('ce-sports-list-common-challenges-applicants-face');
  if (ce_sports_list_common_challenges_applicants_face) {
    gsap.from('#ce-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_how_we_solve_these_challenges = document.getElementById('ce-sports-list-how-we-solve-these-challenges');
  if (ce_sports_list_how_we_solve_these_challenges) {
    gsap.from('#ce-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_visa_overview = document.getElementById('ce-sports-section-visa-overview');
  if (ce_sports_section_visa_overview) {
    gsap.fromTo('#ce-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_form_who_is_this_visa_for = document.getElementById('ce-sports-form-who-is-this-visa-for');
  if (ce_sports_form_who_is_this_visa_for) {
    gsap.from('#ce-sports-form-who-is-this-visa-for input, #ce-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_required_documents = document.getElementById('ce-sports-list-required-documents');
  if (ce_sports_list_required_documents) {
    gsap.from('#ce-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_application_process = document.getElementById('ce-sports-list-application-process');
  if (ce_sports_list_application_process) {
    gsap.from('#ce-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_timelines_deadlines = document.getElementById('ce-sports-section-timelines-deadlines');
  if (ce_sports_section_timelines_deadlines) {
    gsap.fromTo('#ce-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_fees_costs = document.getElementById('ce-sports-section-fees-costs');
  if (ce_sports_section_fees_costs) {
    gsap.fromTo('#ce-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_risks_common_mistakes = document.getElementById('ce-sports-list-risks-common-mistakes');
  if (ce_sports_list_risks_common_mistakes) {
    gsap.from('#ce-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_diy_vs_professional_assistance = document.getElementById('ce-sports-section-diy-vs-professional-assistance');
  if (ce_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_cear_specific_context = document.getElementById('ce-sports-section-cear-specific-context');
  if (ce_sports_section_cear_specific_context) {
    gsap.fromTo('#ce-sports-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_what_our_clients_say = document.getElementById('ce-sports-section-what-our-clients-say');
  if (ce_sports_section_what_our_clients_say) {
    gsap.fromTo('#ce-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_frequently_asked_questions = document.getElementById('ce-sports-section-frequently-asked-questions');
  if (ce_sports_section_frequently_asked_questions) {
    gsap.fromTo('#ce-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_international_support = document.getElementById('ce-sports-section-international-support');
  if (ce_sports_section_international_support) {
    gsap.fromTo('#ce-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_our_credentials = document.getElementById('ce-sports-list-our-credentials');
  if (ce_sports_list_our_credentials) {
    gsap.from('#ce-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_list_related_services = document.getElementById('ce-sports-list-related-services');
  if (ce_sports_list_related_services) {
    gsap.from('#ce-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_youre_in_good_hands = document.getElementById('ce-sports-section-youre-in-good-hands');
  if (ce_sports_section_youre_in_good_hands) {
    gsap.fromTo('#ce-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_sports_section_21 = document.getElementById('ce-sports-section-21');
  if (ce_sports_section_21) {
    gsap.fromTo('#ce-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('ce-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (ce_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#ce-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #ce-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_quick_facts = document.getElementById('ce-medical-list-quick-facts');
  if (ce_medical_list_quick_facts) {
    gsap.from('#ce-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_common_challenges_applicants_face = document.getElementById('ce-medical-list-common-challenges-applicants-face');
  if (ce_medical_list_common_challenges_applicants_face) {
    gsap.from('#ce-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_how_we_solve_these_challenges = document.getElementById('ce-medical-list-how-we-solve-these-challenges');
  if (ce_medical_list_how_we_solve_these_challenges) {
    gsap.from('#ce-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_visa_overview = document.getElementById('ce-medical-section-visa-overview');
  if (ce_medical_section_visa_overview) {
    gsap.fromTo('#ce-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_form_who_is_this_visa_for = document.getElementById('ce-medical-form-who-is-this-visa-for');
  if (ce_medical_form_who_is_this_visa_for) {
    gsap.from('#ce-medical-form-who-is-this-visa-for input, #ce-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_required_documents = document.getElementById('ce-medical-list-required-documents');
  if (ce_medical_list_required_documents) {
    gsap.from('#ce-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_application_process = document.getElementById('ce-medical-list-application-process');
  if (ce_medical_list_application_process) {
    gsap.from('#ce-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_timelines_deadlines = document.getElementById('ce-medical-section-timelines-deadlines');
  if (ce_medical_section_timelines_deadlines) {
    gsap.fromTo('#ce-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_fees_costs = document.getElementById('ce-medical-section-fees-costs');
  if (ce_medical_section_fees_costs) {
    gsap.fromTo('#ce-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_risks_common_mistakes = document.getElementById('ce-medical-list-risks-common-mistakes');
  if (ce_medical_list_risks_common_mistakes) {
    gsap.from('#ce-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_diy_vs_professional_assistance = document.getElementById('ce-medical-section-diy-vs-professional-assistance');
  if (ce_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_cear_specific_context = document.getElementById('ce-medical-section-cear-specific-context');
  if (ce_medical_section_cear_specific_context) {
    gsap.fromTo('#ce-medical-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_what_our_clients_say = document.getElementById('ce-medical-section-what-our-clients-say');
  if (ce_medical_section_what_our_clients_say) {
    gsap.fromTo('#ce-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_frequently_asked_questions = document.getElementById('ce-medical-section-frequently-asked-questions');
  if (ce_medical_section_frequently_asked_questions) {
    gsap.fromTo('#ce-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_international_support = document.getElementById('ce-medical-section-international-support');
  if (ce_medical_section_international_support) {
    gsap.fromTo('#ce-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_our_credentials = document.getElementById('ce-medical-list-our-credentials');
  if (ce_medical_list_our_credentials) {
    gsap.from('#ce-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_list_related_services = document.getElementById('ce-medical-list-related-services');
  if (ce_medical_list_related_services) {
    gsap.from('#ce-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_youre_in_good_hands = document.getElementById('ce-medical-section-youre-in-good-hands');
  if (ce_medical_section_youre_in_good_hands) {
    gsap.fromTo('#ce-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_medical_section_21 = document.getElementById('ce-medical-section-21');
  if (ce_medical_section_21) {
    gsap.fromTo('#ce-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('ce-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (ce_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#ce-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #ce-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_quick_facts = document.getElementById('ce-tourist-list-quick-facts');
  if (ce_tourist_list_quick_facts) {
    gsap.from('#ce-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_common_challenges_applicants_face = document.getElementById('ce-tourist-list-common-challenges-applicants-face');
  if (ce_tourist_list_common_challenges_applicants_face) {
    gsap.from('#ce-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_how_we_solve_these_challenges = document.getElementById('ce-tourist-list-how-we-solve-these-challenges');
  if (ce_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#ce-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_visa_overview = document.getElementById('ce-tourist-section-visa-overview');
  if (ce_tourist_section_visa_overview) {
    gsap.fromTo('#ce-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_form_who_is_this_visa_for = document.getElementById('ce-tourist-form-who-is-this-visa-for');
  if (ce_tourist_form_who_is_this_visa_for) {
    gsap.from('#ce-tourist-form-who-is-this-visa-for input, #ce-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_required_documents = document.getElementById('ce-tourist-list-required-documents');
  if (ce_tourist_list_required_documents) {
    gsap.from('#ce-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_application_process = document.getElementById('ce-tourist-list-application-process');
  if (ce_tourist_list_application_process) {
    gsap.from('#ce-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_timelines_deadlines = document.getElementById('ce-tourist-section-timelines-deadlines');
  if (ce_tourist_section_timelines_deadlines) {
    gsap.fromTo('#ce-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_fees_costs = document.getElementById('ce-tourist-section-fees-costs');
  if (ce_tourist_section_fees_costs) {
    gsap.fromTo('#ce-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_risks_common_mistakes = document.getElementById('ce-tourist-list-risks-common-mistakes');
  if (ce_tourist_list_risks_common_mistakes) {
    gsap.from('#ce-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_diy_vs_professional_assistance = document.getElementById('ce-tourist-section-diy-vs-professional-assistance');
  if (ce_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_cear_specific_context = document.getElementById('ce-tourist-section-cear-specific-context');
  if (ce_tourist_section_cear_specific_context) {
    gsap.fromTo('#ce-tourist-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_what_our_clients_say = document.getElementById('ce-tourist-section-what-our-clients-say');
  if (ce_tourist_section_what_our_clients_say) {
    gsap.fromTo('#ce-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_frequently_asked_questions = document.getElementById('ce-tourist-section-frequently-asked-questions');
  if (ce_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#ce-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_international_support = document.getElementById('ce-tourist-section-international-support');
  if (ce_tourist_section_international_support) {
    gsap.fromTo('#ce-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_our_credentials = document.getElementById('ce-tourist-list-our-credentials');
  if (ce_tourist_list_our_credentials) {
    gsap.from('#ce-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_list_related_services = document.getElementById('ce-tourist-list-related-services');
  if (ce_tourist_list_related_services) {
    gsap.from('#ce-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_youre_in_good_hands = document.getElementById('ce-tourist-section-youre-in-good-hands');
  if (ce_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#ce-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_tourist_section_21 = document.getElementById('ce-tourist-section-21');
  if (ce_tourist_section_21) {
    gsap.fromTo('#ce-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('ce-transit-form-transit-through-brazil-with-the-transit-visa');
  if (ce_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#ce-transit-form-transit-through-brazil-with-the-transit-visa input, #ce-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_quick_facts = document.getElementById('ce-transit-list-quick-facts');
  if (ce_transit_list_quick_facts) {
    gsap.from('#ce-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_common_challenges_applicants_face = document.getElementById('ce-transit-list-common-challenges-applicants-face');
  if (ce_transit_list_common_challenges_applicants_face) {
    gsap.from('#ce-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_how_we_solve_these_challenges = document.getElementById('ce-transit-list-how-we-solve-these-challenges');
  if (ce_transit_list_how_we_solve_these_challenges) {
    gsap.from('#ce-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_visa_overview = document.getElementById('ce-transit-section-visa-overview');
  if (ce_transit_section_visa_overview) {
    gsap.fromTo('#ce-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_form_who_is_this_visa_for = document.getElementById('ce-transit-form-who-is-this-visa-for');
  if (ce_transit_form_who_is_this_visa_for) {
    gsap.from('#ce-transit-form-who-is-this-visa-for input, #ce-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_required_documents = document.getElementById('ce-transit-list-required-documents');
  if (ce_transit_list_required_documents) {
    gsap.from('#ce-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_application_process = document.getElementById('ce-transit-list-application-process');
  if (ce_transit_list_application_process) {
    gsap.from('#ce-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_timelines_deadlines = document.getElementById('ce-transit-section-timelines-deadlines');
  if (ce_transit_section_timelines_deadlines) {
    gsap.fromTo('#ce-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_fees_costs = document.getElementById('ce-transit-section-fees-costs');
  if (ce_transit_section_fees_costs) {
    gsap.fromTo('#ce-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_risks_common_mistakes = document.getElementById('ce-transit-list-risks-common-mistakes');
  if (ce_transit_list_risks_common_mistakes) {
    gsap.from('#ce-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_diy_vs_professional_assistance = document.getElementById('ce-transit-section-diy-vs-professional-assistance');
  if (ce_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_cear_specific_context = document.getElementById('ce-transit-section-cear-specific-context');
  if (ce_transit_section_cear_specific_context) {
    gsap.fromTo('#ce-transit-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_what_our_clients_say = document.getElementById('ce-transit-section-what-our-clients-say');
  if (ce_transit_section_what_our_clients_say) {
    gsap.fromTo('#ce-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_frequently_asked_questions = document.getElementById('ce-transit-section-frequently-asked-questions');
  if (ce_transit_section_frequently_asked_questions) {
    gsap.fromTo('#ce-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_international_support = document.getElementById('ce-transit-section-international-support');
  if (ce_transit_section_international_support) {
    gsap.fromTo('#ce-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_our_credentials = document.getElementById('ce-transit-list-our-credentials');
  if (ce_transit_list_our_credentials) {
    gsap.from('#ce-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_list_related_services = document.getElementById('ce-transit-list-related-services');
  if (ce_transit_list_related_services) {
    gsap.from('#ce-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_youre_in_good_hands = document.getElementById('ce-transit-section-youre-in-good-hands');
  if (ce_transit_section_youre_in_good_hands) {
    gsap.fromTo('#ce-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_transit_section_21 = document.getElementById('ce-transit-section-21');
  if (ce_transit_section_21) {
    gsap.fromTo('#ce-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_form_study_in_brazil_with_the_student_visa = document.getElementById('ce-student-form-study-in-brazil-with-the-student-visa');
  if (ce_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#ce-student-form-study-in-brazil-with-the-student-visa input, #ce-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_quick_facts = document.getElementById('ce-student-list-quick-facts');
  if (ce_student_list_quick_facts) {
    gsap.from('#ce-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_common_challenges_applicants_face = document.getElementById('ce-student-list-common-challenges-applicants-face');
  if (ce_student_list_common_challenges_applicants_face) {
    gsap.from('#ce-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_how_we_solve_these_challenges = document.getElementById('ce-student-list-how-we-solve-these-challenges');
  if (ce_student_list_how_we_solve_these_challenges) {
    gsap.from('#ce-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_visa_overview = document.getElementById('ce-student-section-visa-overview');
  if (ce_student_section_visa_overview) {
    gsap.fromTo('#ce-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_form_who_is_this_visa_for = document.getElementById('ce-student-form-who-is-this-visa-for');
  if (ce_student_form_who_is_this_visa_for) {
    gsap.from('#ce-student-form-who-is-this-visa-for input, #ce-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_required_documents = document.getElementById('ce-student-list-required-documents');
  if (ce_student_list_required_documents) {
    gsap.from('#ce-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_application_process = document.getElementById('ce-student-list-application-process');
  if (ce_student_list_application_process) {
    gsap.from('#ce-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_timelines_deadlines = document.getElementById('ce-student-section-timelines-deadlines');
  if (ce_student_section_timelines_deadlines) {
    gsap.fromTo('#ce-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_fees_costs = document.getElementById('ce-student-section-fees-costs');
  if (ce_student_section_fees_costs) {
    gsap.fromTo('#ce-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_risks_common_mistakes = document.getElementById('ce-student-list-risks-common-mistakes');
  if (ce_student_list_risks_common_mistakes) {
    gsap.from('#ce-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_diy_vs_professional_assistance = document.getElementById('ce-student-section-diy-vs-professional-assistance');
  if (ce_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_cear_specific_context = document.getElementById('ce-student-section-cear-specific-context');
  if (ce_student_section_cear_specific_context) {
    gsap.fromTo('#ce-student-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_what_our_clients_say = document.getElementById('ce-student-section-what-our-clients-say');
  if (ce_student_section_what_our_clients_say) {
    gsap.fromTo('#ce-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_frequently_asked_questions = document.getElementById('ce-student-section-frequently-asked-questions');
  if (ce_student_section_frequently_asked_questions) {
    gsap.fromTo('#ce-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_international_support = document.getElementById('ce-student-section-international-support');
  if (ce_student_section_international_support) {
    gsap.fromTo('#ce-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_our_credentials = document.getElementById('ce-student-list-our-credentials');
  if (ce_student_list_our_credentials) {
    gsap.from('#ce-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_list_related_services = document.getElementById('ce-student-list-related-services');
  if (ce_student_list_related_services) {
    gsap.from('#ce-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_youre_in_good_hands = document.getElementById('ce-student-section-youre-in-good-hands');
  if (ce_student_section_youre_in_good_hands) {
    gsap.fromTo('#ce-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_student_section_21 = document.getElementById('ce-student-section-21');
  if (ce_student_section_21) {
    gsap.fromTo('#ce-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('ce-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (ce_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#ce-business-form-conduct-business-in-brazil-with-the-business-visa input, #ce-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_quick_facts = document.getElementById('ce-business-list-quick-facts');
  if (ce_business_list_quick_facts) {
    gsap.from('#ce-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_common_challenges_applicants_face = document.getElementById('ce-business-list-common-challenges-applicants-face');
  if (ce_business_list_common_challenges_applicants_face) {
    gsap.from('#ce-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_how_we_solve_these_challenges = document.getElementById('ce-business-list-how-we-solve-these-challenges');
  if (ce_business_list_how_we_solve_these_challenges) {
    gsap.from('#ce-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_visa_overview = document.getElementById('ce-business-section-visa-overview');
  if (ce_business_section_visa_overview) {
    gsap.fromTo('#ce-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_form_who_is_this_visa_for = document.getElementById('ce-business-form-who-is-this-visa-for');
  if (ce_business_form_who_is_this_visa_for) {
    gsap.from('#ce-business-form-who-is-this-visa-for input, #ce-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_required_documents = document.getElementById('ce-business-list-required-documents');
  if (ce_business_list_required_documents) {
    gsap.from('#ce-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_application_process = document.getElementById('ce-business-list-application-process');
  if (ce_business_list_application_process) {
    gsap.from('#ce-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_timelines_deadlines = document.getElementById('ce-business-section-timelines-deadlines');
  if (ce_business_section_timelines_deadlines) {
    gsap.fromTo('#ce-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_fees_costs = document.getElementById('ce-business-section-fees-costs');
  if (ce_business_section_fees_costs) {
    gsap.fromTo('#ce-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_risks_common_mistakes = document.getElementById('ce-business-list-risks-common-mistakes');
  if (ce_business_list_risks_common_mistakes) {
    gsap.from('#ce-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_diy_vs_professional_assistance = document.getElementById('ce-business-section-diy-vs-professional-assistance');
  if (ce_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_cear_specific_context = document.getElementById('ce-business-section-cear-specific-context');
  if (ce_business_section_cear_specific_context) {
    gsap.fromTo('#ce-business-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_what_our_clients_say = document.getElementById('ce-business-section-what-our-clients-say');
  if (ce_business_section_what_our_clients_say) {
    gsap.fromTo('#ce-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_frequently_asked_questions = document.getElementById('ce-business-section-frequently-asked-questions');
  if (ce_business_section_frequently_asked_questions) {
    gsap.fromTo('#ce-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_international_support = document.getElementById('ce-business-section-international-support');
  if (ce_business_section_international_support) {
    gsap.fromTo('#ce-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_our_credentials = document.getElementById('ce-business-list-our-credentials');
  if (ce_business_list_our_credentials) {
    gsap.from('#ce-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_list_related_services = document.getElementById('ce-business-list-related-services');
  if (ce_business_list_related_services) {
    gsap.from('#ce-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_youre_in_good_hands = document.getElementById('ce-business-section-youre-in-good-hands');
  if (ce_business_section_youre_in_good_hands) {
    gsap.fromTo('#ce-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_business_section_21 = document.getElementById('ce-business-section-21');
  if (ce_business_section_21) {
    gsap.fromTo('#ce-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('ce-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (ce_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#ce-research-form-conduct-research-in-brazil-with-the-research-visa input, #ce-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_quick_facts = document.getElementById('ce-research-list-quick-facts');
  if (ce_research_list_quick_facts) {
    gsap.from('#ce-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_common_challenges_applicants_face = document.getElementById('ce-research-list-common-challenges-applicants-face');
  if (ce_research_list_common_challenges_applicants_face) {
    gsap.from('#ce-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_how_we_solve_these_challenges = document.getElementById('ce-research-list-how-we-solve-these-challenges');
  if (ce_research_list_how_we_solve_these_challenges) {
    gsap.from('#ce-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_visa_overview = document.getElementById('ce-research-section-visa-overview');
  if (ce_research_section_visa_overview) {
    gsap.fromTo('#ce-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_form_who_is_this_visa_for = document.getElementById('ce-research-form-who-is-this-visa-for');
  if (ce_research_form_who_is_this_visa_for) {
    gsap.from('#ce-research-form-who-is-this-visa-for input, #ce-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_required_documents = document.getElementById('ce-research-list-required-documents');
  if (ce_research_list_required_documents) {
    gsap.from('#ce-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_application_process = document.getElementById('ce-research-list-application-process');
  if (ce_research_list_application_process) {
    gsap.from('#ce-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_timelines_deadlines = document.getElementById('ce-research-section-timelines-deadlines');
  if (ce_research_section_timelines_deadlines) {
    gsap.fromTo('#ce-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_fees_costs = document.getElementById('ce-research-section-fees-costs');
  if (ce_research_section_fees_costs) {
    gsap.fromTo('#ce-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_risks_common_mistakes = document.getElementById('ce-research-list-risks-common-mistakes');
  if (ce_research_list_risks_common_mistakes) {
    gsap.from('#ce-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_diy_vs_professional_assistance = document.getElementById('ce-research-section-diy-vs-professional-assistance');
  if (ce_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_cear_specific_context = document.getElementById('ce-research-section-cear-specific-context');
  if (ce_research_section_cear_specific_context) {
    gsap.fromTo('#ce-research-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_what_our_clients_say = document.getElementById('ce-research-section-what-our-clients-say');
  if (ce_research_section_what_our_clients_say) {
    gsap.fromTo('#ce-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_frequently_asked_questions = document.getElementById('ce-research-section-frequently-asked-questions');
  if (ce_research_section_frequently_asked_questions) {
    gsap.fromTo('#ce-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_international_support = document.getElementById('ce-research-section-international-support');
  if (ce_research_section_international_support) {
    gsap.fromTo('#ce-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_our_credentials = document.getElementById('ce-research-list-our-credentials');
  if (ce_research_list_our_credentials) {
    gsap.from('#ce-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_list_related_services = document.getElementById('ce-research-list-related-services');
  if (ce_research_list_related_services) {
    gsap.from('#ce-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_youre_in_good_hands = document.getElementById('ce-research-section-youre-in-good-hands');
  if (ce_research_section_youre_in_good_hands) {
    gsap.fromTo('#ce-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_research_section_21 = document.getElementById('ce-research-section-21');
  if (ce_research_section_21) {
    gsap.fromTo('#ce-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('ce-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (ce_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#ce-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #ce-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_quick_facts = document.getElementById('ce-diplomatic-list-quick-facts');
  if (ce_diplomatic_list_quick_facts) {
    gsap.from('#ce-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_common_challenges_applicants_face = document.getElementById('ce-diplomatic-list-common-challenges-applicants-face');
  if (ce_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#ce-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_how_we_solve_these_challenges = document.getElementById('ce-diplomatic-list-how-we-solve-these-challenges');
  if (ce_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#ce-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_visa_overview = document.getElementById('ce-diplomatic-section-visa-overview');
  if (ce_diplomatic_section_visa_overview) {
    gsap.fromTo('#ce-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_form_who_is_this_visa_for = document.getElementById('ce-diplomatic-form-who-is-this-visa-for');
  if (ce_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#ce-diplomatic-form-who-is-this-visa-for input, #ce-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_required_documents = document.getElementById('ce-diplomatic-list-required-documents');
  if (ce_diplomatic_list_required_documents) {
    gsap.from('#ce-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_application_process = document.getElementById('ce-diplomatic-list-application-process');
  if (ce_diplomatic_list_application_process) {
    gsap.from('#ce-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_timelines_deadlines = document.getElementById('ce-diplomatic-section-timelines-deadlines');
  if (ce_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#ce-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_fees_costs = document.getElementById('ce-diplomatic-section-fees-costs');
  if (ce_diplomatic_section_fees_costs) {
    gsap.fromTo('#ce-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_risks_common_mistakes = document.getElementById('ce-diplomatic-list-risks-common-mistakes');
  if (ce_diplomatic_list_risks_common_mistakes) {
    gsap.from('#ce-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_diy_vs_professional_assistance = document.getElementById('ce-diplomatic-section-diy-vs-professional-assistance');
  if (ce_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_cear_specific_context = document.getElementById('ce-diplomatic-section-cear-specific-context');
  if (ce_diplomatic_section_cear_specific_context) {
    gsap.fromTo('#ce-diplomatic-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_what_our_clients_say = document.getElementById('ce-diplomatic-section-what-our-clients-say');
  if (ce_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#ce-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_frequently_asked_questions = document.getElementById('ce-diplomatic-section-frequently-asked-questions');
  if (ce_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#ce-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_international_support = document.getElementById('ce-diplomatic-section-international-support');
  if (ce_diplomatic_section_international_support) {
    gsap.fromTo('#ce-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_our_credentials = document.getElementById('ce-diplomatic-list-our-credentials');
  if (ce_diplomatic_list_our_credentials) {
    gsap.from('#ce-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_list_related_services = document.getElementById('ce-diplomatic-list-related-services');
  if (ce_diplomatic_list_related_services) {
    gsap.from('#ce-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_youre_in_good_hands = document.getElementById('ce-diplomatic-section-youre-in-good-hands');
  if (ce_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#ce-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_diplomatic_section_21 = document.getElementById('ce-diplomatic-section-21');
  if (ce_diplomatic_section_21) {
    gsap.fromTo('#ce-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('ce-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (ce_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#ce-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #ce-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_quick_facts = document.getElementById('ce-journalist-list-quick-facts');
  if (ce_journalist_list_quick_facts) {
    gsap.from('#ce-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_common_challenges_applicants_face = document.getElementById('ce-journalist-list-common-challenges-applicants-face');
  if (ce_journalist_list_common_challenges_applicants_face) {
    gsap.from('#ce-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_how_we_solve_these_challenges = document.getElementById('ce-journalist-list-how-we-solve-these-challenges');
  if (ce_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#ce-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_visa_overview = document.getElementById('ce-journalist-section-visa-overview');
  if (ce_journalist_section_visa_overview) {
    gsap.fromTo('#ce-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_form_who_is_this_visa_for = document.getElementById('ce-journalist-form-who-is-this-visa-for');
  if (ce_journalist_form_who_is_this_visa_for) {
    gsap.from('#ce-journalist-form-who-is-this-visa-for input, #ce-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_required_documents = document.getElementById('ce-journalist-list-required-documents');
  if (ce_journalist_list_required_documents) {
    gsap.from('#ce-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_application_process = document.getElementById('ce-journalist-list-application-process');
  if (ce_journalist_list_application_process) {
    gsap.from('#ce-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_timelines_deadlines = document.getElementById('ce-journalist-section-timelines-deadlines');
  if (ce_journalist_section_timelines_deadlines) {
    gsap.fromTo('#ce-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_fees_costs = document.getElementById('ce-journalist-section-fees-costs');
  if (ce_journalist_section_fees_costs) {
    gsap.fromTo('#ce-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_risks_common_mistakes = document.getElementById('ce-journalist-list-risks-common-mistakes');
  if (ce_journalist_list_risks_common_mistakes) {
    gsap.from('#ce-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_diy_vs_professional_assistance = document.getElementById('ce-journalist-section-diy-vs-professional-assistance');
  if (ce_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_cear_specific_context = document.getElementById('ce-journalist-section-cear-specific-context');
  if (ce_journalist_section_cear_specific_context) {
    gsap.fromTo('#ce-journalist-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_what_our_clients_say = document.getElementById('ce-journalist-section-what-our-clients-say');
  if (ce_journalist_section_what_our_clients_say) {
    gsap.fromTo('#ce-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_frequently_asked_questions = document.getElementById('ce-journalist-section-frequently-asked-questions');
  if (ce_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#ce-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_international_support = document.getElementById('ce-journalist-section-international-support');
  if (ce_journalist_section_international_support) {
    gsap.fromTo('#ce-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_our_credentials = document.getElementById('ce-journalist-list-our-credentials');
  if (ce_journalist_list_our_credentials) {
    gsap.from('#ce-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_list_related_services = document.getElementById('ce-journalist-list-related-services');
  if (ce_journalist_list_related_services) {
    gsap.from('#ce-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_youre_in_good_hands = document.getElementById('ce-journalist-section-youre-in-good-hands');
  if (ce_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#ce-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_journalist_section_21 = document.getElementById('ce-journalist-section-21');
  if (ce_journalist_section_21) {
    gsap.fromTo('#ce-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('ce-fines-form-resolve-immigration-fines-in-brazil');
  if (ce_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#ce-fines-form-resolve-immigration-fines-in-brazil input, #ce-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_quick_facts = document.getElementById('ce-fines-list-quick-facts');
  if (ce_fines_list_quick_facts) {
    gsap.from('#ce-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_common_challenges_applicants_face = document.getElementById('ce-fines-list-common-challenges-applicants-face');
  if (ce_fines_list_common_challenges_applicants_face) {
    gsap.from('#ce-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_how_we_solve_these_challenges = document.getElementById('ce-fines-list-how-we-solve-these-challenges');
  if (ce_fines_list_how_we_solve_these_challenges) {
    gsap.from('#ce-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_service_overview = document.getElementById('ce-fines-section-service-overview');
  if (ce_fines_section_service_overview) {
    gsap.fromTo('#ce-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_form_who_is_this_service_for = document.getElementById('ce-fines-form-who-is-this-service-for');
  if (ce_fines_form_who_is_this_service_for) {
    gsap.from('#ce-fines-form-who-is-this-service-for input, #ce-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_required_documents = document.getElementById('ce-fines-list-required-documents');
  if (ce_fines_list_required_documents) {
    gsap.from('#ce-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_process = document.getElementById('ce-fines-list-process');
  if (ce_fines_list_process) {
    gsap.from('#ce-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_timelines_deadlines = document.getElementById('ce-fines-section-timelines-deadlines');
  if (ce_fines_section_timelines_deadlines) {
    gsap.fromTo('#ce-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_fees_costs = document.getElementById('ce-fines-section-fees-costs');
  if (ce_fines_section_fees_costs) {
    gsap.fromTo('#ce-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_risks_common_mistakes = document.getElementById('ce-fines-list-risks-common-mistakes');
  if (ce_fines_list_risks_common_mistakes) {
    gsap.from('#ce-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_diy_vs_professional_assistance = document.getElementById('ce-fines-section-diy-vs-professional-assistance');
  if (ce_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_cear_specific_context = document.getElementById('ce-fines-section-cear-specific-context');
  if (ce_fines_section_cear_specific_context) {
    gsap.fromTo('#ce-fines-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_what_our_clients_say = document.getElementById('ce-fines-section-what-our-clients-say');
  if (ce_fines_section_what_our_clients_say) {
    gsap.fromTo('#ce-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_frequently_asked_questions = document.getElementById('ce-fines-section-frequently-asked-questions');
  if (ce_fines_section_frequently_asked_questions) {
    gsap.fromTo('#ce-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_international_support = document.getElementById('ce-fines-section-international-support');
  if (ce_fines_section_international_support) {
    gsap.fromTo('#ce-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_our_credentials = document.getElementById('ce-fines-list-our-credentials');
  if (ce_fines_list_our_credentials) {
    gsap.from('#ce-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_list_related_services = document.getElementById('ce-fines-list-related-services');
  if (ce_fines_list_related_services) {
    gsap.from('#ce-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_youre_in_good_hands = document.getElementById('ce-fines-section-youre-in-good-hands');
  if (ce_fines_section_youre_in_good_hands) {
    gsap.fromTo('#ce-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_fines_section_21 = document.getElementById('ce-fines-section-21');
  if (ce_fines_section_21) {
    gsap.fromTo('#ce-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_form_deportation_assistance_in_brazil = document.getElementById('ce-deportation-form-deportation-assistance-in-brazil');
  if (ce_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#ce-deportation-form-deportation-assistance-in-brazil input, #ce-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_quick_facts = document.getElementById('ce-deportation-list-quick-facts');
  if (ce_deportation_list_quick_facts) {
    gsap.from('#ce-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_common_challenges_applicants_face = document.getElementById('ce-deportation-list-common-challenges-applicants-face');
  if (ce_deportation_list_common_challenges_applicants_face) {
    gsap.from('#ce-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_how_we_solve_these_challenges = document.getElementById('ce-deportation-list-how-we-solve-these-challenges');
  if (ce_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#ce-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_service_overview = document.getElementById('ce-deportation-section-service-overview');
  if (ce_deportation_section_service_overview) {
    gsap.fromTo('#ce-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_form_who_is_this_service_for = document.getElementById('ce-deportation-form-who-is-this-service-for');
  if (ce_deportation_form_who_is_this_service_for) {
    gsap.from('#ce-deportation-form-who-is-this-service-for input, #ce-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_required_documents = document.getElementById('ce-deportation-list-required-documents');
  if (ce_deportation_list_required_documents) {
    gsap.from('#ce-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_process = document.getElementById('ce-deportation-list-process');
  if (ce_deportation_list_process) {
    gsap.from('#ce-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_timelines_deadlines = document.getElementById('ce-deportation-section-timelines-deadlines');
  if (ce_deportation_section_timelines_deadlines) {
    gsap.fromTo('#ce-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_fees_costs = document.getElementById('ce-deportation-section-fees-costs');
  if (ce_deportation_section_fees_costs) {
    gsap.fromTo('#ce-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_risks_common_mistakes = document.getElementById('ce-deportation-list-risks-common-mistakes');
  if (ce_deportation_list_risks_common_mistakes) {
    gsap.from('#ce-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_diy_vs_professional_assistance = document.getElementById('ce-deportation-section-diy-vs-professional-assistance');
  if (ce_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_cear_specific_context = document.getElementById('ce-deportation-section-cear-specific-context');
  if (ce_deportation_section_cear_specific_context) {
    gsap.fromTo('#ce-deportation-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_what_our_clients_say = document.getElementById('ce-deportation-section-what-our-clients-say');
  if (ce_deportation_section_what_our_clients_say) {
    gsap.fromTo('#ce-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_frequently_asked_questions = document.getElementById('ce-deportation-section-frequently-asked-questions');
  if (ce_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#ce-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_international_support = document.getElementById('ce-deportation-section-international-support');
  if (ce_deportation_section_international_support) {
    gsap.fromTo('#ce-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_our_credentials = document.getElementById('ce-deportation-list-our-credentials');
  if (ce_deportation_list_our_credentials) {
    gsap.from('#ce-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_list_related_services = document.getElementById('ce-deportation-list-related-services');
  if (ce_deportation_list_related_services) {
    gsap.from('#ce-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_youre_in_good_hands = document.getElementById('ce-deportation-section-youre-in-good-hands');
  if (ce_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#ce-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_deportation_section_21 = document.getElementById('ce-deportation-section-21');
  if (ce_deportation_section_21) {
    gsap.fromTo('#ce-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('ce-translation-form-sworn-document-translation-services-in-brazil');
  if (ce_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#ce-translation-form-sworn-document-translation-services-in-brazil input, #ce-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_quick_facts = document.getElementById('ce-translation-list-quick-facts');
  if (ce_translation_list_quick_facts) {
    gsap.from('#ce-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_common_challenges_applicants_face = document.getElementById('ce-translation-list-common-challenges-applicants-face');
  if (ce_translation_list_common_challenges_applicants_face) {
    gsap.from('#ce-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_how_we_solve_these_challenges = document.getElementById('ce-translation-list-how-we-solve-these-challenges');
  if (ce_translation_list_how_we_solve_these_challenges) {
    gsap.from('#ce-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_service_overview = document.getElementById('ce-translation-section-service-overview');
  if (ce_translation_section_service_overview) {
    gsap.fromTo('#ce-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_form_who_is_this_service_for = document.getElementById('ce-translation-form-who-is-this-service-for');
  if (ce_translation_form_who_is_this_service_for) {
    gsap.from('#ce-translation-form-who-is-this-service-for input, #ce-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_required_documents = document.getElementById('ce-translation-list-required-documents');
  if (ce_translation_list_required_documents) {
    gsap.from('#ce-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_process = document.getElementById('ce-translation-list-process');
  if (ce_translation_list_process) {
    gsap.from('#ce-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_timelines_deadlines = document.getElementById('ce-translation-section-timelines-deadlines');
  if (ce_translation_section_timelines_deadlines) {
    gsap.fromTo('#ce-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_fees_costs = document.getElementById('ce-translation-section-fees-costs');
  if (ce_translation_section_fees_costs) {
    gsap.fromTo('#ce-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_risks_common_mistakes = document.getElementById('ce-translation-list-risks-common-mistakes');
  if (ce_translation_list_risks_common_mistakes) {
    gsap.from('#ce-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_diy_vs_professional_assistance = document.getElementById('ce-translation-section-diy-vs-professional-assistance');
  if (ce_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_cear_specific_context = document.getElementById('ce-translation-section-cear-specific-context');
  if (ce_translation_section_cear_specific_context) {
    gsap.fromTo('#ce-translation-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_what_our_clients_say = document.getElementById('ce-translation-section-what-our-clients-say');
  if (ce_translation_section_what_our_clients_say) {
    gsap.fromTo('#ce-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_frequently_asked_questions = document.getElementById('ce-translation-section-frequently-asked-questions');
  if (ce_translation_section_frequently_asked_questions) {
    gsap.fromTo('#ce-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_international_support = document.getElementById('ce-translation-section-international-support');
  if (ce_translation_section_international_support) {
    gsap.fromTo('#ce-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_our_credentials = document.getElementById('ce-translation-list-our-credentials');
  if (ce_translation_list_our_credentials) {
    gsap.from('#ce-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_list_related_services = document.getElementById('ce-translation-list-related-services');
  if (ce_translation_list_related_services) {
    gsap.from('#ce-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_youre_in_good_hands = document.getElementById('ce-translation-section-youre-in-good-hands');
  if (ce_translation_section_youre_in_good_hands) {
    gsap.fromTo('#ce-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_translation_section_21 = document.getElementById('ce-translation-section-21');
  if (ce_translation_section_21) {
    gsap.fromTo('#ce-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('ce-expulsion-form-expulsion-assistance-in-brazil');
  if (ce_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#ce-expulsion-form-expulsion-assistance-in-brazil input, #ce-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_quick_facts = document.getElementById('ce-expulsion-list-quick-facts');
  if (ce_expulsion_list_quick_facts) {
    gsap.from('#ce-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_common_challenges_applicants_face = document.getElementById('ce-expulsion-list-common-challenges-applicants-face');
  if (ce_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#ce-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_how_we_solve_these_challenges = document.getElementById('ce-expulsion-list-how-we-solve-these-challenges');
  if (ce_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#ce-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_service_overview = document.getElementById('ce-expulsion-section-service-overview');
  if (ce_expulsion_section_service_overview) {
    gsap.fromTo('#ce-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_form_who_is_this_service_for = document.getElementById('ce-expulsion-form-who-is-this-service-for');
  if (ce_expulsion_form_who_is_this_service_for) {
    gsap.from('#ce-expulsion-form-who-is-this-service-for input, #ce-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_required_documents = document.getElementById('ce-expulsion-list-required-documents');
  if (ce_expulsion_list_required_documents) {
    gsap.from('#ce-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_process = document.getElementById('ce-expulsion-list-process');
  if (ce_expulsion_list_process) {
    gsap.from('#ce-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_timelines_deadlines = document.getElementById('ce-expulsion-section-timelines-deadlines');
  if (ce_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#ce-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_fees_costs = document.getElementById('ce-expulsion-section-fees-costs');
  if (ce_expulsion_section_fees_costs) {
    gsap.fromTo('#ce-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_risks_common_mistakes = document.getElementById('ce-expulsion-list-risks-common-mistakes');
  if (ce_expulsion_list_risks_common_mistakes) {
    gsap.from('#ce-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_diy_vs_professional_assistance = document.getElementById('ce-expulsion-section-diy-vs-professional-assistance');
  if (ce_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_cear_specific_context = document.getElementById('ce-expulsion-section-cear-specific-context');
  if (ce_expulsion_section_cear_specific_context) {
    gsap.fromTo('#ce-expulsion-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_what_our_clients_say = document.getElementById('ce-expulsion-section-what-our-clients-say');
  if (ce_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#ce-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_frequently_asked_questions = document.getElementById('ce-expulsion-section-frequently-asked-questions');
  if (ce_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#ce-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_international_support = document.getElementById('ce-expulsion-section-international-support');
  if (ce_expulsion_section_international_support) {
    gsap.fromTo('#ce-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_our_credentials = document.getElementById('ce-expulsion-list-our-credentials');
  if (ce_expulsion_list_our_credentials) {
    gsap.from('#ce-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_list_related_services = document.getElementById('ce-expulsion-list-related-services');
  if (ce_expulsion_list_related_services) {
    gsap.from('#ce-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_youre_in_good_hands = document.getElementById('ce-expulsion-section-youre-in-good-hands');
  if (ce_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#ce-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_expulsion_section_21 = document.getElementById('ce-expulsion-section-21');
  if (ce_expulsion_section_21) {
    gsap.fromTo('#ce-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('ce-appeals-form-appeal-immigration-denials-in-brazil');
  if (ce_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#ce-appeals-form-appeal-immigration-denials-in-brazil input, #ce-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_quick_facts = document.getElementById('ce-appeals-list-quick-facts');
  if (ce_appeals_list_quick_facts) {
    gsap.from('#ce-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_common_challenges_applicants_face = document.getElementById('ce-appeals-list-common-challenges-applicants-face');
  if (ce_appeals_list_common_challenges_applicants_face) {
    gsap.from('#ce-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_how_we_solve_these_challenges = document.getElementById('ce-appeals-list-how-we-solve-these-challenges');
  if (ce_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#ce-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_service_overview = document.getElementById('ce-appeals-section-service-overview');
  if (ce_appeals_section_service_overview) {
    gsap.fromTo('#ce-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_form_who_is_this_service_for = document.getElementById('ce-appeals-form-who-is-this-service-for');
  if (ce_appeals_form_who_is_this_service_for) {
    gsap.from('#ce-appeals-form-who-is-this-service-for input, #ce-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_required_documents = document.getElementById('ce-appeals-list-required-documents');
  if (ce_appeals_list_required_documents) {
    gsap.from('#ce-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_appeal_process = document.getElementById('ce-appeals-list-appeal-process');
  if (ce_appeals_list_appeal_process) {
    gsap.from('#ce-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_timelines_deadlines = document.getElementById('ce-appeals-section-timelines-deadlines');
  if (ce_appeals_section_timelines_deadlines) {
    gsap.fromTo('#ce-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_fees_costs = document.getElementById('ce-appeals-section-fees-costs');
  if (ce_appeals_section_fees_costs) {
    gsap.fromTo('#ce-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_risks_common_mistakes = document.getElementById('ce-appeals-list-risks-common-mistakes');
  if (ce_appeals_list_risks_common_mistakes) {
    gsap.from('#ce-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_diy_vs_professional_assistance = document.getElementById('ce-appeals-section-diy-vs-professional-assistance');
  if (ce_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_cear_specific_context = document.getElementById('ce-appeals-section-cear-specific-context');
  if (ce_appeals_section_cear_specific_context) {
    gsap.fromTo('#ce-appeals-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_what_our_clients_say = document.getElementById('ce-appeals-section-what-our-clients-say');
  if (ce_appeals_section_what_our_clients_say) {
    gsap.fromTo('#ce-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_frequently_asked_questions = document.getElementById('ce-appeals-section-frequently-asked-questions');
  if (ce_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#ce-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_international_support = document.getElementById('ce-appeals-section-international-support');
  if (ce_appeals_section_international_support) {
    gsap.fromTo('#ce-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_our_credentials = document.getElementById('ce-appeals-list-our-credentials');
  if (ce_appeals_list_our_credentials) {
    gsap.from('#ce-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_list_related_services = document.getElementById('ce-appeals-list-related-services');
  if (ce_appeals_list_related_services) {
    gsap.from('#ce-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_youre_in_good_hands = document.getElementById('ce-appeals-section-youre-in-good-hands');
  if (ce_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#ce-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_appeals_section_21 = document.getElementById('ce-appeals-section-21');
  if (ce_appeals_section_21) {
    gsap.fromTo('#ce-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('ce-consular-form-consular-services-in-brazil-for-citizens');
  if (ce_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#ce-consular-form-consular-services-in-brazil-for-citizens input, #ce-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_quick_facts = document.getElementById('ce-consular-list-quick-facts');
  if (ce_consular_list_quick_facts) {
    gsap.from('#ce-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_common_challenges_applicants_face = document.getElementById('ce-consular-list-common-challenges-applicants-face');
  if (ce_consular_list_common_challenges_applicants_face) {
    gsap.from('#ce-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_how_we_solve_these_challenges = document.getElementById('ce-consular-list-how-we-solve-these-challenges');
  if (ce_consular_list_how_we_solve_these_challenges) {
    gsap.from('#ce-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_service_overview = document.getElementById('ce-consular-section-service-overview');
  if (ce_consular_section_service_overview) {
    gsap.fromTo('#ce-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_form_who_is_this_service_for = document.getElementById('ce-consular-form-who-is-this-service-for');
  if (ce_consular_form_who_is_this_service_for) {
    gsap.from('#ce-consular-form-who-is-this-service-for input, #ce-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_required_documents = document.getElementById('ce-consular-list-required-documents');
  if (ce_consular_list_required_documents) {
    gsap.from('#ce-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_process = document.getElementById('ce-consular-list-process');
  if (ce_consular_list_process) {
    gsap.from('#ce-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_timelines_deadlines = document.getElementById('ce-consular-section-timelines-deadlines');
  if (ce_consular_section_timelines_deadlines) {
    gsap.fromTo('#ce-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_fees_costs = document.getElementById('ce-consular-section-fees-costs');
  if (ce_consular_section_fees_costs) {
    gsap.fromTo('#ce-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_risks_common_mistakes = document.getElementById('ce-consular-list-risks-common-mistakes');
  if (ce_consular_list_risks_common_mistakes) {
    gsap.from('#ce-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_diy_vs_professional_assistance = document.getElementById('ce-consular-section-diy-vs-professional-assistance');
  if (ce_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_cear_specific_context = document.getElementById('ce-consular-section-cear-specific-context');
  if (ce_consular_section_cear_specific_context) {
    gsap.fromTo('#ce-consular-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_what_our_clients_say = document.getElementById('ce-consular-section-what-our-clients-say');
  if (ce_consular_section_what_our_clients_say) {
    gsap.fromTo('#ce-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_frequently_asked_questions = document.getElementById('ce-consular-section-frequently-asked-questions');
  if (ce_consular_section_frequently_asked_questions) {
    gsap.fromTo('#ce-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_international_support = document.getElementById('ce-consular-section-international-support');
  if (ce_consular_section_international_support) {
    gsap.fromTo('#ce-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_our_credentials = document.getElementById('ce-consular-list-our-credentials');
  if (ce_consular_list_our_credentials) {
    gsap.from('#ce-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_list_related_services = document.getElementById('ce-consular-list-related-services');
  if (ce_consular_list_related_services) {
    gsap.from('#ce-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_youre_in_good_hands = document.getElementById('ce-consular-section-youre-in-good-hands');
  if (ce_consular_section_youre_in_good_hands) {
    gsap.fromTo('#ce-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_consular_section_21 = document.getElementById('ce-consular-section-21');
  if (ce_consular_section_21) {
    gsap.fromTo('#ce-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('ce-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (ce_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#ce-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #ce-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_quick_facts = document.getElementById('ce-criminalrecords-list-quick-facts');
  if (ce_criminalrecords_list_quick_facts) {
    gsap.from('#ce-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_common_challenges_applicants_face = document.getElementById('ce-criminalrecords-list-common-challenges-applicants-face');
  if (ce_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#ce-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('ce-criminalrecords-list-how-we-solve-these-challenges');
  if (ce_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#ce-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_service_overview = document.getElementById('ce-criminalrecords-section-service-overview');
  if (ce_criminalrecords_section_service_overview) {
    gsap.fromTo('#ce-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_form_who_is_this_service_for = document.getElementById('ce-criminalrecords-form-who-is-this-service-for');
  if (ce_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#ce-criminalrecords-form-who-is-this-service-for input, #ce-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_required_documents = document.getElementById('ce-criminalrecords-list-required-documents');
  if (ce_criminalrecords_list_required_documents) {
    gsap.from('#ce-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_process = document.getElementById('ce-criminalrecords-list-process');
  if (ce_criminalrecords_list_process) {
    gsap.from('#ce-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_timelines_deadlines = document.getElementById('ce-criminalrecords-section-timelines-deadlines');
  if (ce_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#ce-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_fees_costs = document.getElementById('ce-criminalrecords-section-fees-costs');
  if (ce_criminalrecords_section_fees_costs) {
    gsap.fromTo('#ce-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_risks_common_mistakes = document.getElementById('ce-criminalrecords-list-risks-common-mistakes');
  if (ce_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#ce-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('ce-criminalrecords-section-diy-vs-professional-assistance');
  if (ce_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_cear_specific_context = document.getElementById('ce-criminalrecords-section-cear-specific-context');
  if (ce_criminalrecords_section_cear_specific_context) {
    gsap.fromTo('#ce-criminalrecords-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_what_our_clients_say = document.getElementById('ce-criminalrecords-section-what-our-clients-say');
  if (ce_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#ce-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_frequently_asked_questions = document.getElementById('ce-criminalrecords-section-frequently-asked-questions');
  if (ce_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#ce-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_international_support = document.getElementById('ce-criminalrecords-section-international-support');
  if (ce_criminalrecords_section_international_support) {
    gsap.fromTo('#ce-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_our_credentials = document.getElementById('ce-criminalrecords-list-our-credentials');
  if (ce_criminalrecords_list_our_credentials) {
    gsap.from('#ce-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_list_related_services = document.getElementById('ce-criminalrecords-list-related-services');
  if (ce_criminalrecords_list_related_services) {
    gsap.from('#ce-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_youre_in_good_hands = document.getElementById('ce-criminalrecords-section-youre-in-good-hands');
  if (ce_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#ce-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_criminalrecords_section_21 = document.getElementById('ce-criminalrecords-section-21');
  if (ce_criminalrecords_section_21) {
    gsap.fromTo('#ce-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_form_extradition_assistance_in_brazil = document.getElementById('ce-extradition-form-extradition-assistance-in-brazil');
  if (ce_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#ce-extradition-form-extradition-assistance-in-brazil input, #ce-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_quick_facts = document.getElementById('ce-extradition-list-quick-facts');
  if (ce_extradition_list_quick_facts) {
    gsap.from('#ce-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_common_challenges_applicants_face = document.getElementById('ce-extradition-list-common-challenges-applicants-face');
  if (ce_extradition_list_common_challenges_applicants_face) {
    gsap.from('#ce-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_how_we_solve_these_challenges = document.getElementById('ce-extradition-list-how-we-solve-these-challenges');
  if (ce_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#ce-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_service_overview = document.getElementById('ce-extradition-section-service-overview');
  if (ce_extradition_section_service_overview) {
    gsap.fromTo('#ce-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_form_who_is_this_service_for = document.getElementById('ce-extradition-form-who-is-this-service-for');
  if (ce_extradition_form_who_is_this_service_for) {
    gsap.from('#ce-extradition-form-who-is-this-service-for input, #ce-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_required_documents = document.getElementById('ce-extradition-list-required-documents');
  if (ce_extradition_list_required_documents) {
    gsap.from('#ce-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_process = document.getElementById('ce-extradition-list-process');
  if (ce_extradition_list_process) {
    gsap.from('#ce-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_timelines_deadlines = document.getElementById('ce-extradition-section-timelines-deadlines');
  if (ce_extradition_section_timelines_deadlines) {
    gsap.fromTo('#ce-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_fees_costs = document.getElementById('ce-extradition-section-fees-costs');
  if (ce_extradition_section_fees_costs) {
    gsap.fromTo('#ce-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_risks_common_mistakes = document.getElementById('ce-extradition-list-risks-common-mistakes');
  if (ce_extradition_list_risks_common_mistakes) {
    gsap.from('#ce-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_diy_vs_professional_assistance = document.getElementById('ce-extradition-section-diy-vs-professional-assistance');
  if (ce_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_cear_specific_context = document.getElementById('ce-extradition-section-cear-specific-context');
  if (ce_extradition_section_cear_specific_context) {
    gsap.fromTo('#ce-extradition-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_what_our_clients_say = document.getElementById('ce-extradition-section-what-our-clients-say');
  if (ce_extradition_section_what_our_clients_say) {
    gsap.fromTo('#ce-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_frequently_asked_questions = document.getElementById('ce-extradition-section-frequently-asked-questions');
  if (ce_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#ce-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_international_support = document.getElementById('ce-extradition-section-international-support');
  if (ce_extradition_section_international_support) {
    gsap.fromTo('#ce-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_our_credentials = document.getElementById('ce-extradition-list-our-credentials');
  if (ce_extradition_list_our_credentials) {
    gsap.from('#ce-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_list_related_services = document.getElementById('ce-extradition-list-related-services');
  if (ce_extradition_list_related_services) {
    gsap.from('#ce-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_youre_in_good_hands = document.getElementById('ce-extradition-section-youre-in-good-hands');
  if (ce_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#ce-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_extradition_section_21 = document.getElementById('ce-extradition-section-21');
  if (ce_extradition_section_21) {
    gsap.fromTo('#ce-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_form_discover_the_north_amazon_and_beyond = document.getElementById('ce-north-form-discover-the-north-amazon-and-beyond');
  if (ce_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#ce-north-form-discover-the-north-amazon-and-beyond input, #ce-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_quick_facts = document.getElementById('ce-north-list-quick-facts');
  if (ce_north_list_quick_facts) {
    gsap.from('#ce-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_common_challenges_applicants_face = document.getElementById('ce-north-list-common-challenges-applicants-face');
  if (ce_north_list_common_challenges_applicants_face) {
    gsap.from('#ce-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_how_we_solve_these_challenges = document.getElementById('ce-north-list-how-we-solve-these-challenges');
  if (ce_north_list_how_we_solve_these_challenges) {
    gsap.from('#ce-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_trip_overview = document.getElementById('ce-north-section-trip-overview');
  if (ce_north_section_trip_overview) {
    gsap.fromTo('#ce-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_form_who_is_this_trip_for = document.getElementById('ce-north-form-who-is-this-trip-for');
  if (ce_north_form_who_is_this_trip_for) {
    gsap.from('#ce-north-form-who-is-this-trip-for input, #ce-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_required_documents = document.getElementById('ce-north-list-required-documents');
  if (ce_north_list_required_documents) {
    gsap.from('#ce-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_booking_process = document.getElementById('ce-north-list-booking-process');
  if (ce_north_list_booking_process) {
    gsap.from('#ce-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_timelines_deadlines = document.getElementById('ce-north-section-timelines-deadlines');
  if (ce_north_section_timelines_deadlines) {
    gsap.fromTo('#ce-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_fees_costs = document.getElementById('ce-north-section-fees-costs');
  if (ce_north_section_fees_costs) {
    gsap.fromTo('#ce-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_risks_common_mistakes = document.getElementById('ce-north-list-risks-common-mistakes');
  if (ce_north_list_risks_common_mistakes) {
    gsap.from('#ce-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_diy_vs_professional_assistance = document.getElementById('ce-north-section-diy-vs-professional-assistance');
  if (ce_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_cear_specific_context = document.getElementById('ce-north-section-cear-specific-context');
  if (ce_north_section_cear_specific_context) {
    gsap.fromTo('#ce-north-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_what_our_clients_say = document.getElementById('ce-north-section-what-our-clients-say');
  if (ce_north_section_what_our_clients_say) {
    gsap.fromTo('#ce-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_frequently_asked_questions = document.getElementById('ce-north-section-frequently-asked-questions');
  if (ce_north_section_frequently_asked_questions) {
    gsap.fromTo('#ce-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_international_support = document.getElementById('ce-north-section-international-support');
  if (ce_north_section_international_support) {
    gsap.fromTo('#ce-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_our_credentials = document.getElementById('ce-north-list-our-credentials');
  if (ce_north_list_our_credentials) {
    gsap.from('#ce-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_list_related_services = document.getElementById('ce-north-list-related-services');
  if (ce_north_list_related_services) {
    gsap.from('#ce-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_youre_in_good_hands = document.getElementById('ce-north-section-youre-in-good-hands');
  if (ce_north_section_youre_in_good_hands) {
    gsap.fromTo('#ce-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_north_section_21 = document.getElementById('ce-north-section-21');
  if (ce_north_section_21) {
    gsap.fromTo('#ce-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('ce-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (ce_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#ce-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #ce-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_quick_facts = document.getElementById('ce-centralwest-list-quick-facts');
  if (ce_centralwest_list_quick_facts) {
    gsap.from('#ce-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_common_challenges_applicants_face = document.getElementById('ce-centralwest-list-common-challenges-applicants-face');
  if (ce_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#ce-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_how_we_solve_these_challenges = document.getElementById('ce-centralwest-list-how-we-solve-these-challenges');
  if (ce_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#ce-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_trip_overview = document.getElementById('ce-centralwest-section-trip-overview');
  if (ce_centralwest_section_trip_overview) {
    gsap.fromTo('#ce-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_form_who_is_this_trip_for = document.getElementById('ce-centralwest-form-who-is-this-trip-for');
  if (ce_centralwest_form_who_is_this_trip_for) {
    gsap.from('#ce-centralwest-form-who-is-this-trip-for input, #ce-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_required_documents = document.getElementById('ce-centralwest-list-required-documents');
  if (ce_centralwest_list_required_documents) {
    gsap.from('#ce-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_booking_process = document.getElementById('ce-centralwest-list-booking-process');
  if (ce_centralwest_list_booking_process) {
    gsap.from('#ce-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_timelines_deadlines = document.getElementById('ce-centralwest-section-timelines-deadlines');
  if (ce_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#ce-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_fees_costs = document.getElementById('ce-centralwest-section-fees-costs');
  if (ce_centralwest_section_fees_costs) {
    gsap.fromTo('#ce-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_risks_common_mistakes = document.getElementById('ce-centralwest-list-risks-common-mistakes');
  if (ce_centralwest_list_risks_common_mistakes) {
    gsap.from('#ce-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_diy_vs_professional_assistance = document.getElementById('ce-centralwest-section-diy-vs-professional-assistance');
  if (ce_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_cear_specific_context = document.getElementById('ce-centralwest-section-cear-specific-context');
  if (ce_centralwest_section_cear_specific_context) {
    gsap.fromTo('#ce-centralwest-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_what_our_clients_say = document.getElementById('ce-centralwest-section-what-our-clients-say');
  if (ce_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#ce-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_frequently_asked_questions = document.getElementById('ce-centralwest-section-frequently-asked-questions');
  if (ce_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#ce-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_international_support = document.getElementById('ce-centralwest-section-international-support');
  if (ce_centralwest_section_international_support) {
    gsap.fromTo('#ce-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_our_credentials = document.getElementById('ce-centralwest-list-our-credentials');
  if (ce_centralwest_list_our_credentials) {
    gsap.from('#ce-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_list_related_services = document.getElementById('ce-centralwest-list-related-services');
  if (ce_centralwest_list_related_services) {
    gsap.from('#ce-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_youre_in_good_hands = document.getElementById('ce-centralwest-section-youre-in-good-hands');
  if (ce_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#ce-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_centralwest_section_21 = document.getElementById('ce-centralwest-section-21');
  if (ce_centralwest_section_21) {
    gsap.fromTo('#ce-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('ce-southeast-form-dynamic-southeast-cities-and-history');
  if (ce_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#ce-southeast-form-dynamic-southeast-cities-and-history input, #ce-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_quick_facts = document.getElementById('ce-southeast-list-quick-facts');
  if (ce_southeast_list_quick_facts) {
    gsap.from('#ce-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_common_challenges_applicants_face = document.getElementById('ce-southeast-list-common-challenges-applicants-face');
  if (ce_southeast_list_common_challenges_applicants_face) {
    gsap.from('#ce-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_how_we_solve_these_challenges = document.getElementById('ce-southeast-list-how-we-solve-these-challenges');
  if (ce_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#ce-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_trip_overview = document.getElementById('ce-southeast-section-trip-overview');
  if (ce_southeast_section_trip_overview) {
    gsap.fromTo('#ce-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_form_who_is_this_trip_for = document.getElementById('ce-southeast-form-who-is-this-trip-for');
  if (ce_southeast_form_who_is_this_trip_for) {
    gsap.from('#ce-southeast-form-who-is-this-trip-for input, #ce-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_required_documents = document.getElementById('ce-southeast-list-required-documents');
  if (ce_southeast_list_required_documents) {
    gsap.from('#ce-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_booking_process = document.getElementById('ce-southeast-list-booking-process');
  if (ce_southeast_list_booking_process) {
    gsap.from('#ce-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_timelines_deadlines = document.getElementById('ce-southeast-section-timelines-deadlines');
  if (ce_southeast_section_timelines_deadlines) {
    gsap.fromTo('#ce-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_fees_costs = document.getElementById('ce-southeast-section-fees-costs');
  if (ce_southeast_section_fees_costs) {
    gsap.fromTo('#ce-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_risks_common_mistakes = document.getElementById('ce-southeast-list-risks-common-mistakes');
  if (ce_southeast_list_risks_common_mistakes) {
    gsap.from('#ce-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_diy_vs_professional_assistance = document.getElementById('ce-southeast-section-diy-vs-professional-assistance');
  if (ce_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_cear_specific_context = document.getElementById('ce-southeast-section-cear-specific-context');
  if (ce_southeast_section_cear_specific_context) {
    gsap.fromTo('#ce-southeast-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_what_our_clients_say = document.getElementById('ce-southeast-section-what-our-clients-say');
  if (ce_southeast_section_what_our_clients_say) {
    gsap.fromTo('#ce-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_frequently_asked_questions = document.getElementById('ce-southeast-section-frequently-asked-questions');
  if (ce_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#ce-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_international_support = document.getElementById('ce-southeast-section-international-support');
  if (ce_southeast_section_international_support) {
    gsap.fromTo('#ce-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_our_credentials = document.getElementById('ce-southeast-list-our-credentials');
  if (ce_southeast_list_our_credentials) {
    gsap.from('#ce-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_list_related_services = document.getElementById('ce-southeast-list-related-services');
  if (ce_southeast_list_related_services) {
    gsap.from('#ce-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_youre_in_good_hands = document.getElementById('ce-southeast-section-youre-in-good-hands');
  if (ce_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#ce-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_southeast_section_21 = document.getElementById('ce-southeast-section-21');
  if (ce_southeast_section_21) {
    gsap.fromTo('#ce-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('ce-northeast-form-vibrant-northeast-beaches-and-culture');
  if (ce_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#ce-northeast-form-vibrant-northeast-beaches-and-culture input, #ce-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_quick_facts = document.getElementById('ce-northeast-list-quick-facts');
  if (ce_northeast_list_quick_facts) {
    gsap.from('#ce-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_common_challenges_applicants_face = document.getElementById('ce-northeast-list-common-challenges-applicants-face');
  if (ce_northeast_list_common_challenges_applicants_face) {
    gsap.from('#ce-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_how_we_solve_these_challenges = document.getElementById('ce-northeast-list-how-we-solve-these-challenges');
  if (ce_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#ce-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_trip_overview = document.getElementById('ce-northeast-section-trip-overview');
  if (ce_northeast_section_trip_overview) {
    gsap.fromTo('#ce-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_form_who_is_this_trip_for = document.getElementById('ce-northeast-form-who-is-this-trip-for');
  if (ce_northeast_form_who_is_this_trip_for) {
    gsap.from('#ce-northeast-form-who-is-this-trip-for input, #ce-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_required_documents = document.getElementById('ce-northeast-list-required-documents');
  if (ce_northeast_list_required_documents) {
    gsap.from('#ce-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_booking_process = document.getElementById('ce-northeast-list-booking-process');
  if (ce_northeast_list_booking_process) {
    gsap.from('#ce-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_timelines_deadlines = document.getElementById('ce-northeast-section-timelines-deadlines');
  if (ce_northeast_section_timelines_deadlines) {
    gsap.fromTo('#ce-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_fees_costs = document.getElementById('ce-northeast-section-fees-costs');
  if (ce_northeast_section_fees_costs) {
    gsap.fromTo('#ce-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_risks_common_mistakes = document.getElementById('ce-northeast-list-risks-common-mistakes');
  if (ce_northeast_list_risks_common_mistakes) {
    gsap.from('#ce-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_diy_vs_professional_assistance = document.getElementById('ce-northeast-section-diy-vs-professional-assistance');
  if (ce_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_cear_specific_context = document.getElementById('ce-northeast-section-cear-specific-context');
  if (ce_northeast_section_cear_specific_context) {
    gsap.fromTo('#ce-northeast-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_what_our_clients_say = document.getElementById('ce-northeast-section-what-our-clients-say');
  if (ce_northeast_section_what_our_clients_say) {
    gsap.fromTo('#ce-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_frequently_asked_questions = document.getElementById('ce-northeast-section-frequently-asked-questions');
  if (ce_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#ce-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_international_support = document.getElementById('ce-northeast-section-international-support');
  if (ce_northeast_section_international_support) {
    gsap.fromTo('#ce-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_our_credentials = document.getElementById('ce-northeast-list-our-credentials');
  if (ce_northeast_list_our_credentials) {
    gsap.from('#ce-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_list_related_services = document.getElementById('ce-northeast-list-related-services');
  if (ce_northeast_list_related_services) {
    gsap.from('#ce-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_youre_in_good_hands = document.getElementById('ce-northeast-section-youre-in-good-hands');
  if (ce_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#ce-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_northeast_section_21 = document.getElementById('ce-northeast-section-21');
  if (ce_northeast_section_21) {
    gsap.fromTo('#ce-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_form_charming_south_wine_and_gauchos = document.getElementById('ce-south-form-charming-south-wine-and-gauchos');
  if (ce_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#ce-south-form-charming-south-wine-and-gauchos input, #ce-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_quick_facts = document.getElementById('ce-south-list-quick-facts');
  if (ce_south_list_quick_facts) {
    gsap.from('#ce-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_common_challenges_applicants_face = document.getElementById('ce-south-list-common-challenges-applicants-face');
  if (ce_south_list_common_challenges_applicants_face) {
    gsap.from('#ce-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_how_we_solve_these_challenges = document.getElementById('ce-south-list-how-we-solve-these-challenges');
  if (ce_south_list_how_we_solve_these_challenges) {
    gsap.from('#ce-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_trip_overview = document.getElementById('ce-south-section-trip-overview');
  if (ce_south_section_trip_overview) {
    gsap.fromTo('#ce-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_form_who_is_this_trip_for = document.getElementById('ce-south-form-who-is-this-trip-for');
  if (ce_south_form_who_is_this_trip_for) {
    gsap.from('#ce-south-form-who-is-this-trip-for input, #ce-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_required_documents = document.getElementById('ce-south-list-required-documents');
  if (ce_south_list_required_documents) {
    gsap.from('#ce-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_booking_process = document.getElementById('ce-south-list-booking-process');
  if (ce_south_list_booking_process) {
    gsap.from('#ce-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_timelines_deadlines = document.getElementById('ce-south-section-timelines-deadlines');
  if (ce_south_section_timelines_deadlines) {
    gsap.fromTo('#ce-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_fees_costs = document.getElementById('ce-south-section-fees-costs');
  if (ce_south_section_fees_costs) {
    gsap.fromTo('#ce-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_risks_common_mistakes = document.getElementById('ce-south-list-risks-common-mistakes');
  if (ce_south_list_risks_common_mistakes) {
    gsap.from('#ce-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_diy_vs_professional_assistance = document.getElementById('ce-south-section-diy-vs-professional-assistance');
  if (ce_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ce-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_cear_specific_context = document.getElementById('ce-south-section-cear-specific-context');
  if (ce_south_section_cear_specific_context) {
    gsap.fromTo('#ce-south-section-cear-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_what_our_clients_say = document.getElementById('ce-south-section-what-our-clients-say');
  if (ce_south_section_what_our_clients_say) {
    gsap.fromTo('#ce-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_frequently_asked_questions = document.getElementById('ce-south-section-frequently-asked-questions');
  if (ce_south_section_frequently_asked_questions) {
    gsap.fromTo('#ce-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_international_support = document.getElementById('ce-south-section-international-support');
  if (ce_south_section_international_support) {
    gsap.fromTo('#ce-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_our_credentials = document.getElementById('ce-south-list-our-credentials');
  if (ce_south_list_our_credentials) {
    gsap.from('#ce-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_list_related_services = document.getElementById('ce-south-list-related-services');
  if (ce_south_list_related_services) {
    gsap.from('#ce-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_youre_in_good_hands = document.getElementById('ce-south-section-youre-in-good-hands');
  if (ce_south_section_youre_in_good_hands) {
    gsap.fromTo('#ce-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

  const ce_south_section_21 = document.getElementById('ce-south-section-21');
  if (ce_south_section_21) {
    gsap.fromTo('#ce-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'easeInOutSine'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
