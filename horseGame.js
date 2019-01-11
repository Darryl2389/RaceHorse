
function preload() {
    // load images
    this.load.image('background', 'assets/background.png');
    this.load.image('fence', 'assets/hurdle.png');
    this.load.image('clouds', 'assets/clouds.png');
    this.load.image('horse', 'assets/virtualHorse.png');
    this.load.image('gameOver', 'assets/gameOver.png');
    console.log(gameOver);

}

var platforms;
var score = 0;
var scoreText;


// called once after the preload ends
function create() {

    platforms = this.physics.add.staticGroup();

    // create bg sprite 
    bg = this.add.sprite(0, 0, 'background');

    // change the origin to the top-left corner
    bg.setOrigin(0, 0);

    gameW = this.sys.game.config.width;
    gameH = this.sys.game.config.height;

    console.log(gameW, gameH);

    // create the horse
    player = this.physics.add.sprite(100, 340, 'horse');

    player.body.setGravityY(0);
    player.setCollideWorldBounds(true);
    //player.setBounce
    player.setSize(100, 80, true);

    // create a fence
    fence = this.physics.add.sprite(600, 360, 'fence');
    fence.setSize(40, 80, true);
    fence.setCollideWorldBounds(true);
    //create the clouds
    clouds = this.add.sprite(850, 575, 'clouds');

    this.fenceSpeed = 5;
    this.fenceBoundaryXMax = 700;
    this.fenceBoundaryXMin = 25;

    cursors = this.input.keyboard.createCursorKeys();


    //set a collider for fence and player
    this.physics.add.overlap(player, fence, gameOver, null, this);

    //set a collider for fence and player

    //console.log(collision);

    console.log(bg);
    console.log(this);
    console.log(fence);


    scoreText = this.add.text(600, 15, "Score :" + score, {
        fontSize: "32px",
        fill: "#000"
    });


}

function update() {
    if (this.input.activePointer.isDown) {
        player.body.setVelocityY(-300)
        player.body.setVelocityX(100)
    }

    fence.x -= this.fenceSpeed;
    //console.log(this.fenceBoundaryXMin);

    if (fence.x < this.fenceBoundaryXMin) {
        fence.x = 800;
    }
    if (player.x > this.fenceBoundaryXMax) {
        player.x = 0;
    }
    if (fence.x <= 25) score += 1;
    scoreText.setText('score: ' + score);
}

function myCollision() {

    //if (fence.x == player.x) {
    player.x = -500;
    console.log(player.x);

    //}
    //console.log("collision occurred");

}

function gameOver() {

    gameOver = this.add.sprite(400, 215, 'gameOver');
    gameOver.setSize(100, 300, true);
    this.scene.pause();
}


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 425,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500,

            },
            debug: false
        }
    },
    scene: {
        preload,
        create,
        update,
        gameOver
    }
};
var game = new Phaser.Game(config);


