import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { IndexScreen, SkillsScreen } from "./Screens"

import { AppContextProvider, NavBar } from "./Components"

export const App = () => {
	return <BrowserRouter>
		<AppContextProvider>
			<NavBar variant={'navbar'} />
			<Routes>
				<Route path={'/'} element={<IndexScreen/>} />
				<Route path={'/skills'} element={<SkillsScreen/>} />
			</Routes>
			<NavBar variant={'footer'} />
		</AppContextProvider>
	</BrowserRouter>

}

