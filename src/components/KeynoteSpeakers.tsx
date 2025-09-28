'use client'

import { motion } from 'framer-motion'

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Tad Gonsalves",
      title: "Professor",
      institution: "Dept of Information and Communication Science Faculty of Science and Technology, Sophia University"
    },
    {
      name: "Dr. Ludwig Simone",
      title: "Professor and Chair",
      institution: "Dept. of Computer Science North Dakota State University"
    },
    {
      name: "Dr. Damodar Reddy Edla",
      title: "Associate Professor & Dean",
      institution: "Department of Computer Science & Engineering National Institute of Technology (NIT) Goa"
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
            Keynote Speakers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-orange-800">
                    {speaker.name.split(' ')[1]?.[0] || speaker.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
                <p className="text-lg text-orange-600 mb-2">{speaker.title}</p>
                <p className="text-gray-600 text-sm">{speaker.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeynoteSpeakers
