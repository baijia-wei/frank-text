import React from 'react';
import './guanwang.scss'
const UpdateLog: React.FunctionComponent = () => {
    return (
        <div>
            <h2>更新日志</h2>
            <h3>1.0.2.5</h3>
            <div>
                <ul>
                    <li>
                        新增doc配置文件
                    </li>
                    <li>
                    按钮样式编写
                    </li>
                    <li>
                        打包部署完成
                    </li>
                    <li>
                        修复 布局组件的报错。
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default UpdateLog;