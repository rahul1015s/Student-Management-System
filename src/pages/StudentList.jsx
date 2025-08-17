import { useState } from "react";
import StudentsTable from "../components/students/StudentsTable";
import { Input } from "@/components/ui/input";
import { useStudents } from "../store/studentContext";

export default function StudentList() {
  const { students } = useStudents();
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Students List</h2>
      <Input
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-1/2"
      />
      <StudentsTable students={filtered} />
    </div>
  );
}
