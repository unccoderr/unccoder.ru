import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

import { Language, Theme } from "../Types"

interface AppContextProps {
	theme: Theme,
	setTheme?: Dispatch<SetStateAction<Theme>>,
	language: Language,
	setLanguage?: Dispatch<SetStateAction<Language>>
}
export const AppContext = createContext<AppContextProps>({
	language: Language.RU, theme: Theme.LIGHT
})


interface AppContextProviderProps {
	children: ReactNode
}
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
	const [language, setLanguage] = useState(Language.RU)
	const [theme, setTheme] = useState(Theme.LIGHT)

	return <AppContext.Provider value={{
		language, setLanguage,
		theme, setTheme
	}}>
		{children}
	</AppContext.Provider>
}