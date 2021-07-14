import React, { Component } from 'react'
import Categories from './Categories'
import WordList from './WordList'
import Header from './Header'
import Practice from './Practice'

class MainApp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 'categories',
      category: null
    }
  }

  seeVocabulary (category) {
    this.setState({
      page: 'wordlist',
      category: category
    })
  }

  seeCategories () {
    this.setState({
      page: 'categories'
    })
  }

  practiceVocab (category) {
    this.setState({
      page: 'practicevocab',
      category: category
    })
  }

  render () {
    return (
      <div id="MainApp">
        <Header seeCategories={() => this.seeCategories()} />
        <div id="MainContent">
          {this.state.page === 'categories' && <Categories data={this.props.data} seeVocabulary={(category) => this.seeVocabulary(category)} practiceVocab={(category) => this.practiceVocab(category)} />}
          {this.state.page === 'wordlist' && <WordList data={this.props.data} category={this.state.category} />}
          {this.state.page === 'practicevocab' && <Practice data={this.props.data} category={this.state.category} practiceVocab={(category) => this.practiceVocab(category)} seeCategories={() => this.seeCategories()} />}
        </div>
      </div>
    )
  }
}

export default MainApp
