import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      editing: false,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    this.setState({
      editing: true,
    });
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit() {
    this.setState({
      editing: false,
    });
  }

  render() {
    if (this.state.editing) {
      return (
        <div className="editText">
          <form onSubmit={this.handleSubmit} className="input-group">
            <input
              className="form-control"
              type="text"
              value={this.state.text}
              onChange={this.handleTextChange}
            />
            <span className="input-group-btn">
              <button className="btn" type="button" onClick={this.handleSubmit}>
                Save
              </button>
            </span>
          </form>
        </div>
      );
    }

    return (
      <button className="p-1 editable" onClick={this.handleEditClick}>
        {this.state.text} <i className="fa fa-pencil" aria-hidden="true" />
      </button>
    );
  }
}

EditableText.propTypes = {
  text: PropTypes.string,
};

EditableText.defaultProps = {
  text: 'Untitled',
};

export default EditableText;
