import ReactDOM from 'react-dom';
import React from 'react';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = () => {

};

ReactDOM.render(<div>
    <Icon name="qq"
          onClick={fn}

    />
</div>, document.querySelector('#root'));