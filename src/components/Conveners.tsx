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
    <div className="black-overlay-content">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        CONVENERS
      </h2>
      
      {/* Force horizontal layout with inline styles */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          flexWrap: 'wrap'
        }}
      >
        
        {conveners.map((convener, index) => (
          <div 
            key={index}
            style={{
              flex: '1',
              textAlign: 'center',
              minWidth: '320px',
              maxWidth: '400px'
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
                alt={convener.name}
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
            
            {/* Convener Info */}
            <div style={{ marginTop: '0.5rem' }}>
              <h3 className="text-xl font-bold text-white" style={{ marginBottom: '0.25rem' }}>
                {convener.name}
              </h3>
              <p className="text-sm text-blue-300 font-medium italic" style={{ marginBottom: '0.5rem' }}>
                {convener.title}
              </p>
              <p className="text-sm text-white leading-relaxed">
                {convener.institution}
              </p>
            </div>
          </div>
        ))}

      </div>
      
      {/* Conference Organizing Team Note */}
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
  )
}

export default Conveners
