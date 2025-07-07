document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");

    window.onload = function () {
        if (preloader) {
            preloader.style.transition = "opacity 0.5s ease";
            preloader.style.opacity = "0";
            
            setTimeout(() => {
                preloader.style.display = "none";
               
            }, 500);
        }
    };

   
});

//ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    
    const problematicSections = document.querySelectorAll(".info-section-with-cards__wrapper, .accessible-trading-tools__wrapper");
    if (problematicSections.length > 0) {
        const strictObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    strictObserver.unobserve(entry.target); 
                }
            });
        }, { 
            
            rootMargin: "-150px 0px 0px 0px",
    threshold: 0.4
        });

        problematicSections.forEach(element => {
            strictObserver.observe(element);
        });
    }

    
    const animation_class = document.querySelectorAll(".stats__wrapper, .advantages__wrapper, .trading-items, .feature-cards__grid, .content-wrapper, .arc__wrapper, .start-journey__content, .testimonials__wrapper, .ad-section, .lesson-highlights, .program-benefits, .circular-info-chart, .payment-methods, .key-features, .gallery__grid, .hero-with-video__wrapper, .trading-section, .community-events__grid, .any-questions, .faq__list");
    if (animation_class.length > 0) {  
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");

                    if (entry.target.classList.contains("stats__wrapper")) {
                        const counters = entry.target.querySelectorAll(".stat-item h3");
                        
                        counters.forEach(counter => {
                            const target = parseInt(counter.textContent.replace('+', ''));
                            let current = 0;
                            const increment = target / 50;
                            const delay = 20;

                            const updateCounter = () => {
                                current += increment;
                                if (current >= target) {
                                    counter.textContent = target + '+';
                                } else {
                                    counter.textContent = Math.ceil(current) + '+';
                                    setTimeout(updateCounter, delay);
                                }
                            };
                            updateCounter();
                        });                 
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { 
            threshold: 0.3,
            
        });

        animation_class.forEach(element => { 
            observer.observe(element);  
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const words = document.querySelectorAll(".we-have__word");
    const sliders = document.querySelectorAll('.testimonials__wrapper');
    const menuButton = document.querySelector(".mobile-btn__menu");
    const headerMenu = document.querySelector(".header-menu");
    const items = document.querySelectorAll('.lesson-highlights__items .lesson-highlights__item');
    const faqItems = document.querySelectorAll('.faq__item');
    const faqTitles = document.querySelectorAll('.faq__title');
    const faqButtons = document.querySelectorAll('.faq__item--btn');
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const placeholders = document.querySelectorAll('.hero-with-video__placeholder');
    const videoPlayBtn = document.querySelector('.hero-with-video__play-button');
    const discordScreensItems = document.querySelectorAll('.discord-screens__item');
    const showMoreButton = document.querySelector('.discord-screens__show-more');
    const tabs = document.querySelectorAll('.tabs-section__tab');
    const panels = document.querySelectorAll('.tabs-section__panel');

    const featureConnectionsItem = document.querySelectorAll('.feature-connections__item');
    const firstRect = featureConnectionsItem[0]?.querySelector('.feature-connections__hover-rect');

    const maxVisibleItems = 4;
    let currentIndex = 0;

    // Word Animation
    if (words.length > 0) {
        words[currentIndex].classList.add("active");

        setInterval(() => {
            words[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % words.length;
            words[currentIndex].classList.add("active");
        }, 3000);
    }

    // Menu
   if (menuButton && headerMenu) {
    menuButton.addEventListener("click", function () {
        headerMenu.classList.toggle("header-menu__active");
        document.body.classList.toggle("no-scroll");
    });
}


    // Slider Testimonials
    if (sliders.length > 0) {
        jQuery(document).ready(function ($) {
            $('.testimonials__wrapper').slick({
                arrows: true,
                prevArrow: `
                    <div class="slick-prev custom-prev" aria-label="Previous">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.64465 2.14085L2.9309 6.50569L7.64465 10.8705C8.11845 11.3093 8.11845 12.018 7.64465 12.4567C7.17084 12.8955 6.40547 12.8955 5.93166 12.4567L0.355353 7.29317C-0.118451 6.85443 -0.118451 6.14571 0.355353 5.70697L5.93166 0.543406C6.40547 0.104672 7.17084 0.104672 7.64465 0.543406C8.1063 0.982141 8.11845 1.70212 7.64465 2.14085Z" fill="white"/>
</svg>

                    </div>
                `,
                nextArrow: `
                    <div class="slick-next custom-next" aria-label="Next">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.355353 2.14085L5.0691 6.50569L0.355354 10.8705C-0.118451 11.3093 -0.11845 12.018 0.355354 12.4567C0.829158 12.8955 1.59453 12.8955 2.06834 12.4567L7.64465 7.29317C8.11845 6.85443 8.11845 6.14571 7.64465 5.70697L2.06834 0.543406C1.59453 0.104672 0.829157 0.104672 0.355353 0.543406C-0.106302 0.982141 -0.118451 1.70212 0.355353 2.14085Z" fill="white"/>
</svg>
                    </div>
                `,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            dots: true,
                            customPaging: function (slider, i) {
                                return `<div class="custom-dot"></div>`;
                            },
                        }
                    }
                ]
            });
        });
    }



    // Lesson Highlights
    if (items.length > 0) {
        if (items.length > 1) {
            items[1].classList.add('lesson-highlights__item--active');
        }

        items.forEach((item) => {
            item.addEventListener('mouseover', function () {
                items.forEach((el) => el.classList.remove('lesson-highlights__item--active'));
                this.classList.add('lesson-highlights__item--active');
            });
        });
    }

 
   
// FAQ
   
     if (faqItems.length > 0) {
        faqItems.forEach((item, index) => {
            if (index >= 6) {
                item.style.display = 'none';
            }
        });
    
        if (faqItems.length <= 6) {
            viewMoreBtn.style.display = 'none';
        }
    
        viewMoreBtn.addEventListener('click', () => {
            faqItems.forEach(item => {
                item.style.display = 'flex';
            });
    
            viewMoreBtn.style.display = 'none';
        });
        faqItems[0].classList.add('faq__item--active');
        
        faqButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                faqItems.forEach(item => item.classList.remove('faq__item--active'));
                faqItems[index].classList.add('faq__item--active');
            });
        });
        
        faqTitles.forEach((title, index) => {
            title.addEventListener('click', () => {
                if (faqItems[index].classList.contains('faq__item--active')) {
                    faqItems[index].classList.remove('faq__item--active');
                } else {
                    faqItems.forEach(item => item.classList.remove('faq__item--active'));
                    faqItems[index].classList.add('faq__item--active');
                }
            });
        });
    }

    // Hero With Video
    if (placeholders.length > 0 && videoPlayBtn) {
        placeholders.forEach(placeholder => {
            videoPlayBtn.addEventListener('click', function () {
                const videoUrl = placeholder.getAttribute('data-video');
                const videoContainer = placeholder.nextElementSibling;
                const videoElement = videoContainer.querySelector('video');

                if (videoElement) {
                    videoElement.querySelector('source').src = videoUrl;
                    videoContainer.style.display = 'block';
                    videoElement.load();
                    videoElement.play();
                    placeholder.style.display = 'none';
                }
            });
        });
    }

    // Discord Screens
    const updateItemsVisibility = () => {
        if (window.innerWidth <= 768) {
            discordScreensItems.forEach((item, index) => {
                if (index >= maxVisibleItems) {
                    item.classList.add('hidden');
                } else {
                    item.classList.remove('hidden');
                }
            });
            if (showMoreButton) {
                showMoreButton.style.display = 'block';
            }
        } else {
            discordScreensItems.forEach(item => item.classList.remove('hidden'));
            if (showMoreButton) {
                showMoreButton.style.display = 'none';
            }
        }
    };

    if (showMoreButton) {
        showMoreButton.addEventListener('click', () => {
            discordScreensItems.forEach(item => item.classList.remove('hidden'));
            showMoreButton.style.display = 'none';
        });
    }

    window.addEventListener('resize', updateItemsVisibility);
    updateItemsVisibility();

    // Tabs
    if (tabs.length > 0 && panels.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                document.getElementById(target).classList.add('active');
            });
        });
    }


    // feature-connections hover

    if (firstRect) {
        firstRect.remove();
    }

    featureConnectionsItem.forEach(item => {
        const hoverRect = item.querySelector('.feature-connections__hover-rect');

        if (hoverRect) {
            item.addEventListener('mouseenter', () => {
                hoverRect.style.display = 'none';
            });

            item.addEventListener('mouseleave', () => {
                hoverRect.style.display = 'block';
            });
        }
    });   
    
    
    
    
    document.querySelectorAll('.testimonial-card').forEach(card => {
        const viewMoreBtn = card.querySelector('.view-more__testimonial');
        if (viewMoreBtn) {
            const shortText = card.querySelector('.short-text');
            const fullText = card.querySelector('.full-text');
    
            viewMoreBtn.addEventListener('click', () => {
                if (fullText.style.display === 'none') {
                    fullText.style.display = 'inline';
                    shortText.style.display = 'none';
                    viewMoreBtn.textContent = 'View Less';
                } else {
                    fullText.style.display = 'none';
                    shortText.style.display = 'inline';
                    viewMoreBtn.textContent = 'View More';
                }
            });
        }
    });

});


// CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.trading-game__images');
    const activeText = document.querySelector('.trading-game__active-text');
    const section = document.querySelector('.trading-game__main');
    const images = document.querySelectorAll('.trading-game__image');
    const textData = document.querySelectorAll('.trading-game__word');
    const totalImages = images.length || 5;
    const totalTextItems = textData.length;

    const initialAngles = [0, 72, 137, 224, 288];
    const initialBeforeRotates = [0, 72, 137, 224, 288];
    const initialTranslateValues = [
        { translateX: '-50%', translateY: '-50%', translateYDistance: '-150px' },
        { translateX: '-72%', translateY: '-50%', translateYDistance: '-130px' },
        { translateX: '-3%', translateY: '-83%', translateYDistance: '-130px' },
        { translateX: '-79%', translateY: '-66%', translateYDistance: '-130px' },
        { translateX: '-50%', translateY: '-50%', translateYDistance: '-130px' }
    ];
    const initialFixedStyles = [
        { top: '-44px', left: '-71px', width: '180px', height: '130px', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'134\' viewBox=\'0 0 150 134\' fill=\'none\'%3E%3Cpath d=\'M61.182 125.329C67.2596 135.846 82.4538 135.846 88.5314 125.329L147.047 24.073C153.124 13.5561 145.527 0.409897 133.372 0.409897H16.3416C4.18631 0.409897 -3.41078 13.556 2.66687 24.073L61.182 125.329Z\' fill=\'white\' fill-opacity=\'0.45\'/%3E%3C/svg%3E")' },
        { top: '-44px', left: '-69px', width: '180px', height: '130px', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'134\' viewBox=\'0 0 150 134\' fill=\'none\'%3E%3Cpath d=\'M61.182 125.329C67.2596 135.846 82.4538 135.846 88.5314 125.329L147.047 24.073C153.124 13.5561 145.527 0.409897 133.372 0.409897H16.3416C4.18631 0.409897 -3.41078 13.556 2.66687 24.073L61.182 125.329Z\' fill=\'white\' fill-opacity=\'0.45\'/%3E%3C/svg%3E")' },
        { top: '-48px', left: '-80px', width: '180px', height: '130px', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'134\' viewBox=\'0 0 150 134\' fill=\'none\'%3E%3Cpath d=\'M61.182 125.329C67.2596 135.846 82.4538 135.846 88.5314 125.329L147.047 24.073C153.124 13.5561 145.527 0.409897 133.372 0.409897H16.3416C4.18631 0.409897 -3.41078 13.556 2.66687 24.073L61.182 125.329Z\' fill=\'white\' fill-opacity=\'0.45\'/%3E%3C/svg%3E")' },
        { top: '-48px', left: '-64px', width: '180px', height: '130px', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'134\' viewBox=\'0 0 150 134\' fill=\'none\'%3E%3Cpath d=\'M61.182 125.329C67.2596 135.846 82.4538 135.846 88.5314 125.329L147.047 24.073C153.124 13.5561 145.527 0.409897 133.372 0.409897H16.3416C4.18631 0.409897 -3.41078 13.556 2.66687 24.073L61.182 125.329Z\' fill=\'white\' fill-opacity=\'0.45\'/%3E%3C/svg%3E")' },
        { top: '-37px', left: '-59px', width: '180px', height: '130px', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'150\' height=\'134\' viewBox=\'0 0 150 134\' fill=\'none\'%3E%3Cpath d=\'M61.182 125.329C67.2596 135.846 82.4538 135.846 88.5314 125.329L147.047 24.073C153.124 13.5561 145.527 0.409897 133.372 0.409897H16.3416C4.18631 0.409897 -3.41078 13.556 2.66687 24.073L61.182 125.329Z\' fill=\'white\' fill-opacity=\'0.45\'/%3E%3C/svg%3E")' }
    ];
    const swappableStyles = [
        { backgroundSize: '70%', opacity: 1 },
        { backgroundSize: '70%', opacity: 0.8 },
        { backgroundSize: '65%', opacity: 0.6 },
        { backgroundSize: '70%', opacity: 0.4 },
        { backgroundSize: '70%', opacity: 0.2 }
    ];
    const topIndices = [0, 4, 3, 2, 1];

    // Calculate rotation differences between consecutive positions
    const rotationDifferences = initialAngles.map((angle, idx) => {
        const nextIdx = (idx + 1) % totalImages;
        const nextAngle = initialAngles[nextIdx];
        let diff = (nextAngle - angle + 360) % 360; // Handle wraparound
        return diff;
    });

    // Track rotations
    let cumulativeRotations = initialAngles.slice();
    let unwrappedRotations = initialAngles.slice();
    let activeIndex = 0;
    let totalSteps = 0; // Track the total number of steps taken
    let lastStep = -1; // Track the last step to detect changes

    // Determine if we should animate based on window width
    const shouldAnimate = window.innerWidth <= 1250;

    if (totalTextItems === 0) {
        console.error('No text items found.');
        activeText.textContent = 'No text available';
        return;
    }

    function updateCarousel() {
        carousel.style.transform = `rotate(0deg)`;

        const topIndex = topIndices[activeIndex];

        images.forEach((image, index) => {
            const styleIndex = (index - topIndex + totalImages) % totalImages;
            const swappable = swappableStyles[styleIndex];
            const copyIndex = (index + activeIndex) % totalImages;

            const initialAngle = initialAngles[index];
            const currentRotation = unwrappedRotations[index];
            const normalizedRotation = currentRotation % 360;
            const itemRotate = -normalizedRotation;
            const beforeRotate = -itemRotate;

            const { translateX, translateY, translateYDistance } = initialTranslateValues[copyIndex];
            const transform = `translate(${translateX}, ${translateY}) rotate(${currentRotation}deg) translateY(${translateYDistance}) rotate(${itemRotate}deg)`;
            image.style.transform = transform;

            image.style.setProperty('--before-transform', `rotate(0deg) rotate(${beforeRotate}deg)`);

            const fixed = initialFixedStyles[copyIndex];
            image.style.setProperty('--before-top', fixed.top);
            image.style.setProperty('--before-left', fixed.left);
            image.style.setProperty('--before-width', fixed.width);
            image.style.setProperty('--before-height', fixed.height);
            image.style.setProperty('--before-background-image', fixed.backgroundImage);

            image.style.setProperty('--before-background-size', swappable.backgroundSize);
            image.style.setProperty('--before-opacity', swappable.opacity);
        });

        updateActiveText(topIndex);
    }

    function updateActiveText(topIndex) {
        if (window.innerWidth <= 1250) {
            const textIndex = topIndex % totalTextItems;
            const text = textData[textIndex]?.textContent || 'Fallback Text';
            activeText.textContent = text;
            activeText.style.display = 'block';
            activeText.style.animation = 'none';
            void activeText.offsetWidth;
            activeText.style.animation = 'fadeInOut 1s ease-in-out';
        } else {
            activeText.style.display = 'none';
        }
    }

    function handleScroll() {
        if (window.innerWidth > 1250) return; // No animation for > 1250px

        // Get the section's position and dimensions
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate the scroll progress while the section is fully visible
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        let progress = 0;

        // Determine the scroll range during which the section is fully visible
        // Start: When the section's bottom reaches the viewport's bottom (sectionBottom <= windowHeight)
        // End: When the section's top reaches the viewport's top (sectionTop <= 0)
        const startPoint = windowHeight - sectionHeight; // sectionBottom = windowHeight
        const endPoint = 0; // sectionTop = 0
        const scrollRange = endPoint - startPoint; // Distance over which the section is fully visible

        if (sectionBottom > 0 && sectionTop < windowHeight) {
            // Section is at least partially visible
            if (sectionHeight <= windowHeight) {
                // Section is shorter than the viewport: fully visible as soon as the top enters
                // Progress from 0 (sectionTop = windowHeight) to 1 (sectionTop = 0)
                progress = (windowHeight - sectionTop) / windowHeight;
            } else {
                // Section is taller than the viewport: wait until fully visible
                if (sectionBottom <= windowHeight && sectionTop >= 0) {
                    // Section is fully visible (bottom is in view, top is still in view)
                    progress = (windowHeight - sectionBottom) / scrollRange;
                } else if (sectionTop <= 0) {
                    // Section is starting to leave the viewport
                    progress = 1; // Complete the cycle as soon as the top starts to exit
                }
                // If sectionBottom > windowHeight, progress remains 0 (not fully visible yet)
            }
            progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
        }

        // Map progress to steps (0 to 4, since there are 5 steps in a cycle)
        const stepsPerCycle = totalImages; // 5 steps for a full cycle
        const progressPerStep = 1 / stepsPerCycle; // 0.2 (20% per step)
        const currentStep = Math.floor(progress / progressPerStep); // 0 to 4

        // Only update if the step has changed
        if (currentStep !== lastStep) {
            // Update totalSteps based on the difference
            const stepDifference = currentStep - lastStep;
            totalSteps += stepDifference;

            // Reset rotations to initial state and apply the total steps
            unwrappedRotations = initialAngles.slice();
            for (let step = 0; step < totalSteps; step++) {
                images.forEach((_, index) => {
                    const currentPos = (index + step) % totalImages;
                    const rotationDiff = rotationDifferences[currentPos];
                    unwrappedRotations[index] += rotationDiff;
                });
            }

            // Update cumulative rotations
            images.forEach((_, index) => {
                cumulativeRotations[index] = unwrappedRotations[index] % 360;
            });

            // Update activeIndex based on totalSteps
            activeIndex = totalSteps % totalImages;
            if (activeIndex < 0) activeIndex += totalImages; // Handle negative steps

            updateCarousel();
            lastStep = currentStep;
        }
    }

    function handleSectionEnter() {
        // When the section enters the viewport, reset the lastStep
        lastStep = -1; // Force an update on first scroll
    }

    function handleResize() {
        // Reset to initial state
        unwrappedRotations = initialAngles.slice();
        cumulativeRotations = initialAngles.slice();
        activeIndex = 0;
        totalSteps = 0;
        lastStep = -1;

        // Update carousel to set positions
        updateCarousel();

        // Remove existing scroll listener and re-add based on window width
        window.removeEventListener('scroll', handleScroll);
        if (window.innerWidth <= 1250) {
            window.addEventListener('scroll', handleScroll);
        }
    }

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        // Set up IntersectionObserver to detect section visibility
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    handleSectionEnter();
                    if (window.innerWidth <= 1250) {
                        window.addEventListener('scroll', handleScroll);
                    }
                } else {
                    window.removeEventListener('scroll', handleScroll);
                }
            });
        }, { threshold: 0 });

        // Start observing the section
        observer.observe(section);
    } else {
        // Fallback: Assume the section is always visible and enable scroll handler
        console.warn('IntersectionObserver not supported. Enabling scroll handler by default.');
        if (window.innerWidth <= 1250) {
            window.addEventListener('scroll', handleScroll);
        }
    }

    // Initial update to set default positions
    updateCarousel();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
});

