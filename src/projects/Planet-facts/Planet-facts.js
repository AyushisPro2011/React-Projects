import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import './planet-facts.css'

const PlanetFacts = () => {
    const curiosityThoughts = [
        "Curiosity fuels innovation and progress in all endeavors.",
        "Curiosity is the spark igniting the pursuit of knowledge and understanding.",
        "Curiosity opens doors to new perspectives and boundless opportunities.",
        "Questioning the norm leads to groundbreaking discoveries and insights.",
        "Curiosity the gateway to learning, growth, and self-discovery.",
        "Curiosity encourages exploration beyond the known and familiar.",
        "Inquisitiveness breeds creativity and out-of-the-box thinking.",
        "The thirst for knowledge drives curiosity's insatiable hunger.",
        "Curiosity nurtures empathy by seeking to understand others' experiences.",
        "Curiosity turns the mundane into the extraordinary, finding wonder everywhere.",
        "Curiosity emboldens the courageous to challenge the status quo.",
        "Curiosity is the key ingredient in problem-solving and critical thinking.",
        "Embracing curiosity expands horizons and broadens intellectual landscapes.",
        "Curiosity invites us to ask 'why' and 'what if.'",
        "Curiosity cultivates a mindset of continuous exploration and lifelong learning.",
        "Curiosity stirs the adventurous spirit within, craving new experiences.",
        "Curiosity dismantles barriers, fostering inclusivity and tolerance for diverse ideas.",
        "Through curiosity, we unveil the beauty hidden in the ordinary.",
        "Curiosity the cornerstone of scientific inquiry and discovery.",
        "Curiosity thrives in uncertainty, seeking understanding amid ambiguity."
      ];
    const [thought , setthought] = useState(curiosityThoughts[Math.round(Math.random() * 20)])
    //fact arrays
    const facts = {
        mercuryFacts : [
            "Mercury's atmosphere is incredibly thin, predominantly composed of elements like oxygen, sodium, hydrogen, helium, and potassium.",
            "The planet's rotation takes an unhurried 176 Earth days to complete, while it completes an orbit around the Sun in a relatively brisk 88 Earth days.",
            "Surface temperatures on Mercury are extreme, reaching blistering highs of 800°F (430°C) on the day side and plummeting to bone-chilling lows of -290°F (-180°C) on the night side.",
            "The elliptical nature of Mercury's orbit contributes to substantial temperature fluctuations across its surface.",
            "The heavily cratered surface of Mercury mirrors the rugged terrain of the Moon, marked by plains, ridges, and cliffs.",
            "Mercury's peculiar rotation pattern results in three rotations for every two orbits, leading to a phenomenon known as tidal locking.",
            "Named after the Roman god Mercury, embodying traits of speed and agility, this planet showcases a unique resonance in its rotation and orbit.",
            "Despite its proximity to the Sun, Mercury possesses a weak magnetic field—roughly 1% as strong as Earth's—generated by its partially molten iron core.",
            "Unexpectedly, Mercury's poles harbor water ice in perpetually shadowed craters, a surprising discovery given the planet's scorching proximity to the Sun.",
            "Exploration of Mercury has been limited to the Mariner 10 and MESSENGER missions, providing invaluable insights into this enigmatic world."
          ],
          venusFacts: [
            "Venus boasts an atmosphere so dense, mainly comprising carbon dioxide, with swirling clouds of sulfuric acid creating its distinct hazy appearance.",
            "The planet's rotation is a languid 243 Earth days, slightly longer than its orbit around the Sun, which spans 225 Earth days.",
            "Surface temperatures on Venus are jaw-dropping, soaring to a staggering 900°F (475°C), surpassing even the blistering heat experienced on Mercury despite Venus's greater distance from the Sun.",
            "Venus's rotation stands apart from most planets, displaying a unique retrograde rotation—spinning in the opposite direction to Earth's rotation.",
            "The landscape of Venus is characterized by mountains, valleys, and a staggering number of over 1,600 major volcanoes, some of which remain active.",
            "Often referred to as Earth's 'sister planet,' Venus shares similarities in size and composition, making it a subject of fascination and study.",
            "Named after the Roman goddess of love and beauty, Venus embodies a celestial allure, shrouded in mysteries waiting to be unraveled.",
            "Venus lacks moons and exhibits no detectable magnetic field, distinguishing it from other planets within our solar system.",
            "The planet's atmosphere experiences super-rotating winds, racing at speeds of up to 224 mph (360 km/h), contributing to its complex atmospheric dynamics.",
            "Various missions, including Venera, Magellan, and Venus Express, have embarked on exploratory missions to decipher the secrets of Venus, expanding our understanding of this captivating world."
          ],
          earthFacts : [
            "Earth's atmosphere is a dynamic blend, predominantly composed of nitrogen (78%) and oxygen (21%), fostering life as we know it.",
            "Earth's rotation completes a day in a familiar 24 hours, while it orbits the Sun in about 365.25 days.",
            "Surface temperatures on Earth vary widely, with extremes ranging from -128.6°F (-89.2°C) in Antarctica to highs of 136°F (57.8°C) in places like Death Valley, USA.",
            "Earth's nearly circular orbit maintains a relatively stable climate, essential for sustaining diverse ecosystems.",
            "The planet's surface is a tapestry of varied landscapes, from mountains and plains to oceans and deserts, fostering an array of habitats.",
            "Earth's rotation creates the familiar cycle of day and night, crucial for regulating various biological and environmental processes.",
            "The name 'Earth' originates from Old English and Germanic words meaning 'ground' or 'soil,' emphasizing its terrestrial nature.",
            "The planet's magnetic field, generated by its iron-nickel core, shields it from harmful solar radiation, crucial for preserving life.",
            "Abundant in water, Earth possesses vast oceans, crucial for regulating climate and supporting a wide array of life forms.",
            "Human exploration and observation of Earth have been extensive, revealing its beauty, complexity, and delicate balance as a unique celestial body."
          ],
          marsFacts : [
            "Mars harbors a thin atmosphere, primarily composed of carbon dioxide with traces of nitrogen and argon.",
            "Mars' rotation takes approximately 24.6 hours, while its orbit around the Sun lasts around 687 Earth days.",
            "Surface temperatures on Mars range from -195°F (-125°C) to highs of 70°F (20°C) at the equator, with extreme cold at the poles.",
            "Mars' eccentric orbit contributes to significant temperature variations, affecting its surface conditions.",
            "The surface of Mars is defined by rust-colored deserts, ancient volcanoes, canyons, and polar ice caps, reminiscent of diverse terrains on Earth.",
            "Mars rotates on a tilted axis, resulting in distinct seasons similar to Earth, albeit with longer durations.",
            "The name 'Mars' is derived from the Roman god of war, reflecting its reddish appearance in the night sky.",
            "Mars has a thin atmosphere with no global magnetic field, leaving its surface exposed to solar and cosmic radiation.",
            "Water exists on Mars in the form of ice and possibly in subsurface reservoirs, hinting at the possibility of past or present life.",
            "Mars exploration includes various missions, such as NASA's rovers like Curiosity and Perseverance, aiming to uncover Martian mysteries."
          ],
          moonFacts :[
            "The Moon lacks a substantial atmosphere, with only trace amounts of elements like helium, neon, and hydrogen.",
            "Moon's rotation on its axis takes about 27.3 Earth days, the same duration it takes to complete one orbit around Earth.",
            "Surface temperatures on the Moon vary widely, from scorching highs of 253°F (123°C) in sunlight to bone-chilling lows of -387°F (-233°C) in shadowed areas.",
            "The lack of atmosphere exposes the Moon's surface to intense temperature fluctuations between day and night.",
            "The Moon's surface is marked by impact craters, maria (dark plains), highlands, and mountains formed by ancient volcanic activity.",
            "Tidal forces from Earth cause the Moon to show the same face (the near side) to Earth at all times.",
            "The Moon's name originates from old English and Germanic words, reflecting its association with monthly cycles.",
            "With no magnetic field, the Moon's surface is exposed to cosmic rays and solar winds, contributing to its desolate environment.",
            "Water ice exists in permanently shadowed craters at the lunar poles, confirmed by various lunar missions.",
            "Extensive exploration includes manned Apollo missions and more recent robotic missions, shedding light on the Moon's geology and history."
          ],
          jupiterFacts : [
            "Jupiter boasts a thick atmosphere primarily composed of hydrogen and helium, with traces of methane, water vapor, and ammonia.",
            "Jupiter's Rotation on its axis is remarkably fast, completing one day in about 9.9 Earth hours, while its orbit around the Sun takes around 11.86 Earth years.",
            "Jupiter's immense size and mass contribute to immense gravitational forces, shaping its distinct features and interactions with its moons.",
            "Surface temperatures on Jupiter's cloud tops range from frigid lows of -280°F (-145°C) to intense highs due to internal heat sources.",
            "Jupiter's atmosphere showcases colorful bands of clouds, including the famous Great Red Spot, a massive storm larger than Earth.",
            "Jupiter's strong magnetic field is the most powerful in the solar system, creating intense radiation belts and auroras near its poles.",
            "The name 'Jupiter' is derived from the king of Roman gods, reflecting its size and dominance in the solar system.",
            "Jupiter has a vast system of over 80 known moons, with four large Galilean moons—Io, Europa, Ganymede, and Callisto—displaying diverse characteristics.",
            "Exploration of Jupiter includes missions like Voyager, Galileo, Juno, and more, unraveling its mysteries and complex dynamics.",
            "Jupiter plays a critical role in shaping the solar system's dynamics, influencing the orbits of other planets and celestial bodies."
          ],
          saturnFacts :[
            "Saturn's atmosphere is predominantly composed of hydrogen and helium, with traces of methane and ammonia.",
            "Saturn's Rotation on its axis takes about 10.7 Earth hours, while it completes an orbit around the Sun in approximately 29.5 Earth years.",
            "Surface temperatures on Saturn vary across its layers, from -285°F (-175°C) in the upper atmosphere to higher temperatures toward its core.",
            "The planet's most distinctive feature is its stunning ring system, composed mainly of ice particles and rocky debris.",
            "Saturn's rings, though expansive, are relatively thin, with intricate structures shaped by gravitational interactions with its moons.",
            "The magnetic field of Saturn is notably strong and complex, generating intense radiation belts around the planet.",
            "Named after the Roman god of agriculture, Saturn's rings and beauty have fascinated observers throughout history.",
            "Saturn has an extensive family of over 80 moons, each showcasing unique characteristics and interactions with the planet.",
            "Exploration of Saturn includes the Cassini-Huygens mission, providing invaluable data about its rings, moons, and atmosphere.",
            "Saturn's immense size and gravitational influence play a crucial role in the dynamics of the solar system, affecting nearby planets and debris."
          ],
          uranusFacts: [
            "Uranus possesses a predominantly hydrogen and helium atmosphere, with traces of methane giving it a distinct blue-green hue.",
            "Rotation on its axis is unique, taking about 17.2 Earth hours, while it orbits the Sun in around 84 Earth years.",
            "Surface temperatures on Uranus plunge to incredibly low averages of -320°F (-195°C), making it one of the coldest planets in the solar system.",
            "Uranus's rotational axis is tilted to an extreme degree, nearly parallel to its orbit, resulting in peculiar seasonal variations.",
            "The planet's atmosphere displays bands of clouds and a lack of distinct surface features visible from telescopes.",
            "Uranus has a magnetosphere that is tilted and offset from its center, a characteristic distinct from most planets.",
            "Named after the Greek god of the sky, Uranus was the first planet to be discovered through a telescope by William Herschel in 1781.",
            "The planet has a system of faint rings and a retinue of 27 known moons, each contributing to its unique dynamics.",
            "Uranus has been visited only once by Voyager 2 in 1986, providing limited but invaluable data about this enigmatic ice giant.",
            "Despite its distance, Uranus plays a crucial role in shaping the structure and movements of the outer solar system."
          ],
          neptuneFacts :[
            "Neptune's atmosphere is primarily composed of hydrogen, helium, and traces of methane, lending it a striking blue color.",
            "Neptune's Rotation on its axis is relatively swift, taking about 16.1 Earth hours, while it orbits the Sun in approximately 165 Earth years.",
            "Surface temperatures on Neptune average around -353°F (-214°C), making it one of the coldest planets in the solar system.",
            "Neptune's atmosphere displays fast-moving clouds, including the most powerful recorded winds in the solar system, reaching speeds of over 1,300 mph (2,100 km/h).",
            "The planet's distinctive blue hue is due to the absorption of red light by methane in its atmosphere.",
            "Neptune has a robust magnetic field, tilted significantly compared to its rotational axis.",
            "Named after the Roman god of the sea, Neptune was discovered through mathematical predictions before its actual sighting in 1846.",
            "Neptune boasts a system of faint rings and a diverse family of 14 known moons, each contributing to its complex gravitational interactions.",
            "Voyager 2 is the only spacecraft to have visited Neptune, providing valuable data during its flyby in 1989, uncovering mysteries of this distant ice giant.",
            "Despite its distance from the Sun, Neptune's gravitational influence plays a crucial role in sculpting the dynamics of the outer solar system."
          ],
          plutoFacts: [
            "Pluto was reclassified as a dwarf planet in 2006, no longer considered the ninth planet.",
            "Pluto has a diameter smaller than Earth's Moon, measuring about 1,473 miles (2,370 kilometers).",
            "Pluto's orbit is eccentric and inclined, at times crossing within Neptune's orbit.",
            "The dwarf planet has a large moon named Charon, forming a binary system.",
            "Surface temperatures on Pluto can drop to a frigid -375°F (-225°C).",
            "Sputnik Planitia, a heart-shaped region, comprises frozen nitrogen and carbon monoxide.",
            "Pluto's thin atmosphere is primarily nitrogen, with traces of methane and carbon monoxide.",
            "NASA's New Horizons mission in 2015 provided detailed images and data during its flyby.",
            "Pluto has four smaller moons—Styx, Nix, Kerberos, and Hydra—composed of ice and rock.",
            "Despite being reclassified, Pluto remains one of the farthest and most studied objects in the solar system."
          ],
          erisFacts :[
            "Discovered in 2005, Eris's finding led to Pluto's reclassification and the creation of the dwarf planet category.",
            "Eris is slightly smaller than Pluto, with a diameter of about 1,445 miles (2,326 kilometers).",
            "Eris primarily consists of icy materials like methane and nitrogen, common in Kuiper Belt objects.",
            "Eris rotates rapidly, completing a day in about 25.9 hours, much faster than Earth's rotation.",
            "Eris has an elongated orbit, swinging between 38.2 and 97.6 astronomical units from the Sun.",
            "Initially designated as the 'tenth planet,' debates over its status prompted a reevaluation of planetary definitions.",
            "Eris has a moon named Dysnomia, about 600 times fainter than Eris itself.",
            "Surface temperatures on Eris can plummet to a bone-chilling -405°F (-243°C).",
            "Eris orbits within the Kuiper Belt, a region of icy bodies beyond Neptune.",
            "Eris' highly inclined and elliptical orbit makes it one of the most distant known objects in our solar system."
          ],
          haumeaFacts :[
            "Haumea was discovered in 2004 and recognized as a dwarf planet in 2008.",
            "Haumea is elongated, shaped like an elongated ellipsoid, possibly due to its rapid rotation.",
            "Haumea's diameter is approximately 1,400 miles (2,300 kilometers), making it larger than some other dwarf planets.",
            "Haumea , the dwarf planet orbits the Sun in a period of about 285 Earth years.",
            "Haumea's elongated shape causes Haumea to complete one rotation in a mere 3.9 hours, one of the fastest known rotations.",
            "Named after the Hawaiian goddess of fertility, Haumea has features named after Hawaiian gods and goddesses.",
            "Haumea's surface composition likely includes water ice, which contributes to its high reflectivity.",
            "Haumea has two known moons, Hiʻiaka and Namaka, named after Hawaiian goddesses.",
            "Haumea, the dwarf planet's orbit is located beyond Neptune in the Kuiper Belt.",
            "Haumea's discovery prompted discussions and investigations into the nature and characteristics of distant Kuiper Belt objects."
          ],
          makemakeFacts :[
            "Discovered in 2005, Makemake was designated a dwarf planet in 2008.",
            "MakeMake is one of the largest known trans-Neptunian objects, with a diameter around 870 miles (1,400 kilometers).",
            "Makemake orbits the Sun in about 305 Earth years, positioned in the Kuiper Belt.",
            "Surface temperatures on Makemake are estimated to be around -385°F (-233°C).",
            "MakeMake , the dwarf planet's surface likely contains methane, ethane, and possibly nitrogen-rich ices.",
            "Makemake's reddish surface color is attributed to tholins formed by solar radiation on methane and nitrogen.",
            "Observations suggest the lack of significant moons or rings around Makemake.",
            "Named after the creator god of the Rapa Nui people of Easter Island, it shares namesake characteristics.",
            "MakeMake's discovery raised questions about the diverse compositions and dynamics of Kuiper Belt objects.",
            "Studies continue to reveal more about Makemake's properties and its place within the outer solar system."
          ],
          ceresFacts: [
            "Ceres, discovered in 1801, became the first dwarf planet recognized in the asteroid belt in 2006.",
            "Ceres is  the largest object in the asteroid belt, with a diameter of about 590 miles (940 kilometers).",
            "Ceres orbits the Sun in about 4.6 Earth years, located between Mars and Jupiter.",
            "Surface temperatures on Ceres range from extremely cold regions around -225°F (-143°C) to slightly warmer areas.",
            "Ceres has a significant feature, a large crater named Occator, with bright spots caused by salt deposits.",
            "Ceres' surface is composed of a mixture of water ice, rocky material, and possibly a subsurface ocean.",
            "NASA's Dawn mission provided detailed images, revealing diverse terrain and intriguing features.",
            "Ceres , the dwarf planet might have transient water vapor plumes periodically erupting from its surface.",
            "Ceres was named after the Roman goddess of agriculture, reflecting its nurturing location in the asteroid belt.",
            "Ongoing exploration aims to uncover more about Ceres' composition, history, and potential for harboring life."
          ],
          ioFacts: [
            "Io is the most volcanically active body in the solar system, with hundreds of active volcanoes.",
            "Io's surface is in constant flux due to ongoing volcanic eruptions, creating new features regularly.",
            "The surface of Io is dominated by sulfur and sulfur dioxide, giving Io varied colors like yellow, orange, red, and white.",
            "Surface temperatures on Io range from -202°F (-130°C) in shadowed areas to 2,420°F (1,327°C) near active volcanic vents on Io's surface.",
            "Intense tidal forces from Jupiter cause immense gravitational interactions, generating Io's volcanic activity.",
            "Volcanic eruptions on Io release sulfur and other gases, creating an ionosphere and massive plumes extending hundreds of miles above Io's surface.",
            "The terrain on Io features mountains, plains, and calderas, with Loki Patera as one of Io's prominent volcanic structures.",
            "The extreme volcanic activity on Io is primarily fueled by internal heating due to tidal forces from Jupiter affecting Io.",
            "Volcanoes on Io spew material high above Io's surface, shaping Io's thin atmosphere and contributing to Io's ever-changing landscape.",
            "Observations and studies of Io provide valuable insights into the nature of volcanic activity and extreme environments in our solar system."
          ],
          europaFacts:[
            "Europa is one of Jupiter's Galilean moons, known for its potential subsurface ocean.",
            "The surface of Europa appears smooth with few craters, indicating relative youth and continual renewal.",
            "Europa's smooth surface is primarily composed of water ice, possibly covering an ocean underneath.",
            "Tidal forces from Jupiter cause significant flexing and heating, maintaining Europa's subsurface ocean.",
            "The existence of a global subsurface ocean on Europa raises the possibility of habitable conditions.",
            "Europa's ocean may contain more than twice the water volume of Earth's oceans.",
            "Surface features on Europa include linear cracks known as 'lineae' and disrupted ice crust, indicating geologic activity.",
            "Exploration missions like NASA's Europa Clipper aim to study Europa's potential habitability by investigating its ice shell and subsurface ocean.",
            "Europa's magnetic field suggests the presence of a conductive layer, likely a salty ocean beneath its surface ice.",
            "Understanding Europa's conditions may provide insights into the search for extraterrestrial life beyond Earth."
          ],
          titanFacts: [
            "Titan is Saturn's largest moon and the second-largest moon in the solar system.",
            "Saturn's moon Titan is the only moon known to have a dense atmosphere, primarily composed of nitrogen.",
            "The surface of Saturn's moon Titan is obscured by a thick, hazy atmosphere, making it challenging to observe using visible light.",
            "Saturn's moon Titan hosts methane and ethane lakes and seas, making it the only known celestial body with stable liquid bodies on its surface besides Earth.",
            "Surface temperatures on Saturn's moon Titan average around -290°F (-179°C), contributing to the presence of liquid methane and ethane.",
            "The Huygens probe, part of the Cassini mission, landed on Saturn's moon Titan's surface in 2005, providing valuable data and images.",
            "The atmosphere of Saturn's moon Titan contains complex organic compounds, hinting at potential prebiotic chemistry.",
            "Saturn's moon Titan has diverse geographical features, including dunes, mountains, rivers, and vast plains.",
            "The dense atmosphere and hydrocarbon-rich surface of Saturn's moon Titan make it a subject of interest for further exploration.",
            "Studying Saturn's moon Titan provides insights into early Earth's conditions and the possibility of life in different environments."
          ],
          callistoFacts:[
            "Callisto, one of Jupiter's Galilean moons, is known for its heavily cratered surface.",
            "Callisto holds the distinction of being the most heavily cratered moon in the solar system, indicating a lack of geologic activity.",
            "The surface of Callisto is one of the oldest and most unchanged in the solar system.",
            "Features on Callisto's surface include impact craters, multi-ring structures, and relatively smooth plains.",
            "The surface of Callisto primarily comprises rock and ice, resembling Ganymede and other icy bodies.",
            "Callisto experiences less tidal heating compared to other Galilean moons due to its greater distance from Jupiter.",
            "Callisto possesses a thin atmosphere of carbon dioxide, significantly less dense than the atmospheres of other moons.",
            "As the outermost of Jupiter's Galilean moons and the second largest after Ganymede, Callisto is of great interest.",
            "Exploration missions, like NASA's Europa Clipper, aim to study Callisto's surface to gain insights into its geology and history.",
            "Callisto's unique characteristics provide valuable information about the history and evolution of the Jovian system."
          ],
          ganymedeFacts:[
            "Ganymede is the largest moon in the solar system, even larger than the planet Mercury.",
            "Ganymede is one of Jupiter's Galilean moons, known for its diverse terrain and icy surface.",
            "Ganymede possesses its own magnetic field, unique among moons, generated by a liquid iron core.",
            "The moon's surface exhibits grooves, ridges, craters, and dark regions hinting at complex geological history.",
            "Ganymede has both older, highly cratered areas and relatively younger, smoother regions due to resurfacing.",
            "Ganymede's surface is primarily composed of water ice and silicate rock, with some regions covered in frost.",
            "Ganymede harbors an underground ocean beneath its icy crust, possibly larger than all of Earth's oceans combined.",
            "Observations suggest that Ganymede's ocean might have more water than any other celestial body in our solar system.",
            "NASA's JUICE mission aims to explore Ganymede to understand its geology, ice shell, and subsurface ocean.",
            "Studying Ganymede provides insights into the evolution of icy moons and the potential for habitable environments."
          ]

    }
    
    
    
    
    
    
    //functions
    const handleselect = (plan) => {
        setthought(curiosityThoughts[Math.floor(Math.random() * curiosityThoughts.length)])
        switch (plan){
        case "Mercury":
            setplanet(plan)
            setfact(facts.mercuryFacts[Math.floor(Math.random() * facts.mercuryFacts.length)])
          break
        case "Venus":
            setplanet(plan)
            setfact(facts.venusFacts[Math.floor(Math.random() * facts.venusFacts.length)])
          break
        case "Earth":
            setplanet(plan)
            setfact(facts.earthFacts[Math.floor(Math.random() * facts.earthFacts.length)])
            break
        case "Mars":
            setplanet(plan)
            setfact(facts.marsFacts[Math.floor(Math.random() * facts.marsFacts.length)])
            break
        case "Jupiter":
            setplanet(plan)
            setfact(facts.jupiterFacts[Math.floor(Math.random() * facts.jupiterFacts.length)])
            break
        case "Saturn":
            setplanet(plan)
            setfact(facts.saturnFacts[Math.floor(Math.random() * facts.saturnFacts.length)])
            break
        case "Uranus":
            setplanet(plan)
            setfact(facts.uranusFacts[Math.floor(Math.random() * facts.uranusFacts.length)])
            break
        case "Neptune":
            setplanet(plan)
            setfact(facts.neptuneFacts[Math.floor(Math.random() * facts.neptuneFacts.length)])
            break
        case "Moon":
            setplanet(plan)
            setfact(facts.moonFacts[Math.floor(Math.random() * facts.moonFacts.length)])
            break
        case "Pluto":
            setplanet(plan)
            setfact(facts.plutoFacts[Math.floor(Math.random() * facts.plutoFacts.length)])
            break
        case "Eris":
            setplanet(plan)
            setfact(facts.erisFacts[Math.floor(Math.random() * facts.erisFacts.length)])
            break
        case "MakeMake":
            setplanet(plan)
            setfact(facts.makemakeFacts[Math.floor(Math.random() * facts.makemakeFacts.length)])
            break
        case "Haumea":
            setplanet(plan)
            setfact(facts.haumeaFacts[Math.floor(Math.random() * facts.haumeaFacts.length)])
            break
        case "Ceres":
            setplanet(plan)
            setfact(facts.ceresFacts[Math.floor(Math.random() * facts.ceresFacts.length)])
            break
        case "Io-Jupiter":
            setplanet(plan)
            setfact(facts.ioFacts[Math.floor(Math.random() * facts.ioFacts.length)])
            break
        case "Europa-Jupiter":
            setplanet(plan)
            setfact(facts.europaFacts[Math.floor(Math.random() * facts.europaFacts.length)])
            break
        case "Titan-Saturn":
            setplanet(plan)
            setfact(facts.titanFacts[Math.floor(Math.random() * facts.titanFacts.length)])
            break
        case "Callisto-Jupiter":
            setplanet(plan)
            setfact(facts.callistoFacts[Math.floor(Math.random() * facts.callistoFacts.length)])
            break
        case "Ganymede-Jupiter":
            setplanet(plan)
            setfact(facts.ganymedeFacts[Math.floor(Math.random() * facts.ganymedeFacts.length)])
            break  
        default:
          break
    }}
    
    
    //varaiables
    const [fact ,setfact] = useState('There are between 800 billion and 3.2 Billion Planets in just our Milky Way Galaxy. Some scientist even estimate the number as high as 8 Billion!😯😯')
    const [Planet , setplanet] = useState('Our Galaxy')
    
    
    
    //main method
    return(
        <div id="planet-facts-body">
        <Navbar Text={"Facts about different planets"}/>
        <Sidebar  handleButtonClick={handleselect}/>
        <div id="info">
            <h1 id="Planet-Name" style={{textDecoration:"underline"}}>{Planet}</h1>
            <p style={{textAlign : "left" , color : "wheat" , fontSize : "200%  "}}>Did you know,<p style={{fontSize : "75%" , color : "indigo" , textShadow : "1px 2px 3px white"}} id = "Planet-facts-mainframe">{fact}</p></p>
            <br/>
            <code>"{thought}"</code>
        </div>
        
        
        </div>
    )
}
export default PlanetFacts;