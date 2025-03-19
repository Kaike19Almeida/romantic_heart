"use client";
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
    const words = [
        "Amor", "Carinho", "Afeto", "Paixão", "Felicidade", "Sorriso", "Abraço", "Cuidado",
        "Esperança", "Gentileza", "Gratidão", "Lealdade", "Compaixão", "Ternura", "Beleza", "Encanto",
        "Bondade", "Calor", "Harmonia", "Doçura", "Suavidade", "Amizade", "Respeito", "Confiança",
        "Empatia", "Paz", "Sinceridade", "Alegria", "Brilho", "Magia", "Encanto", "Força", "Serenidade",
        "Delicadeza", "Pureza", "Sonho", "Inspiração", "Admiração", "Saudade", "Proteção", "Euforia"
    ];
    
    const [wordCount, setWordCount] = useState(0);
    const [wordElements, setWordElements] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (wordCount >= 100) {
                setWordElements([]);
                setWordCount(0);
            } else {
                setWordElements(prevWords => [
                    ...prevWords,
                    {
                        id: wordCount,
                        text: words[Math.floor(Math.random() * words.length)],
                        left: Math.random() * window.innerWidth + "px",
                        top: Math.random() * window.innerHeight + "px"
                    }
                ]);
                setWordCount(prev => prev + 1);
            }
        }, 500);
        return () => clearInterval(interval);
    }, [wordCount]);

    return (
        <div className="container">
            <div className="heart"></div>
            {wordElements.map(word => (
                <div key={word.id} className="word" style={{ left: word.left, top: word.top }}>
                    {word.text}
                </div>
            ))}
        </div>
    );
}