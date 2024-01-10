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
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Payment Successful</h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for your payment. Your transaction has been successfully completed.
              Due to the country of your card, we need to verify your payment manually.
              Don't worry, we will contact you within 24 hours with all access credentials.
              You do not need to do anything, just wait for our email. 😉
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="text-gray-600 text-lg">
              <p className="mb-4"><strong>What is the next step?</strong><br>You don't have to do anything. You will be contacted with further instructions.</p>
              <p className="mb-4"><strong>Is my payment processed correctly?</strong><br>Yes. Your payment was successful and we are now preparing your account.</p>
              <p className="mb-4"><strong>How long does the verification process take?</strong><br>The verification process usually takes less than 24 hours.</p>
              <p className="mb-4"><strong>Can I start using the services immediately?</strong><br>We will provide all necessary access credentials once the verification is complete.</p>
              <p className="mb-4"><strong>Who can I contact for more information?</strong><br>Please feel free to contact our support team if you have any further questions.</p>
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
