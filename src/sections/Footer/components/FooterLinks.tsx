import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <section className="relative box-border caret-transparent w-full mt-10 mb-[30px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1290px] mx-auto md:flex-nowrap">
        <FooterColumn
          title="Explore"
          variant="explore"
          links={[
            { href: "https://sellmycars.com.au/new/", text: "Home" },
            { href: "https://sellmycars.com.au/new/company/", text: "Company" },
            { href: "https://sellmycars.com.au/new/faq/", text: "Faq" },
            {
              href: "https://sellmycars.com.au/new/contact-us/",
              text: "Contact",
            },
            {
              href: "https://sellmycars.com.au/new/how-to-sell-a-car/",
              text: "How to sell a car",
            },
          ]}
        />
        <FooterColumn
          title="Quick Contact"
          variant="contact"
          links={[
            {
              href: "tel://1800 885 882",
              text: "1800 885 882",
              icon: "https://c.animaapp.com/mh5qprntqjweLB/assets/icon-6.svg",
            },
            {
              href: "mailto://info@sellmycars.com.au",
              text: "info@sellmycars.com.au",
              icon: "https://c.animaapp.com/mh5qprntqjweLB/assets/icon-7.svg",
            },
          ]}
        />
        <FooterColumn
          title="Follow Us"
          variant="social"
          socialLinks={[
            {
              href: "https://www.facebook.com/Sydneycarsforcash",
              icon: "https://c.animaapp.com/mh5qprntqjweLB/assets/icon-8.svg",
            },
          ]}
        />
      </div>
    </section>
  );
};
