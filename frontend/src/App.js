import React, { Component, Fragment } from "react";
import Header from "./js/Header";
import Rotation from "./js/Rotation";
import Balloon from "./js/Balloon";
class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Balloon />
			</Fragment>
		);
	}
}

export default App;
