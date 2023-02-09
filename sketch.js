// Image Variables
let missileClicker;
let worker;
let toolshed;
let garage;
let factory;
let missilesilo;
let canada;
let literaljesus;

// Clicker Total
let missileCount = 0;

// Unlock Purchasables
let workerUnlock = false;
let toolshedUnlock = false;
let garageUnlock = false;
let factoryUnlock = false;
let missilesiloUnlock = false;
let canadaUnlock = false;
let literaljesusUnlock = false;
let aidOfJesus = false;

// Purchasable Values
let clickAdd = 0;
let actualClick = 1;
let vBuffer = 0;
let workerPurchase = 10;
let toolshedPurchase = 250;
let garagePurchase = 1000;
let factoryPurchase = 5000;
let missilesiloPurchase = 25000;
let canadaPurchase = 1000000;
let jesusPurchase = 50000000;

// Upgrade Values
let workerVal = 1;
let toolshedVal = 30;
let garageVal = 130;
let factoryVal = 600;
let missilesiloVal = 3000;
let canadaVal = 10000;

// Jesus Buff
let jesusLevel = 1;
let jesusBuff = 0;

// Russia
let russiaScore = 0;

function preload() {
  missileClicker = loadImage('assets/ukranianmissile.png');
  worker = loadImage('assets/worker.png');
  toolshed = loadImage('assets/toolshed.png');
  garage = loadImage('assets/garage.png');
  factory = loadImage('assets/factory.png');
  missilesilo = loadImage('assets/missilesilo.png');
  canada = loadImage('assets/canada.png');
  literaljesus = loadImage('assets/jesus.png');
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB,360,100,100,100);
}

function draw() {
  background(180,50,100);
  if (russiaScore >= jesusPurchase) {
    textSize(50);
    text("No missiles?", 80, 150);
  }
  if(aidOfJesus) {
    image(literaljesus,70,175,300,150);
  } else {
    image(missileClicker,width/5,height/4,200,200);
  }
  textSize(30);
  text("You: " + missileCount, 10, 100);
  text("Russia: " + russiaScore,10,50);
  push();
  for (let i = 0; i <= 500; i += 95) {
    rect(500,i+10,70,70);
  }
  textSize(15);
  if (workerUnlock) {
    // Worker
    image(worker,500,10,70,70);
    text("Worker",510,100);
    textSize(20);
    text(workerPurchase, 470 - vBuffer, 55);
    textSize(15);
  }

  if (toolshedUnlock) {
    // Tool Shed
    image(toolshed,500,105,70,70);
    text("Tool Shed",500,195);
    textSize(20);
    text(toolshedPurchase, 460 - vBuffer, 150);
    textSize(15);
  }

  if (garageUnlock) {
    // Garage
    image(garage,500,200,70,70);
    text("Garage",510,290);
    textSize(20);
    text(garagePurchase, 450 - vBuffer, 245);
    textSize(15);
  }

  if (factoryUnlock) {
    // Factory
    image(factory,500,295,70,70);
    text("Factory",510,385);
    textSize(20);
    text(factoryPurchase, 450 - vBuffer, 340);
    textSize(15);
  }

  if (missilesiloUnlock) {
    // Missile Silo
    image(missilesilo,500,390,70,70);
    text("Missile Silo",500,480);
    textSize(20);
    text(missilesiloPurchase, 440 - vBuffer, 435);
    textSize(15);
  }

  if (canadaUnlock) {
    // Canada
    image(canada,500,485,70,70);
    text("Canada",510,575);
    textSize(20);
    text(canadaPurchase, 420 - vBuffer, 530);
  }

  if (literaljesusUnlock) {
    // Literal Jesus Christ
    image(literaljesus,0,350,500,300);
    text("Literal Jesus Christ V" + jesusLevel + ".0",10,400);
    textSize(20);
    text(jesusPurchase,30,425);
  }
  pop();

  if (frameCount % 60 == 0) {
    missileCount = missileCount + clickAdd;
    russiaScore += 5;
    if (missileCount >= workerPurchase * 2) {
      workerUnlock = true;
      russiaScore += 45;
    }
    if (missileCount >= toolshedPurchase * 2) {
      toolshedUnlock = true;
      russiaScore += 450;
    }
    if (missileCount >= garagePurchase * 2) {
      garageUnlock = true;
      russiaScore += 1500;
    }
    if (missileCount >= factoryPurchase * 2) {
      factoryUnlock = true;
      russiaScore += 3000;
    }
    if (missileCount >= missilesiloPurchase * 2) {
      missilesiloUnlock = true;
      russiaScore += 5000;
    }
    if (missileCount >= canadaPurchase * 2) {
      canadaUnlock = true;
      russiaScore += 10000;
    }
    if (missileCount >= jesusPurchase * 2) {
      literaljesusUnlock = true;
    }
  }
}

