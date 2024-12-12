import { useState } from "react";
import axios from "axios";
import { MapPin, Phone, Mail, Github, Linkedin, Instagram, X } from "lucide-react";
import Link from "next/link";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("/api/send-email", formData);

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        setStatus(`Message sent successfully!`); //TODO fix this 
      } else {
        // Network or other error
        setStatus("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="lg:h-[90vh] h-[100vh] relative lg:top-0 top-[-15vh] " id="Contact">
      <div className="lg:w-[80vw] w-[90vw] lg:h-[80vh] bg-white relative lg:left-[10vw] left-[5vw] rounded-md top-[6vh] lg:top-[4vh] flex flex-col lg:flex-row p-6 lg:p-10 shadow-lg">
        <div className="lg:w-[40vw] w-full mb-10 lg:mb-0">
          <p className="font-bold text-4xl lg:text-5xl">Get In Touch</p>
          <p className="mt-8 lg:mt-16 lg:w-[35vw] text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, modi itaque! Id atque alias, dicta excepturi aspernatur necessitatibus temporibus
            qui quam, consectetur fugit laboriosam harum quisquam incidunt expedita vero. Ipsam?
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-2">
              <MapPin />
              <p>Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone />
              <p>(+251) 924 5695</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail />
              <p>Kerim.Tarik.Qe2282@gmail.com</p>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <Link href={"#"}>
              <X className="w-6 h-6" />
            </Link>
            <Link href={"#"}>
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href={"#"}>
              <Github className="w-6 h-6" />
            </Link>
            <Link href={"#"}>
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="lg:w-[40vw] w-full">
          <p className="font-bold text-3xl lg:text-4xl mb-6">Send me a message</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-gray-50 border border-gray-300 h-12 rounded-lg w-full px-4"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-gray-50 border border-gray-300 h-12 rounded-lg w-full px-4"
              required
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-gray-50 border border-gray-300 h-12 rounded-lg w-full px-4"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-gray-50 border border-gray-300 h-36 rounded-lg w-full px-4"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-r bg-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-8"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-gray-700">{status}</p>}
        </div>
      </div>

      <div className="h-16 lg:h-20 bg-black flex justify-center items-center mt-16 lg:mt-16">
        <p className="text-white text-center">© Kerim Tarik Developments 2024 all Rights Reserved</p>
      </div>
    </div>
  );
}

export default Contact;
