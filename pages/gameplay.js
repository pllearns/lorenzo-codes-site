import Layout from '../components/PageLayout'

function Gameplay() {
  return (
      <Layout>
        <video playsinline autoplay muted loop poster="ghost.jpg" id="bgvid">
          <source src="placeholder.webm" type="video/webm"></source>
          <source src="placeholder.mp4" type="video/mp4"></source>
        </video>
        <header className="viewport-header">
          <h1>
            Current Gameplay
            <span>Ghost of Tsushima</span>
          </h1>
        </header>
        <div className="viewport-text">
          <h2 style={{ color: "white" }}>
            I stream this amazing game on Monday night, Saturday, and Sunday. 
          </h2>
          <p><a href="/" style={{ textDecoration: "none", color: "white" }}> Back to Home </a></p>
        </div>
      <style jsx>{`
        video {
          object-fit: cover;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
        }
        .viewport-header {
          position: relative;
          height: 75vh;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .viewport-text {
          position: relative;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h1 {
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 2vw;
          line-height: 1.2;
          font-size: 4vw;
          text-align: center;
          }

        span {
          display: block;
          font-size: 5vw;
        }     
      `}
      </style>
    </Layout>
  )
}

export default Gameplay