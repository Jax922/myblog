import React from 'react'
import "../styles/dist/articleAbstract.css"
import banner from '../assets/img/banner.webp'

const title = "A Repulsive Force Unit for Garment Collision Handling in Neural Networks"
const abstract = "To address interpenetration problems in neural garment prediction, we propose a novel collision handling neural network layer called Repulsive Force Unit (ReFU). Based on the signed distance function (SDF) of the underlying body and the current garment vertex positions, ReFU predicts the per-vertex offsets that push any interpenetrating vertex to a collision-free configuration while preserving the fine geometric details. Our experiments show that ReFU significantly reduces the number of collisions between the body and the garment and better preserves geometric details compared to prior methods based on collision loss or post-processing optimization."

export default function ArticleAbstract() {
  return (
    <div className="article-abstract">
        <section className="banner">
            <img src={banner} alt="" />
        </section>
        <section className="content">
            <h2 className="title">{title}</h2>
            <p className="abstract">
                {abstract}
            </p>
            <section className="read-more">
                <button>Read More</button>
            </section>
        </section>
        
    </div>
  )
}
