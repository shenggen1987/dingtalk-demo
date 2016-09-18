/**
 * Created by lsg on 2016/9/16.
 */


class Alert extends React.Component {
    
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
        const buttonName = this.props.buttons[0].length > 0 ? this.props.buttons[0].label : '确认';
        return (
            <div>{
            function(obj){
              if(obj.props.show)
                  return (function() {
					    dd.device.notification.alert({
					        message: children,
					        title: title,
					        buttonName: buttonName,
					        onSuccess: function(data) {
					            // alert('win: ' + JSON.stringify(data));
					        },
					        onFail: function(err) {
                                console.log(err);
					            // alert('fail: ' + JSON.stringify(err));
					        }
					    })
					}())
              else
                  return ""
              }(this)
            }</div>	
        );
    }
}

export default Alert;