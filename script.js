
const roomDropdown = document.getElementById("room");
const div2 = document.getElementById("div2");
var draggedItem = null;
var placedInRoom = false;
const largeFurniture = document.getElementById("drag3");
const toBig = document.getElementById("drag4");
const tooBig = document.getElementById("drag5");
const toooBig = document.getElementById("drag6");
// Skapa en räknare för att hantera nya bilder
let imageCounter = 0;

document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var image = document.getElementById(data);
    var xPos = event.clientX;
    var yPos = event.clientY;
    image.style.position = 'absolute';
    image.style.left = xPos + 'px';
    image.style.top = yPos + 'px';
    document.body.appendChild(image); 
});


function allowDrop(ev) {
    ev.preventDefault();
    // Lägger till en global event listener för hela dokumentet
    document.addEventListener('dragover', function (event) {
        event.preventDefault();
    });
}


function drag(ev) {
    draggedItem = ev.target;
    ev.dataTransfer.setData("text", ev.target.id);
    if (draggedItem.src.includes("soffa1.png")) {
        draggedItem.style.width = '250px'; // Ändra storlek på soffan vid dragstart
    }
}

function resetFurnitureList() {
    if (placedInRoom) {
        var roomImages = document.querySelectorAll('#room-container img');
        roomImages.forEach(function(img) {
            img.parentNode.removeChild(img);
        });
        placedInRoom = false;
    }
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if (draggedItem && !placedInRoom) {
        var roomImageContainer = document.getElementById('roomImageContainer');

        img.style.position = 'absolute';
        img.style.left = (ev.clientX - roomImageContainer.getBoundingClientRect().left) + 'px';
        img.style.top = (ev.clientY - roomImageContainer.getBoundingClientRect().top) + 'px';

        roomImageContainer.appendChild(img);
        placedInRoom = true;

        draggedItem = null;
        
    }
}

// Lägg till eventlyssnare på bilderna för att lyssna på drag-händelser
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', true);

    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

// Lägg till eventlyssnare för att tillåta släpp på hela dokumentet
document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data);

    // Uppdatera positionen för det släppta elementet
    draggedElement.style.position = 'absolute';
    draggedElement.style.left = (event.clientX - draggedElement.clientWidth / 2) + 'px';
    draggedElement.style.top = (event.clientY - draggedElement.clientHeight / 2) + 'px';
});

function showText(infoId) {
    var infoDiv = document.getElementById(infoId);
    var textDivs = document.querySelectorAll('.text-box > div');

    textDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    infoDiv.style.display = 'block';
}

function changeRoomColor(color) {
    const roomImage = document.getElementById('roomImage');

    // Om färgen är grön, byt ut bilden
    if (color === 'green') {
        roomImage.src = 'bilder/homestylingny1.png';
        roomImage.style.width = '50%'; // Justera bredden 
        roomImage.style.height = 'auto'; // Anpassa höjden 
      
    }
}

function visaMobler() {
    var moblerDiv = document.getElementById("mobler");
    moblerDiv.classList.remove("hidden");
}

   function changeImage(imagePath) {
        var roomImage = document.getElementById('roomImage');
        roomImage.src = imagePath;
    }