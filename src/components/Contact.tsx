'use client';

import React from 'react';

const cardStyle: React.CSSProperties = {
  flex: '1 1 220px',
  minWidth: '180px',
  maxWidth: '280px',
  background: '#fff',
  padding: '1.2rem 1rem',
  borderRadius: '15px',
  boxShadow: '0 3px 18px 0 rgba(60,84,120,0.08), 0 1.5px 2.5px rgba(234, 236, 239, 0.04)',
  textAlign: 'center',
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: 'none',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 1,
};

const headingStyle: React.CSSProperties = {
  fontWeight: 900,
  fontSize: '2rem',
  textAlign: 'center',
  color: '#21509d',
  letterSpacing: '2px',
  margin: '2.2rem 0 0.5rem 0',
  textShadow: '2px 3px 8px #d1e2ff, 0 1px 1px #fff, 1px 1.5px 4px #222',
  lineHeight: 1.1,
  position: 'relative',
  zIndex: 1,
};

const underline: React.CSSProperties = {
  margin: '0 auto 1.1rem auto',
  width: '55px',
  height: '3px',
  background: '#21509d',
  borderRadius: '2px',
  position: 'relative',
  zIndex: 1,
};

const iconStyles: React.CSSProperties[] = [
  {
    fontSize: '1.9rem',
    marginBottom: '0.6rem',
    filter: 'drop-shadow(1px 2px 3px #f158ac44)',
    position: 'relative',
    zIndex: 1,
  },
  {
    fontSize: '1.9rem',
    marginBottom: '0.6rem',
    filter: 'drop-shadow(1px 2px 4px #1e63f6aa)',
    position: 'relative',
    zIndex: 1,
  },
  {
    fontSize: '1.9rem',
    marginBottom: '0.6rem',
    filter: 'drop-shadow(1px 3px 8px #f3268877)',
    position: 'relative',
    zIndex: 1,
  },
];

const cardTitle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: '1.15rem',
  margin: 0,
  color: '#21509d',
  textShadow: '2px 3px 6px #ededed, 0 1.5px 0px #fff, 1px 1px 2px #222',
  position: 'relative',
  zIndex: 1,
};

const cardDetail: React.CSSProperties = {
  fontSize: '0.97rem',
  color: '#2f3e57',
  margin: '0.5rem 0 0 0',
  fontWeight: 600,
  textShadow: '1.1px 1.1px 3px #e4e4e4',
  lineHeight: 1.4,
  position: 'relative',
  zIndex: 1,
};

const cardLink: React.CSSProperties = {
  color: '#21509d',
  textDecoration: 'none',
  fontWeight: 700,
  position: 'relative',
  zIndex: 1,
};

const fullWidthContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100vw',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  minHeight: '350px',
  padding: 0,
  boxSizing: 'border-box',
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 1)', // Full solid white overlay
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const contentWrapperStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '1100px',
  padding: '2.5rem 1.5rem',
  boxSizing: 'border-box',
  color: '#fff',
};

const cardsRowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '1.5rem',
  marginTop: '2rem',
  flexWrap: 'wrap',
};

const Contact: React.FC = () => (
  <section style={fullWidthContainerStyle}>
    <div style={contentWrapperStyle}>
      <div style={headingStyle}>CONTACT</div>
      <div style={underline} />
      <div style={cardsRowStyle}>
        {/* Address Card */}
        <div style={cardStyle}>
          <span role="img" aria-label="address" style={iconStyles[0]}>
            📍
          </span>
          <div style={cardTitle}>Our Address</div>
          <div style={{ ...cardDetail, color: '#100e0eff' }}>
            St Aloysius (Deemed to be University) <br />
            Institute of Management and IT Beeri, <br />
            Kotekar, Mangalore-574122
          </div>
        </div>

        {/* Email Card */}
        <div style={cardStyle}>
          <span role="img" aria-label="email" style={iconStyles[1]}>
            📧
          </span>
          <div style={cardTitle}>Email</div>
          <div style={cardDetail}>
            <a href="mailto:hemalatha@staloysius.ac.in" style={cardLink}>
              hemalatha@staloysius.ac.in
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div style={cardStyle}>
          <span role="img" aria-label="phone" style={iconStyles[2]}>
            📞
          </span>
          <div style={cardTitle}>Phone</div>
          <div style={cardDetail}>
            <div>+91 94835 76233</div>
            <div>+91 98441 98623</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
