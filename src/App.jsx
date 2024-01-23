import FeatureJobs from "./components/FeatureJobs/FeatureJobs"
import HomeHeader from "./components/Header/HomeHeader"
import JobCategory from "./components/JobCategory/JobCategory"

function App() {
  return (
    <>
      <div className="mx-36">
        <HomeHeader />
      </div>
      <div className="static">
        <JobCategory />
        <FeatureJobs />
      </div>
    </>
  )
}

export default App
