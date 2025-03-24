import Image from "next/image";
import Swipper from "./_components/home/hero/swipper";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="">
          <div className="pt-[18px]">
            <Swipper />
          </div>
        </div>
      </div>
    </main>
  );
}
