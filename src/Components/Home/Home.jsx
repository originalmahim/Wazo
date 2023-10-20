import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandsCard from "../BrandsCard/BrandsCard";
import Special from "../Special/Special";
import Confused from "../Confused/Confused";
import {Helmet} from "react-helmet";
const Home = () => {

          const brands = useLoaderData()

          return (
          <div>
          <Helmet>
          <title>Wazo - Home</title>
            </Helmet>
          <Banner></Banner>
          <BrandsCard brands = {brands} ></BrandsCard>
          <Special></Special>              
          <Confused></Confused>
          </div>
          );
};

export default Home;