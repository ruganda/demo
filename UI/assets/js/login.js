

$('form').on('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-password').value;

  // console.log(email);

  if (email === 'admin@repairs.com') {
    console.log(email);
    window.location.href = './admin.html';
  } else {
    window.location.href = './user_requests.html';
  }
});