/*
const name = prompt("Enter your name:");

function validateName(name) {
  const trimmed = name.trim();
  return /^[A-Za-z\s]+$/.test(trimmed) && trimmed.length >= 3;
}

if (!validateName(name)) {
  alert("Invalid name. ");
} else {
  const phone = prompt("Enter your phone number:");

  function validatePhone(phone) {
    return /^01[0-9]{9}$/.test(phone.trim());
  }

  if (!validatePhone(phone)) {
    alert("Invalid phone number.");
  } else {
    const email = prompt("Enter your email:");

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }

    if (!validateEmail(email)) {
      alert("Invalid email .");
    } else {
      alert(`Welcome, ${name}!\nPhone: ${phone}\nEmail: ${email}`);
    }
  }
}
*/