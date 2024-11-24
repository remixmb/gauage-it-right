import { gaugeData } from '../utils/data.js';

document.addEventListener('DOMContentLoaded', () => {
    const needleUse = document.getElementById('needleUse');
    const medicationType = document.getElementById('medicationType');
    const resultDiv = document.getElementById('recommendation-result');

    function updateRecommendation() {
        const use = needleUse.value;
        const medication = medicationType.value;

        if (!use || !medication) return;

        const recommendation = getRecommendation(use, medication);
        displayRecommendation(recommendation);
    }

    function getRecommendation(use, medication) {
        const recommendations = {
            'drawing-testosterone': {
                gauge: '18-20G',
                details: 'Ideal for drawing thick testosterone oil'
            },
            'drawing-estrogen': {
                gauge: '20-22G',
                details: 'Perfect for drawing estradiol valerate'
            },
            'injecting-im-testosterone': {
                gauge: '21-23G',
                details: 'Comfortable for IM testosterone injection'
            },
            'injecting-im-estrogen': {
                gauge: '22-25G',
                details: 'Optimal for IM estrogen delivery'
            },
            'injecting-subq-testosterone': {
                gauge: '25-27G',
                details: 'Best for SubQ testosterone injection'
            },
            'injecting-subq-estrogen': {
                gauge: '25-27G',
                details: 'Perfect for SubQ estrogen delivery'
            }
        };

        const key = `${use}-${medication}`;
        return recommendations[key];
    }

    function displayRecommendation(recommendation) {
        resultDiv.innerHTML = `
            <div class="recommendation-card">
                <h3>Recommended Needle Gauge</h3>
                <p class="gauge-size">${recommendation.gauge}</p>
                <p class="description">${recommendation.details}</p>
            </div>
        `;
    }

    needleUse.addEventListener('change', updateRecommendation);
    medicationType.addEventListener('change', updateRecommendation);
}); 