 document.addEventListener('DOMContentLoaded', function() {
        // Ambil elemen-elemen yang diperlukan
        const clickableImages = document.querySelectorAll('.clickable-image');
        const modal = document.getElementById('certificateModal');
        const modalImage = document.getElementById('certificateImage');
        const modalTitle = document.getElementById('certificateModalLabel');
        const imageLoader = document.getElementById('imageLoader');

        // Tambahkan event listener untuk setiap gambar sertifikat
        clickableImages.forEach(function(image) {
            image.addEventListener('click', function() {
                // Ambil data dari atribut gambar yang diklik
                const imageSrc = this.getAttribute('data-image-src');
                const imageTitle = this.getAttribute('data-image-title');
                const imageAlt = this.getAttribute('data-image-alt');

                // Show loading
                showLoading();

                // Set konten modal
                modalTitle.innerHTML = '<i class="bi bi-award-fill text-warning me-2"></i>' + imageTitle;
                
                // Load image
                const img = new Image();
                img.onload = function() {
                    modalImage.src = imageSrc;
                    modalImage.alt = imageAlt;
                    
                    hideLoading();
                };
                img.onerror = function() {
                    hideLoading();
                    alert('Gagal memuat gambar sertifikat');
                };
                img.src = imageSrc;

                // Tampilkan modal
                const bootstrapModal = new bootstrap.Modal(modal);
                bootstrapModal.show();
            });
        });

        // Fungsi untuk menampilkan loading
        function showLoading() {
            imageLoader.classList.remove('d-none');
            modalImage.style.opacity = '0.3';
        }

        // Fungsi untuk menyembunyikan loading
        function hideLoading() {
            imageLoader.classList.add('d-none');
            modalImage.style.opacity = '1';
        }

        // Reset modal ketika ditutup
        modal.addEventListener('hidden.bs.modal', function() {
            modalImage.src = '';
            modalImage.alt = '';
            modalTitle.innerHTML = '<i class="bi bi-award-fill text-warning me-2"></i>Certificate View';
            hideLoading();
        });

        // Keyboard shortcut untuk menutup modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                bootstrap.Modal.getInstance(modal).hide();
            }
        });
    });
