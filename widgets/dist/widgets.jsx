import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

function Root() {
  return (
    <div>
      <div>
        <Clock/>
      </div>

      <div>
        <Tabs tabs={[
          {title: 'hello',
          content: 'spicy bois',
        },
          {title: 'hello2',
          content: 'spicy bois2',
        },
          {title: 'hello3',
          content: 'spicy bois3',
          }
        ]}/>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
