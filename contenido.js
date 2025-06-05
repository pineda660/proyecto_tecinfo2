document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation (if you add a nav)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic buttons functionality
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('¡Excelente! Desplázate hacia abajo para conocer más detalles del evento y a nuestros expertos.');
            // Or you can scroll to a specific section:
            document.querySelector('.about-event').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const remindMeBtn = document.getElementById('remindMeBtn');
    if (remindMeBtn) {
        remindMeBtn.addEventListener('click', () => {
            // In a real application, this would trigger a reminder service (e.g., calendar integration, email sign-up)
            const confirmed = confirm('¿Te gustaría que te enviemos un recordatorio antes del evento? (Esto es una simulación)');
            if (confirmed) {
                alert('¡Genial! Hemos anotado tu interés. Mantente atento a nuestras redes sociales para más detalles.');
            }
        });
    }

    const registerNowBtn = document.getElementById('registerNowBtn');
    if (registerNowBtn) {
        registerNowBtn.addEventListener('click', () => {
            // In a real application, this would redirect to a registration form or a calendar link
            alert('¡Gracias por tu interés! Próximamente habilitaremos el formulario de inscripción y los enlaces directos a las plataformas.');
            // Example: window.location.href = 'https://forms.google.com/your-registration-form';
        });
    }

    // Load expert data dynamically (simulated)
    const expertsContainer = document.getElementById('expertsContainer');
    const viewAllExpertsBtn = document.getElementById('viewAllExpertsBtn');

    const expertsData = [
        {
            name: "Dr. Ana Gómez",
            title: "Hidróloga y Especialista en Recursos Hídricos",
            bio: "Con más de 15 años de experiencia, la Dra. Gómez es una voz líder en la gestión sostenible del agua y el impacto del cambio climático en los ecosistemas acuáticos.",
            image: "https://via.placeholder.com/120x120?text=Experta1" // Placeholder image
        },
        {
            name: "Lic. Carlos Ruíz",
            title: "Nutricionista y Educador en Salud Pública",
            bio: "Experto en el impacto de la calidad del agua en la salud humana y promotor de hábitos de vida saludables para el bienestar individual y comunitario.",
            image: "https://via.placeholder.com/120x120?text=Experto2" // Placeholder image
        },
        {
            name: "M.Sc. Laura Fernández",
            title: "Ambientalista y Activista Climática",
            bio: "Dedicada a la conservación del medio ambiente y a la concienciación sobre la urgencia de adoptar prácticas sostenibles para proteger nuestro planeta.",
            image: "https://via.placeholder.com/120x120?text=Experta3" // Placeholder image
        },
        {
            name: "Ing. Roberto Soto",
            title: "Ingeniero Sanitario y Consultor Ambiental",
            bio: "Especializado en tecnologías de tratamiento de agua y soluciones innovadoras para la potabilización y el saneamiento en zonas rurales y urbanas.",
            image: "https://via.placeholder.com/120x120?text=Experto4" // Placeholder image
        }
    ];

    let expertsToShow = 2; // Initially show 2 experts

    const renderExperts = () => {
        expertsContainer.innerHTML = ''; // Clear existing content
        const currentExperts = expertsData.slice(0, expertsToShow);

        currentExperts.forEach(expert => {
            const expertCard = document.createElement('div');
            expertCard.classList.add('expert-card');
            expertCard.innerHTML = `
                <img src="${expert.image}" alt="${expert.name}" class="expert-img">
                <h3>${expert.name}</h3>
                <p><strong>${expert.title}</strong></p>
                <p>${expert.bio}</p>
            `;
            expertsContainer.appendChild(expertCard);
        });

        if (expertsToShow >= expertsData.length) {
            viewAllExpertsBtn.style.display = 'none'; // Hide button if all experts are shown
        } else {
            viewAllExpertsBtn.style.display = 'block'; // Show button
        }
    };

    if (expertsContainer && viewAllExpertsBtn) {
        renderExperts(); // Initial render

        viewAllExpertsBtn.addEventListener('click', () => {
            expertsToShow = expertsData.length; // Show all experts
            renderExperts();
        });
    }

    // Simple scroll animation for sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-initial'); // Add initial state for animation
        observer.observe(section);
    });
});

/* CSS for fade-in animation (add to contenido.css)
.fade-in-initial {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in-up {
    opacity: 1;
    transform: translateY(0);
}
*/

// Add this to your `contenido.css` file for the fade-in animation to work
// .fade-in-initial {
//     opacity: 0;
//     transform: translateY(20px);
//     transition: opacity 0.8s ease-out, transform 0.8s ease-out;
// }

// .fade-in-up {
//     opacity: 1;
//     transform: translateY(0);
// }
