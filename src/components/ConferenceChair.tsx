'use client'

const ConferenceChair = () => {
  const chairs = [
    {
      name: "Dr. Shreekumar",
      title: "Professor",
      institution: "Mangalore Institute of Technology & Engineering, Moodabidre"
    },
    {
      name: "Dr. Raghavendra Ramachandra", 
      title: "Professor",
      institution: "Dept. of Information Security & Communication NTNU, Norway"
    }
  ]

  return (
    <div className="centered-page-content">
      <div className="black-overlay-content">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" 
          style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}
        >
          CONFERENCE CHAIR
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {chairs.map((chair, index) => (
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
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #2563eb)'
                }}
              >
                <span 
                  className="text-3xl font-bold text-white" 
                  style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
                >
                  {chair.name.split(' ')[1]?.[0] || chair.name[0]}
                </span>
              </div>
              
              <h3 
                className="text-2xl font-bold mb-3 text-blue-200" 
                style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
              >
                {chair.name}
              </h3>
              
              <p 
                className="text-lg mb-3 text-yellow-200 font-semibold" 
                style={{color: '#fef08a', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
              >
                {chair.title}
              </p>
              
              <p 
                className="text-white font-medium leading-relaxed" 
                style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
              >
                {chair.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConferenceChair
