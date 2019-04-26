
const { ccclass, property } = cc._decorator;

@ccclass
export default class Zidan extends cc.Component {

    speed: number = 500
    // LIFE-CYCLE CALLBACKS:
    _putCallBack: () => void = null

    onLoad() { }

    init(pos: cc.Vec2) {
        this.node.position = pos
        this.node.active = true
        let time = 1130 / this.speed
        this.node.stopAllActions()
        this.node.runAction(cc.moveBy(time, cc.p(1130, 0)))
        this.scheduleOnce(() => {
            if (this._putCallBack) {
                this._putCallBack()
                this._putCallBack = null
            }
        }, time)
    }

    setPutCallBack(putCallBack: () => void) {
        this._putCallBack = putCallBack
    }

    onCollisionEnter(other, self) {
        this.unscheduleAllCallbacks()
        if (this._putCallBack) {
            this._putCallBack()
            this._putCallBack = null
        }
    }

    onCollisionExit(other, self) {

    }

    // update (dt) {},
}
