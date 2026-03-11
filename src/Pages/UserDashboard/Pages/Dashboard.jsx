import AddFundsCard from "../../../Components/AddFundsCard";
import BalanceCard from "../../../Components/BalanceCard";
import Profile from "../../../Components/Profile";
import TopBar from "../../../Components/TopBar";
import TotalTransactionCard from "../../../Components/TotalTransactionCard";

const Dashboard = () => {
  return (
    <div className="py-2 w-full flex flex-col gap-3 max-w-[90%] mx-auto ">
      <Profile />
      <TopBar name={"Sonia"} />

      <div className="flex w-full">
        <div className="w-full flex flex-col gap-4 py-3">
          <span className="lg:block hidden md:block">
            <BalanceCard />
          </span>
          <span className="lg:block hidden md:block">
            <TotalTransactionCard />
          </span>
          <span className="lg:block hidden md:block">
            <AddFundsCard />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
