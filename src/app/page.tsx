import HeroBanner from '@/components/sections/Hero/HeroBanner'
import AboutUniversity from '@/components/AboutUniversity'
import AboutConference from '@/components/AboutConference'
// Remove this import: import ConferenceTopics from '@/components/ConferenceTopics'
import ConferenceChair from '@/components/ConferenceChair'
import KeynoteSpeakers from '@/components/KeynoteSpeakers'
import ImportantDates from '@/components/ImportantDates'
import Conveners from '@/components/Conveners'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="scrollable-content">
      <main className="page-content">
        <section id="home" className="hero-section">
          <HeroBanner />
        </section>

        <section id="about" className="content-section">
          <AboutUniversity />
        </section>

        <section className="content-section">
          <AboutConference />
        </section>

        {/* Remove this section since it's now merged above:
        <section className="content-section">
          <ConferenceTopics />
        </section>
        */}

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
  )
}
