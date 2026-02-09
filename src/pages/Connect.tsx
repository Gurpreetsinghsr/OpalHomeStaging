import React from "react";

export function Connect() {
  const emailTo = "Opal.homestyling@gmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const fullMessage = `Hello Opal HomeStaging,\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
    const subject = `New enquiry from ${name || "website"}`;
    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject as string
    )}&body=${encodeURIComponent(fullMessage)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section className="px-6 md:px-10 py-16 max-w-2xl mx-auto">
      <h2 className="text-3xl mb-6 text-center">Contact Us</h2>
      <p className="text-center text-sm mb-8">
        Location: Sydney & Newcastle
        <br />
        Phone: +61 434 321 556
        <br />
        Email: Opal.homestyling@gmail.com
        <br />
        Hours: 7:00 AM - 9:00 PM | Monday - Sunday
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full p-3 bg-transparent border border-[#cfd8c3]"
        />
        <input
          name="email"
          required
          placeholder="Email"
          className="w-full p-3 bg-transparent border border-[#cfd8c3]"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          rows={4}
          className="w-full p-3 bg-transparent border border-[#cfd8c3]"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#25D366] text-white rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2"
        >
          Send Email
        </button>
      </form>
    </section>
  );
}
