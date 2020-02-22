module scenes {
  export class Start extends objects.Scene {
    // CONSTANTS

    // PRIVATE INSTANCE MEMBERS
    private _welcomeLabel: objects.Label;
    private _play2Label: objects.Label;
    private _play4Label: objects.Label;
    private _startTwoButton: objects.Button;
    private _startFourButton: objects.Button;

    // PUBLIC PROPERTIES

    // CONSTRUCTOR
    constructor() {
      super();

      this.Start();
    }

    // PRIVATE METHODS

    // PUBLIC METHODS
    public Start(): void {
      //instantiate a new Text object
      this._welcomeLabel = new objects.Label("COMP397 - Midterm Test", "40px", "Consolas", "#000000", 320, 180, true);

      // Labels
      this._play2Label = new objects.Label("Play 2d6", "36px", "Consolas", "#006400", 160, 370, true);
      this._play4Label = new objects.Label("Play 4d6", "36px", "Consolas", "#FF0000", 480, 370, true);

      // buttons
      this._startTwoButton = new objects.Button("startButton", 160, 430, true);
      this._startFourButton = new objects.Button("startButton", 480, 430, true);

      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._welcomeLabel);

      this.addChild(this._play2Label);
      this.addChild(this._play4Label);

      this.addChild(this._startTwoButton);
      this.addChild(this._startFourButton);

      this._startTwoButton.on("click", () => {
        config.Game.SCENE = scenes.State.PLAY;
      });

      this._startFourButton.on("click", () => {
        config.Game.SCENE = scenes.State.PLAY_FOUR;
      });
    }
  }
}
