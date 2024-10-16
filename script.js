const facts = [
  { type: "Scientist", 
    name: "Albert Einstein", 
    description: "Developed the theory of relativity." },
  { type: "Scientist", name: "Isaac Newton", description: "Formulated the laws of motion and universal gravitation." },
  { type: "Dinosaur", name: "Tyrannosaurus Rex", description: "A large carnivorous dinosaur that lived in the late Cretaceous period." },
  { type: "Dinosaur", name: "Triceratops", description: "Known for its three distinctive facial horns." },
  { type: "Space", name: "Black Hole", description: "A region in space with gravitational pull so intense that nothing can escape from it." },
  { type: "Element", name: "Carbon", description: "The basis of all known life, capable of forming stable bonds." },
  { type: "Newton's Law", name: "First Law of Motion", description: "An object in motion stays in motion unless acted upon by an external force." },
  { type: "Space", name: "Neutron Star", description: "The remnants of massive stars that have exploded." },
  { type: "Astrophysics", name: "Dark Matter", description: "Matter that does not emit light or energy, detectable only through its gravitational effects." },
  { type: "Physics", name: "Thermodynamics", description: "The study of heat and temperature and their relation to energy and work." },
  { type: "Physics", name: "Quantum Mechanics", description: "The branch of physics that deals with the behavior of particles at atomic and subatomic levels." },
  { type: "Biology", name: "Cell Theory", description: "All living organisms are composed of cells, and cells are the basic unit of life." },
  { type: "Chemistry", name: "Periodic Table", description: "A tabular arrangement of the chemical elements, organized by atomic number." },
  { type: "Mathematics", name: "Pythagorean Theorem", description: "In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides." },
  { type: "Geology", name: "Plate Tectonics", description: "The theory that Earth's outer shell is divided into several plates that glide over the mantle." },
  { type: "Astronomy", name: "Hubble's Law", description: "The observation that the universe is expanding, with galaxies moving away from each other." },
  { type: "Physics", name: "Relativity", description: "A theory that describes the relationship between space, time, and gravity." },
  { type: "Chemistry", name: "Acid-Base Reaction", description: "A reaction between an acid and a base that produces salt and water." },
  { type: "Biology", name: "Genetic Code", description: "The set of rules by which information encoded in genetic material is translated into proteins." },
  { type: "Mathematics", name: "Calculus", description: "The mathematical study of continuous change, dealing with derivatives and integrals." },
  { type: "Physics", name: "Electromagnetism", description: "The branch of physics that deals with the electromagnetic force, a fundamental interaction." },
  { type: "Chemistry", name: "Catalyst", description: "A substance that increases the rate of a chemical reaction without being consumed." },
  { type: "Geology", name: "Rock Cycle", description: "The continuous process of rock formation, breakdown, and reformation." },
  { type: "Astronomy", name: "Supernova", description: "A stellar explosion that occurs at the end of a star's life cycle." },
  { type: "Physics", name: "Friction", description: "The resistance that one surface or object encounters when moving over another." },
  { type: "Biology", name: "Photosynthesis", description: "The process by which green plants and some other organisms convert light energy into chemical energy." },
  { type: "Chemistry", name: "Molecule", description: "A group of atoms bonded together, representing the smallest fundamental unit of a chemical compound." },
  { type: "Mathematics", name: "Statistics", description: "The study of the collection, analysis, interpretation, presentation, and organization of data." },
  { type: "Physics", name: "Momentum", description: "The quantity of motion an object has, dependent on its mass and velocity." },
  { type: "Biology", name: "Evolution", description: "The process through which species change over time through natural selection." },
  { type: "Astronomy", name: "Galaxy", description: "A massive system of stars, stellar remnants, interstellar gas, dust, and dark matter." },
  { type: "Chemistry", name: "Ion", description: "An atom or molecule that has a net electrical charge due to the loss or gain of one or more electrons." },
  { type: "Geology", name: "Volcano", description: "An opening in the Earth's crust where molten lava, ash, and gases can escape." },
  { type: "Physics", name: "Gravity", description: "A force that attracts two bodies towards each other, proportional to their masses." },
  { type: "Biology", name: "DNA", description: "The molecule that carries the genetic instructions for life." },
  { type: "Chemistry", name: "Chemical Bond", description: "The lasting attraction between atoms that enables the formation of chemical compounds." },
  { type: "Mathematics", name: "Geometry", description: "The branch of mathematics concerned with the properties and relations of points, lines, surfaces, and solids." },
  { type: "Physics", name: "Energy", description: "The capacity to do work or the ability to cause change." },
  { type: "Biology", name: "Ecosystem", description: "A community of living organisms and their interactions with the environment." },
  { type: "Astronomy", name: "Exoplanet", description: "A planet that orbits a star outside our solar system." },
  { type: "Chemistry", name: "Organic Compound", description: "Any chemical compound that contains carbon, typically associated with living organisms." },
  { type: "Geology", name: "Fossil", description: "The preserved remains or traces of ancient organisms, often found in sedimentary rocks." },
  { type: "Physics", name: "Wave-Particle Duality", description: "The concept that every particle or quantum entity may be partly described as a particle and partly as a wave." },
  { type: "Biology", name: "Homeostasis", description: "The process by which living organisms regulate their internal environment to maintain stability." },
  { type: "Chemistry", name: "Oxidation", description: "A chemical reaction that involves the transfer of electrons, resulting in an increase in oxidation state." },
  { type: "Mathematics", name: "Algebra", description: "A branch of mathematics dealing with symbols and the rules for manipulating those symbols." },
  { type: "Physics", name: "Sound Waves", description: "Vibrations that travel through air or another medium, perceived by our ears." },
  { type: "Biology", name: "Microorganism", description: "A microscopic organism, such as bacteria, viruses, or fungi." },
  { type: "Astronomy", name: "Asteroid", description: "A small rocky body orbiting the sun, found mainly in the asteroid belt between Mars and Jupiter." },
  { type: "Chemistry", name: "Synthesis", description: "The process of combining different elements or compounds to form a more complex product." },
  { type: "Geology", name: "Sedimentary Rock", description: "Rock formed by the accumulation of sediment, often layered over time." },
  { type: "Physics", name: "Thermal Conductivity", description: "The ability of a material to conduct heat." },
  { type: "Biology", name: "Cell Division", description: "The process by which a parent cell divides into two or more daughter cells." },
  { type: "Chemistry", name: "Solvent", description: "A substance that dissolves a solute, resulting in a solution." },
  { type: "Mathematics", name: "Probability", description: "The measure of the likelihood that an event will occur." },
  { type: "Physics", name: "Kinetic Energy", description: "The energy an object possesses due to its motion." },
  { type: "Biology", name: "Respiration", description: "The process by which living organisms convert oxygen and glucose into energy." },
  { type: "Astronomy", name: "Cosmic Microwave Background", description: "Radiation left over from the Big Bang, permeating the universe." },
  { type: "Chemistry", name: "Chemical Reaction", description: "A process that leads to the transformation of one set of chemical substances to another." },
  { type: "Geology", name: "Metamorphic Rock", description: "Rock that has been changed from its original form due to heat, pressure, or other factors." },
  { type: "Physics", name: "Nuclear Fusion", description: "The process by which two light atomic nuclei combine to form a heavier nucleus." },
   ];

document.getElementById("rollButton").addEventListener("click", function() {
  const rollSound = document.getElementById("rollSound");
  rollSound.currentTime = 0; // Reset sound to the start
  rollSound.play(); // Play sound

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const resultDiv = document.getElementById("result");

  // Fade out old result
  resultDiv.style.opacity = 0;

  // Wait for sound to finish before showing result
  rollSound.onended = function() {
    resultDiv.innerHTML = `<strong>${randomFact.type}:</strong> ${randomFact.name}<br>${randomFact.description}`;
    resultDiv.style.opacity = 1; // Fade in new result
  };
});