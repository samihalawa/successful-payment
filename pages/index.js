import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

export default function Index() {
  const globalData = getGlobalData();

  return (
    <Layout>
      <SEO title="SecurePayments: Payment Confirmation" description="Confirmation of your successful payment." />
      <Header name={globalData.name} />
      <main className="w-full bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-8 max-w-3xl">
          <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-indigo-500">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Payment Successful</h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for your payment. Your transaction has been successfully completed...
              {/* Resto del contenido */}
            </p>
            {/* Resto del contenido */}
          </div>
        </div>
      </main>
      <Footer copyrightText="© 2024 SecurePayments. All rights reserved." />
      <GradientBackground variant="large" className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
}

// No necesitas getStaticProps a menos que quieras cargar datos adicionales
