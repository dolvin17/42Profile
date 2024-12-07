"use client";
import Utility from "@/components/Utility";
import { RiRecycleFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
        <div className="m-32 flex items-center p-8 flex-col justify-center ">
          <Utility name="Wallet" elemento_dos="10" />
          <Utility
            name="Evaluation Points"
            elemento_dos="42"
            icon={
              <button className="text-bold hover:scale-125">
                <RiRecycleFill className="size-4" />
              </button>
            }
          />
          <Utility name="Cursus" elemento_dos="42 Cursus" />
          <Utility name="Grade" elemento_dos="Learner" />
      </div>
    </>
  );
}
