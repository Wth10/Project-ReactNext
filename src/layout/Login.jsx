import style from '../styles/login.module.css';

export default function Login() {
	return (
		<div class="bg-blue-400 h-full w-full p-20 px-20 flex flex-col items-center justify-center">
			<img
				src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg"
				alt="logo"
			/>

			<div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
				<p
					tabindex="0"
					class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
				>
					Faça login na sua conta
				</p>
				<p
					tabindex="0"
					class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
				>
					Não tem conta?
					<a
						href="javascript:void(0)"
						class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
					>
						{' '}
						Criar conta.
					</a>
				</p>
				<form method="post" action="/home">
					<div class="mt-6 w-full">
						<label id="email" class="text-sm font-medium leading-none text-gray-800">
							Email
						</label>
						<input
							id="email"
							name="email"
							aria-labelledby="email"
							type="text"
							class="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
							placeholder="E-mail"
						/>

						<label for="" class="text-sm font-medium leading-none text-gray-800">
							Password
						</label>
						<div class="relative flex items-center justify-center">
							<input
								name="password"
								id="password"
								type="text"
								class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
								placeholder="Password"
							/>
						</div>
					</div>
					<div class="mt-8">
						<input
							type="submit"
							class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
