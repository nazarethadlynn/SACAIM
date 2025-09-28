'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Contact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <MapPin className="text-blue-600 mt-1 mr-3" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Our Address</h3>
                  <p className="text-gray-700">
                    St Aloysius (Deemed to be University)<br />
                    Institute of Management and IT<br />
                    Beeri, Kotekar, Mangalore-575022
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-start">
                <Phone className="text-green-600 mt-1 mr-3" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Phone</h3>
                  <p className="text-gray-700 mb-2">+91 94958 70533</p>
                  <p className="text-gray-700">+91 98441 98603</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
