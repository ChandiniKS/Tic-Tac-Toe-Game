let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn")
let newgGamebtn=document.querySelector("#new-btn")
let msgContsiner=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turno = true;
const winningarray=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

resetbtn.addEventListener("click",()=>{
    resetGame()
})

newgGamebtn.addEventListener("click",()=>{
    resetGame()
})

const resetGame=()=>{
    turno=true;
    count=0;
    enableBoxes()
    msgContsiner.classList.add('hide')
}

let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turno){
            box.innerText= "O";
            box.classList.add("o")
            turno=false;
        }else{
            box.innerText="X";
            box.classList.add("x")
            turno=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner()
        if (count===9 && !iswinner){
            showdraw()
        }
        }
    )
});

const disableBoxes=()=>{
    for (let box of boxes){
    box.disabled=true;
}}

const enableBoxes=()=>{
    for (let box of boxes){
    box.disabled=false;
    box.innerText="";
    box.classList.remove("o","x");
}}


const showwinner=(winner)=>{
    msg.innerText=`Congradulations! winner is ${winner}`
    msgContsiner.classList.remove("hide")
    disableBoxes()

}

const showdraw=()=>{
    msg.innerText="OOps match is draw"
    msgContsiner.classList.remove("hide")
    disableBoxes()

}

let tcount=0;
const checkwinner=()=>{
    for(winner of winningarray) { 
        pos1=boxes[winner[0]].innerText
        pos2=boxes[winner[1]].innerText
        pos3=boxes[winner[2]].innerText
        if (pos1!="" && pos2!="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3 && pos1===pos3){
                showwinner(pos1);
                return true;
            }
        }
    
        }
}

