import { User } from 'lucide-react';
import { DATA } from '../../data';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';

/**
 * Prose only. The previous `prose prose-sm dark:prose-invert` classes were
 * no-ops — @tailwindcss/typography is not installed — so the measure is set
 * explicitly instead.
 */
export default function AboutSection() {
    return (
        <Section id="about" labelledBy="about-heading">
            <SectionTitle icon={User} id="about-heading">
                About
            </SectionTitle>

            <p className="max-w-measure text-fg-secondary leading-[1.7]">
                {DATA.about}
            </p>
        </Section>
    );
}
