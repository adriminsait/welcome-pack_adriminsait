import Row from '../Row/Row'

function List(props) {
    return (
      <ul>
        {props.list.map((el) => (
          <Row key={el.id} text={el.text} />
        ))}
      </ul>
    );
}

export default List;

  