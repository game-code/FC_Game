"use strict";
cc._RF.push(module, '521f56g7ZZG24sDyJfVvDL8', 'Zidan');
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