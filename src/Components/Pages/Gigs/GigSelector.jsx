import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Hooks/AxiosHooks/useAxiosPublic';
import GigCard from './GigCard';

const GigSelector = () => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedSkills, setSelectedSkills] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
   const axiosPublic=useAxiosPublic()
    const [gigsCards,setGigsCards]=useState([])
   useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axiosPublic.get('/api/gig');
            console.log(res.data);
            setGigsCards(res.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [axiosPublic]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Search Input:', searchInput);
        console.log('Selected Skills:', selectedSkills);
        console.log('Selected Rating:', selectedRating);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);

        // You can also display selected details if needed
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6 text-green-600">Select a Gig</h1>

            {/* Filter Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md">
                {/* Search Input */}
                <div>
                    <label htmlFor="searchInput" className="block font-medium text-gray-700">Search for Gigs</label>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Type to search..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                {/* Skills Selection */}
                <div>
                    <label htmlFor="skillsSelect" className="block font-medium text-gray-700">Select Skills</label>
                    <select
                        id="skillsSelect"
                        value={selectedSkills}
                        onChange={(e) => setSelectedSkills(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    >
                        <option value="">Select skills</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="React">React</option>
                        <option value="Node.js">Node.js</option>
                        <option value="Graphic Design">Graphic Design</option>
                    </select>
                </div>

                {/* Rating Selection */}
                <div>
                    <label htmlFor="ratingSelect" className="block font-medium text-gray-700">Select Rating</label>
                    <select
                        id="ratingSelect"
                        value={selectedRating}
                        onChange={(e) => setSelectedRating(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    >
                        <option value="">Select a rating</option>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                </div>

                {/* Start Date */}
                <div>
                    <label htmlFor="startDate" className="block font-medium text-gray-700">Start Date</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                {/* End Date */}
                <div>
                    <label htmlFor="endDate" className="block font-medium text-gray-700">End Date</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                </div>
 
                <div className="col-span-1 sm:col-span-3">
                    <button type="submit" className="mt-4 w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                        Submit
                    </button>
                </div>
            </form>
            <div className=' grid md:grid-cols-3 grid-cols-1 gap-4'>
                {gigsCards.map(gigCard=><GigCard key={gigCard._id} gigCard={gigCard}></GigCard>)}
            </div>
        </div>
    );
};

export default GigSelector;
