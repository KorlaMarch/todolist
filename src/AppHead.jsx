import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EditableText from './EditableText';

class AppHead extends Component {
  constructor(props) {
    super(props);
    this.handleNew = this.handleNew.bind(this);
  }

  handleNew() {
    this.props.onNewTile();
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between fixed-top">
        <div className="navbar-brand" href="#">
          <img
            src="img/note.svg"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          <EditableText text="Todo List" />
        </div>

        <form className="form-inline my-2 my-lg-0">
          <button
            className="btn btn-light my-2 my-sm-0"
            type="button"
            onClick={this.handleNew}
          >
            Add
          </button>
        </form>

      </nav>
    );
  }
}

AppHead.propTypes = {
  onNewTile: PropTypes.func,
};

AppHead.defaultProps = {
  onNewTile: () => {},
};

export default AppHead;
