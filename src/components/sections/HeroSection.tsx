import { Github, Linkedin } from 'lucide-react';
import { DATA } from '../../data';
import { HERO_ID, CONTACT_ID } from '../../config/sections';
import { goToSection } from '../../lib/scroll';
import Section from '../layout/Section';
import Button from '../ui/Button';

/**
 * Identity block.
 *
 * The role sits BELOW the name as a subtitle. It was previously an uppercase
 * tracked eyebrow above the h1 — a kicker, which the craft floor bans
 * outright; the same words read as a subtitle carry the information without
 * the label affectation.
 */
export default function HeroSection() {
    return (
        <Section id={HERO_ID} labelledBy="hero-heading" className="pt-2">
            <div className="flex flex-col xl:flex-row items-center gap-12 lg:gap-20">
                <div className="order-2 xl:order-1 flex-1 animate-fade-in-up text-balance">
                    <h1 id="hero-heading" className="type-display text-fg mb-4">
                        {DATA.name}
                    </h1>

                    <p className="text-xl sm:text-2xl text-fg-secondary font-medium mb-6">
                        {DATA.title}
                    </p>

                    <p className="text-lg text-fg-secondary max-w-measure mb-6 leading-[1.6]">
                        {DATA.headline}
                    </p>

                    <p className="text-fg-muted max-w-measure mb-10 border-l-2 border-line pl-5">
                        {DATA.bio}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Button
                            as="a"
                            href={`#${CONTACT_ID}`}
                            onClick={(event) => {
                                event.preventDefault();
                                goToSection(CONTACT_ID);
                            }}
                        >
                            Get in touch
                        </Button>

                        <Button as="a" variant="icon" href={DATA.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                            <Github className="w-5 h-5" aria-hidden="true" />
                        </Button>
                        <Button as="a" variant="icon" href={DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                            <Linkedin className="w-5 h-5" aria-hidden="true" />
                        </Button>
                    </div>
                </div>

                <div className="order-1 xl:order-2 w-full max-w-[380px] shrink-0">
                    <div className="relative aspect-[4/5] rounded-card overflow-hidden group bg-bg-muted border border-line">
                        <img
                            src={DATA.profileImage}
                            alt={`Portrait of ${DATA.name}`}
                            loading="eager"
                            fetchPriority="high"
                            width={500}
                            height={667}
                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-brand"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
