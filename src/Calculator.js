import React from 'react';
import Keypad from './Keypad';
import Butn from './Butn';
class calculator extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={arr:[]}
    }
    fun=(event)=>
    {
        let a=event.target.getAttribute("mylabel");
        
        switch(a){
            
         case "1":
            const ar1=this.state.arr.concat(["1"]);
            alert(ar1);
            this.setState({arr:ar1})
            break;
         case "2":
           const ar2=this.state.arr.concat(["2"]);
           this.setState({arr:ar2});
           alert(this.state.arr);
           break;   
           case "3":
           const ar3=this.state.arr.concat(["3"]);
           this.setState({arr:ar3});
           alert(this.state.arr);
           break;   
           case "4":
           const ar4=this.state.arr.concat(["4"]);
           this.setState({arr:ar4});
           alert(this.state.arr);
           break; 
           case "5":
           const ar5=this.state.arr.concat(["5"]);
           this.setState({arr:ar5});
           alert(this.state.arr);
           break;  
           case "+":
           const arPlus=this.state.arr.concat(["+"]);
           this.setState({arr:arPlus});
           alert(this.state.arr);
           break;   
           case "-":
           const arMinus=this.state.arr.concat(["-"]);
           this.setState({arr:arMinus});
           alert(this.state.arr);
           break;
           case "/":
           const arDiv=this.state.arr.concat(["/"]);
           this.setState({arr:arDiv});
           alert(this.state.arr);
           break;
           case "*":
           const arMulti=this.state.arr.concat(["*"]);
           this.setState({arr:arMulti});
           alert(this.state.arr);
           break;      
           case "=":
             let reslt=this.state.arr.join("");
             let disply=eval(reslt);   
             alert(disply);   
    }
    }
    render()
    {
        return(
            <div>
                <h1>hello</h1>
                <Keypad handle={this.fun}/>
            </div>
        )
    }
}
export default calculator;