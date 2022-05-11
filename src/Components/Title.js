import React, { useEffect, useState } from "react";
import { Pace, useIsFinished, useRewind, WindupChildren } from "windups";

const Title = () => {
	const FinishedIndicator = () => {
		let isFinished = useIsFinished()
		return isFinished ? window.location.reload(): null
	}

	return (
			<WindupChildren>
				<FinishedIndicator />
				<Pace ms={100}>{<h1>Portfolio en cours de développement...</h1>}</Pace>
			</WindupChildren>
	);
};

export default Title;

