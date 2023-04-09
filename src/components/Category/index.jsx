import {Link} from 'wouter'
import './Category.css'

export default function Category({ name, options = [], ...props }){

  return <div className='{props.className}'>
    <h3 className='Categoty-title'>{ decodeURI(name) }</h3>
    <ul className='Category-list'>
      {options.map(( singleOption ) => (  
        <li key={ singleOption }>
          <Link 
            className='Category-link'
            to={`/search/${ singleOption }`}>
              { singleOption }
            </Link>
        </li>
      ))}
    </ul>
  </div>
}