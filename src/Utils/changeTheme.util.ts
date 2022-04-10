import { Dispatch, SetStateAction } from "react"

import { Theme } from "../Types"

const themeKey = 'theme'

export const changeTheme = (theme: Theme, setTheme?: Dispatch<SetStateAction<Theme>>) => {
	const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
	if (setTheme) setTheme(newTheme)
	const root = document.querySelector('#root') as HTMLDivElement
	root.dataset.theme = newTheme
	localStorage.setItem(themeKey, newTheme)
}