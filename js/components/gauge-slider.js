import { gaugeData } from '../utils/data.js';

export class GaugeSlider {
    constructor(containerId) {
        this.slider = document.getElementById('gaugeRange');
        this.currentGauge = document.querySelector('.current-gauge');
        this.selectedBar = document.querySelector('.selected-gauge.bar');
        this.referenceBar = document.querySelector('.reference-gauge.bar');
        this.gaugeInfo = document.querySelector('.gauge-info');
        
        this.init();
    }

    init() {
        // Set fixed height for both bars
        this.selectedBar.style.height = '150px';
        this.referenceBar.style.height = '150px';
        
        // Set reference bar width (18G)
        this.referenceBar.style.width = '8px';
        
        // Add event listener
        this.slider.addEventListener('input', () => {
            this.updateGauge(this.slider.value);
        });
        
        // Set initial state
        this.updateGauge(this.slider.value);
    }

    updateGauge(gauge) {
        // Update display text
        this.currentGauge.textContent = `${gauge}G`;
        
        // Calculate width (18G = 8px, 27G = 2px)
        const width = Math.max(2, 8 - ((gauge - 18) * 0.67));
        
        // Update selected bar width
        this.selectedBar.style.width = `${width}px`;
        
        // Update info box
        const data = this.getGaugeData(gauge);
        if (data) {
            this.gaugeInfo.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.description}</p>
                <div class="usage-tags">
                    ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
        }
    }

    getGaugeData(gauge) {
        const gaugeData = {
            18: {
                title: "Large Drawing Needle",
                description: "Ideal for drawing thick medications like testosterone.",
                tags: ["Drawing", "Testosterone"]
            },
            20: {
                title: "Standard Drawing Needle",
                description: "Good for drawing most medications.",
                tags: ["Drawing", "General Use"]
            },
            22: {
                title: "Small Drawing / Large Injecting Needle",
                description: "Can be used for drawing or injecting testosterone.",
                tags: ["Drawing", "Injecting", "Testosterone"]
            },
            23: {
                title: "Medium Injecting Needle",
                description: "Good for intramuscular injections.",
                tags: ["Injecting", "IM"]
            },
            25: {
                title: "Small Injecting Needle",
                description: "Ideal for subcutaneous injections.",
                tags: ["Injecting", "SubQ"]
            },
            27: {
                title: "Very Small Injecting Needle",
                description: "Best for sensitive areas and subcutaneous injections.",
                tags: ["Injecting", "SubQ", "Low Pain"]
            }
        };
        return gaugeData[gauge];
    }
}