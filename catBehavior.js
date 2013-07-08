
var randInt = function randomInteger() {
    return Math.floor(Math.random() * (10));
}


var Cat = function(name, tiredness, hunger, loneliness, happiness) {
    this.name = name; 
	this.tiredness = tiredness;
	this.hunger = hunger;
	this.loneliness = loneliness;
	this.happiness = happiness;

	this.feed = function(meals) {
		while ((this.hunger - meals) > 0) {
            for (var i = 0; i < meals; i++) {
                console.log("Yum, food.");
                this.hunger--;
            }
		}    
        console.log("Not hungry anymore.");
	};
	this.hangOut = function(friends) {
		while (this.loneliness - friends > 0 && friends > 0) {
            //friends--;
            console.log("Yay, friends!");
            //this.loneliness--;
            this.loneliness = this.loneliness - friends;
        }
        console.log("No more friends please.");
	};
	this.catNip = function(treats) {
		while ((this.happiness + treats) < 10) {
            for (var i = 0; i < treats; i++) {
                console.log("lolz");
                this.happiness++;
            }
		}
        console.log("No more treats please!");
	};
	this.sleep = function(z) {
		while (this.tiredness - z > 0) {
            for (var i = 0; i < z; i++) {
                console.log("zzz");
                this.tiredness--;
            }
		}
        console.log("No more sleep please!");
	};
	this.identityCrisis = function(newName) {
		this.name = newName;
	}
}

var printCat = function(aCat) {
    console.log("How tired is " + aCat.name + "? " + aCat.tiredness + " tireds.");
    console.log("How hungry is " + aCat.name + "? " + aCat.hunger + " hungry.");
    console.log("How lonely is " + aCat.name + "? " + aCat.loneliness + " lonely.");
    console.log("How happy is " + aCat.name + "? " + aCat.happiness + " lolz.");
}

var fluffles = new Cat("Fluffles",randInt(),randInt(),randInt(),randInt());

printCat(fluffles);

// fluffles.feed(randInt());
fluffles.hangOut(randInt());
// fluffles.catNip(randInt());
// fluffles.sleep(randInt());

printCat(fluffles);


