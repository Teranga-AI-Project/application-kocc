import React, { useState } from 'react';
import { HiLanguage, HiArrowsRightLeft } from 'react-icons/hi2';
import translate_icon from "../assets/translate_icon.png";

const Translation = () => {
    const [sourceLanguage, setSourceLanguage] = useState('English');
    const [targetLanguage, setTargetLanguage] = useState('Russe');
    const [sourceText, setSourceText] = useState('Welcome to this adventure where every idea comes to life, and each project team competes to win the top prize in a 48-hour challenge. The goal is to develop a detailed concept for a system that transcribes and summarizes public speeches (such as reports, interviews, conferences) in English and/or French.');
    const [translatedText, setTranslatedText] = useState('Добро пожаловать в это приключение, где каждая идея оживает, и каждая команда проекта соревнуется за главный приз в течение 48 часов. Цель состоит в том, чтобы разработать детализированную концепцию системы, которая транскрибирует и резюмирует публичные выступления (например, отчёты, интервью, конференции) на английском и/или французском языках.');

    const languages = [
        'English',
        'French',
        'Spanish',
        'German',
        'Italian',
        'Portuguese',
        'Russian',
        'Russe',
        'Chinese',
        'Japanese',
        'Korean',
        'Arabic'
    ];

    const handleTranslate = () => {
        // Simulation de traduction - dans un vrai projet, vous appelleriez votre API ici
        console.log('Translating from', sourceLanguage, 'to', targetLanguage);
    };

    const swapLanguages = () => {
        setSourceLanguage(targetLanguage);
        setTargetLanguage(sourceLanguage);
        setSourceText(translatedText);
        setTranslatedText(sourceText);
    };

    return (
        <section className='flex-1 p-4 md:p-8 min-h-screen'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <h1 className='text-3xl md:text-4xl font-bold text-blue-500 mb-6'>
                        Kocc Translate
                    </h1>

                    {/* Icon and Description */}
                    <div className='flex items-start justify-center mb-8'>
                        <div className='flex items-center space-x-4 max-w-2xl'>
                            <div className='flex-shrink-0'>
                                <div className='w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center relative'>
                                    <img src={translate_icon} alt="" />
                                </div>
                            </div>
                            <div className='text-left'>
                                <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                                    Explore the simplicity of translating phrases between two
                                    languages with Kocc. Enter your text to receive accurate
                                    translations and enhance your communication with ease.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Translation Interface */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
                    {/* Source Language Section */}
                    <div className='bg-gray-100 rounded-2xl p-6'>
                        {/* Language Selector */}
                        <div className='mb-4'>
                            <div className='relative'>
                                <select
                                    value={sourceLanguage}
                                    onChange={(e) => setSourceLanguage(e.target.value)}
                                    className='w-full bg-transparent border-none outline-none text-gray-700 font-medium text-base py-2 pr-8 appearance-none cursor-pointer'
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                                <div className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Text Input */}
                        <div className='mb-4'>
                            <div className='mb-2'>
                                <span className='text-gray-500 text-sm'>Enter your text here</span>
                            </div>
                            <textarea
                                value={sourceText}
                                onChange={(e) => setSourceText(e.target.value)}
                                className='w-full h-48 bg-transparent border-none outline-none resize-none text-gray-700 text-sm leading-relaxed placeholder-gray-400'
                                placeholder='Enter your text here'
                            />
                        </div>

                        {/* Character Count */}
                        <div className='text-right'>
                            <span className='text-gray-400 text-xs'>{sourceText.length}/500</span>
                        </div>
                    </div>

                    {/* Target Language Section */}
                    <div className='bg-gray-100 rounded-2xl p-6'>
                        {/* Language Selector */}
                        <div className='mb-4'>
                            <div className='relative'>
                                <select
                                    value={targetLanguage}
                                    onChange={(e) => setTargetLanguage(e.target.value)}
                                    className='w-full bg-transparent border-none outline-none text-gray-700 font-medium text-base py-2 pr-8 appearance-none cursor-pointer'
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                                <div className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Translation Output */}
                        <div className='mb-4'>
                            <div className='mb-2'>
                                <span className='text-gray-500 text-sm'>The translation will appear here</span>
                            </div>
                            <div className='w-full h-48 bg-transparent border-none outline-none resize-none text-gray-700 text-sm leading-relaxed overflow-y-auto'>
                                {translatedText}
                            </div>
                        </div>

                        {/* Character Count */}
                        <div className='text-right'>
                            <span className='text-gray-400 text-xs'>{translatedText.length}/500</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className='flex items-center justify-center space-x-4'>
                    {/* Swap Languages Button */}
                    <button
                        onClick={swapLanguages}
                        className='p-3 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full transition-all duration-200'
                        title='Swap languages'
                    >
                        <HiArrowsRightLeft className='w-5 h-5' />
                    </button>

                    {/* Translate Button */}
                    <button
                        onClick={handleTranslate}
                        className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium text-sm flex items-center space-x-2 transition-all duration-200 shadow-sm'
                    >
                        <HiLanguage className='w-5 h-5' />
                        <span>Translate</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Translation