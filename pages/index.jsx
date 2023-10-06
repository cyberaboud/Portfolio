import React, { useState } from "react";

//Pages
import SobreMimPage from "../pages/sobre-mim";
import PortfolioPage from "../pages/portfolio";
import ExperienciaPage from "../pages/experiencia";
import HomePage from "../pages/homepage";
//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";
//import ContactMeEmail from "@/components/ContactMeEmail";

let flagMessage = false;
export default function Index() {
	return (
		<>
			<HomePage />
			<ServicesOffer />
			<SobreMimPage />
			<PortfolioPage />
			<ExperienciaPage />
			{/* <ContactMeEmail /> */}
			<FooterPage />
		</>
	);
}
