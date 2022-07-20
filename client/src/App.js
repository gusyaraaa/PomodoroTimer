import { Timer } from "./components/Timer";
import { TimerConfig } from "./components/TimerConfig";
import "./styles/App.css";

export const App = () => {
	return (
		<div className="App">
			<h1 className="App__title">Pomodoro Timer</h1>
			<div className="App__content">
				<Timer />
				<TimerConfig />
			</div>
		</div>
	);
};
