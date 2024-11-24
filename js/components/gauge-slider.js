import { gaugeData } from '../utils/data.js';

export class GaugeSlider {
    constructor(containerId) {
        this.slider = document.getElementById('gaugeRange');
        this.currentGauge = document.querySelector('.current-gauge');
        this.selectedBar = document.querySelector('.selected-gauge.bar');
        
        this.gaugeInfo = {
            18: { width: '100%' },
            20: { width: '90%' },
            22: { width: '80%' },
            23: { width: '70%' },
            25: { width: '60%' },
            27: { width: '50%' }
        };

        this.init();
    }

    init() {
        this.slider.addEventListener('input', () => this.updateGauge());
        this.updateGauge();
    }

    updateGauge() {
        const gauge = this.slider.value;
        this.currentGauge.textContent = `${gauge}G`;
        
        const info = this.gaugeInfo[gauge];
        if (info) {
            this.selectedBar.style.setProperty('--selected-width', info.width);
        }
    }
}