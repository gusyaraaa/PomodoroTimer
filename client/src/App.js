import { useState } from "react";
import { FileLoader } from "./components/FileLoader";
import { Layout } from "./components/Layout";
import { Timer } from "./components/Timer";
import { TimerConfig } from "./components/TimerConfig";
import { TimerContext } from "./context";
import "./styles/App.css";
import defaultSound from "./assets/sounds/breakTime.mp3";

export const App = () => {
	const [sessionLength, setSessionLength] = useState(25);
	const [breakLength, setBreakLength] = useState(5);
	const [drag, setDrag] = useState(false);
	const [sound, setSound] = useState(defaultSound);

	const dragStartHandler = (e) => {
		e.preventDefault();
		setDrag(true);
	};

	const dragLeaveHandler = (e) => {
		e.preventDefault();
		setDrag(false);
	};

	const validateFiles = (files) => {
		const validFileExtensions = ["aac", "flac", "mp3", "mqa", "ogg", "wav"];

		return files.filter((file) => validFileExtensions.some((extesion) => file.type.includes(extesion)));
	};

	const onDropHandler = (e) => {
		e.preventDefault();

		const files = [...e.dataTransfer.files];
		const file = validateFiles(files)[0];

		// setSound(file);
		setDrag(false);
	};

	return (
		<>
			{drag ? (
				<FileLoader
					setDrag={setDrag}
					onDragStart={(e) => dragStartHandler(e)}
					onDragLeave={(e) => dragLeaveHandler(e)}
					onDragOver={(e) => dragStartHandler(e)}
					onDrop={(e) => onDropHandler(e)}
				/>
			) : (
				<Layout
					onDragStart={(e) => dragStartHandler(e)}
					onDragLeave={(e) => dragLeaveHandler(e)}
					onDragOver={(e) => dragStartHandler(e)}
				>
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
				</Layout>
			)}
		</>
	);
};
