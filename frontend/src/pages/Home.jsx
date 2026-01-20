import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection.jsx'
import Navbar from '../components/Navbar'
import LatestJobs from '../components/LatestJobs.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <LatestJobs />
      <Footer />
    </>
  )
}

export default Home