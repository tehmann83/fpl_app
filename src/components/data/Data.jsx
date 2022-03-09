import React, { useEffect, useState } from 'react';
import './Data.scss';

const Data = ({ data }) => {
	/* const [context] = useContext(Context); */
	const [liveRank, setLiveRank] = useState(0);
	const [thisGwRank, setThisGwRank] = useState(0);
	const [lastGwRank, setlastGwRank] = useState(0);
	const [totalPoints, setTotalPoints] = useState(0);
	const [hits, setHits] = useState(0);
	const [rankMove, setRankMove] = useState(0);
	const [arrow, setArrow] = useState('');

	useEffect(() => {
		if (data) {
			setLiveRank(data.prediction);
			setThisGwRank(data.rank);
			setlastGwRank(data.last_gw);
			setTotalPoints(data.total);
			setHits(data.hits);
			setRankMove(data.last_gw - data.rank);
		}

		if (rankMove > 0) {
			setArrow(true);
		} else {
			setArrow(false);
		}
	}, [data, rankMove]);

	return (
		<div className="data">
			{liveRank && (
				<div className="dataWrapper">
					<div className="dataTotals">
						<p className="liveRank">
							<span>Live rank: </span>
							<span>{liveRank}</span>
						</p>
						<p className="totalPoints">
							<span>Total points: </span>
							<span>{totalPoints}</span>
						</p>
					</div>
					<div className="dataGW">
						<p className="thisGwRank">
							<span>This GW: </span>
							<span> {thisGwRank}</span>
						</p>
						<p className="lastGwRank">
							<span>Last GW: </span>
							<span>{lastGwRank}</span>
						</p>
						<p className="hits">
							<span>Hits: </span>
							<span>{hits}</span>
						</p>
					</div>
					<div className="dataMove">
						<p className="rankMove">
							<span>Rank move: </span>
							<span>
								{rankMove}{' '}
								{arrow ? (
									<i class="arrowGreen fa-solid fa-arrow-up"></i>
								) : (
									<i class="arrowRed fa-solid fa-arrow-down"></i>
								)}
							</span>
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Data;
