const Button = SaltUI.Button
const Grid = SaltUI.Grid
const Icon = SaltUI.Icon
var AnotherComponent = React.createClass({
  render: function() {
    return (
      <div>Hello Again</div>
    );
  }
});

let View = React.createClass({
  handleClick() {
    console.log('a button clicked')
  },

  render() {
      return (
        <div style={{padding:'20px'}}>
          <Button>默认按钮</Button> <br/>
          <Button type="primary" onClick={this.handleClick}>一级按钮</Button> <br/>
          <Button type="secondary" onClick={this.handleClick}>二级按钮</Button> <br/>
          <Button type="minor" onClick={this.handleClick}>次要按钮</Button> <br/>
          <Button disabled={true}>不可点击</Button> <br/>
          <div className="demo-row">
              <div className="demo-cell"><Button type="primary" onClick={this.handleClick}>一级按钮</Button></div>
              <div className="demo-cell"><Button type="secondary" onClick={this.handleClick}>二级按钮</Button></div>
          </div> <br/>
          <Button style={{marginLeft:-20,marginRight:-20,borderRadius:0}} onClick={this.handleClick}>通栏按钮</Button> <br/>
          <Button type="primary" size="large" onClick={this.handleClick}>大按钮</Button> <br/>
          <Button type="primary" size="medium" onClick={this.handleClick}>中按钮</Button> <br/>
          <Button type="primary" size="small" onClick={this.handleClick}>小按钮</Button> <br/>
          <Grid col={3} className="t-BCf" square={true} touchable={true}>
  <div className="demo" >
    <Icon name="user" fill={'#42A5F5'}/>
    <div className="menu-title">用户</div>
  </div>
  <div className="demo" >
    <Icon name="time" fill={'#FF8A65'}/>
    <div className="menu-title">时钟</div>
  </div>
  <div className="demo" >
    <Icon name="star" fill={'#EA80FC'}/>
    <div className="menu-title">星星</div>
  </div>
  <div className="demo" >
      <Icon name="map" fill={'#EF9A9A'}/>
      <div className="menu-title">地图</div>
  </div>
  <div className="demo" >
      <Icon name="pen" fill={'#9FA8DA'}/>
      <div className="menu-title">编辑</div>
  </div>
  <div className="demo" >
      <Icon name="info-circle" fill={'#80DEEA'}/>
      <div className="menu-title">信息</div>
  </div>
  <div className="demo" >
      <Icon name="plus-circle" fill={'#DCE775'}/>
      <div className="menu-title">添加</div>
  </div>
  <div className="demo" >
      <Icon name="search" fill={'#A1887F'}/>
      <div className="menu-title">搜索</div>
  </div>
  <div className="demo" >
    <Icon name="plus" fill={'#BDBDBD'}/>
    <div className="menu-title" style={{color: '#bbb'}}>添加</div>
  </div>
</Grid>
        </div>
      )
  }
})

ReactDOM.render(
  <View/>,
  document.getElementById("App")
);

