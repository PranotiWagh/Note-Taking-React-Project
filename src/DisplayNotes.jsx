import React, { useContext } from 'react'
import { TaskContextApi } from './TaskProvider'

const DisplayNotes = () => {

  let {selective, handleCategory, task} = useContext(TaskContextApi)

  let {selectedCategory} = selective;

  return (


    <main className='displaySection'>
          <section className="selectedNotes">
            <div className="selectDisplayBlock" value={selectedCategory} onChange={handleCategory}>
              <label>Select the category</label>
              <input type="radio" name='selectedCategory' value='all'/> <span>All</span>
              <input type="radio" name='selectedCategory' value='general'/> <span>General</span>
              <input type="radio" name='selectedCategory' value='technical'/> <span>Technical</span>
              <input type="radio" name='selectedCategory' value='official'/> <span>Official</span>
            </div>

            <main className="displayBlock">
              <div className="displayContent">
                {
                  task.length== 0 ? "Loading....." : task.map((value)=>{
                        return selectedCategory== "all" ? (
                          <div className="output">
                            <h1>Title: {value.title}</h1>
                            <p>Description: {value.description} </p>
                            <p>Category: {value.category}</p>
                          </div>
                        ) :(
                          selectedCategory == value.category  && (
                            <div className="output">
                              <h1>Title: {value.title}</h1>
                              <p>Description: {value.description} </p>
                              <p>Category: {value.category}</p>
                            </div>
                          )
                        ) 
                  }) 
                }
              </div>
            </main>
          </section>
    </main>
  )
}

export default DisplayNotes