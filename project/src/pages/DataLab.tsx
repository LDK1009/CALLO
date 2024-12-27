import Controller from "@/components/data-lab/Controller";
import DataLabProductList from "@/components/data-lab/DataLabProductList";
import LabButton from "@/components/data-lab/LabButton";

const DataLab = () => {
    return (
        <div>
            <Controller/>
            <DataLabProductList/>
            <LabButton/>
        </div>
    );
};

export default DataLab;