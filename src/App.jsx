import Nav from "./components/Nav";
import CustomerReview from "./section/CustomerReview";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import PopularProduct from "./section/PopularProduct";
import Services from "./section/Services";
import SpecialOffers from "./section/SpecialOffers";
import Subscribe from "./section/Subscribe";
import SuperQuality from "./section/SuperQuality";


const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
    <section className="padding"><PopularProduct/></section>
    <section className="padding"><SuperQuality/></section>
    <section className="padding-x py-10"><Services/></section>
    <section className="padding"><SpecialOffers/></section>
    <section className="bg-pale-blue padding"><CustomerReview/></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
    <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
  </main>
);

export default App;
