import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <section className="container">

        <Cards
          props={
            "https://mlfk3cv5yvnx.i.optimole.com/cb:BEzm.2f89c/w:809/h:404/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2023/10/how-to-disable-windows-fast-startup-fast-boot.png"
          }
        >
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title anАd make up the
            bulk of the card's content.
          </p>
        </Cards>
        
        <Cards>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
        </Cards>

      </section>
    </div>
  );
}

export default App;
