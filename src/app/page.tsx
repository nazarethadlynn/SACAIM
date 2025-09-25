import HeroBanner from '@/components/sections/Hero/HeroBanner'
import AboutConference from '@/components/sections/About/AboutConference'
import ConferenceTracks from '@/components/sections/About/ConferenceTracks'
import SpeakerGrid from '@/components/sections/Speakers/SpeakerGrid'
import ImportantDates from '@/components/sections/Dates/ImportantDates'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutConference />
      <ConferenceTracks />
      <SpeakerGrid />
      <ImportantDates />
    </>
  )
}
 
