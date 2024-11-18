export default function Component() {
    return (
      <div className="relative w-full mx-auto p-8 bg-[#F0E6DD] min-h-[600px]">
        <div className="relative flex justify-between items-center">
          {/* Curved connecting lines */}
          <svg className="absolute w-full h-full top-0 left-0 z-0" viewBox="0 0 800 300">
            <path
              d="M150 150 Q 400 50, 650 150"
              fill="none"
              stroke="#05be9e"
              strokeWidth="4"
              strokeDasharray="8,8"
            />
            <path
              d="M150 150 Q 400 250, 650 150"
              fill="none"
              stroke="#F8A12E"
              strokeWidth="4"
              strokeDasharray="8,8"
            />
          </svg>
          
          {/* Fluent Section */}
          <div className="relative z-10 transform hover:-translate-y-2 transition-transform">
            <div className="bg-[#05be9e] text-white p-6 rounded-[2rem] w-56 h-56 flex flex-col justify-center items-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Fluent</h2>
              <p className="text-sm text-center">
                Poți să vorbești despre proiectele tale de lucru, despre ce vrei să faci și despre rezultate.
              </p>
            </div>
          </div>
  
          {/* Fireste Section */}
          <div className="relative z-10 transform hover:-translate-y-2 transition-transform mt-20">
            <div className="bg-[#F8A12E] text-[#2f2f27] p-6 rounded-[2rem] w-56 h-56 flex flex-col justify-center items-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Firește</h2>
              <p className="text-sm text-center">
                Cu multă încredere și cu un limbaj precis spui ce trebuie să faci.
              </p>
            </div>
          </div>
  
          {/* Master Section */}
          <div className="relative z-10 transform hover:-translate-y-2 transition-transform">
            <div className="bg-[#2f2f27] text-white p-6 rounded-[2rem] w-56 h-56 flex flex-col justify-center items-center shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Master</h2>
              <p className="text-sm text-center">
                Ști să-ți gestionezi vocea pentru a fi fluent în orice situație.
              </p>
            </div>
          </div>
        </div>
  
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-20 w-8 h-8 rounded-full bg-[#05be9e] opacity-20"></div>
          <div className="absolute bottom-10 right-20 w-12 h-12 rounded-full bg-[#F8A12E] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-[#2f2f27] opacity-20"></div>
        </div>
      </div>
    )
  }