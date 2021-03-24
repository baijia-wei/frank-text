import React from 'react';
import './guanwang.scss'

const GuanWang: React.FunctionComponent = () => {


    return (
        <div>

            <div>
                <h2>NPM安装</h2>
                <p>推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。</p>
                <pre className="ands-guanwan">$ npm install ands-jiawei --save</pre>
                <p>如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请继续阅读快速上手章节。</p>
            </div>
       
        </div>
    );
};

export default GuanWang;