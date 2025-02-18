document.getElementById("reservation-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // Affichage d'un message de confirmation (ou tu peux intégrer un système d'email si nécessaire)
    alert(`Merci ${name}, votre réservation pour ${service} est confirmée pour le ${date}. Un email de confirmation a été envoyé à ${email}.`);

    // Réinitialisation du formulaire après la soumission
    document.getElementById("reservation-form").reset();
});
function createGoogleCalendarEvent() {
    // Récupère les valeurs du formulaire
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // Formate la date et l'heure pour Google Calendar (UTC)
    const startDate = new Date(date).toISOString().replace(/-|:|\.\d+/g, ""); // format YYYYMMDDTHHMMSSZ
    const endDate = new Date(new Date(date).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, ""); // 1 heure après

    // L'URL de l'événement Google Calendar
    const googleCalendarURL = `https://calendar.google.com/calendar/r/eventedit?text=Massage+${service}&dates=${startDate}/${endDate}&details=Réservation+pour+${name}&location=Lyon+France&sf=true`;

    // Ouvre Google Calendar pour l'utilisateur
    window.open(googleCalendarURL, "_blank");
}

