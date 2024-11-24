import { gaugeData } from '../utils/data.js';

export class GaugeSlider {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = `
            <div class="gauge-slider-container">
                <div class="gauge-slider">
                    <input type="range" min="18" max="27" value="22" class="slider" id="gaugeSlider">
                    <div class="gauge-display">
                        <span id="gaugeSize">22G</span>
                        <div class="needle-visualization">
                            <div class="needle-outer"></div>
                            <div class="needle-inner" id="needleInner"></div>
                        </div>
                    </div>
                </div>
                <div class="gauge-info">
                    <h3 id="gaugeTitle"></h3>
                    <p id="gaugeDescription"></p>
                    <div class="usage-tags" id="usageTags"></div>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        const slider = this.container.querySelector('#gaugeSlider');
        const gaugeSize = this.container.querySelector('#gaugeSize');
        const gaugeTitle = this.container.querySelector('#gaugeTitle');
        const gaugeDescription = this.container.querySelector('#gaugeDescription');
        const usageTags = this.container.querySelector('#usageTags');
        const needleInner = this.container.querySelector('#needleInner');

        const updateGaugeInfo = (value) => {
            gaugeSize.textContent = `${value}G`;
            const data = gaugeData[value];
            
            if (!data) {
                console.warn(`No data found for gauge size ${value}`);
                return;
            }
            
            gaugeTitle.textContent = data.title;
            gaugeDescription.textContent = data.description;
            usageTags.innerHTML = data.tags
                .map(tag => `<span class="tag">${tag}</span>`)
                .join('');
            needleInner.style.height = data.innerSize;
        };

        slider.addEventListener('input', (e) => {
            updateGaugeInfo(e.target.value);
        });

        // Initialize with default value
        updateGaugeInfo(slider.value);
    }
}