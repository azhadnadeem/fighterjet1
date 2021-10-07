var fighterjetImg;
var stone,stoneImg;
var bullet,bulletGroup;
var stone,stoneGroup;
var bg,bachground,bgImg;
var star,starImg;
var life=5
var score=0
var bulletSound
var blastsound;
var fighterjetblastsound;
var fighterjetblastImg;
var stoneblastImg
var star,starsound;
var gunfireImg;
var fj1Img,fj2Img,fj3Img,fj4Img,fj5Img,fjImg;
var scoreImg;
var gamestate="play"
var restartImmg;



function preload(){
    bgImg=loadImage("sbg1.jpg")
    fighterjetImg=loadImage("shooter2.png")
    

    fj1Img=loadImage("fjs.png")
    fj2Img=loadImage("fjs.png")
    fj3Img=loadImage("fjs.png")
    fj4Img=loadImage("fjs.png")
    fj5Img=loadImage("fjs.png")
   
    }
function setup(){

 createCanvas(900,580)
 background=createSprite(0,0,900,580)
 background.addImage(bgImg)
 background.scale=8 

    fighterjet=createSprite(450,400)
    fighterjet.addImage(fighterjetImg)
    fighterjet.scale=0.1
    fighterjet.debug=false
    fighterjet.setCollider("rectangle",0,0,1600,600)

   
    fj1=createSprite(870,30)
    fj1.addImage(fj1Img)
    fj1.scale=0.9
    fj1.visible=false


    fj2=createSprite(830,30)
    fj2.addImage(fj2Img)
    fj2.scale=0.9
    fj2.visible=false

    fj3=createSprite(790,30)
    fj3.addImage(fj3Img)
    fj3.scale=0.9
    fj3.visible=false

    fj4=createSprite(750,30)
    fj4.addImage(fj4Img)
    fj4.scale=0.9
    fj4.visible=false

    fj5=createSprite(710,30)
    fj5.addImage(fj5Img)
    fj5.scale=0.9
    fj5.visible=false  
}  

   function draw(){
 
    background.velocityY=6
 if(background.y > 700 ){
 background.y=background.height/2
    }
   
    if(keyDown('UP')){

    fighterjet.y-=4
    
    }
if(keyDown('DOWN')){
    fighterjet.y+=4
   
}
if(keyDown('Left')){
    fighterjet.x-=4
} 

if(keyDown('Right')){
    fighterjet.x+=4
}


                    if(life==5){
                        fj1.visible=true
                        fj2.visible=true
                        fj3.visible=true
                        fj4.visible=true
                        fj5.visible=true
                    }
                    
                        if(life==4){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=true
                            fj4.visible=true
                            fj5.visible=false
                        }
                    
                        if(life==3){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=true
                            fj4.visible=false
                            fj5.visible=false
                            
                        }
                      
                        if(life==2){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                        }
                    
                        if(life==1){
                            fj1.visible=true
                            fj2.visible=false
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                        }
                    
                        if(life==0){
                            fj1.visible=false
                            fj2.visible=false
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                         }
                                             
                                        
    drawSprites()

}



