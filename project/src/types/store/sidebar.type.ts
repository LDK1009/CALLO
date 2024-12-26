export type SidebarStoreType = {
  isOpen: boolean;
  isSecondOpen:boolean;
  items: item[];
  items2: item[];
  setItem: (index : number) => void;
  setItem2: (index : number) => void;
  open: () => void;
  close: () => void;
  secondOpen: () => void;
  secondClose: () => void;
};

type item = {
  text:string;
  isSelect:boolean;
  query:string;
};