function mousePressed() {
  if (mouseX >= 125 && mouseX <= 325) {
    if (mouseY >= 150 && mouseY <= 350) {
      if (aidOfJesus) {
        missileCount += jesusBuff + actualClick;
      } else {
        missileCount += actualClick;
      }
    }
  } else if (mouseX >= 500 && mouseX <= 580) {
    // Purchase Upgrade
    if (mouseY >= 10 && mouseY <= 80 && workerUnlock) {
      // Purchase Worker
      if (missileCount >= workerPurchase) {
        missileCount -= workerPurchase;
        clickAdd += workerVal;
      }
    } else if (mouseY >= 105 && mouseY <= 175 && toolshedUnlock) {
      // Purchase Tool Shed
      if (missileCount >= toolshedPurchase) {
        missileCount -= toolshedPurchase;
        clickAdd += toolshedVal;
        actualClick += toolshedPurchase/10;
      }
    } else if (mouseY >= 200 && mouseY <= 270 && garageUnlock) {
      // Purchase Garage
      if (missileCount >= garagePurchase) {
        missileCount -= garagePurchase;
        clickAdd += garageVal;
        actualClick += garagePurchase/10;
      }
    } else if (mouseY >= 295 && mouseY <= 365 && factoryUnlock) {
      // Purchase Factory
      if (missileCount >= factoryPurchase) {
        missileCount -= factoryPurchase;
        clickAdd += factoryVal;
        actualClick += factoryPurchase/10;
      }
    } else if (mouseY >= 390 && mouseY <= 460 && missilesiloUnlock) {
      // Purchase Missile Silo
      if (missileCount >= missilesiloPurchase) {
        missileCount -= missilesiloPurchase;
        clickAdd += missilesiloVal;
        actualClick += missilesiloPurchase/10;
      }
    } else if (mouseY >= 485 && mouseY <= 555 && canadaUnlock) {
      // Purchase Canada
      if (missileCount >= canadaPurchase) {
        missileCount -= canadaPurchase;
        clickAdd += canadaVal;
        actualClick += canadaPurchase/10;
      }
    }
  }
  if (mouseX >= 115 && mouseX <= 415 && mouseY >= 375 && mouseY <= 575 && literaljesusUnlock) {
    // Purchase Literal Jesus Christ
    if (missileCount >= jesusPurchase) {
      missileCount -= jesusPurchase;
      reset();
      aidOfJesus = true;
      jesusLevel++;
      jesusBuff += 10000;
    }
  }
}

function reset() {
  clickAdd = 0;
  russiaScore = 0;
  actualClick = 0;
  missileCount = 0;
  workerUnlock = false;
  toolshedUnlock = false;
  garageUnlock = false;
  factoryUnlock = false;
  missilesiloUnlock = false;
  canadaUnlock = false;
  literaljesusUnlock = false;
  workerPurchase += 10000;
  toolshedPurchase += 250000;
  garagePurchase += 1000000;
  factoryPurchase += 5000000;
  missilesiloPurchase += 25000000;
  canadaPurchase += 1000000000;
  vBuffer += 3;
}
