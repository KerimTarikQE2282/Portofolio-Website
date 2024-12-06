const ExperienceCard = () => {
    return (
      <div className="p-6 bg-black text-white rounded-lg border border-gray-800 shadow-md max-w-sm ml-24">
        <div className="text-purple-500 text-4xl font-bold">2023</div>
        <div className="text-gray-400 text-sm">1 year</div>
        <h2 className="text-xl font-bold mt-4">Junior Full Stack Developer</h2>
        <p className="text-gray-400 mt-1">
          Automotive Industry <span className="text-red-500">•</span> Regensburg, Germany
        </p>
        <p className="text-gray-400 mt-4">
          Currently in vocational training while developing digital tools and applications for the automotive industry.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">→</span> Leading development team of 3 engineers
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">→</span> Developed simulation software for industrial screw controllers
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">→</span> Implemented AI-driven solutions for management systems
          </li>
        </ul>
        <div className="flex gap-2 mt-4">
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">C#</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
        </div>
      </div>
    );
  };
  
  export default ExperienceCard;
  