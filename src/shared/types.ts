export const SelectedPage = {
  Home: "home",
  Story: "ourstory",
  Details: "thedetails",
  Registry: "registry",
  Faqs: "faqs",
  RSVP: "rsvp",
} as const;

export type SelectedPage = (typeof SelectedPage)[keyof typeof SelectedPage];

export type PageProps = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage?: SelectedPage;
};
