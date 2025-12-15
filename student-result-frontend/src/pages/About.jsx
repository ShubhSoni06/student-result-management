function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-10 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          About This Project
        </h2>

        <p className="text-gray-600 mb-4">
          The Student Result Management System is a full-stack web
          application designed to manage academic records efficiently.
        </p>

        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Role-based access for Admin and Students</li>
          <li>SPI calculation using credit-weighted grading</li>
          <li>Admin-controlled subject and marks management</li>
          <li>Secure and scalable architecture</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
