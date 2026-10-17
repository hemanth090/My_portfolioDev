import { skillGroups } from '../../data/content'
import { Chip, ChipList } from '../ui/Chip'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="Skills" index="04">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-4 rounded-lg bg-surface p-5 shadow-card transition-shadow duration-300 ease-soft hover:shadow-lift"
          >
            <h3 className="text-sm font-bold">{group.title}</h3>
            <ChipList>
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipList>
          </div>
        ))}
      </div>
    </Section>
  )
}
