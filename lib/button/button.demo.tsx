
import React, {Fragment} from 'react';
import Demo from '../../demo';
const IconDemo = () => {
    return (
        <Fragment>
            <Demo code={require('!!raw-loader!./button.assembly1.tsx').default}>

            </Demo>

        </Fragment>
    );
};
export default IconDemo;