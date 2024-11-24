export class MobileNav {
    constructor() {
        this.menuToggle = document.querySelector('.mobile-menu-toggle');
        this.nav = document.querySelector('nav ul');
        
        if (this.menuToggle && this.nav) {
            this.init();
        }
    }

    init() {
        this.menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.menuToggle.classList.toggle('active');
            this.nav.classList.toggle('active');
            document.body.style.overflow = this.nav.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('nav') && this.nav.classList.contains('active')) {
                this.menuToggle.classList.remove('active');
                this.nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
} 