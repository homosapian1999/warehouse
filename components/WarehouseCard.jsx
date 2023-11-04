import PropTypes from "prop-types";

const WarehouseCard = ({ warehouse }) => {
  console.log(warehouse.is_registered);
  return (
    <div className="card">
      <h3>{warehouse.name} </h3>
      <p>
        <strong>Code:</strong> {warehouse.code}
      </p>
      <p>
        <strong>City:</strong> {warehouse.city}
      </p>
      <p>
        <strong>Space Available:</strong> {warehouse.space_available}
      </p>
      <p>
        <strong>Cluster:</strong> {warehouse.cluster}
      </p>
      <p>
        <strong>Registered:</strong>{" "}
        {warehouse.is_registered + "" === "true" ? "Yes" : "No"}
      </p>
      <p>
        <strong>Live:</strong>{" "}
        {warehouse.is_live + "" === "true" ? "Yes" : "No"}
      </p>
      {/* <h2>Extra: {true} </h2> */}
    </div>
  );
};

WarehouseCard.propTypes = {
  warehouse: PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    space_available: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    cluster: PropTypes.string.isRequired,
    is_registered: PropTypes.bool.isRequired,
    is_live: PropTypes.bool.isRequired,
  }).isRequired,
};

export default WarehouseCard;
