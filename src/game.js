//
window.addEventListener("load", () => {
  initialize();

  loop();
})

let mode;
let frame;
let combinationCount = 0;

function initialize() {
  PuyoImage.initialize();
  Stage.initialize();
  Player.initialize();
  Score.initialize();
  mode = 'start';
  frame = 0;
}
