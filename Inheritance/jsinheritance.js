
var objectCreators=(function(){
    "use strict";
var createBicyclePrototype= function(){
    
    return {
        speed:0,
        applyBrake:function(x){
            this.speed=this.speed-x;
            
        },
        
        speedUp:function(x)
        {
        this.speed=this.speed+x;
    }
        
    };
}

var createMountainBikePrototype =function(x)
{
    
    var newObj=Object.create(x);
    newObj.gear=1;
    newObj.setGear=function(x){
    this.gear=x;

};
return newObj;
}





var start=function(){
    
    
    var bicycle=createBicyclePrototype();
    console.log(bicycle.speed);
    bicycle.speedUp(5);
    bicycle.applyBrake(2);
     console.log(bicycle.speed);
    var mountainBike=createMountainBikePrototype(bicycle);
    mountainBike.setGear(30);
     console.log(mountainBike.speed);
    
}

start();

var biycle1=Object.create(createBicyclePrototype());
console.log(biycle1.speed);
    biycle1.speedUp(10);
    biycle1.applyBrake(2);
     console.log(biycle1.speed);

var mountain1=Object.create(createMountainBikePrototype(biycle1));
mountain1.setGear(2);
console.log(mountain1.gear);
mountain1.speedUp(5);
console.log(mountain1.speed);

})();