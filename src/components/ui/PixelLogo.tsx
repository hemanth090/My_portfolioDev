import { memo } from 'react';

/** CSS-grid "NH.K" wordmark. No SVG, no images. */
const PixelLogo = memo(() => {
    // 5x3 pixel patterns for N, H, K
    const N = [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1];
    const H = [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1];
    const K = [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1];

    const renderLetter = (pattern: number[]) => (
        <div className="grid grid-cols-3 gap-[2px]">
            {pattern.map((pixel, i) => (
                <div
                    key={i}
                    className={`w-[3px] h-[3px] transition-colors duration-fast ${
                        pixel ? 'bg-fg group-hover:bg-orange-500' : 'bg-transparent'
                    }`}
                />
            ))}
        </div>
    );

    return (
        <div className="group flex items-center gap-1 p-1" aria-label="NH.K Logo">
            {renderLetter(N)}
            {renderLetter(H)}
            <div className="w-[3px] h-[3px] bg-fg group-hover:bg-orange-400 self-end mb-[2px] transition-colors duration-fast" />
            {renderLetter(K)}
        </div>
    );
});

PixelLogo.displayName = 'PixelLogo';

export default PixelLogo;
