import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import EventEmitter from './ee';

class App extends Component {
	constructor() {
		super();
		this.state = {
			events: [],
		};

		this.emitter = new EventEmitter();

		this.emitter.on &&
			this.emitter.on('click', (data) => {
				this.appendEvent(data);
			});

		this.emitter.on &&
			this.emitter.on('mouseover', (data) => {
				this.appendEvent(data);
			});
	}

	appendEvent(data) {
		this.setState({ events: [data, ...this.state.events] });
	}

	handleMouseOver = () => {
		this.emitter.emit && this.emitter.emit('mouseover', { message: 'Hover!' });
	};
	handleClick = () => {
		this.emitter.emit && this.emitter.emit('click', { message: 'Click!' });
	};

	render() {
		return (
			<div>
				<h1>Welcome to the Event Emitter exercise!</h1>
				<p>
					<b>Challenge:</b>
					<br />
					Fill in ee.js so that the target listens to and emits events.
				</p>

				<hr />

				<div>
					<button className={'clickMe'} onClick={this.handleClick} onMouseOver={this.handleMouseOver}>
						TARGET
					</button>
					<br />
					<ol>
						{this.state.events.map((e) => (
							<li>{e.message}</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
