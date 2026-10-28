
/* Search Blog Posts */
const searchInput = document.getElementById("searchInput");
const blogItems = document.querySelectorAll(".blog-item");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    let visibleCount = 0;

    blogItems.forEach(function (item) {
        const blogText = item.textContent.toLowerCase();

        if (blogText.includes(searchText)) {
            item.classList.remove("d-none");
            visibleCount++;
        } else {
            item.classList.add("d-none");
        }
    });

    noResults.classList.toggle("d-none", visibleCount > 0);
});

/* Read More Buttons */
const readButtons = document.querySelectorAll(".read-btn");

readButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const extraText = button.previousElementSibling;

        extraText.classList.toggle("d-none");

        if (extraText.classList.contains("d-none")) {
            button.textContent = "Read More";
        } else {
            button.textContent = "Read Less";
        }
    });
});
