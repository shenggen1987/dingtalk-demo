/**
 * Created by ChenYX on 2016/9/22.
 */
let { Button } = SaltUI;
import QjdSlot from 'js/qjdslot'

export default class Login extends React.Component {
		constructor(props) {
        super(props);
        this.state = {

        	filterdata: {
                // 数据模型
                data: {
                    frist:[
                        { text: '销区', value: 10 }, { text: '客户经理', value: 11 }
                    ],
                    second: {
                        '10': [
                            { text: '全部', value: 1000 },{ text: '一区', value: 1001 }, { text: '二区', value: 1002 }
                            ,{ text: '三区', value: 1003 }
                        ],
                        '11': [
                            { text: '全部', value: 1101 }, { text: '小张', value: 1102 },
                            { text: '小李', value: 1103 }, { text: '小林', value: 1104 }
                        ]
                    }
                },
                // 选中的值
                value: [ { text: '销区', value: 10 }, { text: '全部', value: 1000 } ],
                // 上次选中的值（取消选择时恢复用）
                confirmedValue: [ { text: '销区', value: 10 }, { text: '全部', value: 1000 }  ]
            }
        };
    }

		showSlot(label) {
        this.refs[label].showSlot();
    }

    handleSelect(value, column, index, slotval, slotdata) {
        var arr = [];
        value.forEach(function(tmp){
            if(tmp){
              const {text, value} = tmp;
              arr.push(text);
            }
        });
        // actions.changeSlot(slotval, arr.join('-'), slotdata);
        // this.startLoad();
    }

    handleChangSlot(value, column, index, slotval, slotdata) {
        // actions.comfirmSlot(value, slotdata);
    }

    render(){
        var t = this;
        var filterdata = t.state.filterdata;
        return (
            <div>
                <Button type="minor" size="medium" className="btn-filter" onClick={t.showSlot.bind(t, 'slotnode')}>筛选<i className="iconfont icon-shaixuan"></i></Button>
                <QjdSlot ref='slotnode' title='筛选'  datas={filterdata} ele='slotnode1'  handleSelect={t.handleSelect.bind(t)} handleChangSlot={t.handleChangSlot.bind(t)} slotval='filterstr' />
            </div>
        )
    }
}
