'use client'

const AboutUniversity = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          About The University
        </h2>
        
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              St. Aloysius Institutions, Mangalore, established in 1880 prides itself in its history of 144 years. 
              Thousands of students who have passed through the portals of this institution have rendered outstanding 
              service to humankind not only in India but across the globe.
            </p>
            
            <p>
              St Aloysius (Deemed to be University) belongs to a network of educational institutions administered by 
              the members of the Society of Jesus, a religious order which runs schools, colleges and universities in 
              more than 105 countries in the world.
            </p>
            
            <p>
              Despite being a minority institution, the University has provided high-quality education to individuals 
              from all societal backgrounds, irrespective of caste, color, or creed.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-blue-800 mb-2">University Motto</p>
              <p className="text-blue-700 italic">"Lucet et Ardet" - "Shine to Enkindle"</p>
            </div>
            
            <p>
              St Aloysius College in its Fourth Cycle of NAAC Accreditation was awarded "A++" Grade with a CGPA of 3.67 out of 4 in January 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUniversity
