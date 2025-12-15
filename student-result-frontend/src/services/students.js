let students = [
  {
    id: 1,
    name: "Shubh Soni",
    email: "student@mail.com",
    enrollment: "DIP2023001",
    course: "Diploma",
    branch: "Computer Engineering",
    semester: 3,
  },
];

export const getStudents = () => {
  return students;
};

export const getStudentByEmail = (email) => {
  return students.find(
    (student) => student.email === email
  );
};

export const addStudent = (student) => {
  students.push({
    id: Date.now(),
    ...student,
  });
};
