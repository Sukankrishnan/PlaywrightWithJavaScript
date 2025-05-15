//for loop

for(let age=5;age<10;age++)
{
    /* if(age===7){
    break; //exit the loop when age is 7
    } */

    if(age===7){
        continue; //skip age 7 and continue the loop
        }
    console.log("You are eligible to enter until your age is" +age);
    
}


//while
var day2=0;
while(day2<7)
{
    console.log(`Day ${day2} is applicable`);
    day2++;
    
}

//do while loop

let day=7
do{
    console.log("Day is "+day);
    
}while(day<7);   