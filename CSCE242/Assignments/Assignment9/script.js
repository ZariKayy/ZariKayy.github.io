class Toy {
    constructor(name, price, ageRange, rating, picture) {
        this.name = name;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.picture = picture;
    }
    get toyDetails() {
        //containers
        //let toysContainer = document.getElementById("toys-div")
        //let toyBox = document.getElementById("toy-box");

        let toyBox = document.createElement("div");
        toyBox.id = "YOLO";
        let toysContainer = document.createElement("div");


        //name
        let displayedName = document.createElement("h2");
        displayedName.innerText = this.name;
        toyBox.append(displayedName);

        //picture
        let toyPic = document.createElement("img");
        toyPic.classList.add("image");
        toyPic.src = `images/${this.picture}`;
        toyBox.append(toyPic);
    
        //info list
        let ulElem = document.createElement("ul");
        toyBox.append(ulElem);
        
        //price
        let displayedPrice = document.createElement("li");
        displayedPrice.innerHTML = `<strong>Price:</strong> ${this.price}`;
        ulElem.append(displayedPrice);

        //age range
        let displayedAgeRange = document.createElement("li");
        displayedAgeRange.innerHTML = `<strong>Age Range: </strong> ${this.ageRange}`;
        ulElem.append(displayedAgeRange);
        
        //rating
        let displayedRating = document.createElement("li");
        displayedRating.innerHTML = `<strong>Rating: </strong> ${this.rating}`;
        ulElem.append(displayedRating);


        return toyBox;
    }
    //get toyItem() {
        //???
    //}

}

function createToy() {
    let toys = [];
    toys.push(new Toy("American Girl Doll", "$38.88", "5-7", "4 stars", "AmericanGirlDoll.jpg"));
    toys.push(new Toy("Play House", "$100", "5-10",  "5 stars", "PlayHouse.jpg"));
    toys.push(new Toy("Tricycle", "$75.99", "3-7", "3.5 stars", "Tricycle.jpg"));
    toys.push(new Toy("Ball", "$5.99", "2-12", "2.5 stars", "Ball.jpg"));
    toys.push(new Toy("Legos", "$15.99", "5-99+", "5 stars", "Legos.jpg"));
    toys.push(new Toy("Teddy Bear", "$2.99", "1-99+", "3.5 stars", "TeddyBear.jpg"));
   
    let toysListDiv = document.getElementById("toys-div");
   
    for(let i in toys){
        console.log("adding toy ");
        toysListDiv.append(toys[i].toyDetails);
    }
}

window.onload = function() {
 this.createToy();
}
