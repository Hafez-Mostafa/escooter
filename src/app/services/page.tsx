import React from "react";
import CardGrid from "@/Components/cards/CardGrid";
import { ArrowRight } from "lucide-react";
import Similarities from "@/Components/similar/Similarities";

const Services: React.FC = () => {
    return (
        <>
            <div className=" container grid lg:grid-row-4 gap-4 p-4 mx-auto">
                <div> <span>Grid</span> <span>List</span></div>
                <div>
                    <section className=" grid lg:grid-cols-4 gap-4  ">

                        <aside className="bg-pink-500 col-span-1 flex items-center flex-col justify-start   text-white font-bold text-lg p-4 rounded-lg shadow-lg">
                            <div><div className="border-solid bg-slate-300 p-8 min-w-xl"></div></div>
                            <div>items 2</div>
                            <div>items 3</div>
                        </aside>


                        <div className=" grid  grid-cols-4 col-span-3 gap-4 ">
                            <div className="grid grid-cols-4 col-span-3 gap-4 p-4 rounded-lg   ">
                                <CardGrid />

                            </div>

                            <div className="grid grid-cols-3 gap-4 bg-slate-500 p-4 rounded-lg shadow-lg text-white font-bold text-lg  items-center justify-center">
                                Hoks
                            </div>
                        </div>
                    </section>

                </div>
                <section className="p-6">
                    <div className="flex justify-evenly  items-center my-4  text-pink-600 text-lg relative">
                        <div >Änliche Stories</div>
                        <div className="flex justify-between  items-center"> <p className="m-4">Mehr Spannende Artikle</p> <span><ArrowRight /></span></div>
                    </div >
                    <div className="py-10 shadow-lg">
                    <Similarities />

                    </div>
                </section>


            </div>

        </>
    );
};

export default Services;