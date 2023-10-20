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
          <BrandsCard brands = {brands} ></BrandsCard>
          <Special></Special>              
          <Confused></Confused>
          </div>
          );
};

export default Home;