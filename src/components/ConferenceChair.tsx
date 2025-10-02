'use client'

const ConferenceChair = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        minHeight: '450px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Full-width dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 1)', // Full solid white overlay
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1300px',
          margin: '0 auto',
        }}
      >
         <h2
  className="text-4xl font-bold text-center mb-12"
  style={{
    marginTop: '2rem',
    marginBottom: '2rem',
    color: '#111',         // Black title
    textShadow: '2px 2px 6px #ededed',
    textAlign: 'center',   // Add this line to center the text
  }}
>
  CONFERENCE CHAIR
</h2>


        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '2rem',
            width: '100%',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}
        >
          {/* Chair 1 - Dr. Shreekumar */}
          <div
            style={{
              flex: '1',
              textAlign: 'center',
              minWidth: '300px',
              maxWidth: '400px',
              color: '#f2efefff',
            }}
          >
            <div
              style={{
                width: '160px',
                height: '160px',
                margin: '0 auto 1rem auto',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#d1d5db',
                border: '2px solid #9ca3af',
              }}
            >
              <img
                src="/images/speakers/default.jpg"
                alt="Dr. Shreekumar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerHTML = `
                    <div style="width: 100%; height: 100%; background-color: #d1d5db; display: flex; align-items: center; justify-content: center;">
                      <div style="text-align: center;">
                        <div style="width: 40px; height: 40px; background-color: #4b5563; border-radius: 50%; margin: 0 auto 8px auto;"></div>
                        <div style="width: 56px; height: 56px; background-color: #4b5563; border-radius: 28px 28px 0 0; margin: 0 auto;"></div>
                      </div>
                    </div>
                  `
                }}
              />
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <h3 className="text-xl font-bold text-white" style={{ marginBottom: '0.25rem', color: '#060505ff' }}>
                Dr. Shreekumar
              </h3>
              <p className="text-sm text-blue-300 font-medium italic" style={{ marginBottom: '0.5rem', color: '#100707ff' }}>
                Professor
              </p>
              <p className="text-sm text-white leading-relaxed" style={{ color: '#0b0a0aff' }}>
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
              maxWidth: '400px',
              color: '#fff',
            }}
          >
            <div
              style={{
                width: '160px',
                height: '160px',
                margin: '0 auto 1rem auto',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#d1d5db',
                border: '2px solid #9ca3af',
              }}
            >
              <img
                src="/images/speakers/default.jpg"
                alt="Dr. Raghavendra Ramachandra"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement!.innerHTML = `
                    <div style="width: 100%; height: 100%; background-color: #d1d5db; display: flex; align-items: center; justify-content: center;">
                      <div style="text-align: center;">
                        <div style="width: 40px; height: 40px; background-color: #4b5563; border-radius: 50%; margin: 0 auto 8px auto;"></div>
                        <div style="width: 56px; height: 56px; background-color: #4b5563; border-radius: 28px 28px 0 0; margin: 0 auto;"></div>
                      </div>
                    </div>
                  `
                }}
              />
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <h3 className="text-xl font-bold text-white" style={{ marginBottom: '0.25rem', color: '#121010ff' }}>
                Dr. Raghavendra Ramachandra
              </h3>
              <p className="text-sm text-blue-300 font-medium italic" style={{ marginBottom: '0.5rem', color: '#090707ff' }}>
                Professor
              </p>
              <p className="text-sm text-white leading-relaxed" style={{ color: '#090808ff' }}>
                Dept. of Information Security & Communication NTNU, Norway
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ConferenceChair
