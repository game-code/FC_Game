"use strict";
cc._RF.push(module, '259982pYrJK2oh6fhqSx8GA', 'Config');
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