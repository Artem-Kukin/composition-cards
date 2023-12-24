import { Children } from "react";

const Cards = ({ children, props }) => {
  return (
    <div className="card">
      {props ? (
        <img src={props} className="card-img-top" alt="Image cap" />
      ) : (
        false
      )}
      <div className="card-body">
        {Children.map(children, (child) => (
          <main>{child}</main>
        ))}

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Cards;
