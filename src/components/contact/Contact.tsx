import "../../App.css";

const Contact = () => {
  return (
    <section className="contactSection" id="contact">
      <h2 className="title">Get In Touch</h2>
      <p>
        If you're interested in working together or just want to say hi, feel
        free to drop a message!
      </p>
      <form className="contactForm">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5}></textarea>
        <button type="submit" className="mbutton">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
