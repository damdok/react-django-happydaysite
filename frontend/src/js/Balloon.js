import React from 'react';
import '../css/Balloon.css';
import 'bootstrap/dist/css/bootstrap.css';
import Particles from 'react-particles-js';
import CommentList from "../components/CommentList";
import NewCommentModal from "../components/NewCommentModal";
import Nav from '../components/Nav';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Rotation from "./Rotation";
import Home from "../components/Home";

import axios from "axios";

import { API_URL } from "../constants";

class Balloon extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			displayed_form: '',
			logged_in: localStorage.getItem('token') ? true : false,
			username: ''
		};
  }
 

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
    this.resetState();
    
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };
  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };
  handle_logout = () => {
  localStorage.removeItem('token');
  this.setState({ logged_in: false, username: '' });
};

display_form = form => {
  this.setState({
    displayed_form: form
  });
};

  getComments = () => {
    axios.get(API_URL).then(res => this.setState({ comments: res.data }));
  };

  resetState = () => {
    this.getComments();
  };

  render() {
    let form;
		    switch (this.state.displayed_form) {
		      case 'login':
		        form = <LoginForm handle_login={this.handle_login} />;
		        break;
		      case 'signup':
		        form = <SignupForm handle_signup={this.handle_signup} />;
		        break;
		      default:
		        form = null;
		    }
    return(
      <div>
        <header>
        <NewCommentModal create={true} resetState={this.resetState} />
        <Nav    
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        <div  id="particles-js">
            <Particles
              params={{ 
                "particles": {
                  "number": {
                    "value": 150,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "image",
                    "stroke": {
                      "width": 3,
                      "color": "#fff"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "images": [
                      {
                        "src": "heart.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "heart11.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "heart22.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "balloon1.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "balloon2.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "balloon3.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "balloon4.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "balloon5.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "balloon6.png",
                        "width": 25,
                        "height": 25
                      },
                      {
                        "src": "balloon7.png",
                        "width": 25,
                        "height": 25
                      }
                    ]
                  },
                  "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 20,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 0.1,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 50,
                    "color": "#ffffff",
                    "opacity": 0.6,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "random",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": true,
                      "rotateX": 300,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode":  "bubble"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 150,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 0,
                      "size": 20,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.9
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }} 
              style={{
                position: "absolute",
                width: "100%",
                height: "100%"
              }}
            />
          </div>
        <div style={{position:"absolute",top:"20%",left:"18%"}}>
        <Home />
        </div>
        <Rotation />
        </header>
      </div>
    );
  }
}

export default Balloon;
