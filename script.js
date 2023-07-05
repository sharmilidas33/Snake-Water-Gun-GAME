let user= prompt("Snake, Water or Gun?");
let cpuInput = Math.floor(Math.random()* 3);
let cpu=["Snake","Water","Gun"][cpuInput]

function match(cpu,user){
    if(cpu==user){
        return "Nobody. Match is a tie";
    }
    else if(cpu==="Snake" && user==="Water"){
        return 'cpu';
    }
    else if(cpu==="Snake" && user==="Gun"){
        return "user";
    }
    else if(cpu==="Gun" && user==="Snake"){
        return "cpu";
    }
    else if(cpu==="Gun" && user==="Water"){
        return "user";
    }
    else if(cpu==="Water" && user==="Snake"){
        return "user";
    }
    else if(cpu==="Water" && user==="Gun"){
        return "cpu";
    }
}
let result= match(cpu,user)
document.write(`CPU: ${cpu} <br> USER: ${user} <br> The winner is: ${result.toUpperCase()} `);