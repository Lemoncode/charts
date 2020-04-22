export const GridLayout: React.FunctionComponent = props => {
  return (
    <>
      <div className="grid">
        {props.children}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start
            width: 100%;
          }
        `}
      </style>
    </>
  );
}