function Header() {
	return (
		<header className="flex justify-between bg-black h-20 px-20 items-center">
			<div>
				<a href="#" className="text-white text-xl mx-2  font-semibold">
					<svg xmlns="http://www.w3.org/2000/svg" className="fill-white text-xs w-10 inline-block mr-2" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 32 32">
						<title>abstract</title>
						<path d="M16,0c12.8,0,16,3.2,16,16s-3.2,16-16,16S0,28.8,0,16S3.2,0,16,0z M13.4,24.7c3.4,0,6.1-2.8,6.1-6.1c0-3.4-2.8-6.1-6.1-6.1  c-3.4,0-6.1,2.8-6.1,6.1C7.3,22,10,24.7,13.4,24.7z M24.5,24.5v-17h-17v3h14v14H24.5z M13.4,15.5c1.7,0,3.1,1.4,3.1,3.1  c0,1.7-1.4,3.1-3.1,3.1C9.2,21.7,9.2,15.5,13.4,15.5z" />
					</svg>
					Abstract
				</a>

				<a href="#" className="text-white  border-l-2 border-white px-2 text-xl">
					Help Center
				</a>
			</div>
			<div>
				<a href="#" className="text-white border-solid mx-4 bg-gray-800 py-2 px-7 rounded-lg text-xl border-2 border-white">
					Submit a request
				</a>
				<a
					href="#"
					className="text-white bg-indigo-500 border-2 border-indigo-500  py-2 px-7 rounded-lg text-xl hover:bg-white hover:text-black hover:border-white transition-all ease-in-out duration-300"
				>
					Sign in
				</a>
			</div>
		</header>
	);
}

export default Header;
