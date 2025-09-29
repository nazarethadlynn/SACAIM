'use client'

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#475569',
      color: '#ffffff',
      padding: '3rem 1rem 2rem 1rem',
      position: 'relative'
    }}>
      {/* Subtle overlay for better text contrast */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(71, 85, 105, 0.9)',
        backdropFilter: 'blur(1px)'
      }}></div>
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '400px 1fr 300px',
        gap: '2rem',
        alignItems: 'start',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left Section - University Info Card */}
        <div style={{ 
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          color: '#000000',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* University Logo and Header */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.75rem',
              boxShadow: '0 4px 15px rgba(29, 78, 216, 0.3)'
            }}>
              <span style={{ 
                color: '#ffffff', 
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}>🎓</span>
            </div>
            <div>
              <h3 style={{ 
                color: '#1d4ed8',
                fontSize: '1.25rem',
                fontWeight: '800',
                margin: '0',
                lineHeight: '1.2',
                textShadow: '0 1px 3px rgba(29, 78, 216, 0.2)'
              }}>ST ALOYSIUS</h3>
              <p style={{ 
                color: '#1d4ed8',
                fontSize: '0.75rem',
                margin: '0',
                fontWeight: '600',
                opacity: 0.8
              }}>(DEEMED TO BE UNIVERSITY)</p>
              <p style={{ 
                color: '#1d4ed8',
                fontSize: '0.75rem',
                margin: '0',
                fontWeight: '600',
                opacity: 0.8
              }}>MANGALORE 575003 - INDIA</p>
            </div>
          </div>

          <p style={{ 
            color: '#1d4ed8',
            fontSize: '0.875rem',
            fontWeight: '700',
            margin: '0 0 1rem 0',
            textAlign: 'center',
            textShadow: '0 1px 2px rgba(29, 78, 216, 0.1)'
          }}>Institute of Management and IT - AIMIT</p>

          {/* University Description */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ 
              fontSize: '0.75rem',
              lineHeight: '1.5',
              color: '#374151',
              margin: '0 0 0.75rem 0',
              textAlign: 'justify',
              fontWeight: '500'
            }}>
              St Aloysius Institute of Management & Information Technology (AIMIT) is the new campus for MBA and IT programmes offered by St Aloysius (Deemed to be University), Mangalore.
            </p>
            <p style={{ 
              fontSize: '0.75rem',
              lineHeight: '1.4',
              color: '#374151',
              margin: '0 0 0.75rem 0',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              St Aloysius (Deemed to be University) Institute of Management and IT
            </p>
            <p style={{ 
              fontSize: '0.75rem',
              lineHeight: '1.4',
              color: '#374151',
              margin: '0 0 1rem 0',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              Beeri, Kotekar, Mangalore-574122
            </p>
          </div>

          {/* Contact Info */}
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <p style={{ 
              fontSize: '0.75rem',
              color: '#374151',
              margin: '0 0 0.25rem 0',
              fontWeight: '500'
            }}>
              <span style={{ fontWeight: '700', color: '#1d4ed8' }}>Phone:</span> +91 8242695641/42
            </p>
            <p style={{ 
              fontSize: '0.75rem',
              color: '#374151',
              margin: '0 0 1rem 0',
              fontWeight: '500'
            }}>
              <span style={{ fontWeight: '700', color: '#1d4ed8' }}>Email:</span> hemalatha@staloysius.ac.in
            </p>
          </div>

          {/* Social Media Icons */}
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '35px',
              height: '35px',
              background: 'linear-gradient(135deg, #475569, #64748b)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(71, 85, 105, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              <span style={{ 
                color: '#ffffff', 
                fontSize: '0.875rem',
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>f</span>
            </div>
            <div style={{
              width: '35px',
              height: '35px',
              background: 'linear-gradient(135deg, #475569, #64748b)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(71, 85, 105, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              <span style={{ 
                color: '#ffffff', 
                fontSize: '0.875rem',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>📷</span>
            </div>
            <div style={{
              width: '35px',
              height: '35px',
              background: 'linear-gradient(135deg, #475569, #64748b)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(71, 85, 105, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              <span style={{ 
                color: '#ffffff', 
                fontSize: '0.875rem',
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>in</span>
            </div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div style={{ paddingLeft: '2rem' }}>
          {/* Useful Links */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ 
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1rem',
              borderBottom: '3px solid #60a5fa',
              paddingBottom: '0.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.5px'
            }}>Useful Links</h4>
            <ul style={{ 
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#60a5fa',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> Home
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#60a5fa',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> About
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#60a5fa',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> Key Speakers
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#60a5fa',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> Important Dates
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Links */}
          <div>
            <h4 style={{ 
              color: '#ffffff',
              fontSize: '1.125rem',
              fontWeight: '700',
              marginBottom: '1rem',
              borderBottom: '3px solid #34d399',
              paddingBottom: '0.5rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.5px'
            }}>Featured Links</h4>
            <ul style={{ 
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#34d399',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> Gallery
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#34d399',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> SACAIM 2024
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#34d399',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> Our Achievements
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '500',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
                }}>
                  <span style={{ 
                    marginRight: '0.75rem', 
                    color: '#34d399',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>▶</span> Admissions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Exact Google Maps Replica */}
        <div>
          <div style={{ position: 'relative' }}>
            {/* Google Maps Container */}
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f8f9fa',
                border: '1px solid #e0e0e0',
                borderRadius: '0',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* View larger map link - positioned exactly as in image */}
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '4px 8px',
                borderRadius: '2px',
                fontSize: '11px',
                color: '#1a73e8',
                cursor: 'pointer',
                fontFamily: 'Roboto, Arial, sans-serif',
                fontWeight: '400',
                zIndex: 20,
                textDecoration: 'none',
                border: '1px solid rgba(0,0,0,.1)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
              }} 
              onClick={() => window.open(`https://www.google.com/maps/place/12°47'24.5"N+74°51'59.0"E/@12.790152,74.864647,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.790152!4d74.866636`, '_blank')}>
                View larger map
              </div>

              {/* Map background - exact colors from your image */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#f8f9fa'
              }}>

                {/* Village label - top right */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  fontSize: '9px',
                  color: '#3c4043',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  textAlign: 'center',
                  lineHeight: '1.2'
                }}>
                  <div style={{ marginBottom: '1px', fontWeight: '500' }}>VILLAGE</div>
                  <div style={{ fontSize: '8px', color: '#70757a' }}>ಗ್ರಾಮ</div>
                  <div style={{ fontSize: '8px', color: '#70757a' }}>ವೆಲ್ಲೂರ್</div>
                </div>

                {/* Kolya */}
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  left: '30px',
                  fontSize: '10px',
                  color: '#3c4043',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.2'
                }}>
                  <div style={{ marginBottom: '1px' }}>Kolya</div>
                  <div style={{ fontSize: '8px', color: '#70757a' }}>ಕೊಳ್ಯ</div>
                </div>

                {/* Madyar */}
                <div style={{
                  position: 'absolute',
                  top: '35px',
                  right: '50px',
                  fontSize: '10px',
                  color: '#3c4043',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.2',
                  textAlign: 'center'
                }}>
                  <div style={{ marginBottom: '1px' }}>Madyar</div>
                  <div style={{ fontSize: '8px', color: '#70757a' }}>ಮದ್ಯಾರ್</div>
                </div>

                {/* Kotekar */}
                <div style={{
                  position: 'absolute',
                  top: '65px',
                  left: '20px',
                  fontSize: '10px',
                  color: '#3c4043',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.2'
                }}>
                  <div style={{ marginBottom: '1px' }}>Kotekar</div>
                  <div style={{ fontSize: '8px', color: '#70757a' }}>ಕೊಟೇಕರ್</div>
                </div>

                {/* Beeri */}
                <div style={{
                  position: 'absolute',
                  top: '110px',
                  left: '35px',
                  fontSize: '10px',
                  color: '#3c4043',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.2'
                }}>
                  <div style={{ marginBottom: '1px' }}>Beeri</div>
                  <div style={{ fontSize: '8px', color: '#70757a' }}>ಬೀರಿ</div>
                </div>

                {/* Gurpur label */}
                <div style={{
                  position: 'absolute',
                  top: '50px',
                  right: '10px',
                  fontSize: '9px',
                  color: '#3c4043',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '400',
                  textAlign: 'right'
                }}>
                  Gurpur
                </div>

                {/* Red marker for AIMIT location */}
                <div style={{
                  position: 'absolute',
                  top: '75px',
                  right: '45px',
                  transform: 'translateX(50%)'
                }}>
                  {/* Red marker pin */}
                  <div style={{
                    width: '14px',
                    height: '20px',
                    background: '#ea4335',
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(-45deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 10
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#ffffff',
                      borderRadius: '50%',
                      transform: 'rotate(45deg)'
                    }}></div>
                  </div>
                  
                  {/* Location label popup */}
                  <div style={{
                    position: 'absolute',
                    top: '25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#ffffff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '8px',
                    color: '#d93025',
                    fontFamily: 'Roboto, Arial, sans-serif',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                    border: '1px solid #dadce0',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>
                    <div style={{ fontWeight: '500' }}>St Aloysius Institute</div>
                    <div>of Management &</div>
                    <div>Information Technology</div>
                    <div style={{ fontSize: '7px', color: '#5f6368', marginTop: '2px' }}>
                      AIMIT (ಏಐಐಎಮ್ಐಟಿ)
                    </div>
                  </div>
                </div>

                {/* Water body - blue area on left */}
                <div style={{
                  position: 'absolute',
                  left: '5px',
                  top: '50px',
                  width: '40px',
                  height: '70px',
                  backgroundColor: '#a8d8ff',
                  borderRadius: '20px',
                  opacity: 0.7
                }}></div>

                {/* Green area - bottom right */}
                <div style={{
                  position: 'absolute',
                  right: '10px',
                  bottom: '25px',
                  width: '80px',
                  height: '40px',
                  backgroundColor: '#c8e6c9',
                  borderRadius: '20px',
                  opacity: 0.6
                }}></div>

                {/* Road lines */}
                <div style={{
                  position: 'absolute',
                  top: '95px',
                  left: '0',
                  right: '0',
                  height: '1px',
                  backgroundColor: '#9aa0a6',
                  opacity: 0.5
                }}></div>

                {/* MKE Mobile Shop marker */}
                <div style={{
                  position: 'absolute',
                  bottom: '45px',
                  left: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  fontSize: '8px',
                  color: '#1a73e8',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  fontWeight: '400'
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#1a73e8',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ color: 'white', fontSize: '6px' }}>🛒</span>
                  </div>
                  <div>MKE Mobile Shop</div>
                </div>

                {/* Zoom controls - positioned exactly as in image */}
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  right: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  borderRadius: '2px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  border: '1px solid #dadce0'
                }}>
                  <button style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid #dadce0',
                    color: '#3c4043'
                  }}>+</button>
                  <button style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3c4043'
                  }}>−</button>
                </div>

                {/* Map info bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: '5px',
                  left: '5px',
                  fontSize: '7px',
                  color: '#70757a',
                  fontFamily: 'Roboto, Arial, sans-serif'
                }}>
                  ⌨ Keyboard shortcuts Map data ©2025 Terms Report a map error
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{
        borderTop: '1px solid rgba(148, 163, 184, 0.3)',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{ 
          color: '#f1f5f9',
          fontSize: '0.875rem',
          margin: '0 0 0.25rem 0',
          fontWeight: '500',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
        }}>© Copyright AIMIT. All Rights Reserved</p>
        <p style={{ 
          color: '#cbd5e1',
          fontSize: '0.875rem',
          margin: '0',
          fontWeight: '400',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
        }}>Designed by</p>
      </div>
    </footer>
  )
}

export default Footer
