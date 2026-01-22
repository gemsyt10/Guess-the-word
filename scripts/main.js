/*==================
       DOM
==================*/
const enterBtn = document.getElementById("enter");
const input = document.getElementById("word-input"); 
const playBtn = document.getElementById("go-btn");
const container = document.querySelector(".container-words");
const wordSymbols = document.querySelector("#word-symbols")
import { words } from "./module.js"
function getRandomWord(array=words, container){
    let randomWord = array[Math.floor(Math.random() * array.length)];
    randomWord = Array.from(randomWord)
    JSON.stringify(sessionStorage.setItem("word", randomWord))
    return randomWord
}
let word;
playBtn.addEventListener("click", () => {
    container.innerHTML = ' '
    word =  getRandomWord(words, container)
    wordSymbols.textContent = `Всего букв: ${word.length} `
    word.forEach((el,i) => {
        const wordel = el
        const elementel = `<div id="el-${i}" class="element" name="${el}">?</div>` 
        container.insertAdjacentHTML("beforeend", elementel)
     });
})
enterBtn.addEventListener("click", ()=> {
    const myWord = Array.from(input.value)
    let wordElement;
        for(let k = 0; k != word.length; k++) {
            wordElement = document.getElementById(`el-${k}`)
        if(word == myWord) {
        }else if(myWord[k] == word[k] && myWord.length >= 3) {
           wordElement.style.backgroundColor = "#5CFF42";
           wordElement.style.borderColor = "#66CB00";
         }else if(myWord.includes(word[k])) {
            wordElement.style.backgroundColor = "yellow";
            wordElement.style.borderColor = "orange";
        }else{
            wordElement.style.backgroundColor = "#FF363C";
            wordElement.style.borderColor = "#E9001D"
        }
        if(k == word.length) break;
        }
});
