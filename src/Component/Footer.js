import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <footer
      className="d-flex flex-wrap align-items-center py-3 border-top bg-secondary "
      style={{ display: "flex", alignItem: "center", justifyContent: "center",marginTop:"176px" }}
    >
      <div> {this.state.date.toLocaleTimeString()}</div>
    </footer>
    );
  }
}
export default Footer;

