







var allButtons = [];

var curMainMenu = "home";

/////////////////////////////////////   Classes   /////////////////////////////////////



class myWindowsClass {
    constructor() {
        this.top = document.getElementById("top");
        this.topCTX = this.top.getContext("2d");  
        this.mid = document.getElementById("mid");
        this.midCTX = this.mid.getContext("2d");
        this.bottom = document.getElementById("bottom");
        this.bottomCTX = this.bottom.getContext("2d");
        this.w;
    
    }

    resize = function(){
        this.windowW = window.innerWidth
        this.windowH = window.innerHeight
        this.w = this.windowW - 50
        this.topH = this.windowH * 0.17;
        this.midH = this.windowH * 0.70;    
        this.bottomH = this.windowH * 0.1;
        this.bottomButtonH = this.bottomH * 0.65;
        this.buttonTopGap = (this.bottomH - this.bottomButtonH) / 2;
        
        this.top.width = this.w;
        this.mid.width = this.w;
        this.bottom.width = this.w;

    
        this.top.height = this.topH;
        this.mid.height = this.midH;
        this.bottom.height = this.bottomH;


        ////////////    home align
        this.midRowHGap = 25;
        this.midRowH1 = this.mid.height * 0.1;
        this.midRowH1Y = this.midRowHGap;

        this.midRowH2 = this.mid.height * 0.15;
        this.midRowH2Y = this.midRowH1 + this.midRowH1Y + this.midRowHGap;

        this.midRowH3 = this.mid.height * 0.15;       
        this.midRowH3Y = this.midRowH2 + this.midRowH2Y + this.midRowHGap;

        this.midRowH4 = this.mid.height * 0.1;
        this.midRowH4Y = this.midRowH3 +  this.midRowH3Y + this.midRowHGap;
 
        this.midRowH5 = this.mid.height * 0.1;
        this.midRowH5Y = this.midRowH4 +  this.midRowH4Y + this.midRowHGap;
        

        this.midRowH6 = this.mid.height * 0.1;
        this.midRowH6Y = this.midRowH5 +  this.midRowH5Y + this.midRowHGap;
        


        ////////////    zone align

        this.midRowZGap = 10;
        this.midRowZ1 = this.mid.height * 0.1;
        this.midRowZ1Y = this.midRowZGap;

        this.midRowZ2 = this.mid.height * 0.1;
        this.midRowZ2Y = this.midRowZ1 + this.midRowZ1Y + this.midRowZGap;

        this.midRowZ3 = this.mid.height * 0.1;       
        this.midRowZ3Y = this.midRowZ2 + this.midRowZ2Y + this.midRowZGap;

        this.midRowZ4 = this.mid.height * 0.1;
        this.midRowZ4Y = this.midRowZ3 +  this.midRowZ3Y + this.midRowZGap;
 
        this.midRowZ5 = this.mid.height * 0.1;
        this.midRowZ5Y = this.midRowZ4 +  this.midRowZ4Y + this.midRowZGap;
    
        this.midRowZ6 = this.mid.height * 0.1;
        this.midRowZ6Y = this.midRowZ5 +  this.midRowZ5Y + this.midRowZGap;
    
        this.midRowZ7 = this.mid.height * 0.1;
        this.midRowZ7Y = this.midRowZ6 +  this.midRowZ6Y + this.midRowZGap;
    
        this.midRowZ8 = this.mid.height * 0.1;
        this.midRowZ8Y = this.midRowZ7 +  this.midRowZ7Y + this.midRowZGap;

        this.midRowZ9 = this.mid.height * 0.1;
        this.midRowZ9Y = this.midRowZ8 +  this.midRowZ8Y + this.midRowZGap;
    


        allButtons = [];
        var temp = [];
        //                                     names  /  y-Cord  /  height / canvas name / code
        var mainMenu = new menus(["Home", "TV", "AVR", "Zones", "Others"], this.buttonTopGap, this.bottomButtonH, "bottom", "n/a");
        


        //avr
        temp = ["Hdmi 1", "Hdmi 2", "Hdmi 3", "Hdmi 4", "Hdmi 5", "Hdmi 6", "Hdmi 7", "Hdmi 8", "Hdmi 9"];
        var subMenu1A = new menus(temp, 20, 50, "mid", "avr");
                

        //home
        temp = ["Watch TV", "Xbox", "PS4", "Other", "Other2", "Other3"];
        var subMenu1H = new menus(temp, this.midRowH1Y, this.midRowH1, "mid", "home");

        temp = ["Volumn Up", "Volumn Down"];
        var subMenu2H = new menus(temp, this.midRowH2Y, this.midRowH2, "mid", "home");

        temp = ["<<", "<< 30", "Pause", ">> 30", ">>"];
        var subMenu3H = new menus(temp, this.midRowH3Y, this.midRowH3, "mid", "home");

        temp = [];
        var subMenu4H = new menus(temp, this.midRowH4Y, this.midRowH4, "mid", "home");

        temp = [];
        var subMenu5H = new menus(temp, this.midRowH5Y, this.midRowH5, "mid", "home");

        temp = ["Power Off (Everything)"];
        var subMenu6H = new menus(temp, this.midRowH6Y, this.midRowH6, "mid", "home");



        //zones

        temp = ["Zone 2 Volumn Up", "Zone 2 Volumn Down"];
        var subMenu1Z = new menus(temp, this.midRowZ1Y, this.midRowZ1, "mid", "zones");

        temp = ["Zone 2 Source"];
        var subMenu2Z = new menus(temp, this.midRowZ2Y, this.midRowZ2, "mid", "zones");

        temp = []; // for additional space
        var subMenu3Z = new menus(temp, this.midRowZ3Y, this.midRowZ3, "mid", "zones");

        temp = ["Zone 3 Volumn Up", "Zone 3 Volumn Down"];
        var subMenu4Z = new menus(temp, this.midRowZ4Y, this.midRowZ4, "mid", "zones");

        temp = ["Zone 3 Source"];
        var subMenu5Z = new menus(temp, this.midRowZ5Y, this.midRowZ5, "mid", "zones");


    }

