// ==========================================================================
// 1. HTML COMPONENTS (Stored as strings to prevent fetch errors)
// ==========================================================================

const HEADER_HTML = `
<div id="preloader" class="fixed inset-0 bg-white flex items-center justify-center z-[100] transition-opacity duration-500 ease-out">
    <img class="logo-preloader w-48 h-auto" src="assets/img/indus-logo.png" alt="Indus Logo" onerror="this.src='https://placehold.co/192x100/ffffff/333333?text=Indus+Logo'">
</div>
<div id="cursor-dot"></div>
<div id="cursor-outline"></div>

<nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <div class="flex-shrink-0 flex items-center">
                <a href="index.html">
                    <img class="h-14 w-auto" src="assets/img/indus-logo.png" alt="Indus Footwear" onerror="this.src='https://placehold.co/150x56/ffffff/333333?text=Indus+Logo'">
                </a>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8 items-center" id="desktop-menu">
                <a href="index.html" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-cyan-500 hover:text-gray-900 transition-all duration-300">Home</a>
                
                <!-- Shop Dropdown -->
                <div class="relative group">
                    <div class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 group-hover:border-cyan-500 group-hover:text-gray-900 transition-all duration-300 cursor-default">
                        <span>Shop</span>
                        <svg class="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                    </div>
                    <div class="absolute left-0 z-10 mt-0 w-auto bg-white shadow-lg rounded-md hidden group-hover:block ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150">
                        <div class="flex">
                            <div class="p-4 border-r border-gray-100">
                                <h3 class="font-semibold text-gray-900 mb-2">Men</h3>
                                <a href="men-pu-slippers.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">PU Slippers</a>
                                <a href="men-eva-sports.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">EVA & Sports</a>
                                <a href="men-hawai-fabrication.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Hawai & Fabrication</a>
                                <a href="safety-shoes.html" class="block px-4 py-2 text-sm text-cyan-600 font-semibold hover:bg-gray-100 hover:text-cyan-700 rounded-md">Safety Shoes</a>
                            </div>
                            <div class="p-4 border-r border-gray-100">
                                <h3 class="font-semibold text-gray-900 mb-2">Women</h3>
                                <a href="women-pu-slippers.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">PU Slippers</a>
                                <a href="women-eva.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">EVA (Sandals)</a>
                                <a href="women-hawai-fabrication.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Hawai & Fabrication</a>
                            </div>
                            <div class="p-4">
                                <h3 class="font-semibold text-gray-900 mb-2">Kids</h3>
                                <a href="school-shoes.html" class="block px-4 py-2 text-sm text-cyan-600 font-semibold hover:bg-gray-100 hover:text-cyan-700 rounded-md">School Shoes</a>
                                <a href="kids-pu-slippers.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">PU Slippers</a>
                                <a href="kids-eva-sports.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">EVA & Sports</a>
                                <a href="kids-hawai-fabrication.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Hawai & Fab</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Brands Dropdown -->
                <div class="relative group">
                    <div class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 group-hover:border-cyan-500 group-hover:text-gray-900 transition-all duration-300 cursor-default">
                        <span>Brands</span>
                        <svg class="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="absolute left-0 z-10 mt-0 w-48 bg-white shadow-lg rounded-md hidden group-hover:block ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150">
                        <div class="py-1">
                            <a href="indus-gold.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Indus Gold</a>
                            <a href="indus-lite.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Induslite</a>
                            <a href="indus-prime.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Indus Prime</a>
                            <a href="indus-originals.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Indus Originals</a>
                        </div>
                    </div>
                </div>

                <a href="about.html" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-cyan-500 hover:text-gray-900 transition-all duration-300">About Us</a>
                <a href="contact.html" class="nav-link inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-cyan-500 hover:text-gray-900 transition-all duration-300">Contact Us</a>
                
                <a href="https://wa.me/+919251954762" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-cyan-700 transition-all duration-300 shadow-lg ml-4">
                    <span>Enquire Now</span>
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex items-center sm:hidden">
                <button type="button" id="mobile-menu-button" class="ml-3 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="sm:hidden hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
            <a href="index.html" class="mobile-link block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">Home</a>
            
            <!-- Mobile Shop Dropdown -->
            <button class="mobile-menu-dropdown-toggle flex justify-between items-center w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">
                <span>Shop</span>
                <svg class="w-5 h-5 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </button>
            <div class="mobile-menu-dropdown-content hidden mt-1 space-y-1 bg-gray-50">
                <a href="men-pu-slippers.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Men's PU Slippers</a>
                <a href="men-eva-sports.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Men's EVA & Sports</a>
                <a href="men-hawai-fabrication.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Men's Hawai & Fab</a>
                <a href="safety-shoes.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Safety Shoes</a>
                <a href="women-pu-slippers.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Women's PU</a>
                <a href="women-eva.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Women's EVA</a>
                <a href="women-hawai-fabrication.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Women's Hawai</a>
                <a href="school-shoes.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">School Shoes</a>
                <a href="kids-pu-slippers.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Kids PU Slippers</a>
                <a href="kids-eva-sports.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Kids EVA</a>
                <a href="kids-hawai-fabrication.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Kids Hawai</a>
            </div>

            <!-- Mobile Brands Dropdown -->
            <button class="mobile-menu-dropdown-toggle flex justify-between items-center w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">
                <span>Brands</span>
                <svg class="w-5 h-5 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 8.293a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </button>
            <div class="mobile-menu-dropdown-content hidden mt-1 space-y-1 bg-gray-50">
                <a href="indus-gold.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Indus Gold</a>
                <a href="indus-lite.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Induslite</a>
                <a href="indus-prime.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Indus Prime</a>
                <a href="indus-originals.html" class="block pl-8 pr-4 py-2 text-sm text-gray-600">Indus Originals</a>
            </div>

            <a href="about.html" class="mobile-link block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">About Us</a>
            <a href="contact.html" class="mobile-link block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50">Contact Us</a>
        </div>
    </div>
</nav>`;

