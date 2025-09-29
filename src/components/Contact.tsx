'use client'

const Contact = () => {
  return (
    <section style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
      backdropFilter: 'blur(5px)',
      padding: '4rem 1rem 0 1rem' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Contact Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            color: '#1d4ed8', 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '0.5rem' 
          }}>
            CONTACT
          </h1>
          <div style={{ 
            width: '4rem', 
            height: '4px', 
            backgroundColor: '#3b82f6', 
            margin: '0 auto' 
          }}></div>
        </div>
        
        {/* Contact Cards - Side by Side with Semi-Transparent Background */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center', 
          gap: '1.5rem', 
          maxWidth: '1000px', 
          margin: '0 auto 0 auto',
          flexWrap: 'wrap'
        }}>
          {/* Address Card */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '2rem 1.5rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            border: '1px solid rgba(229, 231, 235, 0.3)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: '#ef4444' }}>📍</span>
            </div>
            <h3 style={{ 
              color: '#374151', 
              fontSize: '1rem', 
              fontWeight: '600', 
              marginBottom: '0.75rem' 
            }}>
              Our Address
            </h3>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '0.875rem', 
              lineHeight: '1.5' 
            }}>
              St Aloysius (Deemed to be University) Institute of Management and IT Beeri, Kotekar, Mangalore-574122
            </p>
          </div>

          {/* Email Card */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '2rem 1.5rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            border: '1px solid rgba(229, 231, 235, 0.3)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: '#3b82f6' }}>📧</span>
            </div>
            <h3 style={{ 
              color: '#374151', 
              fontSize: '1rem', 
              fontWeight: '600', 
              marginBottom: '0.75rem' 
            }}>
              Email
            </h3>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '0.875rem', 
              lineHeight: '1.5' 
            }}>
              hemalatha@staloysius.ac.in
            </p>
          </div>

          {/* Phone Card */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '2rem 1.5rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            border: '1px solid rgba(229, 231, 235, 0.3)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '2rem', color: '#ec4899' }}>📞</span>
            </div>
            <h3 style={{ 
              color: '#374151', 
              fontSize: '1rem', 
              fontWeight: '600', 
              marginBottom: '0.75rem' 
            }}>
              Phone
            </h3>
            <div style={{ 
              color: '#6b7280', 
              fontSize: '0.875rem', 
              lineHeight: '1.5' 
            }}>
              <p style={{ margin: '0 0 0.25rem 0' }}>+91 94835 76233</p>
              <p style={{ margin: '0' }}>+91 98441 98623</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
