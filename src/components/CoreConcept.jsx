export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

{
  /*
  הוצאת הProps ולשים את האלמנטים, אפשר להוריד את הProps בתוך הפונקציה
function CoreConcept(image, title, description) {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
*/
}
