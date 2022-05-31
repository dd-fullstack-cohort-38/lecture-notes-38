import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import { Home } from './Home'
import { AnotherPage } from './AnotherPage'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { CreepyDolls } from './CreepyDolls'

export function App() {
	return(
		<>
			<BrowserRouter>
				<Navigation/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/another' component={AnotherPage} />
					<Route exact path='/dolls' component={CreepyDolls} />
				</Switch>
				<Footer/>
			</BrowserRouter>
		</>
	)

}