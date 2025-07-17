import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageUrl={"media/images/kite.png"}
        imageWidth={"98%"}
        productName={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={
          <>
            Try demo <i className="fa-solid fa-arrow-right"></i>
          </>
        }
        learnMore={
          <>
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </>
        }
        googlePlay={"media/images/googlePlayBadge.svg"}
        appStore={"media/images/appstoreBadge.svg"}
      />
      <RightSection
        imageUrl={"media/images/console.png"}
        marginTopForTitle={"30%"}
        productName={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        tryDemo={
          <>
            Try demo <i className="fa-solid fa-arrow-right"></i>
          </>
        }
        learnMore={
          <>
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </>
        }
      />
      <LeftSection
        imageUrl={"media/images/coin.png"}
        productName={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={
          <>
            Coin <i className="fa-solid fa-arrow-right"></i>
          </>
        }
        googlePlay={"media/images/googlePlayBadge.svg"}
        appStore={"media/images/appstoreBadge.svg"}
      />
      <RightSection
        imageUrl={"/media/images/kiteconnect.png"}
        productName={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnMore={
          <>
            Kite Connect <i className="fa-solid fa-arrow-right"></i>
          </>
        }
      />

      <LeftSection
        imageUrl={"media/images/varsity.png"}
        productName={"Varsity mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlePlay={"media/images/googlePlayBadge.svg"}
        appStore={"media/images/appstoreBadge.svg"}
      />
      <Universe />
    </div>
  );
}
