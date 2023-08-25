import React from 'react'

const About = (props) => {
    var a= 5;
  return (
    <div>
        {props.title == "yes"? <h1>Welcome</h1>:<h1>Failed</h1>}
    </div>
  )
}

export default About