let subjects = [
  { id: 1, name: "DBMS", credits: 4 },
  { id: 2, name: "Operating Systems", credits: 3 },
  { id: 3, name: "Computer Networks", credits: 3 }
];

export const getSubjects = () => {
  return subjects;
};

export const addSubject = (subject) => {
  subjects.push({
    id: Date.now(),
    ...subject
  });
};
