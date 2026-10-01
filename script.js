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

const url = new URL(window.location.href);
const name = url.searchParams.get('name') || '';
questionText.textContent += ` ${name}`;

let clickCount = 0;

function updateButtons() {
    if (clickCount === 0) return;

    // 每按一次「不要」，和好就越來越大
    const scales = [1, 2, 4, 8, 16, 35];
    const yesSize = scales[Math.min(clickCount, scales.length - 1)];

    yesButton.style.transform = `scale(${yesSize})`;

    // 放大後讓「和好」蓋在所有東西上面
    yesButton.style.zIndex = clickCount >= 4 ? '100' : '2';

    // 「不要」逐漸往右跑
    noButton.style.transform = `translateX(${clickCount * 50}px)`;
}

window.addEventListener('resize', function () {
    if (yesButton.isConnected) updateButtons();
});

noButton.addEventListener("click", function () {
    // 先使用目前索引，確保第一次點擊從 images/2.png 開始。
    if (clickCount < noImages.length) {
        showImage.src = noImages[clickCount];
        noButton.innerText = noTexts[clickCount];
    }
    clickCount += 1;

    updateButtons();
    // 圖片與問題文字保持原位，只變更按鈕的 transform。
});

yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-wrapper">
            <p class="yes-text">耶！！！最愛你了！！！</p>
            <img src="images/7.png" alt="開心" class="yes-image">
        </div>
    `;
});
