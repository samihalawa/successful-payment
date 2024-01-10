import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';

export default function Index() {
  return (
    <Layout>
      <SEO title="SecurePayments: Payment Confirmation" description="Confirmation of your successful payment." />
      <Header name="Successful Payment" />
      <main className="w-full bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-8 max-w-3xl">
          <div className="bg-white rounded-lg shadow-xl p-6 border-t-4 border-indigo-500">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Payment Successful - Your Order is Confirmed</h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for your payment. We are delighted to inform you that your transaction has been successfully completed.
              Due to the country of your card, we need to verify your payment manually. This is a standard procedure to ensure the utmost security and service quality.
              Rest assured, our dedicated team is working diligently to verify your transaction. We will contact you within 24 hours with all access credentials and detailed information about your purchase.
              You do not need to take any further action at this moment. Just sit back, relax, and wait for our email. 😉
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Frequently Asked Questions</h2>
            <div className="text-gray-600 text-lg">
              <p className="mb-5"><strong>What is the next step?</strong><br>There's nothing more required from your end now. Our team will reach out to you with all the necessary details and further instructions.</p>
              <p className="mb-5"><strong>Is my payment processed correctly?</strong><br>Absolutely. Your payment was successful, and we are currently setting up everything for you. We prioritize your convenience and security in every step.</p>
              <p className="mb-5"><strong>How long does the verification process take?</strong><br>Typically, the verification process is completed within 24 hours. We appreciate your patience and understand the excitement to get started!</p>
              <p className="mb-5"><strong>Can I start using the services immediately?</strong><br>As soon as our verification is complete and your account is set up, we will provide all necessary access credentials. Your readiness to begin is our top priority.</p>
              <p className="mb-5"><strong>Who can I contact for more information?</strong><br>If you have any questions or need further assistance, please feel free to contact our customer support team. We are here to help you at every step of the way.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer copyrightText="© 2024 SecurePayments. All rights reserved." />
      <GradientBackground variant="large" className="fixed top-20 opacity-40 dark:opacity-60" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
}
