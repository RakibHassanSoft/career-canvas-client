import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Providers/AuthProvider';

// Define individual card components
const Card1 = () => <div className="bg-blue-100 p-4">Content of Card 1</div>;
const Card2 = () => <div className="bg-blue-200 p-4">Content of Card 2</div>;
const Card3 = () => <div className="bg-blue-300 p-4">Content of Card 3</div>;
const Card4 = () => <div className="bg-blue-400 p-4">Content of Card 4</div>;
const Card5 = () => <div className="bg-blue-500 p-4">Content of Card 5</div>;
const Card6 = () => <div className="bg-blue-600 p-4">Content of Card 6</div>;
const Card7 = () => <div className="bg-blue-700 p-4">Content of Card 7</div>;
const Card8 = () => <div className="bg-blue-800 p-4">Content of Card 8</div>;
const Card9 = () => <div className="bg-blue-900 p-4">Content of Card 9</div>;
const Card10 = () => <div className="bg-blue-1000 p-4">Content of Card 10</div>;
const Card11 = () => <div className="bg-blue-1100 p-4">Content of Card 11</div>;
const Card12 = () => <div className="bg-blue-1200 p-4">Content of Card 12</div>;

// Main TemplateForm component
const TemplateForm = () => {
  const { handleUpdateTemplateId ,templateId} = useContext(AuthContext);
  const navigate = useNavigate();
  const [clickedCardIndex, setClickedCardIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // State to manage the active tab

  // Array of card components with their respective IDs
  const cardComponents = [
    { id: 1, component: <Card1 /> },
    { id: 2, component: <Card2 /> },
    { id: 3, component: <Card3 /> },
    { id: 4, component: <Card4 /> },
    { id: 5, component: <Card5 /> },
    { id: 6, component: <Card6 /> },
    { id: 7, component: <Card7 /> },
    { id: 8, component: <Card8 /> },
    { id: 9, component: <Card9 /> },
    { id: 10, component: <Card10 /> },
    { id: 11, component: <Card11 /> },
    { id: 12, component: <Card12 /> },
  ];

  // Filtered cards based on the active tab
  const filteredCards = {
    all: cardComponents,
    recommended: cardComponents.slice(0, 4), // First 4 for demonstration
    latest: cardComponents.slice(4, 8), // Next 4 for demonstration
  }[activeTab];

  const handleCardClick = (index, id) => {
    handleUpdateTemplateId(index); // Call to update the template ID with the actual id
    console.log(templateId)
    navigate('/resume-templates/personal-info-form');
  };
  

  return (
    <div className="p-4">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded ${activeTab === 'all' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={`py-2 px-4 rounded ${activeTab === 'recommended' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
        <button
          className={`py-2 px-4 rounded ${activeTab === 'latest' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('latest')}
        >
          Latest
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 gap-4">
        {filteredCards.map(({ component, id }, index) => (
          <div
            key={id}
            className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer ${clickedCardIndex === index ? 'border-2 border-green-500' : ''}`}
            onClick={() => handleCardClick(index, id)}
          >
            <div className="p-4">
              {component}
            </div>
          </div>
        ))}
      </div>

      {clickedCardIndex !== null && (
        <div className="mt-4 text-center">
          <h2 className="text-lg">You clicked on Card {clickedCardIndex + 1}</h2>
        </div>
      )}
    </div>
  );
};

export default TemplateForm;
