import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.webp';
import img7 from '../../assets/img7.webp';
import img8 from '../../assets/img8.webp';
import img9 from '../../assets/img9.webp';
import img10 from '../../assets/img10.webp';
import img11 from '../../assets/img11.webp';
import img12 from '../../assets/img12.webp';


interface destination {
    id: number,
    imgSrc: string,
    descTitle: string,
    location: string,
    grade: string,
    fees: string,
    description: string,
}

const destinations: destination[] = [
    {
        id: 1,
        imgSrc: img1,
        descTitle: 'Taj Mahal',
        location: 'Agra, India',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The Taj Mahal is an iconic white marble mausoleum built in the 17th century in Agra, India. It is famous for its unique architecture and stunning beauty.',
    },
    {
        id: 2,
        imgSrc: img2,
        descTitle: 'Machu Picchu',
        location: 'Cusco, Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Machu Picchu, the Incan citadel nestled in the Andes, is one of the most breathtaking destinations in the world. Its historical ruins and panoramic views captivate visitors.',
    },
    {
        id: 3,
        imgSrc: img3,
        descTitle: 'Roman Colosseum',
        location: 'Rome, Italy',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The Roman Colosseum, built in 80 AD, is an ancient amphitheater where public events were held. An iconic symbol of ancient Rome.',
    },
    {
        id: 4,
        imgSrc: img4,
        descTitle: 'The Great Wall of China',
        location: 'China',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'The Great Wall of China is an architectural wonder that stretches for thousands of kilometers. It offers stunning views and witnesses ancient Chinese history.',
    },
    {
        id: 5,
        imgSrc: img5,
        descTitle: 'Mont Saint-Michel Abbey',
        location: 'Normandy, France',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'Mont Saint-Michel is a historic sanctuary on a rocky island. Its medieval architecture and unique location make it a gem of Normandy.',
    },
    {
        id: 6,
        imgSrc: img6,
        descTitle: 'Sydney Opera House',
        location: 'Sydney, Australia',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The Sydney Opera House is a modern icon with its distinctive shell design. It offers cultural performances and a spectacular view of Sydney Harbor.',
    },
    {
        id: 7,
        imgSrc: img7,
        descTitle: 'Pyramids of Giza',
        location: 'Cairo, Egypt',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'The Pyramids of Giza are archaeological treasures dating back to ancient times. The Great Pyramid is an architectural marvel that has endured through time.',
    },
    {
        id: 8,
        imgSrc: img8,
        descTitle: 'Petra',
        location: 'Wadi Musa, Jordan',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'Petra is an ancient city carved into pink rock. Its stunning structures, including the Treasury, make it a unique archaeological site in Jordan\'s desert.',
    },
    {
        id: 9,
        imgSrc: img9,
        descTitle: 'Yellowstone National Park',
        location: 'Wyoming, United States',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Yellowstone is the world\'s first national park, known for its geysers, hot springs, and wildlife. A natural wonder in the heart of the United States.',
    },
    {
        id: 10,
        imgSrc: img10,
        descTitle: 'Angkor Wat',
        location: 'Siem Reap, Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: 'Angkor Wat is a complex of Hindu and Buddhist temples in Cambodia. Its impressive structures and reliefs narrate the story of the ancient Khmer civilization.',
    },
    {
        id: 11,
        imgSrc: img11,
        descTitle: 'Mount Everest',
        location: 'Himalayas, Nepal',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Mount Everest is the world\'s highest mountain and a challenge for climbers. Its majesty and natural beauty attract adventurers from around the world.',
    },
    {
        id: 12,
        imgSrc: img12,
        descTitle: 'Great Barrier Reef',
        location: 'Queensland, Australia',
        grade: 'CULTURAL RELAX',
        fees: '$650',
        description: 'The Great Barrier Reef is the world\'s largest coral reef, home to an incredible diversity of marine life. A must-visit destination for diving enthusiasts.',
    },
];

export default destinations;