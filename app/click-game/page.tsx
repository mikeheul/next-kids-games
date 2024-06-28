"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BirdIcon } from 'lucide-react';

export default function ClickGame() {
    const [score, setScore] = useState(0);

    const handleClick = () => {
        setScore(score + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center pt-10 text-center">
            <h1 className="text-2xl mb-4">Score : {score}</h1>
            <p className="mb-4">Clique sur l&apos;oiseau pour augmenter ton score.</p>
            <motion.div
                className="flex justify-center items-center w-24 h-36 bg-red-500 rounded-full cursor-pointer hover:bg-red-700 mt-10"
                onClick={handleClick}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <BirdIcon className='w-[70px] h-[70px]' />
            </motion.div>
        </div>
    );
}

