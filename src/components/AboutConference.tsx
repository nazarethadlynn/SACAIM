'use client'

const AboutConference = () => {
  return (
    <div className="black-overlay-content">
      {/* About The Conference Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          ABOUT THE CONFERENCE
        </h2>
        
        <div className="space-y-6">
          <p className="text-base text-white">
            St Aloysius (Deemed to be University) is organizing two days International Conference on 
            <strong> International Conference on Artificial Intelligence in Healthcare (ICAIH-2025)</strong> which 
            deals with the advanced technologies and optimizing solutions in various disciplines of Computer Science, 
            Artificial Intelligence, Machine Learning and various field of Engineering.
          </p>
          
          <p className="text-base text-white">
            The objective of the conference is to encourage interdisciplinary Research and promote the usage of 
            Artificial Intelligence in the area of Medicine. This will further help in improving the overall quality 
            of life and hence facilitate the society at large.
          </p>
          
          <p className="text-base text-white">
            ICAIH-2025 aims to provide opportunity for the researchers to share their ideas and experience with other 
            researchers around the globe. ICAIH-2025 seeks potential research submissions that solicit the state of 
            art applications, innovative methods and analyze unexplored challenges to establish relative solutions.
          </p>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-sm"></div>
              <h3 className="text-xl font-semibold text-white">Publication</h3>
            </div>
            <p className="text-base text-white">
              The selected papers after the presentation will be published in the prestigious SpringerLink CCIS series.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              <h3 className="text-xl font-semibold text-white">Conference Mode</h3>
            </div>
            <p className="text-base text-white">
              This conference is conducted in <strong>hybrid mode</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Conference Topics Section - Merged in same container with simple design */}
      <div className="border-t border-white/20 pt-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          CONFERENCE TOPICS
        </h2>
        
        <p className="text-lg text-center mb-12 text-white">
          Papers at <span className="text-yellow-200 font-semibold">ICAIH-2025</span> would be in the following topics
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Track 1 */}
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Track 1</h3>
              <h4 className="text-xl font-semibold text-blue-300 mb-4">
                AI in Diagnostics & Predictive Analytics
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Early Disease Detection
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  AI in Medical Imaging
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Predictive Patient Outcomes
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Clinical Decision Support
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Chronic Disease Management
                </li>
              </ul>
            </div>
          </div>

          {/* Track 2 */}
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Track 2</h3>
              <h4 className="text-xl font-semibold text-green-300 mb-4">
                AI in Personalized Medicine & Treatment
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Genomics & Personalized Care
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  AI in Drug Discovery
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Adaptive Treatment Models
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Precision Medicine Case Studies
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  AI in Robotic Surgery
                </li>
              </ul>
            </div>
          </div>

          {/* Track 3 */}
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Track 3</h3>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">
                Remote Monitoring & Telehealth
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Continuous Patient Monitoring
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  AI-Enhanced Telemedicine
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  IoT & Home Healthcare
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Predictive Device Maintenance
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Wearables & Remote Care
                </li>
              </ul>
            </div>
          </div>

          {/* Track 4 */}
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Track 4</h3>
              <h4 className="text-xl font-semibold text-yellow-300 mb-4">
                Ethical & Social Implications of AI
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Data Privacy & Security
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Ethical AI in Healthcare
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Regulatory & Legal Issues
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Building Trust in AI
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Social Impact & Equity
                </li>
              </ul>
            </div>
          </div>

          {/* Track 5 */}
          <div className="space-y-6">
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-4">Track 5</h3>
              <h4 className="text-xl font-semibold text-pink-300 mb-4">
                Brain-Computer Interaction (BCI) in healthcare
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Neuroprosthetics and Assistive Devices
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  BCIs for Neurological Rehabilitation and Recovery
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  BCI-Based Communication Systems
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  BCI-Driven Cognitive Enhancement and Mental Health
                </li>
                <li className="flex items-start gap-2 text-white">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  Diagnostic and Monitoring Applications of BCIs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Note Section */}
        <div className="mt-12 text-center">
          <div className="text-lg p-6 rounded-lg border-l-4 border-yellow-400" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', borderLeftColor: '#fbbf24'}}>
            <p className="text-white font-medium">
              <span className="text-yellow-200 font-bold">Note:</span> Any papers related to <span className="text-blue-200 font-semibold">AI & ML</span> can be considered.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutConference
