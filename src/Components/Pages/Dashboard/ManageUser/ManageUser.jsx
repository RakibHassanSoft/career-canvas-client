import React from 'react';

const ManageUser = () => {
    return (
        <div className="flex-1 p-10  h-full bg-gray-100"> {/* Set height to full for main content and add a background color */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Card 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-medium text-gray-700">Total Users</h3>
                    <p className="text-4xl font-bold text-gray-800">1,245</p>
                    <p className="text-gray-500">Active Users</p>
                </div>

                {/* Example Card 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-medium text-gray-700">Total Products</h3>
                    <p className="text-4xl font-bold text-gray-800">632</p>
                    <p className="text-gray-500">Products Available</p>
                </div>

                {/* Example Card 3 */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-medium text-gray-700">Total Orders</h3>
                    <p className="text-4xl font-bold text-gray-800">348</p>
                    <p className="text-gray-500">Orders This Month</p>
                </div>

                {/* Example Card 4 */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-medium text-gray-700">Total Revenue</h3>
                    <p className="text-4xl font-bold text-gray-800">$24,568</p>
                    <p className="text-gray-500">Revenue This Month</p>
                </div>
            </div>


        </div>

    );
};

export default ManageUser;
