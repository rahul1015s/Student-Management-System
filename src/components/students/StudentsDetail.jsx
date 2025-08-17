export default function StudentsDetail({ student }) {
  if (!student) return null;
  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold">{student.name}</h3>
      <p>{student.email}</p>
      <p>{student.course}</p>
      <p>Status: {student.status}</p>
    </div>
  );
}
