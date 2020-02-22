module scenes {
  /**
   * scenes/Play.ts - Main play scene
   *
   * Author: Ailton De Lima - 301018951
   * Date: 2020-02-22
   *
   * @export
   * @class Play
   * @extends {objects.Scene}
   */
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE MEMBERS
    private _rollButton: objects.Button;
    private _dices: objects.Dice[];
    private _dicesLabel: objects.Label[];
    private _dicesResult: number[];
    private _playState: objects.PlayState;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS
    /**
     * Roll each dice and get its result
     *
     * @private
     * @returns {number[]}
     * @memberof Play
     */
    private _getDicesResult(): number[] {
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
      this._dicesLabel = new Array<objects.Label>(config.Game.DICES_QTY);
      this._dicesResult = this._getDicesResult();

      // Set the play state
      this._playState = objects.PlayState.IDLE;

      // Create the Dices and Labels
      for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
        this._dices[iCt] = new objects.Dice(posX, this._dicesResult[iCt]);
        this._dicesLabel[iCt] = new objects.Label(
          this._dicesResult[iCt].toString(),
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

    /**
     * Update the scene according to the current state
     *
     * @memberof Play
     */
    public Update(): void {
      switch (this._playState) {
        case objects.PlayState.REQUEST_ROLL:
          // Get the dices results
          this._dicesResult = this._getDicesResult();

          // Request each dice to roll and display the result, clean current result
          for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
            this._dices[iCt].RollDice(this._dicesResult[iCt]);
            this._dicesLabel[iCt].setText(" ");
          }

          // Set the state to rolling
          this._playState = objects.PlayState.ROLLING;
          break;

        case objects.PlayState.ROLLING:
          let stillRolling = false;
          for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
            this._dices[iCt].Update();
            stillRolling = stillRolling || this._dices[iCt].isRolling;
          }
          if (!stillRolling) {
            this._playState = objects.PlayState.PROCESS_RESULTS;
          }
          break;

        case objects.PlayState.PROCESS_RESULTS:
          for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
            this._dicesLabel[iCt].setText(this._dicesResult[iCt].toString());
          }
          this._playState = objects.PlayState.IDLE;
          break;
      }
    }

    /**
     * Put the objects created on the screen
     *
     * @memberof Play
     */
    public Main(): void {
      for (let iCt = 0; iCt < config.Game.DICES_QTY; iCt++) {
        this.addChild(this._dices[iCt]);
        this.addChild(this._dicesLabel[iCt]);
      }
      this.addChild(this._rollButton);

      this._rollButton.on("click", () => {
        if (this._playState == objects.PlayState.IDLE) {
          this._playState = objects.PlayState.REQUEST_ROLL;
        }
      });
    }
  }
}
