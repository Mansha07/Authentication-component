import React, { useState } from 'react';
import './TeamMemberCard.css';

function TeamMemberCard({ member }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card" onClick={() => setIsExpanded(!isExpanded)}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            {isExpanded && <p>{member.description}</p>}
        </div>
    );
}

export default TeamMemberCard;