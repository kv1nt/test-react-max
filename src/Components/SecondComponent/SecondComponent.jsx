import React, {Component} from 'react'


class SecondComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            counter: 0,
            text:'Second Component Here'
        }
    }

    changeCount(){
        this.setState({counter:  this.state.counter+1})
    }

    render(){
        return (
            <>
                <p>{this.state.text}</p>               
                <div>{this.props.secondComponentProps}</div>
                <button onClick={this.changeCount.bind(this)}>Click</button>

                <p>Counter:{this.state.counter}</p>
            </>
        )
    }
}

export default SecondComponent;