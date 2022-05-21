import '../tabs/Expenses';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlinePlus } from "react-icons/ai";

interface ContainerProps { }

const Day: React.FC<ContainerProps> = () => {
  return (
    <>
    <div className='d-table m-auto pb-3'>
      <div className='text-center fs-2'><p>May 1 - May 10</p></div>
        <div className="circle-expenses">
          <p className="fs-1">Month</p>
          </div>
      </div>
      <button type="button" className="btn btn-primary m-3 card-design fs-3" onClick={() => console.log("bruh")}><AiOutlinePlus/></button>

    </>
  );
};  

export default Day;
