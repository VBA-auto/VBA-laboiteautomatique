const kilometerMapping = {
  50000: "TCM",
  60000: "TCM",
  70000: "TCM",
  80000: "TCM",
  90000: "TCM",
  100000: "TCM",
  110000: "TCM",
  190000: "Clutch",
  200000: "Clutch",
  210000: "Clutch",
  220000: "Clutch",
  230000: "Clutch",
};

const conversationLogic = (input, step, setStep) => {
  let botMessage = { text: "" };

  switch (step) {
    case 1:
      botMessage.text = "How many kilometers has your car done?";
      setStep(2);
      break;

    case 2:
      const kilometers = parseInt(input);
      const issue = Object.keys(kilometerMapping).find(
        (key) => kilometers <= key
      );
      botMessage.text = issue
        ? `Based on the kilometers, the issue might be related to the ${kilometerMapping[issue]}. Can you describe the symptoms you're facing?`
        : "I couldn't determine the issue. Can you describe the symptoms?";
      setStep(3);
      break;

    case 3:
      botMessage.text =
        "Can you tell me if there is any default code shown on your dashboard?";
      setStep(4);
      break;

    case 4:
      botMessage.text =
        input.toLowerCase() === "yes"
          ? "Please provide the default code shown."
          : "Thank you! Based on the information provided, we recommend checking the TCM or clutch. Please consult a professional.";
      setStep(5);
      break;

    default:
      botMessage.text =
        "Thank you for using VBA AI! Let us know if you need more help.";
  }

  return botMessage;
};

export default conversationLogic;
