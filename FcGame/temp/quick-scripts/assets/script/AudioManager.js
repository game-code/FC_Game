(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/AudioManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4893cZrqdRLbaDdq8wPx7Hy', 'AudioManager', __filename);
// script/AudioManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("./Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.bgMusic = null;
        _this.jqingEnterBgMusic = null;
        _this.jqingStartBgMusic = null;
        _this.zidan = null;
        // LIFE-CYCLE CALLBACKS:
        _this.bgMusicId = -1;
        return _this;
        // update (dt) {},
    }
    AudioManager_1 = AudioManager;
    AudioManager.prototype.onLoad = function () {
        AudioManager_1.instance = this;
        this.playMusic(this.bgMusic);
        // this.playMusic(this.jqingEnterBgMusic)
        // let time = this.getMusicDuration(this.bgMusicId)
        // this.scheduleOnce(() => {
        //     this.playMusic(this.jqingStartBgMusic)
        // }, time)
    };
    AudioManager.prototype.playEffectByType = function (type) {
        switch (type) {
            case Config_1.AudioType.PLYAER_ZIDAN:
                {
                    this.playEffect(this.zidan);
                }
                break;
            case Config_1.AudioType.PLYAER_GET:
                {
                }
                break;
            case Config_1.AudioType.PLYAER_DEAD:
                {
                }
                break;
        }
    };
    AudioManager.prototype.playBossMusic = function () {
        this.playMusic(this.jqingEnterBgMusic);
    };
    AudioManager.prototype.playMusic = function (path) {
        if (this.bgMusicId != -1)
            cc.audioEngine.stop(this.bgMusicId);
        this.bgMusicId = cc.audioEngine.play(path, true, 1);
    };
    AudioManager.prototype.getMusicDuration = function (id) {
        return cc.audioEngine.getDuration(id);
    };
    AudioManager.prototype.playEffect = function (path, isloop) {
        if (isloop === void 0) { isloop = false; }
        return cc.audioEngine.play(path, isloop, 1);
    };
    AudioManager.prototype.stopEffect = function (id) {
        cc.audioEngine.stop(id);
    };
    AudioManager.prototype.stopAllAudio = function (id) {
        cc.audioEngine.stopAll();
    };
    AudioManager.instance = null;
    __decorate([
        property(cc.Label)
    ], AudioManager.prototype, "label", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AudioManager.prototype, "bgMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AudioManager.prototype, "jqingEnterBgMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AudioManager.prototype, "jqingStartBgMusic", void 0);
    __decorate([
        property(cc.AudioClip)
    ], AudioManager.prototype, "zidan", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
    var AudioManager_1;
}(cc.Component));
exports.default = AudioManager;

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
        //# sourceMappingURL=AudioManager.js.map
        