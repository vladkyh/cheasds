"use client"
import { useState } from 'react';

const SortDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('A - Z');
    const [showMore, setShowMore] = useState(false);

    const basicOptions = ['A - Z', 'Z - A', 'Price: Low to High'];
    const additionalOptions = ['Price: High to Low', 'Newest', 'Popular'];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleShowMore = () => setShowMore(!showMore);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setShowMore(false);
    };

    return (
        <div className="relative inline-block text-left w-48">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none "
            >
                <span>Sort by: {selectedOption}</span>
                <svg
                    className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {basicOptions.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className={`block w-full px-4 py-2 text-sm text-left ${
                                    selectedOption === option ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {option}
                            </button>
                        ))}

                        {!showMore ? (
                            <button
                                onClick={toggleShowMore}
                                className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-100"
                            >
                                It more →
                            </button>
                        ) : (
                            <>
                                {additionalOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleSelect(option)}
                                        className={`block w-full px-4 py-2 text-sm text-left ${
                                            selectedOption === option ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                                <button
                                    onClick={toggleShowMore}
                                    className="block w-full px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-100"
                                >
                                    Show less
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SortDropdown;