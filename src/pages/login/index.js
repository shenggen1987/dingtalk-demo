/**
 * Created by ChenYX on 2016/9/22.
 */

import Group from 'js/group/index';
import TextField from 'js/textfield/index';
import Button from 'js/button/index';

class AuthCode extends React.Component {
  render() {
    return (
        <div style={{display: 'none'}}>
       (function() {
                dd.ready(function(){
                    dd.runtime.permission.requestAuthCode({
                        corpId: _config.corpId, //企业id,
                        onSuccess: function (info) {
                            $.ajax({
                                url: '/api/login',
                                type:"POST",
                                data: {"access_token":_config.access_token,"code":info.code},
                                dataType:'json',
                                timeout: 900,
                                success: function (data) {
                                    alert(data);
                                },
                                error: function (xhr, errorType) {
                                    alert(errorType);
                                }
                            });
                        },
                        onFail: function (err) {
                            alert('requestAuthCode fail: ' + JSON.stringify(err));
                        }
                    })
                })
        })
        </div>
    );
  }
}
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }

    login() {
        console.log("login");
    }


    render(){
        var t = this;

        return (
            <div>
                <AuthCode/>
                <Group>
                    <Group.Head>
                        <h1>登陆</h1>
                    </Group.Head>
                    <Group.List>
                        <TextField label="用户名" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <TextField label="密码" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                </Group>

                <div className="demo-row">
                    <div className="demo-cell"><Button type="primary" onClick={t.login.bind(t)}>返回</Button></div>
                </div>
            </div>
        )
    }
}
