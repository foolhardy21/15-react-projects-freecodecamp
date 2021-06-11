import React, {useState, useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()

    setJobs(newJobs)
    setLoading(!loading)
  }

  const handleClick = (index) => {
    setValue(index)
  }

  useEffect(() => {
    fetchJobs()
  },[])

  if(loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  } else {
    const { company, dates, duties, title } = jobs[value]
    return (
        <section className='section'>
          <div className='title'>
            <h2>experience</h2>
            <div className='underline'></div>
            <div className='btn-container'>
              {
                jobs.map((job,index) => {
                  return (
                    <button
                    key={job.id}
                    onClick={() => handleClick(index)}
                    className={`job-btn ${index === value ? 'active-btn' : false}`}
                    >
                      {job.company}
                    </button>
                  )
                })
              }
            </div>
            <div className='jobs-center'>
              <article className='job-info'>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className='job-date'>{dates}</p>
                {duties.map((duty,index) => {
                  return (
                    <div key={index} className='job-desc'>
                      <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                  )
                })}
              </article>
            </div>
          </div>
        </section>
      )
  }


}

export default App;
