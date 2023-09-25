import "./toplist.css";
import Topcard from "@/components/topcard/Topcard";
import Notice from "@/components/notice/Notice";
import { doctor1 } from "@/assets";
import Image from "next/image";

const Toplist = () => {
  return (
    <div className="toplist">
      <div className="list">
        <Topcard />
        <div>
          <h2>CuraHunt Top Doctor</h2>
          <div className="top">
            <div>
              <div>
                <Image src={doctor1} alt="doctor1" />
              </div>
              <span>Dr.Rakesh Mehta</span>
            </div>
          </div>
        </div>
      </div>
      <Notice />
    </div>
  );
};

export default Toplist;
