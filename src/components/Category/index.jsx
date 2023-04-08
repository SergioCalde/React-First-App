import {Link} from 'wouter'

export default function Category({ name, options = [] }){
  return <div className=''>
    <h3 className='Categoty-title'>{ name }</h3>
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