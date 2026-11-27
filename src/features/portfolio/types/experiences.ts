export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: {
    start: string;
    end?: string;
  };
  employmentType?: string;
  skills?: string[];
};

export type Experience = {
  id: string;
  companyName: string;
  companyLogo?: string;
  companyWebsite?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
};
