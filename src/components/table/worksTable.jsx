import React, { useEffect, useState } from 'react';
import { deletePublication, getAllOeuvrsFromApprenant, publicationOevreByAdmin } from '../../api/apiRequest';
import { useAuth } from '../../provider/authprovider';

function WorksTable() {
  const { token, user } = useAuth();
  const [oeuvres, setOeuvres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllOeuvrsFromApprenant(token);
        setOeuvres(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, [token]);

  const handleDelete = (item) => {
     deletePublication(item.id, token)
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        Array.isArray(oeuvres.oeuvres) && oeuvres.oeuvres.length > 0 ? (
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Auteur
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        URL
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        View
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {oeuvres.oeuvres.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.auteur}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.date_publication}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.hebergerlink}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img src={item.profile1} alt="Avatar" className="h-10 w-10 rounded-full" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="block bg-red-700 hover:bg-blue-800 text-white w-full py-1 px-2 rounded flex justify-center items-center" onClick={() => handleDelete(item)}>Publish</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div>Aucune œuvre à afficher.</div>
        )
      )}
    </div>
  );
}

export default WorksTable;
