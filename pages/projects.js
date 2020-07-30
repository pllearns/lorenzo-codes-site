import Layout from '../components/PageLayout'

function Projects() {
  return (
    <Layout>
      <div
        className="grid" 
        style={{ background: "linear-gradient(blue, pink)", }}
      >
        <div className="grid-item">
        <h1>Projects</h1>
          <p>
            Currently, Phil is working on geo-spatio location data api documentation and maintenance of open source documentation for XY.
          </p>
          <br/>
          <h1>Github</h1>
          <p>
            You can read up more on Phil's projects in his GitHub.
          </p>
          <br/>
          <p><a href="/" style={{ textDecoration: "none", color: "white" }}> Back to Home </a></p>
        </div>
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-column: 1 / 13;
          width: 100%;
        }

        .grid-item {
          grid-area: main;
          color: #ffffff;
          margin-top: 2rem;
          width: 100%;
          grid-gap: 20px;
          padding: 100px;
        }
      `}
      </style>
    </Layout>
  )
}
  
export default Projects