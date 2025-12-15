import PublicLayout from "../components/PublicLayout";

function Contact() {
  return (
    <PublicLayout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>

        <p className="text-gray-600 mb-2">
          For queries or feedback:
        </p>

        <p className="text-gray-700">
          Email: <b>support@studentresultsystem.com</b>
        </p>
      </div>
    </PublicLayout>
  );
}

export default Contact;
