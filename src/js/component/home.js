import React from "react";
import { TrafficLight } from "./TrafficLight";

//create your first component
export function Home() {
	return (
		<div>
			<div className="extension"></div>
			<div className="box">
				<TrafficLight />
			</div>
		</div>
	);
}
export default Home;
