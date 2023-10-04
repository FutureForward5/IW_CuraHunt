import "./toplist.css";
import Topcard from "@/components/topcard/Topcard";
import Notice from "@/components/notice/Notice";

const Toplist = () => {
  return (
    <div className="toplist"> 
      <div className="list">
        {/* <Topcard type="hospital" />
        <Topcard type="doctor" /> */}
      </div>
      <Notice />
    </div>
  );
};

export default Toplist;
