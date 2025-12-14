let marksData = {};

export const getMarksByStudent = (studentId) => {
  return marksData[studentId] || [];
};

export const saveMarks = (studentId, marks) => {
  marksData[studentId] = marks;
};
