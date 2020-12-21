//Create variables here
var dog, happyDog, database, foodS, foodStock;


function preload()
{
  //load images here
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  
 dog = createSprite(250,400,10,10);
 dog.addImage(dog1);
 dog.scale = 0.1
 database = firebase.database();
 foodStock = database.ref('Food');
 foodStock.on("value",readStock);



}


function draw() {  

  background(46,139,87);

  
  //add styles here

    if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    
    
    
    }
    

    drawSprites();

    fill("black")
    text("Food Remaining :"+ foodS, 200,250);
    textSize(13);
    text("Note: Press Up Arrow Key To Feed Drago Milk",120,150);
    
}
function readStock(data){

  foodS = data.val();

}
function writeStock(x){

if(x<=0){
x = 0
}
else{
x = x-1;
}

database.ref("/").update({

  Food:x

});


}
