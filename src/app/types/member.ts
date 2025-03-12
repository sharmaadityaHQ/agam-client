export interface IMemberDetail {
  name: string;
  role: string;
  tenure: string;
  bio: {
    overview: string;
    extended_bio: string[];
  };
  social_links: Array<{
    platform: string;
    url: string;
  }>;
  gear?: {
    logos: Array<{
      brand: string;
      logo_url: string;
    }>;
  };
  images: {
    profile: string;
    featured: string;
    background: string;
  };
  trivia?: {
    did_you_know: string;
  };
  slug: string;
  page_metadata?: {
    last_updated: string;
    canonical_url: string;
    schema_type: string;
  };
}
