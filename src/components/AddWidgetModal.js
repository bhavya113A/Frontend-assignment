import React from 'react';
import './AddWidgetModal.css'; 
const AddWidgetModal = ({ show, onClose, selectedWidgets, setSelectedWidgets }) => {
  if (!show) return null; 

  const handleWidgetSelection = (widget) => {
    if (selectedWidgets.includes(widget)) {
      setSelectedWidgets(selectedWidgets.filter(w => w !== widget));
    } else {
      setSelectedWidgets([...selectedWidgets, widget]);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add Widget</h2>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <div className="modal-body">
          <p>Personalise your dashboard by adding the following widget:</p>
          <div className="widget-options">
            {['Cloud Accounts', 'Cloud Account Risk Assessment'].map(widget => (
              <label key={widget}>
                <input
                  type="checkbox"
                  checked={selectedWidgets.includes(widget)}
                  onChange={() => handleWidgetSelection(widget)}
                />
                {widget}
              </label>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => { onClose(); /* Add additional actions if needed */ }}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
