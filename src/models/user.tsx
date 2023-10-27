export interface User {
  date: Date;
  email: string;
  id: string;
  name: string;
  nftCids?: string[];
  image: string;
  points?: string;
  publicKeyH?: string;
  role: string;
  surname: string;
  userName?: string;
}