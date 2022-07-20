import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/normalize.css";
import { App } from "./App";
import { Layout } from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Layout>
			<App />
		</Layout>
	</React.StrictMode>
);
