import PublicLayout from "../components/PublicLayout";

function About() {
  return (
    <PublicLayout>
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-600">
          This project is a full-stack Student Result Management System
          built with React and designed using real-world academic workflows.
        </p>
      </div>
    </PublicLayout>
  );
}

export default About;
