// components/Typewriter.tsx
import React, { useEffect, useState } from 'react';

const phrases = ["Selamat Datang!", "Sistem Data Siswa", "Sma Trensains Tebuireng"];

const Typewriter: React.FC = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentPhrase = phrases[index];
        if (charIndex < currentPhrase.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentPhrase[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 150);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setText('');
                setIndex((prev) => (prev + 1) % phrases.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, index]);

    return <h1 className="text-4xl font-bold text-green-600">{text}</h1>;
};

export default Typewriter;