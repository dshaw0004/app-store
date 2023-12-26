"use client";
import { useRef } from "react";
import "./header.css";

interface Props {
	title?: string;
}

const Header: React.FunctionComponent<{
	title?: string;
}> = ({ title = "App Bucket" }: Props) => {
	const navUlRef = useRef<HTMLUListElement>(null);
	function toggleNavbar() {
		if (navUlRef.current?.classList.contains("visible")) {
			navUlRef.current.classList.remove("visible");
		} else {
			navUlRef.current?.classList.add("visible");
		}
	}
	return (
		<>
			<header className="flex justify-between px-4 py-2 align-center">
				<a href="/" className="">
					{title}
				</a>
				<nav className="navbar">
					<button
						aria-hidden
						className="small-screen-only"
						onClick={toggleNavbar}
					>
						<b>=</b>
					</button>
					<ul className="nav-list" ref={navUlRef}>
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
						<li className="nav-item small-screen-only"></li>
						<li className="nav-item small-screen-only">
							<button
								aria-hidden
								className="small-screen-only close-nav"
								onClick={toggleNavbar}
							>
								close
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
