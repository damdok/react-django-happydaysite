import React from 'react';
import PropTypes from 'prop-types';
import '../css/Balloon.css';
import 'bootstrap/dist/css/bootstrap.css';
function Nav(props) {
  const logged_out_nav = (
    <div>
      <button className="btn btn-primary float-right" onClick={() => props.display_form('signup')} style={{marginRight:"5px",marginTop:"10px"}}>sign up</button>
      <button className="btn btn-primary float-right" onClick={() => props.display_form('login')} style={{marginRight:"5px",marginTop:"10px"}}>login</button>
    </div>
  );

  const logged_in_nav = (
    <div>
      <button className="btn btn-primary float-right" onClick={props.handle_logout} style={{marginRight:"5px",marginTop:"10px"}}>logout</button  >
    </div>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};