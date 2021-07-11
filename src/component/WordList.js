import React, {Component} from 'react';


class WordList extends Component {

    words = this.props.data.categories[this.props.category]

  render(){
    return (
    <div id="word-list">
        <div className="flex-container-center">
            <div className="word-col-header">Spanish</div>
            <div className="word-col-header">English</div>
            <div className="word-col-header">Russian</div>
        </div>
        <ul>
            {this.words.map(word => 
                <div className='container'>
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
  );
  }
}

export default WordList;
