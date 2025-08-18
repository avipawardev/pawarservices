// Get user data from localStorage
export const getUserData = () => {
  try {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

// Check if user has provided details
export const hasUserDetails = () => {
  const userData = getUserData();
  return userData && userData.name && userData.village && userData.mobile;
};

// Generate WhatsApp message for service inquiry
export const generateServiceWhatsAppMessage = (serviceName) => {
  const userData = getUserData();

  if (!userData || !userData.name || !userData.village || !userData.mobile) {
    return `I want to apply for ${serviceName}. Please guide me.`;
  }

  return `Hello, my name is ${userData.name}, from ${userData.village}. My mobile number is ${userData.mobile}. I want to apply for ${serviceName}. Please guide me.`;
};

// Generate WhatsApp message for admin to user
export const generateAdminWhatsAppMessage = (userData, message = "") => {
  const defaultMessage = `Hello ${userData.name}, thank you for your interest in our services. How can we help you today?`;
  return message || defaultMessage;
};

// Format date for display
export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    return "Invalid Date";
  }
};

// Handle WhatsApp click with user data check
export const handleWhatsAppClick = (serviceName) => {
  if (!hasUserDetails()) {
    // Show registration modal
    if (window.openUserRegistrationModal) {
      window.openUserRegistrationModal();
    } else {
      alert("Please provide your details first to send personalized messages.");
    }
    return false; // Indicate that action was blocked
  }

  // User has details, proceed with WhatsApp
  const message = generateServiceWhatsAppMessage(serviceName);
  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
  return true; // Indicate that action was successful
};
