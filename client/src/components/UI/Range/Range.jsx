import cl from "./Range.module.css";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

export const Range = ({ length, setLength }) => {
	return (
		<div className={cl.content}>
			<button
				onClick={() => {
					setLength(length - 1);
				}}
				disabled={length === 1}
			>
				<FaArrowCircleDown size="19" color="#e11642" />
			</button>
			<span>{length} min</span>
			<button
				onClick={() => {
					setLength(length + 1);
				}}
				disabled={length === 60}
			>
				<FaArrowCircleUp size="19" color="#e11642" />
			</button>
		</div>
	);
};
