import PropTypes from 'prop-types';
import { Component } from 'react';
import {Link} from 'react-router-dom';


const tahoeResorts = [
    "Alpine Meadows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Homewood",
    "Kirkwood",
    "Mt. Rose",
    "NorthStar"
]

class Autocomplete extends Component{
    get value(){
        return this.refs.inputResort.value;
    }

    set value(inputValue) {
        this.refs.inputResort.value;
    }

    render(){
        return(
            <div>
                <input ref="inputResort" type="text" list="tahoe-resorts" />
                <datalist id="tahoe-resorts">
                    {this.props.options.map(
                        (opt,i)=> <option key={i}>{opt}</option>
                    )}
                </datalist>
            </div>
        )
    }
}


export const AddDayForm = ({resort, date, powder, backcountry, onNewDay}) =>{
    
    let _resort, _date, _powder, _backcountry
    
    const submit = (e)=>{
        e.preventDefault();
        //console.log('resort', _resort.value);
        //this.refs.value
        //console.log('date', _date.value);
        //console.log('powder',_powder.checked);
        //console.log('BackCountry', _backcountry.checked);

        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        });

        _resort.value=''
        _date.value=''
        _powder.checked=false
        _backcountry.checked=false


    }

    return (
        <form onSubmit={submit} className="add-day-form">
            <div>
                <label htmlFor="resort">Resort Name</label>
                <Autocomplete options={tahoeResorts}
                ref={input => _resort = input}/>
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" required defaultValue={date}
                ref={input=>_date=input}/>
            </div>
            <div>
                <label htmlFor="powder">powder Day</label>
                <input id="powder" type="checkbox" defaultChecked={powder}
                ref={input=>_powder=input}/>
            </div>

            <div>
                <label htmlFor="backcountry">BackCountry Day</label>
                <input id="backcountry" type="checkbox" defaultChecked={backcountry}
                ref={input=>_backcountry=input}/>
            </div>
            <button>Add Day</button>
        </form>
    )
}


export class AddDayForm1 extends Component{

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }



    submit(e){
        e.preventDefault();
        console.log('resort', this.refs.resort.value);
        console.log('date', this.refs.date.value);
        console.log('powder', this.refs.powder.checked);
        console.log('BackCountry', this.refs.backcountry.checked);
    }

    render(){
          
        const {resort, date, powder, backcountry} = this.props;      
        
        return (
            <form onSubmit={this.submit} className="add-day-form">
                <div>
                    <label htmlFor="resort">Resort Name</label>
                    <input id="resort" type="text" required defaultValue={resort}
                    ref="resort"/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" required defaultValue={date}
                    ref="date"/>
                </div>
                <div>
                    <label htmlFor="powder">powder Day</label>
                    <input id="powder" type="checkbox" defaultChecked={powder}
                    ref="powder"/>
                </div>

                <div>
                    <label htmlFor="backcountry">BackCountry Day</label>
                    <input id="backcountry" type="checkbox" defaultChecked={backcountry}
                    ref="backcountry"/>
                </div>
                <button>Add Day</button>
            </form>
        )
    }
}

AddDayForm.defaultProps= {
    resort: "Kirkwood",
    date: "2017-12-12",
    powder: true,
    backcountry: false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}

AddDayForm1.defaultProps= {
    resort: "Kirkwood",
    date: "2017-12-12",
    powder: true,
    backcountry: false
}

AddDayForm1.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}

