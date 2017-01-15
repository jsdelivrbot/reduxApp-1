import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.asdf) -> 123
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Whatever is returned will show up as props
// inside of BookList
// When state ever changes, this container will be re-rendered
function mapStateToProps(state) {
  return {
    // asdf: '123'
    books: state.books
  };
}

// Anything retuned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selctbook is called,
  // the result should be passed to all of our reducers through dispatch
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connect takes function and component, then produces container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
