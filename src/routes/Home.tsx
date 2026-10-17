import { Seo } from '../components/Seo'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { Education } from '../components/sections/Education'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { Work } from '../components/sections/Work'

const DESCRIPTION =
  'Naveen Hemanth Kokkonda, an AI engineer who builds retrieval systems, agents, and the interfaces that make them feel simple.'

export function Home() {
  return (
    <>
      <Seo title="Naveen Hemanth Kokkonda · AI Engineer" description={DESCRIPTION} path="/" type="profile" />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}
