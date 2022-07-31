import React, {Fragment} from 'react';
import Demo from '../../demo';
const FormDemo = () => {
    return (
        <Fragment>
            <Demo code={require('!!raw-loader!./form.example').default}>
            </Demo>
        </Fragment>
    );
};
export default FormDemo
