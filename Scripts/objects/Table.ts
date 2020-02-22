module objects {
  export class Table extends GameObject {
    // constructor
    constructor() {
      super("diceTable");

      this.Start();
    }

    // PRIVATE METHODS
    protected _checkBounds(): void {}

    // PUBLIC METHODS

    /**
     * This function is used for initialization
     *
     * @memberof Button
     */
    public Start(): void {
      this.name = "Table";
    }

    public Update(): void {}

    public Reset(): void {}
  }
}
