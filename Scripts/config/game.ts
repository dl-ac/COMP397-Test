module config {
  export class Game {
    public static SCREEN_WIDTH: number = 640;
    public static SCREEN_HEIGHT: number = 480;
    public static SCENE: scenes.State;
    public static ASSETS: createjs.LoadQueue;
    public static FPS: number = 60; // 60 Frames per second
    public static DICE_POS_Y: number = 150;
    public static DICE_RESULT_POS_Y: number = 280;
  }
}
