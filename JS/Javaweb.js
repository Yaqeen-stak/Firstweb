
var Number = prompt('How many rose you will buy ??');
var greeting;  
if ( Number > 70) {
greeting= 'YOU WILL GET 50% DISCOUNT';
}

else if (Number > 40 && Number < 70) {
greeting = 'YOU WILL GET 30% DISCOUNT!';
}

else if (Number < 40 && Number > 20) {
greeting = 'YOU WILL GIT 10% DISCOUNT! ' ;}
else if (Number <20 ) {
    greeting = 'NO DISCOUNT!!!';
    }

document .write( ' <h3>' +greeting + ' </ h3>');

function getGreeting (Number) {
    console.log (Number);
    if ( Number > 70) {
        greeting= 'YOU WILL GET 50% DISCOUNT';
        }
        
        else if (Number > 40 && Number < 70) {
        greeting = 'YOU WILL GET 30% DISCOUNT!';
        }
        
        else if (Number < 40 && Number > 20) {
        greeting = 'YOU WILL GIT 10% DISCOUNT! ' ;}
        else if (Number <20 ) {
            greeting = 'NO DISCOUNT!!!';
        }
        document .write( ' <h3>' +greeting + ' </ h3>');
}
getGreeting (Number);     
console.log ('Number of flowers required is :' + Number);
