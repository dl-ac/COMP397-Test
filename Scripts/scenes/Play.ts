module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _rollButton: objects.Button;
    private _dices: objects.Dice[];
    private _dicesResult: objects.Label[];
    private _playState: objects.PlayState;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS
    /**
     * Function to roll the dices
     *
     * @private
     * @memberof Play
     */
    private RollDices(): void {
      let dices: number[] = this.GetDicesResult();
    }

    /**
     * Roll each dice and get its result
     *
     * @private
     * @returns {number[]}
     * @memberof Play
     */
    private GetDicesResult(): number[] {
      let result: number[] = new Array(config.Game.DICES_QTY);

      for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
        result[iCt] = Math.floor(Math.random() * 6 + 1);
      }

      return result;
    }

    // PUBLIC METHODS

    //initialize and instatiate
    public Start(): void {
      let posX = 180;
      this._dices = new Array<objects.Dice>(config.Game.DICES_QTY);
      this._dicesResult = new Array<objects.Label>(config.Game.DICES_QTY);

      // Set the play state
      this._playState = objects.PlayState.IDLE;

      // Create the Dices and Labels
      for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
        this._dices[iCt] = new objects.Dice(posX);
        this._dicesResult[iCt] = new objects.Label(
          "R",
          "24px",
          "Consolas",
          "#000",
          posX,
          config.Game.DICE_RESULT_POS_Y,
          true
        );
        posX += 280;
      }
      this._rollButton = new objects.Button("rollButton", 320, 430, true);

      this.Main();
    }

    public Update(): void {
      switch (this._playState) {
          case objects.Ga
      }
    }

    public Main(): void {
      for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
        this.addChild(this._dices[iCt]);
        this.addChild(this._dicesResult[iCt]);
      }
      this.addChild(this._rollButton);

      this._rollButton.on("click", this.RollDices);
    }
  }
}
