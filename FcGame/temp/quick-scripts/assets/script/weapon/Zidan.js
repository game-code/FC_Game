(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/weapon/Zidan.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b826aFNWKpDM6ff+23vo2AN', 'Zidan', __filename);
// script/weapon/Zidan.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Zidan = /** @class */ (function (_super) {
    __extends(Zidan, _super);
    function Zidan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 500;
        // LIFE-CYCLE CALLBACKS:
        _this._putCallBack = null;
        return _this;
        // update (dt) {},
    }
    Zidan.prototype.onLoad = function () { };
    Zidan.prototype.init = function (pos) {
        var _this = this;
        this.node.position = pos;
        this.node.active = true;
        var time = 1130 / this.speed;
        this.node.stopAllActions();
        this.node.runAction(cc.moveBy(time, cc.p(1130, 0)));
        this.scheduleOnce(function () {
            if (_this._putCallBack) {
                _this._putCallBack();
                _this._putCallBack = null;
            }
        }, time);
    };
    Zidan.prototype.setPutCallBack = function (putCallBack) {
        this._putCallBack = putCallBack;
    };
    Zidan.prototype.onCollisionEnter = function (other, self) {
        this.unscheduleAllCallbacks();
        if (this._putCallBack) {
            this._putCallBack();
            this._putCallBack = null;
        }
    };
    Zidan.prototype.onCollisionExit = function (other, self) {
    };
    Zidan = __decorate([
        ccclass
    ], Zidan);
    return Zidan;
}(cc.Component));
exports.default = Zidan;

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
        //# sourceMappingURL=Zidan.js.map
        