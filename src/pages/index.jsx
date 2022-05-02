import Link from 'next/link';
import Head from '../layout/Head';

export default function Home() {
	return (
		<main>
			<header>
				<title>Next-App</title>
				<script src="https://cdn.tailwindcss.com"></script>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
