class Snake {
  head: HTMLElement;
  body: HTMLCollection;
  element: HTMLElement;
  direction: string = "ArrowRight";
  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    this.body = this.element.getElementsByTagName("div");
    setInterval(() => {}, 1000);
  }
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value) {
    if (this.X === value) return;
    if (value < 0 || value > 290) throw new Error("Snake hit the wall!");
    if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
        if (value > this.X) value = this.X - 10;
        else value = this.X + 10;
    };
    this.moveBody();
    this.head.style.left = value + "px";
    this.checkHeadBody();
  }
  set Y(value) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) throw new Error("Snake hit the wall!");
    if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
        if (value > this.Y) value = this.Y - 10;
        else value = this.Y + 10;
    };
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkHeadBody();
  }
  addBody() {
    const div = document.createElement("div");
    this.element.insertAdjacentElement("beforeend", div);
  }
  setDirection(direction: string) {
    this.direction = direction;
  }
  moveBody() {
    for (let i = this.body.length - 1; i > 0; i--) {
      let X = (this.body[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.body[i - 1] as HTMLElement).offsetTop;
      (this.body[i] as HTMLElement).style.left = X + "px";
      (this.body[i] as HTMLElement).style.top = Y + "px";
    }
  }
  checkHeadBody() {
    for (let i = 1; i < this.body.length; i++) {
      let bd = this.body[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) throw new Error("Snake hit itself!");
    }
  }
}

export default Snake;
