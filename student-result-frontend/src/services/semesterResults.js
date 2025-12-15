const semesterResults = [
  // Demo student
  {
    studentId: -1,
    semester: 1,
    spi: 6.8,
  },
  {
    studentId: -1,
    semester: 2,
    spi: 7.2,
  },
  {
    studentId: -1,
    semester: 3,
    spi: 7.9,
  },

  // Real student example
  {
    studentId: 1,
    semester: 1,
    spi: 7.0,
  },
  {
    studentId: 1,
    semester: 2,
    spi: 7.4,
  },
  {
    studentId: 1,
    semester: 3,
    spi: 8.1,
  },
];

export const getSemesterResultsByStudent = (studentId) => {
  return semesterResults
    .filter((r) => r.studentId === studentId)
    .sort((a, b) => a.semester - b.semester);
};
