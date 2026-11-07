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
    <section className="scroll-mt-6 pt-12 md:pt-20" id="Contact">
      <div className="mx-4 grid max-w-6xl gap-12 rounded-md bg-white p-6 shadow-lg sm:mx-8 sm:p-8 lg:mx-auto lg:grid-cols-2 lg:gap-16 lg:p-12">
        <div>
          <h2 className="text-4xl font-bold lg:text-5xl"><span className="mr-2 font-mono text-terminal" aria-hidden="true">~/</span>Get In Touch</h2>
          <p className="mt-6 max-w-prose text-gray-700 lg:mt-10">
            Need a penetration test, an Active Directory assessment, or a second set of eyes on your web application?
            Get in touch to discuss scope and rules of engagement. All testing is carried out only with written authorization.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3">
              <MapPin className="flex-none" />
              <span>Addis Ababa, Ethiopia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="flex-none" />
              <a href="tel:+2519245695" className="hover:underline">(+251) 924 5695</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="flex-none" />
              <a href="mailto:Kerim.Tarik.Qe2282@gmail.com" className="break-all hover:underline">Kerim.Tarik.Qe2282@gmail.com</a>
            </li>
          </ul>

          <div className="mt-8 flex gap-2">
            <Link href={"#"} aria-label="X" className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-gray-100">
              <X className="h-6 w-6" />
            </Link>
            <Link href={"#"} aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-gray-100">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href={"#"} aria-label="Github" className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-gray-100">
              <Github className="h-6 w-6" />
            </Link>
            <Link href={"#"} aria-label="Linkedin" className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-gray-100">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-3xl font-bold lg:text-4xl">Send me a message</h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="h-12 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-base"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="h-12 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-base"
              required
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="h-12 w-full rounded-lg border border-gray-300 bg-gray-50 px-4 text-base"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="min-h-[9rem] w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-r bg-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none hover:bg-terminal focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-base px-6 py-3 mt-2 w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-gray-700">{status}</p>}
        </div>
      </div>

      <footer className="mt-16 flex min-h-16 items-center justify-center bg-black px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:min-h-20">
        <p className="text-center text-white">© Kerim Tarik {new Date().getFullYear()}. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
