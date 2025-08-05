import HomeThumbnail from '@/features/home/HomeThumbnail';
import { HomeWrapper } from '@/features/home/styles';

import Navbar from '@/components/Layouts/HomeLayout/NavBar';

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <HomeThumbnail />
    </HomeWrapper>
  );
};

export default Home;
