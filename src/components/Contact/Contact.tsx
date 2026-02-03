import { Heading } from "@components/index";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Github,
  Twitter,
  Youtube,
  Linkedin,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container max-w-7xl mx-auto px-6">
        <Heading title="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-16">
          {/* Form Side */}
          <div className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
            <div className="bg-[#0f0f0f]/80 backdrop-blur-2xl rounded-[23px] p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send me a <span className="text-primary">Message</span>
              </h3>
              <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                Have a specific inquiry or just want to say hi? Fill out the
                form below and I'll get back to you as soon as possible.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="resize-none bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all duration-300"
                  />
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-black font-bold hover:shadow-[0_0_7px_#a7d129] transition-all duration-300 active:scale-[0.98] group">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:pt-10 space-y-12">
            <div className="space-y-8">
              <h4 className="text-xl font-semibold text-white">
                Contact Information
              </h4>
              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="text-primary w-5 h-5" />}
                  text="zh917694@gmail.com"
                />
                <ContactItem
                  icon={<Phone className="text-primary w-5 h-5" />}
                  text="+20 128 963 4891"
                />
                <ContactItem
                  icon={<MapPin className="text-primary w-5 h-5" />}
                  text="Egypt, Cairo"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    icon: <Linkedin />,
                    color: "hover:bg-[#0A66C2]",
                    link: "#",
                  },
                  { icon: <Github />, color: "hover:bg-[#333]", link: "#" },
                  {
                    icon: <Facebook />,
                    color: "hover:bg-[#1877F2]",
                    link: "#",
                  },
                  { icon: <Twitter />, color: "hover:bg-[#1DA1F2]", link: "#" },
                  { icon: <Youtube />, color: "hover:bg-[#FF0000]", link: "#" },
                ].map((social, idx) => (
                  <Link
                    key={idx}
                    to={social.link}
                    className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-500 hover:text-white hover:-translate-y-2 ${social.color} hover:shadow-xl`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
