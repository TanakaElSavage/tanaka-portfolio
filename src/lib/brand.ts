export const brand = {
  name: "TPD Digital Solutions",
  tagline: "Design. Build. Grow.",
  siteUrl: "https://tanaka-portfolio-49qa.vercel.app",
  phone: "+263 774 341 548",
  phoneLink: "+263774341548",
  whatsapp: "263774341548",
  email: "tanakadongo21@gmail.com",
  location: "Zimbabwe",
  github: "https://github.com/TanakaElSavage",
  linkedin: "https://www.linkedin.com/in/tanaka-dongo-965512299/",
};
export const whatsappUrl = (message = "Hi Tanaka, I'd like a free consultation about my business.") =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
