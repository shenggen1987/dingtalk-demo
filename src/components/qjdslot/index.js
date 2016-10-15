let { Slot} = SaltUI;
export default class QjdSlot extends React.Component {

    constructor(props) {
        super(props);
        var datas = props.datas;
        var slotdata = {
        	data: [
            datas.data.frist,
            (datas.data.second)[(datas.value)[0].value] || []
          ],
          value: datas.value
        };
        this.state = {'title1':props.title, 'slotdata': slotdata};
    }
    showSlot() {
        this.refs[this.props.ele].show();
    }
    handleConfirm(value) {
        // 确认选中项目
        // this.props.datas.confirmedValue = value;
        // this.props.datas.value = value;
        this.props.handleSelect(value, 0, 0, this.props.slotval, this.props.datas);
    }
    handleChange(value, column, index) {
        // 选中项目改变
        // this.props.datas.value = value;
        // this.props.handleSelect(value, column, index, this.props.slotval);
        // this.props.handleChangSlot(value, column, index, this.props.slotval, this.props.datas);
        if(JSON.stringify(this.state.slotdata.value) !== JSON.stringify(value))
        {
        	console.log(value);
	        var datas = this.props.datas;
	        var slotdata = {
	        	data: [
	            datas.data.frist,
	            (datas.data.second)[(value)[0].value] || []
	          ],
	          value: value
	        };
	         setTimeout(() => {
			      this.setState({ title1: '12313', slotdata: slotdata });
			    }, 0);

        } 
        
        

    }
    handleCancel() {
        // 取消之前的操作，恢复上次确认的值
        this.props.datas.value = this.props.datas.confirmedValue;
    }
    render() {
        var t = this;
        const {datas, ele, title} = this.props;
        var title1 = t.state.title1;
        var slotdata = t.state.slotdata;
        return (
            <div>
                <Slot ref={ele} data={slotdata.data} value={slotdata.value} title={title1} onConfirm={t.handleConfirm.bind(t)} onChange={t.handleChange.bind(t)} onCancel={t.handleCancel.bind(t)}/>
            </div>
        );
    }


}