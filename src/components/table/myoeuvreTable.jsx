import React, { useEffect, useState } from 'react';
import { useAuth } from '../../provider/authprovider';
import { getWorkByApprenant } from '../../api/apiRequest';

function MyoeuvreTable() {
    
    const { token } = useAuth();
    const [myoeuvre, setMyoeuvre] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getWorkByApprenant(token);
                setMyoeuvre(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, [token]);

    return (
        <div className="flex flex-col">
          {loading ? (
              <div className="flex justify-center items-center h-96">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
          ) : (
            Array.isArray(myoeuvre.oeuvres) && myoeuvre.oeuvres.length > 0 ? (
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
                            URL
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            GITHUB
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            FIGMA
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            View
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {myoeuvre.oeuvres && myoeuvre.oeuvres.map((item) => (
                            <tr key={item.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.auteur}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.type}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.hebergerlink}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.githublink}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {item.figmalink}
                              </td>                  
                              <td className="px-6 py-4 whitespace-nowrap">
                                <img src={item.profile1} alt="Avatar" className="h-10 w-10 rounded-full"/>
                              </td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div>Vous n'avez aucune œuvre publiée...</div>
            )
          )}
        </div>
    )
}

export default MyoeuvreTable