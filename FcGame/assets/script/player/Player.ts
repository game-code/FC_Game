import PlayerLogic from "./PlayerLogic";
import Zidan from "../weapon/zidan";
import AudioManager from "../AudioManager";
import { AudioType } from "../Config";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    @property(cc.Prefab) playerZidanPre: cc.Prefab = null;
    @property(cc.Node) playerPao: cc.Node = null;
    @property(cc.Node) followNode: cc.Node = null;

    // attr
    keyCodeMap: { [key: number]: boolean } = {}
    curKey: number = -1
    directionY: number = 0;

    playerLogic: PlayerLogic = null;

    zidanNodes: cc.NodePool = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDonw, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)

        // init
        this.playerLogic = new PlayerLogic(this)
        this.zidanNodes = new cc.NodePool(Zidan);
        for (let i = 0; i < 10; ++i) {
            let zidanNode = cc.instantiate(this.playerZidanPre)
            this.zidanNodes.put(zidanNode)
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDonw, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
    }

    onEnable() {
        cc.director.getCollisionManager().enabled = true
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true
        // cc.director.getCollisionManager().enabledDebugDraw = true
    }

    onDisable() {
        cc.director.getCollisionManager().enabled = false
        cc.director.getCollisionManager().enabledDrawBoundingBox = false
        cc.director.getCollisionManager().enabledDebugDraw = false
    }

    onCollisionEnter(other, self) {
        let selfAabb = self.world.aabb;
        let otherAabb = other.world.aabb;
        cc.log(other)
        if (cc.Intersection.rectRect(selfAabb, otherAabb)) {
            // `if (this.directX < 0 && (selfPreAabb.xMax > otherPreAabb.xMax)) {
            //     this.node.x = otherPreAabb.xMax + selfPreAabb.width / 2 - this.node.parent.x
            //     this.collisionX = -1;
            // } else if (this.directX > 0 && (selfPreAabb.xMin < otherPreAabb.xMin)) {
            //     this.node.x = otherPreAabb.xMax - selfPreAabb.width / 2 - this.node.parent.x
            //     this.collisionX = 1;
            // }`
        }
    }

    onCollisionExit() {

    }

    onKeyDonw(event) {
        let codeType = event.keyCode
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
                    this.keyCodeMap[cc.KEY.a] = true
                    this.curKey = cc.KEY.a
                }
                break;
            case cc.KEY.right:
            case cc.KEY.d:
                {
                    this.keyCodeMap[cc.KEY.d] = true
                    this.curKey = cc.KEY.d
                }
                break;
            case cc.KEY.j:
            case cc.KEY.space:
                {
                    this.keyCodeMap[cc.KEY.j] = true
                }
                break;
            default:
                break;
        }
        // cc.log(this.node.position)
    }

    onKeyUp(event) {
        let codeType = event.keyCode
        switch (codeType) {
            case cc.KEY.up:
            case cc.KEY.w:
                {
                    this.directionY = 0
                }
                break;
            case cc.KEY.down:
            case cc.KEY.s:
                {
                    this.directionY = 0
                }
                break;
            case cc.KEY.left:
            case cc.KEY.a:
                {
                    this.keyCodeMap[cc.KEY.a] = false
                }
                break;
            case cc.KEY.right:
            case cc.KEY.d:
                {
                    this.keyCodeMap[cc.KEY.d] = false
                }
                break;
            case cc.KEY.j:
            case cc.KEY.space:
                {
                    this.keyCodeMap[cc.KEY.j] = false
                }
                break;
            default:
                break;
        }
    }

    getKeyPress(keyCode) {
        return this.keyCodeMap[keyCode]
    }

    update(dt) {
        // 移动
        if (this.keyCodeMap[cc.KEY.a] && this.keyCodeMap[cc.KEY.d]) {
            if (this.curKey == cc.KEY.a) {
                if (this.getKeyPress(cc.KEY.a)) {
                    this.node.x -= this.playerLogic.moveSpeed * dt;
                } else {
                    this.node.x += this.playerLogic.moveSpeed * dt;
                }
            } else if (this.curKey == cc.KEY.d) {
                if (this.getKeyPress(cc.KEY.d)) {
                    this.node.x += this.playerLogic.moveSpeed * dt;
                } else {
                    this.node.x -= this.playerLogic.moveSpeed * dt;
                }
            }
        } else {
            if (this.getKeyPress(cc.KEY.a)) {
                this.node.x -= this.playerLogic.moveSpeed * dt;
            } else if (this.getKeyPress(cc.KEY.d)) {
                this.node.x += this.playerLogic.moveSpeed * dt;
            }
        }

        this.node.y += this.playerLogic.moveSpeed * dt * this.directionY;

        if (this.followNode.getPositionX() + this.node.width / 2. - this.node.getPositionX() >= 565) {
            this.node.x = this.followNode.getPositionX() - 565 + this.node.width / 2.
        } else if (this.node.getPositionX() + this.node.width / 2. - this.followNode.getPositionX() >= 565) {
            this.node.x = this.followNode.getPositionX() + 565 - this.node.width / 2.
        }

        if (this.followNode.getPositionY() + this.node.height / 2. - this.node.getPositionY() >= 320) {
            this.node.y = this.followNode.getPositionY() - 320 + this.node.height / 2.
        } else if (this.node.getPositionY() + this.node.height / 2. - this.followNode.getPositionY() >= 320) {
            this.node.y = this.followNode.getPositionY() + 320 - this.node.height / 2.
        }

        // 发射子弹
        this.playerLogic.zidanAddTime += dt
        if (this.keyCodeMap[cc.KEY.j]) {
            if (this.playerLogic.zidanAddTime > this.playerLogic.zidanGapTime &&
                this.playerLogic.zidanCurNum < this.playerLogic.zidanMaxNum) {
                AudioManager.instance.playEffectByType(AudioType.PLYAER_ZIDAN)
                let zidan = this.getZidan();
                let worldPos = this.node.convertToWorldSpaceAR(this.playerPao.position)
                let pos = this.node.parent.convertToNodeSpaceAR(worldPos)
                zidan.parent = this.node.parent;
                zidan.getComponent(Zidan).init(pos)
                zidan.getComponent(Zidan).setPutCallBack(() => {
                    this.playerLogic.zidanCurNum--
                    this.putZidan(zidan)
                })
                this.playerLogic.zidanAddTime = 0
                this.playerLogic.zidanCurNum++
            }

        }
    }

    // nodePool
    getZidan(): cc.Node {
        let zidan: cc.Node
        if (this.zidanNodes.size() <= 0) {
            let zidanNode = cc.instantiate(this.playerZidanPre)
            this.zidanNodes.put(zidanNode)
        }

        zidan = this.zidanNodes.get()

        return zidan
    }

    putZidan(zidan: cc.Node) {
        if (zidan) {
            this.zidanNodes.put(zidan)
        }
    }
}
