import React, { useState } from 'react';
import { ChevronLeftIcon, MicrophoneIcon, LanguageIcon, DocumentTextIcon, GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { BiSolidDownArrow } from "react-icons/bi";

export const Sidebar = () => {
    const [selectedInput, setSelectedInput] = useState('audio');
    const [isOpen, setIsOpen] = useState(false);
    const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com/watch?v=JiJuE...');
    const [selectedModel, setSelectedModel] = useState('kocc');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const sidebar_links = [
        { name: "Transcription", icon: <MicrophoneIcon className="w-5 h-5" />, path: "/transcription", active: true },
        { name: "Translation", icon: <LanguageIcon className="w-5 h-5" />, path: "/translation", active: false },
        { name: "Text Summary", icon: <DocumentTextIcon className="w-5 h-5" />, path: "/text-summary", active: false },
    ];

    const inputOptions = [
        { name: "Upload Audio File", icon: <MicrophoneIcon className="w-5 h-5" />, value: "audio", active: true },
        { name: "Youtube Video Url", icon: <GlobeAltIcon className="w-5 h-5" />, value: "youtube", active: false },
        { name: "Record Audio", icon: <MicrophoneIcon className="w-5 h-5" />, value: "record", active: false },
    ];

    return (
        <div className='w-90 h-screen bg-gradient-to-b from-[#5fc3c7] to-[#385bc3] flex flex-col relative overflow-y-auto'>
            {/* Header */}
            <div className='p-4 flex items-center justify-between border-white/20'>
                <h1 className='text-[24px] font-bold text-white'>Kocc</h1>
                <button className='text-white/80 hover:text-white transition-colors font-bold' onClick={toggleDropdown}>
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation Links */}
            <div className='px-6 py-6 space-y-4'>
                {sidebar_links.map((link, index) => (
                    <button
                        key={index}
                        className={`w-full h-12 flex items-center justify-between px-4 py-2 rounded-full text-sm text-white transition-all duration-200 ${link.active
                            ? 'bg-blue-600/40 border border-white/20'
                            : 'bg-gradient-to-r from-[#4e95c5] to-[#385dc3] hover:bg-white/20'
                            }`}
                    >
                        <div className='flex items-center font-semibold space-x-3'>
                            <span>{link.name}</span>
                            {link.icon}
                        </div>
                    </button>
                ))}
            </div>

            {/* Input Mode Section */}
            <div className='px-6 py-6'>
                <h3 className='text-white/80 font-semibold mb-4 text-xs'>Input Mode</h3>
                <div className='space-y-4'>
                    {inputOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedInput(option.value)}
                            className={`w-full h-12 flex items-center justify-between px-4 py-2 rounded-full text-sm text-white transition-all duration-200 ${selectedInput === option.value && option.active
                                ? 'bg-blue-600/40 border border-white/20'
                                : 'bg-gradient-to-r from-[#4e95c5] to-[#385dc3] hover:bg-blue-600/40'
                                }`}
                        >
                            <div className='flex items-center space-x-5'>
                                <span className='font-medium'>{option.name}</span>
                                {option.icon}
                            </div>
                            <BiSolidDownArrow className="w-4 h-4" />
                        </button>
                    ))}
                    {selectedInput === 'audio' && (
                        <div className='bg-blue-700/30 border-2 border-dashed border-white/20 rounded-xl p-4 text-center space-y-0'>
                            <div className='text-white/80 text-xs'>Drag and drop file here</div>
                            <div className='text-white/60 text-xs'>Limit 200MB per file - WAV,MP3,M4A</div>
                            <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium text-sm'>
                                Browse files
                            </button>
                        </div>
                    )}
                    {selectedInput === 'youtube' && (
                        <div className='bg-blue-700/30 border-2 border-white/20 rounded-xl p-4 space-y-0'>
                            <div>
                                <label className='text-white/80 text-sm block mb-2'>Paste URL for Youtube Video</label>
                                <input
                                    type='text'
                                    value={youtubeUrl}
                                    onChange={(e) => setYoutubeUrl(e.target.value)}
                                    className='w-full px-3 py-2 bg-blue-600/20 text-white border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500'
                                    placeholder='https://www.youtube.com/watch?v=JiJuE...'
                                />
                            </div>
                            <div>
                                <label className='text-white/80 text-sm block mb-2'>Choose Model Size</label>
                                <div className='space-y-2'>
                                    <label className='flex items-center text-white/80 text-sm'>
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
                                    <label className='flex items-center text-white/80 text-sm'>
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
                            <div className='flex justify-between'>
                                <button className='text-white/80 text-sm hover:text-white transition-colors'>Choose Segment</button>
                                <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium text-sm'>
                                    Generate Transcript
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className='mt-auto px-4 py-4'>
                <p className='text-white/60 text-xs text-center'>
                    @Teranga AI - All Rights Reserved 2024
                </p>
            </div>
        </div>
    );
};