// pages/api/sendFormClutch.js
import nodemailer from "nodemailer";

const SendFormClutch = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    const { name, email, phone, car, engine } = req.body;

    if (!name || !email || !phone || !car || !engine) {
      return res.status(400).json({ message: "Champs obligatoires manquants" });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.laboiteautomatique.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: email,
      to: "contact@laboiteautomatique.com",
      subject: "Nouvelle demande : Remplacement d'embrayage",
      text: `
Un utilisateur a fait une demande de remplacement d'embrayage via le site https://laboiteautomatique.com : 

Nom et prénom : ${name}
Email : ${email}
Téléphone : ${phone}
Véhicule sélectionné : ${car}
Catégorie : ${engine}

Merci de le recontacter rapidement.
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    res.status(500).json({ message: "Échec de l'envoi de l'email" });
  }
};

export default SendFormClutch;
