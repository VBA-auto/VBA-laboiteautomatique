import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";

const Programmation = () => {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="installation">
        <div className="relative">
          <div style={{ display: "none" }}>
            <h1>Réparation calculatateur Captur boite automatique EDC </h1>
            <h1>Réparation calculatateur Clio 4 boite automatique EDC </h1>
            <h1>Réparation calculatateur Clio RS boite automatique EDC </h1>
            <h1>Réparation calculatateur Clio RS boite automatique EDC </h1>
            <h1>Réparation calculatateur Megane 3 boite automatique EDC </h1>
            <h1>Réparation calculatateur Scenic 3 boite automatique EDC </h1>
            <h1>Réparation calculatateur Scenic 3 boite automatique EDC </h1>
          </div>
          {/* Texte au-dessus de l'image */}
          <main className="py-[60px]">
            <div className="container mx-auto">
              <div className="w-2/3 mx-auto">
                <div className="">
                  <div className="">
                    <Image
                      width={365}
                      height={200}
                      className="rounded-md mx-auto w-full"
                      src="/images/dc4_soft.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Programmation;
