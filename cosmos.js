// an alert occurs on the webpage when you click on the hovering astronaut png image //

let astroClick = document.getElementById('astro-click');

function astroClicky() {
    alert("The astronaut does NOT want to be touched!");
}

// function for hovering over the buttons on the main homepage //

function openImages(evt, buttonHover) {
    var i, buttonContent, buttonLink;
    buttonContent = document.getElementsByClassName("buttoncontent");
    for (i = 0; i < buttonContent.length; i++) {
buttonContent[i].style.display = 'none';
    }
    buttonLink = document.getElementsByClassName("buttonlinks");
    for (i = 0; i < buttonLink.length; i++) {
        buttonLink[i].className = buttonLink[i].className.replace(" active", "");

    }
document.getElementById(buttonHover).style.display = "block";
evt.currentTarget.className += " active";

}

//back button unique for the questions page //

function backButton() {
    var k, arrowPop;
    arrowPop = document.getElementsByClassName('buttoncontent');
    for(k = 0; k < arrowPop.length; k++) {
        arrowPop[k].innerHTML = "Go back";
    }
}

function backOut() {
    var l, arrowPop;
    arrowPop = document.getElementsByClassName('buttoncontent');
    for(l = 0; l < arrowPop.length; l++) {
        arrowPop[l].innerHTML = "<<<";
    }
}



// Clicking on the Games button, which pops up an alert notifying the viewer that it's not available yet //

let gamesClick = document.getElementById('no-go');

function gameClicky() {
    alert("The webpage you are trying to click on is not available yet. I apologize for the inconvenience.");
}

// function that makes the big image disappear when you move your mouse out of the element in alpha.html //

function makeImgVanish() {
    var h, imgVanish;
    imgVanish = document.getElementsByClassName("buttoncontent");
    for (h = 0; h < imgVanish.length; h++) {
        imgVanish[h].style.display = "";
    }
}

// intersection observer that makes on scroll animations occur on websites.html

// in the function below, theres an if/else statement that makes elements occur if scrolling. With the else{}, this tells the browser to play the animation more than once upon scrolling.
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting) {
                    entry.target.classList.add('show');
            } else {
                    entry.target.classList.remove('show');
            }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => sectionObserver.observe(el));


// hovering over the small images to make a bigger image pop up on the right side / make images disappear off the screen on websites.html

function openImages2(evt2, buttonHover2) {
    var j, buttonContent2, buttonLink2;
    buttonContent2 = document.getElementsByClassName("buttoncontent2");
    for (j = 0; j < buttonContent2.length; j++) {
buttonContent2[j].style.display = 'none';
    }
    buttonLink2 = document.getElementsByClassName("buttonlinks");
    for (j = 0; j < buttonLink2.length; j++) {
        buttonLink2[j].className = buttonLink2[j].className.replace(" active", "");

    }
document.getElementById(buttonHover2).style.display = "block";
evt2.currentTarget.className += " active";

}

function makeImgVanish2() {
    var y, imgVanish2;
    imgVanish2 = document.getElementsByClassName("buttoncontent2");
    for (y = 0; y < imgVanish2.length; y++) {
        imgVanish2[y].style.display = "";
    }
}


// JavaScript code for search bar 

let keyWords = [
    'How old are you? <br><br> <u><b>Answer:</b></u> 27',
   'What programming languages do you know? <br><br> <u><b>Answer:</b></u> HTML, CSS and JavaScript. I am progressively exploring new languages.',
   'What is your dream goal? <br><br> <u><b>Answer:</b></u> To design, develop and release video games. While Web Development is not necessarily my main passion, it is still something that I can be comfortable doing, and plus you can learn a lot from programming to help you program video games as well.',
    'Where did you learn to code? <br><br> <u><b>Answer:</b></u> On Codecademy.com ',
    'What is your favorite hobby? <br><br> <u><b>Answer:</b></u> Playing video games ',
    'How do I check out your other websites? <br><br> <u><b>Answer:</b></u> Go to the main homepage and click on "Websites".',
    'When did you start programming? <br><br> <u><b>Answer:</b></u> I actually started learning about HTML and CSS back in my freshmen year of high school (2012), but I never pursued it. When I went to college in 2023, I started to re-learn HTML, CSS and started to learn about Github. It was then the following year of 2024 that I started to learn JavaScript.',
    'How do I contact you? <br><br> <u><b>Answer:</b></u> (insert link here)',
    'Do you have any interest in AI? <br><br> <u><b>Answer:</b></u> As of December 28th 2024, I have noticed a trend of how jobs that utilize AI has been rising tremendously. It is almost concerning that I feel like AI might take over so many jobs that involve computer tech.',
];

const resultBox = document.querySelector('.result-boxes');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = keyWords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result) {
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

