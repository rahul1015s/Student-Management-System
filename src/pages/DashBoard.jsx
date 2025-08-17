import { Card, CardContent } from "@/components/ui/card";
import { useStudents } from "../store/studentContext";

export default function DashBoard() {
  const { students } = useStudents();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-lg">Welcome back! 🎉</p>
          <p className="text-gray-600">Total Students: {students.length}</p>
        </CardContent>
      </Card>
    </div>
  );
}
