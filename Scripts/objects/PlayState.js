"use strict";
var objects;
(function (objects) {
    /**
     * objects/PlayState.ts - Enumeration to define the state of the game play
     *
     * Author: Ailton De Lima - 301018951
     * Date: 2020-02-22
     *
     * @export
     * @enum {number}
     */
    var PlayState;
    (function (PlayState) {
        PlayState[PlayState["IDLE"] = 0] = "IDLE";
        PlayState[PlayState["REQUEST_ROLL"] = 1] = "REQUEST_ROLL";
        PlayState[PlayState["ROLLING"] = 2] = "ROLLING";
        PlayState[PlayState["WAITING_RESULTS"] = 3] = "WAITING_RESULTS";
        PlayState[PlayState["PROCESS_RESULTS"] = 4] = "PROCESS_RESULTS";
        PlayState[PlayState["NUM_OF_STATES"] = 5] = "NUM_OF_STATES";
    })(PlayState = objects.PlayState || (objects.PlayState = {}));
})(objects || (objects = {}));
//# sourceMappingURL=PlayState.js.map