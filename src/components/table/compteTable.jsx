import React, { useEffect, useState } from 'react';
import { useAuth } from '../../provider/authprovider';
import { getAllCompte } from '../../api/apiRequest';

function CompteTable() {
    const { token } = useAuth();
    const [comptes, setComptes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllCompte(token);
                setComptes(data);
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
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Profile
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nom
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Postnom
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Prenom
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sexe
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Phone
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {comptes.comptes && comptes.comptes.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img src={item.profileImage} alt="Avatar" className="h-10 w-10 rounded-full" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.nom}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.postnom}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.prenom}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.sexe}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.phone}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.email}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {item.role}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="block bg-red-700 hover:bg-blue-800 text-white w-full py-1 px-2 rounded flex justify-center items-center">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CompteTable;
