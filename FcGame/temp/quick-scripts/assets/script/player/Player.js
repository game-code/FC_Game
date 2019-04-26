(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/player/Player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f55c8c5S5tNILt6PoC9K+k+', 'Player', __filename);
// script/player/Player.ts

Object.defineProperty(exports, "__esModule", { value: true });
var PlayerLogic_1 = require("./PlayerLogic");
var zidan_1 = require("../weapon/zidan");
var AudioManager_1 = require("../AudioManager");
var Config_1 = require("../Config");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playerZidanPre = null;
        _this.playerPao = null;
        _this.followNode = null;
        // attr
        _this.keyCodeMap = {};
        _this.curKey = -1;
        _this.directionY = 0;
        _this.playerLogic = null;
        _this.zidanNodes = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDonw, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        // init
        this.playerLogic = new PlayerLogic_1.default(this);
        this.zidanNodes = new cc.NodePool(zidan_1.default);
        for (var i = 0; i < 10; ++i) {
            var zidanNode = cc.instantiate(this.playerZidanPre);
            this.zidanNodes.put(zidanNode);
        }
    };
    Player.prototype.onDestroy = function () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDonw, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    Player.prototype.onEnable = function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true
        // cc.director.getCollisionManager().enabledDebugDraw = true
    };
    Player.prototype.onDisable = function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDrawBoundingBox = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    };
    Player.prototype.onCollisionEnter = function (other, self) {
        var selfAabb = self.world.aabb;
        var otherAabb = other.world.aabb;
        cc.log(other);
        if (cc.Intersection.rectRect(selfAabb, otherAabb)) {
            // `if (this.directX < 0 && (selfPreAabb.xMax > otherPreAabb.xMax)) {
            //     this.node.x = otherPreAabb.xMax + selfPreAabb.width / 2 - this.node.parent.x
            //     this.collisionX = -1;
            // } else if (this.directX > 0 && (selfPreAabb.xMin < otherPreAabb.xMin)) {
            //     this.node.x = otherPreAabb.xMax - selfPreAabb.width / 2 - this.node.parent.x
            //     this.collisionX = 1;
            // }`
        }
    };
    Player.prototype.onCollisionExit = function () {
    };
    Player.prototype.onKeyDonw = function (event) {
        var codeType = event.keyCode;
        switch (codeType) {
            case cc.KEY.up:
            case cc.KEY.w:
                {
                    this.directionY = 1;
                }
                break;
            case cc.KEY.down:
            case cc.KEY.s:
                {
                    this.directionY = -1;
                }
                break;
            case cc.KEY.left:
            case cc.KEY.a:
                {
                    this.keyCodeMap[cc.KEY.a] = true;
                    this.curKey = cc.KEY.a;
                }
                break;
            case cc.KEY.right:
            case cc.KEY.d:
                {
                    this.keyCodeMap[cc.KEY.d] = true;
                    this.curKey = cc.KEY.d;
                }
                break;
            case cc.KEY.j:
            case cc.KEY.space:
                {
                    this.keyCodeMap[cc.KEY.j] = true;
                }
                break;
            default:
                break;
        }
        // cc.log(this.node.position)
    };
    Player.prototype.onKeyUp = function (event) {
        var codeType = event.keyCode;
        switch (codeType) {
            case cc.KEY.up:
            case cc.KEY.w:
                {
                    this.directionY = 0;
                }
                break;
            case cc.KEY.down:
            case cc.KEY.s:
                {
                    this.directionY = 0;
                }
                break;
            case cc.KEY.left:
            case cc.KEY.a:
                {
                    this.keyCodeMap[cc.KEY.a] = false;
                }
                break;
            case cc.KEY.right:
            case cc.KEY.d:
                {
                    this.keyCodeMap[cc.KEY.d] = false;
                }
                break;
            case cc.KEY.j:
            case cc.KEY.space:
                {
                    this.keyCodeMap[cc.KEY.j] = false;
                }
                break;
            default:
                break;
        }
    };
    Player.prototype.getKeyPress = function (keyCode) {
        return this.keyCodeMap[keyCode];
    };
    Player.prototype.update = function (dt) {
        var _this = this;
        // 移动
        if (this.keyCodeMap[cc.KEY.a] && this.keyCodeMap[cc.KEY.d]) {
            if (this.curKey == cc.KEY.a) {
                if (this.getKeyPress(cc.KEY.a)) {
                    this.node.x -= this.playerLogic.moveSpeed * dt;
                }
                else {
                    this.node.x += this.playerLogic.moveSpeed * dt;
                }
            }
            else if (this.curKey == cc.KEY.d) {
                if (this.getKeyPress(cc.KEY.d)) {
                    this.node.x += this.playerLogic.moveSpeed * dt;
                }
                else {
                    this.node.x -= this.playerLogic.moveSpeed * dt;
                }
            }
        }
        else {
            if (this.getKeyPress(cc.KEY.a)) {
                this.node.x -= this.playerLogic.moveSpeed * dt;
            }
            else if (this.getKeyPress(cc.KEY.d)) {
                this.node.x += this.playerLogic.moveSpeed * dt;
            }
        }
        this.node.y += this.playerLogic.moveSpeed * dt * this.directionY;
        if (this.followNode.getPositionX() + this.node.width / 2. - this.node.getPositionX() >= 565) {
            this.node.x = this.followNode.getPositionX() - 565 + this.node.width / 2.;
        }
        else if (this.node.getPositionX() + this.node.width / 2. - this.followNode.getPositionX() >= 565) {
            this.node.x = this.followNode.getPositionX() + 565 - this.node.width / 2.;
        }
        if (this.followNode.getPositionY() + this.node.height / 2. - this.node.getPositionY() >= 320) {
            this.node.y = this.followNode.getPositionY() - 320 + this.node.height / 2.;
        }
        else if (this.node.getPositionY() + this.node.height / 2. - this.followNode.getPositionY() >= 320) {
            this.node.y = this.followNode.getPositionY() + 320 - this.node.height / 2.;
        }
        // 发射子弹
        this.playerLogic.zidanAddTime += dt;
        if (this.keyCodeMap[cc.KEY.j]) {
            if (this.playerLogic.zidanAddTime > this.playerLogic.zidanGapTime &&
                this.playerLogic.zidanCurNum < this.playerLogic.zidanMaxNum) {
                AudioManager_1.default.instance.playEffectByType(Config_1.AudioType.PLYAER_ZIDAN);
                var zidan_2 = this.getZidan();
                var worldPos = this.node.convertToWorldSpaceAR(this.playerPao.position);
                var pos = this.node.parent.convertToNodeSpaceAR(worldPos);
                zidan_2.parent = this.node.parent;
                zidan_2.getComponent(zidan_1.default).init(pos);
                zidan_2.getComponent(zidan_1.default).setPutCallBack(function () {
                    _this.playerLogic.zidanCurNum--;
                    _this.putZidan(zidan_2);
                });
                this.playerLogic.zidanAddTime = 0;
                this.playerLogic.zidanCurNum++;
            }
        }
    };
    // nodePool
    Player.prototype.getZidan = function () {
        var zidan;
        if (this.zidanNodes.size() <= 0) {
            var zidanNode = cc.instantiate(this.playerZidanPre);
            this.zidanNodes.put(zidanNode);
        }
        zidan = this.zidanNodes.get();
        return zidan;
    };
    Player.prototype.putZidan = function (zidan) {
        if (zidan) {
            this.zidanNodes.put(zidan);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "playerZidanPre", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "playerPao", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "followNode", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
        //# sourceMappingURL=Player.js.map
        