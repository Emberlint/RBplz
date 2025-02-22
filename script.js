const showImage = document.getElementById("showImage");
const questionText = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

const noImages = [
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"
];

const noTexts = [
    "拜託嘛哥...",
    "求求你了！",
    "真的不要生氣啦！",
    "真的真的不要生氣嘛！！",
    "再給小兔一次機會好不好？"
];

let name = '';
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
name = params.get('name') ? params.get('name') : '';
questionText.textContent += ` ${name}`;

let clickCount = 0;

noButton.addEventListener("click", function () {
    clickCount += 1;
    if (clickCount < noImages.length) {
        showImage.src = noImages[clickCount];
        noButton.innerText = noTexts[clickCount];
    }
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    showImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;
});

yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-wrapper">
            <p class="yes-text">耶！！！最愛你了！！！</p>
            <img src="images/7.png" alt="開心" class="yes-image">
        </div>
    `;
});
