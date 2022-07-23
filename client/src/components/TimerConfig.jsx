import { useContext } from "react";
import { TimerContext } from "../context";
import cl from "./TimerConfig.module.css";
import { Range } from "./UI/Range/Range";

export const TimerConfig = ({ setSessionLength, setBreakLength }) => {
	const { sessionLength, breakLength } = useContext(TimerContext);

	return (
		<div className={cl.content}>
			<div className={cl.length}>
				<h3 className={cl.title}>Session Length</h3>
				<Range length={sessionLength} setLength={setSessionLength} />
			</div>
			<div className={cl.length}>
				<h3 className={cl.title}>Break Length</h3>
				<Range length={breakLength} setLength={setBreakLength} />
			</div>
		</div>
	);
};
