import React from 'react';

const ManageUser = () => {
    // Sample user data
    const users = [
        { id: 1, username: 'johndoe', email: 'johndoe@example.com', status: 'Active' },
        { id: 2, username: 'janesmith', email: 'janesmith@example.com', status: 'Inactive' },
        { id: 3, username: 'mikejohnson', email: 'mikejohnson@example.com', status: 'Active' },
        { id: 4, username: 'emilydavis', email: 'emilydavis@example.com', status: 'Active' },
    ];

    return (
        <div className="flex-1 p-10 h-full bg-gray-100">
            

            {/* User Management Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-2xl font-semibold p-6 border-b border-gray-200">Manage Users</h2>
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left text-gray-600">Username</th>
                            <th className="py-3 px-6 text-left text-gray-600">Email</th>
                            <th className="py-3 px-6 text-left text-gray-600">Status</th>
                            <th className="py-3 px-6 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="py-3 px-6 border-b border-gray-300">{user.username}</td>
                                <td className="py-3 px-6 border-b border-gray-300">{user.email}</td>
                                <td className="py-3 px-6 border-b border-gray-300">{user.status}</td>
                                <td className="py-3 px-6 border-b border-gray-300">
                                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                                    <button className="text-red-500 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
