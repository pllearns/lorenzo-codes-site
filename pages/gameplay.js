import Layout from '../components/PageLayout'
import HeroGrid from '../components/HeroGrid'

function Gameplay() {
  return <Layout>
    <HeroGrid style={{ 
          backgroundImage: "url('/ghost.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      <h1>Current Gameplay</h1>
    </HeroGrid>
  </Layout>
}

export default Gameplay