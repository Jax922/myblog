import React from 'react'
import { Link } from 'react-router-dom'
import header_photo from '../assets/header_photo.png'
import ArticleList from './ArticleList'

export default function Home() {
  return (
    <>
        <div className="home">  
            <aside className="profile">
                <img src={header_photo} alt="" />
                <h2>Dong She</h2>
                <p>Master Student, Computer Science</p>
                <a href="https://www.ku.dk/">University of Copenhagen</a>
                <ul className="social">
                    <li>
                        <a href="mailto:dshe922@gmail.com" className="social-method">
                            <i class="fa-solid fa-envelope fa-2xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Jax922" className="social-method" target="_blank" >
                            <i class="fa-brands fa-github fa-2xl"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dong-she-a9201b238/" target="_blank" className="social-method">
                            <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </li>
                </ul>
                
            </aside>
            <section className="intro">
                <p>
                    I am Dong She, a graduate student at the <a href="https://www.ku.dk/">University of Copenhagen</a> studying Computer Science. I received my B.Eng. degree in Software Engineering from the <a href="https://www.ahu.edu.cn/">Anhui University</a> in China.
                </p>
                <p>
                I have 6 years of IT work experience in China, with 3+ years of experience specializing in web development as a front‑end engineer, and also with about 3 years of experience specializing in product design as a product manager. Here is my <Link to="/cv">resume(CV)</Link>.
                </p>
                <p className="promotion">
                <em>I am looking for a student job or internship role! Please feel free to <a href="mailto:dshe922@gmail.com">contact me</a>.</em>
                </p>
            </section>
            <div class="recent-posts">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div className="blog">
                    <section className="title">
                        <h1>RECENT POSTS</h1>
                    </section>
                    <section className="article-list">
                        <ArticleList />
                    </section>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,245.3C384,288,480,288,576,256C672,224,768,160,864,160C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                
            </div>
        </div>
        
        
    </>
  )
}
