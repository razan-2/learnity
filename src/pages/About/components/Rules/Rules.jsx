import React from 'react';
import { motion } from 'framer-motion';

const rulesAndPrinciples = [
  { id: 1, text: "Libertatea mea se termină unde începe libertatea ta!" },
  { id: 2, text: "Principiul celor două picioare Folosește-ți cele două picioare să te deplasezi din contextele care nu îți aduc valoare către cele care te ajută cu adevărat." },
  { id: 3, text: "Am responsabilitate față de alegerile și de învățarea mea, dar și față de ceilalți." },
  { id: 4, text: "Ne bucurăm împreună de comunitate și colaborăm pentru a face lucruri faine." },
  { id: 5, text: "Suntem egali și corecți unii față de ceilalți." },
  { id: 6, text: "Nu tolerăm niciun fel de discriminare (rasism, misoginie homofobie, transfobie etc) ."}
];

const colors = ['#05be9e', '#F8A12E', '#2f2f27'];

export default function RulesAndPrinciples() {
  return (
    <section className="py-16 bg-[#F0E6DD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2f2f27]">Principii & Valori</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rulesAndPrinciples.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="h-4"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
              <div className="p-6">
                <p className="text-lg font-semibold text-[#2f2f27] mb-2">Rule #{item.id}</p>
                <p className="text-[#2f2f27]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}