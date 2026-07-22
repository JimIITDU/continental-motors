export type Car = {
  brand: string;
  model: string;
  image: string;
  specs: string[];
};

/* Showcase grid — copy and specs match the Figma exactly */
export const cars: Car[] = [
  { brand: "Tesla", model: "Model 3", image: "/cars/tesla.jpg", specs: ["310 KM/H", "3.3 SEC"] },
  { brand: "Ferrari", model: "256 GTB", image: "/cars/ferrari.jpg", specs: ["450 KM/H", "3.3 SEC", "770HP"] },
  { brand: "Mercedes-Benz", model: "E200", image: "/cars/mercedes.jpg", specs: ["250 KM/H", "3.1 SEC", "470HP"] },
  { brand: "Rolls Royce", model: "Spectre", image: "/cars/rolls.jpg", specs: ["399 KM/H", "3.0 SEC", "430HP"] },
  { brand: "The Porsche", model: "Cayenne", image: "/cars/porsche.jpg", specs: ["650 KM/H", "3.3 SEC", "670HP"] },
  { brand: "GMC", model: "Hummer EV", image: "/cars/hummer.jpg", specs: ["490 KM/H", "3.8 SEC", "690HP"] },
];

export const heroSlides: string[] = ["/cars/hero.jpg"];

export const services = [
  {
    title: "Comprehensive Warranty",
    text: "The only importer in the country providing a full warranty on all imported vehicles.",
    image: "/cars/service-warranty.jpg",
  },
  {
    title: "Exclusive Imports",
    text: "Access to high-grade, high-end luxury vehicles from top global manufacturers.",
    image: "/cars/service-imports.jpg",
  },
  {
    title: "Bespoke Customization",
    text: "Extensive options to tailor your vehicle to your unique personality and taste.",
    image: "/cars/service-custom.jpg",
  },
];

/* TODO verify: spec-to-car pairing approximated from the design */
export const performanceCars: Car[] = [
  { brand: "Ferrari", model: "256 GTB", image: "/cars/perf-1.jpg", specs: ["410 KM/H", "3.3 SEC", "780HP"] },
  { brand: "McLaren", model: "720S", image: "/cars/perf-2.jpg", specs: ["380 KM/H", "3.5 SEC", "550HP"] },
  { brand: "Audi", model: "RS6", image: "/cars/perf-3.jpg", specs: ["420 KM/H", "3.7 SEC", "750HP"] },
];

/* TODO verify: name-to-photo/role pairing approximated from the design */
export const team = [
  { name: "Abrar Fahad", role: "Sales Director", image: "/team/member-1.jpg" },
  { name: "Mostafiz Anowar", role: "Lead Service Advisor", image: "/team/member-2.jpg" },
  { name: "Musa Khan", role: "Marketing Manager", image: "/team/member-3.jpg" },
];
