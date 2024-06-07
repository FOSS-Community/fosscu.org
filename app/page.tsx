import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Initiatives from '@/components/Initiatives';
import Structure from '@/components/Structure';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Initiatives />
      <Structure />
      <Footer />
    </>
  );
};

export default Home;
