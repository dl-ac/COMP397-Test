module objects {
  /**
   * objects/PlayState.ts - Enumeration to define the state of the game play
   *
   * Author: Ailton De Lima - 301018951
   * Date: 2020-02-22
   *
   * @export
   * @enum {number}
   */
  export enum PlayState {
    IDLE,
    REQUEST_ROLL,
    ROLLING,
    WAITING_RESULTS,
    PROCESS_RESULTS,
    NUM_OF_STATES
  }
}
