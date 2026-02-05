import { memo } from 'react';

/**
 * Optimized Pixel Logo - Uses CSS-only animations for better performance
 */
const PixelLogo = memo(() => {
    // Pixel patterns for N, H, K (5x3 grids)
    const N = [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1];
    const H = [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1];
    const K = [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1];

    const renderLetter = (pattern: number[], delay: number) => (
        <div className="grid grid-cols-3 gap-[2px]">
            {pattern.map((pixel, i) => (
                <div
                    key={i}
                    className={`w-[3px] h-[3px] transition-colors duration-200 ${pixel ? 'bg-[var(--color-text-primary)] group-hover:bg-orange-500' : 'bg-transparent'
                        }`}
                    style={{ transitionDelay: `${delay + i * 10}ms` }}
                />
            ))}
        </div>
    );

    return (
        <div className="group flex items-center gap-1 cursor-pointer p-1" aria-label="NH.K Logo">
            {renderLetter(N, 0)}
            {renderLetter(H, 50)}
            {/* Dot */}
            <div className="w-[3px] h-[3px] bg-[var(--color-text-primary)] group-hover:bg-orange-400 transition-colors duration-200 self-end mb-[2px]" />
            {renderLetter(K, 100)}
        </div>
    );
});

PixelLogo.displayName = 'PixelLogo';

export default PixelLogo;
