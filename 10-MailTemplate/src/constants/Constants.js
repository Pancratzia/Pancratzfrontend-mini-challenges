export const EMAIL_TEMPLATES = [
    {
      name: "Resignation",
      inputs: ["Name", "ReceiverName", "Position", "Company", "LastWorkingDay",  "Appreciation"],
      message: `Dear {ReceiverName},
    
    I, {Name}, am writing to formally announce my resignation from the position of {Position} at {Company}. My last working day will be {LastWorkingDay}.
    
    I want to express my heartfelt appreciation for the opportunities I have had during my tenure at {Company}. Working here has been an enriching experience, and I'm grateful for the support and guidance I've received from you and the entire team.
    
    I am committed to ensuring a smooth transition during my notice period. If there are specific tasks or responsibilities you would like me to focus on during this time, please let me know.
    
    Once again, thank you for everything.
    
    Sincerely,
    {Name}.`,
    }
    
    ,
    {
      name: "Welcome",
      inputs: ["Name", "Company", "Position", "Sender", "SenderPosition"],
      message: `Dear {Name},
  
  I am delighted to welcome you to {Company} as our new {Position}. Your skills and expertise will undoubtedly be a valuable addition to our team, and we are excited to have you on board.
  
  {Sender}, {SenderPosition}, and the entire team look forward to working with you to achieve our shared goals.
  
  If you have any questions or need assistance as you settle in, please do not hesitate to reach out.
  
  Once again, welcome to the {Company} family!
  
  Best regards,
  {Sender}`,
    },
    {
      name: "Promotion",
      inputs: ["Name", "Company", "PastPosition", "NewPosition"],
      message: `Dear {Name},
  
  Congratulations on your well-deserved promotion to {NewPosition} at {Company}! Your hard work, dedication, and exceptional performance have not gone unnoticed, and this achievement is a testament to your capabilities.
  
  From your previous role as {PastPosition}, you have consistently demonstrated your commitment to excellence, and we have no doubt that you will excel in your new role.
  
  We look forward to seeing the positive impact you will continue to make at {Company}.
  
  Warm regards,
  {Company}`,
    },
    {
      name: "Love Letter",
      inputs: ["SenderName", "RecipientName", "Petname"],
      message: `My Dearest {RecipientName},
  
  I wanted to take a moment to express the depth of my feelings for you. {Petname}, you mean the world to me, and every day with you is a day filled with joy and love.
  
  Your smile brightens my darkest days, and your presence in my life is a blessing I cherish beyond words. I love you more than words can convey, and I want you to know that my love for you only grows stronger with each passing moment.
  
  Thank you for being the incredible person that you are and for sharing your life with me. I look forward to creating countless beautiful memories together.
  
  All my love,
  {SenderName}.`,
    },
  ];