import PropTypes from 'prop-types';

export const Section = ({title,children}) => {
  
  return (<div>
    {title && <title>{title}</title>}
    {children}
      </div> )
}