export type InputProps = {
  label?: string;
  type?: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // onChange 이벤트 핸들러
};
