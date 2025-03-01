import React from "react";
import Header from "@/Components/Header";

export default function About() {
	return (
		<>
			<Header title={"About Us"} />

			<article>
				<h1 className="text-center text-4xl my-4">
					App Bucket: Where Passion Projects Find a Home
				</h1>
				<section>
				<p>
					Welcome to App Bucket, your one-stop shop for awesome apps crafted with passion and purpose. We&apos;re a
					platform built on the belief that amazing software can come from anywhere, not just big
					corporations.
				</p>
				<p>
					Think of us as a treasure chest overflowing with unique and useful apps created by talented junior
					developers like you! Here, you&apos;ll find a diverse collection of free apps designed to help you tackle
					everyday tasks, spark your creativity, and maybe even discover something unexpected.
				</p>
				<p>
					We&apos;re all about supporting the next generation of developers and giving them a platform to showcase
					their incredible work. So, explore the bucket, download some apps, and maybe even get inspired to
					create your own!
				</p>
				</section>
				<section>
					<h2 className={"font-bold"}>Key Features:</h2>
					<ul className={"list-inside list-disc"}>
						<li><strong>Unique & Free:</strong> Discover a treasure trove of free apps created by passionate
							developers.
						</li>
						<li><strong>Support Independent Developers:</strong> Help us empower the next generation of
							software
							creators.
						</li>
						<li><strong>Find Apps for Every Need:</strong> From productivity tools to fun games, we&apos;ve got
							you
							covered.
						</li>
						<li><strong>A Community of Creators:</strong> Join a vibrant community of developers and app
							enthusiasts.
						</li>
					</ul>
				</section>
				<section>
					<h2 className={"font-bold"}>How to submit your app to App Bucket ?</h2>
					<br/>
					<p>This is still under development.
					</p>
					<p>For now you can <a href={'https://github.com/dshaw0004'}>contact me</a> to show you interest toward this platform.</p>
				</section>
			</article>
		</>
	);
}
