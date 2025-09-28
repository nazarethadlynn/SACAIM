'use client'

import { motion } from 'framer-motion'

const Conveners = () => {
  const conveners = [
    {
      name: "Dr Hemalatha N",
      title: "Dean",
      institution: "School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT"
    },
    {
      name: "Dr Rakesh Kumar",
      title: "Associate Professor, HOD (MSc BDA & Data Science)",
      institution: "School of Information Science & Technology St Aloysius (Deemed to be University) Institute of Management and IT"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Conveners
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {conveners.map((convener, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-green-800">
                    {convener.name.split(' ')[1]?.[0] || convener.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{convener.name}</h3>
                <p className="text-lg text-green-600 mb-2">{convener.title}</p>
                <p className="text-gray-600 text-sm">{convener.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Conveners
