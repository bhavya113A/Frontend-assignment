// src/components/BarGraphWidget.js
import React from 'react';
import './BarGraphWidget.css'; // Make sure to create this CSS file for styling

const BarGraphWidget = ({ title, totalLabel, totalCount, data }) => {
  return (
    <div className="bar-graph-widget">
      <h3 className="bar-graph-title">{title}</h3>
      <p className="bar-graph-total">
        <strong>{totalCount}</strong> {totalLabel}
      </p>
      <div className="bar-graph-container">
        {data.map((item, index) => (
          <div key={index} className="bar-section" style={{ flex: item.percentage }}>
            <span className="bar-label">{item.label} ({item.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarGraphWidget;
