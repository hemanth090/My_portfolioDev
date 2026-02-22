import { memo } from 'react';

const SectionTitle = memo(({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
    <div className="flex items-center gap-2 mb-8 group">
        <div className="p-2 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] group-hover:border-[var(--color-border-hover)]">
            <Icon className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight uppercase text-[var(--color-text-secondary)]">{children}</h2>
    </div>
));
SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
