import "./header.css";

interface Props {
	title?: string;
}

export default function index({ title = "App Bank" }: Props) {
	return (
		<>
			<header className="flex justify-between px-4 py-2 align-center">
				<a href="/" className="text-xl">
					{title}
				</a>
				<nav>
					<ul className="flex gap-2 align-center">
						<li className="nav-item">
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="/store">Store</a>
						</li>
						<li className="nav-item">
							<a href="/about">About</a>
						</li>
						<li className="nav-item">
							<a href="https://dshaw0004.netlify.app">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
