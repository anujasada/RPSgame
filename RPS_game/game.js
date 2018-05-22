function comp_choice() {
    let choice = ["rock", "paper", "scissor"]
    let rand = parseInt(Math.random() * 3)
    return choice[rand];
}

function main() {
    comp = comp_choice();
    let user = prompt("What do you choose?? Rock, Paper or Scissor");
    if(user == "") {
        alert("Please enter your choice")
        let user = prompt("What do you choose?? Rock, Paper or Scissor");
        error(user);
    } else {
        let v = error(user);
        if (v[0] == true) {
            logic(comp,user)
        } else if(v[0] == false) {
            user = prompt(v[1]);
            logic(comp,user);
        }
    }
}

function logic(comp,user) {
    c = comp.toLowerCase();
    u = user.toLowerCase();
    if(c == u) {
        document.getElementById("demo").innerHTML = "It's a tie, Play again!!"
    }
    else if(c == "rock" && u == "paper"){
        document.getElementById("demo").innerHTML = "Congratulation!!Computer chose Stone and You won!!"
    } 
    else if( c == "scissor" && u == "rock"){
        document.getElementById("demo").innerHTML = "Congratulation!!Computer chose Scissors and You won!!"
    }
    else if(c == "paper" && u == "scissor"){
        document.getElementById("demo").innerHTML = "Congratulation!!Computer chose Paper and You won!!"
    }
    else if(c == "paper" && u == "rock"){
        document.getElementById("demo").innerHTML = "Computer chose Paper and You lost!!"
    } 
    else if(c == "rock" && u == "scissor"){
        document.getElementById("demo").innerHTML = "Computer chose Stone and You lost!!"
    }
    else if(c == "scissor" && u == "paper"){
        document.getElementById("demo").innerHTML = "Computer chose Scissors and You lost!!"
    }
}

function error(user) {
    if (user[0] == "r" && user !== "rock") {
        return [false , 'Did you mean rock?']
    } else if (user !== "paper" && user[0] == "p") {
        return [false , 'Did you mean paper?']
    } else if (user !== "scissor" && user[0] == "s") {
        return [false , 'Did you mean scissor?']
    } else if (user !== "rock" && user !== "paper" && user !== "scissor") {
        return [false , 'Wrong choice!! Choose rock, paper or scissor']
    } else {
        return [true , '']
    }
}

function btn_refresh() {
    location.reload();
}