import { useEffect, useState } from "react";

type Enquiry = {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  destination: string;
  travel_date: string;
  travelers: number;
  message: string;
  created_at: string;
};

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/enquiries")
      .then((res) => res.json())
      .then((data) => {
        setEnquiries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Loading enquiries...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Travel Enquiries</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Destination</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id} className="text-center">
                <td className="p-2 border">{e.full_name}</td>
                <td className="p-2 border">{e.phone}</td>
                <td className="p-2 border">{e.email}</td>
                <td className="p-2 border">{e.destination}</td>
                <td className="p-2 border">
                  {new Date(e.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminEnquiries;
