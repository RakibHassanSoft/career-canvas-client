import React, { useState } from 'react';

const ResumeReview = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    // Sample data
    const resumes = [
        { id: 1, name: 'John Doe', resumePdf: '/path/to/resume1.pdf', status: 'Pending' },
        { id: 2, name: 'Jane Smith', resumePdf: '/path/to/resume2.pdf', status: 'Reviewed' },
        { id: 3, name: 'Mike Johnson', resumePdf: '/path/to/resume3.pdf', status: 'Pending' },
    ];

    const openModal = (user) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedUser(null);
        setRating(0);
        setFeedback('');
    };

    const handleReviewSubmit = () => {
        // Submit the review (you can add your logic here)
        console.log(`Reviewed ${selectedUser.name} with rating: ${rating}, feedback: ${feedback}`);
        closeModal();
    };

    return (
        <div className="p-8 bg-white min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-green-600 text-center">Resume Review</h1>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left text-gray-600">User Name</th>
                            <th className="py-3 px-6 text-left text-gray-600">Resume PDF</th>
                            <th className="py-3 px-6 text-left text-gray-600">Status</th>
                            <th className="py-3 px-6 text-left text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resumes.map((resume) => (
                            <tr key={resume.id} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="py-3 px-6 border-b border-gray-300">{resume.name}</td>
                                <td className="py-3 px-6 border-b border-gray-300">
                                    <a href={resume.resumePdf} className="text-blue-500 hover:underline">
                                        View Resume
                                    </a>
                                </td>
                                <td className="py-3 px-6 border-b border-gray-300">{resume.status}</td>
                                <td className="py-3 px-6 border-b border-gray-300">
                                    <button
                                        className="text-green-600 hover:text-green-800 underline focus:outline-none"
                                        onClick={() => openModal(resume)}
                                    >
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6 text-green-600">Review {selectedUser.name}</h2>
                        <div className="flex justify-center mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`cursor-pointer text-${star <= rating ? 'yellow-500' : 'gray-400'} text-3xl`}
                                    onClick={() => setRating(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <textarea
                            rows="4"
                            placeholder="Write your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition duration-200"
                                onClick={handleReviewSubmit}
                            >
                                Submit Review
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResumeReview;
