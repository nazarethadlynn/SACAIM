'use client'

const AboutUniversity = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Full-width overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(20, 30, 48, 0.85)',
          zIndex: 0,
        }}
      />
      {/* Centered content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1100px',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 500,
          fontSize: '1.08rem',
          lineHeight: 1.6,
          textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
          padding: '2.5rem 1.5rem',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          ABOUT THE UNIVERSITY
        </h2>

        <p>
          St. Aloysius Institutions, Mangalore, established in 1880 prides itself in its history of 144 years.
          Thousands of students who have passed through the portals of this institution have rendered outstanding service to humankind not only in India but across the globe.
          St Aloysius (Deemed to be University) belongs to a network of educational institutions administered by the members of the Society of Jesus, a religious order which runs schools, colleges and universities in more than 105 countries in the world.
          The members of the order, popularly known as Jesuits, have acquired a reputation for excellence in the quality of education. Some of the distinguished Jesuit institutions of higher education in India are St Xavier's College in Kolkata, St Xavier's College in Mumbai, Loyola College in Chennai, St Joseph's College in Trichy, Xavier Institute of Labour Relations (XLRI) in Jamshedpur, and Xavier University in Bhuvaneswar.
          These and many other highly acclaimed centres of learning are managed by the Jesuits and deeply rooted in Jesuit values of commitment and excellence.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Despite being a minority institution, the University has provided high-quality education to individuals from all societal backgrounds, irrespective of caste, color, or creed.
        </p>

        <p style={{ marginTop: '1rem' }}>
          The university's motto, <span style={{ color: '#fef08a', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>“Lucet et Ardet,”</span> translating to <span style={{ color: '#fef08a', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>“shine to enkindle,”</span> has served as an inspiration for numerous students to become compassionate individuals who bring brightness and happiness into the lives of others.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Promoting social consciousness and nurturing a heightened sense of social responsibility stands as a cornerstone of the University's mission. We take great pride in our alumni who have evolved into champions of impactful social reform.
        </p>

        <p style={{ marginTop: '1rem' }}>
          St Aloysius College in its Fourth Cycle of NAAC Accreditation was awarded <span style={{ color: '#bbf7d0', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>“A++” Grade</span> with a CGPA of <span style={{ color: '#bbf7d0', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>3.67 out of 4</span> in January 2023.
          In the NIRF-2023, Ranking awarded by the Ministry of Education, the College has been ranked <span style={{ color: '#bfdbfe', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>80 among the Colleges in India</span> which is among the featured top 2 colleges of Karnataka.
          St Aloysius college was granted <span style={{ color: '#ddd6fe', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>University Status by UGC</span> in January 2024.
        </p>

        <p style={{ marginTop: '1rem' }}>
          <span style={{ color: '#bfdbfe', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>St. Aloysius (Deemed to be University) Institute of Management & Information Technology (AIMIT)</span> serves as the latest campus for MBA and IT programs.
          It encompasses a range of IT courses, including MCA, MSc (Software Technology), MSc (Big Data Analytics), MSc (Data Science), and MSc (Bioinformatics).
        </p>

        <p style={{ marginTop: '1rem' }}>
          At AIMIT, our priority is our students.
          Each of our programs is meticulously crafted with your career advancement in mind.
          We provide outstanding education, ample opportunities to interact with industry professionals, top-notch facilities, and access to a continuously expanding alumni network.
          The AIMIT experience is aimed at moulding graduates into well-rounded, self-assured, and proficient professionals, empowering them to make a positive impact both in their workplace and community.
        </p>
      </div>
    </section>
  )
}

export default AboutUniversity
