import ItemCom from "./ItemCom";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SlotGame extends cc.Component {

    @property(ItemCom) label1: ItemCom = null;
    @property(ItemCom) label2: ItemCom = null;

    @property(ItemCom) label3: ItemCom = null;
    @property(ItemCom) label4: ItemCom = null;

    @property(ItemCom) label5: ItemCom = null;
    @property(ItemCom) label6: ItemCom = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //
        this.label1.setWeishu(0, 0)
        this.label2.setWeishu(0, 1)

        let val = 7
        let tt0 = this.getTimesByResult(0, val)
        let tt1 = this.getTimesByResult(1, val)
        cc.log(tt1)
        this.label1.run(tt0, val)
        this.label2.run(tt1, val)

        //
        this.label3.setWeishu(1, 0)
        this.label4.setWeishu(1, 1)

        val = 0
        tt0 = this.getTimesByResult(0, val)
        tt1 = this.getTimesByResult(1, val)
        this.label3.run(tt0, val)
        this.label4.run(tt1, val)

        //
        this.label5.setWeishu(2, 0)
        this.label6.setWeishu(2, 1)

        val = 8
        tt0 = this.getTimesByResult(0, val)
        tt1 = this.getTimesByResult(1, val)
        this.label5.run(tt0, val)
        this.label6.run(tt1, val)
    }

    start() {

    }

    getTimesByResult(indexPos: number, rel: number): number {
        let key = -1
        for (let i = 0; i < 10; ++i) {
            if (rel == i) {
                if (indexPos == 0) {
                    key = Math.floor(rel / 2)
                } else {
                    key = Math.ceil(rel / 2)
                }
            }
        }
        return key
    }

    // update (dt) {},
}
