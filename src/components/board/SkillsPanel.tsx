import { DATA } from '../../data';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import Meta from '../ui/Meta';

/** Keyword bucket, scannable in seconds: one labelled row per group. */
export default function SkillsPanel() {
    return (
        <Card as="section" aria-labelledby="skills-heading" className="min-h-0 lg:overflow-y-auto">
            <Meta as="h2" id="skills-heading" className="mb-2">
                Skills
            </Meta>

            <dl className="space-y-2">
                {DATA.skills.map((group) => (
                    <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1">
                        <dt className="w-32 shrink-0 text-[11px] font-semibold text-fg-muted leading-[1.6]">
                            {group.category}
                        </dt>
                        <dd className="flex flex-wrap gap-1 m-0">
                            {group.items.map((item) => (
                                <Chip key={item}>{item}</Chip>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </Card>
    );
}
