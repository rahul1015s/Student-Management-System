import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStudents } from "../../store/studentContext";
import { validateStudent } from "../../utils/validation";

export default function AddStudentsForm() {
  const { addStudent } = useStudents();
  const [form, setForm] = useState({ name: "", email: "", course: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStudent(form)) {
      alert("Invalid data");
      return;
    }
    addStudent({ ...form, status: "Active" });
    setForm({ name: "", email: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        placeholder="Course"
        value={form.course}
        onChange={(e) => setForm({ ...form, course: e.target.value })}
      />
      <Button type="submit">Add Student</Button>
    </form>
  );
}
