import { GetServerSideProps } from 'next';
import { FAKE_USER_DATA } from '../../utils/fake-data';
import { User } from '../common/types/user.interface';
import InvestmentTable from '../modules/dashboard/components/InvestmentTable';

export default function Home({ investments }: User) {
  return (
    <div className="container">
      <InvestmentTable investments={investments}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<User> = async (context) => {
  console.log('FETCHING DATA... ⏰🔥')
  
  return {
    props: FAKE_USER_DATA
  }
}
