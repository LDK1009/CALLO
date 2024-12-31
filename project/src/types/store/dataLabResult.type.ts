import { DataLabItemType } from "./dataLab.type";

export type DataLabResultStoreType = {
  items: DataLabItemType[] | undefined;
  isOpen: boolean;
  setItems: (items: DataLabItemType[] | undefined) => void;
  setIsOpen: (value: boolean) => void;
};
