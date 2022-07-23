import cl from "./Layout.module.css";

export const Layout = ({ children, ...props }) => {
	return (
		<div className={cl.content} {...props}>
			{children}
		</div>
	);
};
