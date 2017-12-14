import React from 'react'

import Carousel from '../components/Carousel'

const Home = (props) => {
    console.log('the props are ', props)
    return (
        <div className="content">
            <Carousel images={props.media} />
        </div>
    )
}

export default Home;