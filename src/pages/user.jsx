import Browser from '../components/browser';
import Script from 'next/script';
import Button from '../components/button';
import {useState} from 'react';

export default function User() {
	const [main, setmain] = useState(1);
	const [user, setuser] = useState({});

	async function GetCustomer() {
		const host = window.location.host;
		const protocol = window.location.protocol;

		const resp = await fetch(`${protocol}//${host}/api/user/${main}`);
		const dice = await resp.json();
		setuser(dice);
	}

	return (
		<>
			<header>
				<title>Next-User</title>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</header>
			<main>
				<div>
					<h1>Welcome User</h1>
					<button
						type="button"
						className="button mt-6 w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer"
					>
						<Browser name="Voltar" destiny="/home" />
					</button>
				</div>

				<div className="mt-6">
					<input
						className="mr-4 text-black"
						type="number"
						value={main}
						onChange={(x) => setmain(x.target.value)}
					/>
					<Button onClick={GetCustomer} name="Submit" />
				</div>

				<div className="mt-6">
					<ul>
						<li>Id: {user.id}</li>
						<li>Nome: {user.nome}</li>
						<li>Idade: {user.idade}</li>
						<li>Email: {user.email}</li>
					</ul>
				</div>
			</main>
		</>
	);
}
