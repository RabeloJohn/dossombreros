import EspecialidadesList from '../components/pagesaux/EspecialidadeList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'CHICKEN, CHORIZO AND MANGO SALAD (GF)',
    image:
      'https://img.delicious.com.au/iUjhTWqZ/w759-h506-cfill/del/2015/10/chicken-with-chorizo-mango-and-piquillo-salsa-14703-1.jpg',
    detail:
      'WARM CHORIZO AND CHICKEN WITH HOMEMADE MANGO SALSA, TOMATO, CUCUMBER, PEPPERS AND RED ONION ON A BED OF SALAD LEAVES WITH VINAIGRETTE DRESSING',
    description: 'Red wine vinegar, chorizo, pumpkin, feta cheese, potato',
  },
  {
    id: 'm2',
    title: 'Burrito',
    image:
      'https://thumbs.dreamstime.com/b/mexican-burrito-beef-beans-sour-cream-mexican-beef-burrito-142969025.jpg',
    detail:
      'A 12″ FLOUR TORTILLA FILLED WITH REFRIED BEANS, RICE, CHEESE AND YOUR CHOICE OF FILLING. WITH SALSA, GUACAMOLE AND SOUR CREAM',
    description:
      'CHICKEN • CHILLI CON CARNE • BLACK BEANS AND MIXED VEG • CHICKEN CHILLI CON CARNE• BLACK BEANS & MIXED VEG',
  },
  {
    id: 'm3',
    title: 'Enchilada',
    image: 'https://thumbs.dreamstime.com/b/enchilada-5634935.jpg',
    detail:
      'TWO 6” CORN TORTILLAS ROLLED AND FILLED WITH YOUR CHOICE OF FILLING TOPPED WITH HOMEMADE MOLE SAUCE AND TOASTED SESAME SEEDS. SERVED WITH RICE AND REFRIED BEANS.',
    description: ' CHICKEN CHILLI CON CARNE BLACK BEANS & MIXED VEG',
  },
  {
    id: 'm4',
    title: 'Tacos',
    image:
      'https://thumbs.dreamstime.com/b/spicy-shrimp-tacos-delicious-spicy-shrimp-tacos-shredded-cabbage-queso-fresco-jalapeno-pepper-168814584.jpg',
    detail:
      'THREE FLOUR TACOS FILLED WITH LETTUCE AND HOMEMADE SALSA AND YOUR CHOICE OF FILLING. SERVED WITH RICE AND REFRIED BEANS. GRILLED CHICKEN AND MANGO SALSA',
    description: 'BLACK BEANS, SOUR CREAM AND CHEESE (V)',
  },
  {
    id: 'm5',
    title: 'CHILLI CON CARNE (GF)',
    image: 'https://thumbs.dreamstime.com/b/chilli-con-carne-meal-5582561.jpg',
    detail:
      'WARM YOUR SOUL WITH OUR FIERY CHILLI CON CARNE SERVED IN TWO TACO BASKETS WITH RICE AND SOUR CREAM',
    description:
      'LEAN MINCED BEEF, CHOPPED MEDIUM ONIONS, DRIED OREGANO, TOMATO PURÉE',
  },
  {
    id: 'm6',
    title: 'PERUVIAN BEAN STEW (VEGAN, GF)',
    image:
      'https://thumbs.dreamstime.com/b/garbanzo-bean-chickpea-soup-typical-peruvian-dish-served-light-colored-bowl-68805671.jpg',
    detail:
      'MIXED BEANS, VEGETABLES, CHILLI AND CORIANDER STEW SERVED WITH WARM TORTILLAS OR RICE',
    description: 'GREEN BEANS, GARBANZO BEANS, BASMATI RICE',
  },
]

function Especialidades() {
  return (
    <section>
      <h1>Especialidades</h1>
      <EspecialidadesList especs={DUMMY_DATA} />
    </section>
  )
}

export default Especialidades
