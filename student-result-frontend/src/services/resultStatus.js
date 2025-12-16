/*
resultStatus structure:

{
  studentId: {
    semesterNumber: boolean (true = published, false = draft)
  }
}

This mirrors how a real backend would store publish state.
*/

let resultStatus = {
  // Demo Student
  "-1": {
    1: true,
    2: true,
    3: true,
    4: false,
    5: false,
    6: false,
  },
};

/**
 * Check if a student's semester result is published
 */
export const isResultPublished = (studentId, semester) => {
  return resultStatus[studentId]?.[semester] || false;
};

/**
 * Publish a student's semester result
 * (One-way operation in demo)
 */
export const publishResult = (studentId, semester) => {
  if (!resultStatus[studentId]) {
    resultStatus[studentId] = {};
  }

  resultStatus[studentId][semester] = true;
};

/**
 * (Optional for future)
 * Reset all result statuses — useful for testing
 */
export const resetResultStatus = () => {
  resultStatus = {};
};
