/**
 * Created by ChenYX on 2016/9/19.
 */

import React from 'react';
import Group from 'js/group/index';
import TextField from 'js/textfield/index';
import SelectField from 'js/selectfield/index';
import TextareaField from 'js/textareafield/index';
import Button from 'js/button/index';


export default class NewCustomer extends React.Component {



    render(){
        let t = this;


        return (
            <div>
                <Group>
                    <Group.Head>新增储备客户</Group.Head>
                    <Group.List>
                        <TextField label="客户名称" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <SelectField label="所在省份" placeholder="请选择" options={t.state.options} onSelect={t.handleChange.bind(t)} value={t.state.value} />
                    </Group.List>
                    <Group.List>
                        <SelectField label="所在城市" placeholder="请选择" options={t.state.options} onSelect={t.handleChange.bind(t)} value={t.state.value} />
                    </Group.List>
                    <Group.List>
                        <SelectField label="所在区域" placeholder="请选择" options={t.state.options} onSelect={t.handleChange.bind(t)} value={t.state.value} />
                    </Group.List>
                    <Group.List>
                        <TextareaField placeholder="详细地址" minRows={1} maxRows={3} value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <TextField label="联系人" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <TextField label="联系电话" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <SelectField label="品类" placeholder="请选择品类" options={t.state.options} onSelect={t.handleChange.bind(t)} value={t.state.value} />
                    </Group.List>
                    <Group.List>
                        <SelectField label="品牌" placeholder="请选择品牌" options={t.state.options} onSelect={t.handleChange.bind(t)} value={t.state.value} />
                    </Group.List>
                    <Group.List>
                        <TextField label="厂家名称" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <TextField label="厂家销售" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <TextField label="销售电话" placeholder="请输入" value={t.state.text} />
                    </Group.List>
                    <Group.List>
                        <TextareaField lable="备注" placeholder="请输入" minRows={3} maxRows={5} value={t.state.text} />
                    </Group.List>
                </Group>

                <div className="demo-row">
                    <div className="demo-cell"><Button type="primary" onClick={this.handleClick}>返回</Button></div>
                    <div className="demo-cell"><Button type="secondary" onClick={this.handleClick}>提交</Button></div>
                </div>
            </div>
        )
    }
}
