/* const colors = [                                    SIMPLE CODE
    "Green",
    "Red",
    "rgba(133,122,200)",
    "#f15025",
];

const btn = document.getElementById("button-el");
const color = document.getElementById("color-el");

btn.addEventListener("click", function() {
    // get random number betwen 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber]; 
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
} */


// HEX CODE
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("button-el");
const color = document.querySelector(".color-el");

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.innerHTML = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}