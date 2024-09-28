// var size = 140;
// var w , r;
// var l = prompt("Write here");
// w = l.length;
// r= size - w;
// alert("written "+w+" left "+r );

//cuting slice
// var get  = prompt("enter tweet");
// var show = prompt(get.slice(0,200));


//DogToHumanAgeConvertor
 // var d = prompt("enter dog's age : - ");
 // alert("HumanAge = "+ ((d-2)*4+21));

//BMI CALCULATOR

// function calBMI(w , h)
// {
//  var BMI = w/ (h*h) ;
//  return BMI;
// }

// var weight = 90;
// var height = 1.89;
// console.log(calBMI(weight,height));

//love calculator

// var a = "Micky";
// var b = "minne"

// console.log("love percentage = "+ Math.floor((Math.random())*100)+"%");

//Arrays

// var guest = ["jack" , "oggy" , "olly" , "tom" , "jerry"];
// var get = prompt("Enter name :- ")
// if(guest.includes(get))
// {
//  alert("Welcome!!!!!!!!!!!!!!");
// }

// else {
//  alert("Next Time.")
// }

// var arr = [] ;
// count =1;
// function create(){

//  arr.push(count);
//  count++;
//  console.log(arr);
  
// }


// var arr = [] ;
// count =1;
// function create(){

// if(count%3==0 && count%5==0)
//  {
//    arr.push("FizzBuzz");
//  }
// else if(count%3==0)
// {
//  arr.push("FIZZ");
 
// }

//  else if ( count%5==0)
//  {
//   arr.push("BUZZ");
  
//  }
 
//  else {
//  arr.push(count);
//  }
//  count++;
//  console.log(arr);
  
// }



//99 bottles of bear , while loop

function beer()
{
 var i=99;
 while(i>=0)
  {
   if(i!==0)
   {
   console.log(i+" bottles of beer on the wall, "+i+" bottles of beer.Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.");
   }

   else{
    console.log("No bottles of beer on the wall,no bottles of beer.Go to the store and buy some more,99 bottles of beer on the wall.");
   }
   i=i-1;
  }
}
