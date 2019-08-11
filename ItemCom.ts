
const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemCom extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    _findArr = []
    _index = 0
    _wieshu = 0
    _indexPos = 0

    onLoad() {

    }

    start() {

    }

    setValue(val: number) {

    }

    setWeishu(weishu: number, indexPos: number) {
        this._indexPos = indexPos
        if (indexPos == 0) {
            this._findArr = [1, 3, 5, 7, 9]
        } else {
            this._findArr = [0, 2, 4, 6, 8]
        }
    }

    run(times: number, result: number) {
        let actArr = []
        let speed = 100 / 0.2
        if (this._indexPos == 0) {
            for (let i = 0; i < 5 + times; ++i) {
                actArr.push(cc.moveBy(200 / speed, cc.p(0, -200)))
                actArr.push(cc.callFunc(() => {
                    this._index += 1
                    if (this._index >= 5) {
                        this._index = 0
                    }
                    this.node.getComponent(cc.Label).string = this._findArr[this._index]
                    this.node.setPositionY(100)
                }))
            }
            if (this.isFind(result)) {
                actArr.push(cc.moveBy(100 / speed * 5, cc.p(0, -100)))
            }
        } else {
            actArr.push(cc.moveBy(100 / speed, cc.p(0, -100)))
            actArr.push(cc.callFunc(() => {
                this._index += 1
                if (this._index >= 5) {
                    this._index = 0
                }
                this.node.getComponent(cc.Label).string = this._findArr[this._index]
                this.node.setPositionY(100)
            }))
            for (let i = 0; i < 4 + times; ++i) {
                actArr.push(cc.moveBy(200 / speed, cc.p(0, -200)))
                actArr.push(cc.callFunc(() => {
                    this._index += 1
                    if (this._index >= 5) {
                        this._index = 0
                    }
                    this.node.getComponent(cc.Label).string = this._findArr[this._index]
                    this.node.setPositionY(100)
                }))
            }
            if (this.isFind(result)) {
                actArr.push(cc.moveBy(100 / speed * 5, cc.p(0, -100)))
            }
        }
        this.node.runAction(cc.sequence(actArr))
    }

    isFind(val: number): boolean {
        for (let key in this._findArr) {
            if (this._findArr[key] == val) {
                return true
            }
        }
        return false
    }

    // update (dt) {},
}
