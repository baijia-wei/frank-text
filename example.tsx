import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from "./lib/layout/layout"
import './example.scss';
import IconDemo from './lib/icon/icon.demo';
// const logo = require('./logo.png');
import GuanWang from "./lib/guanw/guanwang";
import UpdateLog from "./lib/guanw/UpdateLog";
import {modal} from "./lib/dialog/dialog";
import Buttonss from "./lib/button/button";

const openModal = () => {
    const close = modal(
        <div className="ands-heiadr">
            <div className="ands-zhanzhu">
                Ands 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。不过，如果您觉得 iView 对您的项目带来了帮助，提高开发效率，可以用捐助来表示您的谢意：) 您可以用公司的名义进行赞助，赞助信息将在文档页展示。联系邮箱 admin@aresn.com \ 个人可使用 微信 或 支付宝 捐助：
            </div>
            <div>
                支付宝&微信
            </div>
            <div className="ands-zhanzhu-img">
                <img src="lib/icons/wx.png"></img>
                <img src="lib/icons/zfb.png"></img>
            </div>
            <Buttonss onClick={() => close()}>关闭</Buttonss>
        </div>);
};
ReactDOM.render(
    <Router>
        <Layout className="site-page">
            <Header className="site-header">
                <div className="logo">
                    <img src="logo.png" width="48" height="48" alt=""/>
                    <span>Ands</span>

                </div>
            </Header>

            <Layout>
                <Aside className="site-aside">

                    <ul>
                        <li>
                            <NavLink to="/guanwang">安装</NavLink>
                        </li>
                        <li>
                            <NavLink to="/updatelog">更新日志</NavLink>
                        </li>
                        <li className="site-aside-zhanzu">
                            <Buttonss onClick={openModal}>赞助</Buttonss>
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
                    </ul>
                </Aside>
                <Content>
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                    <Route path="/guanwang" component={GuanWang}/>
                    <Route path="/updatelog" component={UpdateLog}/>

                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 白家玮
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));