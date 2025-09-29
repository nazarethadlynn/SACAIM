<<<<<<< HEAD
// src/app/page.tsx
import Navigation from '@/components/Navigation'
=======
>>>>>>> 3cf549e27ab34f05064e660f46240743b6845aec
import HeroBanner from '@/components/sections/Hero/HeroBanner'
import AboutUniversity from '@/components/AboutUniversity'
import AboutConference from '@/components/AboutConference'
import ConferenceTopics from '@/components/ConferenceTopics'
import ConferenceChair from '@/components/ConferenceChair'
import KeynoteSpeakers from '@/components/KeynoteSpeakers'
import ImportantDates from '@/components/ImportantDates'
import Conveners from '@/components/Conveners'
import Contact from '@/components/Contact'

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="scrollable-content">
      <Navigation />
      
      <main className="page-content">
        <section id="home" className="hero-section">
          <HeroBanner />
        </section>

        <section id="about" className="hero-section">
          <AboutUniversity />
        </section>

        <section className="hero-section">
          <AboutConference />
        </section>

        <section className="hero-section">
          <ConferenceTopics />
        </section>

        <section className="hero-section">
          <ConferenceChair />
        </section>

        <section id="speakers" className="hero-section">
          <KeynoteSpeakers />
        </section>

        <section id="dates" className="hero-section">
          <ImportantDates />
        </section>

        <section className="hero-section">
          <Conveners />
        </section>

        <section id="contact" className="hero-section">
          <Contact />
        </section>
      </main>
    </div>
=======
    <>
      {/* Add padding-top to account for fixed navigation */}
      <div style={{ paddingTop: '88px' }}>
        <main>
          <section id="home" className="hero-section" style={{ minHeight: 'calc(100vh - 88px)' }}>
            <HeroBanner />
          </section>

          <section id="about" className="content-section">
            <AboutUniversity />
          </section>

          <section className="content-section">
            <AboutConference />
          </section>

          <section className="content-section">
            <ConferenceTopics />
          </section>

          <section className="content-section">
            <ConferenceChair />
          </section>

          <section id="speakers" className="content-section">
            <KeynoteSpeakers />
          </section>

          <section id="dates" className="content-section">
            <ImportantDates />
          </section>

          <section className="content-section">
            <Conveners />
          </section>

          <section id="contact" className="content-section">
            <Contact />
          </section>
        </main>
      </div>
    </>
>>>>>>> 3cf549e27ab34f05064e660f46240743b6845aec
  )
}
