module scenes {
  /**
   * scenes/PlayFour.ts - Main play scene with Four dices
   *
   * Author: Ailton De Lima - 301018951
   * Date: 2020-02-22
   *
   * @export
   * @class PlayFour
   * @extends {objects.Scene}
   */
  export class PlayFour extends objects.Scene {
    // CONSTANTS
    private static DICES_QTY = 4;

    // PRIVATE INSTANCE MEMBERS
    private _rollButton: objects.Button;
    private _dices: objects.Dice[];
    private _dicesLabel: objects.Label[];
    private _dicesResult: number[];
    private _playState: objects.PlayState;
    private _diceTable: objects.Table;
    private _title: objects.Label;
    private _resultLabel: objects.Label;

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
      let result: number[] = new Array(PlayFour.DICES_QTY);

      for (let iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
        result[iCt] = Math.floor(Math.random() * 6 + 1);
      }

      return result;
    }

    private _getFinalResult(): number {
      let result: number = 0;
      let minVal: number = 7;

      for (let iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
        result += this._dicesResult[iCt];
        if (this._dicesResult[iCt] < minVal) {
          minVal = this._dicesResult[iCt];
        }
      }

      result -= minVal;

      return result;
    }

    // PUBLIC METHODS

    //initialize and instatiate
    public Start(): void {
      let posX = 110;
      this._dices = new Array<objects.Dice>(PlayFour.DICES_QTY);
      this._dicesLabel = new Array<objects.Label>(PlayFour.DICES_QTY);
      this._dicesResult = this._getDicesResult();

      // Title and result
      this._title = new objects.Label("Roll 4d6", "48px", "Consolas", "#000", 320, 40, true);
      this._resultLabel = new objects.Label(
        "Result: " + this._getFinalResult(),
        "42px",
        "Consolas",
        "#000",
        60,
        330,
        false
      );

      // Create the table
      this._diceTable = new objects.Table();

      // Set the play state
      this._playState = objects.PlayState.IDLE;

      // Create the Dices and Labels
      for (let iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
        this._dices[iCt] = new objects.Dice(posX, this._dicesResult[iCt], 0.5);
        this._dicesLabel[iCt] = new objects.Label(
          this._dicesResult[iCt].toString(),
          "24px",
          "Consolas",
          "#000",
          posX,
          config.Game.DICE_RESULT_POS_Y,
          true
        );
        posX += 140;
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
          for (let iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
            this._dices[iCt].RollDice(this._dicesResult[iCt]);
            this._dicesLabel[iCt].setText(" ");
          }
          this._resultLabel.setText("Result: ?");

          // Set the state to rolling
          this._playState = objects.PlayState.ROLLING;
          break;

        case objects.PlayState.ROLLING:
          let stillRolling = false;
          for (let iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
            this._dices[iCt].Update();
            stillRolling = stillRolling || this._dices[iCt].isRolling;
          }
          if (!stillRolling) {
            this._playState = objects.PlayState.PROCESS_RESULTS;
          }
          break;

        case objects.PlayState.PROCESS_RESULTS:
          for (let iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
            this._dicesLabel[iCt].setText(this._dicesResult[iCt].toString());
          }
          this._resultLabel.setText("Result: " + this._getFinalResult());
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
      this.addChild(this._diceTable);
      this.addChild(this._title);
      this.addChild(this._resultLabel);

      for (let iCt = 0; iCt < PlayFour.DICES_QTY; iCt++) {
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
