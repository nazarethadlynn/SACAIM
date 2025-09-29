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
    <div className="centered-page-content">
      <div className="black-overlay-content">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" 
          style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}
        >
          KEYNOTE SPEAKERS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-8 text-center border border-gray-400 hover:bg-opacity-50 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #f97316, #ea580c)'
                }}
              >
                <span 
                  className="text-3xl font-bold text-white" 
                  style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
                >
                  {speaker.name.split(' ')[1]?.[0] || speaker.name[0]}
                </span>
              </div>
              
              <h3 
                className="text-xl font-bold mb-3 text-blue-200" 
                style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
              >
                {speaker.name}
              </h3>
              
              <p 
                className="text-lg mb-3 text-orange-200 font-semibold" 
                style={{color: '#fed7aa', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
              >
                {speaker.title}
              </p>
              
              <p 
                className="text-white font-medium text-sm leading-relaxed" 
                style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
              >
                {speaker.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KeynoteSpeakers
