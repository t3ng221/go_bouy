import Navbar from '@/features/NavBar/NavBar';
import HomeThumbnail from '@/features/home/HomeThumbnail';
import { HomeWrapper } from '@/features/home/styles';

import CustomCard from '@/components/Atoms/Card/CustomCard';

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <HomeThumbnail />
      <CustomCard />
    </HomeWrapper>
  );
};

export default Home;
