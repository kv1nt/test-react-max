import React, {Component} from 'react'
import SecondComponent from '../SecondComponent/SecondComponent';


class FirstComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            text:'First Component Here',
            dataForSecondComponent: 'Should include this text to second component'
        }
    }

    render(){
        return(
            <>
                <p>{this.state.text}</p>
                <SecondComponent secondComponentProps={this.state.dataForSecondComponent}/>
            </>
        )
    }
}

export default FirstComponent;