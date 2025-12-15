import Layout from "../components/Layout";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useAuth } from "../context/AuthContext";
import { getSemesterResultsByStudent } from "../services/semesterResults";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

function StudentPerformance() {
  const { user } = useAuth();
  const results = getSemesterResultsByStudent(user.studentId);

  const semesters = results.map((r) => `Sem ${r.semester}`);
  const spiValues = results.map((r) => r.spi);

  const getTrend = () => {
    if (spiValues.length < 2) return "Insufficient data";

    const diff = spiValues[spiValues.length - 1] - spiValues[0];

    if (diff > 0.3) return "Improving 📈";
    if (diff < -0.3) return "Declining 📉";
    return "Stable ➖";
  };

  const data = {
    labels: semesters,
    datasets: [
      {
        label: "SPI",
        data: spiValues,
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Semester-wise Performance
        </h2>

        {results.length === 0 ? (
          <p className="text-center text-gray-500">
            No performance data available.
          </p>
        ) : (
          <>
            <Line data={data} options={options} />

            <div className="mt-6 text-center">
              <p className="text-lg font-semibold">
                Performance Trend:
                <span className="ml-2 text-indigo-600">
                  {getTrend()}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default StudentPerformance;
