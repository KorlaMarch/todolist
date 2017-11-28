import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainBoard extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row content-justify-center py-4">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MainBoard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

MainBoard.defaultProps = {
  children: [],
};


export default MainBoard;
