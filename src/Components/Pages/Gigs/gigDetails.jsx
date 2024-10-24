
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const GigDetails = ({
    gigData: {
        title,
        userImage,
        projectImages,
        userName,
        projectDetail,
        skills,
        contactInfo,
        faq,
        reviews,
        rating,
        date,
    },
}) => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center p-6 bg-green-500">
                    <img
                        src={userImage}
                        alt="User"
                        className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                    />
                    <div className="ml-4">
                        <h1 className="text-3xl font-bold text-white">{title}</h1>
                        <h2 className="text-xl text-white">by {userName}</h2>
                        <p className="text-sm text-gray-200">Posted on: {new Date(date).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Project Details</h3>
                    <p className="text-gray-700 mb-4">{projectDetail}</p>

                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Skills</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>

                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Images</h3>
                    <Swiper spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} className="mb-4">
                        {projectImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`Project Image ${index + 1}`} className="rounded-lg shadow-md" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Contact Information</h3>
                    <p className="text-gray-700 mb-2">Email: {contactInfo.email}</p>
                    <p className="text-gray-700">Phone: {contactInfo.phone || 'N/A'}</p>

                    <h3 className="text-2xl font-semibold text-green-800 mb-2">FAQs</h3>
                    <div className="border-t border-gray-300 pt-4">
                        {faq.map((item, index) => (
                            <div key={index} className="mb-4">
                                <h4 className="font-semibold text-gray-700">{item.question}</h4>
                                <p className="text-gray-600">{item.answer}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Reviews</h3>
                    <div className="border-t border-gray-300 pt-4">
                        {reviews.map((review, index) => (
                            <div key={index} className="mb-4">
                                <p className="font-semibold text-gray-700">User {index + 1}</p>
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Rating</h3>
                    <p className="text-yellow-500 text-3xl mb-4">{'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}</p>
                </div>
            </div>
        </div>
    );
};

export default GigDetails;
