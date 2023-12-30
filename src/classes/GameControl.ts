import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    private snake: Snake;
    private food: Food;
    private scorePanel: ScorePanel;
    private isLive = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 10);
        // this.init();
    }
    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler(event: KeyboardEvent) {
        this.snake.setDirection(event.key);
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.snake.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            alert(error + " Game Over!");
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.Level - 1) * 30);
    };

    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;