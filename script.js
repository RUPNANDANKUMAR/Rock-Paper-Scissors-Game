let dark=document.getElementById("dark");
console.log(dark);

let body=document.querySelector("body");

let mode="light";
dark.addEventListener("click",()=> {
    if(mode == "light"){
        console.log("button was clicked");
        body.style.backgroundColor="blue";
        dark.src="dark.png";
        mode="dark";
    }else {
        console.log("ligtht Mode Enabled");
        body.style.backgroundColor="white";
        dark.src = "light.png";
        mode="light";
    }
})


// let user=0;
// let comp=0;

let choices=document.querySelectorAll(".choice");
let winning=document.querySelector(".winning");

let userc=document.querySelector("#user");
let comp=document.querySelector("#computer");

let usercc=0;
let compc=0;

let options=["rock","paper","scissors"];

function playGame(user,computer) {
    if(user === computer){
        winning.innerHTML = "<h2>Draw 🤝</h2>";
        winning.style.backgroundColor="yellow";
    }else if((user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper")){
        winning.innerHTML = "<h2>You Win 🎉</h2>";
        winning.style.backgroundColor="green";
        usercc++;
        userc.innerText=usercc;

    }else{
        winning.innerHTML="Lose !"
        winning.style.backgroundColor="Red";
        compc++;
        comp.innerText=compc;
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let user = choice.id;
        let computer = options[Math.floor(Math.random() * 3)];
        playGame(user, computer);
    });
});


let btn=document.querySelector(".btn");

btn.addEventListener("click",() => {
    localStorage.clear();
    location.reload();
})