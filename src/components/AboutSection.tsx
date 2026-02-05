import { memo } from 'react';
import { User } from 'lucide-react';
import { DATA } from '../data';
import SectionTitle from './SectionTitle';

const AboutSection = memo(() => (
    <section id="about-section" className="mb-24 sm:mb-32" aria-label="About Me">
        <SectionTitle icon={User}>About Me</SectionTitle>
        <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-3xl text-[var(--color-text-secondary)] leading-relaxed">
            <p>{DATA.about}</p>
        </div>
    </section>
));

export default AboutSection;
