'use client'
//hello 
import { motion } from 'framer-motion'

const AboutConference = () => {
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
            About The Conference
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              St Aloysius (Deemed to be University) is organizing two days International Conference on 
              <strong> International Conference on Artificial Intelligence in Healthcare (ICAIH-2025)</strong> 
              which deals with the advanced technologies and optimizing solutions in various disciplines of 
              Computer Science, Artificial Intelligence, Machine Learning and various field of Engineering.
            </p>
            
            <p className="mb-6">
              The objective of the conference is to encourage interdisciplinary Research and promote the usage 
              of Artificial Intelligence in the area of Medicine. This will further help in improving the overall 
              quality of life and hence facilitate the society at large.
            </p>
            
            <p className="mb-6">
              ICAIH-2025 aims to provide opportunity for the researchers to share their ideas and experience with 
              other researchers around the globe. ICAIH-2025 seeks potential research submissions that solicit the 
              state of art applications, innovative methods and analyze unexplored challenges to establish relative 
              solutions.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-blue-800 mb-2">Publication</p>
              <p className="text-blue-700">
                The selected papers after the presentation will be published in the prestigious 
                <strong> SpringerLink CCIS series</strong>.
              </p>
            </div>
            
            <div className="mt-6 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-green-800 mb-2">Conference Mode</p>
              <p className="text-green-700">
                This conference is conducted in <strong>hybrid mode</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutConference
