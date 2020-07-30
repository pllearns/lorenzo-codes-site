import Layout from '../components/PageLayout'
import HeroGrid from '../components/HeroGrid'

Writer.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.medium.com/v1/users/@phill.lorenzo/publications', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'access_token': `${process.env.ACCESS_TOKEN}`
    }
  })
  console.log(res.headers)
  const json = await res.json()
  console.log(json)

  return {
    articleName: json.name,
    articleDescription: json.description,
    articleUrl: json.url, 
    articleImage: json.imageUrl 
  }
}

function Writer({articleName, articleDescription, articleUrl, articleImage}) {
    return (
    <Layout>
      <div
        className="grid" 
        style={{ background: "linear-gradient(black, grey)", }}
      >
        <div className="grid-item">
        <h1>Writer</h1>
          <p>
            My writing includes work in Sweetcode.io and Fixate.io, which are solid sources for documentation.
          </p>
          <p>
            I am also writing technical documentation for XYO Foundation SDKs and API tooling. 
          </p>
          <br/>
          <h1>Medium</h1>
          <p>
            Read my blog at Medium.
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
  
export default Writer