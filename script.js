// Initialize Vanta.js 3D Background (Networking/Nodes effect)
document.addEventListener('DOMContentLoaded', () => {
    // Check if vanta is loaded successfully
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#hero",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00A1E0, // Matching Salesforce Blue
            backgroundColor: 0x0a0e17,
            points: 15.00,
            maxDistance: 24.00,
            spacing: 18.00
        });
    }

    // GSAP Scroll Animations Initialization
    gsap.registerPlugin(ScrollTrigger);

    // Fade in text elements beautifully on scroll
    const reveals = document.querySelectorAll('.gs-reveal');

    reveals.forEach((element) => {
        gsap.fromTo(element, 
            { 
                y: 60, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Animation fires when element is 85% from top of viewport
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Staggered reveal for skills specifically
    gsap.from(".skill-card", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 75%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Wait 0.2s between each card
        ease: "power2.out"
    });

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
