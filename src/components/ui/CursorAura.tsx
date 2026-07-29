import { useEffect, useRef } from 'react';

/**
 * Decorative pointer glow. rAF plus a transform write, so zero React
 * re-renders and no animation library.
 */
export default function CursorAura() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        // Skip on touch devices — there is no cursor to follow.
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let x = targetX;
        let y = targetY;
        let frame = 0;

        const tick = () => {
            // Exponential follow, tuned to feel like the previous spring
            // (damping 40 / stiffness 150) without shipping the solver.
            x += (targetX - x) * 0.12;
            y += (targetY - y) * 0.12;
            element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

            // Park the loop once settled so an idle tab costs nothing.
            if (Math.abs(targetX - x) < 0.5 && Math.abs(targetY - y) < 0.5) {
                frame = 0;
                return;
            }
            frame = requestAnimationFrame(tick);
        };

        const onMove = (event: MouseEvent) => {
            targetX = event.clientX;
            targetY = event.clientY;
            if (!frame) frame = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        frame = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(frame);
        };
    }, []);

    return <div ref={ref} className="cursor-aura hidden lg:block print:hidden" aria-hidden="true" />;
}
