import './SkillsScreen.css'
import { useContext } from "react";
import { AppContext, SkillBlock } from "../../Components";
import { Localizator } from "../../Utils";
import { useLocation } from "react-router-dom";
import { skillsLocalization } from "../../Config";
const { nav_tabs, figma_html_css, javascript_typescript, react_redux, databases } = skillsLocalization

export const SkillsScreen = () => {
	const { language, theme } = useContext(AppContext)
	const { localize } = new Localizator(language)
	const location = useLocation()

	const getActiveLink = (hash: string, modificator: string) => hash === location.hash ? `skills-page__tabs-item${modificator} skills-page__tabs-item`: 'skills-page__tabs-item'

	const isFigma = location.hash === '#figma-html-css'
	const isJavascript = location.hash === '#javascript-typescript'
	const isReact = location.hash === '#react-redux'
	const isDatabase = location.hash === '#database'

	return <main className={'page'} data-theme={theme}>
		<div className={'container skills-page'} data-theme={theme}>
			<ul data-theme={theme} className={'skills-page__tabs'}>
				{ nav_tabs.map((tab, index) => {
					return <li key={index + '_skill_tab'} data-theme={theme}>
						<a href={tab.hash} className={getActiveLink(tab.hash, tab.modificator)} data-theme={theme}>
							{localize(tab)}
						</a>
					</li>
				})}
			</ul>
			{ isFigma && <SkillBlock
				header={figma_html_css.header}
				description={figma_html_css.description}
				features={figma_html_css.features}
			/> }
			{ isJavascript && <SkillBlock
				header={javascript_typescript.header}
				description={javascript_typescript.description}
				features={javascript_typescript.features}
			/> }
			{ isReact && <SkillBlock
				header={react_redux.header}
				description={react_redux.description}
				features={react_redux.features}
			/> }
			{ isDatabase && <SkillBlock
				header={databases.header}
				description={databases.description}
				features={databases.features}
			/> }
		</div>
	</main>
}