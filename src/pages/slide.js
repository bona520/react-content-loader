import React from 'react'
import SlideShow from "react-content-loader"

const Slide = (props) => (
    <SlideShow
        speed={4}
        width={1200}
        height={324}
        viewBox="0 0 1200 324"
        backgroundColor="#f3f3f3"
        foregroundColor="#ccc"
        {...props}
    >
        <rect x="24" y="58" rx="10" ry="10" width="544" height="157" />
    </SlideShow>
)

export default Slide