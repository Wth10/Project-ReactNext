export default function button(props) {
	return (
		<>
			<button
				onClick={props.onClick}
				type="button"
				className="button w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer"
			>
				{props.name}
			</button>
		</>
	);
}
