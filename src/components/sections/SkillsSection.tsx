import { Terminal } from 'lucide-react';
import { DATA } from '../../data';
import Section from '../layout/Section';
import SectionTitle from '../ui/SectionTitle';
import Chip from '../ui/Chip';
import Reveal from '../ui/Reveal';

/**
 * Two columns, not four: there are five groups now, and the AI & Machine
 * Learning group holds seven long labels that a quarter-width column wraps
 * into an unreadable stack.
 */
export default function SkillsSection() {
    return (
        <Section id="skills" labelledBy="skills-heading">
            <SectionTitle icon={Terminal} id="skills-heading">
                Skills
            </SectionTitle>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {DATA.skills.map((group, index) => (
                    <Reveal key={group.category} index={index}>
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-fg border-b border-line pb-2 mb-4">
                            {group.category}
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li key={item}>
                                    <Chip>{item}</Chip>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
