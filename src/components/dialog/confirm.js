/**
 * Created by lsg on 2016/9/16.
 */


class Confirm extends React.Component {
    static propTypes = {
        buttons: React.PropTypes.array,
        show: React.PropTypes.bool,
        title: React.PropTypes.string
    };

    static defaultProps = {
        buttons: [],
        show: false,
        title: ''
    };


    render() {
        const {title, show, children} = this.props;
        const buttonName = this.props.buttons.map((action, idx) => {
        	const {type, label, ...others} = action;
        	return label;
        });
        return (
            <div>{
            function(obj){
              if(obj.props.show)
                  return (function() {
    				    dd.device.notification.confirm({
    					    message: children,
    				        title: title,
    				        buttonName: buttonName,
    						    onSuccess : function(result) {
    						        //onSuccess将在点击button之后回调
    						        /*
    						        {
    						            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
    						        }
    						        */
    						    },
    						    onFail : function(err) {}
						});

    				}())
              else
                  return ""
              }(this)
            }</div>	
        );
    }
}

export default Confirm;