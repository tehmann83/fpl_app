import React, { useState } from 'react';
import { Context } from './context/Context';
import Home from './views/home/Home';

const App = () => {
	const [context, setContext] = useState('default context value');

	return (
		<Context.Provider value={[context, setContext]}>
			<Home />
		</Context.Provider>
	);
};

export default App;
