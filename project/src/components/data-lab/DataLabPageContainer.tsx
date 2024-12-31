"use client"

import Controller from "@/components/data-lab/Controller";
import DataLabProductList from "@/components/data-lab/DataLabProductList";
import LabButton from "@/components/data-lab/LabButton";
import { useDataLabResultStore } from "@/store";
import ResultContainer from "./ResultContainer";

const DataLabPageContainer = () => {
    const {isOpen} = useDataLabResultStore();
    return isOpen ? (
        <ResultContainer/>
    ) : (
        <div>
        <Controller />
        <DataLabProductList />
        <LabButton />
      </div>
    );

};

export default DataLabPageContainer;