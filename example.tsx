import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button/button.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout ,Header,Aside,Content,Footer} from "./lib/layout/layout"
import './example.scss';
import IconDemo from './lib/icon/icon.demo';
// const logo = require('./logo.png');
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
                    <h2>组件</h2>
                    <h2>通用</h2>
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
                </Content>
            </Layout>
            <Footer className="site-footer">
                &copy; 白家玮
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));