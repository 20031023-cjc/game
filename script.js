* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

.scoreboard {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  z-index: 1000;
}

.game-area {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 星星样式 */
.star {
  position: absolute;
  width: 40px;
  height: 40px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/1/18/Five-pointed_star.svg') no-repeat center center;
  background-size: contain;
  animation: fall linear;
  cursor: pointer;
}

/* 星星下落动画 */
@keyframes fall {
  0% {
    top: -50px;
    opacity: 1;
    transform: rotate(0deg);
  }
  100% {
    top: 100vh;
    opacity: 0.6;
    transform: rotate(360deg);
  }
}
