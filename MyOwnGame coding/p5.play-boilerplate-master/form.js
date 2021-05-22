class Form {
    constructor(){
      this.title = createElement('h2');
      this.input = createInput("Enter Name");
      this.input2 = createInput("choose HERO or VAMP");
      this.button1 = createButton("Start");
      this.button2 = createButton("Dress Up");
      this.button3 = createButton("Character");
      this.button4 = createButton("Background");
    }

   // hide(){
      // input.hide();
         // title.hide();
     // }

    display(){
   
    title.html("woojo");
    title.position(615,10)
    
    input.position(590,150);

    input2.position(590,430); 

   button1.position(655,520)

   button2.position(443,211)

   button3.position(443,295)

   button4.position(443,383)

    /////////////// character outPut box ////////////////// 


    fill(230,179,207)
    rect(580,200,200,200);

    fill("black")
    textSize(20)
    text("<-- Choose character",585,300)  

    /////////////// images and score //////////////////

    function leftbar(x,y){
      var leftbarImg, leftbar
      leftbar = createImg("images/left bar coding.png");
      leftbar.position(x,y);
      leftbar.size(80,80);
    }
    leftbar(443,165);
    leftbar(443,250)
    leftbar(443,336)


    var arrowImg,arrow
    arrow = createImg("images/arrow coding.png");
    arrow.position(556,480)
    arrow.size(270,105)
    

    var dressUpImg,dressUp
    dressUp = createImg("images/dressUp.svg");
    dressUp.position(455,170)
    dressUp.size(40,40)
    
    var characterImg,character
    character = createImg("images/character.svg");
    character.position(455,255)
    character.size(40,40)

    var bgleftbarImg,bgleftbar
    bgleftbar = createImg("images/bgleftbar.svg");
    bgleftbar.position(455,340)
    bgleftbar.size(40,40)

     var backgroundImg,background
     backgroundImg = loadImage("images/background.png")
     background = createSprite(657,355,20,20);
     background.addImage(backgroundImg);
     background.scale = 0.5


     fill("yellow")
     rect(445,90,150,40);
 
     fill("red")
     text("score: ",450,115)
 

  
    //////////////mousePressed///////////////

    // button1.mousePressed(()=>{
      //input.hide();
      //title.hide();
      //  console.log("hi")
     // });

    ///////////////////////////////////////////////////////

  
    }
}

