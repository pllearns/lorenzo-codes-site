export default function HeroGrid(props) {
  return (
    <div>
      <div className="grid" style={props.style}>
        <div className="grid-item">
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-column: 1 / 13;
          width: 100%;
          justify-content: space-between;
          opacity: 1;
          transition: 0.2s;
        }

        .grid-item {
          grid-area: main;
          color: #ffffff;
          margin-top: 2rem;
          width: 100%;
          grid-gap: 20px;
          padding: 100px;
        }

        .grid:hover {
          opacity: 0.6;
        }
      `}
      </style>
    </div>
  )
}