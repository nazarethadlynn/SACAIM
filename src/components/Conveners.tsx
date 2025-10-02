'use client';

const Conveners = () => {
  const conveners = [
    {
      name: 'Dr Hemalatha N',
      title: 'Dean',
      institution:
        'School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT',
    },
    {
      name: 'Dr Rakesh Kumar',
      title: 'Associate Professor, HOD (MSc BDA & Data Science)',
      institution:
        'School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT',
    },
  ];

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
        padding: '0 1rem',
        backgroundColor: '#fff', // Full white background overlay
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
          width: '100vw',
          height: '100%',
          backgroundColor: '#fff',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1300px',
          margin: '0 auto',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          color: '#111',
        }}
      >
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{
            marginBottom: '2rem',
            color: '#111',
            textAlign: 'center',
            textShadow: '2px 2px 6px #ededed',
          }}
        >
          CONVENERS
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {conveners.map((convener, index) => (
            <div
              key={index}
              style={{
                flex: '1',
                textAlign: 'center',
                minWidth: '320px',
                maxWidth: '400px',
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
                  alt={convener.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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

              <div style={{ marginTop: '0.5rem' }}>
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: '0.25rem', color: '#111' }}
                >
                  {convener.name}
                </h3>
                <p
                  className="text-sm font-medium italic"
                  style={{ marginBottom: '0.5rem', color: '#444' }}
                >
                  {convener.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#111' }}>
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
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderLeftColor: '#8b5cf6',
            backdropFilter: 'blur(6px)',
            color: '#333',
            marginTop: '3rem',
          }}
        >
          <p
            className="text-center text-lg font-medium"
            style={{ textShadow: 'none', color: '#333' }}
          >
            👥 <span className="text-purple-200 font-semibold" style={{ color: '#7c3aed', textShadow: 'none' }}>
              Conference Organizing Team:
            </span>{' '}
            The conveners are dedicated to ensuring a successful and impactful conference experience for all participants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conveners;
