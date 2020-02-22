module objects {
  /**
   * objects/Dice.ts - Dice class to represent the dice image and events
   *
   * Author: Ailton De Lima - 301018951
   * Date: 2020-02-22
   *
   * @export
   * @class Dice
   * @extends {GameObject}
   */
  export class Dice extends GameObject {
    private static ROLL_FRAMES = 120;
    private static CHANGE_FACE_COUNT = 5;

    // PRIVATE INSTANCE MEMBERS
    private _verticalPosition: number;
    private _isRolling: boolean;
    private _rollCount: number;
    private _diceValue: number;

    // PUBLIC PROPERTIES
    get isRolling(): boolean {
      return this._isRolling;
    }

    // CONSTRUCTOR
    constructor(x: number = 180, value: number, scale: number = 1) {
      super("dice" + value.toString(), x, config.Game.DICE_POS_Y, true);

      this._diceValue = value;
      this.scaleX = scale;
      this.scaleY = scale;

      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {
      if (this._rollCount >= Dice.ROLL_FRAMES) {
        this.image = config.Game.ASSETS.getResult("dice" + this._diceValue.toString()) as any;
        this.Reset();
      }
    }

    private _roll(): void {
      // Change the face each n frames
      if (this._rollCount % Dice.CHANGE_FACE_COUNT == 0) {
        let randomFace = Math.floor(Math.random() * 6 + 1);
        this.image = config.Game.ASSETS.getResult("dice" + randomFace.toString()) as any;
      }
      this.rotation += 10;
      this._rollCount++;
    }

    // PUBLIC METHODS
    public Start(): void {
      this.Reset();
    }

    public Update(): void {
      if (this._isRolling) {
        this._roll();
        this._checkBounds();
      }
    }

    public Reset(): void {
      this._rollCount = 0;
      this._isRolling = false;
      this.rotation = 0;
    }

    public RollDice(value: number): void {
      this._diceValue = value;
      this._isRolling = true;
    }
  }
}
