import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state_array:  window.cs142models.statesModel(),
      filter_state_array: [],
      is_filtered: 0
    };
    console.log('window.cs142models.statesModel()', this.state.state_array);
  }

  ChangeHandler(event){
    const pattern = event.target.name;
    const value = event.target.value;
    this.setState({[pattern]: value});
    this.state.is_filtered = 1;
    this.state.filter_state_array = this.state.state_array.filter(function (str) {
      return str.toLowerCase().includes(value.toLowerCase());
    });
  }

  ShowFilteredState() {
    if(this.state.is_filtered === 0) {
      return (
          <div>
            <p>States</p>
            <ol>
              {this.state.state_array.map((state) => (
                  <li>{state}</li>
              ))}
            </ol>
          </div>
      );
    }
    else {
      if(this.state.filter_state_array.length === 0) {
        return <p>No result</p>
      }
      else {
        return (
            <div>
              <p>States</p>
              <ol>
                {this.state.filter_state_array.map((state) => (
                    <li>{state}</li>
                ))}
              </ol>
            </div>
        );
      }
    }


  }

  render() {
    return (
      <div>
        <label>What state are you finding? </label>
        <input name="state" onChange={e => this.ChangeHandler(e)} className="input100" type="text"/>
        {this.ShowFilteredState()}
      </div>
    );
  }
}

export default States;
