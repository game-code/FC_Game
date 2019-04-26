(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/player/PlayerLogic.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '399e7xjMvVLFb6gQadAVj0H', 'PlayerLogic', __filename);
// script/player/PlayerLogic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseLogic_1 = require("../BaseLogic");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerLogic = /** @class */ (function (_super) {
    __extends(PlayerLogic, _super);
    function PlayerLogic(_playerUI) {
        var _this = _super.call(this) || this;
        // attr
        _this.moveSpeed = 200;
        _this.zidanMaxNum = 5;
        _this.zidanCurNum = 0;
        _this.zidanGapTime = 0.05;
        _this.zidanAddTime = 0;
        _this.maxHp = 16;
        _this.curHp = 16;
        _this.atk = 1;
        _this.playerUI = _playerUI;
        return _this;
    }
    PlayerLogic.prototype.init = function () {
    };
    return PlayerLogic;
}(BaseLogic_1.default));
exports.default = PlayerLogic;

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
        //# sourceMappingURL=PlayerLogic.js.map
        