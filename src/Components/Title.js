import React from "react";
import { Pace, useIsFinished, WindupChildren } from "windups";

const title = () => {
	const RewindProcess = () => {
		const isFinished = useIsFinished();
		return isFinished ? window.location.reload(false) : null;
	};
	return (
		<WindupChildren>
			<RewindProcess />
			<Pace ms={100}>
				<h1>Portfolio en cours de développement...</h1>
			</Pace>
		</WindupChildren>
	)
}

export default title
