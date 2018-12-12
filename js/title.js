import TitleScene from './js/title.js'

let TitleScene = new TitleScene();

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 425,
}

let game = new Phaser.Game(config
game.scene.add('TitleScene', TitleScene);
game.scene.start('TitleScene');