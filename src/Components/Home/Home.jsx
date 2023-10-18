import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandsCard from "../BrandsCard/BrandsCard";

const Home = () => {

          const brands = useLoaderData()

          return (
          <div>
          <Banner></Banner>
          <BrandsCard brands = {brands} ></BrandsCard>              
          </div>
          );
};

export default Home;