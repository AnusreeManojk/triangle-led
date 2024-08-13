
const Obj = {
    row: "Enter the rows:",
    buttons: [
        {
            btnCont: "Start",
            id: "start"
        },
        {
            btnCont: "Stop",
            id: "stop"
        }
    ],
    delay: "Delay:"
};

const container = document.querySelector(".container");
const rowInput = document.querySelector(".row-input");
const rowSpan = document.createElement("span");
rowInput.appendChild(rowSpan);
rowSpan.innerHTML = Obj.row;

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Number of rows";
rowInput.appendChild(input);

const buttons = document.querySelector(".buttons");
Obj.buttons.forEach(item => {
    const button = document.createElement("button");
    button.className = item.id;
    button.innerHTML = item.btnCont;
    buttons.appendChild(button);
});

const delay = document.querySelector(".delay-input");
const delaySpan = document.createElement("span");
delaySpan.innerText = Obj.delay;
delay.appendChild(delaySpan);
const delayInput = document.createElement("input");
delayInput.type = "text";
delayInput.placeholder = "Enter the time in seconds";
delay.appendChild(delayInput);

const circle = document.createElement("div");
circle.className = "circle";
container.appendChild(circle);



const startClick = document.querySelector(".start");
const stopClick = document.querySelector(".stop");

startClick.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval);
    }
    currentRow = 0;
    generateCirclePyramid();
});

stopClick.addEventListener("click", () => {
    clearInterval(interval);
});

let interval;
let currentRow = 0;
function generateCirclePyramid() {
    const rows = parseInt(input.value)
    const delayTime = parseInt(delayInput.value )* 100


    interval = setInterval(() => {
        let output = '';

        for (let i = 0; i < rows; i++) {
            let circles = '';
            for (let j = 0; j < (i * 2 + 1); j++) {
                circles += '<span class="circle-item"></span>';
            }
            output += `<div class="row">${circles}</div><br>`;
        }

        document.querySelector('.circle').innerHTML = output;

        const rowsEl = document.querySelectorAll('.row');
        rowsEl.forEach((rowElement, Index) => {
            rowElement.querySelectorAll('.circle-item').forEach(circle => {
                circle.style.backgroundColor = Index === currentRow ? 'blue': 'transperant';
            });
        });

        currentRow++;
        if (currentRow >= rows) {
            currentRow = 0;
        }
    }, delayTime);
}
