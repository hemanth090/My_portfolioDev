import { memo } from 'react';

/**
 * Optimized Pixel Logo - Uses CSS-only animations for better performance
 */
const PixelLogo = memo(() => {
    // Pixel patterns for N, H, K (5x3 grids)
    const N = [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1];
    const H = [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1];
    const K = [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1];

    const renderLetter = (pattern: number[]) => (
        <div className="grid grid-cols-3 gap-[2px]">
            {pattern.map((pixel, i) => (
                <div
                    key={i}
                    className={`w-[3px] h-[3px] ${pixel ? 'bg-[var(--color-text-primary)] group-hover:bg-orange-500' : 'bg-transparent'
                        }`}
                />
            ))}
        </div>
    );

    return (
        <div className="group flex items-center gap-1 cursor-pointer p-1" aria-label="NH.K Logo">
            {renderLetter(N)}
            {renderLetter(H)}
            {/* Dot */}
            <div className="w-[3px] h-[3px] bg-[var(--color-text-primary)] group-hover:bg-orange-400 self-end mb-[2px]" />
            {renderLetter(K)}
        </div>
    );
});

PixelLogo.displayName = 'PixelLogo';

export default PixelLogo;
