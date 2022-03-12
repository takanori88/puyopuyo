class Puyoimage {
  static initialize() {
    this.puyoImages = []
    for(let i = 0; i < 5; i++) {
      const image = document.getElementById(`puyo_${i + 1}`)
      image.removeAttribute('id')
      image.width = Config.puyoImgWidth
      image.height = Config.puyoImgHeight
      this.puyoImages[i] = image;
    }
    this.batankyuImage = document.getElementById('batankyu')
    this.batankyuImage.width = Config.puyoImgWidth * 6
    this.batankyuImage.style.position = 'absolute'
  }

  static getPuyo(index) {
    return this.puyoImages[index - 1].cloneNode(true)
  }

  static prepareBatankyu(frame) {
    this.gameOverFrame = frame
    Stage.stageElement.appendChild(this.batankyuImage)
  }
}