const FOOTER_HTML = `
<footer class="bg-white border-t border-gray-200 mt-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-start mb-8">
            <img class="h-16 w-auto" src="assets/img/indus-logo.png" alt="Indus Footwear" onerror="this.src='https://placehold.co/200x64/ffffff/333333?text=Indus+Logo'">
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <h3 class="text-sm font-semibold text-cyan-600 tracking-wider uppercase">Shop by Gender</h3>
                <ul class="mt-4 space-y-4">
                    <li><a href="men.html" class="text-base text-gray-600 hover:text-gray-900">Men</a></li>
                    <li><a href="women.html" class="text-base text-gray-600 hover:text-gray-900">Women</a></li>
                    <li><a href="kids.html" class="text-base text-gray-600 hover:text-gray-900">Kids</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-cyan-600 tracking-wider uppercase">Shop by Brand</h3>
                <ul class="mt-4 space-y-4">
                    <li><a href="indus-gold.html" class="text-base text-gray-600 hover:text-gray-900">Indus Gold</a></li>
                    <li><a href="indus-lite.html" class="text-base text-gray-600 hover:text-gray-900">Induslite</a></li>
                    <li><a href="indus-prime.html" class="text-base text-gray-600 hover:text-gray-900">Indus Prime</a></li>
                    <li><a href="indus-originals.html" class="text-base text-gray-600 hover:text-gray-900">Indus Originals</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-cyan-600 tracking-wider uppercase">Support</h3>
                <ul class="mt-4 space-y-4">
                    <li><a href="contact.html" class="text-base text-gray-600 hover:text-gray-900">Contact Us</a></li>
                    <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">FAQ</a></li>
                    <li><a href="#" class="text-base text-gray-600 hover:text-gray-900">Track Order</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-cyan-600 tracking-wider uppercase">Follow Us</h3>
                <div class="flex space-x-6 mt-4">
                    <a href="https://www.facebook.com/indusfootprints" class="text-gray-500 hover:text-cyan-600"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg></a>
                    <a href="https://www.instagram.com/indusfootwear/" class="text-gray-500 hover:text-cyan-600"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm6.5-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" clip-rule="evenodd" /></svg></a>
                </div>
            </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-8 text-center">
            <p class="text-base text-gray-500">&copy; 2024 Indus Footprints Limited. All rights reserved.</p>
        </div>
    </footer>
`;

// ==========================================================================
// 2. GLOBAL HELPERS (Image Loader)
// ==========================================================================
window.carouselImageLoaded = function() {
    const event = new Event('carousel-image-loaded');
    window.dispatchEvent(event);
};

