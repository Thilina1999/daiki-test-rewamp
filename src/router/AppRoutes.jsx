import { useRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import ContactPage from '../pages/ContactPage';
import Layout from '../components/organisms/Layout';

export const AppRoutes = () => {
  

    const elements = useRoutes([
      {
        path: '/',
        element: (
          <Layout>
            <HomePage />
          </Layout>
        ),
      },
      {
        path: '/about',
        element: (
          <Layout>
            <AboutPage />
          </Layout>
        ),
      },
      {
        path: '/service',
        element: (
          <Layout>
            <ServicePage />
          </Layout>
        ),
      },
      {
        path: '/contact',
        element: (
          <Layout>
            <ContactPage />
          </Layout>
        ),
      },
    ]);
  
    return elements;
  };
