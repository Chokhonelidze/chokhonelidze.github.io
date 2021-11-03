import React from "react";

class Cars extends React.Component {
    constructor(data){
        super(data);
        this.state = {
            index : data.index,
            id : data.id,
            model : data.model,
            brand : data.brand,
            year : data.year,
            color : data.color,
            image : data.image,
        }
        this.update = this.update.bind(this);
    }
    update(e){
        let name = e.target.name;
        let value = e.target.value;
        switch(name){
            case 'model':
                this.setState({model:value});
                break;
            case 'brand':
                this.setState({brand : value});
                break;
            case 'year':
                this.setState({year : value});
                break;
            case 'color':
                this.setState({color : value});
                break;
            case 'image':
                this.setState({image : value});
                break;
            default:
                throw Error;

        }
       // e.target.focus();
    }
    render(){
        let image = <input name='image' type='text'  value = "" placeholder="add link here" onChange={this.update}/>
        if(this.state.image){
            image = <img  alt=":( " src={this.state.image} className = 'carImage' />
        }
        return(
            <p>
                {image}
                <input name='brand' type='text' value = {this.state.brand} onChange={this.update}/>
                <input name='model' type='text' value = {this.state.model} onChange={this.update}/>
                <input name='year' type='text' value = {this.state.year} onChange={this.update}/>
                <input name='color' type='text' value = {this.state.color} onChange={this.update}/>
            </p>
        );
    }
}

export default Cars;