import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandsCard from "../BrandsCard/BrandsCard";
import Special from "../Special/Special";

const Home = () => {

          const brands = useLoaderData()

          return (
          <div>
          <Banner></Banner>
          <Special></Special>              
          <BrandsCard brands = {brands} ></BrandsCard>
          </div>
          );
};

export default Home;