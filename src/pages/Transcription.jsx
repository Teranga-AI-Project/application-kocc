/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { HiMicrophone, HiPlay, HiPause, HiSpeakerWave, HiEllipsisVertical } from 'react-icons/hi2';
import { MdDownload } from 'react-icons/md';

export const Transcription = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [duration] = useState('7:51');
    const [detectedLanguage] = useState('Russe');
    const [transcription] = useState('Здравствуйте всем, добро пожаловать на эту встречу, которую я организую каждый год, спасибо за ваше участие.');

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <section className='flex-1 md:p-8 min-h-screen bg-white'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h1 className='text-3xl md:text-4xl font-bold text-black mb-8'>
                        AI Audio Transcriber
                    </h1>

                    {/* Audio Visualization */}
                    <div className='flex items-center justify-center mb-12'>
                        <div className='relative flex items-center'>
                            {/* Left Audio Waves */}
                            <div className='flex items-center space-x-1 mr-4'>
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`bg-gradient-to-t from-green-400 to-blue-500 rounded-full transition-all duration-300 ${i % 2 === 0 ? 'w-1 h-8' : 'w-1 h-12'
                                            } ${i === 3 || i === 4 ? 'h-16' : ''}`}
                                        style={{
                                            animationDelay: `${i * 0.1}s`
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Central Microphone */}
                            <div className='relative'>
                                <div className='w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg'>
                                    <HiMicrophone className='w-10 h-10 text-white' />
                                </div>
                                {/* Pulse animation */}
                                <div className='absolute inset-0 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-ping opacity-20'></div>
                            </div>

                            {/* Right Audio Waves */}
                            <div className='flex items-center space-x-1 ml-4'>
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`bg-gradient-to-t from-green-400 to-blue-500 rounded-full transition-all duration-300 ${i % 2 === 0 ? 'w-1 h-8' : 'w-1 h-12'
                                            } ${i === 3 || i === 4 ? 'h-16' : ''}`}
                                        style={{
                                            animationDelay: `${(i + 8) * 0.1}s`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Output Section */}
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold text-black mb-4'>Output</h2>

                        {/* Detected Language */}
                        <div className='mb-6'>
                            <div className='flex items-center space-x-2 mb-2'>
                                <span className='text-gray-700 font-medium'>Detected Language</span>
                                <div className='w-3 h-3 bg-purple-500 rounded-full'></div>
                            </div>
                            <span className='text-purple-600 font-medium'>{detectedLanguage}</span>
                        </div>

                        {/* Transcription */}
                        <div>
                            <div className='flex items-center space-x-2 mb-3'>
                                <span className='text-gray-700 font-medium'>Transcription</span>
                                <div className='w-6 h-6 bg-gray-200 rounded flex items-center justify-center'>
                                    <span className='text-gray-500 text-xs'>📄</span>
                                </div>
                            </div>
                            <div className='bg-gray-50 rounded-lg p-4 min-h-[120px]'>
                                <p className='text-gray-700 leading-relaxed'>{transcription}</p>
                            </div>
                        </div>
                    </div>

                    {/* Original Audio Section */}
                    <div className='space-y-6'>
                        <h2 className='text-2xl font-bold text-black mb-4'>Original Audio</h2>

                        {/* Audio Player */}
                        <div className='bg-gray-100 rounded-lg p-4'>
                            <div className='flex items-center space-x-4 mb-4'>
                                <button
                                    onClick={togglePlay}
                                    className='w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors'
                                >
                                    {isPlaying ? (
                                        <HiPause className='w-5 h-5 text-gray-700' />
                                    ) : (
                                        <HiPlay className='w-5 h-5 text-gray-700 ml-0.5' />
                                    )}
                                </button>

                                <div className='flex-1'>
                                    <div className='text-sm text-gray-600 mb-1'>{currentTime}</div>
                                    <div className='w-full bg-gray-300 rounded-full h-1'>
                                        <div className='bg-gray-600 h-1 rounded-full w-1/4'></div>
                                    </div>
                                </div>

                                <div className='flex items-center space-x-2'>
                                    <HiSpeakerWave className='w-5 h-5 text-gray-600' />
                                    <HiEllipsisVertical className='w-5 h-5 text-gray-600' />
                                </div>
                            </div>
                        </div>

                        {/* Download Button */}
                        <div className='pt-4'>
                            <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-all duration-200 shadow-sm'>
                                <MdDownload className='w-5 h-5' />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-wave {
                    0%, 100% { transform: scaleY(1); }
                    50% { transform: scaleY(1.5); }
                }
                .animate-wave {
                    animation: pulse-wave 1.5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};