'use client'

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Tad Gonsalves",
      title: "Professor",
      institution: "Dept of Information and Communication Science Faculty of Science and Technology, Sophia University"
    },
    {
      name: "Dr. Ludwig Simone",
      title: "Professor and Chair",
      institution: "Dept. of Computer Science North Dakota State University"
    },
    {
      name: "Dr. Damodar Reddy Edla",
      title: "Associate Professor & Dean",
      institution: "Department of Computer Science & Engineering National Institute of Technology (NIT) Goa"
    }
  ]

  return (
    <div className="black-overlay-content">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        KEYNOTE SPEAKERS
      </h2>
      
      {/* Force horizontal layout with inline styles */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          flexWrap: 'wrap'
        }}
      >
        
        {speakers.map((speaker, index) => (
          <div 
            key={index}
            style={{
              flex: '1',
              textAlign: 'center',
              minWidth: '280px',
              maxWidth: '350px'
            }}
          >
            {/* Profile Image */}
            <div 
              style={{
                width: '160px',
                height: '160px',
                margin: '0 auto 1rem auto',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#d1d5db',
                border: '2px solid #9ca3af'
              }}
            >
              <img 
                src="/images/speakers/default.jpg" 
                alt={speaker.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div style="width: 100%; height: 100%; background-color: #d1d5db; display: flex; align-items: center; justify-content: center;">
                      <div style="text-align: center;">
                        <div style="width: 40px; height: 40px; background-color: #4b5563; border-radius: 50%; margin: 0 auto 8px auto;"></div>
                        <div style="width: 56px; height: 56px; background-color: #4b5563; border-radius: 28px 28px 0 0; margin: 0 auto;"></div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Speaker Info */}
            <div style={{ marginTop: '0.5rem' }}>
              <h3 className="text-xl font-bold text-white" style={{ marginBottom: '0.25rem' }}>
                {speaker.name}
              </h3>
              <p className="text-sm text-blue-300 font-medium italic" style={{ marginBottom: '0.5rem' }}>
                {speaker.title}
              </p>
              <p className="text-sm text-white leading-relaxed">
                {speaker.institution}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default KeynoteSpeakers
