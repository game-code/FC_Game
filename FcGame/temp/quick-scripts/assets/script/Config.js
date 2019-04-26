(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Config.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '259982pYrJK2oh6fhqSx8GA', 'Config', __filename);
// script/Config.ts

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["PLYAER_IDLE_01"] = 0] = "PLYAER_IDLE_01";
    PlayerState[PlayerState["PLYAER_IDLE_02"] = 1] = "PLYAER_IDLE_02";
    PlayerState[PlayerState["PLYAER_NORMAL"] = 2] = "PLYAER_NORMAL";
    PlayerState[PlayerState["PLYAER_BOOM"] = 3] = "PLYAER_BOOM";
})(PlayerState = exports.PlayerState || (exports.PlayerState = {}));
var AudioType;
(function (AudioType) {
    AudioType[AudioType["PLYAER_ZIDAN"] = 0] = "PLYAER_ZIDAN";
    AudioType[AudioType["PLYAER_DEAD"] = 1] = "PLYAER_DEAD";
    AudioType[AudioType["PLYAER_GET"] = 2] = "PLYAER_GET";
})(AudioType = exports.AudioType || (exports.AudioType = {}));

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Config.js.map
        