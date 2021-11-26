import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import { Layout, Header, Aside, Content, Footer } from "./lib/layout/layout"
import './example.scss';
import IconDemo from './lib/icon/icon.demo';
// const git= require('./lib/icons/GitHub.png');
import GanYang from "./lib/guanw/guanwang";
import UpdateLog from "./lib/guanw/UpdateLog";
import { modal } from "./lib/dialog/dialog";
import Buttonss from "./lib/button/button";
import FormExample from "./lib/form/form.assembly";
import InputExample from './lib/input/input assembly1'
import Hoc from "./lib/guanw/HOC";
import TreeExample from './lib/tree/tree.example';
import Scroll from './lib/scroll/scroll.example'
import MultipleChoice from "./lib/choice/choice.example"
import dragPull from "./lib/dragPull/drag.example"
import cityselect from "./lib/citySelect/citySelect.exampie"
import actionsheet from "./lib/actionSheet/actionsheet.example"
import TabExample from "./lib/Tab/tab.example"
import TablesExample from "./lib/table/table.example"
import ReduxExample from "./lib/Redux/index"
import RadioExample from "./lib/radio/radio"

import SwitchExample from "./lib/switch/switch.example"
const openModal = () => {
    const close = modal(
        <div className="ands-head">
            <div className="ands-manchu">

            </div>
            <div>
            </div>
            <div className="ands-lanzhou-img">
                <div>
                    <img src="lib/icons/wx.png" alt="微信" />
                    <img src="lib/icons/zfb.png" alt="支付宝" />
                </div>

            </div>
            <Buttonss onClick={() => close()}>关闭</Buttonss>
        </div>);
};

ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src="logo.png" width="48" height="48" alt="logo" />
                    <span>Ands</span>
                </div>
                <div className="git">
                    <a href="https://github.com/baijia-wei/frank-text">
                        <img src='./lib/icons/GitHub.png' width="20" height="20" alt="github" />
                        GitHub
                    </a>
                </div>
            </Header>

            <Layout>
                <Aside className="site-aside">
                    <ul>
                        <li>
                            <NavLink to="/ganging">安装</NavLink>
                        </li>
                        <li>
                            <NavLink to="/updated">更新日志</NavLink>
                        </li>
                        <li className="site-aside-lanzhou">

                        </li>
                    </ul>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button 按钮</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialog">对话框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/layout">布局</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">表单</NavLink>
                        </li>

                        <li>
                            <NavLink to="/tree">树形组件</NavLink>
                        </li>

                        <li>
                            <NavLink to="/input">输入框</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scroll">滚动条</NavLink>
                        </li>
                        <li>
                            <NavLink to="/choice">选择器</NavLink>
                        </li>

                        <li>
                            <NavLink to="/hoc">草稿练习</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dragpull">拖拽</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cityselect">城市组件</NavLink>
                        </li>

                        <li>
                            <NavLink to="/actionsheet">动作面板</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tabexample">Tabs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/tables">Tables 表格</NavLink>
                        </li>

                        <li>
                            <NavLink to="/redux">Redux</NavLink>
                        </li>
                        <li>
                            <NavLink to="/radio">Radio</NavLink>
                        </li>

                        <li>
                            <NavLink to="/switch">Switch</NavLink>
                        </li>

                    </ul>
                </Aside>
                <Content>
                    <Route path="/icon" component={IconDemo} />
                    <Route path="/button" component={ButtonExample} />
                    <Route path="/dialog" component={DialogExample} />
                    <Route path="/layout" component={LayoutExample} />
                    <Route path="/ganging" component={GanYang} />
                    <Route path="/updated" component={UpdateLog} />
                    <Route path="/form" component={FormExample} />
                    <Route path="/input" component={InputExample} />
                    <Route path="/hoc" component={Hoc} />
                    <Route path="/tree" component={TreeExample} />
                    <Route path="/scroll" component={Scroll} />
                    <Route path="/choice" component={MultipleChoice} />
                    <Route path="/dragpull" component={dragPull} />
                    <Route path="/cityselect" component={cityselect} />
                    <Route path="/actionsheet" component={actionsheet} />
                    <Route path="/tabexample" component={TabExample} />
                    <Route path="/tables" component={TablesExample} />
                    <Route path="/redux" component={ReduxExample} />
                    <Route path="/Radio" component={RadioExample} />
                    <Route path="/switch" component={SwitchExample} />

                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 白家玮
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));