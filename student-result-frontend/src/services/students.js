let students = [
  {
    id: 1,
    name: "Shubh Soni",
    enrollment: "DIP2023001",
    course: "Diploma",
    branch: "Computer Engineering",
    semester: 3,
  },
];

export const getStudents = () => {
  return students;
};

export const addStudent = (student) => {
  students.push({
    id: Date.now(),
    ...student,
  });
};
