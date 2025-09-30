'use client'

const ConferenceChair = () => {
  return (
    <div className="black-overlay-content">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        CONFERENCE CHAIR
      </h2>
      
      {/* Force horizontal layout with inline styles */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        
        {/* Chair 1 - Dr. Shreekumar */}
        <div 
          style={{
            flex: '1',
            textAlign: 'center',
            minWidth: '300px',
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
              alt="Dr. Shreekumar"
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
          
          {/* Chair Info */}
          <div style={{ marginTop: '0.5rem' }}>
            <h3 className="text-xl font-bold text-white" style={{ marginBottom: '0.25rem' }}>
              Dr. Shreekumar
            </h3>
            <p className="text-sm text-blue-300 font-medium italic" style={{ marginBottom: '0.5rem' }}>
              Professor
            </p>
            <p className="text-sm text-white leading-relaxed">
              Mangalore Institute of Technology & Engineering, Moodabidre
            </p>
          </div>
        </div>

        {/* Chair 2 - Dr. Raghavendra */}
        <div 
          style={{
            flex: '1',
            textAlign: 'center',
            minWidth: '300px',
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
              alt="Dr. Raghavendra Ramachandra"
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
          
          {/* Chair Info */}
          <div style={{ marginTop: '0.5rem' }}>
            <h3 className="text-xl font-bold text-white" style={{ marginBottom: '0.25rem' }}>
              Dr. Raghavendra Ramachandra
            </h3>
            <p className="text-sm text-blue-300 font-medium italic" style={{ marginBottom: '0.5rem' }}>
              Professor
            </p>
            <p className="text-sm text-white leading-relaxed">
              Dept. of Information Security & Communication NTNU, Norway
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ConferenceChair
