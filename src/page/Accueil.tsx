import React from "react";
import Card from "../components/Card";
import logo from "./asset/crop-woman-practicing-yoga.jpg";
import logo1 from "./asset/212-Magenta.jpg";

const Accueil: React.FC = () => {
  return (
    <div className="overflow-y-auto flex items-center justify-center h-screen bg-[#FFFBF7] md:bg-[#BB1850]">
      <Card className="overflow-y-auto space-y-12 p-4 md:w-[1004px] md:h-[614px] relative">
        {/* Section Desktop */}
        <div className="hidden md:block">
          {/* Section 1 */}
          <div className="absolute top-0 left-0 flex items-center w-full h-[307px]">
            {/* Image à gauche */}
            <img
              src={logo}
              className="w-[205px] h-[307px] rounded-lg object-cover"
              alt="logo"
            />

            {/* Texte au centre */}
            <div className="flex flex-col justify-center w-[701px] mx-auto">
              <h2 className="text-4xl text-[#BB1850] mb-4">
                Présentation de l'établissement
              </h2>
              <p className="text-black text-justify">
                Maison Magenta est une entreprise spécialisée dans la santé
                intégrative, proposant des thérapies complémentaires axées sur
                la beauté et le bien-être pour les personnes touchées par la
                maladie ou le handicap.
              </p>
              <p className="text-black mt-4 text-justify">
                Notre mission est d'offrir un espace inclusif où chaque
                participant peut découvrir et célébrer sa beauté intérieure et
                extérieure à travers des ateliers coanimés par des experts.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="absolute bottom-0 right-0 flex items-center w-full h-[307px]">
            {/* Texte à gauche */}
            <div className="flex flex-col justify-center w-[701px] mx-auto">
              <h2 className="text-4xl text-[#BB1850] mb-2">
                Rôle de l’application
              </h2>
              <p className="text-black text-justify">
                Cette application a pour but de suivre l’évolution de votre
                bien-être tout au long de votre participation aux différentes
                thérapies proposées par Maison Magenta.
              </p>
              <p className="text-black mt-4 text-justify">
                Vous pourrez noter chacun de vos symptômes à partir de l’onglet
                “Evaluation des symptômes” puis vous pourrez consulter à tout
                instant vos résultats dans l’onglet “Résultats”.
              </p>
              <p className="text-black mt-4 text-justify">
                L’onglet “Mon Programme” vous permettra de répondre à un
                questionnaire dont le résultat sera la recommandation d’un
                programme de thérapies adapté à vos besoins.
              </p>
            </div>

            {/* Image à droite */}
            <img
              src={logo1}
              className="w-[205px] h-[307px] object-cover rounded-lg"
              alt="application"
            />
          </div>
        </div>

        {/* Section Mobile */}
        <div className="md:hidden flex flex-col  items-center space-y-6">
          {/* Texte 1 */}
          <div className="w-[90%]">
            <h2 className="text-2xl text-[#BB1850] text-center mt-96 mb-4">
              Présentation de l'établissement
            </h2>
            <p className="text-black text-justify">
              Maison Magenta est une entreprise spécialisée dans la santé
              intégrative, proposant des thérapies complémentaires axées sur la
              beauté et le bien-être pour les personnes touchées par la maladie
              ou le handicap.
            </p>
            <p className="text-black mt-4 text-justify">
              Notre mission est d'offrir un espace inclusif où chaque
              participant peut découvrir et célébrer sa beauté intérieure et
              extérieure à travers des ateliers coanimés par des experts.
            </p>
          </div>

          {/* Images */}
          <div className="flex gap-4">
            <img
              src={logo}
              className="w-[123px] h-[184px] object-cover rounded-lg"
              alt="logo"
            />
            <img
              src={logo1}
              className="w-[123px] h-[184px] object-cover rounded-lg"
              alt="application"
            />
          </div>

          {/* Texte 2 */}
          <div className="w-[90%]">
            <h2 className="text-2xl text-[#BB1850] text-center mt-10 mb-4">
              Rôle de l’application
            </h2>
            <p className="text-black text-justify">
              Cette application a pour but de suivre l’évolution de votre
              bien-être tout au long de votre participation aux différentes
              thérapies proposées par Maison Magenta.
            </p>
            <p className="text-black mt-4 text-justify">
              Vous pourrez noter chacun de vos symptômes à partir de l’onglet
              “Evaluation des symptômes” puis vous pourrez consulter à tout
              instant vos résultats dans l’onglet “Résultats”.
            </p>
            <p className="text-black mt-4 mb-4 text-justify">
              L’onglet “Mon Programme” vous permettra de répondre à un
              questionnaire dont le résultat sera la recommandation d’un
              programme de thérapies adapté à vos besoins.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Accueil;