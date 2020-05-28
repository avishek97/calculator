import React from 'react';
import Butn from './Butn';
class keypad extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <Butn  label="1" abc={this.props.handle}></Butn>
                <Butn label="2" abc={this.props.handle}></Butn>
                
                <Butn label="3" abc={this.props.handle}></Butn>
                <Butn label="4" abc={this.props.handle}></Butn>
                <Butn label="5" abc={this.props.handle}></Butn>
                <Butn label="6" abc={this.props.handle}></Butn>
                <Butn label="7" abc={this.props.handle}></Butn>
                <Butn label="8" abc={this.props.handle}></Butn>
                <Butn label="9" abc={this.props.handle}></Butn>
                <Butn label="0" abc={this.props.handle}></Butn>
                <Butn label="+" abc={this.props.handle}></Butn>
                <Butn label="-" abc={this.props.handle}></Butn>               
                <Butn label="/" abc={this.props.handle}></Butn>
                <Butn label="*" abc={this.props.handle}></Butn>
                <Butn label="=" abc={this.props.handle}></Butn>
            </div>
        )
    }
}
export default keypad;