import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MicrophoneIcon, LanguageIcon, DocumentTextIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import summary from "../assets/summary.png";
import translation from "../assets/translation.png";
import transcription from "../assets/transcription.png";

export const Sidebar = () => {
    const [selectedInput, setSelectedInput] = useState('audio');
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com/watch?v=JiJuE...');
    const [selectedModel, setSelectedModel] = useState('kocc');
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleInputSelect = (value) => {
        setSelectedInput(value);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        // Update currentPath when the window location changes
        const handlePathChange = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handlePathChange);
        return () => window.removeEventListener('popstate', handlePathChange);
    }, []);

    const sidebar_links = [
        { name: "Transcription", icon: <img src={transcription} className="w-5 h-5" />, path: "/transcription", active: currentPath === "/transcription" },
        { name: "Translation", icon: <img src={translation} className="w-5 h-5" />, path: "/translation", active: currentPath === "/translation" },
        { name: "Text Summary", icon: <img src={summary} className="w-5 h-5" />, path: "/summary", active: currentPath === "/summary" },
    ];

    const inputOptions = [
        { name: "Upload Audio File", icon: <MicrophoneIcon className="w-5 h-5" />, value: "audio" },
        { name: "Youtube Video Url", icon: <GlobeAltIcon className="w-5 h-5" />, value: "youtube" },
        { name: "Record Audio", icon: <MicrophoneIcon className="w-5 h-5" />, value: "record" },
    ];

    const getSelectedOption = () => {
        return inputOptions.find(option => option.value === selectedInput);
    };

    return (
        <>
            {/* Overlay pour mobile */}
            {!isCollapsed && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <div className={`
                ${isCollapsed
                    ? 'w-16 md:w-20'
                    : 'w-80 md:w-90'
                } 
                h-screen bg-gradient-to-b from-[#5fc3c7] to-[#385bc3] 
                flex flex-col fixed
                transition-all duration-300 ease-in-out
                lg:relative z-50
                ${isCollapsed ? 'translate-x-0' : 'translate-x-0'}
                shadow-xl lg:shadow-none
            `}>
                {/* Header */}
                <div className='p-3 md:p-4 flex items-center justify-between border-white/20 flex-shrink-0'>
                    {!isCollapsed && (
                        <h1 className='text-lg md:text-[24px] font-bold text-white'>Kocc</h1>
                    )}
                    <button
                        className='text-white/80 hover:text-white transition-colors font-bold ml-auto p-1'
                        onClick={toggleSidebar}
                    >
                        {isCollapsed ? (
                            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
                        ) : (
                            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
                        )}
                    </button>
                </div>

                {/* Navigation Links */}
                <div className='px-3 md:px-6 py-4 md:py-6 space-y-3 md:space-y-4 flex-shrink-0'>
                    {sidebar_links.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            className={`w-full h-10 md:h-12 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-2 md:px-4 py-2 rounded-full text-xs md:text-sm text-white transition-all duration-200 ${link.active
                                ? 'bg-blue-600/40 border border-white/20'
                                : 'bg-gradient-to-r from-[#4e95c5] to-[#385dc3] hover:bg-blue-600/40'
                                }`}
                            title={isCollapsed ? link.name : ''}
                        >
                            {isCollapsed ? (
                                <span className="flex-shrink-0">{link.icon}</span>
                            ) : (
                                <div className='flex items-center font-semibold space-x-2 md:space-x-3 min-w-0'>
                                    <span className="truncate">{link.name}</span>
                                    <span className="flex-shrink-0">{link.icon}</span>
                                </div>
                            )}
                        </a>
                    ))}
                </div>

                {/* Input Mode Section - Only show when not collapsed */}
                {!isCollapsed && (
                    <div className='px-3 md:px-6 flex-1 min-h-0 flex flex-col'>
                        <h3 className='text-white/80 font-semibold mb-3 md:mb-4 text-sm'>Input Mode</h3>

                        {/* Dropdown Button */}
                        <div className='relative mb-4'>
                            <button
                                onClick={toggleDropdown}
                                className='w-full h-10 md:h-12 flex items-center justify-between px-3 md:px-4 py-2 rounded-full text-xs md:text-sm text-white transition-all duration-200 bg-gradient-to-r from-[#4e95c5] to-[#385dc3] hover:bg-blue-600/40'
                            >
                                <div className='flex items-center space-x-3 md:space-x-3 min-w-0'>
                                    <span className='font-medium truncate'>{getSelectedOption()?.name}</span>
                                    <span className="flex-shrink-0">{getSelectedOption()?.icon}</span>
                                </div>
                                {isDropdownOpen ? (
                                    <BiSolidUpArrow className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                                ) : (
                                    <BiSolidDownArrow className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                                )}
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className='absolute top-full left-0 right-0 mt-2 bg-gradient-to-r from-[#4e95c5] to-[#385dc3] backdrop-blur-sm rounded-xl border transition-all duration-300 border-white/10 shadow-lg z-10'>
                                    {inputOptions.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleInputSelect(option.value)}
                                            className={`w-full flex items-center space-x-3 px-3 md:px-4 py-3 text-xs md:text-sm text-white hover:bg-white/10 transition-colors ${index === 0 ? 'rounded-t-xl' : ''
                                                } ${index === inputOptions.length - 1 ? 'rounded-b-xl' : ''
                                                } ${selectedInput === option.value ? 'bg-blue-600/40' : ''
                                                }`}
                                        >
                                            <span className='font-medium'>{option.name}</span>
                                            <span className="flex-shrink-0 ml-auto">{option.icon}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input Content Section */}
                        <div className='flex-1 min-h-0 overflow-y-auto space-y-4'>
                            {selectedInput === 'audio' && (
                                <>
                                    <div className='bg-blue-700/30 border-2 border-dashed border-white/20 rounded-xl p-3 md:p-4 text-center space-y-2'>
                                        <div className='text-white/80 text-xs'>Drag and drop file here</div>
                                        <div className='text-white/60 text-xs'>Limit 200MB per file - WAV,MP3,M4A</div>
                                        <button className='w-full bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-full font-medium text-xs md:text-sm flex items-center justify-center space-x-2'>
                                            <DocumentTextIcon className="w-4 h-4" />
                                            <span>Browse files</span>
                                        </button>
                                    </div>
                                </>
                            )}

                            {selectedInput === 'youtube' && (
                                <>
                                    <div className='bg-blue-700/30 border-2 border-white/20 rounded-xl p-3 space-y-4'>
                                        <div>
                                            <label className='text-white/80 text-xs md:text-sm block mb-2'>Past URL for Youtube Video</label>
                                            <input
                                                type='text'
                                                value={youtubeUrl}
                                                onChange={(e) => setYoutubeUrl(e.target.value)}
                                                className='w-full px-3 py-2 bg-blue-600/20 text-white border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs md:text-sm'
                                                placeholder='https://www.youtube.com/watch?v=JiJuE...'
                                            />
                                        </div>
                                        <div>
                                            <label className='text-white/80 text-xs md:text-sm block mb-2'>Choose Model Size</label>
                                            <div className='space-y-2'>
                                                <label className='flex items-center text-white/80 text-xs md:text-sm'>
                                                    <input
                                                        type='radio'
                                                        name='model'
                                                        value='base'
                                                        checked={selectedModel === 'base'}
                                                        onChange={() => setSelectedModel('base')}
                                                        className='mr-2 text-orange-500 focus:ring-orange-500'
                                                    />
                                                    base
                                                </label>
                                                <label className='flex items-center text-white/80 text-xs md:text-sm'>
                                                    <input
                                                        type='radio'
                                                        name='model'
                                                        value='kocc'
                                                        checked={selectedModel === 'kocc'}
                                                        onChange={() => setSelectedModel('kocc')}
                                                        className='mr-2 text-orange-500 focus:ring-orange-500'
                                                    />
                                                    kocc
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col sm:flex-row justify-between gap-2'>
                                        <button className='text-white/80 text-xs md:text-sm hover:text-white transition-colors px-4 py-2 rounded-full border border-white/20 flex items-center justify-center space-x-2'>
                                            <MicrophoneIcon className="w-4 h-4" />
                                            <span>Choose Segment</span>
                                        </button>
                                        <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium text-xs md:text-sm flex items-center justify-center space-x-2'>
                                            <DocumentTextIcon className="w-4 h-4" />
                                            <span>Generate Transcript</span>
                                        </button>
                                    </div>
                                </>
                            )}

                            {selectedInput === 'record' && (
                                <>
                                    <div className='bg-blue-700/30 border-2 border-white/20 rounded-xl p-3 md:p-4 text-center space-y-3'>
                                        <div className='text-white/80 text-xs md:text-sm'>Click to start recording</div>
                                        <div className='text-white/60 text-xs'>Max recording time: 10 minutes</div>
                                    </div>
                                    <button className='w-full bg-red-500 hover:bg-red-600 text-white px-4 md:px-6 py-2 rounded-full font-medium text-xs md:text-sm flex items-center justify-center space-x-2'>
                                        <MicrophoneIcon className="w-4 h-4" />
                                        <span>Start Recording</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Footer - Only show when not collapsed */}
                {!isCollapsed && (
                    <div className='px-3 md:px-4 py-3 md:py-4 flex-shrink-0'>
                        <p className='text-white text-xs text-center'>
                            @Teranga AI - All Rights Reserved 2025
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};