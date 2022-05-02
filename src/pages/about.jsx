import Link from 'next/link';

export default function About() {
	return (
		<div>
			<header>
				<title>Next-About</title>
				<script src="https://cdn.tailwindcss.com"></script>
			</header>

			<h1>Welcome About</h1>
			<Link href="/">
				<a>Voltar Página</a>
			</Link>
		</div>
	);
}
