import Layout from '../components/PageLayout'

function Developer() {
  return (
    <Layout>
      <div
        className="grid" 
        style={{ background: "linear-gradient(blue, pink)", }}
      >
        <div className="grid-item">
        <h1>Developer</h1>
          <p>
            I started my journey into the world of software development in 2016, and throughout that time I worked on smaller focused projects.
          </p>
          <p>
            I have worked with React, Flutter, Swift, and Android. This includes creating simple applications for SDKs, creating tutorials, and consulting teams on integration of core software. 
          </p>
          <br/>
          <h1>Github</h1>
          <p>
            Connect with me on Github.
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
  
export default Developer