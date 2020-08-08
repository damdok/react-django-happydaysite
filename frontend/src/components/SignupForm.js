import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class SignupForm extends React.Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: '',
    confirm_email: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div style={{position:"absolute" , top:"150px",marginLeft:"35%",backgroundColor:"#dee2e6",padding:"20px",width:"30%",zIndex:"100"}}>
        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
          <h4>Sign Up</h4>        
          <label htmlFor="FirstName">FirstName</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            value={this.state.firstname}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="LastName">LastName</label>
          <input
            type="text"
            name="lastname"
            className="form-control"
            value={this.state.lastname}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="username">Confirm Email</label>
          <input
            type="email"
            name="confirm_email"
            className="form-control"
            value={this.state.confirm_email}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={this.state.password}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            className="form-control"
            value={this.state.confirm_password}
            onChange={this.handle_change}
            required
          />
          <br />
          <input type="submit" className="btn btn-primary"/>
          <input type="button" className="btn btn-primary" value="cancel" style={{marginLeft:"5px"}} onClick={this.reload}/>
        </form>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};