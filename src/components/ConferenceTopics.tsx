'use client'

import { motion } from 'framer-motion'

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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Conference Topics
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            Papers at ICAIH-2025 would be in the following topics
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">
                  Track {index + 1}
                </h3>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">
                  {track.title}
                </h4>
                <ul className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <strong>Note:</strong> Any papers related to AI & ML can be considered.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConferenceTopics
