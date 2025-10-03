import HeroBanner from '@/components/sections/Hero/HeroBanner'
import AboutUniversity from '@/components/AboutUniversity'
import AboutConference from '@/components/AboutConference'
import ConferenceChair from '@/components/ConferenceChair'
import KeynoteSpeakers from '@/components/KeynoteSpeakers'
import ImportantDates from '@/components/ImportantDates'
import Conveners from '@/components/Conveners'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="scrollable-content" style={{ margin: 0, padding: 0 }}>
      <main className="page-content" style={{ margin: 0, padding: 0 }}>
        <section id="home" className="hero-section" style={{ margin: 0, padding: 0 }}>
          <HeroBanner />
        </section>

        <section id="about" style={{ margin: 0, padding: 0, display: 'block' }}>
          <AboutUniversity />
        </section>

        <section style={{ margin: 0, padding: 0, display: 'block' }}>
          <AboutConference />
        </section>
        
        <section style={{ margin: 0, padding: 0, display: 'block' }}>
          <ConferenceChair />
        </section>

        <section id="keynote-speakers" style={{ margin: 0, padding: 0, display: 'block' }}>
          <KeynoteSpeakers />
        </section>

        <section id="important-dates" style={{ margin: 0, padding: 0, display: 'block' }}>
          <ImportantDates />
        </section>

        <section style={{ margin: 0, padding: 0, display: 'block' }}>
          <Conveners />
        </section>

        <section id="contact" style={{ margin: 0, padding: 0, display: 'block' }}>
          <Contact />
        </section>
      </main>
    </div>
  )
}
