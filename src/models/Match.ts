export default interface Match {
  id: number;
  name: string;
  description?: string;
  photo?: string;
  createdAt: Date;
  expiredAt: Date;
  options?: Option[]
}

interface Option  {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  status: number;
  odd: number;
}