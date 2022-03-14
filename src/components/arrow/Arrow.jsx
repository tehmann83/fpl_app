import React from 'react';
import './Arrow.scss';

const Arrow = ({ arrow }) => {
	return (
		<div className="arrow">
			{arrow ? (
				<i className="arrowGreen fa-solid fa-arrow-up"></i>
			) : (
				<i className="arrowRed fa-solid fa-arrow-down"></i>
			)}
		</div>
	);
};

export default Arrow;
