import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import { Layout, Header, Aside, Content, Footer } from "./lib/layout/layout"
import './example.scss';
import IconDemo from './lib/icon/icon.demo';

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
import DragPull from "./lib/dragPull/drag.example"
import Cityselect from "./lib/citySelect/citySelect.exampie"
import Actionsheet from "./lib/actionSheet/actionsheet.example"
import TabExample from "./lib/Tab/tab.example"
import TablesExample from "./lib/table/table.example"
import ReduxExample from "./lib/Redux/index"
import RadioExample from "./lib/radio/radio"
import ActivityExample from "./lib/activity/activity"
import LongList from "./lib/longList/longList.example"
import SwitchExample from "./lib/switch/switch.example";
import { Icon } from './lib';
const git = require('./lib/icons/GitHub.png');
const log = require("./lib/assets/logo.png");
import {
    createRoot
} from 'react-dom/client';



const container= document.querySelector('#root');
const root = createRoot(container as Element);
root.render(<Router>
    <Layout className="site-page">
        <Header className="site-header">
            <div className="logo">
                <img src={log} width="48" height="48" alt="logo" />
                <span>Ands</span>
            </div>
            <div className="git">
                <a href="https://github.com/baijia-wei/frank-text">
                    <img src={git} width="20" height="20" alt="github" />
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
                    <li>
                        <NavLink to="/activity">活动</NavLink>
                    </li>
                    <li>
                        <NavLink to="/longList">Long list</NavLink>
                    </li>

                </ul>
            </Aside>
            <Content>
                <Routes>
                    <Route path="/icon" element={<IconDemo />} />
                    <Route path="/button" element={<ButtonExample />} />
                    <Route path="/dialog" element={<DialogExample />} />
                    <Route path="/layout" element={<LayoutExample />} />
                    <Route path="/ganging" element={<GanYang />} />
                    <Route path="/updated" element={<UpdateLog />} />
                    <Route path="/input" element={<InputExample />} />
                    <Route path="/hoc"  element={<Hoc name={''} stage={''}/>}/>
                    <Route path="/tree" element={<TreeExample />} />
                    <Route path="/scroll" element={<Scroll />} />
                    <Route path="/choice" element={<MultipleChoice />} />
                    <Route path="/dragpull"  element={<DragPull/>}  />
                    <Route path="/cityselect" element={<Cityselect/>}  />
                    <Route path="/actionsheet"  element={<Actionsheet/>} />
                    <Route path="/tabexample" element={<TabExample />} />
                    <Route path="/tables" element={<TablesExample />} />
                    <Route path="/redux" element={<ReduxExample />} />
                    <Route path="/Radio" element={<RadioExample />} />
                    <Route path="/switch" element={<SwitchExample />} />
                    <Route path="/activity" element={<ActivityExample />} />
                    <Route path="/longList"   element={<LongList/>} />
                </Routes>
            </Content>
        </Layout>
        <Footer className="site-footer">
            &copy; 白家玮
        </Footer>
    </Layout>
</Router >);
