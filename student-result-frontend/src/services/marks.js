let marksData = {
  "-1": {
    1: [
      { subjectId: 1, marks: 62 },
      { subjectId: 2, marks: 68 },
      { subjectId: 3, marks: 71 },
    ],
    2: [
      { subjectId: 1, marks: 70 },
      { subjectId: 2, marks: 74 },
      { subjectId: 3, marks: 78 },
    ],
    3: [
      { subjectId: 1, marks: 76 },
      { subjectId: 2, marks: 81 },
      { subjectId: 3, marks: 84 },
    ],
  },
};

/*
marksData structure:
{
  studentId: {
    semester: [{ subjectId, marks }]
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
