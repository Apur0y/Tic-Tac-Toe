let boxes=document.querySelectorAll(".box")
let resetBtn=document.getElementById('resetbutton');
let newGameBtn=document.querySelector("#newgame");
let msgContain=document.querySelector(".msg-contain");
let winner=document.querySelector("#winner");
 

let turn0= true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("button was clicked");
        if(turn0){
            box.innerText= "O";
            turn0=false; 
        } else{
            box.innerText= "X";
            turn0=true;
        }
        box.disabled=true;
        count++

        let isWinner=checkWinner();

       if(count===9 && !isWinner){
        gameDraw();
       }

    });
    
});

const checkWinner=()=>{
    
    for(let pattern of winPatterns){
       
            let pos1Val= boxes[pattern[0]].innerText;
            let pos2Val= boxes[pattern[1]].innerText;
            let pos3Val= boxes[pattern[2]].innerText;

            if(pos1Val !="" && pos2Val !="" && pos3Val != "") {
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("winner",pos1Val);
                    showWinner(pos1Val);

                }   
            }          
    }    
};


const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;   
    }
};

const showWinner=(msg)=>{
    winner.innerText=`Congratulation, Winner is ${msg}`;
    msgContain.classList.remove("hide");
    disabledBoxes();
};

const gameDraw=(msg)=>{
    winner.innerText=`No Result, It's a Draw`;
    msgContain.classList.remove("hide");
    disabledBoxes();
    
};

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
};

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msgContain.classList.add("hide");
};

resetBtn.addEventListener("click",resetGame);


