'use client'

import React from 'react';

const AboutConference = () => {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '600px',
        color: '#000',
        fontWeight: 600,
        fontSize: '1.08rem',
        lineHeight: 1.7,
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
        background: '#ffffff',
        boxSizing: 'border-box',
        padding: '4rem 2rem', // ONLY internal padding
        letterSpacing: '0.01em',
        textShadow: 'none',
        margin: 0, // ZERO margin
        border: 'none',
        outline: 'none',
        display: 'block',
      }}
    >
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          color: '#000',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            margin: '0 0 2rem 0', // Only bottom margin
            color: '#1e40af',
            textShadow: 'none',
          }}
        >
          ABOUT THE CONFERENCE
        </h2>
        
        <p style={{ margin: '0 0 1.25rem 0', color: '#374151', fontWeight: 600 }}>
          St Aloysius (Deemed to be University) is organizing two days International Conference on <strong>
          International Conference on Artificial Intelligence in Healthcare (ICAIH-2025)</strong> which deals
          with the advanced technologies and optimizing solutions in various disciplines of Computer Science,
          Artificial Intelligence, Machine Learning and various fields of Engineering.
        </p>
        <p style={{ margin: '0 0 1.25rem 0', color: '#374151', fontWeight: 600 }}>
          The objective of the conference is to encourage interdisciplinary Research and promote the usage of Artificial Intelligence in the area of Medicine. This will further help in improving the overall quality of life and hence facilitate the society at large.
        </p>
        <p style={{ margin: '0 0 1.5rem 0', color: '#374151', fontWeight: 600 }}>
          ICAIH-2025 aims to provide opportunity for the researchers to share their ideas and experience with other researchers around the globe. ICAIH-2025 seeks potential research submissions that solicit the state of art applications, innovative methods and analyze unexplored challenges to establish relative solutions.
        </p>
        
        <div style={{ margin: '2.5rem 0 0 0' }}>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            margin: '0 0 0.8rem 0',
            color: '#1e40af',
            textShadow: 'none'
          }}>
            Publication
          </h3>
          <p style={{ color: '#374151', margin: 0, fontWeight: 500 }}>
            The selected papers after the presentation will be published in the prestigious SpringerLink CCIS series.
          </p>
        </div>
        
        <div style={{ margin: '2.5rem 0 0 0' }}>
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            margin: '0 0 0.8rem 0',
            color: '#1e40af',
            textShadow: 'none'
          }}>
            Conference Mode
          </h3>
          <p style={{ color: '#374151', margin: 0, fontWeight: 500 }}>
            This conference is conducted in <strong style={{ color: '#1e40af' }}>hybrid mode</strong>.
          </p>
        </div>
        
        <div style={{ margin: '2.7rem 0 0 0' }}>
          <h2
            style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              margin: '0 0 2rem 0',
              color: '#1e40af',
              textShadow: 'none'
            }}
          >
            CONFERENCE TOPICS
          </h2>
          <p style={{
            fontSize: '1.075rem',
            margin: '0 0 2.2rem 0',
            color: '#374151',
            fontWeight: 600,
            textShadow: 'none'
          }}>
            Papers at ICAIH-2025 would be in the following topics
          </p>
        </div>
        
        {/* FULL WIDTH TOPICS SECTION */}
        <div style={{
          textAlign: 'left',
          width: '100%'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            margin: '0 0 1rem 0',
            color: '#374151',
            textShadow: 'none'
          }}>
            Topics covered (but are not limited to) in the conference are as follows:
          </h3>
          
          {/* Track 1 */}
          <div style={{ margin: '0 0 2rem 0' }}>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              margin: '0 0 0.5rem 0',
              color: '#dc2626',
              textShadow: 'none'
            }}>
              Track 1
            </h4>
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              margin: '0 0 0.75rem 0',
              color: '#374151',
              textShadow: 'none'
            }}>
              AI in Diagnostics & Predictive Analytics
            </h5>
            <ul style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.6,
              textShadow: 'none'
            }}>
              {[
                'Early Disease Detection',
                'AI in Medical Imaging',
                'Predictive Patient Outcomes',
                'Clinical Decision Support',
                'Chronic Disease Management'
              ].map((item, i) => (
                <li key={i} style={{ margin: '0 0 0.5rem 0', paddingLeft: '1rem' }}>
                  <span style={{ color: '#374151', marginRight: '0.5rem' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Track 2 */}
          <div style={{ margin: '0 0 2rem 0' }}>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              margin: '0 0 0.5rem 0',
              color: '#dc2626',
              textShadow: 'none'
            }}>
              Track 2
            </h4>
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              margin: '0 0 0.75rem 0',
              color: '#374151',
              textShadow: 'none'
            }}>
              AI in Personalized Medicine & Treatment
            </h5>
            <ul style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.6,
              textShadow: 'none'
            }}>
              {[
                'Genomics & Personalized Care',
                'AI in Drug Discovery',
                'Adaptive Treatment Models',
                'Precision Medicine Case Studies',
                'AI in Robotic Surgery'
              ].map((item, i) => (
                <li key={i} style={{ margin: '0 0 0.5rem 0', paddingLeft: '1rem' }}>
                  <span style={{ color: '#374151', marginRight: '0.5rem' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Track 3 */}
          <div style={{ margin: '0 0 2rem 0' }}>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              margin: '0 0 0.5rem 0',
              color: '#dc2626',
              textShadow: 'none'
            }}>
              Track 3
            </h4>
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              margin: '0 0 0.75rem 0',
              color: '#374151',
              textShadow: 'none'
            }}>
              Remote Monitoring & Telehealth
            </h5>
            <ul style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.6,
              textShadow: 'none'
            }}>
              {[
                'Continuous Patient Monitoring',
                'AI-Enhanced Telemedicine',
                'IoT & Home Healthcare',
                'Predictive Device Maintenance',
                'Wearables & Remote Care'
              ].map((item, i) => (
                <li key={i} style={{ margin: '0 0 0.5rem 0', paddingLeft: '1rem' }}>
                  <span style={{ color: '#374151', marginRight: '0.5rem' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Track 4 */}
          <div style={{ margin: '0 0 2rem 0' }}>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              margin: '0 0 0.5rem 0',
              color: '#dc2626',
              textShadow: 'none'
            }}>
              Track 4
            </h4>
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              margin: '0 0 0.75rem 0',
              color: '#374151',
              textShadow: 'none'
            }}>
              Ethical & Social Implications of AI
            </h5>
            <ul style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.6,
              textShadow: 'none'
            }}>
              {[
                'Data Privacy & Security',
                'Ethical AI in Healthcare',
                'Regulatory & Legal Issues',
                'Building Trust in AI',
                'Social Impact & Equity'
              ].map((item, i) => (
                <li key={i} style={{ margin: '0 0 0.5rem 0', paddingLeft: '1rem' }}>
                  <span style={{ color: '#374151', marginRight: '0.5rem' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Track 5 */}
          <div style={{ margin: '0 0 0 0' }}>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              margin: '0 0 0.5rem 0',
              color: '#dc2626',
              textShadow: 'none'
            }}>
              Track 5
            </h4>
            <h5 style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              margin: '0 0 0.75rem 0',
              color: '#374151',
              textShadow: 'none'
            }}>
              Brain-Computer Interaction (BCI) in healthcare
            </h5>
            <ul style={{
              padding: 0,
              margin: 0,
              listStyle: 'none',
              color: '#374151',
              fontSize: '1rem',
              lineHeight: 1.6,
              textShadow: 'none'
            }}>
              {[
                'Neuroprosthetics and Assistive Devices',
                'BCIs for Neurological Rehabilitation and Recovery',
                'BCI-Based Communication Systems',
                'BCI-Driven Cognitive Enhancement and Mental Health',
                'Diagnostic and Monitoring Applications of BCIs'
              ].map((item, i) => (
                <li key={i} style={{ margin: '0 0 0.5rem 0', paddingLeft: '1rem' }}>
                  <span style={{ color: '#374151', marginRight: '0.5rem' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
