import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout ,Header,Aside,Content,Footer} from "./lib/layout/layout"


ReactDOM.render(
    <Router>
        <Layout>
            <Header>
                <div className="logo">
                    FUI
                </div>
            </Header>

            <Layout>
                <Aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                        <li>
                            <Link to="/button">Button</Link>
                        </li>
                        <li>
                            <Link to="/dialog">对话框</Link>
                        </li>
                        <li>
                            <Link to="/layout">布局</Link>
                        </li>
                    </ul>
                </Aside>
                <Content>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
                <Footer>
                    footer
                </Footer>
            </Layout>
        </Layout>
    </Router>
    , document.querySelector('#root'));