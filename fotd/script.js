let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

const facts = [
    "The Watts Towers weren't commissioned by anyone—Italian immigrant Simon Rodia built them solo as a passion project spanning 33 years (1921-1954).",
    "Standing at 99.5 feet tall, these towers were built WITHOUT scaffolding, blueprints, or power tools—just one man with hand tools and determination!",
    "Rodia's nickname was 'Sam,' and he sometimes appears in records as 'Samuel Rodia' or with his surname misspelled as 'Rodella' or 'Rodilla.'",
    "The towers survived a structural test in 1959 that proved they could withstand 10,000 pounds of lateral force—talk about sturdy DIY!",
    "Local kids helped Rodia by bringing him broken pottery pieces, turning community trash into artistic treasure.",
    "The towers survived the 1994 Northridge earthquake with barely a scratch, while modern buildings around them crumbled.",
    "In 1955, Rodia literally gave away the towers to a neighbor and bounced—he was tired of fighting with the city for permits and dealing with vandals.",
    "The towers were almost demolished in 1959 until a group of artists, architects, and activists swooped in to save them for just $2,000.",
    "Rodia called his creation 'Nuestro Pueblo' (Spanish for 'our town'), embracing the multicultural identity of his Los Angeles neighborhood.",
    "The towers feature recycled 7 Up, Squirt, Bubble Up, and Canada Dry bottles from the 1930s-50s—vintage upcycling before it was cool!",
    "The Beatles included a photo of Simon Rodia on the iconic Sgt. Pepper's Lonely Hearts Club Band album cover in 1967.",
    "Rodia used to walk nearly 20 miles along railway tracks to find materials for his towers—that's some serious dedication to dumpster diving!",
    "The towers appear in tons of pop culture, including movies like La La Land and video games like Grand Theft Auto V (as the 'Rancho Towers').",
    "The site includes not just the main towers but 17 interconnected structures, making it a sprawling sculptural village.",
    "The Watts Towers Crescent Greenway next to the towers is officially the shortest rail-trail in the entire United States at just 0.2 miles long!"
];

window.onload = function() {
    const factElement = document.getElementById("randomFact");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
};


const locomotiveScroll = new LocomotiveScroll();



