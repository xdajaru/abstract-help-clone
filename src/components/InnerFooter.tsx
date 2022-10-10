interface FooterProps {
	title: string;
	list: string[];
}

function InnerFooter({ list, title }: FooterProps) {
	return (
		<div className="inline-block w-2/12 align-top xs:mr-20 sm:w-1/3 xs:w-1/4">
			<>
				<h3 className="font-bold text-2xl mt-12 mb-4 block">{title}</h3>
				{list.map((data) => {
					return (
						<a href="#" className="block hover:underline" key={Math.random()}>
							{data}
						</a>
					);
				})}
			</>
		</div>
	);
}

export default InnerFooter;
