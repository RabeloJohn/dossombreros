import EspecialidadesItem from './EspecialidadeItem'
import classes from './EspecialidadeList.module.css'

function EspecialidadesList(props) {
  return (
    <ul className={classes.list}>
      {props.especs.map((espec) => (
        <EspecialidadesItem
          key={espec.id}
          id={espec.id}
          image={espec.image}
          title={espec.title}
          detailinfo={espec.detail}
          description={espec.description}
        />
      ))}
    </ul>
  )
}

export default EspecialidadesList
