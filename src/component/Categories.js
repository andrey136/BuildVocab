import { render } from "@testing-library/react";
import React, {Component} from "react";

class Categories extends Component{

    renderElements(colNum, max_el){
        // colNum is number of the column
        // max_el is the maximum amount of elements in a column
        // returns a list of category names that need to be rendered

        let categories = Object.keys(this.props.data['categories']);
        return categories.slice((colNum - 1) * max_el,  (colNum) * max_el )

    }

    cols = ['col-1-categ', 'col-2-categ']

    render(){
        return (
            <div id='categories'>

                { 
                    this.cols.map((col_id, ind) => 
                        
                        <div id={col_id} key={Math.random()}>
                            { 
                                this.renderElements(ind + 1, 3).map(category => 
                                    <div className='word-category' key={Math.random()} >
                                        <div className="entry">
                                            {category}
                                        </div>
                                        <div className="action-container flex-container-center">
                                            <div className="see-vocab" onClick={() => this.props.seeVocabulary(category)}>See Vocabulary</div>
                                            <div className="pract-vocab" onClick={() => this.props.practiceVocab(category)}>Practice</div>
                                        </div>
                                    </div>
                                ) 
                            }
                        </div>
                    ) 
                }
                    
                <div className='clearfix'></div>
            </div>
        );
    }
}

export default Categories;
