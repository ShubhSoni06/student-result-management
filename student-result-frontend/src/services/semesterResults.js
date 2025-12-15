const semesterResults = [
  /* =========================
     DEMO STUDENT (Diploma)
     ========================= */
  {
    studentId: -1,
    semester: 1,
    spi: 6.2,
  },
  {
    studentId: -1,
    semester: 2,
    spi: 6.8,
  },
  {
    studentId: -1,
    semester: 3,
    spi: 7.3,
  },
  {
    studentId: -1,
    semester: 4,
    spi: 7.0,
  },
  {
    studentId: -1,
    semester: 5,
    spi: 7.6,
  },
  {
    studentId: -1,
    semester: 6,
    spi: 8.1,
  },

  /* =========================
     REAL STUDENT (Example)
     ========================= */
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
