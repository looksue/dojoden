import React from "react";

class MessagingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
          });
    }

    handleSubmit(event) {
        let newMessage = {
            classSelected: this.state.value,
            message: this.state.message
        };
        console.log(newMessage);
        this.setState({
            value: '',
            message: ''
          });
        event.preventDefault();
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
      <div className="grid-container">
        <div className="grid-x grid-padding-x"></div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-padding-x"></div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="large-12 cell">
            <label>
              Recipients
              <select name="classSelected" value={this.state.value} onChange={this.handleChange} >
                <option value="default">Select</option>
                <option value="all">Whole School</option>
                <option value="fundamentals">Fundamentals</option>
                <option value="advanced">Advanced</option>
                <option value="comp">Competition</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-padding-x"></div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="large-12 cell">
            <label>
              Message
              <textarea name="message" value={this.state.message} onChange={this.handleChange} />
            </label>
          </div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-12 cell">
                <input type="submit" value="Send" className="button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
        )
    }



}

export default MessagingForm;