    drawButtons = function() {
        for (var i = 0; i < allButtons.length; i++){
            allButtons[i].hover();


            if (allButtons[i].homeSet == "top") {
                // Top
                this.topCTX.beginPath();
                this.topCTX.rect(allButtons[i].x, allButtons[i].y, allButtons[i].w, allButtons[i].h);
                if (allButtons[i].enabled) {
                    this.topCTX.fillStyle = allButtons[i].color;
                } else {
                    this.topCTX.fillStyle = allButtons[i].dColor;
                }
                this.topCTX.fill();
                this.topCTX.textAlign = "center";
                this.topCTX.textBaseline = "middle";
                this.topCTX.font = "20px Arial";
                this.topCTX.fillStyle = "white";
                this.topCTX.fillText(allButtons[i].text, allButtons[i].mid, allButtons[i].y + (allButtons[i].h / 2));
                this.topCTX.closePath();
            }

            else if (allButtons[i].homeSet == "mid") {
                // mid

                if(allButtons[i].menuSwitch == curMainMenu) {
                    allButtons[i].active = true;
                    this.midCTX.beginPath();
                    this.midCTX.rect(allButtons[i].x, allButtons[i].y, allButtons[i].w, allButtons[i].h);
                    if (allButtons[i].enabled) {
                        this.midCTX.fillStyle = allButtons[i].color;
                    } else {
                        this.midCTX.fillStyle = allButtons[i].dColor;    
                    }
                    this.midCTX.fill();
                    this.midCTX.textAlign = "center";
                    this.midCTX.textBaseline = "middle";
                    this.midCTX.font = "20px Arial";
                    this.midCTX.fillStyle = "white";
                    this.midCTX.fillText(allButtons[i].text, allButtons[i].mid, allButtons[i].y + (allButtons[i].h / 2));
                    this.midCTX.closePath();
                }
                else {
                    allButtons[i].active = false;
                }

            }

            else if (allButtons[i].homeSet == "bottom") {
                // bottom
                this.bottomCTX.beginPath();
                this.bottomCTX.rect(allButtons[i].x, allButtons[i].y, allButtons[i].w, allButtons[i].h);
                if (allButtons[i].enabled) {
                    this.bottomCTX.fillStyle = allButtons[i].color;
                } else {
                    this.bottomCTX.fillStyle = allButtons[i].dColor;    
                }
                this.bottomCTX.fill();
                this.bottomCTX.textAlign = "center";
                this.bottomCTX.textBaseline = "middle";
                this.bottomCTX.font = "20px Arial";
                this.bottomCTX.fillStyle = "white";
                this.bottomCTX.fillText(allButtons[i].text, allButtons[i].mid, allButtons[i].y + (allButtons[i].h / 2));
                this.bottomCTX.closePath();
            }




        }
    }


}
class menus{
    constructor(names, y, h, windowSet, zone){
        this.x = 0;
        this.menu1Names = names;
        this.bGap = 20;
        this.w = myWindows.w;

        //top
        this.gaps = this.menu1Names.length + 1;
        this.bW = (this.w - (this.bGap * this.gaps)) / this.menu1Names.length;
        console.log(this.bW);
        for (var i = 0; i < this.menu1Names.length; i++) {
            this.text = this.menu1Names[i];
            this.x = this.bGap + (this.bGap * i) + (this.bW * i);
            var a = new buttonClass(this.x, y, this.bW, h, this.text, windowSet, zone);
            allButtons.push(a);
        }
    }
}

