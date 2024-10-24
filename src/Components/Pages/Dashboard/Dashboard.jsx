
const Dashboard = () => {
    return (
        <div className="p-6 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Admin Dashboard</h1>
                <p className="text-gray-700 mb-6">
                    Welcome to your dashboard! Here you can manage your content and access various features.
                </p>
                
                {/* Cards or Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-green-500 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-lg font-semibold">Total Users</h2>
                        <p className="text-3xl">1,250</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-green-600 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-lg font-semibold">Total Sales</h2>
                        <p className="text-3xl">$15,000</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-green-700 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                        <h2 className="text-lg font-semibold">Pending Request</h2>
                        <p className="text-3xl">34</p>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-green-600">Recent Activities</h3>
                    <ul className="mt-4 bg-gray-100 rounded-lg p-4">
                        <li className="border-b py-2">User John Doe registered.</li>
                        <li className="border-b py-2">Order #1234 has been shipped.</li>
                        <li className="border-b py-2">New comment on your post.</li>
                        <li className="py-2">User Jane Smith logged in.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
