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
        // Add recommendation logic based on selections
        const recommendations = {
            'drawing-testosterone': '18-20G',
            'drawing-estrogen': '20-22G',
            'injecting-im-testosterone': '21-23G',
            'injecting-im-estrogen': '22-25G',
            'injecting-subq-testosterone': '25-27G',
            'injecting-subq-estrogen': '25-27G'
        };

        const key = `${use}-${medication}`;
        return recommendations[key];
    }

    function displayRecommendation(recommendation) {
        resultDiv.innerHTML = `
            <div class="recommendation-card">
                <h3>Recommended Needle Gauge</h3>
                <p class="gauge-size">${recommendation}</p>
                <p class="description">This size is optimal for your needs.</p>
            </div>
        `;
    }

    needleUse.addEventListener('change', updateRecommendation);
    medicationType.addEventListener('change', updateRecommendation);
}); 