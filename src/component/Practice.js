import React, {Component} from 'react';


class Practice extends Component {

    constructor(props){
        super(props);

        this.state = {
            inpText: '',
            inpBorderColors: {success: 'rgb(0, 174, 0)', failure: 'red', testing: 'blue'},
            status: 'testing',
            curWord: this.props.data.categories[this.props.category][0],
            curWordInd: 0,
            btn_label: {'practice_start': 'Next', 'practice_end': 'Go back'}
        }
    }

    words = this.props.data.categories[this.props.category]

    changeInp(val){
        this.setState({inpText: val});
    }

    keyDownHandler(e){
        if(e.code === 'Enter'){
            if(this.state.inpText == this.state.curWord['span-def-art'] + ' ' + this.state.curWord['span-word']){
                this.setState({status: 'success'})
            } else {
                this.setState({status: 'failure'})
            }
        }
    }

    nextWord(){
        if(this.state.curWordInd === this.words.length - 1){
            this.props.seeCategories()
        } else{
            this.setState({
            curWordInd: this.state.curWordInd + 1,
            curWord: this.words[this.state.curWordInd + 1],
            inpText: '',
            status: 'testing'
        })
        }
        
    }



  render(){
    return (
    <div id="word-list">
        <h1>Practice</h1>

        <div className='practice-form'>
            <div className="word-exm">{this.state.curWord['eng-trans']}</div>
            <div className="ans-form">
                <input style={{border: 3 + 'px solid ' + this.state.inpBorderColors[this.state.status]}} onKeyDown={(e) => this.keyDownHandler(e)} className="ans-inp" placeholder="Translate" onChange={(e) => this.changeInp(e.target.value)} value={this.state.inpText}></input>
            </div>
            <div className="next-word-btn" onClick={() => this.nextWord()}>{this.state.curWordInd === this.words.length - 1 ? this.state.btn_label['practice_end'] : this.state.btn_label['practice_start']}</div>
        </div>

    </div>
  );
  }
}

export default Practice;
