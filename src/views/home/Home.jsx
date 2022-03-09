import React, { useContext } from 'react';
import Data from '../../components/data/Data';
import Header from '../../components/header/Header';
import { Context } from '../../context/Context';

const Home = () => {
	const [context] = useContext(Context);

	return (
		<div className="home">
			<Header />
			<Data data={context} />
		</div>
	);
};

export default Home;
