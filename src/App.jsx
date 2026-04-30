import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuoteProvider } from './contexts/QuoteProvider';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuoteFlow from './pages/QuoteFlow';
import Plans from './pages/Plans';
import ServicesFAQ from './pages/ServicesFAQ';
import Quotation from './pages/Quotation';

function App() {
  return (
    <QuoteProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<QuoteFlow />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/services" element={<ServicesFAQ />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </QuoteProvider>
  );
}

export default App;
