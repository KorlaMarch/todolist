import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      checked: false,
      editing: true,
      starred: false,
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStar = this.handleStar.bind(this);
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  handleEditClick() {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(event) {
    this.setState({
      editing: false,
    });
    event.preventDefault();
  }

  handleStar() {
    this.setState({
      starred: !this.state.starred,
    });
  }

  render() {
    // Middle Element
    let midElement = this.state.text;
    if (this.state.editing) {
      midElement = (
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Task name..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </form>
      );
    } else if (this.state.checked) {
      midElement = <s> {this.state.text} </s>;
    }

    // Ending Button
    let endButton = (
      <button className="btn" onClick={this.handleEditClick}>
        <i className="fa fa-pencil-square-o" aria-hidden="true" />
      </button>
    );

    if (this.props.deleteMode) {
      endButton = (
        <button className="btn btn-danger" onClick={this.props.onDeleted}>
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      );
    } else if (this.state.editing) {
      endButton = (
        <button className="btn btn-info" onClick={this.handleEditClick}>
          Save
        </button>
      );
    }

    // Star
    let starClass = 'fa fa-star-o';
    if (this.state.starred) {
      starClass = 'fa fa-star';
    }

    return (
      <div className="my-1 p-2 bg-light row justify-content-between align-items-center">
        <div>
          <label className="check-container mr-4">
            <input type="checkbox" checked={this.state.checked} onClick={this.handleCheck} />
            <span className="checkmark" />
          </label>
          <button className="mr-3 pr-2 star" onClick={this.handleStar}>
            <i className={starClass} aria-hidden="true" />
          </button>
        </div>
        {midElement}
        {endButton}
      </div>
    );
  }
}

Item.propTypes = {
  onDeleted: PropTypes.func,
};

Item.defaultProps = {
  onDeleted: () => {},
};

export default Item;
