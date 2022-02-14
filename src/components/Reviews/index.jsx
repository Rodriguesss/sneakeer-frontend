import { Review, Wrapper } from './style';

export default function Reviews() {
  const reviews = [
    {
      photo: 'https://images.unsplash.com/photo-1625181796571-7f0d4571ab12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80',
      name: 'Paulo',
      comment: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic corporis laborum, vel cumque libero nihil.",
    },
    {
      photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Gabi',
      comment:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis accusamus earum eligendi odit voluptatum ad.",
    },
    {
      photo: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Matheus',
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, voluptatibus eos aspernatur perspiciatis officiis dolorem.",
    },
    {
      photo: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'Alessandra',
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla cupiditate aspernatur. Dignissimos, perspiciatis fugit.",
    },
  ]

  return (
    <Wrapper>
      {
        reviews.map( review => (
          <Review>
            <img src={review.photo} />
            <span>{review.name}</span>
            <p>"{review.comment}"</p>
          </Review>
        ))
      }
    </Wrapper>
  )
}