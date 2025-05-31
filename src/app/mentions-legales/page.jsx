import Link from "next/link";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pageDescription =
  "Vérifiez la disponibilté de votre module de commande de boite de vitesse automatique pour votre boite automatique EDC Renault Captur Diesel";
const HeadingText = "Mentions legales VBA calculateur Renault";

export default function Mentions() {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[40px]">
        <Head>
          <title>Calculateur pour Renault Captur Diesel</title>
          <meta name="description" content={pageDescription} />
          <meta name="headline" content={HeadingText} />
        </Head>

        <div style={{ display: "none" }}>
          <h1>Mentions legales VBA calculateur Renault</h1>
        </div>
        <div className="container mx-auto  rounded-2xl text-gray-700 px-5">
          <div className="py-5">
            <h1 className="text-3xl font-bold mb-4">INFORMATIONS LÉGALES</h1>

            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                1. PRÉSENTATION DU SITE
              </h2>
              <p>
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin
                2004 pour la confiance dans l&apos;économie numérique, il est
                précisé aux utilisateurs du site www.laboiteautomatique.com
                l&apos;identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Créateur : clickandtrust.fr</li>
                <li>
                  Responsable publication : Click & Trust –
                  contact@laboiteautomatique.com
                </li>
                <li>
                  Webmaster : Click and Trust – contact@laboiteautomatique.com
                </li>
                <li>Hébergeur : 02Switch</li>
              </ul>
              <p>
                Le modèle de mentions légales est offert par Subdelirium.com
                Générateur de mentions légales
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                2. CONDITIONS GÉNÉRALES D&apos;UTILISATION DU SITE ET DES
                SERVICES PROPOSÉS.
              </h2>
              <p>
                Le site www.laboiteautomatique.com a pour objet de fournir une
                information concernant l&apos;ensemble des activités de la
                société.
              </p>
              <p>
                Nous nous efforçons s&apos;efforce de fournir sur le site
                www.laboiteautomatique.com des informations aussi précises que
                possible. Toutefois, il ne pourra être tenue responsable{" "}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                3. DESCRIPTION DES SERVICES FOURNIS.
              </h2>
              <p>
                L&apos;utilisation du site www.laboiteautomatique.com implique
                l&apos;acceptation pleine et entière des conditions générales
                d&apos;utilisation ci-après décrites. Ces conditions
                d&apos;utilisation sont susceptibles d&apos;être modifiées ou
                complétées à tout moment, les utilisateurs du site
                www.laboiteautomatique.com sont donc invités à les consulter de
                manière régulière.
              </p>
              <p>
                Ce site est normalement accessible à tout moment aux
                utilisateurs. Une interruption pour raison de maintenance
                technique peut être toutefois décidée par, qui s&apos;efforcera
                alors de communiquer préalablement aux utilisateurs les dates et
                heures de l&apos;intervention.
              </p>
              <p>
                Le site www.laboiteautomatique.com est mis à jour régulièrement
                par nous. De la même façon, les mentions légales peuvent être
                modifiées à tout moment : elles s&apos;imposent néanmoins à
                l&apos;utilisateur qui est invité à s&apos;y référer le plus
                souvent possible afin d&apos;en prendre connaissance.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                4. LIMITATIONS CONTRACTUELLES SUR LES DONNÉES TECHNIQUES.
              </h2>
              <p>Le site utilise la technologie Nextjs.</p>
              <p>
                Le site Internet ne pourra être tenu responsable de dommages
                matériels liés à l&apos;utilisation du site. De plus,
                l&apos;utilisateur du site s&apos;engage à accéder au site en
                utilisant un matériel récent, ne contenant pas de virus et avec
                un navigateur de dernière génération mis-à-jour{" "}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                5. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS.
              </h2>
              <p>
                Est propriétaire des droits de propriété intellectuelle ou
                détient les droits d&apos;usage sur tous les éléments
                accessibles sur le site, notamment les textes, images,
                graphismes, logo, icônes, sons, logiciels.{" "}
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable de : Click and Trust.{" "}
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un
                quelconque des éléments qu&apos;il contient sera considérée
                comme constitutive d&apos;une contrefaçon et poursuivie
                conformément aux dispositions des articles L.335-2 et suivants
                du Code de Propriété Intellectuelle.{" "}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                6. LIMITATIONS DE RESPONSABILITÉ.
              </h2>
              <p>
                Nous ne pourrons pourra être tenue responsable des dommages
                directs et indirects causés au matériel de l&apos;utilisateur,
                lors de l&apos;accès au site www.laboiteautomatique.com, et
                résultant soit de l&apos;utilisation d&apos;un matériel ne
                répondant pas aux spécifications indiquées au point 4, soit de
                l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.{" "}
              </p>
              <p>
                Nous ne pourrons pourra également être tenue responsable des
                dommages indirects (tels par exemple qu&apos;une perte de marché
                ou perte d&apos;une chance) consécutifs à l&apos;utilisation du
                site www.laboiteautomatique.com.{" "}
              </p>
              <p>
                Des espaces interactifs (possibilité de poser des questions dans
                l&apos;espace contact) sont à la disposition des utilisateurs.
                Nous nous réservons se réserve le droit de supprimer, sans mise
                en demeure préalable, tout contenu déposé dans cet espace qui
                contreviendrait à la législation applicable en France, en
                particulier aux dispositions relatives à la protection des
                données. Le cas échéant, Click and Trust se réserve également la
                possibilité de mettre en cause la responsabilité civile et/ou
                pénale de l&apos;utilisateur, notamment en cas de message à
                caractère raciste, injurieux, diffamant, ou pornographique, quel
                que soit le support utilisé (texte, photographie…).{" "}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                7. GESTION DES DONNÉES PERSONNELLES.
              </h2>
              <p>
                En France, les données personnelles sont notamment protégées par
                la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
                2004, l&apos;article L. 226-13 du Code pénal et la Directive
                Européenne du 24 octobre 1995.{" "}
              </p>
              <p>
                A l&apos;occasion de l&apos;utilisation du site
                www.laboiteautomatique.com, peuvent êtres recueillies :
                l&apos;URL des liens par l&apos;intermédiaire desquels
                l&apos;utilisateur a accédé au site www.laboiteautomatique.com,
                le fournisseur d&apos;accès de l&apos;utilisateur,
                l&apos;adresse de protocole Internet (IP) de l&apos;utilisateur.{" "}
              </p>
              <p>
                En tout état de cause nous ne collectons ne collecte des
                informations personnelles relatives à l&apos;utilisateur que
                pour le besoin de certains services proposés par le site
                www.laboiteautomatique.com. L&apos;utilisateur fournit ces
                informations en toute connaissance de cause, notamment
                lorsqu&apos;il procède par lui-même à leur saisie. Il est alors
                précisé à l&apos;utilisateur du site www.laboiteautomatique.com
                l&apos;obligation ou non de fournir ces informations.{" "}
              </p>
              <p>
                Conformément aux dispositions des articles 38 et suivants de la
                loi 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux
                fichiers et aux libertés, tout utilisateur dispose d&apos;un
                droit d&apos;accès, de rectification et d&apos;opposition aux
                données personnelles le concernant, en effectuant sa demande
                écrite et signée, accompagnée d&apos;une copie du titre
                d&apos;identité avec signature du titulaire de la pièce, en
                précisant l&apos;adresse à laquelle la réponse doit être
                envoyée.
              </p>
              <p>
                Aucune information personnelle de l&apos;utilisateur du site
                www.laboiteautomatique.com n&apos;est publiée à l&apos;insu de
                l&apos;utilisateur, échangée, transférée, cédée ou vendue sur un
                support quelconque à des tiers. Seule l&apos;hypothèse du rachat
                de de notre entité et de ses droits permettrait la transmission
                des dites informations à l&apos;éventuel acquéreur qui serait à
                son tour tenu de la même obligation de conservation et de
                modification des données vis à vis de l&apos;utilisateur du site
                www.laboiteautomatique.com.
              </p>
              <p>
                Le site n&apos;est pas déclaré à la CNIL car il ne recueille pas
                d&apos;informations personnelles. .
              </p>
              <p>
                Les bases de données sont protégées par les dispositions de la
                loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars
                1996 relative à la protection juridique des bases de données.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                8. LIENS HYPERTEXTES ET COOKIES.
              </h2>
              <p>
                Le site www.laboiteautomatique.com contient un certain nombre de
                liens hypertextes vers d&apos;autres sites, mis en place avec
                l&apos;autorisation de nous n&apos;avons . Cependant, n&apos;a
                pas la possibilité de vérifier le contenu des sites ainsi
                visités, et n&apos;assumera en conséquence aucune responsabilité
                de ce fait.{" "}
              </p>
              <p>
                La navigation sur le site www.laboiteautomatique.com est
                susceptible de provoquer l&apos;installation de cookie(s) sur
                l&apos;ordinateur de l&apos;utilisateur. Un cookie est un
                fichier de petite taille, qui ne permet pas
                l&apos;identification de l&apos;utilisateur, mais qui enregistre
                des informations relatives à la navigation d&apos;un ordinateur
                sur un site. Les données ainsi obtenues visent à faciliter la
                navigation ultérieure sur le site, et ont également vocation à
                permettre diverses mesures de fréquentation.{" "}
              </p>
              <p>
                Le refus d&apos;installation d&apos;un cookie peut entraîner
                l&apos;impossibilité d&apos;accéder à certains services.
                L&apos;utilisateur peut toutefois configurer son ordinateur de
                la manière suivante, pour refuser l&apos;installation des
                cookies :{" "}
              </p>
              <p>
                Sous Internet Explorer : onglet outil (pictogramme en forme de
                rouage en haut a droite) / options internet. Cliquez sur
                Confidentialité et choisissez Bloquer tous les cookies. Validez
                sur Ok.
              </p>
              <p>
                Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur
                le bouton Firefox, puis aller dans l&apos;onglet Options.
                Cliquer sur l&apos;onglet Vie privée. Paramétrez les Règles de
                conservation sur : utiliser les paramètres personnalisés pour
                l&apos;historique. Enfin décochez-la pour désactiver les
                cookies.
              </p>
              <p>
                Sous Safari : Cliquez en haut à droite du navigateur sur le
                pictogramme de menu (symbolisé par un rouage). Sélectionnez
                Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
                section &apos;Confidentialité&apos;, cliquez sur Paramètres de
                contenu. Dans la section &apos;Cookies&apos;, vous pouvez
                bloquer les cookies.
              </p>
              <p>
                Sous Chrome : Cliquez en haut à droite du navigateur sur le
                pictogramme de menu (symbolisé par trois lignes horizontales).
                Sélectionnez Paramètres. Cliquez sur Afficher les paramètres
                avancés. Dans la section &apos;Confidentialité&apos;, cliquez
                sur préférences. Dans l&apos;onglet &apos;Confidentialité&apos;,
                vous pouvez bloquer les cookies.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                9. DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION.
              </h2>
              <p>
                Tout litige en relation avec l&apos;utilisation du site
                www.laboiteautomatique.com est soumis au droit français. Il est
                fait attribution exclusive de juridiction aux tribunaux
                compétents de Paris.{" "}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                10. LES PRINCIPALES LOIS CONCERNÉES.
              </h2>
              <p>
                L&apos;utilisation du site Loi n° 78-17 du 6 janvier 1978,
                notamment modifiée par la loi n° 2004-801 du 6 août 2004
                relative à l&apos;informatique, aux fichiers et aux
                libertés..laboiteautomatique.com implique l&apos;acceptation
                pleine et entière des conditions générales d&apos;utilisation
                ci-après décrites. Ces conditions d&apos;utilisation sont
                susceptibles d&apos;être modifiées ou complétées à tout moment,
                les utilisateurs du site www.laboiteautomatique.com sont donc
                invités à les consulter de manière régulière.
              </p>
              <p>
                Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                l&apos;économie numérique.{" "}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">11. LEXIQUE</h2>
              <p>
                Utilisateur : Internaute se connectant, utilisant le site
                susnommé.
              </p>
              <p>
                Informations personnelles : « les informations qui permettent,
                sous quelque forme que ce soit, directement ou non,
                l&apos;identification des personnes physiques auxquelles elles
                s&apos;appliquent » (article 4 de la loi n° 78-17 du 6 janvier
                1978).
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
