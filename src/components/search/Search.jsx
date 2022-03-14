import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Context } from '../../context/Context';
import './Search.scss';

const MAX_ID_NUMBER = 8999999;

const Search = () => {
	const [userId, setUserId] = useState('');
	const [, setContext] = useContext(Context);

	useEffect(() => {
		if (!userId) {
			setContext('empty');
		}
	}, [setContext, userId]);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			if (userId) {
				const res = await axios.get(
					`https://api.fantasyfootballhub.co.uk/api/live-rank?teamId=${userId}`
				);
				setContext(res.data);
			}
		} catch (error) {}
	};

	return (
		<div className="search">
			<Form className="searchForm" onSubmit={handleSubmit}>
				<Form.Group className="searchFormGroup">
					<Form.Control
						className="searchFormInput"
						placeholder="Enter your FPL ID..."
						onChange={e => setUserId(e.target.value)}
						value={userId}
						type="number"
						max={MAX_ID_NUMBER}
					/>
					<Button
						className="searchClear"
						variant="light"
						onClick={() => setUserId('')}
					>
						x
					</Button>
					<Button className="searchSubmit" variant="primary" type="submit">
						Go
					</Button>
				</Form.Group>
			</Form>
		</div>
	);
};

export default Search;
