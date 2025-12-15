let marksData = {};

/*
marksData structure:

{
  studentId: {
    semesterNumber: [
      { subjectId: 1, marks: 85 },
      { subjectId: 2, marks: 78 }
    ]
  }
}
*/

export const getMarksByStudentAndSemester = (studentId, semester) => {
  return marksData[studentId]?.[semester] || [];
};

export const saveMarks = (studentId, semester, marks) => {
  if (!marksData[studentId]) {
    marksData[studentId] = {};
  }

  marksData[studentId][semester] = marks;
};
