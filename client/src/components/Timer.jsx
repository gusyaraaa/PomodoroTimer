import { useEffect, useState } from "react";
import cl from "./Timer.module.css";

export const Timer = (props) => {
	const { initialMinute = 10, initialSeconds = 10 } = props;
	const [minutes, setMinutes] = useState(initialMinute);
	const [seconds, setSeconds] = useState(initialSeconds);
	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<div className={cl.content}>
			<h2 className={cl.title}>Session</h2>
			<div className={cl.timer}>
				{minutes === 0 && seconds === 0 ? null : (
					<h3>
						{" "}
						{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
					</h3>
				)}
			</div>
			<div className={cl.buttons}>
				<button className={cl.pause}>Pause</button>
				<button className={cl.reset}>Reset</button>
			</div>
		</div>
	);
};
