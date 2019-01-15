import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    return (
      <footer className="text-center bg-dark text-light py-3 fixed-bottom">
        <i className="fa fa-copyright" aria-hidden="true" /> 2017 Khemarat Boonyapaluk
        <div>
          Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
