import Link from 'next/link';
import Head from '../layout/Head';
import Script from 'next/script';

export default function Home() {
	return (
		<main>
			<header>
				<title>Next-App</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<div>
				<Head />
				<h1>Welcome Home</h1>
				<Link href="/about">
					<a>About Us</a>
				</Link>
			</div>
		</main>
	);
}
