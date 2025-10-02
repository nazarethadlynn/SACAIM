'use client'

const ImportantDates = () => {
  const dates = [
    { event: "Last Date For Paper Submission", date: "31st January 2025" },
    { event: "Notification of Acceptance", date: "2nd March 2025" },
    { event: "Camera Ready Paper Submission", date: "5th March 2025" },
    { event: "Release of Presentation Schedule", date: "10th March 2025" },
    { event: "Conference Dates", date: "20th & 21st, March, 2025" }
  ]

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
        padding: '2rem 1rem',
        backgroundColor: '#fff',
      }}
    >
      {/* White full-width overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          width: '100vw', height: '100%',
          backgroundColor: '#fff',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#111',
            borderBottom: '3px solid #1e40af',
            display: 'inline-block',
            width: '100%',
            paddingBottom: '0.5rem',
          }}
        >
          IMPORTANT DATES
        </h2>
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.15)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(30,64,175,0.8)', color: 'white' }}>
                <th style={{
                  padding: '1rem',
                  textAlign: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  borderRight: '1px solid rgba(255,255,255,0.2)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  EVENTS
                </th>
                <th style={{
                  padding: '1rem',
                  textAlign: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  DATES
                </th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, index) => (
                <tr key={index} style={{
                  borderBottom: index < dates.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  transition: 'background-color 0.2s',
                  backgroundColor: 'transparent'
                }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#111',
                    borderRight: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {item.event}
                  </td>
                  <td style={{
                    padding: '1rem',
                    textAlign: 'center',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: item.event === "Last Date For Paper Submission" ? '#dc2626' : '#22c55e'
                  }}>
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: 'rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: '8px',
          textAlign: 'center',
          backdropFilter: 'blur(15px)',
          color: '#111',
          maxWidth: '720px',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontWeight: '500'
        }}>
          <p style={{ margin: 0, color: 'black' }}>
            📢 <strong>Important Notice:</strong> All deadlines are strictly adhered to. Please ensure timely submissions to avoid any inconvenience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ImportantDates;
