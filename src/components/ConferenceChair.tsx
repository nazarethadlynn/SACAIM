'use client'

import { motion } from 'framer-motion'

const ConferenceChair = () => {
  const chairs = [
    {
      name: "Dr. Shreekumar",
      title: "Professor",
      institution: "Mangalore Institute of Technology & Engineering, Moodabidre"
    },
    {
      name: "Dr. Raghavendra Ramachandra", 
      title: "Professor",
      institution: "Dept. of Information Security & Communication NTNU, Norway"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Conference Chair
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {chairs.map((chair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-800">
                    {chair.name.split(' ')[1]?.[0] || chair.name[0]}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{chair.name}</h3>
                <p className="text-lg text-blue-600 mb-2">{chair.title}</p>
                <p className="text-gray-700">{chair.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConferenceChair
