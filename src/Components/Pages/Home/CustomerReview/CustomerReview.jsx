import { motion } from 'framer-motion';

const CustomerReview = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-green-500 mb-10 text-center">
                Our Client Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
                {/* c-1 */}
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }} // Initial state
                    animate={{ opacity: 1, translateY: 0 }} // End state
                    transition={{ duration: 0.5 }} // Animation duration
                    className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-green-500 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                >
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co.com/MhDh0V6/R.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>Career Canvas has been a game changer for me! The customizable resume templates are top-notch, and the drag & drop feature made it so easy to design my resume exactly how I wanted it.</p>
                        <p>I loved the job postings as blogs feature. I found it so helpful to browse jobs that matched my skills, and the email alerts for new postings kept me ahead of the competition. Highly recommend Career Canvas to anyone serious about landing their dream job!</p>
                    </div>
                </motion.div>

                {/* c-2 */}
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-green-500 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                >
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co.com/M55hgFF/OIP.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Zephyr Blaze</h4>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>Career Canvas has been a game changer for me! The customizable resume templates are top-notch, and the drag & drop feature made it so easy to design my resume exactly how I wanted it.</p>
                        <p>I loved the job postings as blogs feature. I found it so helpful to browse jobs that matched my skills, and the email alerts for new postings kept me ahead of the competition. Highly recommend Career Canvas to anyone serious about landing their dream job!</p>
                    </div>
                </motion.div>

                {/* c-3 */}
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 border-green-500 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
                >
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://i.ibb.co.com/M55hgFF/OIP.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Felicity Vance</h4>
                                <div className="flex items-center space-x-2 dark:text-yellow-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                    </svg>
                                    <span className="text-xl font-bold">4.7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>Career Canvas has been a game changer for me! The customizable resume templates are top-notch, and the drag & drop feature made it so easy to design my resume exactly how I wanted it.</p>
                        <p>I loved the job postings as blogs feature. I found it so helpful to browse jobs that matched my skills, and the email alerts for new postings kept me ahead of the competition. Highly recommend Career Canvas to anyone serious about landing their dream job!</p>
                    </div>
                </motion.div>

                {/* Add more reviews as needed... */}

            </div>
        </div>
    );
};

export default CustomerReview;
