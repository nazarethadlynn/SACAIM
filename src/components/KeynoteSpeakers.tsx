'use client';

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Prof. Tad Gonsalves",
      title: "Professor",
      institution:
        "Dept of Information and Communication Science Faculty of Science and Technology, Sophia University",
    },
    {
      name: "Dr. Ludwig Simone",
      title: "Professor and Chair",
      institution: "Dept. of Computer Science North Dakota State University",
    },
    {
      name: "Dr. Damodar Reddy Edla",
      title: "Associate Professor & Dean",
      institution:
        "Department of Computer Science & Engineering National Institute of Technology (NIT) Goa",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        minHeight: "450px",
        boxSizing: "border-box",
        overflow: "hidden",
        padding: "0",
        backgroundColor: "#fff", // white full overlay background
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100%",
          backgroundColor: "#fff", // white overlay
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
       <h2
  className="text-4xl font-bold text-center mb-12"
  style={{
    marginTop: "2rem",
    marginBottom: "2rem",
    color: "#111",
    textShadow: "2px 2px 6px #ededed",
    textAlign: "center",  // Add this
  }}
>
  KEYNOTE SPEAKERS
</h2>


        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "2rem",
            width: "100%",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              style={{
                flex: "1",
                textAlign: "center",
                minWidth: "280px",
                maxWidth: "350px",
                color: "#111",
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  margin: "0 auto 1rem auto",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#d1d5db",
                  border: "2px solid #9ca3af",
                }}
              >
                <img
                  src="/images/speakers/default.jpg"
                  alt={speaker.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `
                      <div style="width: 100%; height: 100%; background-color: #d1d5db; display: flex; align-items: center; justify-content: center;">
                        <div style="text-align: center;">
                          <div style="width: 40px; height: 40px; background-color: #4b5563; border-radius: 50%; margin: 0 auto 8px auto;"></div>
                          <div style="width: 56px; height: 56px; background-color: #4b5563; border-radius: 28px 28px 0 0; margin: 0 auto;"></div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              <div style={{ marginTop: "0.5rem" }}>
                <h3
                  className="text-xl font-bold"
                  style={{ marginBottom: "0.25rem", color: "#222" }}
                >
                  {speaker.name}
                </h3>
                <p
                  className="text-sm font-medium italic"
                  style={{ marginBottom: "0.5rem", color: "#444" }}
                >
                  {speaker.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#222" }}>
                  {speaker.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
