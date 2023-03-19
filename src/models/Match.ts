import Option from "./Option";

export default interface Match {
  id: number;
  name: string;
  description?: string;
  photo?: string;
  createdAt: Date;
  expiredAt: Date;
  options?: Option[]
}