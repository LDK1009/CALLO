export type ModalState = {
  isOpen: boolean;
  title: string | null;
  content: string | null;
  open: ({ title, content }: openFuncParam) => void;
  close: () => void;
};

type openFuncParam = {
  title: string;
  content: string;
};
