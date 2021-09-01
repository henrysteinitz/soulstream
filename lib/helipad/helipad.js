import React, { Component } from 'react'

import classnames from 'classnames'

export default class Helipad extends Component {
	/*
	Props:
		children
		className
		propagate
	*/

	state = {
		hovering: false,
		file: null,
		helicopter: null,
		modalIn: false
	}

	handleDrop = (e) => {
		e.preventDefault();
		this.props.stopPropagation && e.stopPropagation();

		if (this.props.onDrop) {
			// TODO handle err.
			this.props.onDrop(e.dataTransfer.files[0]);
			return;
		}

		// TODO: Add support for multiple tracks / folders
		// TODO: Add error handling
		if (e.dataTransfer.files.length === 0) {
			console.log("No supplied file");
			return;
		} else if (e.dataTransfer.files.length > 1) {
			console.log("Multiple file handling not yet implemented");
			return;
		}

		this.setState({
			hovering: false,
			modalIn: true,
			file: e.dataTransfer.files[0]
		});
	}

	handleDragEnter = (e) => {
		e.preventDefault();
		this.props.stopPropagation && e.stopPropagation();

		this.setState({
			hovering: true
		});
	}

	handleDragExit = (e) => {
		e.preventDefault();
		this.props.stopPropagation && e.stopPropagation();

		this.setState({
			hovering: false
		});
	}

	handleDragOver = (e) => {
		e.preventDefault();
	}

	flyOut = () => this.setState({ modalIn: false })

	render() {
		const { children, className, modal, onDrop } = this.props
		const { hovering, file, modalIn } = this.state

		return ( 
			<div className={classnames('helipad', className, { hovering })}
					onDragEnter={this.hanleDragEnter}
					onDragExit={this.handleDragExit}
					onDragOver={this.handleDragOver}
					onDrop={this.handleDrop}>
				<div className={classnames('helicopter-shade', { in: modalIn })} onClick={this.flyOut} />
				{ 
					modal &&
					<div className={classnames('helicopter', { in: modalIn })}>
						{ React.cloneElement(modal, { exit: this.flyOut, file }) }
					</div>
				}	
				{ children }	
			</div>
		)
	}
} 
