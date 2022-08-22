import classes from './AboutUs.module.css'

function AboutUs() {
  return (
    <div>
      <img
        src='http://dossombreros.co.uk/core/wp-content/uploads/2014/07/mexican-tequila-cocktail-bar-brighton.jpg'
        alt='About'
        width='auto'
        height='auto'
      />
      <br />
      <p className={classes.header}>
        <br />
        Dos Sombreros opened its doors in the spring of 2012 in the heart of the
        bustling south lanes of Brighton. In the autumn of 2013 we opened our
        ‘Day of the Dead’ themed tequila and cocktail bar above the restaurant.
        Containing original pieces of artwork from Jony Daga (check out his work
        in our gallery section). <br /> <br />
        Dos Sombreros tequila and cocktail bar opened on the third floor of our
        Mexican restaurant in November 2013. A perfect place to have drinks if
        you are waiting for friends to arrive, or a private party. We also offer
        tequila tastings and cocktail classes.
        <br /> <br />
        For reservations, kindly call us on 01273 911 455.
      </p>
    </div>
  )
}

export default AboutUs
