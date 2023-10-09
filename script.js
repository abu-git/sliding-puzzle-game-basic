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
