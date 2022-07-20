import cl from "./TimerConfig.module.css";

export const TimerConfig = () => {
	return (
		<div className={cl.content}>
			<div className={cl.sessionLength}>
				<h3 className={cl.sessionTitle}>Session Length</h3>
			</div>
			<div className={cl.breakLength}>
				<h3 className={cl.sessionTitle}>Break Length</h3>
			</div>
		</div>
	);
};
