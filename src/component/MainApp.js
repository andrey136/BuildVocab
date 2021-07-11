import { render } from "@testing-library/react";
import React, {Component} from "react";
import Categories from './Categories';
import WordList from './WordList';
import Header from './Header';

class MainApp extends Component{

    constructor(props){
        super(props);

        this.state = {
            page: 'categories',
            category: null
        }
    }

    seeVocabulary(category){
        this.setState({
            page: 'wordlist',
            category: category
        })
    }

    seeCategories(){
        console.log('oooooooOOOOOOOooo')
        this.setState({
            page: 'categories'
        })
    }

    render(){
        return (
            <div id="MainApp">
                <Header seeCategories={() => this.seeCategories()}/>
                {this.state.page == 'categories' && <Categories data={this.props.data} seeVocabulary={(category) => this.seeVocabulary(category)} />}
                {this.state.page == 'wordlist' && <WordList data={this.props.data} category={this.state.category} />}

            </div>
        );
    }
}

export default MainApp;
