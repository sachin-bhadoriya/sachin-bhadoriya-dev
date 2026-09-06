import React, { useState } from "react";
import "./styles/contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Maximum file size: 5MB
    if (selectedFile.size > 5 * 1024 * 1024) {
      setStatus({
        type: "error",
        message: "File size must be less than 5MB.",
      });

      e.target.value = "";
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setStatus({
      type: "",
      message: "",
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("message", formData.message);

      if (file) {
        data.append("attachment", file);
      }

      // FormSubmit settings
      data.append(
        "_subject",
        "New Contact Form Submission - Sachin Portfolio"
      );

      data.append("_template", "table");
      data.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/ajax/e41550609@gmail.com",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully.",
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setFile(null);

        // Reset file input
        const fileInput = document.getElementById("file");

        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        throw new Error(
          result.message || "Something went wrong."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      data-aos="fade"
      className="p-about-m-c container"
       style={{ paddingBottom: "50px" }}
       id="contact"
    >
      <h2>LET'S CONNECT!</h2>

      <article className="p-contact-article-c">

        {/* Contact Information */}
        <div className="p-contact-data-c">
          <p>
            Whether you have a question, want to start a project,
            or just want to say hi, feel free to drop a message!
          </p>

          <br />

          {/* Email */}
          <p>
            <span>Email: </span>

            <a href="mailto:bhadoriyasachin33@gmail.com">
              bhadoriyasachin33@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p>
            <span>Phone: </span>

            <a href="tel:+918839190794">
              +91 883 919 0794
            </a>
          </p>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sachin-bhadoriya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img
              src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000"
              alt="LinkedIn"
              loading="lazy"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sachin-bhadoriya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <img
              src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000"
              alt="GitHub"
              loading="lazy"
            />
          </a>

          {/* Google Map */}
          <div
            style={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "13px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.938752393206!2d77.29572834712268!3d28.592735451881488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48b866af1ef%3A0x58913d62225c2c0!2sNew%20Ashok%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1786782639138!5m2!1sen!2sin"
              title="New Ashok Nagar, Delhi Map"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        {/* Contact Form */}
        <form
          data-aos="zoom-in"
          onSubmit={handleSubmit}
          className="contact-form"
        >

          {/* Name */}
          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <label htmlFor="contact-number">
            Contact Number
          </label>

          <input
            id="contact-number"
            name="phone"
            type="tel"
            maxLength={10}
            placeholder="9876543210"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Message */}
          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* File Upload */}
          {/* <label htmlFor="file">
            Upload Document
          </label>

          <input
            id="file"
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          /> */}

          {/* Status Message */}
          {status.message && (
            <p
              role="alert"
              style={{
                marginTop: "0px",
                marginBottom: "10px",
                color:
                  status.type === "success"
                    ? "green"
                    : "red",
                    fontWeight: "500",
                    fontSize: "14px",
              }}
            >
              {status.message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
