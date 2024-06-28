"use client";

import { BoneIcon } from 'lucide-react';
import React, { useState } from 'react';

export default function DoubleClickGame() {
    const [score, setScore] = useState(0);

    const handleDoubleClick = () => {
        setScore(score + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center pt-10 text-center">
            <h1 className="text-2xl mb-4">Score : {score}</h1>
            <p className="mb-4">Double-clique sur l'os pour augmenter ton score.</p>
            <div
                className="flex justify-center items-center w-24 h-24 bg-blue-500 cursor-pointer hover:bg-blue-700 mt-10"
                onDoubleClick={handleDoubleClick}
            >
                <BoneIcon className='w-[70px] h-[70px]' />
            </div>
        </div>
    );
}
