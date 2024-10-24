const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};
const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part}: {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  const [part1, part2, part3] = course.parts;
  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  );
};

const Total = ({ course }) => {
  const [part1, part2, part3] = course.parts;
  return (
    <p>
      Number of exercises: {part1.exercises + part2.exercises + part3.exercises}
    </p>
  );
};

export default App;
