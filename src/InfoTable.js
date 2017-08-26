import React from 'react';
import DefaultTable from './DefaultTable.js';


function InfoTable(props){
	return (
		<div>
		<DefaultTable data={props.info} entryName="Information"/>
		<DefaultTable data={props.episodes} entryName="5 Most recent Episodes"/>
		</div>
	);
}

export default InfoTable;