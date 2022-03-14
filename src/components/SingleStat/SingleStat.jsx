import React from 'react';
import './SingleStat.scss';

const SingleStat = ({ data, label = '', pct = false }) => {
	return (
		<p className="statRow">
			<span>{label}: </span>
			<span className="statRowData">
				{data} {pct && '%'}
			</span>
		</p>
	);
};

export default SingleStat;
