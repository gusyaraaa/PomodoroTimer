import { useContext, useEffect } from "react";
import { TimerContext } from "../context";
import cl from "./Timer.module.css";
import { Button } from "./UI/Button/Button";
import { FaPlay } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

export const Timer = ({ isTimerActive, setTimerActive }) => {
	const { minutes, setMinutes, seconds, setSeconds } = useContext(TimerContext);

	useEffect(() => {
		if (isTimerActive) {
			let timer = setInterval(() => {
				if (seconds > 0) {
					setSeconds(seconds - 1);
				}
				if (seconds === 0) {
					if (minutes === 0) {
						clearInterval(timer);
					} else {
						setMinutes(minutes - 1);
						setSeconds(59);
					}
				}
			}, 1000);

			return () => {
				clearInterval(timer);
			};
		}
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
				<Button icon={<FaPlay />} onClick={() => setTimerActive(!isTimerActive)}>
					Pause
				</Button>
				<Button icon={<FiRefreshCw />}>Reset</Button>
			</div>
		</div>
	);
};
