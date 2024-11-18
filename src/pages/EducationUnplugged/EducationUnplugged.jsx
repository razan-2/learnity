import { Building2, Leaf, Gamepad2, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "The Tower",
    icon: Building2,
    links: [
      "/education-unplugged/1-cloud-tower/",
      "/education-unplugged/2-wayfinding-crossway",
      "/education-unplugged/3-wayfinding-temple",
      "/education-unplugged/4-100-things-to-learn",
      "/education-unplugged/5-uncover-direction",
      "/education-unplugged/6-wayfinding-badge",
      '/education-unplugged/7-intention-temple/',
      '/education-unplugged/8-focus-crossway/',
      '/education-unplugged/9-deconstruction/',
      '/education-unplugged/10-progression/',
      '/education-unplugged/11-badgemaking/',
      '/education-unplugged/12-anchor/',
      '/education-unplugged/13-focus-badge/',
      '/education-unplugged/14-context/',
      '/education-unplugged/15-methods-tools/',
      '/education-unplugged/16-sequencing/',
      '/education-unplugged/17-stakescelebration/',
      '/education-unplugged/18-strategy-badge/',
    ],
    text: [
      "The cloud tower",
      "Wayfinding crossway",
      "Know yourself",
      "A thousand things to learn",
      "Uncover your direction",
      "Wayfinding badge",
      "Intention",
      "Focus crossway",
      "Deconstruction",
      "Progression",
      "Badgemaking",
      "Symbolic anchor",
      "Focus badge",
      "Context",
      "Methods & Tools",
      "Sequencing",
      "Stakes and Celebration",
      "Strategy badge",
    ],
  },
  {
    name: "The Roots",
    icon: Leaf,
    links: [
      '/education-unplugged/40-the-roots/',
      '/education-unplugged/41-contemplate-a-radical-shift/',
      '/education-unplugged/42-dissconect-with-environment/',
      '/education-unplugged/43-love-the-process/',
      '/education-unplugged/44-love-yourself/',
      '/education-unplugged/45-resilience-badge/',
    ],
    text: [
      'The Roots',
      'Radical Shift',
      '(Dis)connect with environment',
      'Love the process',
      'Love yourself',
      'Resilience badge',
    ],
  },
  {
    name: "The Arena",
    icon: Gamepad2,
    links: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"],
    text: [
      "The cloud tower",
      "Wayfinding crossway",
      "Know yourself",
      "A thousand things to learn",
      "Uncover your direction",
      "Wayfinding badge",
      "Intention",
      "Focus crossway",
      "Deconstruction",
      "Progression",
      "Badgemaking",
      "Symbolic anchor",
      "Focus badge",
      "Context",
      "Methods & Tools",
      "Sequencing",
      "Stakes and Celebration",
      "Strategy badge",
    ],
  },
  {
    name: "The Fireplace",
    icon: Flame,
    links: ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"],
    text: [
      "The cloud tower",
      "Wayfinding crossway",
      "Know yourself",
      "A thousand things to learn",
      "Uncover your direction",
      "Wayfinding badge",
      "Intention",
      "Focus crossway",
      "Deconstruction",
      "Progression",
      "Badgemaking",
      "Symbolic anchor",
      "Focus badge",
      "Context",
      "Methods & Tools",
      "Sequencing",
      "Stakes and Celebration",
      "Strategy badge",
    ],
  },
];

const EducationUnplugged = () => {
  return (
    <div className="space-y-8 p-6 bg-customWhite flex flex-col items-center">
      {categories.map((category, index) => (
        <div key={category.name} className="relative">
          <div className="flex items-center mb-4 w-full justify-center">
            <category.icon
              className={`mr-3 ${
                index % 2 == 0 ? "text-customOrange" : "text-customBlue"
              }`}
              size={32}
            />
            <h2
              className={`mr-3 font-bold text-3xl ${
                index % 2 == 0 ? "text-customOrange" : "text-customBlue"
              }`}
            >
              {category.name}
            </h2>
          </div>
          <ul className="space-y-2 ml-11 text-center">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex} className="relative group">
                <Link
                  to={link}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  {`# ${linkIndex + 1} ${category.text[linkIndex]}`}
                </Link>
                <span
                  className="absolute left-0 top-1/2 w-0 h-0.5 bg-current transform -translate-y-1/2 group-hover:w-4 transition-all duration-200"
                  style={{ backgroundColor: category.color }}
                ></span>
              </li>
            ))}
          </ul>
          <div
            className="absolute top-0 left-0 w-1 h-full opacity-30"
            style={{ backgroundColor: category.color }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default EducationUnplugged;
