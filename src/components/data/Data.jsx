import React, { useEffect, useState } from 'react';
import Arrow from '../arrow/Arrow';
import SingleStat from '../SingleStat/SingleStat';
import StatHeader from '../statHeader/StatHeader';
import './Data.scss';

const Data = ({ data }) => {
	/* const [context] = useContext(Context); */
	const [liveRank, setLiveRank] = useState(0);
	const [thisGwRank, setThisGwRank] = useState(0);
	const [lastGwRank, setlastGwRank] = useState(0);
	const [pctChange, setPctChange] = useState(0);
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

			const pctMoveRank = ((1 - data.rank / data.last_gw) * 100).toFixed(2);
			setPctChange(pctMoveRank);
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
						<StatHeader title="LIVE" />
						<SingleStat data={liveRank} label="Live rank" />
						<SingleStat data={totalPoints} label="Total points" />
						<SingleStat classname="hits" data={hits} label="Hits" />
					</div>
					<div className="dataGW">
						<StatHeader title="GW Ranks" />
						<SingleStat data={thisGwRank} label="This GW" />
						<SingleStat data={lastGwRank} label="Last GW" />
					</div>
					<div className="dataMove">
						<StatHeader title="GW Move" />
						<SingleStat data={rankMove} label="Rank move" />
						<SingleStat data={pctChange} label="% change" pct />
						<Arrow arrow={arrow} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Data;
