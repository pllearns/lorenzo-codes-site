export default function Nav(props) {
  return (
    <div>
      <nav className="nav-container">
        <ul>
          <li><a href="/developer">DEVELOPER</a></li>
          <li><a href="/writer">WRITER</a></li>
          <li><a href="https://philhascode.online/" target="_blank" rel="noreferrer noopener">GAMER</a></li>
        </ul>
      </nav>
      <style jsx>{`
        .nav-container {
          grid-column: 1 / 4;
          position: fixed;
          width: 100%;
          background-color: #000000;
          z-index: 1;
        }
        ul {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          background-color: #000000;
          justify-content: center;
        }
        li a {
          padding: 1rem;
          display: inline;
          text-decoration: none;
          float: left;
          font: Roboto;
          font-weight: bold;
          color: #ffffff;
        }
      `}
      </style>
    </div>
  )
}