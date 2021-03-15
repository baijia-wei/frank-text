import React, {Fragment} from 'react';
import Demo from '../../demo';

export const Assembly1 = () => {
    return (
        <Fragment>
            <Demo code={require('!!raw-loader!./button.assembly1.tsx').default}>
            </Demo>
        </Fragment>
    );
};
export const Assembly2 = () => {
    return (
        <Fragment>
            <Demo code={require('!!raw-loader!./button.assembly2.tsx').default}>
            </Demo>
        </Fragment>
    );
};
export const Assembly3 = () => {
    return (
        <Fragment>
            <Demo code={require('!!raw-loader!./button.assembly.tsx').default}>
            </Demo>
        </Fragment>
    );
};
