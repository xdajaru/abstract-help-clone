import Header from "./components/Header";
import Hero from "./components/Hero";
import HelpCategory from "./components/HelpCategory";
import Footer from "./components/Footer";
import InnerFooter from "./components/InnerFooter";

function App() {
	type HelpCategory = {
		icon: string;
		title: string;
		text: string;
	};

	type FooterCategory = string[];

	const abstractList: FooterCategory = ["Start Trial", "Pricing", "Download"];
	const resourcesList: FooterCategory = ["Blog", "Help Center", "Release Notes", "Status"];
	const communityList: FooterCategory = ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"];
	const companyList: FooterCategory = ["About Us", "Careers", "Legal"];
	const contactList: FooterCategory = ["info@abstract.com"];

	const arrHelpCategory: HelpCategory[] = [
		{
			icon: "https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
			title: "Manage your account",
			text: "Abstract lets you manage, version, and document your designs in one place.",
		},

		{
			icon: "https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
			title: "Manage your account",
			text: "Configure your account settings, such as your email, profile details, and password.",
		},

		{
			icon: "https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
			title: "Manage organizations, teams, and projects",
			text: "Use Abstract organizations, teams, and projects to organize your people and your work.",
		},

		{
			icon: "//theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
			title: "Manage billing",
			text: "Change subscriptions and payment details.",
		},

		{
			icon: "https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png",
			title: "Authenticate to Abstract",
			text: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
		},

		{
			icon: "https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png",
			title: "Abstract support",
			text: "Get in touch with a human.",
		},
	];

	return (
		<div className="App">
			<main>
				<Header />
				<Hero />
				<HelpCategory helpData={arrHelpCategory} />
				<Footer>
					<InnerFooter title="Abstract" list={abstractList}></InnerFooter>
					<InnerFooter title="Resource" list={resourcesList}></InnerFooter>
					<InnerFooter title="Community" list={communityList}></InnerFooter>
					<InnerFooter title="Company" list={companyList}></InnerFooter>
					<InnerFooter title="Contact Us" list={contactList}></InnerFooter>
					<div className="absolute right-0 bottom-0 text-right sm:text-left">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-8 mb-5 block ml-auto sm:inline" fill="white" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 32 32">
							<title>abstract</title>
							<path d="M16,0c12.8,0,16,3.2,16,16s-3.2,16-16,16S0,28.8,0,16S3.2,0,16,0z M13.4,24.7c3.4,0,6.1-2.8,6.1-6.1c0-3.4-2.8-6.1-6.1-6.1  c-3.4,0-6.1,2.8-6.1,6.1C7.3,22,10,24.7,13.4,24.7z M24.5,24.5v-17h-17v3h14v14H24.5z M13.4,15.5c1.7,0,3.1,1.4,3.1,3.1  c0,1.7-1.4,3.1-3.1,3.1C9.2,21.7,9.2,15.5,13.4,15.5z" />
						</svg>
						<p> &#169; Copyright 2022</p>
						<p>Abstract Studio Design, Inc.</p>
						<p>All rights reserved</p>
					</div>
				</Footer>
			</main>
		</div>
	);
}

export default App;
