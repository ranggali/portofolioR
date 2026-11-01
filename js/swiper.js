// Initialise every project slider separately and let visitors enlarge a screenshot.
document.addEventListener('DOMContentLoaded', function () {
    var viewerEl = document.getElementById('imageViewerModal');
    var viewerImg = document.getElementById('imageViewerImage');
    var viewerTitle = document.getElementById('imageViewerTitle');
    var viewer = viewerEl ? new bootstrap.Modal(viewerEl) : null;

    document.querySelectorAll('.project-slider').forEach(function (el) {
        // Arrows are added here so the HTML stays short.
        var prev = document.createElement('div');
        prev.className = 'swiper-button-prev';
        var next = document.createElement('div');
        next.className = 'swiper-button-next';
        el.appendChild(prev);
        el.appendChild(next);

        new Swiper(el, {
            slidesPerView: 1,
            grabCursor: true,
            pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
            navigation: { prevEl: prev, nextEl: next },
            keyboard: { enabled: true },
            on: {
                // Swiper only fires "click" when the pointer was not dragged.
                click: function (swiper, event) {
                    var img = event.target.closest('img');
                    if (!img || !viewer) return;
                    viewerImg.src = img.currentSrc || img.src;
                    viewerImg.alt = img.alt;
                    viewerTitle.textContent = img.alt;
                    viewer.show();
                }
            }
        });
    });
});
