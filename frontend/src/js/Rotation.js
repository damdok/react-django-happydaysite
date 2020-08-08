import React from 'react';
import '../css/Rotation.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import sunflower from '../picture/sunflower.png';
import Home from '../components/Home';
function Rotation() {
  return (
  	<div className="container-fluid rotation">
  		<div className="row">
  			<div className="col-md-4">
			  	<center>
  					<img className="img" src={sunflower} />
  				</center>
  			</div>
  			<div className="col-md-4">
  				<center>
  					<img className="img" src={sunflower} />
  				</center>
  			</div>
  			<div className="col-md-4">
			    <center>
  					<img className="img" src={sunflower} />
  				</center>
  			</div>
  		</div>
      <div>
      </div>
  	</div>
  );
}

export default Rotation;
  