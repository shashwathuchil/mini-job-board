import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JobFilters from './components/JobFilters'
import JobCard from './components/JobCard'
import JobDetails from './components/JobDetails'
import { useAppSelector } from './store/hooks'

function App() {
  const { jobs, filteredJobs, currentPage, itemsPerPage } = useAppSelector(
    (state) => state.jobs
  )

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Job Board</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div>
                        <JobFilters />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {(filteredJobs.length ? filteredJobs : jobs)
                              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                              .map((job) => (
                            <JobCard key={job.id} job={job} />
                          ))}
                        </div>
                      </div>
                    }
                  />
                  <Route path="/job/:id" element={<JobDetails />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </Router>
  )
}

export default App
