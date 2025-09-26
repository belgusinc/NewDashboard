import { ProgressDashboard } from "./components/ProgressDashboard";
import { CourseTable } from "./components/CourseTable";

export default function App() {
  return (
    <div className="min-h-screen bg-white p-5">
      <ProgressDashboard />
      <CourseTable />
    </div>
  );
}