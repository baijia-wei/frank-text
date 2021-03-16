import React, {Fragment} from 'react';
import Demo from '../../demo';

export const InputDemo = () => {
    return (
        <Fragment>
            <Demo code={require('!!raw-loader!./input.example.tsx').default}>
            </Demo>
        </Fragment>
    );
};
