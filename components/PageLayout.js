import Nav from './Nav'

export default function Layout(props) {
  return (
    <div className="container">
      <Nav />
      <main>
        {props.children}
      </main>
      <footer>
          Connect {' '}
          <a href="https://www.twitch.tv/philhascode" rel="noreferrer noopener" target="_blank"><img src="/TwitchGlitchPurple.svg" alt="Twitch Logo" className="logo" /></a>
          <a href="https://github.com/pllearns" rel="noreferrer noopener" target="_blank"><img src="/github.png" alt="Github Logo" className="logo" /></a>
          <a href="https://medium.com/@phill.lorenzo" rel="noreferrer noopener" target="_blank"><img src="/Monogram.png" alt="Github Logo" className="logo" /></a>
      </footer>
    <style jsx>{`
        .container {
          min-height: 100vh;
          display: gird;
          grid-template: auto 1fr auto / auto 1fr auto;
        }

        main {
          display: grid;
          grid-template-rows: auto 1fr auto;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}
      </style>
      <style jsx global>{`
       @import url(//fonts.googleapis.com/css2?family=Questrial&display=swap);
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Questrial', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>      
    </div>    
  )
}