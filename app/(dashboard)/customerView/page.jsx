import Header1 from '@/components/headers/Header1';
import CustomerView from '../../../components/dashboard/customerView';
import Footer1 from '@/components/footer/Footer1';

const CustomerDashboardPage = () => {
  // This would typically come from your API or database
  const customerData = {
    name: 'John Doe',
    id: 'GKS001',
    projects: [
      {
        id: 1,
        type: 'Construction',
        site: 'Site A',
        details: {
          plotSize: '2500 sq/ft',
          projectType: 'Home Construction',
          staff: {
            name: 'Elly',
            role: 'Project Manager'
          }
        }
      },
      {
        id: 2,
        type: 'Interior',
        site: 'Site B',
        details: {
          buildupArea: '10000 sq/ft',
          projectType: 'Interior Design',
          staff: {
            name: 'Elly',
            role: 'Interior Manager'
          }
        }
      }
    ]
  };

  return (
   <>
   <Header1/>
    <main>
      <CustomerView customer={customerData}  />
    </main>
    <Footer1/>
    </>
  );
};

export default CustomerDashboardPage;