module objects {
  export class Dice extends GameObject {
    // PRIVATE INSTANCE MEMBERS
    private _verticalPosition: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor(x: number = 180) {
      super("diceBlank", x, config.Game.DICE_POS_Y, true);

      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {}

    private _move(): void {}

    // PUBLIC METHODS
    public Start(): void {}

    public Update(): void {
      this._move();
      this._checkBounds();
    }

    public Reset(): void {}
  }
}