jQuery(document).ready(function ($) {
    // Initialize Slick Slider only on mobile
    const sliders = $('.testimonials-sales__wrapper');
    if (sliders.length > 0) {
        function initSlick() {
            if ($(window).width() < 768) {
                if (!sliders.hasClass('slick-initialized')) {
                    sliders.slick({
                        arrows: true,
                        prevArrow: `
                            <div class="slick-prev custom-prev" aria-label="Previous">
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.64465 2.14085L2.9309 6.50569L7.64465 10.8705C8.11845 11.3093 8.11845 12.018 7.64465 12.4567C7.17084 12.8955 6.40547 12.8955 5.93166 12.4567L0.355353 7.29317C-0.118451 6.85443 -0.118451 6.14571 0.355353 5.70697L5.93166 0.543406C6.40547 0.104672 7.17084 0.104672 7.64465 0.543406C8.1063 0.982141 8.11845 1.70212 7.64465 2.14085Z" fill="white"/>
                                </svg>
                            </div>
                        `,
                        nextArrow: `
                            <div class="slick-next custom-next" aria-label="Next">
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.355353 2.14085L5.0691 6.50569L0.355354 10.8705C-0.118451 11.3093 -0.11845 12.018 0.355354 12.4567C0.829158 12.8955 1.59453 12.8955 2.06834 12.4567L7.64465 7.29317C8.11845 6.85443 8.11845 6.14571 7.64465 5.70697L2.06834 0.543406C1.59453 0.104672 0.829157 0.104672 0.355353 0.543406C-0.106302 0.982141 -0.118451 1.70212 0.355353 2.14085Z" fill="white"/>
                                </svg>
                            </div>
                        `,
                        infinite: true,
                        speed: 300,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        centerMode: false,
                        dots: false,
                    });
                }
            } else {
                if (sliders.hasClass('slick-initialized')) {
                    sliders.slick('unslick');
                }
            }
        }

        // Initialize on page load
        initSlick();

        // Reinitialize on window resize
        $(window).on('resize', initSlick);
    }

    // View More/View Less Functionality
    $('.view-more__testimonial').on('click', function () {
        const $this = $(this);
        const $shortText = $this.siblings('.short-text');
        const $fullText = $this.siblings('.full-text');

        if ($fullText.is(':visible')) {
            $fullText.hide();
            $shortText.show();
            $this.text('View More');
        } else {
            $shortText.hide();
            $fullText.show();
            $this.text('View Less');
        }
    });
});

