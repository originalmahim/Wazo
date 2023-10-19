import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandsCard from "../BrandsCard/BrandsCard";
import Special from "../Special/Special";
import Confused from "../Confused/Confused";

const Home = () => {

          const brands = useLoaderData()

          return (
          <div>
          <Banner></Banner>
          <Special></Special>              
          <BrandsCard brands = {brands} ></BrandsCard>
          <Confused></Confused>
          </div>
          );
};

export default Home;