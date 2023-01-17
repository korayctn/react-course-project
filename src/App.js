import "bulma/css/bulma.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CCSharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <section className="section"> </section>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course
              title="Angular"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
              img={Angular}
            />
          </div>
          <div className="column">
            <Course
              title="React"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
              img={Bootstrap}
            />
          </div>
          <div className="column">
            <Course
              title="Bootstrap"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
              img={CCSharp}
            />
          </div>
          <div className="column">
            {" "}
            <Course
              title="Vuejs"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
              img={Kompleweb}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