jQuery(document).ready(function($) {

    // --- Функціональність вкладок курсів (Tabs) ---
    $('.course-tab-button').on('click', function () {
        const $this = $(this);
        const targetId = $this.data('course-target');

        // Видаляємо клас 'active' з усіх кнопок та панелей
        $('.course-tab-button').removeClass('active');
        $('.course-tab-panel').removeClass('active');

        // Додаємо клас 'active' до натиснутої кнопки
        $this.addClass('active');

        // Показуємо відповідну панель вмісту
        const $targetPanel = $(`#${targetId}`);
        $targetPanel.addClass('active');

        // Reset all accordions in the newly active tab to a consistently closed state
        // This is crucial because HTML might start with 'active' but max-height:0
        $targetPanel.find('.js-course-listing').removeClass('active');
        $targetPanel.find('.js-course-listing .section-content').css('max-height', '0px');
        $targetPanel.find('.js-course-listing .section-toggle').removeClass('active');

        // Auto-open the first section in the newly active tab
        const $firstAccordionInNewTab = $targetPanel.find('.js-course-listing:first .section-toggle');
        if ($firstAccordionInNewTab.length) {
             // Trigger click on the first accordion header to open it
             // We don't check hasClass('active') because we just reset everything above.
             $firstAccordionInNewTab.trigger('click');
        }
    });


    // --- Функціональність розгортання/згортання секцій (Accordion) ---
    $('.js-course-listing .section-toggle').on('click', function () {
        const $thisToggle = $(this);
        const $parentListing = $thisToggle.closest('.js-course-listing');
        const $sectionContent = $parentListing.find('.section-content');

        if ($parentListing.hasClass('active')) {
            // If already active, collapse it
            $sectionContent.css('max-height', '0px');
            $parentListing.removeClass('active');
            $thisToggle.removeClass('active');
        } else {
            // If not active, expand it
            // Collapse all other active sections within the SAME tab (accordion behavior)
            const $currentTabPanel = $thisToggle.closest('.course-tab-panel');
            $currentTabPanel.find('.js-course-listing.active').find('.section-content').css('max-height', '0px');
            $currentTabPanel.find('.js-course-listing.active').removeClass('active');
            $currentTabPanel.find('.js-course-listing .section-toggle').removeClass('active');

            // Expand the current section
            $parentListing.addClass('active');
            $thisToggle.addClass('active');
            $sectionContent.css('max-height', $sectionContent.prop('scrollHeight') + 'px');
        }
    });


    // --- Initialization on page load ---

    // 1. Initially activate the first tab.
    // This will trigger its click handler, which in turn will:
    // a) Reset all accordions in the first tab to closed (max-height: 0, no active classes).
    // b) Then, automatically open the first accordion in that tab.
    $('.course-tab-button:first').trigger('click');

    // No other direct accordion initialization is needed here, as it's handled by the tab click.
});