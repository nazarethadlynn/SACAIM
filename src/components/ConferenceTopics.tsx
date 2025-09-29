'use client'

const ConferenceTopics = () => {
  const tracks = [
    {
      title: "AI in Diagnostics & Predictive Analytics",
      topics: [
        "Early Disease Detection",
        "AI in Medical Imaging", 
        "Predictive Patient Outcomes",
        "Clinical Decision Support",
        "Chronic Disease Management"
      ]
    },
    {
      title: "AI in Personalized Medicine & Treatment",
      topics: [
        "Genomics & Personalized Care",
        "AI in Drug Discovery",
        "Adaptive Treatment Models", 
        "Precision Medicine Case Studies",
        "AI in Robotic Surgery"
      ]
    },
    {
      title: "Remote Monitoring & Telehealth",
      topics: [
        "Continuous Patient Monitoring",
        "AI-Enhanced Telemedicine",
        "IoT & Home Healthcare",
        "Predictive Device Maintenance",
        "Wearables & Remote Care"
      ]
    },
    {
      title: "Ethical & Social Implications of AI",
      topics: [
        "Data Privacy & Security",
        "Ethical AI in Healthcare",
        "Regulatory & Legal Issues",
        "Building Trust in AI",
        "Social Impact & Equity"
      ]
    },
    {
      title: "Brain-Computer Interaction (BCI) in healthcare",
      topics: [
        "Neuroprosthetics and Assistive Devices",
        "BCIs for Neurological Rehabilitation and Recovery",
        "BCI-Based Communication Systems",
        "BCI-Driven Cognitive Enhancement and Mental Health",
        "Diagnostic and Monitoring Applications of BCIs"
      ]
    }
  ]

  return (
    <div className="centered-page-content">
      <div className="black-overlay-content">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-white" 
          style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}
        >
          CONFERENCE TOPICS
        </h2>
        
        <div className="text-center mb-12">
          <p 
            className="text-xl text-white font-medium" 
            style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
          >
            Papers at <span className="text-yellow-200 font-semibold" style={{color: '#fef08a', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>ICAIH-2025</span> would be in the following topics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-6 border border-gray-400 hover:bg-opacity-50 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <h3 
                className="text-xl font-bold mb-4 text-blue-200 border-b-2 border-blue-400 pb-2" 
                style={{
                  color: '#bfdbfe', 
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                  borderBottomColor: 'rgba(96, 165, 250, 0.6)'
                }}
              >
                Track {index + 1}
              </h3>
              
              <h4 
                className="text-lg font-semibold mb-4 text-white" 
                style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
              >
                {track.title}
              </h4>
              
              <ul className="space-y-3">
                {track.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start">
                    <span 
                      className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" 
                      style={{backgroundColor: '#60a5fa'}}
                    ></span>
                    <span 
                      className="text-white font-medium" 
                      style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
                    >
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div 
            className="text-lg p-6 rounded-lg border-l-4 border-yellow-400"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderLeftColor: '#fbbf24',
              backdropFilter: 'blur(6px)'
            }}
          >
            <p 
              className="text-white font-medium" 
              style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
            >
              <span className="text-yellow-200 font-bold" style={{color: '#fef08a', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Note:</span> Any papers related to <span className="text-blue-200 font-semibold" style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>AI & ML</span> can be considered.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConferenceTopics
