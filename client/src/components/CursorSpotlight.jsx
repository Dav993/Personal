import { useEffect, useState } from 'react';

function CursorSpotlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 w-full h-full z-40"
            style={{
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(100, 255, 218, 0.06), transparent 80%)`,
                mixBlendMode: 'screen',
            }}
        />
    );
}

export default CursorSpotlight;
