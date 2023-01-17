export type show = {
  genres: any;

  id: number;
  name?:string;
  rating: { average?: number };
  image?: {
    medium: string;
    orignal:string
  };
  summary?: string;
  cast:string

};
