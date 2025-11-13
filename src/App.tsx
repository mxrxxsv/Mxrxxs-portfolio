import { useState, useEffect } from 'react'
import IntroCard from './components/IntroCard'
import AboutCard from './components/AboutCard'
import ProjectCard from './components/ProjectCard'
// ResourceCard removed — replaced by SocialLinks in the right rail
// SubscribeCard removed per request
import StackCard from './components/StackCard'
import ContactCard from './components/ContactCard'
import SocialLinks from './components/SocialLinks'
import './index.css'
import profile from './assets/profile.jpg'
import profile2 from './assets/profile2.jpg'

function App() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch (e) {
      return false
    }
  })

  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', dark)
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch (e) {
      // ignore
    }
  }, [dark])

  const toggleDark = () => setDark((d) => !d)

  return (
    <div className="min-h-screen py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="canvas">
          <header className="site-header">
            <h1 className="brand">Mxrxxs</h1>
            <div>
                <button
                  onClick={toggleDark}
                  className="btn btn-ghost theme-toggle"
                  aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
                  title={dark ? 'Switch to light' : 'Switch to dark'}
                >
                  {dark ? (
                    /* Sun icon (indicates light mode) */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </svg>
                  ) : (
                    /* Moon icon (indicates dark mode) */
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                  )}
                </button>
            </div>
          </header>

          <main className="bento-grid">
            <section className="card card--span-2">
              <IntroCard />
            </section>

            <section className="card card--span-2 card--large">
              <img
                src={dark ? profile : profile2}
                alt={dark ? 'profile (dark mode)' : 'profile (light mode)'}
                className="project-img profile-square"
              />
            </section>

            <section className="card card--span-2">
              <AboutCard />
            </section>

            <section className="card card--span-2 card--large">
              <ProjectCard title="Project One" />
            </section>

            <section className="card card--span-2 card--large">
              <ProjectCard title="Project Two" />
            </section>

            <section className="card card--span-2">
              <SocialLinks />
            </section>

            {/* Subscribe card removed */}

            <section className="card">
              <StackCard />
            </section>

            <section className="card">
              <ContactCard />
            </section>

            {/* Social links moved to the top-right rail; removed duplicate here */}
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
