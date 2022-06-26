import Browser from '../components/browser';
import Script from 'next/script';
import {useState} from 'react';

export default function About() {
	const state = useState(0);

	let x = state[0];
	let y = state[1];

	function increment() {
		y(x + 1);
	}

	return (
		<>
			<header>
				<title>Next-About</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<main>
				<div>
					<h1>Welcome About</h1>
					<button
						type="button"
						className="button w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer"
					>
						<Browser name="Voltar" destiny="/home" />
					</button>
				</div>

				<div className="mt-6">
					<span>
						<span className="mr-4">{x}</span>
						<button
							type="button"
							className="button w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer"
							onClick={increment}
						>
							To Add
						</button>
					</span>
				</div>
			</main>
		</>
	);
}
