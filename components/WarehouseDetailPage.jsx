import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import WarehouseCard from "./WarehouseCard";
import { useEffect, useState } from "react";
import { updateWarehouse } from "../slices/warehouseSlice";
import { toast } from "react-toastify";

const WarehouseDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const warehouses = useSelector((state) => state.warehouses);
  const detailWarehouse = warehouses.find(
    (warehouse) => warehouse.id === parseInt(id)
  );
  const [editedDetails, setEditedDetails] = useState({ ...detailWarehouse });

  const handleEditDetail = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    const updatedFields = {
      id: editedDetails.id,
      name: editedDetails.name,
      cluster: editedDetails.cluster,
      city: editedDetails.city,
      space_available: editedDetails.space_available,
      is_live: editedDetails.is_live,
    };
    dispatch(updateWarehouse(updatedFields));
    setIsEditMode(false);
    toast.success("Edited sucessfully");
  };

  const handleBackClick = () => {
    navigate("/");
  };
  useEffect(() => {
    // Update the editedDetails whenever detailWarehouse changes
    setEditedDetails({ ...detailWarehouse });
  }, [detailWarehouse]);
  return (
    <div className="detail-container">
      {isEditMode ? (
        <div className="edit-form">
          <input
            type="text"
            value={editedDetails.name}
            onChange={(e) =>
              setEditedDetails({ ...editedDetails, name: e.target.value })
            }
          />

          <select
            value={editedDetails.city}
            onChange={(e) =>
              setEditedDetails({ ...editedDetails, city: e.target.value })
            }
          >
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Indore">Indore</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Guwahati">Guwahati</option>
          </select>

          {/* Select here */}
          <select
            value={editedDetails.cluster}
            onChange={(e) =>
              setEditedDetails({ ...editedDetails, cluster: e.target.value })
            }
          >
            <option value="">Select Cluster</option>
            <option value="cluster-a-32">cluster-a-32</option>
            <option value="cluster-a-1">cluster-a-1</option>
            <option value="cluster-a-21">cluster-a-21</option>
            <option value="cluster-a-2">cluster-a-2</option>
            <option value="cluster-v-2">cluster-v-2</option>
          </select>
          <label className="edit-label">Space Available</label>
          <input
            type="number"
            value={editedDetails.space_available}
            onChange={(e) =>
              setEditedDetails({
                ...editedDetails,
                space_available: parseInt(e.target.value),
              })
            }
          />
          {/* Select */}
          <label className="edit-label">Is Live:</label>
          <select
            className="label-select"
            value={editedDetails.is_live}
            onChange={(e) =>
              setEditedDetails({
                ...editedDetails,
                is_live: e.target.value === "true",
              })
            }
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>

          <button onClick={handleSaveClick} className="save-button">
            Save
          </button>
        </div>
      ) : (
        <div>
          <div className="card-link">
            {detailWarehouse && <WarehouseCard warehouse={detailWarehouse} />}
          </div>
          <button onClick={handleEditDetail} className="edit-button">
            Edit
          </button>
          <button
            onClick={handleBackClick}
            className="edit-button button-margin"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default WarehouseDetailPage;
