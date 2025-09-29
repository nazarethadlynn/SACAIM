'use client'

const AboutConference = () => {
  return (
    <div className="centered-page-content">
      <div className="black-overlay-content">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-white" 
          style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}
        >
          ABOUT THE CONFERENCE
        </h2>
        
        <div className="text-left space-y-6 max-w-5xl mx-auto">
          <p 
            className="text-base leading-relaxed text-white font-medium" 
            style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
          >
            St Aloysius (Deemed to be University) is organizing two days International Conference on 
            <span className="text-blue-200 font-semibold" style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}> International Conference on Artificial Intelligence in Healthcare (ICAIH-2025)</span> 
            which deals with the advanced technologies and optimizing solutions in various disciplines of 
            Computer Science, Artificial Intelligence, Machine Learning and various field of Engineering.
          </p>
          
          <p 
            className="text-base leading-relaxed text-white font-medium" 
            style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
          >
            The objective of the conference is to encourage interdisciplinary Research and promote the usage 
            of <span className="text-yellow-200 font-semibold" style={{color: '#fef08a', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Artificial Intelligence in the area of Medicine</span>. This will further help in improving the overall 
            quality of life and hence facilitate the society at large.
          </p>
          
          <p 
            className="text-base leading-relaxed text-white font-medium" 
            style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
          >
            <span className="text-yellow-200 font-semibold" style={{color: '#fef08a', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>ICAIH-2025</span> aims to provide opportunity for the researchers to share their ideas and experience with 
            other researchers around the globe. <span className="text-yellow-200 font-semibold" style={{color: '#fef08a', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>ICAIH-2025</span> seeks potential research submissions that solicit the 
            state of art applications, innovative methods and analyze unexplored challenges to establish relative 
            solutions.
          </p>
          
          <div 
            className="p-6 rounded-lg border-l-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderLeftColor: '#60a5fa',
              backdropFilter: 'blur(6px)'
            }}
          >
            <p 
              className="font-semibold mb-2" 
              style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
            >
              📚 Publication
            </p>
            <p 
              className="text-white font-medium" 
              style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
            >
              The selected papers after the presentation will be published in the prestigious 
              <span className="text-green-200 font-semibold" style={{color: '#bbf7d0', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}> SpringerLink CCIS series</span>.
            </p>
          </div>
          
          <div 
            className="p-6 rounded-lg border-l-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderLeftColor: '#10b981',
              backdropFilter: 'blur(6px)'
            }}
          >
            <p 
              className="font-semibold mb-2" 
              style={{color: '#bbf7d0', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
            >
              🌐 Conference Mode
            </p>
            <p 
              className="text-white font-medium" 
              style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
            >
              This conference is conducted in <span className="text-purple-200 font-semibold" style={{color: '#ddd6fe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>hybrid mode</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutConference
