import Link from 'next/link';

export default function Home() {
	return (
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/teste">
					<a>About Us</a>
				</Link>
			</li>
			<li>
				<Link href="/blog/hello-world">
					<a>Blog Post</a>
				</Link>
			</li>
		</ul>
	);
}
