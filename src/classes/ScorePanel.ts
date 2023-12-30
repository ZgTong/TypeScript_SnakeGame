class ScorePanel {
    private score = 0;
    private level = 1;
    private scoreEle: HTMLElement;
    private levelEle: HTMLElement;
    private maxLevel: number;
    private upScore: number;
    constructor(maxLevel: number = 50, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    get Level() {
        return this.level;
    }
    get Score() {
        return this.score;
    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + "";
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) this.levelEle.innerHTML = ++this.level + "";
    }
}

export default ScorePanel;
