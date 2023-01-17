import "./App.css";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <Course
        title="Angular"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
      />
      <Course
        title="React"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
      />
      <Course
        title="Bootstrap"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
      />
      <Course
        title="Vuejs"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, officia numquam. Perspiciatis dignissimos laboriosam, sint incidunt suscipit distinctio nulla dolorum?"
      />
    </div>
  );
}

export default App;
