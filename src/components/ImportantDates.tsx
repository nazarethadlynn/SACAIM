'use client'

const ImportantDates = () => {
  const dates = [
    { event: "Last Date For Paper Submission", date: "TBA" },
    { event: "Notification of Acceptance", date: "2nd March 2025" },
    { event: "Camera Ready Paper Submission", date: "5th March 2025" },
    { event: "Release of Presentation Schedule", date: "10th March 2025" },
    { event: "Conference Dates", date: "20th & 21st, March, 2025" }
  ]

  return (
    <div className="centered-page-content">
      <div className="black-overlay-content">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" 
          style={{color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}
        >
          IMPORTANT DATES
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-lg p-8 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr 
                    className="border-b-2"
                    style={{borderBottomColor: 'rgba(96, 165, 250, 0.6)'}}
                  >
                    <th 
                      className="text-center py-4 px-4 text-xl font-bold"
                      style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
                    >
                      📅 Events
                    </th>
                    <th 
                      className="text-center py-4 px-4 text-xl font-bold"
                      style={{color: '#bfdbfe', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
                    >
                      📆 Dates
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-opacity-50 transition-colors"
                      style={{
                        borderBottomColor: 'rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                      }}
                    >
                      <td 
                        className="py-4 px-4 font-medium text-center"
                        style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
                      >
                        {item.event}
                      </td>
                      <td 
                        className="py-4 px-4 font-semibold text-center"
                        style={{color: '#fef08a', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}
                      >
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div 
            className="mt-8 p-6 rounded-lg border-l-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderLeftColor: '#10b981',
              backdropFilter: 'blur(6px)'
            }}
          >
            <p 
              className="text-center text-lg font-medium"
              style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)'}}
            >
              📢 <span className="text-green-200 font-semibold" style={{color: '#bbf7d0', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'}}>Important Notice:</span> All deadlines are strictly adhered to. Please ensure timely submissions to avoid any inconvenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportantDates
