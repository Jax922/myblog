import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import "./styles/dist/app.css"

class App extends React.Component {
    render() {
        return(
            <>
                <header>
                    <h1>DONG SHE</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`home`}>Home</Link>
                            </li>
                            <li>
                                <Link to={`cv`}>Resume</Link>
                            </li>
                            <li>
                                <Link to={`blog`}>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    © Copyright 2022 Dong
                </footer>
            </>
        )
    }
}

export default App