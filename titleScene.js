class TitleScene extends.Phaser.Scene{
    constructor(){
        super({key: 'TitleScene'});
    }
    preload(){
        this.load.image('backgroundTitle','assets/backgroundTitle.png');
        
    }
    create(){
        let background - this.add.sprite(0,0,'backgroundTitle');
        background.setOrigin(0,0);
    }
}

export default TitleScene;

