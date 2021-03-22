  // feet to mile converter:

  function feetToMile(feet){
    var mile =0.000189394;
    mile = feet *mile;
    return mile;
}
let result =feetToMile(5280);
console.log(result);


    //  wood Calculator

function woodCalculator(chair,table,bed){
     let chairTool =chair*1;
     let tableTool = table*3;
     let bedTool = bed*5;
   let totalWood =(chairTool+tableTool+bedTool);
     return totalWood;
}
let needWood=woodCalculator(0,8,4);
console.log(needWood);

     //brick calculator

     let brickPerFeet = 1000;
     function brickCalculator(floor){
         if(floor>0 && floor<=10){
             let groundFeet = 15;
             TotalBrick=groundFeet*brickPerFeet*floor;
             
         }
      
         else if(floor>10 && floor<=20){
             let FirstTenFloor = 10*15*brickPerFeet;
             let remainFloor = floor-10;
             let middleFeet = 12;
             let remainfloorBrick = remainFloor*middleFeet*brickPerFeet;
              TotalBrick=FirstTenFloor+remainfloorBrick;
           
         }
         else if(floor>20){
             let FirstTenFloor = 10*15*brickPerFeet;
             let secondTenFloor =10*12*brickPerFeet;
             let lastFeet = 10;
             remainFloor=floor-20;
             let remainfloorBrick = remainFloor*lastFeet*brickPerFeet;
             TotalBrick=FirstTenFloor+remainfloorBrick+secondTenFloor;
             
         }
         return TotalBrick;
       
     }
     let brickForFloor =brickCalculator(5);
     console.log(brickForFloor);
     let brickForFloor1 =brickCalculator(15);
     console.log(brickForFloor1);
     let brickForFloor2 =brickCalculator(29);
     console.log(brickForFloor2);
  
            // finding tiny friend

          let friend =[24,,23,28,21,25,22,27,30];
          let min =friend[0];
function tinyFriend(){
    for(i=0;i<friend.length;i++){
        let element=friend[i];
        if(element<min){
            min =element;
        }
        
    }
    return min;
}
let liittleFrnd=tinyFriend(friend);
console.log(liittleFrnd);

