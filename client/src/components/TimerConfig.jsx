import cl from "./TimerConfig.module.css";

export const TimerConfig = ({ initialMinutes, setInitialMinutes }) => {
	return (
		<div className={cl.content}>
			<div className={cl.length}>
				<h3 className={cl.title}>Session Length</h3>
				<div>
					<button
						onClick={() => {
							setInitialMinutes(initialMinutes - 1);
						}}
					>
						{"<"}
					</button>
					<span>{initialMinutes} min</span>
					<button
						onClick={() => {
							setInitialMinutes(initialMinutes + 1);
						}}
					>
						{">"}
					</button>
				</div>
			</div>
			<div className={cl.length}>
				<h3 className={cl.title}>Break Length</h3>
				<div>
					<button
						onClick={() => {
							setInitialMinutes(initialMinutes - 1);
						}}
					>
						{"<"}
					</button>
					<span>5 min</span>
					<button
						onClick={() => {
							setInitialMinutes(initialMinutes + 1);
						}}
					>
						{">"}
					</button>
				</div>
			</div>
		</div>
	);
};
