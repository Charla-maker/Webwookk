import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Car, CheckCircle } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    make: "",
    model: "",
    year: "",
    condition: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        make: "",
        model: "",
        year: "",
        condition: "",
        message: "",
      });
    }, 3000);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => ({
    value: String(currentYear - i),
    label: String(currentYear - i),
  }));

  const conditions = [
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
    { value: "poor", label: "Poor" },
    { value: "not-running", label: "Not Running" },
  ];

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-secondary">Thank You!</h3>
          <p className="text-base text-gray-600">
            We'll contact you shortly with a cash offer!
          </p>
          <p className="text-sm text-gray-500">
            Response time: <strong>Within 2 hours</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-2">
          <Car className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-secondary mb-1">Get Your Cash Offer</h3>
        <p className="text-sm text-gray-600">Fill out the form for an instant quote</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-sm py-2.5"
            />
          </div>

          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="text-sm py-2.5"
            />
          </div>
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-sm py-2.5"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <Input
              type="text"
              name="make"
              placeholder="Make *"
              value={formData.make}
              onChange={handleChange}
              required
              className="text-sm py-2.5"
            />
          </div>

          <div>
            <Input
              type="text"
              name="model"
              placeholder="Model *"
              value={formData.model}
              onChange={handleChange}
              required
              className="text-sm py-2.5"
            />
          </div>

          <div>
            <Select
              name="year"
              options={years}
              value={formData.year}
              onChange={handleChange}
              placeholder="Year *"
              required
              className="text-sm py-2.5"
            />
          </div>
        </div>

        <div>
          <Select
            name="condition"
            options={conditions}
            value={formData.condition}
            onChange={handleChange}
            placeholder="Vehicle Condition *"
            required
            className="text-sm py-2.5"
          />
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Additional details (mileage, issues, etc.)"
            value={formData.message}
            onChange={handleChange}
            rows={2}
            className="text-sm py-2.5"
          />
        </div>

        <Button type="submit" size="md" fullWidth className="text-base">
          Get My Cash Offer Now
        </Button>

        <p className="text-center text-xs text-gray-500">
          By submitting, you agree to be contacted by our team
        </p>
      </form>
    </div>
  );
};
