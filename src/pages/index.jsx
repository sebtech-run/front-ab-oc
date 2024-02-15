import React from 'react';

//components
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


//icons
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";
import FeatureItem from '../components/featureItem';

import '../styles/pages/index.css';



const Index = () => {

    /* --------feature Content---------*/

    const featureTitleChat = "You are our #1 priority"
    const featureTitleMoney = "More savings means higher rates"
    const featureTitleSecurity = "Security you can trust"


    const featureTextChat = 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'

    const featureTextMoney = 'The more you save with us, the higher your interest rate will be!'

    const featureTextSecurity = 'We use top of the line encryption to make sure your data and money is always safe.'

   
    return (
        <div>
        <Navbar />
        <main>
            <Banner />
        <section className='features'>

            <FeatureItem 
                iconUrl={iconChat}
                title={featureTitleChat}
                text={featureTextChat}
            />
            <FeatureItem 
                iconUrl={iconMoney}
                title={featureTitleMoney}
                text={featureTextMoney}
            />
            <FeatureItem 
                iconUrl={iconSecurity}
                title={featureTitleSecurity}
                text={featureTextSecurity}
            />
        </section>

        </main>
        <Footer />

            
        </div>
    );
};

export default Index;