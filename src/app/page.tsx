import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import AboutUniversity from '@/components/AboutUniversity'
import AboutConference from '@/components/AboutConference'
import ConferenceTopics from '@/components/ConferenceTopics'
import ConferenceChair from '@/components/ConferenceChair'
import KeynoteSpeakers from '@/components/KeynoteSpeakers'
import ImportantDates from '@/components/ImportantDates'
import Conveners from '@/components/Conveners'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutUniversity />
      <AboutConference />
      <ConferenceTopics />
      <ConferenceChair />
      <KeynoteSpeakers />
      <ImportantDates />
      <Conveners />
      <Contact />
      <Footer />
    </main>
  )
}
