import axios from "axios";
import { show } from "./models/show";


const BASE_URL = "https://api.tvmaze.com/"

export function seasrchShows(keyword: string) {
  return axios
    .get<{ show: show }[]>( BASE_URL+"search/shows?q=" + keyword)
    .then((response) => response.data.map((item: any) => item.show));
}

export const loadshowdetail = (showId: number) => {
  return axios
    .get("https://api.tvmaze.com/shows/" + showId)
    .then(response => response.data);
}

