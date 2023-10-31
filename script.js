
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('imageDropdown');
    const dropAreas = document.querySelectorAll('.dropArea');
    const displayedImage = document.getElementById('displayedImage');

    dropdown.addEventListener('change', function () {
        const selectedImage = dropdown.value;
        displayedImage.src = selectedImage;
    });

});
document.addEventListener('DOMContentLoaded', function () {
    const imageDropdown = document.getElementById('imageDropdown');
    const displayedImage = document.getElementById('displayedImage');

    imageDropdown.addEventListener('change', function () {
        const selectedImage = imageDropdown.value;
        displayedImage.src = selectedImage;
    });

    // Nu kan du också använda detta element som en droppzon
    imageDropdown.addEventListener('dragover', function (event) {
        event.preventDefault();
    });

    imageDropdown.addEventListener('drop', function (event) {
        event.preventDefault();
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