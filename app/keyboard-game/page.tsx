"use client";

import React, { useState, useEffect } from 'react';

export default function KeyboardGame() {
    const [score, setScore] = useState(0);
    const [targetKey, setTargetKey] = useState('');

    useEffect(() => {
        const keys = 'abcdefghijklmnopqrstuvwxyz';
        setTargetKey(keys[Math.floor(Math.random() * keys.length)]);
    }, []);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === targetKey) {
                setScore(score + 1);
                const keys = 'abcdefghijklmnopqrstuvwxyz';
                setTargetKey(keys[Math.floor(Math.random() * keys.length)]);
            }
        };

        if (typeof window !== 'undefined') { // Vérifie si window est défini avant d'ajouter des écouteurs d'événements
            window.addEventListener('keydown', handleKeyPress);
        }
        
        return () => {
            if (typeof window !== 'undefined') { // Retire l'écouteur d'événements uniquement si window est défini
                window.removeEventListener('keydown', handleKeyPress);
            }
        };
    }, [targetKey, score]);

    return (
        <div className="flex flex-col items-center justify-center pt-10 text-center">
            <h1 className="text-2xl mb-4">Score : {score}</h1>
            <p className="mb-4">Appuie sur la touche affichée pour augmenter ton score.</p>
            <h2 className="text-xl mt-10">Appuie sur la touche : <span className='py-3 px-4 bg-slate-700'>{targetKey.toUpperCase()}</span></h2>
        </div>
    );
}