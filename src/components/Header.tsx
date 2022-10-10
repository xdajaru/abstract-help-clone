import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

function Header() {
	const [isOpen, setOpen] = useState(false);
	const [isSearch, setSearch] = useState(false);

	function searchHandler() {
		setSearch(!isSearch);
	}

	return (
		<header className="flex justify-center bg-black h-20 px-20 xs:px-0 sm:px-2 items-center xl:px-8 relative">
			<div className="flex items-center justify-between w-11/12 max-w-[1900px]">
				<div className="xs:w-full w-1/4 ">
					<a href="#" className="text-white sm:text-xl text-sm mx-2  font-semibold hover:opacity-50  ">
						<svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 inline-block mr-2" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 32 32">
							<title>abstract</title>
							<path d="M16,0c12.8,0,16,3.2,16,16s-3.2,16-16,16S0,28.8,0,16S3.2,0,16,0z M13.4,24.7c3.4,0,6.1-2.8,6.1-6.1c0-3.4-2.8-6.1-6.1-6.1  c-3.4,0-6.1,2.8-6.1,6.1C7.3,22,10,24.7,13.4,24.7z M24.5,24.5v-17h-17v3h14v14H24.5z M13.4,15.5c1.7,0,3.1,1.4,3.1,3.1  c0,1.7-1.4,3.1-3.1,3.1C9.2,21.7,9.2,15.5,13.4,15.5z" />
						</svg>
						Abstract
					</a>

					<a href="#" className="text-white border-l-2 border-white text-sm sm:text-xl px-2  hover:underline hover:underline-offset-4">
						Help Center
					</a>
				</div>
				<div className="xl:hidden flex">
					<div className="h-12 w-12 p-3 cursor-pointer" onClick={searchHandler}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ionicon fill-white " viewBox="0 0 512 512">
							<path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="32" />
							<path fill="white" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M338.29 338.29L448 448" />
						</svg>
					</div>
					<Hamburger toggled={isOpen} toggle={setOpen} size={20} color="white" />;
				</div>
				<div className="xl:flex hidden justify-end w-3/4">
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
			</div>
			{isSearch && (
				<div className="absolute left-0 top-0 bg-white py-5 w-full flex justify-center items-center">
					<input type="text" placeholder="Search" className="inline border-[1px] w-4/5 border-black py-3 px-5 rounded" />
					<p onClick={searchHandler} className="ml-5 font-bold">
						X
					</p>
				</div>
			)}
			{isOpen && (
				<div className="absolute left-0 top-[5.1rem] z-10 px-10  py-7 w-full text-xl  bg-black text-white">
					<div className="flex flex-col">
						<a href="#" className=" inline-block text-center border-b-2 p-4">
							Submit a request
						</a>
						<a href="#" className="inline-block p-4 text-center">
							Sign in
						</a>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
