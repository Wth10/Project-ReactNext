import Link from 'next/link';
import Script from 'next/script';

export default function About() {
	return (
		<main>
			<header>
				<title>Next-About</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<div>
				<h1>Welcome About</h1>
				<Link href="/">
					<a>Voltar Página</a>
				</Link>
			</div>
		</main>
	);
}
