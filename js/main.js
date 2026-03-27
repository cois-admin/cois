document.addEventListener("DOMContentLoaded", () => {
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (header) {
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        }

        if (scrollTopBtn) {
            if (scrollTop > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const headerCallBtn = document.getElementById('headerCallBtn');
    const heroCallBtn = document.getElementById('heroCallBtn');
    const ctaCallBtn = document.getElementById('ctaCallBtn');
    const callPopup = document.getElementById('callPopup');
    const closePopupBtn = document.getElementById('popupCloseBtn');

    function openPopup() {
        if (!callPopup) return;
        callPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        if (!callPopup) return;
        callPopup.classList.remove('active');
        document.body.style.overflow = '';
    }

    function handleCallClick(e) {
        e.preventDefault();
        if (window.innerWidth <= 768) {
            window.location.href = 'tel:+79059768058';
        } else {
            openPopup();
        }
    }

    if (headerCallBtn) headerCallBtn.addEventListener('click', handleCallClick);
    if (heroCallBtn) heroCallBtn.addEventListener('click', handleCallClick);
    if (ctaCallBtn) ctaCallBtn.addEventListener('click', handleCallClick);

    if (closePopupBtn) closePopupBtn.addEventListener('click', closePopup);

    if (callPopup) {
        callPopup.addEventListener('click', function (e) {
            if (e.target === callPopup) {
                closePopup();
            }
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && callPopup && callPopup.classList.contains('active')) {
            closePopup();
        }
    });

});
