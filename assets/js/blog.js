document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question h3');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const wasActive = question.classList.contains('active');

            questions.forEach((item) => {
                item.classList.remove('active');
                item.nextElementSibling.classList.remove('active');
                item.nextElementSibling.style.display = 'none';
            });

            if (!wasActive) {
                question.classList.add('active');
                answer.classList.add('active');
                answer.style.display = 'block';
            }

            question.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
});

const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible = false;

let people = [
    {
        photo: 'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
        name: "Bryanna L.",
        profession: "....",
        description: "“I can not say how thankful I am for Chris. He was so very helpful and informative. He took his time with me, answered every question I had, and was just so kind. I would highly recommend him. Thank you again.”"
    },
    {
        photo: "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
        name: "Jackie T",
        profession: "....",
        description: "“Great people to work with and they made the process very easy and understandable. Highly recommended!” "
    },
    {
        photo: "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
        name: "Rich R.",
        profession: "....",
        description: "“Chris was extremely helpful during the estate planning process. My wife would highly recommend it.”"
    }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

function slide(whichSide, personNumber) {
    let reviewWrapWidth = reviewWrap.offsetWidth + "px";
    let descriptionHeight = description.offsetHeight + "px";
    let side1symbol = whichSide === "left" ? "" : "-";
    let side2symbol = whichSide === "left" ? "-" : "";

    let tl = gsap.timeline();

    if (isChickenVisible) {
        tl.to(chicken, { duration: 0.4, opacity: 0 });
    }

    tl.to(reviewWrap, { duration: 0.4, opacity: 0, translateX: `${side1symbol + reviewWrapWidth}` });
    tl.to(reviewWrap, { duration: 0, translateX: `${side2symbol + reviewWrapWidth}` });

    setTimeout(() => { imgDiv.style.backgroundImage = people[personNumber].photo; }, 400);
    setTimeout(() => { description.style.height = descriptionHeight; }, 400);
    setTimeout(() => { personName.innerText = people[personNumber].name; }, 400);
    setTimeout(() => { profession.innerText = people[personNumber].profession; }, 400);
    setTimeout(() => { description.innerText = people[personNumber].description; }, 400);

    tl.to(reviewWrap, { duration: 0.4, opacity: 1, translateX: 0 });

    if (isChickenVisible) {
        tl.to(chicken, { duration: 0.4, opacity: 1 });
    }
}

function setNextCardLeft() {
    currentPerson = (currentPerson + 1) % 3;
    slide("left", currentPerson);
}

function setNextCardRight() {
    currentPerson = (currentPerson - 1 + 3) % 3;
    slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
    const newOpacity = isChickenVisible ? "0" : "1";
    const buttonText = isChickenVisible ? "Surprise me" : "Remove the chicken";
    const btnClassToAdd = isChickenVisible ? "surprise-me-btn" : "hide-chicken-btn";
    const btnClassToRemove = isChickenVisible ? "hide-chicken-btn" : "surprise-me-btn";

    chicken.style.opacity = newOpacity;
    imgDiv.classList.toggle("move-head");
    surpriseMeBtn.innerText = buttonText;
    surpriseMeBtn.classList.add(btnClassToAdd);
    surpriseMeBtn.classList.remove(btnClassToRemove);
    isChickenVisible = !isChickenVisible;
});

window.addEventListener("resize", () => {
    description.style.height = "100%";
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const topnav = document.getElementById('topnav');
    const scrollLine = document.getElementById('scrollLine');

    window.addEventListener('scroll', function() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollLine.style.width = scrollPercentage + '%';
    });
});
