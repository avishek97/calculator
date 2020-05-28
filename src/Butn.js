import React from 'react';

class Butn extends React.Component{
    
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <button mylabel={this.props.label} onClick={this.props.abc}>{this.props.label}</button>
            </div>
        )
    }
}
export default Butn;