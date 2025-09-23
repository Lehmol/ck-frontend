const PageShell = ({children}) => (
	<div>
		<header>Header</header>
		<div>
		<main>{children || "Main content"}</main>
		</div>
		<footer>Footer</footer>
	</div>
);

export default PageShell;
