import { describe, expect, it } from 'vitest'
import {
  EMAIL,
  certifications,
  experience,
  nav,
  projects,
  sectionKeywords,
  skillGroups,
} from '../data/content'

describe('content model', () => {
  it('exposes a well-formed email', () => {
    expect(EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  it('has unique nav ids that are all covered by section keywords', () => {
    const ids = nav.map((item) => item.id)
    expect(new Set(ids).size).toBe(ids.length)
    ids.forEach((id) => expect(sectionKeywords).toHaveProperty(id))
  })

  it('gives every project a real link, an image-free description and a stack', () => {
    expect(projects.length).toBeGreaterThanOrEqual(3)
    for (const project of projects) {
      expect(project.href.startsWith('https://')).toBe(true)
      expect(project.description.length).toBeGreaterThan(40)
      expect(project.stack.length).toBeGreaterThan(0)
    }
  })

  it('keeps experience bullets non-empty and skills grouped', () => {
    expect(experience[0]?.bullets.length).toBeGreaterThan(0)
    expect(skillGroups.length).toBeGreaterThan(0)
    expect(certifications.length).toBeGreaterThan(0)
  })
})
