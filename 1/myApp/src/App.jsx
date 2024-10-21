const App = () => {
  const data = {
    part1: "Fundamentals of React",
    exercises1: 10,
    part2: "Using props to pass data",
    exercises2: 7,
    part3: "State of a component",
    exercises3: 14,
  };
  const course = "Half Stack application development";
  return (
    <div>
      <Header course={course} />
      <Content data={data} />
      <Total data={data} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part}: {exercises}
    </p>
  );
};

const Content = ({ data }) => {
  return (
    <div>
      <Part part={data.part1} exercises={data.exercises1} />
      <Part part={data.part2} exercises={data.exercises2} />
      <Part part={data.part3} exercises={data.exercises3} />
    </div>
  );
};

const Total = ({ data }) => {
  return (
    <p>
      Number of exercises {data.exercises1 + data.exercises2 + data.exercises3}
    </p>
  );
};

export default App;
