import * as React from 'react'

function Home() {
  const cards: Card[] = [
    {
      id: 1,
      title: 'Home',
      description: 'This is the home page',
    },
    {
      id: 2,
      title: 'Home',
      description: 'This is the home page',
    },
    {
      id: 3,
      title: 'Home',
      description: 'This is the home page',
    },
  ]

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Home }
