import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import ReviewCV from './pages/ReviewCV'

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
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/cv'>Resume</Link>
                            </li>
                            <li>
                                <Link to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cv" element={<Resume />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/reviewcv" element={<ReviewCV />} />
                    </Routes>
                </main>
                <footer>
                    © Copyright 2022 Dong
                </footer>
            </>
        )
    }
}

export default App