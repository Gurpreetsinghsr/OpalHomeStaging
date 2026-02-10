import React, { useState } from "react";

const CONTACT_API_ENDPOINT =
  "http://localhost:4000";

/** ---------- Types ---------- */
type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

/** ---------- Initial State ---------- */
const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

/** ---------- Validation Rules ---------- */
const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone && !/^[0-9+\-()\s]{6,20}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.message.trim()) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
};

export function Connect() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  /** ---------- Handlers ---------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-level error on change
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(CONTACT_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to send your enquiry.");
      }

      setStatus(
        data?.message ||
          "Thanks for your enquiry. We’ll get back to you shortly."
      );
      setValues(initialValues);
      setErrors({});
    } catch (err: any) {
      setStatus(null);
      setErrors({
        message:
          err?.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  /** ---------- UI ---------- */
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
        Hours: 7:00 AM – 9:00 PM | Monday – Sunday
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name */}
        <Input
          name="name"
          placeholder="Name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
        />

        {/* Email */}
        <Input
          name="email"
          placeholder="Email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />

        {/* Phone */}
        <Input
          name="phone"
          placeholder="Phone (optional)"
          value={values.phone}
          error={errors.phone}
          onChange={handleChange}
        />

        {/* Address */}
        <Input
          name="address"
          placeholder="Address (optional)"
          value={values.address}
          onChange={handleChange}
        />

        {/* Message */}
        <Textarea
          name="message"
          placeholder="Message"
          value={values.message}
          error={errors.message}
          onChange={handleChange}
        />

        {status && (
          <p className="text-sm text-green-800 bg-green-50 border border-green-200 rounded-md px-3 py-2">
            {status}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 border border-[#cfd8c3] text-[#2f3e2f] rounded-xl bg-transparent transition hover:bg-[#e5e0d2] disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send Enquiry"}
        </button>
      </form>
    </section>
  );
}

/** ---------- Reusable Inputs (Scalable) ---------- */

function Input({
  name,
  value,
  placeholder,
  error,
  onChange,
}: {
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 bg-transparent border rounded-md ${
          error ? "border-red-400" : "border-[#cfd8c3]"
        }`}
      />
      {error && <p className="text-xs text-red-700 mt-1">{error}</p>}
    </div>
  );
}

function Textarea({
  name,
  value,
  placeholder,
  error,
  onChange,
}: {
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
        className={`w-full p-3 bg-transparent border rounded-md ${
          error ? "border-red-400" : "border-[#cfd8c3]"
        }`}
      />
      {error && <p className="text-xs text-red-700 mt-1">{error}</p>}
    </div>
  );
}
