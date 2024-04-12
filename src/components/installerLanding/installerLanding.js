import Navbar from '../navbar/Navbar';
import MarketingCards from '../marketingCards/MarketingCards'
import UBuilderButton from './installerCards/UBuilderButton';
import CertifiedInstallerButton from './installerCards/CertifiedInstallerButton';
import MasterInstallerButton from './installerCards/MasterInstallerButton';
import NewProductsButton from './installerCards/NewProductsButton';
import PermitDesignButton from './installerCards/PermitDesignButton';
import './installerLanding.css'
function landing() {
    return (
      <div className="landing-container">
      <Navbar/>
      <MarketingCards/>
      <UBuilderButton/>
      <PermitDesignButton/>
      <CertifiedInstallerButton/>
      <MasterInstallerButton/>
      <NewProductsButton/>
    </div>
  );
}

export default landing;