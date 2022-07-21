import { useState } from "react";
import { Timer } from "./components/Timer";
import { TimerConfig } from "./components/TimerConfig";
import { TimerContext } from "./context";
import "./styles/App.css";

export const App = () => {
	const [initialMinutes, setInitialMinutes] = useState(20);
	const [minutes, setMinutes] = useState(initialMinutes);
	const [seconds, setSeconds] = useState(0);
	const [isTimerActive, setTimerActive] = useState(false);

	return (
		<div className="App">
			<h1 className="App__title">Pomodoro Timer</h1>
			<div className="App__content">
				<TimerContext.Provider
					value={{
						minutes,
						setMinutes,
						seconds,
						setSeconds,
					}}
				>
					<Timer isTimerActive={isTimerActive} setTimerActive={setTimerActive} />
					<TimerConfig initialMinutes={initialMinutes} setInitialMinutes={setInitialMinutes} />
				</TimerContext.Provider>
			</div>
		</div>
	);
};
