import { LineChart, Line, XAxis, YAxis, BarChart, Bar } from "recharts";
const LineChartAdd = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 85,
      physicsMarks: 90,
      chemistryMarks: 88,
    },
    { id: 2, name: "Bob", mathMarks: 92, physicsMarks: 85, chemistryMarks: 80 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 78,
      physicsMarks: 75,
      chemistryMarks: 70,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 88,
      physicsMarks: 89,
      chemistryMarks: 92,
    },
    { id: 5, name: "Eve", mathMarks: 93, physicsMarks: 91, chemistryMarks: 90 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 70,
      physicsMarks: 65,
      chemistryMarks: 68,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 85,
      physicsMarks: 87,
      chemistryMarks: 85,
    },
    {
      id: 8,
      name: "Hank",
      mathMarks: 90,
      physicsMarks: 92,
      chemistryMarks: 88,
    },
    { id: 9, name: "Ivy", mathMarks: 79, physicsMarks: 80, chemistryMarks: 75 },
    {
      id: 10,
      name: "Jack",
      mathMarks: 84,
      physicsMarks: 86,
      chemistryMarks: 82,
    },
  ];

  return (
    <div>
      <LineChart width={600} height={400} data={students}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="mathMarks" stroke="red"></Line>
        <Line dataKey="physicsMarks"></Line>
      </LineChart>

      <BarChart className="my-8" width={1000} height={800} data={students}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>

        <Bar dataKey={"mathMarks"} stroke="blue" fill="blue"></Bar>
        <Bar dataKey="physicsMarks" stroke="red" fill="red"></Bar>
        <Bar dataKey="chemistryMarks" stroke="green" fill="green"></Bar>
      </BarChart>
    </div>
  );
};

export default LineChartAdd;
