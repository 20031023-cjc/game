let stars = 0;
let autoLevel = 0;
let upgradeCost = 10;

const starsEl = document.getElementById('stars');
const starEl = document.getElementById('star');
const upgradeBtn = document.getElementById('upgradeBtn');
const upgradeCostEl = document.getElementById('upgradeCost');
const autoLevelEl = document.getElementById('autoLevel');

// 点击星星
starEl.addEventListener('click', () => {
  stars += 1;
  updateStars();
});

// 升级自动生成
upgradeBtn.addEventListener('click', () => {
  if (stars >= upgradeCost) {
    stars -= upgradeCost;
    autoLevel++;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    autoLevelEl.textContent = autoLevel;
    upgradeCostEl.textContent = upgradeCost;
    updateStars();
  }
});

// 自动增加星星
setInterval(() => {
  stars += autoLevel;
  updateStars();
}, 1000);

// 更新星星显示
function updateStars() {
  starsEl.textContent = stars;
}
