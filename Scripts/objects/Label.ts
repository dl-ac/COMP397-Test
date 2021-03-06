module objects {
  export class Label extends createjs.Text {
    private _isCentered: boolean;

    // constructor
    constructor(
      public labelString: string = "empty label",
      public fontSize: string = "12px",
      public fontFamily: string = "Consolas",
      public fontColour: string = "#000000",
      x: number = 0,
      y: number = 0,
      public isCentered: boolean = false
    ) {
      super(labelString, fontSize + " " + fontFamily, fontColour);
      this._isCentered = isCentered;

      if (isCentered) {
        this.regX = this.getBounds().width * 0.5;
        this.regY = this.getMeasuredLineHeight() * 0.5;
      }

      this.x = x;
      this.y = y;
    }

    // methods

    public setText(newText: string) {
      this.text = newText;
      if (this._isCentered) {
        this.regX = this.getBounds().width * 0.5;
        this.regY = this.getMeasuredLineHeight() * 0.5;
      }
    }
  }
}
