'use client'

import { motion } from 'framer-motion'

const ImportantDates = () => {
  const dates = [
    { event: "Last Date For Paper Submission", date: "TBA" },
    { event: "Notification of Acceptance", date: "2nd March 2025" },
    { event: "Camera Ready Paper Submission", date: "5th March 2025" },
    { event: "Release of Presentation Schedule", date: "10th March 2025" },
    { event: "Conference Dates", date: "20th & 21st, March, 2025" }
  ]

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
            Important Dates
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left py-4 px-4 text-xl font-bold text-blue-800">Events</th>
                    <th className="text-left py-4 px-4 text-xl font-bold text-blue-800">Dates</th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-blue-100 hover:bg-blue-50 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-800 font-medium">{item.event}</td>
                      <td className="py-4 px-4 text-blue-700 font-semibold">{item.date}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImportantDates
