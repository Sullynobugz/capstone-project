import { useRouter } from 'next/router';
import Link from 'next/link';

import AddHabits from '../components/AddHabits/AddHabits';
import Implementation from '../components/Implementation/Implementation';
import Navbar from '../components/Navbar/Navbar';

export default function HomePage() {
  const router = useRouter();

  const handleImplementationClick = () => {
    router.push('/implementation');
  };

  return (
    <div>
      <Navbar />
      <AddHabits />
     
    </div>
  );
}
