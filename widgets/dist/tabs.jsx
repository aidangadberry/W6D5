import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
      tabs: props.tabs
    };
  }

  render() {
    console.log();
    return(
      <div className="tabs">
        <ul>
          <Header onTabChosen={this.setCurrentTab} tabId="0" title={this.state.tabs[0].title}/>
          <Header onTabChosen={this.setCurrentTab} tabId="1" title={this.state.tabs[1].title}/>
          <Header onTabChosen={this.setCurrentTab} tabId="2" title={this.state.tabs[2].title}/>
        </ul>

        <article>
          {this.state.tabs[this.state.currentTab].content}
        </article>
      </div>
    );
  }

  setCurrentTab(tabNumber) {
    // e.preventDefault();
    console.log(tabNumber);
    console.log(this);
    this.setState({currentTab: tabNumber});

  }
}

export default Tabs;
