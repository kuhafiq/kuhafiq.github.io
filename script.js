// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Handle "View My Artwork" button navigation
    const viewWorkButton = document.getElementById("view-work-btn");
    if (viewWorkButton) {
        viewWorkButton.addEventListener("click", () => {
            window.location.href = "showcase.html";
        });
    }

    // Select gallery items and lightbox elements
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Track the current image index
    let currentIndex = 0;

    // Open lightbox with the clicked image
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index; // Update current index
            lightboxImg.src = item.src; // Set the lightbox image source
            lightbox.style.display = 'flex'; // Show the lightbox
        });
    });

    // Navigate to the previous image
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (galleryItems.length > 1) {
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; // Loop to last if at first
                lightboxImg.src = galleryItems[currentIndex].src;
            }
        });
    }

    // Navigate to the next image
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (galleryItems.length > 1) {
                currentIndex = (currentIndex + 1) % galleryItems.length; // Loop to first if at last
                lightboxImg.src = galleryItems[currentIndex].src;
            }
        });
    }

    // Close the lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', (event) => {
            if (event.target !== lightboxImg && event.target !== prevButton && event.target !== nextButton) {
                lightbox.style.display = 'none'; // Hide the lightbox
            }
        });
    }
});
