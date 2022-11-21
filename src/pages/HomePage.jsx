import StockChart from "../components/StockChart";
import Features from "../components/Features";

const HomePage = () => {
  return (
    <div className="flex xl:flex-row dark:bg-main-dark-bg flex-col xl:gap-4 gap-5 p-10">
      <div className="chart-container pt-2 xl:flex-1 xl:p-5 xl:pr-10 xl:border-r-4 xl:border-gray-200">
        <StockChart />
      </div>
      <div className="xl:flex-1 xl:flex-nowrap">
        <Features />
      </div>
    </div>
  );
};

export default HomePage;
