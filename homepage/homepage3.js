// // Sample Data for Events
// const events = [
//     {
//       id: 1,
//       title: "Music Festival",
//       date: "2023-10-15",
//       location: "New York City",
//       description: "Join us for an unforgettable night of music and fun!",
//       image: "event1.jpg",
//     },
//     {
//       id: 2,
//       title: "Tech Conference",
//       date: "2023-11-10",
//       location: "San Francisco",
//       description: "Learn about the latest trends in technology.",
//       image: "event2.jpg",
//     },
//     {
//       id: 3,
//       title: "Food Expo",
//       date: "2023-12-05",
//       location: "Chicago",
//       description: "Explore delicious cuisines from around the world.",
//       image: "event3.jpg",
//     },
//   ];
  
//   // DOM Elements
//   const eventGrid = document.querySelector(".event-grid");
//   const searchInput = document.querySelector(".search-form input");
//   const eventDetailsSection = document.querySelector(".event-details .details-content");
//   const rsvpModal = document.getElementById("rsvp-modal");
//   const rsvpConfirmButton = document.getElementById("rsvp-confirm");
//   const rsvpCancelButton = document.getElementById("rsvp-cancel");
  
//   let selectedEventId = null;
  
//   // Render Events
//   function renderEvents(filteredEvents = events) {
//     eventGrid.innerHTML = filteredEvents
//       .map(
//         (event) => `
//         <div class="event-card" data-aos="fade-up">
//           <img src="${event.image}" alt="${event.title}" />
//           <h3>${event.title}</h3>
//           <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
//           <p>Location: ${event.location}</p>
//           <button class="btn" onclick="showEventDetails(${event.id})">Learn More</button>
//         </div>
//       `
//       )
//       .join("");
//   }
  
//   // Show Event Details
//   function showEventDetails(eventId) {
//     const event = events.find((e) => e.id === eventId);
//     if (event) {
//       eventDetailsSection.innerHTML = `
//         <h2>${event.title}</h2>
//         <img src="${event.image}" alt="${event.title}" />
//         <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
//         <p><strong>Time:</strong> 6:00 PM - 11:00 PM</p>
//         <p><strong>Location:</strong> ${event.location}</p>
//         <p><strong>Description:</strong> ${event.description}</p>
//         <div id="countdown"></div>
//         <button class="btn" onclick="openRSVPModal(${event.id})">RSVP Now</button>
//       `;
//       document.querySelector(".event-details").style.display = "block";
//       startCountdown(event.date);
//     }
//   }
  
//   // Open RSVP Modal
//   function openRSVPModal(eventId) {
//     selectedEventId = eventId;
//     rsvpModal.style.display = "flex";
//   }
  
//   // Close RSVP Modal
//   function closeRSVPModal() {
//     rsvpModal.style.display = "none";
//   }
  
//   // Handle RSVP Confirmation
//   rsvpConfirmButton.addEventListener("click", () => {
//     const event = events.find((e) => e.id === selectedEventId);
//     if (event) {
//       alert(`You have successfully RSVP'd for ${event.title}!`);
//       closeRSVPModal();
//     }
//   });
  
//   // Handle RSVP Cancellation
//   rsvpCancelButton.addEventListener("click", closeRSVPModal);
  
//   // Countdown Timer
//   function startCountdown(eventDate) {
//     const countdownDate = new Date(eventDate).getTime();
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countdownDate - now;
  
//       if (distance < 0) {
//         clearInterval(timer);
//         document.getElementById("countdown").innerHTML = "Event has started!";
//         return;
//       }
  
//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//       document.getElementById("countdown").innerHTML = `
//         <p>Time until event:</p>
//         <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
//       `;
//     }, 1000);
//   }
  
//   // Filter Events
//   searchInput.addEventListener("input", (e) => {
//     const searchTerm = e.target.value.toLowerCase();
//     const filteredEvents = events.filter((event) =>
//       event.title.toLowerCase().includes(searchTerm)
//     );
//     renderEvents(filteredEvents);
//   });
  
//   // Initial Render
//   renderEvents();

import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Transforming Occasions into Great Memories</h1>
      <p className="mt-4 text-lg">We make your events unforgettable with top-tier management services.</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 rounded-full text-white text-lg">Book Your Event</button>
    </div>
  );
};

const Services = () => {
  const services = [
    "Choreographers",
    "Costume & Makeup",
    "Photography & Videography",
    "LED Screen & Video Editing",
    "Social Media Management",
    "Event Anchoring",
  ];

  return (
    <div className="bg-white text-black py-12 px-6">
      <h2 className="text-3xl font-bold text-center">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-gray-100 text-center">
            <h3 className="text-xl font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto mt-6">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded"></textarea>
        <button className="w-full bg-blue-500 p-3 rounded text-lg">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Home />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
