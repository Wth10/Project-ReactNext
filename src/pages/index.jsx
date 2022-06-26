import Login from '../layout/Login';
import Script from 'next/script';

export default function Index() {
	return (
		<>
			<header>
				<title>Next-App</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<main>
				<Login />
			</main>
		</>
	);
}
