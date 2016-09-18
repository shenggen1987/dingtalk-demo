class ToggleButton extends React.Component{

  	static propTypes = {
        checked: React.PropTypes.bool
    };

    static defaultProps = {
        checked: false
    };

  onTextChange() {
    var newState = !this.state.checked;
    this.setState({
      checked: newState
    });
    // 这里要注意：setState 是一个异步方法，所以需要操作缓存的当前值
    this.props.callbackParent(newState);
  }

  render() {
    // 从【父组件】获取的值
    var text = this.props.text;
    // 组件自身的状态数据
    var checked = this.state.checked;

    return (
        <label>{text}: <input type="checkbox" checked={checked}                 onChange={this.onTextChange} /></label>
    );
  }
  
}