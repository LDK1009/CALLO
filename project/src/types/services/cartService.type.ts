export type PostCartType = {
  product_id: number | undefined;
  user_id: string;
  created_at?: Date;
};
export type PostCartReturnType = {
  status: number;
  statusText: string;
};
