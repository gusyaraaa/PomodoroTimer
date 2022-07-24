import cl from "./FileLoader.module.css";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

export const FileLoader = ({ setDrag, ...props }) => {
	return (
		<div className={cl.loader}>
			<div className={cl.dropArea} {...props}>
				<BsFileEarmarkArrowDown size="40" color="#fff" />
			</div>
		</div>
	);
};
