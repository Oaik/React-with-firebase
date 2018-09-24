import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">
                  Project Titile - {id}
              </span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus dicta quibusdam, ex repudiandae modi reprehenderit facere repellat fuga nisi, quae maiores, voluptatem excepturi molestiae consectetur nihil. Est, architecto ea?</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
              <p>Posted by OO</p>
              <p>2nd October</p>
          </div>
      </div>
    </div>
  )
}

export default ProjectDetails
