import Head from '../layout/Head';
import Script from 'next/script';
import Browser from '../components/browser';

export default function Home() {
	return (
		<>
			<header>
				<title>Next-App</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<main>
				<Head />
				<h1>Welcome Home</h1>
				<div className="bg-[#00FF7F]  text-[#00008B]">
					<span className="p-12 m-10">
						<Browser name="About" destiny="/about" />
					</span>
					<span className="p-12 m-10">
						<Browser name="User" destiny="/user" />
					</span>
					<span className="p-12 m-10">
						<Browser name="Api" destiny="/api/user/user" />
					</span>
				</div>

				<div></div>
			</main>
		</>
	);
}
