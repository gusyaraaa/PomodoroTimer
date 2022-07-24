import { useState } from "react";
import { Timer } from "./components/Timer";
import { TimerConfig } from "./components/TimerConfig";
import { TimerContext } from "./context";
import "./styles/App.css";
import defaultSound from "./assets/sounds/breakTime.mp3";
import { DragArea } from "./components/DragArea/DragArea";

export const App = () => {
	const [sessionLength, setSessionLength] = useState(25);
	const [breakLength, setBreakLength] = useState(5);
	const [sound, setSound] = useState(defaultSound);

	return (
		<DragArea setSound={setSound}>
			<div className="App">
				<h1 className="App__title">Pomodoro Timer</h1>
				<div className="App__content">
					<TimerContext.Provider
						value={{
							sessionLength,
							breakLength,
						}}
					>
						<Timer sound={sound} />
						<TimerConfig setSessionLength={setSessionLength} setBreakLength={setBreakLength} />
					</TimerContext.Provider>
				</div>
				<p className="App__info">Drag and drop file to add a sound</p>
			</div>
		</DragArea>
	);
};
