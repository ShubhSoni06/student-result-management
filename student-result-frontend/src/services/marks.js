let marksData = {};

/*
marksData structure:
{
  studentId: [
    { subjectId: 1, marks: 85 },
    { subjectId: 2, marks: 78 }
  ]
}
*/

export const getMarksByStudent = (studentId) => {
  return marksData[studentId] || [];
};

export const saveMarks = (studentId, marks) => {
  marksData[studentId] = marks;
};
