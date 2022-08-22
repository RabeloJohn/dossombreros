import Card from '../ui/Card'
import classes from './EspecialidadeItem.module.css'

function EspecialidadesItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.detailinfo}</address>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  )
}

export default EspecialidadesItem
