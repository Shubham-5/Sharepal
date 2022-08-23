import "./App.css";
import BottomNav from "./components/BottomNav";
import Coupons from "./components/Coupons";
import MoreCategories from "./components/MoreCategories";
import ShopItems from "./components/ShopItems";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='App'>
      <BottomNav />
      <section className='pt-5 row'>
        <Sidebar />
        <ShopItems />
      </section>
      <section className='my-3'>
        <Coupons />
      </section>
      <section className='more-categories'>
        <MoreCategories />
      </section>
    </div>
  );
}

export default App;
