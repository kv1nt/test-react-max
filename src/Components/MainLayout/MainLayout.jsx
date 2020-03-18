import React, {Component} from 'react';
import FirstComponent from '../FirstComponent/FirstComponent';
import './mainLayout.css';


class MainLayout extends Component{
    constructor(props){
        super(props)

        this.state={
            text: 'Main Layout Here'
        }
    }

    render(){
        return(
            <>
            <p className="layout-title">{this.state.text}</p>
                <FirstComponent/>
            </>
        )
    }
}

export default MainLayout;
