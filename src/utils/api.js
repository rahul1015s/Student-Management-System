import axios from "axios";

export async function fetchStudents() {
  const res = await axios.get("https://dummyjson.com/users?limit=10");
  return res.data.users.map((u) => ({
    id: u.id,
    name: `${u.firstName} ${u.lastName}`,
    email: u.email,
    course: ["BCA", "MCA", "B.Tech", "MBA"][u.id % 4],
    status: u.id % 2 === 0 ? "Active" : "Inactive",
  }));
}
