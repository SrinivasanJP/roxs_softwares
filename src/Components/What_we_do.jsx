import React from 'react'
import { common, what_we_do } from '../styles'

const What_we_do = () => {
  return (
    <section className={what_we_do.root} id='what_we_do'>
        <div className={what_we_do.container}>
            <h1 className={common.textNabula+" sm:text-right"}>What We Do...</h1>
            <p className={what_we_do.p}>We are innovators, creators, and coding enthusiasts. Our community thrives on collaboration, constantly developing and exploring new horizons. We're a hub of continuous learning, where seasoned experts and newcomers alike find the nurturing support and inspiration they need to push the boundaries of what's possible in the tech world. We empower our members to tackle challenging projects and provide a mentorship platform for those looking to sharpen their skills. </p>
            <button className={common.Buttonblue}>View Projects</button>

        </div>
    </section>
  )
}

export default What_we_do