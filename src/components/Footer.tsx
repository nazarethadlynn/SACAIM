'use client';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#475569',
        color: '#ffffff',
        padding: '1.5rem 0.5rem 0.75rem 0.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* FULL overlay for entire footer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(71, 85, 105, 0.7)',
          backdropFilter: 'blur(1px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr 1fr',
          gap: '1rem',
          alignItems: 'start',
          position: 'relative',
          zIndex: 1,
          fontSize: '0.85rem',
        }}
      >
        {/* Left Section - University Info Card */}
        <div
          style={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '10px',
            color: '#000',
            boxShadow: '0 2px 10px rgba(0,0,0,0.13)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)',
                borderRadius: '7px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.5rem',
              }}
            >
              <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 'bold' }}>🎓</span>
            </div>
            <div>
              <h3 style={{ color: '#1d4ed8', fontSize: '0.95rem', fontWeight: '800', margin: 0 }}>ST ALOYSIUS</h3>
              <p style={{ color: '#1d4ed8', fontSize: '0.65rem', margin: 0, fontWeight: '600', opacity: 0.8 }}>
                (DEEMED TO BE UNIVERSITY)
              </p>
              <p style={{ color: '#1d4ed8', fontSize: '0.65rem', margin: 0, fontWeight: '600', opacity: 0.8 }}>
                MANGALORE 575003 - INDIA
              </p>
            </div>
          </div>
          <p
            style={{
              color: '#1d4ed8',
              fontSize: '0.78rem',
              fontWeight: '700',
              margin: '0 0 0.25rem 0',
              textAlign: 'center',
            }}
          >
            Institute of Management and IT - AIMIT
          </p>
          <div style={{ marginBottom: '0.4rem', fontSize: '0.7rem' }}>
            <p style={{ margin: '0 0 0.3rem 0', color: '#374151' }}>
              St Aloysius Institute of Management & IT (AIMIT) is the new campus for MBA and IT programmes offered by St Aloysius.
            </p>
            <p style={{ margin: '0', color: '#374151', textAlign: 'center' }}>
              St Aloysius ... Management and IT
            </p>
            <p style={{ margin: '0', color: '#374151', textAlign: 'center' }}>
              Beeri, Kotekar, Mangalore-574122
            </p>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <p style={{ color: '#374151', margin: 0, fontWeight: '500' }}>
              <span style={{ fontWeight: '700', color: '#1d4ed8' }}>Phone:</span> +91 8242695641/42
            </p>
            <p style={{ color: '#374151', margin: 0, fontWeight: '500' }}>
              <span style={{ fontWeight: '700', color: '#1d4ed8' }}>Email:</span>{' '}
              <a href="mailto:hemalatha@staloysius.ac.in" style={{ color: '#1d4ed8', textDecoration: 'none' }}>
                hemalatha@staloysius.ac.in
              </a>
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            {['f', '📷', 'in'].map((icon, ix) => (
              <div
                key={ix}
                style={{
                  width: '22px',
                  height: '22px',
                  background: 'linear-gradient(135deg, #475569, #64748b)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  color: '#fff',
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        {/* Middle Section - Links */}
        <div style={{ paddingLeft: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#fff', fontSize: '0.93rem', fontWeight: '700', marginBottom: '0.7rem', borderBottom: '2px solid #60a5fa', paddingBottom: '0.25rem' }}>
              Useful Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Home', 'About', 'Key Speakers', 'Important Dates'].map((text, ix) => (
                <li key={ix} style={{ marginBottom: '0.35rem' }}>
                  <a
                    href="#"
                    style={{
                      color: '#f1f5f9',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ marginRight: '0.5rem', color: '#60a5fa', fontSize: '0.75rem', fontWeight: 'bold' }}>▶</span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontSize: '0.93rem', fontWeight: '700', marginBottom: '0.7rem', borderBottom: '2px solid #34d399', paddingBottom: '0.25rem' }}>
              Featured Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Gallery', 'SACAIM 2025', 'Our Achievements', 'Admissions'].map((text, ix) => (
                <li key={ix} style={{ marginBottom: '0.35rem' }}>
                  <a
                    href="#"
                    style={{
                      color: '#f1f5f9',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ marginRight: '0.5rem', color: '#34d399', fontSize: '0.75rem', fontWeight: 'bold' }}>▶</span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Section - Real-time Google Map */}
        <div style={{ width: '100%', minWidth: '220px', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe
            title="St Aloysius Institute of Management and IT Map"
            src="https://www.google.com/maps?q=St+Aloysius+Institute+of+Management+and+Information+Technology+Beeri+Kotekar+Mangaluru&hl=en&z=16&output=embed"
            width="94%"
            height="210"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid rgba(148,163,184,0.17)',
          marginTop: '0.9rem',
          paddingTop: '0.6rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p style={{ color: '#f1f5f9', fontSize: '0.72rem', margin: '0 0 0.1rem 0', fontWeight: '500' }}>
          © Copyright AIMIT. All Rights Reserved
        </p>
        <p style={{ color: '#cbd5e1', fontSize: '0.72rem', margin: 0, fontWeight: '400' }}>Designed by</p>
      </div>
    </footer>
  );
};

export default Footer;
