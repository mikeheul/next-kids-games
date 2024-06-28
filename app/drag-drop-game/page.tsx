"use client"

import { SquirrelIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-700', 'bg-yellow-500', 'bg-purple-500'];

const randomPosition = () => ({
    left: Math.random() * (window.innerWidth - 100),
    top: Math.random() * (window.innerHeight - 100),
});

export default function DragDropGame() {
    const [score, setScore] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const [dropZonePosition, setDropZonePosition] = useState({ left: 0, top: 0 });

    useEffect(() => {
        setDropZonePosition(randomPosition());
    }, []);

    const handleDragStart = () => {
        setDragging(true);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setScore(score + 1);
        setCurrentColor(colors[(score + 1) % colors.length]);
        setDragging(false);
        setDropZonePosition(randomPosition()); // Changer la position de la zone de dépôt après chaque drop réussi
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    // Vérifiez si window est défini pour éviter les erreurs lors du rendu côté serveur
    const windowPosition = typeof window !== 'undefined' ? { left: dropZonePosition.left, top: dropZonePosition.top } : {};

    return (
        <div className="flex flex-col items-center justify-center pt-10 text-center">
            <h1 className="text-2xl mb-4">Score : {score}</h1>
            <p className="mb-4">Glisse et dépose l'écureuil dans la maison pour augmenter ton score. La couleur de la boîte changera à chaque tentative réussie.</p>
            <div
                className={`flex justify-center items-center w-24 h-24 ${currentColor} cursor-grab mt-10`}
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SquirrelIcon className='w-[70px] h-[70px]' />
            </div>
            <div
                style={windowPosition}
                className={`w-48 h-48 mt-4 border-2 border-dashed flex items-center justify-center ${
                    dragging ? 'border-green-500' : 'border-gray-500'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {dragging ? 'Relâche ici' : 'Maison'}
            </div>
        </div>
    );
}