// ==========================================================================
// 3. MAIN LOGIC (DOM Ready)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- A. INJECT HEADER & FOOTER ---
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (headerPlaceholder) headerPlaceholder.innerHTML = HEADER_HTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

    // --- B. PRELOADER & HERO BANNER ---
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const heroBanner = document.getElementById('hero-banner');
        
        if (preloader) {
            preloader.classList.add('opacity-0');
            setTimeout(() => preloader.classList.add('hidden'), 800);
        }
        if (heroBanner) {
            heroBanner.classList.remove('opacity-0');
            heroBanner.classList.remove('translate-y-5');
        }
    }, 500);

    // --- C. ACTIVE LINK HIGHLIGHTING ---
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    document.querySelectorAll('#desktop-menu .nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.remove('border-transparent', 'text-gray-500');
            link.classList.add('border-cyan-500', 'text-gray-900');
        }
    });

    document.querySelectorAll('#mobile-menu .mobile-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.remove('border-transparent', 'text-gray-600');
            link.classList.add('border-cyan-500', 'bg-cyan-50', 'text-cyan-700');
        }
    });

    // --- D. MOBILE MENU TOGGLE ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- E. DROPDOWN ACCORDION (Mobile) ---
    const dropdownToggles = document.querySelectorAll('.mobile-menu-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('svg');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        });
    });

    // --- F. CUSTOM CURSOR LOGIC ---
    const dot = document.getElementById('cursor-dot');
    const out = document.getElementById('cursor-outline');
    if (dot && out) {
        window.addEventListener('mousemove', (e) => {
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
            out.style.left = `${e.clientX}px`;
            out.style.top = `${e.clientY}px`;
        });
        window.addEventListener('mousedown', () => {
            dot.classList.add('clicked');
            out.classList.add('clicked');
        });
        window.addEventListener('mouseup', () => {
            dot.classList.remove('clicked');
            out.classList.remove('clicked');
        });

        // Add hover effect to clickable elements
        document.querySelectorAll('a, button, input, select, .cursor-pointer').forEach(el => {
            el.addEventListener('mouseenter', () => {
                dot.classList.add('hover-link');
                out.classList.add('hover-link');
            });
            el.addEventListener('mouseleave', () => {
                dot.classList.remove('hover-link');
                out.classList.remove('hover-link');
            });
        });
    }

    // --- G. CAROUSEL LOGIC ---
    const carousel = document.getElementById('banner-carousel');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dotsContainer = document.getElementById('carousel-dots-container');
        let currentIndex = 0;
        let imagesLoaded = 0;
        const images = carousel.querySelectorAll('img');

        if (slides.length > 0) {
            // Create Dots
            slides.forEach((_, i) => {
                const dotBtn = document.createElement('button');
                dotBtn.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
                dotBtn.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dotBtn);
            });
            
            const dots = dotsContainer.querySelectorAll('.carousel-dot');

            function goToSlide(index) {
                if (index < 0) index = slides.length - 1;
                if (index >= slides.length) index = 0;
                
                carousel.querySelector('.carousel-slider').style.transform = `translateX(-${index * 100}%)`;
                currentIndex = index;
                
                dots.forEach(d => d.classList.remove('active'));
                if (dots[currentIndex]) dots[currentIndex].classList.add('active');
                
                updateHeight();
                resetAutoPlay();
            }

            function updateHeight() {
                if (slides[currentIndex]) {
                    const h = slides[currentIndex].offsetHeight;
                    if(h > 0) carousel.style.height = `${h}px`;
                }
            }

            let autoPlay = setInterval(() => goToSlide(currentIndex + 1), 4000);

            function resetAutoPlay() {
                clearInterval(autoPlay);
                autoPlay = setInterval(() => goToSlide(currentIndex + 1), 4000);
            }

            // Check image load status
            function checkImages() {
                imagesLoaded++;
                if (imagesLoaded >= images.length) {
                    updateHeight();
                    window.addEventListener('resize', updateHeight);
                }
            }

            // Listen to all carousel images
            images.forEach(img => {
                if (img.complete) {
                    checkImages();
                } else {
                    img.onload = checkImages;
                    img.onerror = checkImages;
                }
            });
            
            // Fallback to force height update
            setTimeout(() => {
                 if(imagesLoaded < images.length) updateHeight();
            }, 500);
        }
    }

    // --- H. FILTER/SORT LOGIC (Generic) ---
    const sortDropdown = document.getElementById('sort-dropdown');
    const filterMsg = document.getElementById('filter-message');
    const grid = document.getElementById('product-grid');
    
    if(sortDropdown && filterMsg && grid) {
        sortDropdown.addEventListener('change', () => {
            filterMsg.classList.remove('hidden');
            grid.classList.add('opacity-50');
            setTimeout(() => {
                filterMsg.classList.add('hidden');
                grid.classList.remove('opacity-50');
            }, 1000);
        });
    }
});