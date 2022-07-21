import cl from "./Button.module.css";

export const Button = ({ icon, children, ...props }) => {
	return (
		<button className={cl.btn} {...props}>
			{icon}
			<p>{children}</p>
		</button>
	);
};
