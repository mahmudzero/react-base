'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
					width: "100vw",
				}}
				className='app'
			>
				<div
					style={{
						color: "rgb(128, 180, 210)",
						fontSize: "28px"
					}}
			>
					Starter Project
				</div>
			</div>
		);
	};
};

const _app = <App name='App'/* props */ />;
ReactDOM.render(_app, document.getElementById('root'));
