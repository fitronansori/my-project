const navlinks = [
  {
    id: 1,
    name: "Home",
    type: "link",
  },
  {
    id: 2,
    name: "Articles",
    type: "link",
  },
  {
    id: 3,
    name: "Pages",
    type: "dropdown",
    dropdown: [
      {
        id: 1,
        name: "About",
      },
      {
        id: 2,
        name: "Contact",
      },
    ],
  },
  {
    id: 4,
    name: "Pricing",
    type: "link",
  },
  {
    id: 5,
    name: "Faq",
    type: "link",
  },
];

export { navlinks };
