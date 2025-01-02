import { DataLabItemType } from "./dataLab.type";

export type DataLabResultStoreType = {
  items: DataLabItemType[] | undefined;
  isOpen: boolean;
  sort: string | unknown;
  unit: string;
  setItems: (items: DataLabItemType[] | undefined) => void;
  setIsOpen: (value: boolean) => void;
  setSort: (value: string | unknown) => void;
  setUnit: (value: string) => void;
};
