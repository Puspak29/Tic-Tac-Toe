let boxes= document.querySelectorAll("#boxes");
let result= document.querySelector("#messege");
let turnX= true;
let turnMessege= document.querySelector("#turn");
let newGameBtn= document.querySelector("#new-game");

const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerHTML="X";
            turnX=false;
            turnMessege.innerHTML="O"
        }
        else{
            box.innerHTML="O";
            turnX=true;
            turnMessege.innerHTML="X"
        }
        box.disabled= true;
        checkWinner();
    })
})

let checkWinner=()=>{
    for (let pattern of winPattern) {
        let boxVal1= boxes[pattern[0]].innerHTML;
        let boxVal2= boxes[pattern[1]].innerHTML;
        let boxVal3= boxes[pattern[2]].innerHTML;
        if(boxVal1!="" && boxVal2!="" && boxVal3!=""){
            if(boxVal1==boxVal2 && boxVal2==boxVal3){
                result.innerHTML=`Winner in ${boxVal1}`;
                turnMessege.innerHTML="No turn";
                disableAll();
            }
        }
    }
}

let disableAll=()=>{
    boxes.forEach((box)=>{
        box.disabled= true;
    })
}

newGameBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        result.innerHTML="Game Result";
        turnMessege.innerHTML="X";
        box.disabled=false;
        turnX=true;
    })
})
