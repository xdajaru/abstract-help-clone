interface HelpCategoryProps {
	helpData: {
		icon: string;
		title: string;
		text: string;
	}[];
}

function HelpCategory({ helpData }: HelpCategoryProps) {
	return (
		<div className="p-8 md:px-0">
			<div className="max-w-[1600px] w-4/5 mx-auto md:mx-auto my-0 ">
				<div className="mt-32 mb-16 ">
					<div className="md:flex sm:block flex-wrap justify-center content-center">
						{helpData.map((data) => {
							return (
								<div className="min-h-[115px] sm:w-full md:w-1/2 md:pr-4 flex content-center mb-24 " key={Math.random()}>
									<div className="mb-12 flex flex-col max-w-[5rem] xs:pr-4 sm:max-w-[80px] xs:mr-8  xs:min-w-[80px] md:mr-5">
										<img src={data.icon} className="" alt="" />
									</div>
									<div className="pr-6 ">
										<div>
											<h4 className="text-2xl font-bold mb-4">{data.title}</h4>
											<div className="mt-5 text-2xl mb-5">{data.text}</div>
											<a href="" className="text-indigo-600 hover:underline">
												Learn More →
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HelpCategory;
