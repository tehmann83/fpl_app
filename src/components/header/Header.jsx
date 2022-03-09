import React from 'react';
import Search from '../search/Search';
import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<img src="/logoFFH.png" alt="" className="headerLogo" />
			<Search />
		</div>
	);
};

export default Header;
