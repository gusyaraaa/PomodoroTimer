import { useContext, useEffect, useState } from "react";
import { TimerContext } from "../context";
import cl from "./Timer.module.css";
import { Button } from "./UI/Button/Button";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

export const Timer = ({ sound }) => {
	const { sessionLength, breakLength } = useContext(TimerContext);
	const [timer, setTimer] = useState({ minutes: sessionLength, seconds: 0 });
	const [isTimerActive, setTimerActive] = useState(false);
	const [isSessionTime, setSessionTime] = useState(true);

	const playSound = () => {
		const audio = new Audio(sound);
		audio.volume = 0.3;
		audio.play();

		let timeout = setTimeout(() => {
			audio.pause();
			audio.currentTime = 0;
		}, breakLength * 60 * 1000);

		return () => {
			clearTimeout(timeout);
		};
	};

	const timeoutHandler = () => {
		if (timer.seconds !== 0) {
			return setTimer({
				...timer,
				seconds: timer.seconds - 1,
			});
		}

		if (timer.minutes !== 0) {
			return setTimer({
				minutes: timer.minutes - 1,
				seconds: 59,
			});
		}

		if (isSessionTime) playSound();

		setTimer({
			minutes: isSessionTime ? breakLength : sessionLength,
			seconds: 0,
		});
		setSessionTime(!isSessionTime);
	};

	useEffect(() => {
		if (!isTimerActive) return;

		let timeout = setTimeout(timeoutHandler, 1000);

		return () => {
			clearTimeout(timeout);
		};
	});

	const resetTimer = () => {
		setSessionTime(true);
		setTimer({ minutes: sessionLength, seconds: 0 });
	};

	return (
		<div className={cl.content}>
			<h2 className={cl.title}>{isSessionTime ? "Session" : "Break"}</h2>
			<div className={cl.timer}>
				<span>
					{timer.minutes}:{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
				</span>
			</div>
			<div className={cl.buttons}>
				<Button icon={isTimerActive ? <FaPause /> : <FaPlay />} onClick={() => setTimerActive(!isTimerActive)}>
					{isTimerActive ? "Pause" : "Start"}
				</Button>
				<Button icon={<FiRefreshCw />} onClick={resetTimer}>
					Reset
				</Button>
			</div>
		</div>
	);
};