class buttonClass {
    constructor(x, y, w, h, text, home, zone) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.homeSet = home;
        this.menuSwitch = zone;
        this.text = text;
        this.color = "silver";
        this.dColor = "grey";
        this.enabled = true;
        this.active = true;
        this.selected = false;
        this.current = false;
        this.mid = (this.x + (this.x + this.w)) / 2;
        console.log(this.menuSwitch);
    }

    hover = function() {
        var offSetX, offSetY;
        if (this.enabled) {
            if (this.homeSet == "bottom") {
                offSetX = myWindows.bottom.offsetLeft;
                offSetY = myWindows.bottom.offsetTop;
            } else if (this.homeSet == "mid") {
                offSetX = myWindows.mid.offsetLeft;
                offSetY = myWindows.mid.offsetTop;
            } else if (this.homeSet == "top") {
                offSetX = myWindows.top.offsetLeft;
                offSetY = myWindows.top.offsetTop;
            } else {
                console.log("oh Nooooooooooooooooooooo,  why did it make it here!!!!!!!!!!!!!")
            }
            if (mouseX - offSetX > this.x && mouseX - offSetX < this.x + this.w && mouseY - offSetY > this.y && mouseY - offSetY < this.y + this.h && this.active) {
                this.color = "red";
                bSelected = this.text;
                this.selected = true;
            } else {
                if (this.current) {
                    this.color = "green";
                }
                else {
                    this.color = "silver";
                }
                this.selected = false;
            }
            
        }
    }
}





/////////////////////////////  Func it UP!!!  /////////////////////////////






/////////////////////////////  Events Listen  /////////////////////////////

//window.addEventListener('resize', resizeTrigger);

// Keyboard Listen
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// Mouse Listen
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("click", mouseClickHandler, false);




//////////////////////////// KEY INPUT ///////////////////////////////////


function keyDownHandler(e) {
    console.log(e.key);
    if (e.key == "r") {
        myWindows.resize();
    }

  }

function keyUpHandler(e) {   

}

//////////////////////////// Mouse Move ///////////////////////////////////
var mouseX, mouseY, bSelected;
function mouseMoveHandler(e) {
    mouseX =  e.clientX;
    mouseY =  e.clientY;
}
//////////////////////////// Mouse Click ///////////////////////////////////

function mouseClickHandler(e) {

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].current = false;

        if (allButtons[i].selected) {
            console.log(allButtons[i].text)
            if (allButtons[i].text == "Home") {
                allButtons[i].current = true;
                curMainMenu = "home";
            }
            else if (allButtons[i].text == "TV") {
                allButtons[i].current = true;
                curMainMenu = "tv";
            }
            else if (allButtons[i].text == "Zones") {
                allButtons[i].current = true;
                curMainMenu = "zones";
            }
            else if (allButtons[i].text == "AVR") {
                allButtons[i].current = true;
                curMainMenu = "avr";
            }
        }

    }


    /*
    if (bSelected == "Home") {
        curMainMenu = "home";
    }
    else if (bSelected == "TV") {
        curMainMenu = "tv";
    }
    else if (bSelected == "Zones") {
        curMainMenu = "zones";
    }

    */


}

  
/////////////////////////////  Main Loop  /////////////////////////////



myWindows = new myWindowsClass();

myWindows.resize();


function draw() {

    myWindows.topCTX.clearRect(0,0, myWindows.top.width, myWindows.top.height);
    myWindows.midCTX.clearRect(0,0, myWindows.mid.width, myWindows.mid.height);
    myWindows.bottomCTX.clearRect(0,0, myWindows.bottom.width, myWindows.bottom.height);


    myWindows.drawButtons();
    




    
    requestAnimationFrame(draw);
}


draw();






