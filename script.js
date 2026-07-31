const cat = document.getElementById("cat");
const speech = document.getElementById("speech");


let clickCount = 0;


// Mouse position
let mouseX = 300;
let mouseY = 300;


// Cat position
let catX = 300;
let catY = 300;



// Detect mouse movement
document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});



// Make kitty follow mouse smoothly
function moveCat() {


    catX += (mouseX - catX) * 0.08;

    catY += (mouseY - catY) * 0.08;



    cat.style.left = catX + "px";

    cat.style.top = catY + "px";



    // Make kitty face cursor direction

    if (mouseX < catX) {

        cat.style.transform = "scaleX(-1)";

    } 
    
    else {

        cat.style.transform = "scaleX(1)";

    }



    requestAnimationFrame(moveCat);

}


moveCat();





// Kitty sounds

const meows = [

    "Meow~ 🐈",

    "Mrrrp!",

    "Meeeow!",

    "Prrrt!",

    "Nyaa~"

];





const insults = [

    "Thou art a frothy hedge-pig!",

    "Away, thou onion-eyed knave!",

    "Thou lumpish, clay-brained fool!",

    "Begone, thou goatish miscreant!",

    "Thou art a most peculiar cabbage!",

    "Thou mangy pudding-headed rascal!"

];





cat.addEventListener("click", () => {


    clickCount++;



    // Odd click = meow

    if (clickCount % 2 === 1) {


        speech.innerHTML =
            meows[Math.floor(Math.random() * meows.length)];


    }


    // Even click = insult

    else {


        speech.innerHTML =
            insults[Math.floor(Math.random() * insults.length)];


    }




    // Show speech bubble

    speech.style.display = "block";



    // Position above kitty

    speech.style.left = catX + "px";

    speech.style.top = (catY - 80) + "px";




    // Hide after 3 seconds

    setTimeout(() => {


        speech.style.display = "none";


    }, 3000);



});