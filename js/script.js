document.addEventListener('DOMContentLoaded', function() {
    var textContainer = document.querySelector('.text-container');
    var readMoreButton = textContainer.querySelector('.read-more');

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Toggle 'expanded' class based on scroll position
    function toggleReadMore() {
        if (isElementInViewport(textContainer)) {
            textContainer.classList.add('expanded');
            readMoreButton.style.display = 'inline-block';
        } else {
            textContainer.classList.remove('expanded');
            readMoreButton.style.display = 'none';
        }
    }

    // Initial check on page load
    toggleReadMore();

    // Check on scroll
    window.addEventListener('scroll', toggleReadMore);

    // Click event for 'Read More' button
    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        textContainer.classList.toggle('expanded');
        if (textContainer.classList.contains('expanded')) {
            readMoreButton.textContent = 'Read Less';
        } else {
            readMoreButton.textContent = 'Read More';
        }
    });
});