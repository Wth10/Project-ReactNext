import Link from 'next/link';

export default function browser(props) {
	return (
		<>
			<Link href={props.destiny}>{props.name}</Link>
		</>
	);
}
