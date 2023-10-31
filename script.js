
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
    document.body.appendChild(image); // Du kan ändra detta beroende på var du vill att bilden ska hamna
});


function allowDrop(ev) {
    ev.preventDefault();
    // Lägg till en global event listener för hela dokumentet
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

        var img = document.getElementById(data);
        img.style.width = '250px'; // Ändra storlek på bilden som släpp

        img.style.position = 'absolute';
        img.style.left = (ev.clientX - roomImageContainer.getBoundingClientRect().left) + 'px';
        img.style.top = (ev.clientY - roomImageContainer.getBoundingClientRect().top) + 'px';

        roomImageContainer.appendChild(img);
        placedInRoom = true;

        draggedItem = null;
        
    }
}


// Hämta rum-elementet
var roomSelect = document.getElementById("room");

// Lyssna på förändringar i dropdown-menyn
roomSelect.addEventListener("change", function() {
    // Hämta vald bildkälla från dropdown-menyn
    var selectedRoom = roomSelect.value;
    // Uppdatera rummets bildkälla
    document.getElementById("roomImage").src = selectedRoom;
});

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



// Justera storleken på den större möbeln
largeFurniture.style.width = "120px"; 
largeFurniture.style.height = "auto"; 

toBig.style.width = "200px"; 
toBig.style.height = "auto"; 

tooBig.style.width = "400px"; 
tooBig.style.height = "auto"; 

toooBig.style.width = "150px"; 
toooBig.style.height = "auto"; 



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
        roomImage.style.width = '50%'; // Justera bredden till passa behovet
        roomImage.style.height = 'auto'; // Anpassa höjden automatiskt
    }
}