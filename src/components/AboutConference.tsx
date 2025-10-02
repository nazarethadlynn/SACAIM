'use client'

import React from 'react';

const AboutConference = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        minHeight: '600px',
        color: '#000',
        fontWeight: 600,
        fontSize: '1.08rem',
        lineHeight: 1.7,
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
        background: 'none',
        boxSizing: 'border-box',
        overflow: 'hidden',
        padding: 0,
        letterSpacing: '0.01em',
        textShadow: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          zIndex: 0,
        }}
      />
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1100px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '2.5rem 1.5rem 0 1.5rem',
        color: '#000',
      }}>
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            margin: 0,
            marginBottom: '2rem',
            color: '#000',
            textShadow: 'none',
          }}
        >
          ABOUT THE CONFERENCE
        </h2>
        <p style={{ marginBottom: '1.25rem', color: '#000', fontWeight: 600 }}>
          St Aloysius (Deemed to be University) is organizing two days International Conference on <strong>
          International Conference on Artificial Intelligence in Healthcare (ICAIH-2025)</strong> which deals
          with the advanced technologies and optimizing solutions in various disciplines of Computer Science,
          Artificial Intelligence, Machine Learning and various fields of Engineering.
        </p>
        <p style={{ marginBottom: '1.25rem', color: '#000', fontWeight: 600 }}>
          The objective of the conference is to encourage interdisciplinary Research and promote the usage of Artificial Intelligence in the area of Medicine. This will further help in improving the overall quality of life and hence facilitate the society at large.
        </p>
        <p style={{ marginBottom: '1.5rem', color: '#000', fontWeight: 600 }}>
          ICAIH-2025 aims to provide opportunity for the researchers to share their ideas and experience with other researchers around the globe. ICAIH-2025 seeks potential research submissions that solicit the state of art applications, innovative methods and analyze unexplored challenges to establish relative solutions.
        </p>
        <div style={{ marginTop: '2.5rem' }}>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            margin: 0,
            marginBottom: '0.8rem',
            color: '#000',
            textShadow: 'none'
          }}>
            Publication
          </h3>
          <p style={{ color: '#000', margin: 0, fontWeight: 400 }}>
            The selected papers after the presentation will be published in the prestigious SpringerLink CCIS series.
          </p>
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            margin: 0,
            marginBottom: '0.8rem',
            color: '#000',
            textShadow: 'none'
          }}>
            Conference Mode
          </h3>
          <p style={{ color: '#000', margin: 0, fontWeight: 400 }}>
            This conference is conducted in <strong style={{ color: '#000' }}>hybrid mode</strong>.
          </p>
        </div>
        <div style={{ marginTop: '2.7rem' }}>
          <h2
            style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              margin: 0,
              marginBottom: '2rem',
              color: '#000',
              textShadow: 'none'
            }}
          >
            CONFERENCE TOPICS
          </h2>
          <p style={{
            fontSize: '1.075rem',
            marginBottom: '2.2rem',
            color: '#000',
            fontWeight: 600,
            textShadow: 'none'
          }}>
            Papers at ICAIH-2025 would be in the following topics
          </p>
        </div>
        <div style={{
          display: 'grid',
          gap: '2rem',
          maxWidth: 700,
          margin: '0 auto',
          textAlign: 'left'
        }}>
          {[
            {
              borderColor: '#3b82f6',
              title: 'Track 1',
              subtitle: 'AI in Diagnostics & Predictive Analytics',
              color: '#1d4ed8',
              items: [
                'Early Disease Detection',
                'AI in Medical Imaging',
                'Predictive Patient Outcomes',
                'Clinical Decision Support',
                'Chronic Disease Management',
              ],
            },
            {
              borderColor: '#22c55e',
              title: 'Track 2',
              subtitle: 'AI in Personalized Medicine & Treatment',
              color: '#15803d',
              items: [
                'Genomics & Personalized Care',
                'AI in Drug Discovery',
                'Adaptive Treatment Models',
                'Precision Medicine Case Studies',
                'AI in Robotic Surgery',
              ],
            },
            {
              borderColor: '#8b5cf6',
              title: 'Track 3',
              subtitle: 'Remote Monitoring & Telehealth',
              color: '#7c3aed',
              items: [
                'Continuous Patient Monitoring',
                'AI-Enhanced Telemedicine',
                'IoT & Home Healthcare',
                'Predictive Device Maintenance',
                'Wearables & Remote Care',
              ],
            },
            {
              borderColor: '#fde047',
              title: 'Track 4',
              subtitle: 'Ethical & Social Implications of AI',
              color: '#b45309',
              items: [
                'Data Privacy & Security',
                'Ethical AI in Healthcare',
                'Regulatory & Legal Issues',
                'Building Trust in AI',
                'Social Impact & Equity',
              ],
            },
            {
              borderColor: '#ec4899',
              title: 'Track 5',
              subtitle: 'Brain-Computer Interaction (BCI) in healthcare',
              color: '#a21caf',
              items: [
                'Neuroprosthetics and Assistive Devices',
                'BCIs for Neurological Rehabilitation and Recovery',
                'BCI-Based Communication Systems',
                'BCI-Driven Cognitive Enhancement and Mental Health',
                'Diagnostic and Monitoring Applications of BCIs',
              ],
            },
          ].map((track, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                padding: '1.2rem 1.5rem 1.2rem 2rem',
                borderRadius: '14px',
                background: 'rgba(220,220,220,0.09)',
                borderLeft: `7px solid ${track.borderColor}`,
                boxShadow: '0 2px 10px 0 rgba(0,0,0,0.03)',
                color: '#000',
                marginBottom: 0,
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '1.19rem',
                  fontWeight: 700,
                  marginBottom: '0.32rem',
                  color: '#000',
                  textShadow: 'none'
                }}>{track.title}</h3>
                <h4 style={{
                  fontSize: '1.08rem',
                  fontWeight: 600,
                  marginBottom: '0.46rem',
                  color: track.color,
                  textShadow: 'none'
                }}>{track.subtitle}</h4>
                <ul style={{
                  padding: 0,
                  margin: 0,
                  listStyle: 'disc',
                  listStylePosition: 'inside',
                  color: '#000',
                  fontSize: '1.08rem',
                  lineHeight: 1.7,
                  textShadow: 'none'
                }}>
                  {track.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.16rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            position: 'relative',
            maxWidth: 600,
            margin: '2.6rem auto 0 auto',
            padding: '1.1rem 1.4rem',
            borderRadius: '11px',
            background: '#fef08a',
            borderLeft: '6px solid #fde047',
            color: '#000',
            fontWeight: 600,
            lineHeight: 1.65
          }}
        >
          <p style={{ color: '#000', margin: 0, fontWeight: 600 }}>
            <span style={{ fontWeight: 800, color: '#000' }}>Note:</span> Any papers related to{' '}
            <span style={{ fontWeight: 800, color: '#1d4ed8' }}>AI & ML</span> can be considered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
