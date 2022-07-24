import { useState } from "react";
import { FileLoader } from "./FileLoader";

export const DragArea = ({ children, setSound }) => {
	const [drag, setDrag] = useState(false);

	const dragStartHandler = (e) => {
		e.preventDefault();
		setDrag(true);
	};

	const dragLeaveHandler = (e) => {
		e.preventDefault();
		setDrag(false);
	};

	const validateFiles = (files) => {
		const validFileExtensions = ["aac", "flac", "mpeg", "mqa", "ogg", "wav"];

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
				<div
					onDragStart={(e) => dragStartHandler(e)}
					onDragLeave={(e) => dragLeaveHandler(e)}
					onDragOver={(e) => dragStartHandler(e)}
				>
					{children}
				</div>
			)}
		</>
	);
};
