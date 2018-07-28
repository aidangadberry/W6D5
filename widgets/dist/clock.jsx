import React from 'react';

class Clock extends React.Component {
  constructor () {
    super();
    this.state = {
      time: new Date()
    };
    this.interval = undefined;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div>
        <section className="clock">
          <p>
            <span>Time:</span>
            <span>
              {this.state.time.toLocaleTimeString()}
            </span>
          </p>

          <p>
            <span>Date: </span>
            <span>{this.state.time.toDateString()}</span>
          </p>
        </section>
      </div>
    );
  }

  tick () {
    this.setState({time: new Date()});
  }
}

export default Clock;
