//contact2.js

import { useState } from "react";
import emailjs from "emailjs-com";

function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "name is required";
    if (!formData.email.trim()) newErrors.email = "email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "email is invalid";
    if (!formData.message.trim()) newErrors.message = "message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_9qz6vfr",
          "template_default1234",
          formData,
          "qiL6YhnaIdH2_LIoV"
        )

        .then(
          (result) => {
            // Fix: Use 'result' here
            console.log("SUCCESS!", result.status, result.text);
            setSuccessMsg("Message sent successfully ✅");
            setFormData({ name: "", email: "", message: "" }); // Clear form
          },
          (error) => {
            // Fix: Use 'error' here
            console.error("FAILED...", error);
          }
        );
    }
  };

  return (
    <section className="bg-white w-full py-20 px-5">
      <div className="max-w-md mx-auto my-10 p-5 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-5 text-center">Contact Me</h2>

        {successMsg && (
          <p className="text-green-500 text-center">{successMsg}</p>
        )}

        <form
          action="https://formspree.io/f/movnbewe"
          method="POST"
          className="space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact2;
