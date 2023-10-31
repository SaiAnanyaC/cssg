const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="popup-close-button" onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Popup;