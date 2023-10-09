//Initial Variable declarations
const moves = document.getElementById("moves");
const container = document.querySelector(".container");
const startButton = document.getElementById("start-button");
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");
let currentElement = "";
let movesCount, imagesArr = [];

const isTouchDevice = () => {
    try{
        //TouchEvent (it could fail for desktops and throw err)
        document.createEvent("TouchEvent");
        return true;
    }
    catch (e) {
        return false;
    }
};

//Random number for image
const randomNumber = () => Math.floor(Math.random() * 8) + 1;

//Get row and column value from data-position
const getCoords = (element) => {
    const [row, col] = element.getAttribute("data-position").split("_");
    return [parseInt(row), parseInt(col)];
};

//row1, col1 are image co-ordinates while row2 and col2 are blank image co-ordinates
const checkAdjacent = (row1, row2, col1, col2) => {
    if(row1 == row2){
        //left/right
        if(col2 == col1 - 1 || col2 == col1 + 1){
            return true;
        }
    }else if(col1 == col2){
        //up/down
        if(row2 == row1 - 1 || row2 == row1 + 1){
            return true;
        }
    } 
    return false;
};

//Fill array with random value for images
const randomImages = () => {
    while(imagesArr.length < 8){
        let randomVal = randomNumber();
        if(!imagesArr.includes(randomVal)){
            imagesArr.push(randomVal);
        }
    }
    imagesArr.push(9);
};

//Generate Grid
const gridGenerator = () => {
    let count = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let div = document.createElement("div");
            div.setAttribute("data-position", `${i}_${i}`);
            div.addEventListener("click", selectImage);
            div.classList.add("image-container");
            div.innerHTML = `<img src="image_part_00${imagesArr[count]}.png" class="image ${imagesArr[count]==9 ? "target" : ""}" data index=${imagesArr[count]} />`;
            count += 1;
            container.appendChild(div);
        }
    }
};


//Start button click should display the container
startButton.addEventListener("click", () => {
    container.classList.remove("hide");
    coverScreen.classList.add("hide");
    container.innerHTML = "";
    imagesArr = [];
    randomImages();
    gridGenerator();
    movesCount = 0;
    moves.innerText = `Moves: ${movesCount}`
});

//Display start screen first
window.onload = () => {
    coverScreen.classList.remove("hide");
}
