// Get reference to the main image element
const mainImage = document.getElementById('main-image');

// Get all gallery thumbnail images
const thumbnails = document.querySelectorAll('.gallery img');

// Add click listener to each thumbnail
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // Update the main image to the clicked thumbnail
        mainImage.src = this.src;
        mainImage.alt = this.alt;
    });
});
