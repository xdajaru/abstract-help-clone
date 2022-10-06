type Props = {
	title?: string;
	children?: React.ReactNode;
};

function Footer({ children }: Props) {
	return (
		<footer className="px-5 bg-black text-white relative pb-16 xs:pb-1">
			<div className="mx-auto w-11/12 pb-28 relative">{children}</div>
		</footer>
	);
}

export default Footer;
