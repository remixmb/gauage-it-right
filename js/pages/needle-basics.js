import { GaugeSlider } from '../components/gauge-slider.js';
import { MobileNav } from '../components/mobile-nav.js';

document.addEventListener('DOMContentLoaded', () => {
    new GaugeSlider('gauge-slider');
    new MobileNav();
}); 