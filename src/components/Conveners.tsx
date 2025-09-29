'use client'

const Conveners = () => {
  const conveners = [
    {
      name: "Dr Hemalatha N",
      title: "Dean",
      institution: "School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT"
    },
    {
      name: "Dr Rakesh Kumar",
      title: "Associate Professor, HOD (MSc BDA & Data Science)",
      institution: "School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT"
    }
  ]

  return (
    <div className="centered-page-content">
      <div className="black-overlay-content">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" 
          style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}
        >
          CONVENERS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {conveners.map((convener, index) => (
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
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-content"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)'
                }}
              >
                <span 
                  className="text-3xl font-bold text-white w-full text-center" 
                  style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
                >
                  {convener.name.split(' ')[1]?.[0] || convener.name[0]}
                </span>
              </div>
              
              <h3 
                className="text-xl font-bold mb-3 text-blue-200" 
                style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
              >
                {convener.name}
              </h3>
              
              <p 
                className="text-lg mb-4 text-green-200 font-semibold" 
                style={{color: '#bbf7d0', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
              >
                {convener.title}
              </p>
              
              <p 
                className="text-white font-medium text-sm leading-relaxed" 
                style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
              >
                {convener.institution}
              </p>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-12 p-6 rounded-lg border-l-4 max-w-4xl mx-auto"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderLeftColor: '#8b5cf6',
            backdropFilter: 'blur(6px)'
          }}
        >
          <p 
            className="text-center text-lg font-medium"
            style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
          >
            👥 <span className="text-purple-200 font-semibold" style={{color: '#ddd6fe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Conference Organizing Team:</span> The conveners are dedicated to ensuring a successful and impactful conference experience for all participants.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Conveners
