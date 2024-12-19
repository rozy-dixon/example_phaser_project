class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        // loading bar
        // src = https://github.com/nathanaltice/Paddle-Parkour-P360
        let loadingBar = {
            outline: this.add.graphics(),
            fill: this.add.graphics(),
        }

        loadingBar.outline.lineStyle(5, 0xffffff)
        loadingBar.outline.strokeRect(
            centerX / 2 - 10,
            centerY - 10,
            width / 2 + 20,
            50,
        )

        this.load.on('progress', (value) => {
            loadingBar.fill.clear()
            loadingBar.fill.fillStyle(0xffffff)
            loadingBar.fill.fillRect(
                centerX / 2,
                centerY,
                (width * value) / 2,
                30,
            )
        })
        this.load.on('complete', () => {
            loadingBar.outline.destroy()
            loadingBar.fill.destroy()
        })
    }

    create() {
        // running checks
        console.log('%cLOAD SCENE :^)', testColor)
        // moving through
        this.scene.start('playScene')
    }
}
