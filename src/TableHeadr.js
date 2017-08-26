import React, { Component } from 'react';

class TableHeadr {
	constructor(head1, head2){
		this.head1 = head1;
		this.head2 = head2;
	}
	render(){
		return(
			<tr>
				<td>{this.head1}</td>
				<td>{this.head2}</td>
			</tr>
		);
	}
}

<tr><td>{this.head1}</td><td>{this.head2}</td></tr>

export default TableHeadr;