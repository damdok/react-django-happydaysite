import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
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
      <div style={{position:"absolute" , top:"150px",marginLeft:"35%",backgroundColor:"#dee2e6",padding:"20px",width:"30%",zIndex:"100" }}>
        <form onSubmit={e => this.props.handle_login(e, this.state)}>
          <h4>Log In</h4>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            name="username"
            className="form-control"
            value={this.state.username}
            onChange={this.handle_change}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={this.state.password}
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

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};