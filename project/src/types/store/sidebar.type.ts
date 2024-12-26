export type SidebarStoreType = {
  isOpen: boolean;
  items: item[];
  setItem: (index : number) => void;
  open: () => void;
  close: () => void;
};

type item = {
  text:string;
  isSelect:boolean;
  query:string;
};
