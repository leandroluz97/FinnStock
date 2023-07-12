import { Header } from './Header';
import { Metrics } from './Metrics';
import { Graph } from './Graph';
import { About } from './About';
import { NewOrder } from './NewOrder';
import { News } from './news/News';

export const StockDetail = () => {
    return (
        <div className="h-full flex flex-col">
            <Header />
            <div className="h-full flex flex-col overflow-auto pr-2 rounded-md">
                <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Metrics />
                    </div>

                    <div className="">
                        <section className="grid grid-cols-6 gap-4 my-4">
                            <div className="col-span-6 md:col-span-4 bg-white rounded p-6 flex flex-col justify-between">
                                <Graph />
                            </div>
                            <div className="col-span-6 md:col-span-2 bg-white rounded p-6">
                                <NewOrder />
                            </div>
                            {/* <div className="col-span-6 md:col-span-4 bg-white rounded p-6 text-justify">
                                <About />
                            </div> */}

                            <div className="col-span-6 md:col-span-12 bg-white rounded p-6">
                                <News />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
