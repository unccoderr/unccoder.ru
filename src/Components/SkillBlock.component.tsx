import { useContext } from "react";
import { AppContext } from "./App.context";
import { Localizator } from "../Utils";

interface SkillBlockProps {
	header: { ru: string, en: string },
	description: { ru: string, en: string },
	features: { ru: string, en: string }[]
}
export const SkillBlock = ({ header, description, features}: SkillBlockProps) => {
	const { language, theme } = useContext(AppContext)
	const { localize } = new Localizator(language)

	return <>
		<section className={'skills-page__info'}>
			<h1>{localize(header)}</h1>
			<p>{localize(description)}</p>
		</section>
		<ul className={'skills-page__stack'}>
			{ features.map((feature, key) => {
				return <li key={key + '_feature'} className={'skills-page__stack-item'} data-theme={theme}>{localize(feature)}</li>
			}) }
		</ul>
	</>
}