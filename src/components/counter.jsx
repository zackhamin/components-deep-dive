import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}{" "}
      </ul>
    );
    // Gives a key value to each element in the array. React needs to be able to access each element.
  }

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    // handIncrement method needs to be binded to allow for 'this' keyword to have access to it globally.
    //  You can also use the arrow function to bypass the super and binding methods.
  }
  //   handleIncrement() {}
  handleIncrement = () => {
    this.setState({ count: (this.state.count += 1) });
    // In React you need to set the state to update the view(UI). You cannot do it direct i.e this.state.count += 1 as a direct method.
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }

  render() {
    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create new tags"}
                {/* Render a conditional statement in line - A populated string in JS is considered truthy, so both values are true */}

        <span
          style={{ fontWeight: "bold", fontSize: 15 }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
