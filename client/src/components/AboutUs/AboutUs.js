// AboutUs.js
import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import './AboutUs.css'; 
import './TopBar.css';
import manshaImage from './Mansha_Batra.jpg';
import khushiImage from './khushi.jpg';
import poojitaImage from './poojita.jpg';
import aayuImage from './lavi01.png';

const teamMembers = [
    {
        name: 'Mansha Batra',
        image: manshaImage,
        description: '500083753, B.Tech CSE spl. Cloud Computing and Virtualization'
    },
    {
        name: 'Poojita Sagar Awasthi',
        image: poojitaImage,
        description: '500083292, B.Tech CSE(hons.) spl. Artificial Intelligence and Machine Learning'
    },
    {
        name: 'Khushi Arora',
        image: khushiImage,
        description: '500083384, B.Tech CSE spl. Cloud Computing and Virtualization'
    },
    {
        name: 'Aayushman Gusain',
        image: aayuImage,
        description: '500082980, B.Tech CSE(hons.) spl. Artificial Intelligence and Machine Learning'
    },
    // ... add more members as needed
];

function AboutUs() {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p> 💯 Welcome to our company. We specialize in providing multi disciplinary Exam Preparation platform 💯</p>
            <h2>Meet the Team</h2>
            <div className="team-container">
                {teamMembers.map(member => (
                    <TeamMemberCard key={member.name} member={member} />
                ))}
            </div>
        </div>
    );
}

export default AboutUs;