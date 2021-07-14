import React, { Component } from 'react'

class WordList extends Component {
  render () {
    let words = this.props.data.categories[this.props.category]
    let word_cols = ['Spanish', 'English', 'Russian']
    return (
      <div id="word-list">
        <div className="flex-container-center">
          {word_cols.map(col =>
            <div className="word-col-header" key={Math.random()}>{col}</div>
          )}
        </div>
        <ul>
          {words.map((word, ind) =>
            <div className={ind % 2 === 0 ? 'container blue' : 'container'} key={Math.random()}>
              <div className="word-line flex-container-center">
                <li>{word['span-def-art']} {word['span-word']}</li>
                <li>{word['eng-trans']}</li>
                <li>{word['rus-trans']}</li>
              </div>
              <div className="underline"></div>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default WordList
