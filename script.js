
let p1score = 0;
let p2score = 0;
let chance = 0;

while(chance < 3){
    //get Computer's choice
    const computerOptions = ['s','w','g'];
    let p1 = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    document.write('Player one: ' + p1 + '</br>');
    
    //get user's choice 
    let p2 = prompt('Enter your choice: ').toLowerCase();
    document.write('Player two: ' + p2 + '</br>');

    //calculating points
    if(p1 == p2){
        alert("Draw");
    }
    else if((p1 === 's' && p2 === 'w') || (p1 === 'w' && p2 === 'g') || (p1 === 'g' && p2 === 's')){
        alert("Computer gets a point");
        p1score ++;
    }
    else if((p2 === 's' && p1 === 'w') || (p2 === 'w' && p1 === 'g') || (p2 === 'g' && p1 === 's')){
        alert("You get a point");
        p2score ++;
    }
    else{
        alert("Invalid Option entered");
    }

    //adding chance
    chance++;

    if(chance < 3 && !confirm("Do you want to play match again? ")){
        break;
    }
}

// Final score calculation
if(p1score > p2score){
    document.write('<span style="background-color: red; color: #fff; margin-top:10px"> Computer wins with ' + p1score + ' points </span>')
}
else if(p2score > p1score){
    document.write('<span style="background-color: green; color: #fff; margin-top:10px"> You win with ' + p2score + ' points </span>')
}
else{
    document.write('<span style="background-color: yellow; color: #fff; margin-top:10px"> Match Draw </span>')
}