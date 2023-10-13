
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('imageDropdown');
    const dropAreas = document.querySelectorAll('.dropArea');
    const displayedImage = document.getElementById('displayedImage');

    dropdown.addEventListener('change', function () {
        const selectedImage = dropdown.value;
        displayedImage.src = selectedImage;
    });

    dropAreas.forEach((dropArea, index) => {
        dropArea.addEventListener('dragover', function (event) {
            event.preventDefault(); // Förhindra standarddrag-och-släpp-beteende
        });

        dropArea.addEventListener('drop', function (event) {
            event.preventDefault(); // Förhindra standarddrag-och-släpp-beteende
            const file = event.dataTransfer.files[0];
            const reader = new FileReader();

            reader.onload = function () {
                displayedImage.src = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        });
    });
});