import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import EditableText from './EditableText';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: props.topic,
      workList: [],
      count: 0,
      deleteMode: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggleDelete = this.handleToggleDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd() {
    const newWorkList = this.state.workList;
    newWorkList.push(this.state.count);
    this.setState({
      workList: newWorkList,
      count: this.state.count + 1,
    });
  }

  handleToggleDelete() {
    this.setState({
      deleteMode: !this.state.deleteMode,
    });
  }

  handleDelete(key) {
    const newWorkList = [];
    this.state.workList.forEach((element) => {
      if (element !== key) newWorkList.push(element);
    });
    this.setState({
      workList: newWorkList,
    });
  }

  render() {
    const todoList = this.state.workList.map(element => (
      <Item key={element} deleteMode={this.state.deleteMode} onDeleted={() => this.handleDelete(element)} />
    ));
    return (
      <div className="col-md-6 col-xs-12">
        <div className="card m-3">
          <div className="card-header">
            <div className="row justify-content-between align-items-center">
              <EditableText text={this.state.topic} />
              <div className="float-right">
                <button className="btn" onClick={this.handleAdd}>
                  <i className="fa fa-plus" aria-hidden="true" />
                </button>
                <button className={this.state.deleteMode ? 'btn btn-danger mx-1' : 'btn btn-light mx-1' } onClick={this.handleToggleDelete}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body container">
            {todoList}
          </div>
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  topic: PropTypes.string,
};

Tile.defaultProps = {
  topic: 'Untitled Tile',
};

export default Tile;
