/*====================================
 NovaCore Studio V2
 script.js
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* Sticky Header */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    /* Smooth Scroll */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /* Scroll Animation */

    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.20
    });

    items.forEach(item => observer.observe(item));

    /* Counter Animation */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.dataset.target;

            const current = +counter.innerText;

            const increment = Math.ceil(target / 100);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

});

/* Back To Top */

const backTop = document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
