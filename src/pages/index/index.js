import React from 'react';
import Button from 'js/button/index'
import Dialog from 'js/dialog/index'

const {Alert, Confirm} = Dialog;
export default class Index extends React.Component {
	// state = {
 //      showAlert: false,
 //      showConfirm: false,
 //      alert: {
 //          title: '标题标题',
 //          buttons: [
 //              {
 //                  label: '好的',
 //                  onClick: this.hideAlert.bind(this)
 //              }
 //          ]
 //      },
 //      confirm: {
 //          title: '标题标题',
 //          buttons: [
 //              {
 //                  type: 'default',
 //                  label: '好的',
 //                  onClick: this.hideConfirm.bind(this)
 //              },
 //              {
 //                  type: 'primary',
 //                  label: '我愿意',
 //                  onClick: this.hideConfirm.bind(this)
 //              }
 //          ]
 //      }
 //  }
  constructor(props) {
      super(props);
      this.state = {
        showAlert: false,
        showConfirm: false,
        alert: {
            title: '标题标题',
            buttons: [
                {
                    label: '好的',
                    onClick: this.hideAlert.bind(this)
                }
            ]
        },
        confirm: {
            title: '标题标题',
            buttons: [
                {
                    type: 'default',
                    label: '好的',
                    onClick: this.hideConfirm.bind(this)
                },
                {
                    type: 'primary',
                    label: '我愿意',
                    onClick: this.hideConfirm.bind(this)
                }
            ]
        }
      };
  }

  showAlert() {
      this.setState({showAlert: true});
      this.setState({showConfirm: false});
  }

  hideAlert() {
      this.setState({showAlert: false});
  }

  showConfirm() {
      this.setState({showConfirm: true});
      this.setState({showAlert: false});
  }

  hideConfirm() {
      this.setState({showConfirm: false});
  }

	handleClick() {
    console.log('a button clicked');
  }

  render() {
    return (
      <div style={{padding:'20px'}}>
      		<Button onClick={this.showAlert.bind(this)}>警告</Button><br/>
      		<Button type="primary" onClick={this.showConfirm.bind(this)}>确认</Button><br/>
      		<Alert title={this.state.alert.title} buttons={this.state.alert.buttons} show={this.state.showAlert} hideAlert1={this.hideAlert1}>
              警告内容
          </Alert>
          <Confirm title={this.state.confirm.title} buttons={this.state.confirm.buttons} show={this.state.showConfirm} hideConfirm1={this.hideConfirm1}>
              确认内容？
          </Confirm>
          <Button >默认按钮</Button> <br/>
          <Button type="primary" onClick={this.handleClick}>一级按钮</Button> <br/>
          <Button type="secondary" onClick={this.handleClick}>二级按钮</Button> <br/>
          <Button type="minor" onClick={this.handleClick}>次要按钮</Button> <br/>
      </div>
    );
  }
};

