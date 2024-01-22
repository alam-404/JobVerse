import FeatureJobs from "./components/FeatureJobs/FeatureJobs"
import HomeHeader from "./components/Header/HomeHeader"
import JobCategory from "./components/JobCategory/JobCategory"

function App() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <JobCategory />
      <FeatureJobs />
    </>
  )
}

export default App
