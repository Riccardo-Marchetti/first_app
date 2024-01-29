import { Component } from "react";

class ClassImage extends Component {
  render() {
    return (
      <div>
        <img src={this.props.srcImage} alt={this.props.logoImage} />
      </div>
    );
  }
}
export default ClassImage;
