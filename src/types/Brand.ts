export interface IBrand {
  id: number;
  name: string;
  country: string;
  headquarters: string;
  founder: string;
  founded_year: number;
  sectors: string;
  slogan: string;
  ceo: string;
  image_path: string;
}

export interface IPagination {
  total_records: number;
  total_pages: number;
  current_page: number;
  limit_per_page: number;
}

export interface IBrandsResponse {
  pagination: IPagination;
  data: IBrand[];
}
