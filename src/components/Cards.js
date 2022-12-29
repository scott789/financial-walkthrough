import React from 'react'

const data = require('./data/questions.json');

export default function Cards() {
    return <div>
        {data.map(question => (
            <p key={question.id}>{question.title}</p>
        ))}
    </div>
}