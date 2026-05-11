import React from 'react'
import ProjectComponent from '../Component/ProjectComponent'
import UiuxComponent from '../Component/UiuxComponent'

const Projects = () => {
  return (
    <div className='h-[400vh] w-full mt-18 overflow-hidden bg-black'>
      <ProjectComponent/>
      <UiuxComponent/>
    </div>
  )
}

export default Projects
