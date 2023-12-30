import "./style/index.less";
import GameControl from "./classes/GameControl";

const game = new GameControl();
const btn = document.getElementById("startBtn")!;
if (btn) btn.addEventListener("click", startHandler);
function startHandler(): void {
    game.init();
}
