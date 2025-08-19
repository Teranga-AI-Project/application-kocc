import React, { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave, HiOutlineHandThumbUp, HiOutlineHandThumbDown } from "react-icons/hi2";
import { VscCopy } from "react-icons/vsc";

import kocc from '../assets/kocc.png';

export const Summary = () => {
    const [message, setMessage] = useState('');
    const [discussion, setDiscussion] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleSend = () => {
        if (message.trim()) {
            setDiscussion(message);
            setMessage('');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setUploadedImage(null);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <section className='flex-1 p-4 md:p-8 min-h-screen relative'>
            <div className='px-4 py-6 md:px-8 md:py-8 pb-32 lg:pb-40 relative'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <h2 className='text-2xl md:text-4xl font-bold text-blue-500 mb-2'>
                        Kocc Summary
                    </h2>
                </div>

                {/* Input Text Card */}
                <div className='bg-gray-100 rounded-2xl p-6 mb-6 shadow-sm'>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed mb-4'>
                        Summarize this text for me, "First, I would like to thank the President of Brazil,
                        Dilma Rousseff, for the warm welcome she has given us for this conference. I
                        commend the work she is doing for Brazil, which is now a reference both in the
                        North and the South in terms of development.
                    </p>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed mb-4'>
                        However, I personally wanted to come here for this conference on behalf of
                        France. First, because this is a decisive issue for the planet, and France must be
                        one of the nations that lead by example.
                    </p>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                        I also wanted to make commitments for my country here while promoting, as much
                        as possible, discussion and negotiation in the final declaration."
                    </p>
                </div>

                {/* AI Response Card */}
                <div className='bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100'>
                    <div className='flex items-start space-x-4'>
                        <div className='w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden'>
                            <img src={kocc} alt="Kocc AI" className="w-8 h-8 object-contain" />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xs text-gray-500 mb-3 font-medium'>Here's a summary of the text:</p>
                            <p className='text-gray-800 text-sm md:text-base leading-relaxed mb-4'>
                                The speaker expresses gratitude to President Dilma Rousseff for her warm welcome and commends
                                her leadership in Brazil, which serves as a model for development globally. The speaker also
                                emphasizes the importance of the conference for the planet and France's role in leading by example.
                                Additionally, the speaker is committed to making pledges for France and promoting discussions and
                                negotiations for the final declaration.
                            </p>

                            {/* Action Buttons */}
                            <div className='flex items-center space-x-3'>
                                <button
                                    className='p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200'
                                    title="Listen to response"
                                >
                                    <HiOutlineSpeakerWave className="w-5 h-5" />
                                </button>
                                <button
                                    className='p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200'
                                    title="Copy to clipboard"
                                >
                                    <VscCopy className="w-5 h-5" />
                                </button>
                                <button
                                    className='p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200'
                                    title="Good response"
                                >
                                    <HiOutlineHandThumbUp className="w-5 h-5" />
                                </button>
                                <button
                                    className='p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200'
                                    title="Poor response"
                                >
                                    <HiOutlineHandThumbDown className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Message Display */}
                {discussion && (
                    <div className='bg-gray-100 rounded-2xl p-6 mb-6 shadow-sm'>
                        <p className='text-gray-600 text-sm mb-2 font-medium'>Your message:</p>
                        <p className='text-gray-800 text-sm md:text-base leading-relaxed'>{discussion}</p>
                    </div>
                )}

                {/* Input Field */}
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-2xl p-4">
                    <div className="bg-gray-100 rounded-2xl shadow-sm border border-gray-200">
                        {/* Image preview */}
                        {uploadedImage && (
                            <div className='p-4 border-b border-gray-100'>
                                <div className='relative inline-block'>
                                    <img
                                        src={uploadedImage}
                                        alt="Uploaded"
                                        className='max-w-32 max-h-32 rounded-lg object-cover'
                                    />
                                    <button
                                        onClick={removeImage}
                                        className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors'
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className='flex items-end p-4'>
                            {/* Upload Button */}
                            <div className='relative mr-3'>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                                    id="image-upload"
                                />
                                <button
                                    className='p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200'
                                    title="Upload image"
                                >
                                    <IoCloudUploadOutline size={20} />
                                </button>
                            </div>

                            {/* Text Input */}
                            <div className='flex-1 mr-3'>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Send a message to Kocc"
                                    className='w-full border-none outline-none resize-none text-gray-700 placeholder-gray-400 bg-transparent min-h-[24px] max-h-[120px] text-sm md:text-base'
                                    rows="1"
                                    style={{
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none'
                                    }}
                                    onInput={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                                    }}
                                />
                            </div>

                            {/* Send Button */}
                            <button
                                onClick={handleSend}
                                disabled={!message.trim()}
                                className={`p-3 rounded-full transition-all duration-200 flex items-center justify-center ${message.trim()
                                    ? 'bg-blue-500 text-white hover:bg-gray-700 shadow-sm'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                <FaArrowUp size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};