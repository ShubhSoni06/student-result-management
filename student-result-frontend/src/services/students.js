let students = [
  // 🔹 Real student (example)
  {
    id: 1,
    name: "Shubh Soni",
    email: "student@mail.com",
    enrollment: "DIP2023001",
    course: "Diploma",
    branch: "Computer Engineering",
    semester: 3,
    isDemo: false,
  },

  // 🔹 Demo student (public-safe)
  {
    id: -1,
    name: "Demo Student",
    email: "demo-student@mail.com",
    enrollment: "DEMO-000",
    course: "Diploma",
    branch: "Computer Engineering",
    semester: 3,
    isDemo: true,
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
    isDemo: false, // real students only
    ...student,
  });
};
