

function updateGreeting() {
    const greetingElement = document.getElementById('greeting-time');
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      greetingElement.textContent = 'Chào buổi sáng,';
    } else if (currentHour < 18) {
      greetingElement.textContent = 'Chào buổi trưa,';
    } else {
      greetingElement.textContent = 'Chào buổi tối,';
    }
  }

  window.onload = updateGreeting;



/*end of greeting*/ 
