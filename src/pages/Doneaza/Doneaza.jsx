import React from "react";
import { Mail, Phone } from "lucide-react";

const DonationPage = () => {
  return (
    <div className="min-h-screen bg-[#F0E6DD] text-[#2f2f27]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-12 text-[#05be9e] font-bangers tracking-widest">
          Donate to Learnity
        </h1>

        {/* Why should you donate? section */}
        <section className="mb-16 bg-white rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-[#F8A12E] font-bangers tracking-widest">
            Why should you donate?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4 leading-relaxed font-arima">
                Your donation to Learnity helps us continue our mission of
                providing accessible, high-quality education to learners
                worldwide. By supporting us, you're investing in the future of
                education and empowering individuals to reach their full
                potential.
              </p>
              <p className="text-lg leading-relaxed font-arima">
                Every contribution, no matter the size, makes a significant
                impact on our ability to develop new courses, improve our
                platform, and support our growing community of learners.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Students learning"
                className="rounded-3xl shadow-md transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* What will your money be used for? section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#F8A12E] text-center font-bangers tracking-widest">
            What will your money be used for?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Course Development", icon: "📚" },
              { title: "Technology Improvements", icon: "💻" },
              { title: "Scholarships", icon: "🎓" },
              { title: "Research and Innovation", icon: "🔬" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3 flex items-center font-bangers tracking-widest">
                  <span className="text-4xl mr-3">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="text-lg font-arima">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How can you donate? section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#F8A12E] text-center font-bangers tracking-widest">
            How can you donate?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Online Donation",
                steps: [
                  "Visit our secure online donation portal",
                  "Choose your donation amount",
                  "Select one-time or recurring donation",
                  "Fill in your payment details",
                  "Review and confirm your donation",
                ],
              },
              {
                title: "Bank Transfer",
                steps: [
                  'Contact our finance department for bank details", "Set up the transfer with your bank", "Use "Donation" as the payment reference", "Send us a confirmation email after the transfer", "Receive a tax receipt from our team',
                ],
              },
            ].map((method, index) => (
              <div
                key={`donation-method-${index}`}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#05be9e] font-bangers tracking-widest">
                  {method.title}
                </h3>
                <ol className="list-decimal list-inside space-y-2 font-arima">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-lg">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* Contact icons */}
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:donate@learnity.com"
            className="flex items-center text-[#05be9e] hover:text-[#F8A12E] transition-colors duration-300"
            aria-label="Email us"
          >
            <Mail className="mr-2 h-6 w-6" />
            <span className="text-lg">donate@learnity.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center text-[#05be9e] hover:text-[#F8A12E] transition-colors duration-300"
            aria-label="Call us"
          >
            <Phone className="mr-2 h-6 w-6" />
            <span className="text-lg">+1 (234) 567-890</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
