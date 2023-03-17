import React from "react"

class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);
    
        return (
            <div>
            <h1>Props Displayer</h1>
            <h2>{stringProps}</h2>
            <p>Hello {this.props.name}</p>
            <p>from {this.props.location}</p>
            <p>number {this.props.number}</p>
            </div>
             );
         }
    }
    export default PropsDisplayer