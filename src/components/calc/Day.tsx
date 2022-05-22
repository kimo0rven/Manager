import "../tabs/Expenses";
import "bootstrap/dist/css/bootstrap.min.css";

interface ContainerProps {}

const Day: React.FC<ContainerProps> = () => {
  return (
    <>
      <div className="d-table m-auto pb-3">
        <div className="text-center fs-2">
          <p>May 1 - May 10</p>
        </div>
        <div className="circle-expenses">
          <p className="fs-1">Day</p>
        </div>
      </div>
    </>
  );
};

export default Day;
