'use client'

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Car, CheckCircle, AlertCircle } from "lucide-react";

type ContactFormProps = {
  locationPage?: string;
}

export const ContactForm = ({ locationPage = 'home' }: ContactFormProps) => {
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [years, setYears] = useState<Array<{value: string, label: string}>>([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYears(Array.from({ length: 50 }, (_, i) => ({
      value: String(currentYear - i),
      label: String(currentYear - i),
    })));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          location_page: locationPage,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSubmitted(true);
      
      // Reset form after 5 seconds
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
      }, 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            We&apos;ll contact you shortly with a cash offer!
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

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-sm py-2.5"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-sm py-2.5"
          />
        </div>

        <Input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
          className="text-sm py-2.5"
        />

        <div className="grid grid-cols-3 gap-3">
          <Input
            type="text"
            name="make"
            placeholder="Make *"
            value={formData.make}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-sm py-2.5"
          />
          <Input
            type="text"
            name="model"
            placeholder="Model *"
            value={formData.model}
            onChange={handleChange}
            required
            disabled={loading}
            className="text-sm py-2.5"
          />
          <Select
            name="year"
            options={years}
            value={formData.year}
            onChange={handleChange}
            placeholder="Year *"
            required
            disabled={loading}
            className="text-sm py-2.5"
          />
        </div>

        <Select
          name="condition"
          options={conditions}
          value={formData.condition}
          onChange={handleChange}
          placeholder="Vehicle Condition *"
          required
          disabled={loading}
          className="text-sm py-2.5"
        />

        <Textarea
          name="message"
          placeholder="Additional details (mileage, issues, etc.)"
          value={formData.message}
          onChange={handleChange}
          rows={2}
          disabled={loading}
          className="text-sm py-2.5"
        />

        <Button 
          type="submit" 
          size="md" 
          fullWidth 
          className="text-base"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Get My Cash Offer Now'}
        </Button>

        <p className="text-center text-xs text-gray-500">
          By submitting, you agree to be contacted by our team
        </p>
      </form>
    </div>
  );
};
