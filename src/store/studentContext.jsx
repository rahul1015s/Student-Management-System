import { createContext, useContext, useEffect, useState } from "react";
import { fetchStudents } from "../utils/api";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { id: prev.length + 1, ...student }]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
}


export function useStudents() {
  return useContext(StudentContext);
}
