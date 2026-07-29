import { useCallback, useRef, useState } from 'react';

/**
 * One-shot visibility flag. Mirrors framer-motion's viewport={{ once: true }}.
 *
 * Callback ref rather than an object ref so it is assignable to Ref<HTMLDivElement>,
 * Ref<HTMLElement>, etc. under strictFunctionTypes.
 */
export function useInView(rootMargin = '0px 0px -10% 0px') {
    const [inView, setInView] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const ref = useCallback((node: HTMLElement | null) => {
        observerRef.current?.disconnect();
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return;
                setInView(true);
                observer.disconnect();
            },
            { rootMargin, threshold: 0 },
        );
        observer.observe(node);
        observerRef.current = observer;
    }, [rootMargin]);

    return { ref, inView };
}
