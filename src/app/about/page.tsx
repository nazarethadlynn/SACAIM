export default function About() {
  return (
    <main className="min-h-screen pt-24">
      <div className="content-section">
        <h1 className="text-4xl font-bold text-center mb-8">About SACAIM</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg">
            The International Conference on Smart Applications of Computational Intelligence and Machine Learning (SACAIM) 
            is a premier academic event that brings together researchers, practitioners, and industry experts from around the world.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Conference Overview</h2>
          <p>
            SACAIM focuses on the latest developments in computational intelligence, machine learning, and their applications 
            in solving real-world problems. The conference provides a platform for sharing research findings, discussing 
            innovative ideas, and fostering collaborations.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Key Topics</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Machine Learning and Deep Learning</li>
            <li>Artificial Intelligence Applications</li>
            <li>Data Mining and Analytics</li>
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Healthcare AI Systems</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Attend SACAIM?</h2>
          <p>
            Join leading experts in AI and machine learning to explore cutting-edge research, network with peers, 
            and discover the latest trends shaping the future of computational intelligence.
          </p>
        </div>
      </div>
    </main>
  )
}
