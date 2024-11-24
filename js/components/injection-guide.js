export class InjectionGuide {
    constructor(containerId, type) {
        this.container = document.getElementById(containerId);
        this.type = type; // 'estrogen' or 'testosterone'
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        const steps = this.type === 'estrogen' ? this.estrogenSteps : this.testosteroneSteps;
        
        this.container.innerHTML = `
            <div class="injection-guide-container">
                <div class="guide-header">
                    <h3>${this.type.charAt(0).toUpperCase() + this.type.slice(1)} Injection Guide</h3>
                    <div class="injection-type-selector">
                        <button class="type-btn active" data-type="im">Intramuscular (IM)</button>
                        <button class="type-btn" data-type="subq">Subcutaneous (SubQ)</button>
                    </div>
                </div>
                <div class="steps-container">
                    ${steps.map((step, index) => `
                        <div class="step-card" data-step="${index + 1}">
                            <div class="step-number">${index + 1}</div>
                            <h4>${step.title}</h4>
                            <p>${step.description}</p>
                            ${step.warning ? `<div class="warning">${step.warning}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
                <div class="injection-sites-map">
                    <!-- Injection sites visualization will be added here -->
                </div>
            </div>
        `;
    }

    get estrogenSteps() {
        return [
            {
                title: "Prepare Your Supplies",
                description: "Gather: estrogen vial, drawing needle (18-22G), injection needle (23-25G for IM, 25-27G for SubQ), alcohol swabs, and sharps container."
            },
            {
                title: "Draw Medication",
                description: "Using the larger gauge needle, draw the prescribed amount of estrogen from the vial.",
                warning: "Always use a fresh needle for injection - never inject with the drawing needle."
            },
            // Add more steps as needed
        ];
    }

    get testosteroneSteps() {
        return [
            {
                title: "Prepare Your Supplies",
                description: "Gather: testosterone vial, drawing needle (18-20G), injection needle (21-23G for IM, 25-27G for SubQ), alcohol swabs, and sharps container."
            },
            {
                title: "Draw Medication",
                description: "Using the larger gauge needle, draw the prescribed amount of testosterone from the vial.",
                warning: "Testosterone is thicker than estrogen - using a larger drawing needle helps."
            },
            // Add more steps as needed
        ];
    }

    attachEventListeners() {
        const typeButtons = this.container.querySelectorAll('.type-btn');
        typeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                typeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Update content based on injection type
                // Implementation to be added
            });
        });
    }
}
