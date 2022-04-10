import { Dispatch, SetStateAction } from "react"

import { Language } from "../Types"

const languageKey = 'lang'

export const changeLanguage = (theme: Language, setLanguage?: Dispatch<SetStateAction<Language>>) => {
	const newLanguage = theme === Language.RU ? Language.EN : Language.RU
	if (setLanguage) setLanguage(newLanguage)
	localStorage.setItem(languageKey, newLanguage)
}